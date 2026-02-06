"use client"

import { useEffect, useRef } from "react"

interface GridPoint {
  lat: number
  lon: number
  temperature: number
}

interface TemperatureOverlayProps {
  map: import("leaflet").Map | null
  L: typeof import("leaflet") | null
  points: GridPoint[]
  visible: boolean
  opacity?: number
}

// Temperature color ramp: -10C to 50C covering Africa's full range
// Blue (cold) -> Cyan -> Green -> Yellow -> Orange -> Red -> Magenta (extreme heat)
const TEMP_STOPS: [number, [number, number, number]][] = [
  [-10, [50, 50, 180]],
  [0, [70, 100, 220]],
  [10, [60, 180, 200]],
  [18, [60, 200, 120]],
  [25, [180, 220, 60]],
  [30, [240, 200, 40]],
  [35, [240, 140, 30]],
  [40, [220, 60, 30]],
  [45, [180, 30, 80]],
  [50, [140, 20, 120]],
]

function tempToColor(temp: number): [number, number, number] {
  if (temp <= TEMP_STOPS[0][0]) return TEMP_STOPS[0][1]
  if (temp >= TEMP_STOPS[TEMP_STOPS.length - 1][0]) return TEMP_STOPS[TEMP_STOPS.length - 1][1]

  for (let i = 0; i < TEMP_STOPS.length - 1; i++) {
    const [t0, c0] = TEMP_STOPS[i]
    const [t1, c1] = TEMP_STOPS[i + 1]
    if (temp >= t0 && temp <= t1) {
      const t = (temp - t0) / (t1 - t0)
      return [
        Math.round(c0[0] + t * (c1[0] - c0[0])),
        Math.round(c0[1] + t * (c1[1] - c0[1])),
        Math.round(c0[2] + t * (c1[2] - c0[2])),
      ]
    }
  }
  return [128, 128, 128]
}

export function TemperatureOverlay({ map, L, points, visible, opacity = 0.55 }: TemperatureOverlayProps) {
  const overlayRef = useRef<import("leaflet").ImageOverlay | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!map || !L || !visible || points.length === 0) {
      // Remove overlay
      if (overlayRef.current && map) {
        map.removeLayer(overlayRef.current)
        overlayRef.current = null
      }
      return
    }

    // Find data bounds
    const lats = points.map((p) => p.lat)
    const lons = points.map((p) => p.lon)
    const latMin = Math.min(...lats)
    const latMax = Math.max(...lats)
    const lonMin = Math.min(...lons)
    const lonMax = Math.max(...lons)

    // Determine grid dimensions from the data
    const uniqueLats = [...new Set(lats)].sort((a, b) => a - b)
    const uniqueLons = [...new Set(lons)].sort((a, b) => a - b)
    const rows = uniqueLats.length
    const cols = uniqueLons.length

    // Canvas: each grid cell = 8px for smooth bilinear-feel via CSS scaling
    const cellSize = 8
    const canvasWidth = cols * cellSize
    const canvasHeight = rows * cellSize

    // Create or reuse canvas
    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas")
    }
    const canvas = canvasRef.current
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    // Build a lookup map from lat+lon to temperature
    const tempMap = new Map<string, number>()
    for (const p of points) {
      tempMap.set(`${p.lat},${p.lon}`, p.temperature)
    }

    // Paint each cell
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const lat = uniqueLats[rows - 1 - row] // top of canvas = max lat
        const lon = uniqueLons[col]
        const key = `${lat},${lon}`
        const temp = tempMap.get(key)

        if (temp !== undefined) {
          const [r, g, b] = tempToColor(temp)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.85)`
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize)
        }
      }
    }

    const imgUrl = canvas.toDataURL("image/png")

    // Leaflet image overlay, geo-registered
    const bounds = L.default.latLngBounds(
      L.default.latLng(latMin, lonMin),
      L.default.latLng(latMax, lonMax)
    )

    // Remove old overlay before adding new
    if (overlayRef.current) {
      map.removeLayer(overlayRef.current)
    }

    const overlay = L.default.imageOverlay(imgUrl, bounds, {
      opacity,
      interactive: false,
      className: "temperature-overlay",
      zIndex: 450, // below weather radar (500) but above basemap
    })
    overlay.addTo(map)
    overlayRef.current = overlay

    return () => {
      if (overlayRef.current && map) {
        map.removeLayer(overlayRef.current)
        overlayRef.current = null
      }
    }
  }, [map, L, points, visible, opacity])

  return null
}
