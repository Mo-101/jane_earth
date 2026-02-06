import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  const checks: Record<string, { status: string; latency_ms?: number; detail?: string }> = {}
  let overallHealthy = true

  // 1. Database connectivity check
  const dbStart = Date.now()
  try {
    const sql = getDb()
    const result = await sql`SELECT 1 as alive, NOW() as server_time`
    checks.database = {
      status: "UP",
      latency_ms: Date.now() - dbStart,
      detail: `Server time: ${result[0]?.server_time}`,
    }
  } catch (err) {
    overallHealthy = false
    checks.database = {
      status: "DOWN",
      latency_ms: Date.now() - dbStart,
      detail: err instanceof Error ? err.message : "Connection failed",
    }
  }

  // 2. Source watermark check - are feeds stale?
  try {
    const sql = getDb()
    const watermarks = await sql`
      SELECT source, last_fetched_at, consecutive_errors, backoff_until
      FROM source_watermarks
    `

    const now = new Date()
    const staleThresholdMs = 2 * 60 * 60 * 1000 // 2 hours

    for (const wm of watermarks) {
      const lastFetch = wm.last_fetched_at ? new Date(wm.last_fetched_at) : null
      const isStale = !lastFetch || (now.getTime() - lastFetch.getTime()) > staleThresholdMs
      const isBackedOff = wm.backoff_until && new Date(wm.backoff_until) > now
      const hasErrors = (wm.consecutive_errors || 0) >= 3

      let status = "UP"
      if (hasErrors) { status = "DEGRADED"; overallHealthy = false }
      if (isBackedOff) { status = "BACKING_OFF" }
      if (isStale && !lastFetch) { status = "NEVER_RUN" }

      checks[`source_${wm.source.toLowerCase()}`] = {
        status,
        detail: isStale
          ? `Last fetch: ${lastFetch?.toISOString() || "never"}, errors: ${wm.consecutive_errors || 0}`
          : `Healthy, last fetch: ${lastFetch?.toISOString()}`,
      }
    }
  } catch {
    checks.watermarks = { status: "UNKNOWN", detail: "Could not check source watermarks" }
  }

  // 3. Alert data freshness
  try {
    const sql = getDb()
    const alertStats = await sql`
      SELECT
        COUNT(*) as total_active,
        MAX(updated_at) as last_updated,
        COUNT(CASE WHEN severity = 'RED' THEN 1 END) as red_count
      FROM hazard_alerts WHERE is_active = true
    `
    const stats = alertStats[0]
    checks.alert_data = {
      status: parseInt(stats?.total_active || "0") > 0 ? "UP" : "EMPTY",
      detail: `${stats?.total_active || 0} active alerts, ${stats?.red_count || 0} RED, last update: ${stats?.last_updated || "never"}`,
    }
  } catch {
    checks.alert_data = { status: "UNKNOWN", detail: "Could not query alerts" }
  }

  const statusCode = overallHealthy ? 200 : 503
  return NextResponse.json(
    {
      status: overallHealthy ? "HEALTHY" : "DEGRADED",
      version: "1.0.0",
      service: "afro-storm",
      timestamp: new Date().toISOString(),
      uptime_note: "Serverless - no persistent uptime counter",
      checks,
    },
    { status: statusCode }
  )
}
