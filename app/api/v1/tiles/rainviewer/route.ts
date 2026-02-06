import { NextResponse } from "next/server"

// RainViewer provides free global precipitation radar with time-series tiles.
// This endpoint fetches available radar timestamps for the animation playback.
// API: https://www.rainviewer.com/api.html (no key needed, free for any use)

export const revalidate = 120 // Cache for 2 minutes

interface RainViewerMaps {
  version: string
  generated: number
  host: string
  radar: {
    past: Array<{ time: number; path: string }>
    nowcast: Array<{ time: number; path: string }>
  }
  satellite: {
    infrared: Array<{ time: number; path: string }>
  }
}

export async function GET() {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const res = await fetch("https://api.rainviewer.com/public/weather-maps.json", {
      signal: controller.signal,
      next: { revalidate: 120 },
    })
    clearTimeout(timeout)

    if (!res.ok) {
      return NextResponse.json(
        { error: "RainViewer API unavailable", status: res.status },
        { status: 502 }
      )
    }

    const data: RainViewerMaps = await res.json()

    // Ensure host always has protocol (RainViewer usually returns https:// but guard against it)
    const host = data.host.startsWith("http") ? data.host : `https://${data.host}`

    // Combine past + nowcast for full timeline (past ~2hrs + forecast ~30min)
    const radarFrames = [
      ...data.radar.past.map((f) => ({ time: f.time, path: f.path, type: "past" as const })),
      ...data.radar.nowcast.map((f) => ({ time: f.time, path: f.path, type: "forecast" as const })),
    ]

    const satelliteFrames = data.satellite.infrared.map((f) => ({
      time: f.time,
      path: f.path,
      type: "past" as const,
    }))

    return NextResponse.json({
      host,
      generated: data.generated,
      radar: {
        frames: radarFrames,
        count: radarFrames.length,
        oldest: radarFrames[0]?.time || null,
        newest: radarFrames[radarFrames.length - 1]?.time || null,
      },
      satellite: {
        frames: satelliteFrames,
        count: satelliteFrames.length,
      },
      // Tile URL template for the client:
      // `${host}${frame.path}/256/{z}/{x}/{y}/{color}/{smooth}_{snow}.png`
      tile_template: "{host}{path}/256/{z}/{x}/{y}/{color}/{smooth}_{snow}.png",
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json(
      { error: "Failed to fetch RainViewer data", detail: message },
      { status: 502 }
    )
  }
}
