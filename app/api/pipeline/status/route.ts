import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"
import { mockPipelineStatus } from "@/lib/mock-data"

export async function GET() {
  // Use mock data if database is not configured
  if (!isDbConfigured()) {
    console.log("[API /pipeline/status] Using mock data (DATABASE_URL not set)")
    return NextResponse.json(mockPipelineStatus)
  }

  const sql = getDb()
  try {
    const latestBySource = await sql`
      SELECT DISTINCT ON (source)
        source, status, records_fetched, records_inserted, records_updated,
        error_message, response_time_ms, started_at, completed_at
      FROM data_ingestion_log
      ORDER BY source, started_at DESC
    `

    const alertCounts = await sql`
      SELECT
        severity,
        COUNT(*) as count
      FROM hazard_alerts
      WHERE is_active = true
      GROUP BY severity
      ORDER BY
        CASE severity
          WHEN 'RED' THEN 1
          WHEN 'ORANGE' THEN 2
          WHEN 'YELLOW' THEN 3
          WHEN 'GREEN' THEN 4
        END
    `

    const hazardCounts = await sql`
      SELECT
        hazard_type,
        COUNT(*) as count
      FROM hazard_alerts
      WHERE is_active = true
      GROUP BY hazard_type
      ORDER BY count DESC
    `

    const totalAlerts = await sql`
      SELECT COUNT(*) as total FROM hazard_alerts WHERE is_active = true
    `

    return NextResponse.json({
      pipeline: latestBySource,
      summary: {
        total_active_alerts: parseInt(totalAlerts[0]?.total || "0"),
        by_severity: alertCounts,
        by_hazard_type: hazardCounts,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[API /pipeline/status] Database error:", error)
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg }, { status: 500 })
  }
}
