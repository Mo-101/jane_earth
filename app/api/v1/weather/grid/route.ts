import { NextResponse } from "next/server"

// Global coverage at 5-degree resolution
// 37 latitudes (-90 to 90) x 72 longitudes (-180 to 175) = 2,664 points
// Open-Meteo batch API encodes coords in the URL query string.
// At 2,664 points the URL would exceed ~100KB - far past the 8KB limit most servers enforce.
// Solution: chunk into batches of 50 locations (well within URL limits) and fetch in parallel.

const LAT_MIN = -90
const LAT_MAX = 90
const LON_MIN = -180
const LON_MAX = 175
const STEP = 5
const BATCH_SIZE = 50 // Max locations per Open-Meteo call (keeps URL under ~4KB)

interface GridPoint {
  lat: number
  lon: number
}

function generateGridPoints(): GridPoint[] {
  const points: GridPoint[] = []
  for (let lat = LAT_MIN; lat <= LAT_MAX; lat += STEP) {
    for (let lon = LON_MIN; lon <= LON_MAX; lon += STEP) {
      points.push({ lat, lon })
    }
  }
  return points
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

interface OpenMeteoResult {
  latitude?: number
  longitude?: number
  current?: {
    temperature_2m?: number
    wind_speed_10m?: number
    wind_direction_10m?: number
    relative_humidity_2m?: number
    precipitation?: number
  }
}

export async function GET() {
  try {
    const allPoints = generateGridPoints()
    const batches = chunkArray(allPoints, BATCH_SIZE)

    // Fetch all batches in parallel (max ~54 requests for 2,664 points / 50 per batch)
    const batchPromises = batches.map(async (batch) => {
      const latParam = batch.map((p) => p.lat).join(",")
      const lonParam = batch.map((p) => p.lon).join(",")

      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 15000)

      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latParam}&longitude=${lonParam}` +
            `&current=temperature_2m,wind_speed_10m,wind_direction_10m,relative_humidity_2m,precipitation` +
            `&timezone=auto`,
          { signal: controller.signal, next: { revalidate: 900 } }
        )
        clearTimeout(timeout)

        if (!response.ok) return []

        const rawData = await response.json()
        const results: OpenMeteoResult[] = Array.isArray(rawData) ? rawData : [rawData]
        return results.map((r, i) => ({ result: r, originalPoint: batch[i] }))
      } catch {
        clearTimeout(timeout)
        return [] // Degrade: skip failed batch
      }
    })

    const batchResults = await Promise.all(batchPromises)

    // Flatten and build structured response
    const points: Array<{
      lat: number
      lon: number
      temperature: number
      wind_speed: number
      wind_direction: number
      humidity: number
      precipitation: number
      wind_u: number
      wind_v: number
    }> = []

    for (const batch of batchResults) {
      for (const { result: r, originalPoint } of batch) {
        const temp = r?.current?.temperature_2m ?? null
        const ws = r?.current?.wind_speed_10m ?? 0
        const wd = r?.current?.wind_direction_10m ?? 0
        const hum = r?.current?.relative_humidity_2m ?? 0
        const prec = r?.current?.precipitation ?? 0

        if (temp === null) continue

        // Meteorological convention to U/V components
        const wdRad = (wd * Math.PI) / 180
        const speedMs = ws / 3.6
        const wind_u = -speedMs * Math.sin(wdRad)
        const wind_v = -speedMs * Math.cos(wdRad)

        points.push({
          lat: r.latitude ?? originalPoint.lat,
          lon: r.longitude ?? originalPoint.lon,
          temperature: temp,
          wind_speed: ws,
          wind_direction: wd,
          humidity: hum,
          precipitation: prec,
          wind_u,
          wind_v,
        })
      }
    }

    return NextResponse.json(
      {
        grid: {
          lat_min: LAT_MIN,
          lat_max: LAT_MAX,
          lon_min: LON_MIN,
          lon_max: LON_MAX,
          step: STEP,
          total_points: allPoints.length,
          fetched_points: points.length,
          batches: batches.length,
        },
        points,
        updated_at: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
        },
      }
    )
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
