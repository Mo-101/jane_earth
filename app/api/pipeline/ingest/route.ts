import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const origin = new URL(request.url).origin

  const results = await Promise.allSettled([
    fetch(`${origin}/api/alerts/gdacs`).then((r) => r.json()),
    fetch(`${origin}/api/alerts/nasa`).then((r) => r.json()),
    fetch(`${origin}/api/alerts/reliefweb`).then((r) => r.json()),
  ])

  const summary = results.map((r, i) => {
    const sources = ["GDACS", "NASA_EONET", "RELIEFWEB"]
    if (r.status === "fulfilled") {
      return { source: sources[i], status: "SUCCESS", data: r.value }
    }
    return { source: sources[i], status: "ERROR", error: r.reason?.message }
  })

  return NextResponse.json({
    ingest_completed: new Date().toISOString(),
    results: summary,
  })
}
