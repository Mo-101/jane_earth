import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"

interface ReliefWebDisaster {
  id: number
  fields: {
    name: string
    description?: string
    status?: string
    country?: Array<{ name: string; iso3: string; location?: { lat: number; lon: number } }>
    type?: Array<{ name: string }>
    date?: { created: string }
    url?: string
  }
}

const AFRICA_ISO3 = new Set([
  "DZA","AGO","BEN","BWA","BFA","BDI","CMR","CPV","CAF","TCD","COM","COD",
  "COG","CIV","DJI","EGY","GNQ","ERI","SWZ","ETH","GAB","GMB","GHA","GIN",
  "GNB","KEN","LSO","LBR","LBY","MDG","MWI","MLI","MRT","MUS","MAR","MOZ",
  "NAM","NER","NGA","RWA","STP","SEN","SYC","SLE","SOM","ZAF","SSD","SDN",
  "TZA","TGO","TUN","UGA","ZMB","ZWE","REU","MYT",
])

function mapType(types: Array<{ name: string }> | undefined): string {
  const t = (types?.[0]?.name || "").toLowerCase()
  if (t.includes("flood")) return "FLOOD"
  if (t.includes("cyclone") || t.includes("storm") || t.includes("hurricane")) return "CYCLONE"
  if (t.includes("drought")) return "DROUGHT"
  if (t.includes("earthquake")) return "EARTHQUAKE"
  if (t.includes("volcano") || t.includes("eruption")) return "VOLCANO"
  if (t.includes("fire") || t.includes("wildfire")) return "WILDFIRE"
  if (t.includes("landslide") || t.includes("mudslide")) return "LANDSLIDE"
  return "STORM"
}

export async function GET() {
  const startTime = Date.now()
  
  // If database not configured, just fetch and return data without storing
  const hasDb = isDbConfigured()
  const sql = hasDb ? getDb() : null

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)

    const response = await fetch(
      "https://api.reliefweb.int/v1/disasters?appname=afrostorm&limit=100&filter[field]=status&filter[value]=current&fields[include][]=name&fields[include][]=description&fields[include][]=country&fields[include][]=type&fields[include][]=date&fields[include][]=status&fields[include][]=url&sort[]=date.created:desc",
      { signal: controller.signal, next: { revalidate: 900 } }
    )
    clearTimeout(timeout)

    if (!response.ok) throw new Error(`ReliefWeb API returned ${response.status}`)

    const data = await response.json()
    const disasters: ReliefWebDisaster[] = data?.data || []

    const africaDisasters = disasters.filter((d) =>
      (d.fields?.country || []).some((c) => AFRICA_ISO3.has(c.iso3))
    )

    let inserted = 0
    let updated = 0

    // Only store in database if configured
    if (hasDb && sql) {
      for (const disaster of africaDisasters) {
        const f = disaster.fields
        const externalId = `RELIEFWEB-${disaster.id}`
        const country = f.country?.[0]
        const location = country?.location

        try {
          const result = await sql`
            INSERT INTO hazard_alerts (
              external_id, source, hazard_type, severity, title, description,
              country, latitude, longitude, event_start, is_active, source_url
            ) VALUES (
              ${externalId}, 'RELIEFWEB', ${mapType(f.type)},
              'ORANGE',
              ${f.name || "Unknown Disaster"},
              ${f.description || null},
              ${country?.name || null},
              ${location?.lat || null}, ${location?.lon || null},
              ${f.date?.created || null},
              true,
              ${f.url || null}
            )
            ON CONFLICT (external_id) DO UPDATE SET
              description = EXCLUDED.description,
              is_active = true,
              updated_at = NOW()
            RETURNING (xmax = 0) AS is_insert
          `
          if (result[0]?.is_insert) inserted++
          else updated++
        } catch {
          // Skip individual errors
        }
      }

      const elapsed = Date.now() - startTime
      await sql`
        INSERT INTO data_ingestion_log (source, endpoint, status, records_fetched, records_inserted, records_updated, response_time_ms, completed_at)
        VALUES ('RELIEFWEB', 'disasters', 'SUCCESS', ${africaDisasters.length}, ${inserted}, ${updated}, ${elapsed}, NOW())
      `
    }

    const elapsed = Date.now() - startTime
    return NextResponse.json({
      source: "RELIEFWEB", 
      total_fetched: disasters.length,
      africa_filtered: africaDisasters.length, 
      inserted, 
      updated, 
      elapsed_ms: elapsed,
      database_stored: hasDb,
      disasters: africaDisasters.map(d => ({
        id: d.id,
        name: d.fields.name,
        type: mapType(d.fields.type),
        country: d.fields.country?.[0]?.name,
      })),
    })
  } catch (error) {
    const elapsed = Date.now() - startTime
    const errMsg = error instanceof Error ? error.message : "Unknown error"

    if (hasDb && sql) {
      await sql`
        INSERT INTO data_ingestion_log (source, endpoint, status, error_message, response_time_ms, completed_at)
        VALUES ('RELIEFWEB', 'disasters', 'ERROR', ${errMsg}, ${elapsed}, NOW())
      `.catch(() => {})
    }

    return NextResponse.json({ error: errMsg, source: "RELIEFWEB" }, { status: 500 })
  }
}
