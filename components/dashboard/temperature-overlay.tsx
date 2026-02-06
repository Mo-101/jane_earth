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

    // Determine native grid dimensions
    const uniqueLats = [...new Set(lats)].sort((a, b) => b - a) // descending: top of image = max lat
    const uniqueLons = [...new Set(lons)].sort((a, b) => a - b)
    const rows = uniqueLats.length
    const cols = uniqueLons.length

    if (rows < 2 || cols < 2) return

    // KEY FIX: Canvas is exactly 1 pixel per grid point.
    // The browser's bilinear image scaling will interpolate between
    // neighboring pixels when Leaflet stretches this tiny image across
    // the full geo-extent, producing a smooth continuous gradient.
    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas")
    }
    const canvas = canvasRef.current
    canvas.width = cols
    canvas.height = rows

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Use ImageData for direct pixel manipulation (fastest path)
    const imageData = ctx.createImageData(cols, rows)
    const data = imageData.data

    // Build lookup: lat+lon -> temperature
    const tempMap = new Map<string, number>()
    for (const p of points) {
      tempMap.set(`${p.lat},${p.lon}`, p.temperature)
    }

    // Paint 1 pixel per grid point
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const lat = uniqueLats[row] // descending order = top row is max lat
        const lon = uniqueLons[col]
        const temp = tempMap.get(`${lat},${lon}`)

        const idx = (row * cols + col) * 4
        if (temp !== undefined) {
          const [r, g, b] = tempToColor(temp)
          data[idx] = r
          data[idx + 1] = g
          data[idx + 2] = b
          data[idx + 3] = 220 // slightly transparent per-pixel
        } else {
          // Missing data point: fully transparent
          data[idx + 3] = 0
        }
      }
    }

    ctx.putImageData(imageData, 0, 0)

    // Export as data URL. The browser will bilinearly interpolate when
    // this tiny image (e.g. 15x15) is stretched across the continent.
    const imgUrl = canvas.toDataURL("image/png")

    // Geo-registered Leaflet image overlay
    // Extend bounds by half a grid cell so pixels are centered on their coordinates
    const latStep = Math.abs(uniqueLats[0] - uniqueLats[1]) / 2
    const lonStep = Math.abs(uniqueLons[1] - uniqueLons[0]) / 2
    const bounds = L.latLngBounds(
      L.latLng(latMin - latStep, lonMin - lonStep),
      L.latLng(latMax + latStep, lonMax + lonStep),
    )

    // Remove old overlay before adding new
    if (overlayRef.current) {
      map.removeLayer(overlayRef.current)
    }

    const overlay = L.imageOverlay(imgUrl, bounds, {
      opacity,
      interactive: false,
      className: "temperature-overlay",
      zIndex: 450,
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
