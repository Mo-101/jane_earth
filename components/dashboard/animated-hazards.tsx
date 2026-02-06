"use client"

import { useEffect, useRef, useCallback } from "react"
import type { HazardAlert } from "@/lib/types"

interface AnimatedHazardsProps {
  map: import("leaflet").Map | null
  alerts: HazardAlert[]
  visible: boolean
}

// --- Cyclone vortex config ---
const CYCLONE_RING_COUNT = 3
const CYCLONE_MAX_RADIUS = 40
const CYCLONE_ARM_COUNT = 6

// --- Flood wave config ---
const FLOOD_WAVE_COUNT = 3
const FLOOD_MAX_RADIUS = 30

// Color per hazard type
const HAZARD_COLORS: Record<string, { stroke: string; fill: string; glow: string }> = {
  CYCLONE: { stroke: "hsla(199, 89%, 60%, 0.9)", fill: "hsla(199, 89%, 48%, 0.15)", glow: "hsla(199, 89%, 48%, 0.4)" },
  STORM:   { stroke: "hsla(199, 89%, 60%, 0.9)", fill: "hsla(199, 89%, 48%, 0.15)", glow: "hsla(199, 89%, 48%, 0.4)" },
  FLOOD:   { stroke: "hsla(210, 80%, 55%, 0.9)", fill: "hsla(210, 80%, 55%, 0.1)", glow: "hsla(210, 80%, 55%, 0.35)" },
  WILDFIRE:{ stroke: "hsla(25, 95%, 55%, 0.9)",  fill: "hsla(25, 95%, 53%, 0.12)", glow: "hsla(25, 95%, 53%, 0.35)" },
  VOLCANO: { stroke: "hsla(0, 72%, 55%, 0.9)",   fill: "hsla(0, 72%, 51%, 0.12)", glow: "hsla(0, 72%, 51%, 0.35)" },
  EARTHQUAKE:{ stroke: "hsla(48, 96%, 55%, 0.9)", fill: "hsla(48, 96%, 53%, 0.1)", glow: "hsla(48, 96%, 53%, 0.3)" },
  DROUGHT: { stroke: "hsla(48, 96%, 55%, 0.7)", fill: "hsla(48, 96%, 53%, 0.08)", glow: "hsla(48, 96%, 53%, 0.2)" },
  LANDSLIDE:{ stroke: "hsla(25, 60%, 50%, 0.8)", fill: "hsla(25, 60%, 50%, 0.1)", glow: "hsla(25, 60%, 50%, 0.25)" },
}

function getColors(type: string) {
  return HAZARD_COLORS[type] || HAZARD_COLORS.STORM
}

// Severity to pulse speed and size multiplier
function severityScale(severity: string): { speed: number; size: number } {
  switch (severity) {
    case "RED": return { speed: 1.5, size: 1.3 }
    case "ORANGE": return { speed: 1.2, size: 1.1 }
    case "YELLOW": return { speed: 1.0, size: 0.9 }
    default: return { speed: 0.7, size: 0.7 }
  }
}

