"use client"

import {
  X,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  AlertTriangle,
  Waves,
  Sun,
  Wind,
  Mountain,
  Activity,
  Flame,
  Triangle,
  CloudLightning,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SEVERITY_CONFIG } from "@/lib/constants"
import type { HazardAlert, HazardType } from "@/lib/types"
import { Button } from "@/components/ui/button"
import React from "react"

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

interface AlertDetailProps {
  alert: HazardAlert
  onClose: () => void
}

export function AlertDetail({ alert, onClose }: AlertDetailProps) {
  const config = SEVERITY_CONFIG[alert.severity] || SEVERITY_CONFIG.GREEN
  const Icon = HAZARD_ICON_MAP[alert.hazard_type] || AlertTriangle

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div
        className="w-full max-w-lg rounded-lg border border-border bg-card shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label={`Alert detail: ${alert.title}`}
      >
        {/* Header */}
        <div className={cn("flex items-center justify-between p-4 border-b", config.bg, config.border)}>
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg border", config.bg, config.border)}>
              <Icon className={cn("h-5 w-5", config.textColor)} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={cn("text-xs font-bold uppercase tracking-wider", config.textColor)}>
                  {config.label}
                </span>
                <span className="text-xs text-muted-foreground">{alert.hazard_type}</span>
              </div>
              <p className="text-sm font-semibold text-foreground mt-0.5">{alert.title}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground shrink-0"
            aria-label="Close alert detail"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {alert.description && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Description
              </p>
              <p className="text-sm text-foreground leading-relaxed">{alert.description}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {alert.country && (
              <div className="flex items-center gap-2 p-2.5 rounded-md bg-background/50 border border-border">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Location</p>
                  <p className="text-xs font-medium text-foreground">
                    {alert.country}{alert.region ? `, ${alert.region}` : ""}
                  </p>
                </div>
              </div>
            )}

            {alert.population_affected && (
              <div className="flex items-center gap-2 p-2.5 rounded-md bg-background/50 border border-border">
                <Users className="h-4 w-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Pop. Affected</p>
                  <p className="text-xs font-medium text-foreground">
                    {alert.population_affected.toLocaleString()}
                  </p>
                </div>
              </div>
            )}

            {alert.event_start && (
              <div className="flex items-center gap-2 p-2.5 rounded-md bg-background/50 border border-border">
                <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Event Start</p>
                  <p className="text-xs font-medium text-foreground">
                    {new Date(alert.event_start).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}

            {alert.latitude != null && alert.longitude != null && (
              <div className="flex items-center gap-2 p-2.5 rounded-md bg-background/50 border border-border">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Coordinates</p>
                  <p className="text-xs font-medium text-foreground font-mono">
                    {alert.latitude.toFixed(2)}, {alert.longitude.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>Source: {alert.source}</span>
            <span>ID: {alert.external_id || alert.id}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-4 border-t border-border">
          {alert.source_url && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-1.5 bg-transparent text-muted-foreground"
            >
              <a href={alert.source_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                View Source
              </a>
            </Button>
          )}
          <Button size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
