"use client"

import { useState } from "react"
import {
  Shield,
  Radio,
  RefreshCw,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onToggleSidebar: () => void
  sidebarOpen: boolean
}

export function DashboardHeader({ onToggleSidebar, sidebarOpen }: HeaderProps) {
  const [isIngesting, setIsIngesting] = useState(false)
  const [lastIngest, setLastIngest] = useState<string | null>(null)

  async function triggerIngest() {
    setIsIngesting(true)
    try {
      const res = await fetch("/api/pipeline/ingest", { method: "POST" })
      if (res.ok) {
        setLastIngest(new Date().toLocaleTimeString())
      }
    } catch {
      // Silently fail - pipeline status will show errors
    } finally {
      setIsIngesting(false)
    }
  }

  return (
    <header className="flex items-center justify-between h-14 px-4 border-b border-border bg-card">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="lg:hidden text-muted-foreground hover:text-foreground"
          aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Shield className="h-7 w-7 text-primary" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-severity-green border-2 border-card animate-severity-pulse" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-foreground leading-none">
              AFRO STORM
            </h1>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase leading-none mt-0.5">
              Multi-Hazard Early Warning System
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-severity-green/10 border border-severity-green/20">
          <Radio className="h-3 w-3 text-severity-green animate-severity-pulse" />
          <span className="text-xs font-mono text-severity-green">LIVE</span>
        </div>

        {lastIngest && (
          <span className="hidden sm:block text-[10px] text-muted-foreground font-mono">
            Last sync: {lastIngest}
          </span>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={triggerIngest}
          disabled={isIngesting}
          className="gap-1.5 text-xs border-border text-muted-foreground hover:text-foreground bg-transparent"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${isIngesting ? "animate-spin" : ""}`} />
          <span className="hidden sm:inline">{isIngesting ? "Syncing..." : "Sync Data"}</span>
        </Button>
      </div>
    </header>
  )
}
