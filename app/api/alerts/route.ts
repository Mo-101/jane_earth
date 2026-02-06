import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export async function GET(request: Request) {
  const sql = getDb()
  const { searchParams } = new URL(request.url)

  const severity = searchParams.get("severity")
  const hazardType = searchParams.get("hazard_type")
  const country = searchParams.get("country")
  const activeOnly = searchParams.get("active") !== "false"
  const limit = Math.min(parseInt(searchParams.get("limit") || "100"), 500)

  try {
    let alerts

    if (severity && hazardType) {
      alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
          AND severity = ${severity}
          AND hazard_type = ${hazardType}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `
    } else if (severity) {
      alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
          AND severity = ${severity}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `
    } else if (hazardType) {
      alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
          AND hazard_type = ${hazardType}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `
    } else if (country) {
      alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
          AND country = ${country}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `
    } else {
      alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
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
    }

    return NextResponse.json({
      count: alerts.length,
      alerts,
    })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg }, { status: 500 })
  }
}
