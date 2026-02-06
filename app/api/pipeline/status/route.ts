import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export async function GET() {
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
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg }, { status: 500 })
  }
}