export function AnimatedHazards({ map, alerts, visible }: AnimatedHazardsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animRef = useRef<number | null>(null)
  const startTimeRef = useRef(performance.now())

  const draw = useCallback((timestamp: number) => {
    if (!map || !canvasRef.current || !visible) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const container = map.getContainer()
    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    ctx.clearRect(0, 0, rect.width, rect.height)

    const elapsed = (timestamp - startTimeRef.current) / 1000 // seconds

    for (const alert of alerts) {
      if (alert.latitude == null || alert.longitude == null) continue

      const px = map.latLngToContainerPoint({ lat: alert.latitude, lng: alert.longitude })
      if (px.x < -60 || px.x > rect.width + 60 || px.y < -60 || px.y > rect.height + 60) continue

      const colors = getColors(alert.hazard_type)
      const sev = severityScale(alert.severity)

      if (alert.hazard_type === "CYCLONE" || alert.hazard_type === "STORM") {
        drawCycloneVortex(ctx, px.x, px.y, elapsed, colors, sev)
      } else if (alert.hazard_type === "FLOOD") {
        drawFloodWaves(ctx, px.x, px.y, elapsed, colors, sev)
      } else if (alert.hazard_type === "WILDFIRE" || alert.hazard_type === "VOLCANO") {
        drawFirePulse(ctx, px.x, px.y, elapsed, colors, sev)
      } else if (alert.hazard_type === "EARTHQUAKE") {
        drawSeismicRings(ctx, px.x, px.y, elapsed, colors, sev)
      } else {
        // Generic pulsing circle for drought, landslide, etc.
        drawGenericPulse(ctx, px.x, px.y, elapsed, colors, sev)
      }
    }

    animRef.current = requestAnimationFrame(draw)
  }, [map, alerts, visible])

  useEffect(() => {
    if (!map || !visible || alerts.length === 0) {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      animRef.current = null
      if (canvasRef.current?.parentNode) {
        canvasRef.current.parentNode.removeChild(canvasRef.current)
        canvasRef.current = null
      }
      return
    }

    if (!canvasRef.current) {
      const canvas = document.createElement("canvas")
      canvas.style.position = "absolute"
      canvas.style.top = "0"
      canvas.style.left = "0"
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.pointerEvents = "none"
      canvas.style.zIndex = "490"
      canvasRef.current = canvas
    }

    const container = map.getContainer()
    const pane = container.querySelector(".leaflet-overlay-pane")
    if (pane && canvasRef.current && !pane.contains(canvasRef.current)) {
      pane.appendChild(canvasRef.current)
    }

    startTimeRef.current = performance.now()
    animRef.current = requestAnimationFrame(draw)

    // Re-draw on map movement
    const onMove = () => { /* animation loop handles it */ }
    map.on("moveend", onMove)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      animRef.current = null
      map.off("moveend", onMove)
      if (canvasRef.current?.parentNode) {
        canvasRef.current.parentNode.removeChild(canvasRef.current)
        canvasRef.current = null
      }
    }
  }, [map, visible, alerts, draw])

  return null
}

// --- CYCLONE: Rotating spiral arms ---
function drawCycloneVortex(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  t: number,
  colors: { stroke: string; fill: string; glow: string },
  sev: { speed: number; size: number }
) {
  const rotation = t * sev.speed * 1.2
  const maxR = CYCLONE_MAX_RADIUS * sev.size

  // Glow circle
  ctx.save()
  ctx.beginPath()
  ctx.arc(x, y, maxR * 0.6, 0, Math.PI * 2)
  ctx.fillStyle = colors.glow
  ctx.fill()
  ctx.restore()

  // Rotating concentric rings
  for (let r = 0; r < CYCLONE_RING_COUNT; r++) {
    const progress = ((t * sev.speed * 0.4 + r * 0.33) % 1)
    const radius = progress * maxR
    const alpha = 1 - progress

    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, `${alpha * 0.7})`)
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.restore()
  }

  // Spiral arms
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)

  for (let arm = 0; arm < CYCLONE_ARM_COUNT; arm++) {
    const armAngle = (arm / CYCLONE_ARM_COUNT) * Math.PI * 2

    ctx.beginPath()
    for (let step = 0; step < 30; step++) {
      const t2 = step / 30
      const r = t2 * maxR * 0.8
      const angle = armAngle + t2 * Math.PI * 1.5
      const px = Math.cos(angle) * r
      const py = Math.sin(angle) * r
      if (step === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, "0.4)")
    ctx.lineWidth = 1
    ctx.stroke()
  }

  // Center eye
  ctx.beginPath()
  ctx.arc(0, 0, 3 * sev.size, 0, Math.PI * 2)
  ctx.fillStyle = colors.stroke
  ctx.fill()

  ctx.restore()
}

// --- FLOOD: Expanding wave ripples ---
function drawFloodWaves(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  t: number,
  colors: { stroke: string; fill: string; glow: string },
  sev: { speed: number; size: number }
) {
  const maxR = FLOOD_MAX_RADIUS * sev.size

  for (let w = 0; w < FLOOD_WAVE_COUNT; w++) {
    const progress = ((t * sev.speed * 0.5 + w / FLOOD_WAVE_COUNT) % 1)
    const radius = progress * maxR
    const alpha = (1 - progress) * 0.7

    // Wavy circle (simulate water ripple)
    ctx.save()
    ctx.beginPath()
    const segments = 40
    for (let s = 0; s <= segments; s++) {
      const angle = (s / segments) * Math.PI * 2
      const wobble = Math.sin(angle * 6 + t * 3) * 2
      const r = radius + wobble
      const px = x + Math.cos(angle) * r
      const py = y + Math.sin(angle) * r
      if (s === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, `${alpha})`)
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fillStyle = colors.fill.replace(/[\d.]+\)$/, `${alpha * 0.3})`)
    ctx.fill()
    ctx.restore()
  }

  // Center droplet
  const bounce = Math.abs(Math.sin(t * sev.speed * 2)) * 3
  ctx.beginPath()
  ctx.arc(x, y - bounce, 4 * sev.size, 0, Math.PI * 2)
  ctx.fillStyle = colors.stroke
  ctx.fill()
}

