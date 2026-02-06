"use client"

import { useEffect, useRef, useCallback } from "react"

// --- Types ---
interface WindGridPoint {
  lat: number
  lon: number
  wind_u: number  // m/s eastward
  wind_v: number  // m/s northward
  wind_speed: number // km/h
}

interface Particle {
  x: number
  y: number
  age: number
  maxAge: number
  // trail of previous positions for streak effect
  trail: Array<{ x: number; y: number }>
}

interface WindParticlesProps {
  map: import("leaflet").Map | null
  points: WindGridPoint[]
  visible: boolean
  particleCount?: number
}

// --- Config ---
const MAX_TRAIL_LEN = 12
const FADE_TAIL_ALPHA = 0.03
const SPEED_SCALE = 0.0008 // Scale wind m/s to pixel movement per frame at zoom ~4

// Wind speed to color (HSL, matching AFRO STORM palette)
function windSpeedToHSL(speed: number): string {
  // speed in km/h
  if (speed < 10) return "hsla(199, 89%, 60%, 0.5)"    // calm - soft cyan
  if (speed < 25) return "hsla(170, 70%, 55%, 0.65)"    // light - teal
  if (speed < 40) return "hsla(142, 71%, 50%, 0.7)"     // moderate - green
  if (speed < 60) return "hsla(48, 96%, 53%, 0.8)"      // strong - yellow
  if (speed < 80) return "hsla(25, 95%, 53%, 0.85)"     // very strong - orange
  return "hsla(0, 72%, 55%, 0.9)"                        // extreme - red
}

function windSpeedToWidth(speed: number): number {
  if (speed < 10) return 0.5
  if (speed < 30) return 1
  if (speed < 60) return 1.5
  return 2
}

