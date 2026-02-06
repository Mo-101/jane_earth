import { NextRequest, NextResponse } from "next/server"

// Tile Proxy Gateway
// Next.js = orchestrator + API gateway. NOT the tile factory.
// V1: proxies to free public tile servers (RainViewer)
// V2: swap backend to TiTiler serving COGs from a weather-processor service.

// Cache the RainViewer host (it can change, so we fetch it dynamically)
let cachedHost = "https://tilecache.rainviewer.com"
let lastHostFetch = 0

async function getRainViewerHost(): Promise<string> {
  const now = Date.now()
  // Refresh host every 5 minutes
  if (now - lastHostFetch > 300_000) {
    try {
      const res = await fetch("https://api.rainviewer.com/public/weather-maps.json", {
        next: { revalidate: 300 },
      })
      if (res.ok) {
        const data = await res.json()
        if (data.host) cachedHost = data.host
        lastHostFetch = now
      }
    } catch {
      // Keep using cached host on failure
    }
  }
  return cachedHost
}

// RainViewer tile URL format (from their docs):
// {host}{path}/{size}/{z}/{x}/{y}/{color}/{smooth}_{snow}.png
// The `path` comes from the frames in weather-maps.json.
// When using the proxy, the client passes `ts` (the raw path like /v2/radar/1700000000).

const TILE_SOURCES: Record<
  string,
  (z: string, x: string, y: string, params: URLSearchParams, host: string) => string
> = {
  // RainViewer precipitation radar (free, global, no key)
  // Max native zoom: 7
  precipitation: (z, x, y, params, host) => {
    const path = params.get("path") || ""
    const color = params.get("color") || "4" // 4 = dark theme friendly
    const smooth = params.get("smooth") || "1"
    const snow = params.get("snow") || "1"
    return `${host}${path}/256/${z}/${x}/${y}/${color}/${smooth}_${snow}.png`
  },

  // RainViewer satellite infrared (free, global)
  satellite: (z, x, y, params, host) => {
    const path = params.get("path") || ""
    const color = params.get("color") || "0"
    const smooth = params.get("smooth") || "0"
    const snow = params.get("snow") || "0"
    return `${host}${path}/256/${z}/${x}/${y}/${color}/${smooth}_${snow}.png`
  },

  // Placeholder for TiTiler-served COGs (V2 swap target)
  // custom: (z, x, y, params, host) => {
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

  // Enforce RainViewer zoom limit on the server side too
  const zoomNum = parseInt(z, 10)
  if (zoomNum > 7) {
    // Return transparent 1x1 PNG instead of hitting upstream for tiles that don't exist
    return new NextResponse(null, { status: 204 })
  }

  const cleanY = y.replace(/\.png$/, "")
  const host = await getRainViewerHost()
  const tileUrl = sourceBuilder(z, x, cleanY, searchParams, host)

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 6000)

    const res = await fetch(tileUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "AFRO-Storm/1.0" },
    })
    clearTimeout(timeout)

    if (!res.ok) {
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
    return new NextResponse(null, { status: 204 })
  }
}
