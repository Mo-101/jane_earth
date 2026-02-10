import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"
import { mockPipelineStatus } from "@/lib/mock-data"

export const dynamic = "force-dynamic"

export async function GET() {
  // Use mock data if database is not configured
  if (!isDbConfigured()) {
    console.log("[API /v1/pipeline/status] Using mock data (DATABASE_URL not set)")
    return NextResponse.json({
      ...mockPipelineStatus,
      sources: [
        {
          source: "GDACS",
          last_fetched_at: new Date(Date.now() - 300000).toISOString(),
          last_event_time: null,
          total_lifetime_fetches: 150,
          consecutive_errors: 0,
          backoff_until: null,
          latest_ingest: {
            status: "SUCCESS",
            records_fetched: 45,
            records_inserted: 2,
            records_updated: 3,
            response_time_ms: 2345,
            error: null,
            completed_at: new Date(Date.now() - 297000).toISOString(),
          },
        },
        {
          source: "NASA_EONET",
          last_fetched_at: new Date(Date.now() - 600000).toISOString(),
          last_event_time: null,
          total_lifetime_fetches: 89,
          consecutive_errors: 0,
          backoff_until: null,
          latest_ingest: {
            status: "SUCCESS",
            records_fetched: 120,
            records_inserted: 1,
            records_updated: 0,
            response_time_ms: 1890,
            error: null,
            completed_at: new Date(Date.now() - 598000).toISOString(),
          },
        },
        {
          source: "RELIEFWEB",
          last_fetched_at: new Date(Date.now() - 900000).toISOString(),
          last_event_time: null,
          total_lifetime_fetches: 67,
          consecutive_errors: 0,
          backoff_until: null,
          latest_ingest: {
            status: "SUCCESS",
            records_fetched: 25,
            records_inserted: 0,
            records_updated: 1,
            response_time_ms: 3100,
            error: null,
            completed_at: new Date(Date.now() - 897000).toISOString(),
          },
        },
      ],
    })
  }

  const sql = getDb()
  try {
    const [watermarks, latestIngests, alertStats] = await Promise.all([
      sql`SELECT * FROM source_watermarks ORDER BY source`,
      sql`
        SELECT DISTINCT ON (source)
          source, status, records_fetched, records_inserted, records_updated,
          error_message, response_time_ms, started_at, completed_at
        FROM data_ingestion_log
        ORDER BY source, started_at DESC
      `,
      sql`
        SELECT
          COUNT(*) as total_active,
          COUNT(CASE WHEN severity = 'RED' THEN 1 END) as red,
          COUNT(CASE WHEN severity = 'ORANGE' THEN 1 END) as orange,
          COUNT(CASE WHEN severity = 'YELLOW' THEN 1 END) as yellow,
          COUNT(CASE WHEN severity = 'GREEN' THEN 1 END) as green,
          COUNT(DISTINCT source) as source_count,
          COUNT(DISTINCT country) as country_count,
          COUNT(DISTINCT hazard_type) as hazard_type_count
        FROM hazard_alerts WHERE is_active = true
      `,
    ])

    const sources = watermarks.map((wm: any) => {
      const ingest = latestIngests.find((i: any) => i.source === wm.source)
      return {
        source: wm.source,
        last_fetched_at: wm.last_fetched_at,
        last_event_time: wm.last_event_time,
        total_lifetime_fetches: wm.total_lifetime_fetches,
        consecutive_errors: wm.consecutive_errors,
        backoff_until: wm.backoff_until,
        latest_ingest: ingest ? {
          status: ingest.status,
          records_fetched: ingest.records_fetched,
          records_inserted: ingest.records_inserted,
          records_updated: ingest.records_updated,
          response_time_ms: ingest.response_time_ms,
          error: ingest.error_message,
          completed_at: ingest.completed_at,
        } : null,
      }
    })

    return NextResponse.json({
      api_version: "1.0.0",
      timestamp: new Date().toISOString(),
      sources,
      summary: alertStats[0] || {},
    })
  } catch (error) {
    console.error("[API /v1/pipeline/status] Database error:", error)
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg, type: "INTERNAL_ERROR" }, { status: 500 })
  }
}
