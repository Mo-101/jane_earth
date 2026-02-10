import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"
import { mockAlerts } from "@/lib/mock-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const severity = searchParams.get("severity")
  const hazardType = searchParams.get("hazard_type")
  const country = searchParams.get("country")
  const activeOnly = searchParams.get("active") !== "false"
  const limit = Math.min(parseInt(searchParams.get("limit") || "100"), 500)

  // Use mock data if database is not configured
  if (!isDbConfigured()) {
    console.log("[API /alerts] Using mock data (DATABASE_URL not set)")
    
    let alerts = mockAlerts
    
    if (activeOnly) {
      alerts = alerts.filter(a => a.is_active)
    }
    if (severity) {
      alerts = alerts.filter(a => a.severity === severity)
    }
    if (hazardType) {
      alerts = alerts.filter(a => a.hazard_type === hazardType)
    }
    if (country) {
      alerts = alerts.filter(a => a.country?.toLowerCase() === country.toLowerCase())
    }
    
    // Sort by severity and limit
    const severityOrder = { RED: 1, ORANGE: 2, YELLOW: 3, GREEN: 4 }
    alerts = alerts
      .sort((a, b) => (severityOrder[a.severity as keyof typeof severityOrder] || 5) - (severityOrder[b.severity as keyof typeof severityOrder] || 5))
      .slice(0, limit)

    return NextResponse.json({
      count: alerts.length,
      alerts,
      source: "mock",
    })
  }

  const sql = getDb()

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
      source: "database",
    })
  } catch (error) {
    console.error("[API /alerts] Database error:", error)
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg }, { status: 500 })
  }
}