export function WindParticles({ map, points, visible, particleCount = 2000 }: WindParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const animRef = useRef<number | null>(null)
  const gridCacheRef = useRef<{
    // Pre-indexed grid for fast bilinear interpolation
    lats: number[]
    lons: number[]
    uGrid: Float32Array
    vGrid: Float32Array
    sGrid: Float32Array // speeds for coloring
    rows: number
    cols: number
  } | null>(null)

  // Build indexed grid from points for fast interpolation
  const buildGrid = useCallback((pts: WindGridPoint[]) => {
    if (pts.length === 0) {
      gridCacheRef.current = null
      return
    }

    const uniqueLats = [...new Set(pts.map(p => p.lat))].sort((a, b) => a - b)
    const uniqueLons = [...new Set(pts.map(p => p.lon))].sort((a, b) => a - b)
    const rows = uniqueLats.length
    const cols = uniqueLons.length

    if (rows < 2 || cols < 2) {
      gridCacheRef.current = null
      return
    }

    const uGrid = new Float32Array(rows * cols)
    const vGrid = new Float32Array(rows * cols)
    const sGrid = new Float32Array(rows * cols)

    // Map lat/lon to grid indices
    const latIdx = new Map<number, number>()
    const lonIdx = new Map<number, number>()
    uniqueLats.forEach((lat, i) => latIdx.set(lat, i))
    uniqueLons.forEach((lon, i) => lonIdx.set(lon, i))

    for (const p of pts) {
      const ri = latIdx.get(p.lat)
      const ci = lonIdx.get(p.lon)
      if (ri !== undefined && ci !== undefined) {
        const idx = ri * cols + ci
        uGrid[idx] = p.wind_u
        vGrid[idx] = p.wind_v
        sGrid[idx] = p.wind_speed
      }
    }

    gridCacheRef.current = { lats: uniqueLats, lons: uniqueLons, uGrid, vGrid, sGrid, rows, cols }
  }, [])

  // Bilinear interpolation of wind at a given lat/lon
  const interpolateWind = useCallback((lat: number, lon: number): { u: number; v: number; speed: number } | null => {
    const g = gridCacheRef.current
    if (!g) return null

    const { lats, lons, uGrid, vGrid, sGrid, rows, cols } = g

    // Find bounding grid cell
    if (lat < lats[0] || lat > lats[rows - 1] || lon < lons[0] || lon > lons[cols - 1]) return null

    // Binary search for lat/lon indices
    let li = 0
    for (let i = 0; i < rows - 1; i++) {
      if (lat >= lats[i] && lat <= lats[i + 1]) { li = i; break }
    }
    let lj = 0
    for (let j = 0; j < cols - 1; j++) {
      if (lon >= lons[j] && lon <= lons[j + 1]) { lj = j; break }
    }

    // Bilinear weights
    const latRange = lats[li + 1] - lats[li]
    const lonRange = lons[lj + 1] - lons[lj]
    if (latRange === 0 || lonRange === 0) return null

    const ty = (lat - lats[li]) / latRange
    const tx = (lon - lons[lj]) / lonRange

    const i00 = li * cols + lj
    const i01 = li * cols + (lj + 1)
    const i10 = (li + 1) * cols + lj
    const i11 = (li + 1) * cols + (lj + 1)

    const u = (1 - ty) * ((1 - tx) * uGrid[i00] + tx * uGrid[i01]) +
              ty * ((1 - tx) * uGrid[i10] + tx * uGrid[i11])

    const v = (1 - ty) * ((1 - tx) * vGrid[i00] + tx * vGrid[i01]) +
              ty * ((1 - tx) * vGrid[i10] + tx * vGrid[i11])

    const speed = (1 - ty) * ((1 - tx) * sGrid[i00] + tx * sGrid[i01]) +
                  ty * ((1 - tx) * sGrid[i10] + tx * sGrid[i11])

    return { u, v, speed }
  }, [])

  // Initialize or reset particles
  const resetParticles = useCallback(() => {
    if (!map) return

    const bounds = map.getBounds()
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      const lat = bounds.getSouth() + Math.random() * (bounds.getNorth() - bounds.getSouth())
      const lon = bounds.getWest() + Math.random() * (bounds.getEast() - bounds.getWest())
      const pt = map.latLngToContainerPoint({ lat, lng: lon })

      particles.push({
        x: pt.x,
        y: pt.y,
        age: Math.floor(Math.random() * 120),
        maxAge: 80 + Math.floor(Math.random() * 80),
        trail: [],
      })
    }

    particlesRef.current = particles
  }, [map, particleCount])

  // Rebuild grid when points change
  useEffect(() => {
    buildGrid(points)
  }, [points, buildGrid])

  // Main animation loop
  useEffect(() => {
    if (!map || !visible || points.length === 0) {
      // Cleanup
      if (animRef.current) cancelAnimationFrame(animRef.current)
      animRef.current = null
      if (canvasRef.current?.parentNode) {
        canvasRef.current.parentNode.removeChild(canvasRef.current)
        canvasRef.current = null
      }
      return
    }

    // Create canvas
    if (!canvasRef.current) {
      const canvas = document.createElement("canvas")
      canvas.style.position = "absolute"
      canvas.style.top = "0"
      canvas.style.left = "0"
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.pointerEvents = "none"
      canvas.style.zIndex = "480"
      canvasRef.current = canvas
    }

    const container = map.getContainer()
    const pane = container.querySelector(".leaflet-overlay-pane")
    if (pane && canvasRef.current && !pane.contains(canvasRef.current)) {
      pane.appendChild(canvasRef.current)
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Size canvas
    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    resetParticles()

    const zoomFactor = Math.pow(2, map.getZoom())

    function animate() {
      if (!ctx || !map || !canvasRef.current) return

      const w = rect.width
      const h = rect.height

      // Semi-transparent black overlay for trail fade effect
      ctx.fillStyle = `rgba(11, 14, 18, ${FADE_TAIL_ALPHA})`
      ctx.fillRect(0, 0, w, h)

      const particles = particlesRef.current
      const bounds = map.getBounds()

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Convert current screen position back to lat/lon
        const latlng = map.containerPointToLatLng({ x: p.x, y: p.y } as import("leaflet").Point)
        const wind = interpolateWind(latlng.lat, latlng.lng)

        if (wind && Math.abs(wind.u) + Math.abs(wind.v) > 0.01) {
          // Save old position to trail
          p.trail.push({ x: p.x, y: p.y })
          if (p.trail.length > MAX_TRAIL_LEN) p.trail.shift()

          // Move particle: u is eastward (positive = right on screen), v is northward (positive = up but screen y is down)
          const scale = SPEED_SCALE * zoomFactor
          p.x += wind.u * scale
          p.y -= wind.v * scale // negative because screen y is inverted

          // Draw trail as gradient lines
          const color = windSpeedToHSL(wind.speed)
          const lineWidth = windSpeedToWidth(wind.speed)

          if (p.trail.length > 1) {
            ctx.beginPath()
            ctx.moveTo(p.trail[0].x, p.trail[0].y)
            for (let t = 1; t < p.trail.length; t++) {
              ctx.lineTo(p.trail[t].x, p.trail[t].y)
            }
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth
            ctx.stroke()
          }

          // Draw head dot
          ctx.beginPath()
          ctx.arc(p.x, p.y, lineWidth + 0.5, 0, Math.PI * 2)
          ctx.fillStyle = color
          ctx.fill()
        }

        p.age++

        // Respawn particle if too old or out of bounds
        if (p.age > p.maxAge || p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
          const lat = bounds.getSouth() + Math.random() * (bounds.getNorth() - bounds.getSouth())
          const lon = bounds.getWest() + Math.random() * (bounds.getEast() - bounds.getWest())
          const pt = map.latLngToContainerPoint({ lat, lng: lon })
          p.x = pt.x
          p.y = pt.y
          p.age = 0
          p.maxAge = 80 + Math.floor(Math.random() * 80)
          p.trail = []
        }
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    // Reset on map movement
    const onMove = () => {
      // Re-size canvas
      const r = container.getBoundingClientRect()
      canvas.width = r.width * dpr
      canvas.height = r.height * dpr
      ctx.scale(dpr, dpr)
      resetParticles()
    }

    map.on("moveend", onMove)
    map.on("zoomend", onMove)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      animRef.current = null
      map.off("moveend", onMove)
      map.off("zoomend", onMove)
      if (canvasRef.current?.parentNode) {
        canvasRef.current.parentNode.removeChild(canvasRef.current)
        canvasRef.current = null
      }
    }
  }, [map, visible, points, resetParticles, interpolateWind])

  return null
}
