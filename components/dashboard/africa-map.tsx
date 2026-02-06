"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { SEVERITY_CONFIG, AFRICA_CENTER, AFRICA_ZOOM } from "@/lib/constants"
import type { HazardAlert } from "@/lib/types"
import { MapControls, type WeatherLayer } from "./map-controls"

// RainViewer max tile zoom is 7. Beyond this, tiles return blank.
const RAINVIEWER_MAX_ZOOM = 7

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

  // Double-buffer: two tile layers, we fade between them
  const weatherLayerARef = useRef<import("leaflet").TileLayer | null>(null)
  const weatherLayerBRef = useRef<import("leaflet").TileLayer | null>(null)
  const activeBufferRef = useRef<"A" | "B">("A")

  const [isLoaded, setIsLoaded] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(AFRICA_ZOOM)

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

  // Build the correct RainViewer tile URL
  // Format: {host}{path}/256/{z}/{x}/{y}/{color}/{smooth}_{snow}.png
  const buildTileUrl = useCallback(
    (frame: RainViewerFrame | null, layer: WeatherLayer): string | null => {
      if (!frame || !rainViewerData?.host || layer === "none") return null
      const host = rainViewerData.host
      const path = frame.path
      // Color scheme: 4 = dark-sky friendly for radar, 0 = original for satellite IR
      const color = layer === "precipitation" ? "4" : "0"
      const smooth = "1"
      const snow = layer === "precipitation" ? "1" : "0"
      return `${host}${path}/256/{z}/{x}/{y}/${color}/${smooth}_${snow}.png`
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

      // Track zoom for the radar zoom gate
      map.on("zoomend", () => {
        setZoomLevel(map.getZoom())
      })

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
      weatherLayerARef.current = null
      weatherLayerBRef.current = null
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

  // --- Double-buffered weather tile layer management ---
  // This is the key fix: instead of calling setUrl() on a single layer (which causes blink),
  // we maintain two tile layers and cross-fade between them. The "back" layer loads the new
  // frame tiles silently, then we swap opacity: the new one fades to 0.65, the old one fades to 0.
  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded || !leafletRef.current) return
    const L = leafletRef.current.default
    const map = mapInstanceRef.current

    const tileUrl = buildTileUrl(currentFrame, activeLayer)

    // If no layer selected or zoomed beyond RainViewer limit, remove both buffers
    if (!tileUrl || zoomLevel > RAINVIEWER_MAX_ZOOM) {
      if (weatherLayerARef.current) {
        map.removeLayer(weatherLayerARef.current)
        weatherLayerARef.current = null
      }
      if (weatherLayerBRef.current) {
        map.removeLayer(weatherLayerBRef.current)
        weatherLayerBRef.current = null
      }
      return
    }

    // Determine which buffer is "front" (visible) and which is "back" (loading)
    const isFrontA = activeBufferRef.current === "A"
    const frontRef = isFrontA ? weatherLayerARef : weatherLayerBRef
    const backRef = isFrontA ? weatherLayerBRef : weatherLayerARef

    // Remove the old back layer if it exists
    if (backRef.current) {
      map.removeLayer(backRef.current)
      backRef.current = null
    }

    // Create new back layer with the new frame's tiles (step 1: opacity 0)
    const newLayer = L.tileLayer(tileUrl, {
      opacity: 0,
      zIndex: 10,
      maxNativeZoom: RAINVIEWER_MAX_ZOOM,
      maxZoom: 10, // allow map to zoom beyond, but Leaflet reuses z7 tiles (scaled)
      attribution: '&copy; <a href="https://rainviewer.com">RainViewer</a>',
    })

    // Step 2: add to map (invisible)
    newLayer.addTo(map)
    backRef.current = newLayer

    // Guard: ensure swap only fires once (prevents race between load + fallback)
    let swapped = false

    function doSwap() {
      if (swapped) return
      swapped = true

      // Step 4: fade back (new) layer in
      if (backRef.current) backRef.current.setOpacity(0.65)

      // Step 5: fade front (old) layer out
      if (frontRef.current) frontRef.current.setOpacity(0)

      // Step 6: remove old front after brief delay so user never sees empty
      setTimeout(() => {
        if (frontRef.current && mapInstanceRef.current) {
          mapInstanceRef.current.removeLayer(frontRef.current)
          frontRef.current = null
        }
      }, 100)

      // Flip the buffer pointer
      activeBufferRef.current = isFrontA ? "B" : "A"
    }

    // Step 3: wait for tiles to load, then swap
    newLayer.on("load", doSwap)

    // Fallback: if tiles don't load within 2s (slow network / offline), force swap
    // The `swapped` guard ensures this is a no-op if `load` already fired.
    const fallbackTimer = setTimeout(doSwap, 2000)

    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [activeLayer, currentFrame, rainViewerData, isLoaded, zoomLevel, buildTileUrl])

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
      }, 1000) // 1s per frame - gives tiles time to load with double-buffer
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

  // Whether the zoom is too high for radar tiles
  const isZoomBeyondRadar = zoomLevel > RAINVIEWER_MAX_ZOOM && activeLayer !== "none"

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${borderless ? "" : "rounded-lg border border-border"}`}
    >
      <div ref={mapRef} className="w-full h-full" />

      {/* Zoom warning when beyond RainViewer limit */}
      {isZoomBeyondRadar && isLoaded && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-[500] px-3 py-1.5 rounded-md bg-severity-yellow/20 border border-severity-yellow/30 backdrop-blur-md">
          <span className="text-xs font-semibold text-severity-yellow font-mono">
            Zoom out to see weather overlay (max zoom {RAINVIEWER_MAX_ZOOM})
          </span>
        </div>
      )}

      {/* Map controls */}
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
