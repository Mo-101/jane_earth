import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"

interface GDACSFeature {
  properties: {
    alertid?: string
    eventtype?: string
    eventname?: string
    name?: string
    alertlevel?: string
    country?: string
    fromdate?: string
    todate?: string
    description?: string
    url?: { report?: string }
    population?: { value?: number }
    severity?: { severitytext?: string }
  }
  geometry?: {
    coordinates?: number[]
  }
}

function mapAlertLevel(level: string): string {
  const l = (level || "").toLowerCase()
  if (l === "red" || l === "3") return "RED"
  if (l === "orange" || l === "2") return "ORANGE"
  if (l === "green" || l === "1") return "YELLOW"
  return "GREEN"
}

function mapEventType(type: string): string {
  const t = (type || "").toUpperCase()
  if (t.includes("TC") || t.includes("CYCLONE")) return "CYCLONE"
  if (t.includes("FL") || t.includes("FLOOD")) return "FLOOD"
  if (t.includes("EQ") || t.includes("EARTHQUAKE")) return "EARTHQUAKE"
  if (t.includes("VO") || t.includes("VOLCANO")) return "VOLCANO"
  if (t.includes("DR") || t.includes("DROUGHT")) return "DROUGHT"
  if (t.includes("WF") || t.includes("FIRE")) return "WILDFIRE"
  return "STORM"
}

function isInAfrica(feature: GDACSFeature): boolean {
  const country = feature.properties?.country || ""
  if (AFRICA_NAMES.has(country)) return true
  const coords = feature.geometry?.coordinates
  if (coords && coords.length >= 2) {
    return coords[1] >= -40 && coords[1] <= 40 && coords[0] >= -25 && coords[0] <= 55
  }
  return false
}

const AFRICA_NAMES = new Set([
  "Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon",
  "Cape Verde","Central African Republic","Chad","Comoros","DR Congo",
  "Republic of Congo","Ivory Coast","Djibouti","Egypt","Equatorial Guinea",
  "Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea",
  "Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi",
  "Mali","Mauritania","Mauritius","Morocco","Mozambique","Namibia","Niger",
  "Nigeria","Rwanda","Sao Tome and Principe","Senegal","Seychelles",
  "Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Tanzania",
  "Togo","Tunisia","Uganda","Zambia","Zimbabwe","Congo","Cote d'Ivoire",
  "Côte d'Ivoire","Democratic Republic of the Congo","United Republic of Tanzania",
  "Reunion","Mayotte",
])

export async function GET() {
  const startTime = Date.now()
  
  // If database not configured, just fetch and return data without storing
  const hasDb = isDbConfigured()
  const sql = hasDb ? getDb() : null

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000) // 15s timeout

    const response = await fetch(
      "https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH?alertlevel=Green;Orange;Red&eventlist=EQ,TC,FL,VO,DR,WF&limit=100",
      {
        headers: { Accept: "application/json" },
        signal: controller.signal,
        next: { revalidate: 300 },
      }
    )
    clearTimeout(timeout)

    if (!response.ok) throw new Error(`GDACS API returned ${response.status}`)

    const data = await response.json()
    const features: GDACSFeature[] = data?.features || []
    const africaFeatures = features.filter(isInAfrica)

    let inserted = 0
    let updated = 0

    // Only store in database if configured
    if (hasDb && sql) {
      for (const feature of africaFeatures) {
        const p = feature.properties
        const coords = feature.geometry?.coordinates
        const externalId = `GDACS-${p.alertid || p.eventname}`

        try {
          // Atomic upsert - no race conditions
          const result = await sql`
            INSERT INTO hazard_alerts (
              external_id, source, hazard_type, severity, title, description,
              country, latitude, longitude, event_start, event_end,
              is_active, population_affected, source_url
            ) VALUES (
              ${externalId}, 'GDACS', ${mapEventType(p.eventtype || "")},
              ${mapAlertLevel(p.alertlevel || "")},
              ${p.eventname || p.name || "Unknown Event"},
              ${p.description || null},
              ${p.country || null},
              ${coords ? coords[1] : null}, ${coords ? coords[0] : null},
              ${p.fromdate || null}, ${p.todate || null},
              true,
              ${p.population?.value || null},
              ${p.url?.report || null}
            )
            ON CONFLICT (external_id) DO UPDATE SET
              severity = EXCLUDED.severity,
              description = EXCLUDED.description,
              event_end = EXCLUDED.event_end,
              population_affected = EXCLUDED.population_affected,
              is_active = true,
              updated_at = NOW()
            RETURNING (xmax = 0) AS is_insert
          `
          if (result[0]?.is_insert) inserted++
          else updated++
        } catch {
          // Skip individual record errors - don't break the batch
        }
      }

      const elapsed = Date.now() - startTime
      await sql`
        INSERT INTO data_ingestion_log (source, endpoint, status, records_fetched, records_inserted, records_updated, response_time_ms, completed_at)
        VALUES ('GDACS', 'geteventlist', 'SUCCESS', ${africaFeatures.length}, ${inserted}, ${updated}, ${elapsed}, NOW())
      `
    }

    const elapsed = Date.now() - startTime
    return NextResponse.json({
      source: "GDACS", 
      total_fetched: features.length,
      africa_filtered: africaFeatures.length, 
      inserted, 
      updated, 
      elapsed_ms: elapsed,
      database_stored: hasDb,
      features: africaFeatures.map(f => ({
        type: f.properties.eventtype,
        name: f.properties.eventname || f.properties.name,
        severity: mapAlertLevel(f.properties.alertlevel || ""),
        country: f.properties.country,
        coordinates: f.geometry?.coordinates,
      })),
    })
  } catch (error) {
    const elapsed = Date.now() - startTime
    const errMsg = error instanceof Error ? error.message : "Unknown error"

    if (hasDb && sql) {
      await sql`
        INSERT INTO data_ingestion_log (source, endpoint, status, error_message, response_time_ms, completed_at)
        VALUES ('GDACS', 'geteventlist', 'ERROR', ${errMsg}, ${elapsed}, NOW())
      `.catch(() => {})
    }

    return NextResponse.json({ error: errMsg, source: "GDACS" }, { status: 500 })
  }
}
