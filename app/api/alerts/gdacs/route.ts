import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

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

function mapGDACSAlertLevel(level: string): string {
  const l = (level || "").toLowerCase()
  if (l === "red" || l === "3") return "RED"
  if (l === "orange" || l === "2") return "ORANGE"
  if (l === "green" || l === "1") return "YELLOW"
  return "GREEN"
}

function mapGDACSEventType(type: string): string {
  const t = (type || "").toUpperCase()
  if (t.includes("TC") || t.includes("CYCLONE")) return "CYCLONE"
  if (t.includes("FL") || t.includes("FLOOD")) return "FLOOD"
  if (t.includes("EQ") || t.includes("EARTHQUAKE")) return "EARTHQUAKE"
  if (t.includes("VO") || t.includes("VOLCANO")) return "VOLCANO"
  if (t.includes("DR") || t.includes("DROUGHT")) return "DROUGHT"
  if (t.includes("WF") || t.includes("FIRE")) return "WILDFIRE"
  return "STORM"
}

const AFRICA_COUNTRIES = new Set([
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
  "South Africa","Reunion","Mayotte"
])

function isAfricaRelated(feature: GDACSFeature): boolean {
  const country = feature.properties?.country || ""
  if (AFRICA_COUNTRIES.has(country)) return true
  const coords = feature.geometry?.coordinates
  if (coords && coords.length >= 2) {
    const lon = coords[0]
    const lat = coords[1]
    return lat >= -40 && lat <= 40 && lon >= -25 && lon <= 55
  }
  return false
}

export async function GET() {
  const startTime = Date.now()
  const sql = getDb()

  try {
    const response = await fetch(
      "https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH?alertlevel=Green;Orange;Red&eventlist=EQ,TC,FL,VO,DR,WF&limit=100",
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
      }
    )

    if (!response.ok) {
      throw new Error(`GDACS API returned ${response.status}`)
    }

    const data = await response.json()
    const features: GDACSFeature[] = data?.features || []
    const africaFeatures = features.filter(isAfricaRelated)

    let inserted = 0
    let updated = 0

    for (const feature of africaFeatures) {
      const p = feature.properties
      const coords = feature.geometry?.coordinates
      const externalId = `GDACS-${p.alertid || p.eventname}`

      try {
        const existing = await sql`
          SELECT id FROM hazard_alerts WHERE external_id = ${externalId}
        `

        if (existing.length > 0) {
          await sql`
            UPDATE hazard_alerts SET
              severity = ${mapGDACSAlertLevel(p.alertlevel || "")},
              description = ${p.description || null},
              is_active = true,
              updated_at = NOW()
            WHERE external_id = ${externalId}
          `
          updated++
        } else {
          await sql`
            INSERT INTO hazard_alerts (
              external_id, source, hazard_type, severity, title, description,
              country, latitude, longitude, event_start, event_end,
              is_active, population_affected, source_url
            ) VALUES (
              ${externalId}, 'GDACS', ${mapGDACSEventType(p.eventtype || "")},
              ${mapGDACSAlertLevel(p.alertlevel || "")},
              ${p.eventname || p.name || "Unknown Event"},
              ${p.description || null},
              ${p.country || null},
              ${coords ? coords[1] : null}, ${coords ? coords[0] : null},
              ${p.fromdate || null}, ${p.todate || null},
              true,
              ${p.population?.value || null},
              ${p.url?.report || null}
            )
          `
          inserted++
        }
      } catch {
        // Skip individual record errors
      }
    }

    const elapsed = Date.now() - startTime
    await sql`
      INSERT INTO data_ingestion_log (source, endpoint, status, records_fetched, records_inserted, records_updated, response_time_ms, completed_at)
      VALUES ('GDACS', 'geteventlist', 'SUCCESS', ${africaFeatures.length}, ${inserted}, ${updated}, ${elapsed}, NOW())
    `

    return NextResponse.json({
      source: "GDACS",
      total_fetched: features.length,
      africa_filtered: africaFeatures.length,
      inserted,
      updated,
      elapsed_ms: elapsed,
    })
  } catch (error) {
    const elapsed = Date.now() - startTime
    const errMsg = error instanceof Error ? error.message : "Unknown error"

    await sql`
      INSERT INTO data_ingestion_log (source, endpoint, status, error_message, response_time_ms, completed_at)
      VALUES ('GDACS', 'geteventlist', 'ERROR', ${errMsg}, ${elapsed}, NOW())
    `.catch(() => {})

    return NextResponse.json({ error: errMsg, source: "GDACS" }, { status: 500 })
  }
}
