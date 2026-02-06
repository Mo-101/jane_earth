import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

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
  "TZA","TGO","TUN","UGA","ZMB","ZWE","REU","MYT"
])

function mapReliefWebType(types: Array<{ name: string }> | undefined): string {
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
  const sql = getDb()

  try {
    const response = await fetch(
      "https://api.reliefweb.int/v1/disasters?appname=afrostorm&limit=100&filter[field]=status&filter[value]=current&fields[include][]=name&fields[include][]=description&fields[include][]=country&fields[include][]=type&fields[include][]=date&fields[include][]=status&fields[include][]=url&sort[]=date.created:desc",
      { next: { revalidate: 900 } }
    )

    if (!response.ok) {
      throw new Error(`ReliefWeb API returned ${response.status}`)
    }

    const data = await response.json()
    const disasters: ReliefWebDisaster[] = data?.data || []

    const africaDisasters = disasters.filter((d) => {
      const countries = d.fields?.country || []
      return countries.some((c) => AFRICA_ISO3.has(c.iso3))
    })

    let inserted = 0

    for (const disaster of africaDisasters) {
      const f = disaster.fields
      const externalId = `RELIEFWEB-${disaster.id}`
      const country = f.country?.[0]
      const location = country?.location

      try {
        const existing = await sql`
          SELECT id FROM hazard_alerts WHERE external_id = ${externalId}
        `

        if (existing.length === 0) {
          await sql`
            INSERT INTO hazard_alerts (
              external_id, source, hazard_type, severity, title, description,
              country, latitude, longitude, event_start, is_active, source_url
            ) VALUES (
              ${externalId}, 'RELIEFWEB', ${mapReliefWebType(f.type)},
              'ORANGE',
              ${f.name || "Unknown Disaster"},
              ${f.description || null},
              ${country?.name || null},
              ${location?.lat || null}, ${location?.lon || null},
              ${f.date?.created || null},
              true,
              ${f.url || null}
            )
          `
          inserted++
        }
      } catch {
        // Skip individual errors
      }
    }

    const elapsed = Date.now() - startTime
    await sql`
      INSERT INTO data_ingestion_log (source, endpoint, status, records_fetched, records_inserted, response_time_ms, completed_at)
      VALUES ('RELIEFWEB', 'disasters', 'SUCCESS', ${africaDisasters.length}, ${inserted}, ${elapsed}, NOW())
    `

    return NextResponse.json({
      source: "RELIEFWEB",
      total_fetched: disasters.length,
      africa_filtered: africaDisasters.length,
      inserted,
      elapsed_ms: elapsed,
    })
  } catch (error) {
    const elapsed = Date.now() - startTime
    const errMsg = error instanceof Error ? error.message : "Unknown error"

    await sql`
      INSERT INTO data_ingestion_log (source, endpoint, status, error_message, response_time_ms, completed_at)
      VALUES ('RELIEFWEB', 'disasters', 'ERROR', ${errMsg}, ${elapsed}, NOW())
    `.catch(() => {})

    return NextResponse.json({ error: errMsg, source: "RELIEFWEB" }, { status: 500 })
  }
}
