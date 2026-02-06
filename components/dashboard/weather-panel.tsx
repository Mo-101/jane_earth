"use client"

import {
  Thermometer,
  Droplets,
  Wind,
  Cloud,
  Eye,
  Gauge,
  ArrowUp,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface WeatherCity {
  city: string
  country: string
  lat: number
  lon: number
  temperature: number
  humidity: number
  precipitation: number
  wind_speed: number
  wind_direction: number
  pressure: number
  weather_code: number
  cloud_cover: number
}

interface WeatherPanelProps {
  data: {
    cities?: WeatherCity[]
    updated_at?: string
  } | null
  isLoading: boolean
}

const WMO_CODES: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight showers",
  81: "Moderate showers",
  82: "Violent showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with hail",
  99: "Thunderstorm with heavy hail",
}

function getWeatherCondition(code: number): string {
  return WMO_CODES[code] || "Unknown"
}

function getTempColor(temp: number): string {
  if (temp >= 40) return "text-severity-red"
  if (temp >= 35) return "text-severity-orange"
  if (temp >= 28) return "text-severity-yellow"
  if (temp >= 15) return "text-severity-green"
  return "text-primary"
}

export function WeatherPanel({ data, isLoading }: WeatherPanelProps) {
  if (isLoading) {
    return (
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2 mb-4">
          <Cloud className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Weather Intelligence</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-24 rounded-md bg-secondary/50 animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  const cities = data?.cities || []

  if (cities.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2 mb-4">
          <Cloud className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Weather Intelligence</h3>
        </div>
        <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
          <Cloud className="h-8 w-8 mb-2 opacity-30" />
          <p className="text-sm">No weather data available</p>
          <p className="text-xs mt-1">Click Sync Data to fetch latest conditions</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Cloud className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">
            Weather Intelligence
          </h3>
        </div>
        {data?.updated_at && (
          <span className="text-[10px] text-muted-foreground font-mono">
            {new Date(data.updated_at).toLocaleTimeString()}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {cities.map((city) => (
          <div
            key={`${city.city}-${city.country}`}
            className="rounded-md border border-border bg-background/50 p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm font-medium text-foreground">{city.city}</p>
                <p className="text-[10px] text-muted-foreground">{city.country}</p>
              </div>
              <p className={cn("text-2xl font-bold tabular-nums", getTempColor(city.temperature))}>
                {Math.round(city.temperature)}°
              </p>
            </div>

            <p className="text-[11px] text-muted-foreground mb-2">
              {getWeatherCondition(city.weather_code)}
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center gap-1">
                <Droplets className="h-3 w-3 text-primary/70" />
                <span className="text-[10px] text-muted-foreground tabular-nums">
                  {city.humidity}%
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Wind className="h-3 w-3 text-primary/70" />
                <span className="text-[10px] text-muted-foreground tabular-nums">
                  {Math.round(city.wind_speed)} km/h
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Gauge className="h-3 w-3 text-primary/70" />
                <span className="text-[10px] text-muted-foreground tabular-nums">
                  {Math.round(city.pressure)} hPa
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
