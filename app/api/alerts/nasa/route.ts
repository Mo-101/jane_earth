import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

interface EONETEvent {
  id: string
  title: string
  categories: Array<{ id: string; title: string }>
  geometry: Array<{ date: string; type: string; coordinates: number[] }>
  sources: Array<{ url: string }>
}

function mapCategory(categories: EONETEvent["categories"]): string {
  const cat = (categories?.[0]?.title || "").toLowerCase()
  if (cat.includes("wildfire") || cat.includes("fire")) return "WILDFIRE"
  if (cat.includes("flood")) return "FLOOD"
  if (cat.includes("cyclone") || cat.includes("storm") || cat.includes("hurricane")) return "CYCLONE"
  if (cat.includes("volcano")) return "VOLCANO"
  if (cat.includes("earthquake")) return "EARTHQUAKE"
  if (cat.includes("drought")) return "DROUGHT"
  if (cat.includes("landslide") || cat.includes("slide")) return "LANDSLIDE"
  return "STORM"
}

function isInAfrica(coords: number[]): boolean {
  if (!coords || coords.length < 2) return false
  return coords[1] >= -40 && coords[1] <= 40 && coords[0] >= -25 && coords[0] <= 55
}

export async function GET() {
  const startTime = Date.now()
  const sql = getDb()

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)

    const response = await fetch(
      "https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=200",
      { signal: controller.signal, next: { revalidate: 600 } }
    )
    clearTimeout(timeout)

    if (!response.ok) throw new Error(`NASA EONET API returned ${response.status}`)

    const data = await response.json()
    const events: EONETEvent[] = data?.events || []

    const africaEvents = events.filter((event) => {
      const lastGeo = event.geometry?.[event.geometry.length - 1]
      return lastGeo && isInAfrica(lastGeo.coordinates)
    })

    let inserted = 0
    let updated = 0

    for (const event of africaEvents) {
      const lastGeo = event.geometry[event.geometry.length - 1]
      const externalId = `NASA-${event.id}`

      try {
        const result = await sql`
          INSERT INTO hazard_alerts (
            external_id, source, hazard_type, severity, title, description,
            latitude, longitude, event_start, is_active, source_url
          ) VALUES (
            ${externalId}, 'NASA_EONET', ${mapCategory(event.categories)},
            'YELLOW',
            ${event.title},
            ${`NASA EONET: ${event.categories?.[0]?.title || "Natural Event"}`},
            ${lastGeo.coordinates[1]}, ${lastGeo.coordinates[0]},
            ${event.geometry[0]?.date || null},
            true,
            ${event.sources?.[0]?.url || null}
          )
          ON CONFLICT (external_id) DO UPDATE SET
            latitude = EXCLUDED.latitude,
            longitude = EXCLUDED.longitude,
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
      VALUES ('NASA_EONET', 'events', 'SUCCESS', ${africaEvents.length}, ${inserted}, ${updated}, ${elapsed}, NOW())
    `

    return NextResponse.json({
      source: "NASA_EONET", total_fetched: events.length,
      africa_filtered: africaEvents.length, inserted, updated, elapsed_ms: elapsed,
    })
  } catch (error) {
    const elapsed = Date.now() - startTime
    const errMsg = error instanceof Error ? error.message : "Unknown error"

    await sql`
      INSERT INTO data_ingestion_log (source, endpoint, status, error_message, response_time_ms, completed_at)
      VALUES ('NASA_EONET', 'events', 'ERROR', ${errMsg}, ${elapsed}, NOW())
    `.catch(() => {})

    return NextResponse.json({ error: errMsg, source: "NASA_EONET" }, { status: 500 })
  }
}
