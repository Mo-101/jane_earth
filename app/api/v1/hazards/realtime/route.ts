import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"
import { mockAlerts } from "@/lib/mock-data"

// Returns active hazards as GeoJSON FeatureCollection
// GET /api/v1/hazards/realtime?severity=RED&type=FLOOD&country=Kenya&limit=200
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const severity = searchParams.get("severity")
  const hazardType = searchParams.get("type")
  const country = searchParams.get("country")
  const source = searchParams.get("source")
  const limit = Math.min(parseInt(searchParams.get("limit") || "200"), 1000)

  // Use mock data if database is not configured
  if (!isDbConfigured()) {
    console.log("[API /v1/hazards/realtime] Using mock data (DATABASE_URL not set)")
    
    let alerts = mockAlerts.filter(a => a.is_active && a.latitude && a.longitude)
    
    if (severity) alerts = alerts.filter(a => a.severity === severity)
    if (hazardType) alerts = alerts.filter(a => a.hazard_type === hazardType)
    if (country) alerts = alerts.filter(a => a.country?.toLowerCase() === country.toLowerCase())
    if (source) alerts = alerts.filter(a => a.source === source)
    
    alerts = alerts.slice(0, limit)

    const geojson = {
      type: "FeatureCollection" as const,
      metadata: {
        generated_at: new Date().toISOString(),
        total_features: alerts.length,
        api_version: "1.0.0",
        filters_applied: {
          severity: severity || "all",
          type: hazardType || "all",
          country: country || "all",
          source: source || "all",
        },
        source: "mock",
      },
      features: alerts.map((alert) => ({
        type: "Feature" as const,
        id: alert.id,
        geometry: {
          type: "Point" as const,
          coordinates: [alert.longitude, alert.latitude],
        },
        properties: {
          id: alert.id,
          external_id: alert.external_id,
          source: alert.source,
          hazard_type: alert.hazard_type,
          severity: alert.severity,
          title: alert.title,
          description: alert.description,
          country: alert.country,
          region: alert.region,
          event_start: alert.event_start,
          event_end: alert.event_end,
          population_affected: alert.population_affected,
          source_url: alert.source_url,
          created_at: alert.created_at,
          updated_at: alert.updated_at,
        },
      })),
    }

    return NextResponse.json(geojson, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        "Content-Type": "application/geo+json",
      },
    })
  }

  const sql = getDb()

  try {
    // Build parameterized query - Neon tagged templates handle injection safety
    const alerts = await sql`
      SELECT
        id, external_id, source, hazard_type, severity, title, description,
        country, region, latitude, longitude, event_start, event_end,
        is_active, population_affected, source_url, created_at, updated_at
      FROM hazard_alerts
      WHERE is_active = true
        AND (${severity}::text IS NULL OR severity = ${severity})
        AND (${hazardType}::text IS NULL OR hazard_type = ${hazardType})
        AND (${country}::text IS NULL OR country = ${country})
        AND (${source}::text IS NULL OR source = ${source})
        AND latitude IS NOT NULL
        AND longitude IS NOT NULL
      ORDER BY
        CASE severity
          WHEN 'RED' THEN 1
          WHEN 'ORANGE' THEN 2
          WHEN 'YELLOW' THEN 3
          WHEN 'GREEN' THEN 4
        END,
        created_at DESC
      LIMIT ${limit}
    `

    // Convert to GeoJSON FeatureCollection
    const geojson = {
      type: "FeatureCollection" as const,
      metadata: {
        generated_at: new Date().toISOString(),
        total_features: alerts.length,
        api_version: "1.0.0",
        filters_applied: {
          severity: severity || "all",
          type: hazardType || "all",
          country: country || "all",
          source: source || "all",
        },
        source: "database",
      },
      features: alerts.map((alert: any) => ({
        type: "Feature" as const,
        id: alert.id,
        geometry: {
          type: "Point" as const,
          coordinates: [alert.longitude, alert.latitude],
        },
        properties: {
          id: alert.id,
          external_id: alert.external_id,
          source: alert.source,
          hazard_type: alert.hazard_type,
          severity: alert.severity,
          title: alert.title,
          description: alert.description,
          country: alert.country,
          region: alert.region,
          event_start: alert.event_start,
          event_end: alert.event_end,
          population_affected: alert.population_affected,
          source_url: alert.source_url,
          created_at: alert.created_at,
          updated_at: alert.updated_at,
        },
      })),
    }

    return NextResponse.json(geojson, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        "Content-Type": "application/geo+json",
      },
    })
  } catch (error) {
    console.error("[API /v1/hazards/realtime] Database error:", error)
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      { error: errMsg, type: "INTERNAL_ERROR" },
      { status: 500 }
    )
  }
}
