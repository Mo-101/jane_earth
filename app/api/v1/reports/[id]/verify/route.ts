import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"

// POST /api/v1/reports/{id}/verify
// Body: { action: "VERIFIED" | "REJECTED", verified_by: string }
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const reportId = parseInt(id)

  if (isNaN(reportId)) {
    return NextResponse.json(
      { error: "Invalid report ID", type: "VALIDATION_ERROR" },
      { status: 400 }
    )
  }

  // Reject if database is not configured
  if (!isDbConfigured()) {
    return NextResponse.json(
      { error: "Database not configured. Verification is disabled.", type: "SERVICE_UNAVAILABLE" },
      { status: 503 }
    )
  }

  const sql = getDb()
  try {
    const body = await request.json()
    const { action, verified_by } = body

    if (!action || !["VERIFIED", "REJECTED"].includes(action)) {
      return NextResponse.json(
        { error: "action must be VERIFIED or REJECTED", type: "VALIDATION_ERROR" },
        { status: 400 }
      )
    }
    if (!verified_by || typeof verified_by !== "string") {
      return NextResponse.json(
        { error: "verified_by is required", type: "VALIDATION_ERROR" },
        { status: 400 }
      )
    }

    const existing = await sql`SELECT id, verification_status FROM community_reports WHERE id = ${reportId}`
    if (existing.length === 0) {
      return NextResponse.json(
        { error: "Report not found", type: "NOT_FOUND" },
        { status: 404 }
      )
    }

    await sql`
      UPDATE community_reports SET
        verification_status = ${action},
        verified_by = ${verified_by},
        verified_at = NOW(),
        updated_at = NOW()
      WHERE id = ${reportId}
    `

    // If verified, optionally promote to a hazard alert
    if (action === "VERIFIED") {
      const report = await sql`SELECT * FROM community_reports WHERE id = ${reportId}`
      const r = report[0]
      if (r && r.lat && r.lon) {
        await sql`
          INSERT INTO hazard_alerts (
            external_id, source, hazard_type, severity, title, description,
            country, region, latitude, longitude, is_active, population_affected
          ) VALUES (
            ${"COMMUNITY-" + reportId}, 'COMMUNITY', ${r.hazard_type},
            ${r.severity_estimate}, ${r.title}, ${r.description || null},
            ${r.country}, ${r.region || null}, ${r.lat}, ${r.lon},
            true, ${r.people_affected_estimate || null}
          ) ON CONFLICT (external_id) DO NOTHING
        `
      }
    }

    return NextResponse.json({
      id: reportId,
      verification_status: action,
      verified_by,
      promoted_to_alert: action === "VERIFIED",
    })
  } catch (error) {
    console.error("[API /v1/reports/verify] Database error:", error)
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg, type: "INTERNAL_ERROR" }, { status: 500 })
  }
}
