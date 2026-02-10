"use client"

import { Suspense, useState, useCallback, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AlertPanel } from "@/components/dashboard/alert-panel"
import { AlertDetail } from "@/components/dashboard/alert-detail"
import { SeverityStats } from "@/components/dashboard/severity-stats"
import { WeatherPanel } from "@/components/dashboard/weather-panel"
import { CommunityReportForm } from "@/components/dashboard/community-report-form"
import { ReportsList } from "@/components/dashboard/reports-list"
import { PipelineStatus } from "@/components/dashboard/pipeline-status"
import { HazardChart } from "@/components/dashboard/hazard-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  useAlerts,
  useWeather,
  usePipelineStatus,
  useCommunityReports,
} from "@/hooks/use-afro-storm"
import type { HazardAlert, Severity } from "@/lib/types"
import {
  AlertTriangle,
  Cloud,
  Users,
  BarChart3,
  Database,
  FileText,
  Plus,
  Wind,
  Waves,
  Sun,
  Flame,
  Activity,
  Globe,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
} from "lucide-react"

type AnalyticsView = "overview" | "alerts" | "weather" | "community" | "pipeline"

// Mock summary data for analytics
const HAZARD_SUMMARIES = {
  cyclone: {
    active: 2,
    atRisk: 850000,
    nextUpdate: "2026-01-15T18:00:00Z",
    confidence: "medium" as const,
  },
  flood: {
    active: 3,
    atRisk: 250000,
    totalArea: 1250 + 2100 + 680,
    nextUpdate: "2026-01-15T14:00:00Z",
  },
  drought: {
    active: 3,
    atRisk: 8500000,
    duration: 52,
    severity: "D3" as const,
  },
  wildfire: {
    active: 3,
    atRisk: 85000,
    totalArea: 45200,
    containment: 45,
  },
}

export default function AnalyticsPageWrapper() {
  return (
    <Suspense fallback={null}>
      <AnalyticsPage />
    </Suspense>
  )
}

