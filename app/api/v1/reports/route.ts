import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"
import { mockReports } from "@/lib/mock-data"

const VALID_HAZARDS = new Set(["FLOOD","DROUGHT","CYCLONE","LANDSLIDE","EARTHQUAKE","WILDFIRE","VOLCANO","STORM"])
const VALID_SEVERITIES = new Set(["GREEN","YELLOW","ORANGE","RED"])

// GET /api/v1/reports - list reports as GeoJSON
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status") || "all"
  const limit = Math.min(parseInt(searchParams.get("limit") || "100"), 500)

  // Use mock data if database is not configured
  if (!isDbConfigured()) {
    console.log("[API /v1/reports] Using mock data (DATABASE_URL not set)")
    
    let reports = mockReports.filter(r => r.is_active)
    if (status !== "all") {
      reports = reports.filter(r => r.verification_status === status.toUpperCase())
    }
    reports = reports.slice(0, limit)

    const geojson = {
      type: "FeatureCollection" as const,
      metadata: { total: reports.length, filter: status, api_version: "1.0.0", source: "mock" },
      features: reports
        .filter((r) => r.lat && r.lon)
        .map((r) => ({
          type: "Feature" as const,
          id: r.id,
          geometry: { type: "Point" as const, coordinates: [r.lon, r.lat] },
          properties: {
            id: r.id, report_type: r.report_type, hazard_type: r.hazard_type,
            severity_estimate: r.severity_estimate, title: r.title,
            description: r.description, country: r.country, region: r.region,
            locality: r.locality, verification_status: r.verification_status,
            people_affected_estimate: r.people_affected_estimate,
            reported_at: r.reported_at,
          },
        })),
    }

    return NextResponse.json(geojson, { headers: { "Content-Type": "application/geo+json" } })
  }

  const sql = getDb()
  try {
    const reports = status === "all"
      ? await sql`SELECT * FROM community_reports WHERE is_active = true ORDER BY reported_at DESC LIMIT ${limit}`
      : await sql`SELECT * FROM community_reports WHERE is_active = true AND verification_status = ${status.toUpperCase()} ORDER BY reported_at DESC LIMIT ${limit}`

    const geojson = {
      type: "FeatureCollection" as const,
      metadata: { total: reports.length, filter: status, api_version: "1.0.0", source: "database" },
      features: reports
        .filter((r: any) => r.lat && r.lon)
        .map((r: any) => ({
          type: "Feature" as const,
          id: r.id,
          geometry: { type: "Point" as const, coordinates: [r.lon, r.lat] },
          properties: {
            id: r.id, report_type: r.report_type, hazard_type: r.hazard_type,
            severity_estimate: r.severity_estimate, title: r.title,
            description: r.description, country: r.country, region: r.region,
            locality: r.locality, verification_status: r.verification_status,
            people_affected_estimate: r.people_affected_estimate,
            reported_at: r.reported_at,
          },
        })),
    }

    return NextResponse.json(geojson, { headers: { "Content-Type": "application/geo+json" } })
  } catch (error) {
    console.error("[API /v1/reports] Database error:", error)
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg, type: "INTERNAL_ERROR" }, { status: 500 })
  }
}

// POST /api/v1/reports - submit community report
export async function POST(request: Request) {
  // Reject submissions if database is not configured
  if (!isDbConfigured()) {
    return NextResponse.json(
      { error: "Database not configured. Report submission is disabled.", type: "SERVICE_UNAVAILABLE" },
      { status: 503 }
    )
  }

  const sql = getDb()
  try {
    const body = await request.json()
    const errors: string[] = []

    // Strict validation
    if (!body.report_type || typeof body.report_type !== "string") errors.push("report_type is required (string)")
    if (!body.hazard_type || !VALID_HAZARDS.has(body.hazard_type)) errors.push(`hazard_type must be one of: ${Array.from(VALID_HAZARDS).join(", ")}`)
    if (!body.title || typeof body.title !== "string" || body.title.length < 5) errors.push("title is required (min 5 chars)")
    if (!body.country || typeof body.country !== "string") errors.push("country is required")
    if (body.severity_estimate && !VALID_SEVERITIES.has(body.severity_estimate)) errors.push(`severity_estimate must be one of: ${Array.from(VALID_SEVERITIES).join(", ")}`)
    if (body.lat != null && (body.lat < -40 || body.lat > 40)) errors.push("lat must be within Africa bounds (-40 to 40)")
    if (body.lon != null && (body.lon < -25 || body.lon > 55)) errors.push("lon must be within Africa bounds (-25 to 55)")

    if (errors.length > 0) {
      return NextResponse.json({ errors, type: "VALIDATION_ERROR" }, { status: 400 })
    }

    const result = await sql`
      INSERT INTO community_reports (
        report_type, hazard_type, severity_estimate, title, description,
        reporter_name, reporter_contact, reporter_organization,
        country, region, locality, lat, lon,
        people_affected_estimate, infrastructure_damage, immediate_needs
      ) VALUES (
        ${body.report_type}, ${body.hazard_type}, ${body.severity_estimate || "YELLOW"},
        ${body.title}, ${body.description || null},
        ${body.reporter_name || null}, ${body.reporter_contact || null}, ${body.reporter_organization || null},
        ${body.country}, ${body.region || null}, ${body.locality || null},
        ${body.lat || null}, ${body.lon || null},
        ${body.people_affected_estimate || null}, ${body.infrastructure_damage || null}, ${body.immediate_needs || null}
      ) RETURNING id, created_at
    `

    return NextResponse.json(
      { id: result[0].id, created_at: result[0].created_at, status: "UNVERIFIED" },
      { status: 201 }
    )
  } catch (error) {
    console.error("[API /v1/reports] Database error:", error)
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg, type: "INTERNAL_ERROR" }, { status: 500 })
  }
}
