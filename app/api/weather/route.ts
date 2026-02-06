import { NextResponse } from "next/server"

interface OpenMeteoResponse {
  latitude: number
  longitude: number
  current?: {
    temperature_2m?: number
    relative_humidity_2m?: number
    precipitation?: number
    wind_speed_10m?: number
    wind_direction_10m?: number
    surface_pressure?: number
    weather_code?: number
    cloud_cover?: number
  }
}

const AFRICAN_CAPITALS: Array<{ name: string; country: string; lat: number; lon: number }> = [
  { name: "Cairo", country: "Egypt", lat: 30.04, lon: 31.24 },
  { name: "Lagos", country: "Nigeria", lat: 6.52, lon: 3.38 },
  { name: "Kinshasa", country: "DR Congo", lat: -4.32, lon: 15.31 },
  { name: "Addis Ababa", country: "Ethiopia", lat: 9.02, lon: 38.75 },
  { name: "Nairobi", country: "Kenya", lat: -1.29, lon: 36.82 },
  { name: "Dar es Salaam", country: "Tanzania", lat: -6.79, lon: 39.28 },
  { name: "Johannesburg", country: "South Africa", lat: -26.2, lon: 28.05 },
  { name: "Maputo", country: "Mozambique", lat: -25.97, lon: 32.57 },
  { name: "Antananarivo", country: "Madagascar", lat: -18.88, lon: 47.51 },
  { name: "Dakar", country: "Senegal", lat: 14.72, lon: -17.47 },
  { name: "Accra", country: "Ghana", lat: 5.56, lon: -0.19 },
  { name: "Rabat", country: "Morocco", lat: 34.02, lon: -6.84 },
  { name: "Algiers", country: "Algeria", lat: 36.75, lon: 3.04 },
  { name: "Tunis", country: "Tunisia", lat: 36.81, lon: 10.18 },
  { name: "Khartoum", country: "Sudan", lat: 15.50, lon: 32.56 },
  { name: "Mogadishu", country: "Somalia", lat: 2.05, lon: 45.32 },
  { name: "Luanda", country: "Angola", lat: -8.84, lon: 13.23 },
  { name: "Kampala", country: "Uganda", lat: 0.35, lon: 32.58 },
  { name: "Bamako", country: "Mali", lat: 12.64, lon: -8.00 },
  { name: "Niamey", country: "Niger", lat: 13.51, lon: 2.13 },
]

export async function GET() {
  try {
    const latitudes = AFRICAN_CAPITALS.map((c) => c.lat).join(",")
    const longitudes = AFRICAN_CAPITALS.map((c) => c.lon).join(",")

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 12000) // 12s timeout

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitudes}&longitude=${longitudes}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,wind_direction_10m,surface_pressure,weather_code,cloud_cover&timezone=auto`,
      { signal: controller.signal, next: { revalidate: 600 } }
    )
    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`Open-Meteo API returned ${response.status}`)
    }

    const rawData = await response.json()
    const results: OpenMeteoResponse[] = Array.isArray(rawData) ? rawData : [rawData]

    const weatherData = results.map((result, i) => ({
      city: AFRICAN_CAPITALS[i]?.name || "Unknown",
      country: AFRICAN_CAPITALS[i]?.country || "Unknown",
      latitude: result.latitude,
      longitude: result.longitude,
      temperature: result.current?.temperature_2m ?? 0,
      humidity: result.current?.relative_humidity_2m ?? 0,
      precipitation: result.current?.precipitation ?? 0,
      wind_speed: result.current?.wind_speed_10m ?? 0,
      wind_direction: result.current?.wind_direction_10m ?? 0,
      pressure: result.current?.surface_pressure ?? 0,
      weather_code: result.current?.weather_code ?? 0,
      cloud_cover: result.current?.cloud_cover ?? 0,
    }))

    return NextResponse.json({
      source: "OPEN_METEO",
      count: weatherData.length,
      cities: weatherData,
      updated_at: new Date().toISOString(),
    })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg, source: "OPEN_METEO" }, { status: 500 })
  }
}
