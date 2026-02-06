"use client"

import { useState, useCallback } from "react"
import dynamic from "next/dynamic"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar, type DashboardView } from "@/components/dashboard/sidebar"
import { AlertPanel } from "@/components/dashboard/alert-panel"
import { AlertDetail } from "@/components/dashboard/alert-detail"
import { SeverityStats } from "@/components/dashboard/severity-stats"
import { WeatherPanel } from "@/components/dashboard/weather-panel"
import { CommunityReportForm } from "@/components/dashboard/community-report-form"
import { ReportsList } from "@/components/dashboard/reports-list"
import { PipelineStatus } from "@/components/dashboard/pipeline-status"
import { HazardChart } from "@/components/dashboard/hazard-chart"
import {
  useAlerts,
  useWeather,
  usePipelineStatus,
  useCommunityReports,
} from "@/hooks/use-afro-storm"
import type { HazardAlert, Severity } from "@/lib/types"
import {
  AlertTriangle,
  Map as MapIcon,
  Cloud,
  Users,
  Activity,
  BarChart3,
  Database,
  FileText,
  Plus,
} from "lucide-react"

const AfricaMap = dynamic(
  () =>
    import("@/components/dashboard/africa-map").then((mod) => ({
      default: mod.AfricaMap,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-card rounded-lg border border-border">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground font-mono">
            Loading Africa Map...
          </p>
        </div>
      </div>
    ),
  }
)

export default function DashboardPage() {
  const [currentView, setCurrentView] = useState<DashboardView>("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedAlert, setSelectedAlert] = useState<HazardAlert | null>(null)
  const [severityFilter, setSeverityFilter] = useState<Severity | null>(null)

  const { data: alertsData } = useAlerts()
  const { data: weatherData, isLoading: weatherLoading } = useWeather()
  const { data: pipelineData, isLoading: pipelineLoading } = usePipelineStatus()
  const {
    data: reportsData,
    isLoading: reportsLoading,
    mutate: mutateReports,
  } = useCommunityReports()

  const alerts: HazardAlert[] = alertsData?.alerts || []
  const reports = reportsData?.reports || []

  const alertCounts = {
    red: alerts.filter((a) => a.severity === "RED").length,
    orange: alerts.filter((a) => a.severity === "ORANGE").length,
    yellow: alerts.filter((a) => a.severity === "YELLOW").length,
    green: alerts.filter((a) => a.severity === "GREEN").length,
  }

  const handleAlertClick = useCallback((alert: HazardAlert) => {
    setSelectedAlert(alert)
  }, [])

  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar
        currentView={currentView}
        onViewChange={(view) => {
          setCurrentView(view)
          setSidebarOpen(false)
        }}
        isOpen={sidebarOpen}
        alertCounts={alertCounts}
      />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          className="fixed inset-0 z-30 bg-background/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
          type="button"
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader
          onToggleSidebar={handleSidebarToggle}
          sidebarOpen={sidebarOpen}
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-5">
          {/* ========== OVERVIEW ========== */}
          {currentView === "overview" && (
            <div className="space-y-4">
              <SeverityStats alerts={alerts} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Map - 2/3 */}
                <div className="lg:col-span-2 h-[400px] lg:h-[480px]">
                  <AfricaMap
                    alerts={alerts}
                    onAlertClick={handleAlertClick}
                  />
                </div>

                {/* Alert panel - 1/3 */}
                <div className="h-[400px] lg:h-[480px] rounded-lg border border-border bg-card overflow-hidden flex flex-col">
                  <div className="px-3 py-2.5 border-b border-border shrink-0">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-severity-orange" />
                      <h2 className="text-sm font-semibold text-foreground">
                        Active Alerts
                      </h2>
                      {alerts.length > 0 && (
                        <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                          {alerts.length}
                        </span>
                      )}
                    </div>
                  </div>
                  <AlertPanel
                    alerts={alerts}
                    onAlertClick={handleAlertClick}
                    selectedSeverity={severityFilter}
                    onSeverityFilter={setSeverityFilter}
                    compact
                  />
                </div>
              </div>

              {/* Weather + Hazard chart row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <WeatherPanel data={weatherData} isLoading={weatherLoading} />

                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">
                      Hazard Distribution
                    </h3>
                  </div>
                  <HazardChart alerts={alerts} />
                </div>
              </div>
            </div>
          )}

          {/* ========== ALERTS ========== */}
          {currentView === "alerts" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-severity-orange" />
                <h2 className="text-lg font-bold text-foreground">
                  Active Alerts
                </h2>
                <span className="text-sm text-muted-foreground">
                  ({alerts.length} total)
                </span>
              </div>
              <SeverityStats alerts={alerts} />
              <div className="rounded-lg border border-border bg-card overflow-hidden max-h-[600px]">
                <AlertPanel
                  alerts={alerts}
                  onAlertClick={handleAlertClick}
                  selectedSeverity={severityFilter}
                  onSeverityFilter={setSeverityFilter}
                />
              </div>
            </div>
          )}

          {/* ========== MAP ========== */}
          {currentView === "map" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <MapIcon className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">
                  Africa Threat Map
                </h2>
              </div>
              <div className="h-[calc(100vh-180px)]">
                <AfricaMap
                  alerts={alerts}
                  onAlertClick={handleAlertClick}
                />
              </div>
            </div>
          )}

          {/* ========== WEATHER ========== */}
          {currentView === "weather" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">
                  Weather Intelligence
                </h2>
              </div>
              <WeatherPanel data={weatherData} isLoading={weatherLoading} />
            </div>
          )}

          {/* ========== STORM TRACKER ========== */}
          {currentView === "storms" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-5 w-5 text-severity-orange" />
                <h2 className="text-lg font-bold text-foreground">
                  Storm Tracker
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 h-[500px]">
                  <AfricaMap
                    alerts={alerts.filter(
                      (a) =>
                        a.hazard_type === "CYCLONE" ||
                        a.hazard_type === "STORM"
                    )}
                    onAlertClick={handleAlertClick}
                  />
                </div>
                <div className="h-[500px] rounded-lg border border-border bg-card overflow-hidden flex flex-col">
                  <div className="px-3 py-2.5 border-b border-border shrink-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      Active Storms
                    </h3>
                  </div>
                  <AlertPanel
                    alerts={alerts.filter(
                      (a) =>
                        a.hazard_type === "CYCLONE" ||
                        a.hazard_type === "STORM"
                    )}
                    onAlertClick={handleAlertClick}
                    compact
                  />
                </div>
              </div>
            </div>
          )}

          {/* ========== COMMUNITY ========== */}
          {currentView === "community" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">
                  Community Field Reports
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Plus className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">
                      Submit a Field Report
                    </h3>
                  </div>
                  <CommunityReportForm
                    onSubmitSuccess={() => mutateReports()}
                  />
                </div>

                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">
                      Recent Reports
                    </h3>
                    <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                      {reports.length}
                    </span>
                  </div>
                  <ReportsList reports={reports} isLoading={reportsLoading} />
                </div>
              </div>
            </div>
          )}

          {/* ========== ANALYTICS ========== */}
          {currentView === "analytics" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">
                  Analytics Dashboard
                </h2>
              </div>

              <SeverityStats alerts={alerts} />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-card p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-4">
                    Hazard Type Distribution
                  </h3>
                  <HazardChart alerts={alerts} />
                </div>

                <div className="rounded-lg border border-border bg-card p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-4">
                    Alerts by Country
                  </h3>
                  <CountryBreakdown alerts={alerts} />
                </div>
              </div>
            </div>
          )}

          {/* ========== PIPELINE ========== */}
          {currentView === "pipeline" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">
                  Data Pipeline
                </h2>
              </div>
              <PipelineStatus
                data={pipelineData}
                isLoading={pipelineLoading}
              />
            </div>
          )}
        </main>
      </div>

      {/* Alert detail modal */}
      {selectedAlert && (
        <AlertDetail
          alert={selectedAlert}
          onClose={() => setSelectedAlert(null)}
        />
      )}
    </div>
  )
}

