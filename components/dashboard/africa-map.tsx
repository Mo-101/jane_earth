"use client"

import { useEffect, useRef, useState } from "react"
import { SEVERITY_CONFIG, AFRICA_CENTER, AFRICA_ZOOM } from "@/lib/constants"
import type { HazardAlert } from "@/lib/types"

interface AfricaMapProps {
  alerts: HazardAlert[]
  onAlertClick?: (alert: HazardAlert) => void
  borderless?: boolean
}

export function AfricaMap({ alerts, onAlertClick, borderless }: AfricaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    let L: typeof import("leaflet")

    async function initMap() {
      L = (await import("leaflet")).default
      await import("leaflet/dist/leaflet.css")

      if (!mapRef.current) return

      const map = L.map(mapRef.current, {
        center: AFRICA_CENTER,
        zoom: AFRICA_ZOOM,
        minZoom: 3,
        maxZoom: 10,
        zoomControl: true,
        attributionControl: true,
      })

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map)

      mapInstanceRef.current = map
      setIsLoaded(true)
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded || !alerts?.length) return

    let L: typeof import("leaflet")

    async function addMarkers() {
      L = (await import("leaflet")).default
      const map = mapInstanceRef.current as import("leaflet").Map

      map.eachLayer((layer: import("leaflet").Layer) => {
        if ((layer as import("leaflet").CircleMarker).getRadius) {
          map.removeLayer(layer)
        }
      })

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

        marker.on("click", () => {
          onAlertClick?.(alert)
        })

        marker.addTo(map)
      }
    }

    addMarkers()
  }, [alerts, isLoaded, onAlertClick])

  return (
    <div className={`relative w-full h-full overflow-hidden ${borderless ? "" : "rounded-lg border border-border"}`}>
      <div ref={mapRef} className="w-full h-full" />
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
