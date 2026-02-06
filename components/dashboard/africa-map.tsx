"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { SEVERITY_CONFIG, AFRICA_CENTER, AFRICA_ZOOM } from "@/lib/constants"
import type { HazardAlert } from "@/lib/types"
import { MapControls, type WeatherLayer } from "./map-controls"
import { TemperatureOverlay } from "./temperature-overlay"
import { WindOverlay } from "./wind-overlay"

const RAINVIEWER_MAX_ZOOM = 7
const FRAME_OPACITY = 0.65
const TRANSITION_MS = 400

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
  const leafletRef = useRef<typeof import("leaflet") | null>(null)
  const markersLayerRef = useRef<import("leaflet").LayerGroup | null>(null)

  // Filmstrip: array of pre-loaded tile layers, one per frame
  const filmstripRef = useRef<import("leaflet").TileLayer[]>([])
  const prevFrameIndexRef = useRef<number>(-1)

  const [isLoaded, setIsLoaded] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(AFRICA_ZOOM)
  const [filmstripReady, setFilmstripReady] = useState(false)

  // Weather layer state
  const [activeLayer, setActiveLayer] = useState<WeatherLayer>("none")
  const [alertsVisible, setAlertsVisible] = useState(true)
  const [rainViewerData, setRainViewerData] = useState<RainViewerData | null>(null)

  // Weather grid data (for temperature + wind overlays)
  const [gridData, setGridData] = useState<{
    points: Array<{
      lat: number
      lon: number
      temperature: number
      wind_speed: number
      wind_direction: number
      wind_u: number
      wind_v: number
    }>
  } | null>(null)

  // Time animation state
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const rafRef = useRef<number | null>(null)
  const lastTickRef = useRef<number>(0)

  // Get active frames based on selected layer
  const activeFrames: RainViewerFrame[] =
    activeLayer === "precipitation"
      ? rainViewerData?.radar.frames || []
      : activeLayer === "satellite"
        ? rainViewerData?.satellite.frames || []
        : []

  // Clamp frame index when frames array changes
  useEffect(() => {
    setCurrentFrameIndex((i) => Math.min(i, Math.max(0, activeFrames.length - 1)))
  }, [activeFrames.length])

  const currentFrame = activeFrames[currentFrameIndex] || null

  // Build the correct RainViewer tile URL
  const buildTileUrl = useCallback(
    (frame: RainViewerFrame, layer: WeatherLayer): string => {
      const host = rainViewerData?.host || ""
      const color = layer === "precipitation" ? "4" : "0"
      const smooth = "1"
      const snow = layer === "precipitation" ? "1" : "0"
      return `${host}${frame.path}/256/{z}/{x}/{y}/${color}/${smooth}_${snow}.png`
    },
    [rainViewerData]
  )

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

      map.on("zoomend", () => setZoomLevel(map.getZoom()))

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
      filmstripRef.current = []
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
          const radarPast = (data.radar?.frames || []).filter(
            (f: RainViewerFrame) => f.type === "past"
          )
          if (radarPast.length > 0) {
            setCurrentFrameIndex(radarPast.length - 1)
          }
        }
      } catch {
        // RainViewer unavailable - degrade gracefully
      }
    }
    fetchRainViewer()
    const interval = setInterval(fetchRainViewer, 300_000)
    return () => clearInterval(interval)
  }, [])

  // --- Fetch weather grid data (temperature + wind) ---
  useEffect(() => {
    // Only fetch when temperature or wind layer is active
    if (activeLayer !== "temperature" && activeLayer !== "wind") return

    async function fetchGrid() {
      try {
        const res = await fetch("/api/v1/weather/grid")
        if (res.ok) {
          const data = await res.json()
          setGridData(data)
        }
      } catch {
        // Degrade gracefully
      }
    }
    fetchGrid()
    const interval = setInterval(fetchGrid, 900_000) // 15 min
    return () => clearInterval(interval)
  }, [activeLayer])

  // --- FILMSTRIP: Pre-load ALL frame tile layers when layer or data changes ---
  // This is the key to smooth animation: every frame is a tile layer already on the map at opacity 0.
  // Animation just toggles opacity. No network requests during playback.
  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded || !leafletRef.current) return
    if (activeLayer === "none" || activeFrames.length === 0 || !rainViewerData?.host) {
      // Tear down existing filmstrip
      for (const layer of filmstripRef.current) {
        if (mapInstanceRef.current) mapInstanceRef.current.removeLayer(layer)
      }
      filmstripRef.current = []
      prevFrameIndexRef.current = -1
      setFilmstripReady(false)
      return
    }

    const L = leafletRef.current.default
    const map = mapInstanceRef.current

    // Tear down old filmstrip before building new one
    for (const layer of filmstripRef.current) {
      map.removeLayer(layer)
    }
    filmstripRef.current = []
    prevFrameIndexRef.current = -1
    setFilmstripReady(false)

    // Build new filmstrip: one tile layer per frame, all at opacity 0
    const layers: import("leaflet").TileLayer[] = []

    for (let i = 0; i < activeFrames.length; i++) {
      const url = buildTileUrl(activeFrames[i], activeLayer)
      const layer = L.tileLayer(url, {
        opacity: 0,
        zIndex: 500,
        maxNativeZoom: RAINVIEWER_MAX_ZOOM,
        maxZoom: 10,
        updateWhenZooming: false,
        keepBuffer: 2,
        attribution: i === 0 ? '&copy; <a href="https://rainviewer.com">RainViewer</a>' : "",
      })

      layer.addTo(map)

      // Inject CSS transition on the tile container for smooth cross-fade
      const container = layer.getContainer()
      if (container) {
        container.style.transition = `opacity ${TRANSITION_MS}ms ease`
      }

      layers.push(layer)
    }

    filmstripRef.current = layers

    // Show the current frame immediately
    const startIdx = Math.min(currentFrameIndex, layers.length - 1)
    if (layers[startIdx]) {
      layers[startIdx].setOpacity(FRAME_OPACITY)
      prevFrameIndexRef.current = startIdx
    }

    setFilmstripReady(true)

    return () => {
      for (const layer of layers) {
        if (mapInstanceRef.current) mapInstanceRef.current.removeLayer(layer)
      }
    }
    // Intentionally only rebuild filmstrip when layer type or data changes, NOT on frame index change.
  }, [activeLayer, rainViewerData, isLoaded])

  // --- SMOOTH FRAME TRANSITION: Toggle opacity between prev and current ---
  // This runs on every frame index change. Because the CSS transition is already on the container,
  // setOpacity triggers a smooth fade - no JS animation loop needed for the visual transition.
  useEffect(() => {
    if (!filmstripReady || filmstripRef.current.length === 0) return

    const layers = filmstripRef.current
    const prevIdx = prevFrameIndexRef.current
    const currIdx = Math.min(currentFrameIndex, layers.length - 1)

    if (prevIdx === currIdx) return

    // Fade out previous frame
    if (prevIdx >= 0 && prevIdx < layers.length) {
      layers[prevIdx].setOpacity(0)
    }

    // Fade in current frame
    if (layers[currIdx]) {
      layers[currIdx].setOpacity(FRAME_OPACITY)
    }

    prevFrameIndexRef.current = currIdx
  }, [currentFrameIndex, filmstripReady])

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
        alert.severity === "RED" ? 10 : alert.severity === "ORANGE" ? 8 : alert.severity === "YELLOW" ? 6 : 5

      const marker = L.default.circleMarker([alert.latitude, alert.longitude], {
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

  // --- Playback: requestAnimationFrame loop for smooth timing ---
  useEffect(() => {
    if (!isPlaying || activeFrames.length === 0) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      return
    }

    // Interval per frame: 1000ms base, but CSS transition takes TRANSITION_MS,
    // so we wait at least TRANSITION_MS + 200ms breathing room per frame.
    const interval = Math.max(1000, TRANSITION_MS + 200)

    function tick(timestamp: number) {
      if (timestamp - lastTickRef.current >= interval) {
        lastTickRef.current = timestamp
        setCurrentFrameIndex((prev) => {
          const next = prev + 1
          return next >= activeFrames.length ? 0 : next
        })
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    lastTickRef.current = performance.now()
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [isPlaying, activeFrames.length])

  // --- Playback controls ---
  const handlePlayPause = useCallback(() => setIsPlaying((p) => !p), [])

  const handleStepForward = useCallback(() => {
    setIsPlaying(false)
    setCurrentFrameIndex((prev) => (prev + 1 >= activeFrames.length ? 0 : prev + 1))
  }, [activeFrames.length])

  const handleStepBack = useCallback(() => {
    setIsPlaying(false)
    setCurrentFrameIndex((prev) => (prev - 1 < 0 ? activeFrames.length - 1 : prev - 1))
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

  const isZoomBeyondRadar = zoomLevel > RAINVIEWER_MAX_ZOOM && (activeLayer === "precipitation" || activeLayer === "satellite")

  return (
    <div className={`relative w-full h-full overflow-hidden ${borderless ? "" : "rounded-lg border border-border"}`}>
      <div ref={mapRef} className="w-full h-full" />

      {isZoomBeyondRadar && isLoaded && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-[500] px-3 py-1.5 rounded-md bg-severity-yellow/20 border border-severity-yellow/30 backdrop-blur-md">
          <span className="text-xs font-semibold text-severity-yellow font-mono">
            {"Zoom out to see weather overlay (max zoom 7)"}
          </span>
        </div>
      )}

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

      {/* Canvas overlays (temperature + wind) - rendered as Leaflet layers, not DOM children */}
      <TemperatureOverlay
        map={mapInstanceRef.current}
        L={leafletRef.current}
        points={gridData?.points || []}
        visible={activeLayer === "temperature" && isLoaded}
      />
      <WindOverlay
        map={mapInstanceRef.current}
        points={gridData?.points || []}
        visible={activeLayer === "wind" && isLoaded}
      />

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-card">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-muted-foreground font-mono">Loading Africa Map...</p>
          </div>
        </div>
      )}
    </div>
  )
}
