"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { SEVERITY_CONFIG, AFRICA_CENTER, AFRICA_ZOOM } from "@/lib/constants"
import type { HazardAlert } from "@/lib/types"
import { MapControls, type WeatherLayer } from "./map-controls"

interface RainViewerFrame {
  time: number
  path: string
  type: "past" | "forecast"
}

interface RainViewerData {
  host: string
  radar: { frames: RainViewerFrame[] }
  satellite: { frames: RainViewerFrame[] }
}

interface AfricaMapProps {
  alerts: HazardAlert[]
  onAlertClick?: (alert: HazardAlert) => void
  borderless?: boolean
}

export function AfricaMap({ alerts, onAlertClick, borderless }: AfricaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null)
  const weatherLayerRef = useRef<import("leaflet").TileLayer | null>(null)
  const markersLayerRef = useRef<import("leaflet").LayerGroup | null>(null)
  const leafletRef = useRef<typeof import("leaflet") | null>(null)

  const [isLoaded, setIsLoaded] = useState(false)

  // Weather layer state
  const [activeLayer, setActiveLayer] = useState<WeatherLayer>("none")
  const [alertsVisible, setAlertsVisible] = useState(true)
  const [rainViewerData, setRainViewerData] = useState<RainViewerData | null>(null)

  // Time animation state
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Get active frames based on selected layer
  const activeFrames: RainViewerFrame[] =
    activeLayer === "precipitation"
      ? rainViewerData?.radar.frames || []
      : activeLayer === "satellite"
        ? rainViewerData?.satellite.frames || []
        : []

  const currentFrame = activeFrames[currentFrameIndex] || null

  // --- Init Map ---
  useEffect(() => {
    if (!mapRef.current) return
    let cancelled = false

    async function initMap() {
      const L = await import("leaflet")
      await import("leaflet/dist/leaflet.css")

      if (cancelled || !mapRef.current) return
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }

      leafletRef.current = L

      const map = L.default.map(mapRef.current, {
        center: AFRICA_CENTER,
        zoom: AFRICA_ZOOM,
        minZoom: 3,
        maxZoom: 10,
        zoomControl: true,
        attributionControl: true,
      })

      L.default
        .tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        })
        .addTo(map)

      // Create a layer group for markers
      const markersGroup = L.default.layerGroup().addTo(map)
      markersLayerRef.current = markersGroup

      if (cancelled) {
        map.remove()
        return
      }

      mapInstanceRef.current = map
      setIsLoaded(true)
    }

    initMap()
    return () => {
      cancelled = true
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      weatherLayerRef.current = null
      markersLayerRef.current = null
      setIsLoaded(false)
    }
  }, [])

  // --- Fetch RainViewer data ---
  useEffect(() => {
    async function fetchRainViewer() {
      try {
        const res = await fetch("/api/v1/tiles/rainviewer")
        if (res.ok) {
          const data = await res.json()
          setRainViewerData(data)
          // Start at the latest past frame
          const radarPast = (data.radar?.frames || []).filter(
            (f: RainViewerFrame) => f.type === "past"
          )
          if (radarPast.length > 0) {
            setCurrentFrameIndex(radarPast.length - 1)
          }
        }
      } catch {
        // RainViewer unavailable - degrade gracefully, map still works
      }
    }
    fetchRainViewer()
    // Refresh every 5 minutes
    const interval = setInterval(fetchRainViewer, 300_000)
    return () => clearInterval(interval)
  }, [])

  // --- Weather tile layer management ---
  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded || !leafletRef.current) return
    const L = leafletRef.current.default
    const map = mapInstanceRef.current

    // Remove existing weather layer
    if (weatherLayerRef.current) {
      map.removeLayer(weatherLayerRef.current)
      weatherLayerRef.current = null
    }

    if (activeLayer === "none" || !rainViewerData || !currentFrame) return

    // Build the tile URL using RainViewer's direct tile format
    // Template: {host}{path}/256/{z}/{x}/{y}/{color}/{smooth}_{snow}.png
    const host = rainViewerData.host
    const path = currentFrame.path
    const color = activeLayer === "precipitation" ? "4" : "0" // 4 = dark-friendly for radar
    const smooth = "1"
    const snow = activeLayer === "precipitation" ? "1" : "0"

    const tileUrl = `${host}${path}/256/{z}/{x}/{y}/${color}/${smooth}_${snow}.png`

    const layer = L.tileLayer(tileUrl, {
      opacity: 0.65,
      zIndex: 10,
      attribution: '&copy; <a href="https://rainviewer.com">RainViewer</a>',
    })

    layer.addTo(map)
    weatherLayerRef.current = layer
  }, [activeLayer, currentFrame, rainViewerData, isLoaded])

  // --- Alert markers ---
  useEffect(() => {
    if (!markersLayerRef.current || !isLoaded || !leafletRef.current) return

    const L = leafletRef.current.default
    const group = markersLayerRef.current
    group.clearLayers()

    if (!alertsVisible || !alerts?.length) return

    for (const alert of alerts) {
      if (alert.latitude == null || alert.longitude == null) continue

      const config = SEVERITY_CONFIG[alert.severity] || SEVERITY_CONFIG.GREEN
      const radius =
        alert.severity === "RED"
          ? 10
          : alert.severity === "ORANGE"
            ? 8
            : alert.severity === "YELLOW"
              ? 6
              : 5

      const marker = L.circleMarker([alert.latitude, alert.longitude], {
        radius,
        fillColor: config.color,
        color: config.color,
        weight: 2,
        opacity: 0.9,
        fillOpacity: 0.5,
      })

      marker.bindPopup(
        `<div style="min-width:180px">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${config.color};margin-bottom:4px">
            ${config.label} - ${alert.hazard_type}
          </div>
          <div style="font-size:13px;font-weight:600;margin-bottom:6px;color:#e2e8f0">${alert.title}</div>
          ${alert.country ? `<div style="font-size:11px;color:#94a3b8;margin-bottom:2px">${alert.country}${alert.region ? ` - ${alert.region}` : ""}</div>` : ""}
          ${alert.population_affected ? `<div style="font-size:11px;color:#94a3b8">Pop. affected: ${alert.population_affected.toLocaleString()}</div>` : ""}
          ${alert.source ? `<div style="font-size:10px;color:#64748b;margin-top:4px">Source: ${alert.source}</div>` : ""}
        </div>`,
        { className: "afro-storm-popup" }
      )

      marker.on("click", () => onAlertClick?.(alert))
      marker.addTo(group)
    }
  }, [alerts, isLoaded, alertsVisible, onAlertClick])

  // --- Playback animation loop ---
  useEffect(() => {
    if (animationRef.current) {
      clearInterval(animationRef.current)
      animationRef.current = null
    }

    if (isPlaying && activeFrames.length > 0) {
      animationRef.current = setInterval(() => {
        setCurrentFrameIndex((prev) => {
          const next = prev + 1
          return next >= activeFrames.length ? 0 : next
        })
      }, 800) // 800ms per frame = smooth enough for radar playback
    }

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current)
        animationRef.current = null
      }
    }
  }, [isPlaying, activeFrames.length])

  // --- Playback controls ---
  const handlePlayPause = useCallback(() => setIsPlaying((p) => !p), [])

  const handleStepForward = useCallback(() => {
    setIsPlaying(false)
    setCurrentFrameIndex((prev) =>
      prev + 1 >= activeFrames.length ? 0 : prev + 1
    )
  }, [activeFrames.length])

  const handleStepBack = useCallback(() => {
    setIsPlaying(false)
    setCurrentFrameIndex((prev) =>
      prev - 1 < 0 ? activeFrames.length - 1 : prev - 1
    )
  }, [activeFrames.length])

  const handleFrameChange = useCallback((index: number) => {
    setIsPlaying(false)
    setCurrentFrameIndex(index)
  }, [])

  const handleLayerChange = useCallback((layer: WeatherLayer) => {
    setActiveLayer(layer)
    setCurrentFrameIndex(0)
    setIsPlaying(false)
  }, [])

  const handleToggleAlerts = useCallback(() => {
    setAlertsVisible((v) => !v)
  }, [])

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${borderless ? "" : "rounded-lg border border-border"}`}
    >
      <div ref={mapRef} className="w-full h-full" />

      {/* Map controls - layers + time playback */}
      {isLoaded && (
        <MapControls
          activeLayer={activeLayer}
          onLayerChange={handleLayerChange}
          alertsVisible={alertsVisible}
          onToggleAlerts={handleToggleAlerts}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onStepForward={handleStepForward}
          onStepBack={handleStepBack}
          currentFrameTime={currentFrame?.time ?? null}
          totalFrames={activeFrames.length}
          currentFrameIndex={currentFrameIndex}
          onFrameChange={handleFrameChange}
        />
      )}

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-card">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-muted-foreground font-mono">
              Loading Africa Map...
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
