import { NextRequest, NextResponse } from "next/server"

// Tile Proxy Gateway
// Next.js acts as orchestrator + API gateway for tile services.
// V1: proxies to free public tile servers (RainViewer, Open-Meteo)
// V2: swap backend to self-hosted TiTiler serving COGs from weather-processor

const TILE_SOURCES: Record<string, (z: string, x: string, y: string, params: URLSearchParams) => string> = {
  // RainViewer precipitation radar (free, global, no key)
  precipitation: (z, x, y, params) => {
    const ts = params.get("ts") || ""
    const colorScheme = params.get("color") || "4" // 4 = dark theme friendly
    const smooth = params.get("smooth") || "1"
    const snow = params.get("snow") || "1"
    return `https://tilecache.rainviewer.com/v2/radar/${ts}/256/${z}/${x}/${y}/${colorScheme}/${smooth}_${snow}.png`
  },

  // RainViewer satellite infrared (free, global)
  satellite: (z, x, y, params) => {
    const ts = params.get("ts") || ""
    const colorScheme = params.get("color") || "0"
    const smooth = params.get("smooth") || "0"
    const snow = params.get("snow") || "0"
    return `https://tilecache.rainviewer.com/v2/satellite/${ts}/256/${z}/${x}/${y}/${colorScheme}/${smooth}_${snow}.png`
  },

  // OpenWeatherMap tiles (free tier: 60 calls/min, 1M/month)
  // Uncomment if OWM key is provided
  // temperature: (z, x, y, params) => {
  //   const key = process.env.OPENWEATHERMAP_API_KEY
  //   return `https://tile.openweathermap.org/map/temp_new/${z}/${x}/${y}.png?appid=${key}`
  // },

  // Placeholder for TiTiler-served COGs (V2)
  // custom: (z, x, y, params) => {
  //   const layer = params.get("cog") || "precip"
  //   return `${process.env.TITILER_URL}/cog/tiles/${z}/${x}/${y}.png?url=${layer}`
  // },
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ layer: string; z: string; x: string; y: string }> }
) {
  const { layer, z, x, y } = await params
  const searchParams = request.nextUrl.searchParams

  const sourceBuilder = TILE_SOURCES[layer]
  if (!sourceBuilder) {
    return NextResponse.json(
      { error: `Unknown tile layer: ${layer}. Available: ${Object.keys(TILE_SOURCES).join(", ")}` },
      { status: 404 }
    )
  }

  // Clean the y param (remove .png extension if passed)
  const cleanY = y.replace(/\.png$/, "")

  const tileUrl = sourceBuilder(z, x, cleanY, searchParams)

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const res = await fetch(tileUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "AFRO-Storm/1.0" },
    })
    clearTimeout(timeout)

    if (!res.ok) {
      // Return transparent tile on upstream failure (graceful degradation)
      return new NextResponse(null, { status: 204 })
    }

    const buffer = await res.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": res.headers.get("Content-Type") || "image/png",
        "Cache-Control": "public, max-age=120, s-maxage=300, stale-while-revalidate=600",
        "X-Tile-Source": layer,
        "X-Tile-Upstream": new URL(tileUrl).hostname,
      },
    })
  } catch {
    // Return empty 204 on timeout/network error (map shows base layer only)
    return new NextResponse(null, { status: 204 })
  }
}
