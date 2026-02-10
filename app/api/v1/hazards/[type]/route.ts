import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"
import { mockAlerts } from "@/lib/mock-data"

const VALID_TYPES = new Set([
  "FLOOD", "DROUGHT", "CYCLONE", "LANDSLIDE",
  "EARTHQUAKE", "WILDFIRE", "VOLCANO", "STORM",
])

// GET /api/v1/hazards/FLOOD
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params
  const hazardType = type.toUpperCase()

  if (!VALID_TYPES.has(hazardType)) {
    return NextResponse.json(
      {
        error: `Invalid hazard type: ${type}`,
        valid_types: Array.from(VALID_TYPES),
        type: "VALIDATION_ERROR",
      },
      { status: 400 }
    )
  }

  // Use mock data if database is not configured
  if (!isDbConfigured()) {
    console.log(`[API /v1/hazards/${type}] Using mock data (DATABASE_URL not set)`)
    
    const alerts = mockAlerts.filter(
      a => a.is_active && a.hazard_type === hazardType && a.latitude && a.longitude
    )

    const geojson = {
      type: "FeatureCollection" as const,
      metadata: {
        hazard_type: hazardType,
        total_features: alerts.length,
        generated_at: new Date().toISOString(),
        api_version: "1.0.0",
        source: "mock",
      },
      features: alerts.map((a) => ({
        type: "Feature" as const,
        id: a.id,
        geometry: { type: "Point" as const, coordinates: [a.longitude, a.latitude] },
        properties: {
          id: a.id, source: a.source, severity: a.severity,
          title: a.title, country: a.country,
          event_start: a.event_start, population_affected: a.population_affected,
          source_url: a.source_url,
        },
      })),
    }

    return NextResponse.json(geojson, {
      headers: { "Content-Type": "application/geo+json" },
    })
  }

  const sql = getDb()
  try {
    const alerts = await sql`
      SELECT * FROM hazard_alerts
      WHERE is_active = true
        AND hazard_type = ${hazardType}
        AND latitude IS NOT NULL AND longitude IS NOT NULL
      ORDER BY
        CASE severity WHEN 'RED' THEN 1 WHEN 'ORANGE' THEN 2 WHEN 'YELLOW' THEN 3 WHEN 'GREEN' THEN 4 END,
        created_at DESC
      LIMIT 200
    `

    const geojson = {
      type: "FeatureCollection" as const,
      metadata: {
        hazard_type: hazardType,
        total_features: alerts.length,
        generated_at: new Date().toISOString(),
        api_version: "1.0.0",
        source: "database",
      },
      features: alerts.map((a: any) => ({
        type: "Feature" as const,
        id: a.id,
        geometry: { type: "Point" as const, coordinates: [a.longitude, a.latitude] },
        properties: {
          id: a.id, source: a.source, severity: a.severity,
          title: a.title, country: a.country,
          event_start: a.event_start, population_affected: a.population_affected,
          source_url: a.source_url,
        },
      })),
    }

    return NextResponse.json(geojson, {
      headers: { "Content-Type": "application/geo+json" },
    })
  } catch (error) {
    console.error(`[API /v1/hazards/${type}] Database error:`, error)
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg, type: "INTERNAL_ERROR" }, { status: 500 })
  }
}
