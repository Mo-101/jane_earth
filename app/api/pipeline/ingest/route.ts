import { NextResponse } from "next/server"
import { getDb, isDbConfigured } from "@/lib/db"

const SOURCES = ["GDACS", "NASA_EONET", "RELIEFWEB"] as const
const SOURCE_ENDPOINTS: Record<string, string> = {
  GDACS: "/api/alerts/gdacs",
  NASA_EONET: "/api/alerts/nasa",
  RELIEFWEB: "/api/alerts/reliefweb",
}
const MAX_RETRIES = 2
const RETRY_DELAY_MS = 1500
const STALE_THRESHOLD_HOURS = 72 // Mark alerts inactive if no update in 72h

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchWithRetry(
  url: string,
  retries: number = MAX_RETRIES
): Promise<{ ok: boolean; data?: unknown; error?: string; attempts: number }> {
  let lastError = ""
  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      const res = await fetch(url, { cache: "no-store" })
      if (res.ok) {
        return { ok: true, data: await res.json(), attempts: attempt }
      }
      lastError = `HTTP ${res.status}`
    } catch (err) {
      lastError = err instanceof Error ? err.message : "Network error"
    }
    if (attempt <= retries) {
      await sleep(RETRY_DELAY_MS * attempt) // Linear backoff
    }
  }
  return { ok: false, error: lastError, attempts: MAX_RETRIES + 1 }
}

export async function POST(request: Request) {
  // Reject if database is not configured
  if (!isDbConfigured()) {
    return NextResponse.json(
      { error: "Database not configured. Ingestion is disabled.", type: "SERVICE_UNAVAILABLE" },
      { status: 503 }
    )
  }

  const origin = new URL(request.url).origin
  const sql = getDb()
  const results: Array<{
    source: string
    status: string
    data?: unknown
    error?: string
    attempts: number
  }> = []

  // 1. Check watermarks - skip sources in backoff
  let watermarks: Array<{ source: string; backoff_until: string | null; consecutive_errors: number }> = []
  try {
    watermarks = await sql`SELECT source, backoff_until, consecutive_errors FROM source_watermarks`
  } catch {
    // If watermarks table fails, proceed anyway - don't block ingestion
  }

  const now = new Date()
  const watermarkMap = new Map(watermarks.map((w) => [w.source, w]))

  // 2. Fetch each source with retry + backoff awareness
  for (const source of SOURCES) {
    const wm = watermarkMap.get(source)
    const backedOff = wm?.backoff_until && new Date(wm.backoff_until) > now

    if (backedOff) {
      results.push({
        source,
        status: "SKIPPED_BACKOFF",
        error: `In backoff until ${wm!.backoff_until}`,
        attempts: 0,
      })
      continue
    }

    const url = `${origin}${SOURCE_ENDPOINTS[source]}`
    const result = await fetchWithRetry(url)

    if (result.ok) {
      results.push({ source, status: "SUCCESS", data: result.data, attempts: result.attempts })

      // Reset watermark on success
      try {
        await sql`
          UPDATE source_watermarks SET
            last_fetched_at = NOW(),
            total_lifetime_fetches = total_lifetime_fetches + 1,
            consecutive_errors = 0,
            backoff_until = NULL,
            updated_at = NOW()
          WHERE source = ${source}
        `
      } catch {
        // Non-critical
      }
    } else {
      results.push({ source, status: "ERROR", error: result.error, attempts: result.attempts })

      // Increment error counter and apply exponential backoff
      try {
        const errCount = (wm?.consecutive_errors || 0) + 1
        const backoffMinutes = Math.min(Math.pow(2, errCount) * 5, 120) // 10min, 20min, 40min... max 2h
        await sql`
          UPDATE source_watermarks SET
            consecutive_errors = ${errCount},
            backoff_until = NOW() + INTERVAL '1 minute' * ${backoffMinutes},
            updated_at = NOW()
          WHERE source = ${source}
        `
      } catch {
        // Non-critical
      }
    }
  }

  // 3. Expire stale alerts (no update in 72 hours)
  let expiredCount = 0
  try {
    const expired = await sql`
      UPDATE hazard_alerts SET
        is_active = false,
        updated_at = NOW()
      WHERE is_active = true
        AND updated_at < NOW() - INTERVAL '1 hour' * ${STALE_THRESHOLD_HOURS}
        AND source != 'COMMUNITY'
      RETURNING id
    `
    expiredCount = expired.length
  } catch {
    // Non-critical
  }

  const successCount = results.filter((r) => r.status === "SUCCESS").length
  const errorCount = results.filter((r) => r.status === "ERROR").length

  return NextResponse.json({
    api_version: "1.0.0",
    ingest_completed: now.toISOString(),
    summary: {
      sources_attempted: SOURCES.length,
      successful: successCount,
      failed: errorCount,
      skipped_backoff: results.filter((r) => r.status === "SKIPPED_BACKOFF").length,
      stale_alerts_expired: expiredCount,
    },
    results,
  })
}
