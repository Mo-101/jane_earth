"use client"

import React from "react"

import {
  AlertTriangle,
  Waves,
  Sun,
  Wind,
  Mountain,
  Activity,
  Flame,
  Triangle,
  CloudLightning,
  ExternalLink,
  MapPin,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SEVERITY_CONFIG } from "@/lib/constants"
import type { HazardAlert, HazardType, Severity } from "@/lib/types"

const HAZARD_ICON_MAP: Record<HazardType, React.ComponentType<{ className?: string }>> = {
  FLOOD: Waves,
  DROUGHT: Sun,
  CYCLONE: Wind,
  LANDSLIDE: Mountain,
  EARTHQUAKE: Activity,
  WILDFIRE: Flame,
  VOLCANO: Triangle,
  STORM: CloudLightning,
}

interface AlertPanelProps {
  alerts: HazardAlert[]
  onAlertClick?: (alert: HazardAlert) => void
  selectedSeverity?: Severity | null
  onSeverityFilter?: (severity: Severity | null) => void
  compact?: boolean
}

export function AlertPanel({
  alerts,
  onAlertClick,
  selectedSeverity,
  onSeverityFilter,
  compact = false,
}: AlertPanelProps) {
  const severityCounts = {
    RED: alerts.filter((a) => a.severity === "RED").length,
    ORANGE: alerts.filter((a) => a.severity === "ORANGE").length,
    YELLOW: alerts.filter((a) => a.severity === "YELLOW").length,
    GREEN: alerts.filter((a) => a.severity === "GREEN").length,
  }

  const filteredAlerts = selectedSeverity
    ? alerts.filter((a) => a.severity === selectedSeverity)
    : alerts

  return (
    <div className="flex flex-col h-full">
      {/* Severity filter bar */}
      <div className="flex items-center gap-1.5 p-3 border-b border-border">
        <button
          onClick={() => onSeverityFilter?.(null)}
          className={cn(
            "px-2.5 py-1 rounded text-xs font-medium transition-colors",
            !selectedSeverity
              ? "bg-primary/20 text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          All ({alerts.length})
        </button>
        {(["RED", "ORANGE", "YELLOW", "GREEN"] as Severity[]).map((sev) => {
          const config = SEVERITY_CONFIG[sev]
          const count = severityCounts[sev]
          return (
            <button
              key={sev}
              onClick={() => onSeverityFilter?.(selectedSeverity === sev ? null : sev)}
              className={cn(
                "px-2 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1",
                selectedSeverity === sev
                  ? `${config.bg} ${config.textColor} border ${config.border}`
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span
                className={cn("h-1.5 w-1.5 rounded-full", {
                  "bg-severity-red": sev === "RED",
                  "bg-severity-orange": sev === "ORANGE",
                  "bg-severity-yellow": sev === "YELLOW",
                  "bg-severity-green": sev === "GREEN",
                })}
              />
              {count}
            </button>
          )
        })}
      </div>

      {/* Alert list */}
      <div className="flex-1 overflow-y-auto">
        {filteredAlerts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
            <AlertTriangle className="h-8 w-8 mb-2 opacity-30" />
            <p className="text-sm">No active alerts</p>
            <p className="text-xs mt-1">Sync data to fetch latest alerts</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filteredAlerts.map((alert) => (
              <AlertCard
                key={alert.id}
                alert={alert}
                onClick={() => onAlertClick?.(alert)}
                compact={compact}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function AlertCard({
  alert,
  onClick,
  compact,
}: {
  alert: HazardAlert
  onClick: () => void
  compact: boolean
}) {
  const config = SEVERITY_CONFIG[alert.severity] || SEVERITY_CONFIG.GREEN
  const Icon = HAZARD_ICON_MAP[alert.hazard_type] || AlertTriangle

  const timeAgo = getTimeAgo(alert.created_at)

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-3 py-2.5 hover:bg-secondary/50 transition-colors",
        alert.severity === "RED" && "border-l-2 border-l-severity-red"
      )}
    >
      <div className="flex items-start gap-2.5">
        <div
          className={cn(
            "shrink-0 mt-0.5 p-1.5 rounded",
            config.bg,
            config.border,
            "border"
          )}
        >
          <Icon className={cn("h-3.5 w-3.5", config.textColor)} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-wider",
                config.textColor
              )}
            >
              {config.label}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {alert.hazard_type}
            </span>
          </div>

          <p className="text-sm font-medium text-foreground truncate leading-snug">
            {alert.title}
          </p>

          {!compact && (
            <div className="flex items-center gap-3 mt-1">
              {alert.country && (
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {alert.country}
                </span>
              )}
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Clock className="h-3 w-3" />
                {timeAgo}
              </span>
              {alert.source_url && (
                <ExternalLink className="h-3 w-3 text-muted-foreground/50" />
              )}
            </div>
          )}
        </div>
      </div>
    </button>
  )
}

function getTimeAgo(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60_000)
  if (diffMins < 1) return "Just now"
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays}d ago`
}