// --- WILDFIRE / VOLCANO: Pulsing fire glow with sparks ---
function drawFirePulse(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  t: number,
  colors: { stroke: string; fill: string; glow: string },
  sev: { speed: number; size: number }
) {
  const pulse = 0.7 + Math.sin(t * sev.speed * 3) * 0.3
  const maxR = 25 * sev.size

  // Glow
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, maxR * pulse)
  gradient.addColorStop(0, colors.glow)
  gradient.addColorStop(1, "transparent")
  ctx.beginPath()
  ctx.arc(x, y, maxR * pulse, 0, Math.PI * 2)
  ctx.fillStyle = gradient
  ctx.fill()

  // Spark particles (deterministic per-alert using position as seed)
  const seed = (x * 1000 + y) | 0
  for (let i = 0; i < 8; i++) {
    const angle = ((seed + i * 45) % 360) * Math.PI / 180
    const dist = (10 + ((t * sev.speed * 20 + i * 7) % 25)) * sev.size
    const sparkAlpha = Math.max(0, 1 - dist / (35 * sev.size))
    const sx = x + Math.cos(angle + t * 0.5) * dist
    const sy = y + Math.sin(angle + t * 0.5) * dist - dist * 0.3 // drift upward

    ctx.beginPath()
    ctx.arc(sx, sy, 1.5, 0, Math.PI * 2)
    ctx.fillStyle = colors.stroke.replace(/[\d.]+\)$/, `${sparkAlpha})`)
    ctx.fill()
  }

  // Center
  ctx.beginPath()
  ctx.arc(x, y, 4 * sev.size, 0, Math.PI * 2)
  ctx.fillStyle = colors.stroke
  ctx.fill()
}

// --- EARTHQUAKE: Seismic wave rings ---
function drawSeismicRings(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  t: number,
  colors: { stroke: string; fill: string; glow: string },
  sev: { speed: number; size: number }
) {
  const maxR = 35 * sev.size

  for (let r = 0; r < 4; r++) {
    const progress = ((t * sev.speed * 0.6 + r * 0.25) % 1)
    const radius = progress * maxR
    const alpha = (1 - progress) * 0.6

    // Jagged ring (simulate seismic disturbance)
    ctx.save()
    ctx.beginPath()
    const segs = 32
    for (let s = 0; s <= segs; s++) {
      const angle = (s / segs) * Math.PI * 2
      const jag = Math.sin(angle * 12 + t * 8) * 2 * (1 - progress)
      const rr = radius + jag
      const px = x + Math.cos(angle) * rr
      const py = y + Math.sin(angle) * rr
      if (s === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, `${alpha})`)
    ctx.lineWidth = 1.5
    ctx.setLineDash([3, 3])
    ctx.stroke()
    ctx.setLineDash([])
    ctx.restore()
  }

  // Epicenter
  const shake = Math.sin(t * 15) * 2 * sev.size
  ctx.beginPath()
  ctx.arc(x + shake, y, 3.5 * sev.size, 0, Math.PI * 2)
  ctx.fillStyle = colors.stroke
  ctx.fill()
}

// --- Generic pulsing marker ---
function drawGenericPulse(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  t: number,
  colors: { stroke: string; fill: string; glow: string },
  sev: { speed: number; size: number }
) {
  const pulse = ((t * sev.speed * 0.5) % 1)
  const radius = pulse * 25 * sev.size
  const alpha = (1 - pulse) * 0.5

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, `${alpha})`)
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x, y, 4 * sev.size, 0, Math.PI * 2)
  ctx.fillStyle = colors.stroke
  ctx.fill()
}
