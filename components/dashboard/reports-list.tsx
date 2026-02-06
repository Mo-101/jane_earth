"use client"

import {
  Users,
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileText,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SEVERITY_CONFIG } from "@/lib/constants"
import type { CommunityReport } from "@/lib/types"

interface ReportsListProps {
  reports: CommunityReport[]
  isLoading: boolean
}

const VERIFICATION_ICON = {
  VERIFIED: CheckCircle2,
  UNVERIFIED: Clock,
  REJECTED: XCircle,
}

const VERIFICATION_STYLE = {
  VERIFIED: "bg-severity-green/10 text-severity-green",
  UNVERIFIED: "bg-severity-yellow/10 text-severity-yellow",
  REJECTED: "bg-severity-red/10 text-severity-red",
}

export function ReportsList({ reports, isLoading }: ReportsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-20 rounded-md bg-secondary/50 animate-pulse" />
        ))}
      </div>
    )
  }

  if (reports.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
        <FileText className="h-8 w-8 mb-2 opacity-30" />
        <p className="text-sm">No community reports yet</p>
        <p className="text-xs mt-1">Submit a field report to contribute</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {reports.map((report) => {
        const config = SEVERITY_CONFIG[report.severity_estimate] || SEVERITY_CONFIG.GREEN
        const VerIcon = VERIFICATION_ICON[report.verification_status] || Clock
        const verStyle = VERIFICATION_STYLE[report.verification_status] || VERIFICATION_STYLE.UNVERIFIED

        return (
          <div
            key={report.id}
            className="rounded-md border border-border bg-background/50 p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider",
                      config.textColor
                    )}
                  >
                    {report.hazard_type}
                  </span>
                  <span className={cn("flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded font-medium", verStyle)}>
                    <VerIcon className="h-2.5 w-2.5" />
                    {report.verification_status}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground truncate">{report.title}</p>
                {report.description && (
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                    {report.description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {report.country}
                {report.region ? `, ${report.region}` : ""}
              </span>
              {report.people_affected_estimate && (
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Users className="h-3 w-3" />
                  {report.people_affected_estimate.toLocaleString()} affected
                </span>
              )}
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Clock className="h-3 w-3" />
                {new Date(report.reported_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