function AnalyticsPage() {
  const searchParams = useSearchParams()
  const viewParam = searchParams.get("view") as AnalyticsView | null
  const currentView: AnalyticsView = viewParam || "overview"

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

  const alertCounts = useMemo(
    () => ({
      red: alerts.filter((a) => a.severity === "RED").length,
      orange: alerts.filter((a) => a.severity === "ORANGE").length,
      yellow: alerts.filter((a) => a.severity === "YELLOW").length,
      green: alerts.filter((a) => a.severity === "GREEN").length,
    }),
    [alerts]
  )

  // Count by hazard type
  const hazardCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    alerts.forEach((alert) => {
      counts[alert.hazard_type] = (counts[alert.hazard_type] || 0) + 1
    })
    return counts
  }, [alerts])

  const handleAlertClick = useCallback((alert: HazardAlert) => {
    setSelectedAlert(alert)
  }, [])

  return (
    <DashboardShell alertCounts={alertCounts}>
      <main className="flex-1 overflow-y-auto p-4 lg:p-5">
        {/* ========== COMMAND CENTER (Overview) ========== */}
        {currentView === "overview" && (
          <div className="space-y-4">
            {/* Severity Stats */}
            <SeverityStats alerts={alerts} />

            {/* Hazard Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Cyclone Card */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Wind className="h-4 w-4 text-severity-red" />
                      Cyclones
                    </CardTitle>
                    <Badge variant="outline" className="text-[10px]">
                      {HAZARD_SUMMARIES.cyclone.active} Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold">{HAZARD_SUMMARIES.cyclone.atRisk.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">People at Risk</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full",
                      HAZARD_SUMMARIES.cyclone.confidence === "high" ? "bg-severity-green/20 text-severity-green" :
                      HAZARD_SUMMARIES.cyclone.confidence === "medium" ? "bg-severity-yellow/20 text-severity-yellow" :
                      "bg-severity-orange/20 text-severity-orange"
                    )}>
                      {HAZARD_SUMMARIES.cyclone.confidence} confidence
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    Next update: {new Date(HAZARD_SUMMARIES.cyclone.nextUpdate).toLocaleTimeString()}
                  </p>
                </CardContent>
              </Card>

              {/* Flood Card */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Waves className="h-4 w-4 text-severity-orange" />
                      Floods
                    </CardTitle>
                    <Badge variant="outline" className="text-[10px]">
                      {HAZARD_SUMMARIES.flood.active} Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold">{HAZARD_SUMMARIES.flood.atRisk.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">People at Risk</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{(HAZARD_SUMMARIES.flood.totalArea).toLocaleString()} km²</p>
                    <p className="text-xs text-muted-foreground">Total Affected Area</p>
                  </div>
                </CardContent>
              </Card>

              {/* Drought Card */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Sun className="h-4 w-4 text-yellow-500" />
                      Droughts
                    </CardTitle>
                    <Badge variant="outline" className="text-[10px]">
                      {HAZARD_SUMMARIES.drought.active} Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold">{(HAZARD_SUMMARIES.drought.atRisk / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-muted-foreground">People Affected</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Max Duration:</span>
                    <span className="text-sm font-medium">{HAZARD_SUMMARIES.drought.duration} months</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] border-purple-500 text-purple-500">
                    Severity: {HAZARD_SUMMARIES.drought.severity}
                  </Badge>
                </CardContent>
              </Card>

              {/* Wildfire Card */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Flame className="h-4 w-4 text-severity-red" />
                      Wildfires
                    </CardTitle>
                    <Badge variant="outline" className="text-[10px]">
                      {HAZARD_SUMMARIES.wildfire.active} Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold">{(HAZARD_SUMMARIES.wildfire.totalArea / 100).toFixed(0)}</p>
                    <p className="text-xs text-muted-foreground">km² Burned</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Containment</span>
                      <span className="font-medium">{HAZARD_SUMMARIES.wildfire.containment}%</span>
                    </div>
                    <Progress value={HAZARD_SUMMARIES.wildfire.containment} className="h-1.5" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Regional Activity */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  Regional Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CountryBreakdown alerts={alerts} />
              </CardContent>
            </Card>

            {/* Weather + Hazard Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <WeatherPanel data={weatherData} isLoading={weatherLoading} />
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    Hazard Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <HazardChart alerts={alerts} />
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{alerts.length}</p>
                      <p className="text-xs text-muted-foreground">Total Alerts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-severity-red/10 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-severity-red" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{alertCounts.red}</p>
                      <p className="text-xs text-muted-foreground">Critical (RED)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-severity-orange/10 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-severity-orange" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{Object.keys(hazardCounts).length}</p>
                      <p className="text-xs text-muted-foreground">Hazard Types</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-severity-green/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-severity-green" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-xs text-muted-foreground">Coverage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* ========== ACTIVE ALERTS ========== */}
        {currentView === "alerts" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-severity-orange" />
              <h2 className="text-lg font-bold text-foreground">
                Active Alerts
              </h2>
              <span className="text-sm text-muted-foreground">
                ({alerts.length} total)
              </span>
            </div>
            <SeverityStats alerts={alerts} />
            <div className="rounded-lg border border-border bg-card overflow-hidden" style={{ height: "calc(100vh - 340px)" }}>
              <AlertPanel
                alerts={alerts}
                onAlertClick={handleAlertClick}
                selectedSeverity={severityFilter}
                onSeverityFilter={setSeverityFilter}
              />
            </div>
          </div>
        )}

        {/* ========== WEATHER INTEL ========== */}
        {currentView === "weather" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Weather Intelligence
              </h2>
            </div>
            <WeatherPanel data={weatherData} isLoading={weatherLoading} />
          </div>
        )}

        {/* ========== COMMUNITY FIELD REPORTS ========== */}
        {currentView === "community" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Community Field Reports
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Plus className="h-4 w-4 text-primary" />
                    Submit a Field Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CommunityReportForm
                    onSubmitSuccess={() => mutateReports()}
                  />
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    Recent Reports
                    <Badge variant="secondary" className="ml-auto text-[10px]">
                      {reports.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ReportsList reports={reports} isLoading={reportsLoading} />
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* ========== DATA PIPELINE ========== */}
        {currentView === "pipeline" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
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

      {selectedAlert && (
        <AlertDetail
          alert={selectedAlert}
          onClose={() => setSelectedAlert(null)}
        />
      )}
    </DashboardShell>
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
          <MapPin className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
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
