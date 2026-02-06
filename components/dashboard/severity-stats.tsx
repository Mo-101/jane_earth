"use client"

import {
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
  Eye,
  Users,
  TrendingUp,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SEVERITY_CONFIG } from "@/lib/constants"
import type { HazardAlert, Severity } from "@/lib/types"

interface SeverityStatsProps {
  alerts: HazardAlert[]
}

export function SeverityStats({ alerts }: SeverityStatsProps) {
  const counts: Record<Severity, number> = {
    RED: 0,
    ORANGE: 0,
    YELLOW: 0,
    GREEN: 0,
  }

  let totalPopulation = 0
  const countriesAffected = new Set<string>()
  const hazardTypes = new Set<string>()

  for (const alert of alerts) {
    counts[alert.severity] = (counts[alert.severity] || 0) + 1
    if (alert.population_affected) totalPopulation += alert.population_affected
    if (alert.country) countriesAffected.add(alert.country)
    hazardTypes.add(alert.hazard_type)
  }

  const overallSeverity: Severity =
    counts.RED > 0 ? "RED" : counts.ORANGE > 0 ? "ORANGE" : counts.YELLOW > 0 ? "YELLOW" : "GREEN"
  const overallConfig = SEVERITY_CONFIG[overallSeverity]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {/* Overall threat level */}
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border p-3",
          overallConfig.bg,
          overallConfig.border
        )}
      >
        <div className="flex items-center gap-2 mb-2">
          <ShieldAlert className={cn("h-4 w-4", overallConfig.textColor)} />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Threat Level
          </span>
        </div>
        <p className={cn("text-xl font-bold", overallConfig.textColor)}>
          {overallConfig.label.toUpperCase()}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {alerts.length} active alert{alerts.length !== 1 ? "s" : ""}
        </p>
        {overallSeverity === "RED" && (
          <div
            className="absolute top-0 right-0 h-full w-1 bg-severity-red animate-severity-pulse"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Active emergencies */}
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="h-4 w-4 text-severity-red" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Emergencies
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-bold text-foreground">{counts.RED}</p>
          <p className="text-xs text-severity-orange">{counts.ORANGE} warnings</p>
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          {(["RED", "ORANGE", "YELLOW", "GREEN"] as Severity[]).map((sev) => (
            <div
              key={sev}
              className="h-1.5 rounded-full"
              style={{
                width: `${alerts.length > 0 ? Math.max((counts[sev] / alerts.length) * 100, 4) : 25}%`,
                backgroundColor: SEVERITY_CONFIG[sev].color,
                opacity: counts[sev] > 0 ? 1 : 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Population at risk */}
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Pop. At Risk
          </span>
        </div>
        <p className="text-xl font-bold text-foreground">
          {totalPopulation > 1_000_000
            ? `${(totalPopulation / 1_000_000).toFixed(1)}M`
            : totalPopulation > 1_000
              ? `${(totalPopulation / 1_000).toFixed(0)}K`
              : totalPopulation.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {countriesAffected.size} countr{countriesAffected.size !== 1 ? "ies" : "y"} affected
        </p>
      </div>

      {/* Monitoring status */}
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="flex items-center gap-2 mb-2">
          <Eye className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Monitoring
          </span>
        </div>
        <p className="text-xl font-bold text-foreground">{hazardTypes.size}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <ShieldCheck className="h-3 w-3 text-severity-green" />
          <p className="text-xs text-muted-foreground">
            {hazardTypes.size} hazard type{hazardTypes.size !== 1 ? "s" : ""} tracked
          </p>
        </div>
      </div>
    </div>
  )
}
