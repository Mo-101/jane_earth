"use client"

import { useEffect, useRef, useCallback } from "react"

interface WindPoint {
  lat: number
  lon: number
  wind_u: number
  wind_v: number
  wind_speed: number
}

interface WindOverlayProps {
  map: import("leaflet").Map | null
  points: WindPoint[]
  visible: boolean
}

// Wind speed to color: calm blue -> moderate teal -> strong orange -> extreme red
function windColor(speed: number): string {
  if (speed < 10) return "rgba(100, 180, 255, 0.8)"
  if (speed < 25) return "rgba(80, 220, 180, 0.8)"
  if (speed < 50) return "rgba(240, 180, 50, 0.9)"
  if (speed < 80) return "rgba(240, 100, 40, 0.9)"
  return "rgba(220, 40, 60, 1.0)"
}

export function WindOverlay({ map, points, visible }: WindOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animFrameRef = useRef<number | null>(null)

  const draw = useCallback(() => {
    if (!map || !canvasRef.current || !visible || points.length === 0) return

    const canvas = canvasRef.current
    const container = map.getContainer()
    const rect = container.getBoundingClientRect()

    canvas.width = rect.width
    canvas.height = rect.height

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const point of points) {
      const latlng = { lat: point.lat, lng: point.lon }
      const px = map.latLngToContainerPoint(latlng)

      // Skip points outside viewport
      if (px.x < -20 || px.x > canvas.width + 20 || px.y < -20 || px.y > canvas.height + 20) continue

      const speed = point.wind_speed // km/h
      if (speed < 2) continue // skip calm

      // Arrow length proportional to wind speed (clamped)
      const arrowLen = Math.min(8 + speed * 0.5, 30)

      // Wind direction: u,v are in m/s where u=eastward, v=northward
      // Arrow points in the direction the wind is blowing TO
      const angle = Math.atan2(-point.wind_v, point.wind_u) // screen coords (y-down)

      const color = windColor(speed)

      // Draw arrow
      ctx.save()
      ctx.translate(px.x, px.y)
      ctx.rotate(angle)

      // Arrow shaft
      ctx.beginPath()
      ctx.moveTo(-arrowLen / 2, 0)
      ctx.lineTo(arrowLen / 2, 0)
      ctx.strokeStyle = color
      ctx.lineWidth = speed > 50 ? 2.5 : speed > 25 ? 2 : 1.5
      ctx.stroke()

      // Arrowhead
      const headLen = Math.min(arrowLen * 0.35, 8)
      ctx.beginPath()
      ctx.moveTo(arrowLen / 2, 0)
      ctx.lineTo(arrowLen / 2 - headLen, -headLen * 0.5)
      ctx.moveTo(arrowLen / 2, 0)
      ctx.lineTo(arrowLen / 2 - headLen, headLen * 0.5)
      ctx.strokeStyle = color
      ctx.stroke()

      ctx.restore()
    }
  }, [map, points, visible])

  useEffect(() => {
    if (!map || !visible) return

    // Create canvas overlay
    if (!canvasRef.current) {
      const canvas = document.createElement("canvas")
      canvas.style.position = "absolute"
      canvas.style.top = "0"
      canvas.style.left = "0"
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.pointerEvents = "none"
      canvas.style.zIndex = "480" // above temperature (450), below radar (500)
      canvasRef.current = canvas
    }

    const container = map.getContainer()
    const pane = container.querySelector(".leaflet-overlay-pane")
    if (pane && canvasRef.current && !pane.contains(canvasRef.current)) {
      pane.appendChild(canvasRef.current)
    }

    draw()

    // Redraw on map events
    map.on("moveend", draw)
    map.on("zoomend", draw)
    map.on("resize", draw)

    return () => {
      map.off("moveend", draw)
      map.off("zoomend", draw)
      map.off("resize", draw)
      if (canvasRef.current && canvasRef.current.parentNode) {
        canvasRef.current.parentNode.removeChild(canvasRef.current)
        canvasRef.current = null
      }
    }
  }, [map, visible, draw])

  // Redraw when points change
  useEffect(() => {
    draw()
  }, [points, draw])

  // Remove canvas when not visible
  useEffect(() => {
    if (!visible && canvasRef.current && canvasRef.current.parentNode) {
      canvasRef.current.parentNode.removeChild(canvasRef.current)
      canvasRef.current = null
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [visible])

  return null
}