/* ---- Country breakdown sub-component ---- */
function CountryBreakdown({ alerts }: { alerts: HazardAlert[] }) {
  const countryCounts: Record<string, { total: number; red: number }> = {}
  for (const alert of alerts) {
    const country = alert.country || "Unknown"
    if (!countryCounts[country])
      countryCounts[country] = { total: 0, red: 0 }
    countryCounts[country].total += 1
    if (alert.severity === "RED") countryCounts[country].red += 1
  }

  const sorted = Object.entries(countryCounts)
    .sort(([, a], [, b]) => b.total - a.total)
    .slice(0, 10)

  if (sorted.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-sm text-muted-foreground">
        No country data to display
      </div>
    )
  }

  const maxCount = sorted[0][1].total

  return (
    <div className="space-y-2">
      {sorted.map(([country, data]) => (
        <div key={country} className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground w-28 truncate">
            {country}
          </span>
          <div className="flex-1 h-4 rounded bg-secondary/50 overflow-hidden">
            <div
              className="h-full rounded bg-primary/60 transition-all"
              style={{ width: `${(data.total / maxCount) * 100}%` }}
            />
          </div>
          <div className="flex items-center gap-1.5 w-16 justify-end">
            <span className="text-xs font-mono text-foreground">
              {data.total}
            </span>
            {data.red > 0 && (
              <span className="text-[10px] font-mono text-severity-red">
                ({data.red})
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
