import { NextResponse } from "next/server"

// Africa bounding box - 2x2 degree grid (~37x36 = 1332 points)
// Open-Meteo handles up to ~10000 in one call. 2-deg gives smooth continental coverage.
const LAT_MIN = -36
const LAT_MAX = 38
const LON_MIN = -18
const LON_MAX = 52
const STEP = 2 // degrees between grid points

function generateGrid(): { lats: number[]; lons: number[] } {
  const lats: number[] = []
  const lons: number[] = []
  for (let lat = LAT_MIN; lat <= LAT_MAX; lat += STEP) lats.push(lat)
  for (let lon = LON_MIN; lon <= LON_MAX; lon += STEP) lons.push(lon)
  return { lats, lons }
}

export async function GET() {
  try {
    const { lats, lons } = generateGrid()

    // Build flat arrays of all grid points
    const allLats: number[] = []
    const allLons: number[] = []
    for (const lat of lats) {
      for (const lon of lons) {
        allLats.push(lat)
        allLons.push(lon)
      }
    }

    const latParam = allLats.join(",")
    const lonParam = allLons.join(",")

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latParam}&longitude=${lonParam}` +
        `&current=temperature_2m,wind_speed_10m,wind_direction_10m,relative_humidity_2m,precipitation` +
        `&timezone=auto`,
      { signal: controller.signal, next: { revalidate: 900 } } // cache 15 min
    )
    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`Open-Meteo returned ${response.status}`)
    }

    const rawData = await response.json()
    const results = Array.isArray(rawData) ? rawData : [rawData]

    // Build structured grid response
    const points: Array<{
      lat: number
      lon: number
      temperature: number
      wind_speed: number
      wind_direction: number
      humidity: number
      precipitation: number
      // Computed U/V wind components (m/s from km/h, math direction)
      wind_u: number
      wind_v: number
    }> = []

    for (let i = 0; i < results.length; i++) {
      const r = results[i]
      const temp = r?.current?.temperature_2m ?? null
      const ws = r?.current?.wind_speed_10m ?? 0
      const wd = r?.current?.wind_direction_10m ?? 0
      const hum = r?.current?.relative_humidity_2m ?? 0
      const prec = r?.current?.precipitation ?? 0

      if (temp === null) continue

      // Convert wind from meteorological direction (degrees, from) to U/V components
      // Meteorological: 0=N(from north), 90=E(from east)
      // Math: wind blows FROM direction, so we negate
      const wdRad = (wd * Math.PI) / 180
      const speedMs = ws / 3.6 // km/h to m/s
      const wind_u = -speedMs * Math.sin(wdRad) // positive = westerly (blowing east)
      const wind_v = -speedMs * Math.cos(wdRad) // positive = southerly (blowing north)

      points.push({
        lat: r.latitude ?? allLats[i],
        lon: r.longitude ?? allLons[i],
        temperature: temp,
        wind_speed: ws,
        wind_direction: wd,
        humidity: hum,
        precipitation: prec,
        wind_u,
        wind_v,
      })
    }

    return NextResponse.json(
      {
        grid: {
          lat_min: LAT_MIN,
          lat_max: LAT_MAX,
          lon_min: LON_MIN,
          lon_max: LON_MAX,
          step: STEP,
          rows: lats.length,
          cols: lons.length,
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
