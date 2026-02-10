"use client"

import { useState, useCallback } from "react"
import dynamic from "next/dynamic"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AlertDetail } from "@/components/dashboard/alert-detail"
import { useAlerts } from "@/hooks/use-afro-storm"
import type { HazardAlert } from "@/lib/types"
import {
  CycloneTrackVisualization,
  FloodMonitorVisualization,
  DroughtMonitorVisualization,
  WildfireTrackerVisualization,
} from "@/components/visualizations"

const AfricaMap = dynamic(
  () =>
    import("@/components/dashboard/africa-map").then((mod) => ({
      default: mod.AfricaMap,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-card">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground font-mono">
            Loading Africa Threat Map...
          </p>
        </div>
      </div>
    ),
  }
)

export default function MapPage() {
  const [selectedAlert, setSelectedAlert] = useState<HazardAlert | null>(null)
  const { data: alertsData } = useAlerts()

  const alerts: HazardAlert[] = alertsData?.alerts || []

  const alertCounts = {
    red: alerts.filter((a) => a.severity === "RED").length,
    orange: alerts.filter((a) => a.severity === "ORANGE").length,
    yellow: alerts.filter((a) => a.severity === "YELLOW").length,
    green: alerts.filter((a) => a.severity === "GREEN").length,
  }

  const handleAlertClick = useCallback((alert: HazardAlert) => {
    setSelectedAlert(alert)
  }, [])

  return (
    <DashboardShell alertCounts={alertCounts}>
      {/* Full-screen map fills all remaining space */}
      <main className="flex-1 relative overflow-hidden">
        {/* Floating alert summary */}
        <div className="absolute top-3 left-3 z-[500] flex items-center gap-2">
          {alertCounts.red > 0 && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-severity-red/20 border border-severity-red/30 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-severity-red animate-severity-pulse" />
              <span className="text-xs font-bold text-severity-red font-mono">{alertCounts.red} RED</span>
            </div>
          )}
          {alertCounts.orange > 0 && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-severity-orange/20 border border-severity-orange/30 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-severity-orange" />
              <span className="text-xs font-bold text-severity-orange font-mono">{alertCounts.orange} ORG</span>
            </div>
          )}
          {alertCounts.yellow > 0 && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-severity-yellow/20 border border-severity-yellow/30 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-severity-yellow" />
              <span className="text-xs font-bold text-severity-yellow font-mono">{alertCounts.yellow} YLW</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-background/70 border border-border backdrop-blur-md">
            <span className="text-xs font-mono text-muted-foreground">{alerts.length} total</span>
          </div>
        </div>

        {/* Map */}
        <AfricaMap alerts={alerts} onAlertClick={handleAlertClick} borderless />

        {/* Bottom Panel with Visualizations */}
        <div className="absolute bottom-0 left-0 right-0 z-[500] max-h-[45vh] overflow-y-auto">
          <div className="bg-card/95 backdrop-blur-md border-t border-border p-4">
            <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Live Hazard Tracking & Monitoring
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <CycloneTrackVisualization />
              <FloodMonitorVisualization />
              <DroughtMonitorVisualization />
              <WildfireTrackerVisualization />
            </div>
          </div>
        </div>
      </main>

      {selectedAlert && (
        <AlertDetail
          alert={selectedAlert}
          onClose={() => setSelectedAlert(null)}
        />
      )}
    </DashboardShell>
  )
}
