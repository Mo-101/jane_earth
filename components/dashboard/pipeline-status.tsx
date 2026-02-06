"use client"

import {
  Database,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  RefreshCw,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { DATA_SOURCES } from "@/lib/constants"
import type { DataIngestionStatus } from "@/lib/types"

interface PipelineEntry {
  source: string
  status: string
  records_fetched?: number
  records_inserted?: number
  records_updated?: number
  response_time_ms?: number
  started_at?: string
  completed_at?: string
  error_message?: string
}

interface PipelineStatusProps {
  data: {
    pipeline?: PipelineEntry[]
    summary?: {
      total_active_alerts?: number
    }
    timestamp?: string
  } | null
  isLoading: boolean
}

export function PipelineStatus({ data, isLoading }: PipelineStatusProps) {
  const pipeline = data?.pipeline || []

  const allSources = Object.entries(DATA_SOURCES).map(([key, config]) => {
    const entry = pipeline.find((p) => p.source === key)
    return {
      key,
      name: config.name,
      description: config.description,
      status: entry?.status || "UNKNOWN",
      records: entry?.records_fetched || 0,
      lastRun: entry?.completed_at || null,
      responseTime: entry?.response_time_ms || 0,
    }
  })

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Database className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Data Pipeline Status</h3>
        </div>
        {data?.timestamp && (
          <span className="text-[10px] text-muted-foreground font-mono">
            Updated: {new Date(data.timestamp).toLocaleTimeString()}
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-32">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="space-y-3">
          {allSources.map((source) => (
            <div
              key={source.key}
              className="flex items-center gap-3 p-3 rounded-md border border-border bg-background/50"
            >
              <div
                className={cn(
                  "shrink-0 p-1.5 rounded",
                  source.status === "SUCCESS"
                    ? "bg-severity-green/15"
                    : source.status === "ERROR"
                      ? "bg-severity-red/15"
                      : "bg-muted"
                )}
              >
                {source.status === "SUCCESS" ? (
                  <CheckCircle2 className="h-4 w-4 text-severity-green" />
                ) : source.status === "ERROR" ? (
                  <XCircle className="h-4 w-4 text-severity-red" />
                ) : (
                  <Clock className="h-4 w-4 text-muted-foreground" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{source.name}</p>
                  <span
                    className={cn(
                      "text-[10px] font-mono px-1.5 py-0.5 rounded",
                      source.status === "SUCCESS"
                        ? "bg-severity-green/10 text-severity-green"
                        : source.status === "ERROR"
                          ? "bg-severity-red/10 text-severity-red"
                          : "bg-muted text-muted-foreground"
                    )}
                  >
                    {source.status}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground">{source.description}</p>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-right">
                <div>
                  <p className="text-sm font-mono text-foreground">{source.records}</p>
                  <p className="text-[10px] text-muted-foreground">records</p>
                </div>
                {source.responseTime > 0 && (
                  <div>
                    <p className="text-sm font-mono text-foreground">{source.responseTime}ms</p>
                    <p className="text-[10px] text-muted-foreground">latency</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pipeline flow diagram */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Data Flow
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap text-[10px]">
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">Sources</span>
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">Ingest API</span>
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">Neon DB</span>
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">Dashboard</span>
        </div>
      </div>
    </div>
  )
}
