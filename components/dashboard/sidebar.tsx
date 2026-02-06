"use client"

import React from "react"

import {
  LayoutDashboard,
  AlertTriangle,
  Map,
  Cloud,
  Users,
  Activity,
  BarChart3,
  Database,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

export type DashboardView =
  | "overview"
  | "alerts"
  | "map"
  | "weather"
  | "community"
  | "storms"
  | "analytics"
  | "pipeline"

interface SidebarProps {
  currentView: DashboardView
  onViewChange: (view: DashboardView) => void
  isOpen: boolean
  alertCounts?: {
    red: number
    orange: number
    yellow: number
    green: number
  }
}

const NAV_ITEMS: Array<{
  id: DashboardView
  label: string
  icon: React.ComponentType<{ className?: string }>
  section?: string
}> = [
  { id: "overview", label: "Command Center", icon: LayoutDashboard, section: "Operations" },
  { id: "alerts", label: "Active Alerts", icon: AlertTriangle, section: "Operations" },
  { id: "map", label: "Threat Map", icon: Map, section: "Operations" },
  { id: "weather", label: "Weather Intel", icon: Cloud, section: "Intelligence" },
  { id: "storms", label: "Storm Tracker", icon: Activity, section: "Intelligence" },
  { id: "community", label: "Field Reports", icon: Users, section: "Community" },
  { id: "analytics", label: "Analytics", icon: BarChart3, section: "System" },
  { id: "pipeline", label: "Data Pipeline", icon: Database, section: "System" },
]

export function DashboardSidebar({
  currentView,
  onViewChange,
  isOpen,
  alertCounts,
}: SidebarProps) {
  const totalRed = alertCounts?.red || 0
  const totalOrange = alertCounts?.orange || 0

  let currentSection = ""

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-56 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-200 lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-2 space-y-0.5" role="navigation" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const showSection = item.section !== currentSection
            if (showSection) currentSection = item.section!
            const Icon = item.icon

            return (
              <div key={item.id}>
                {showSection && (
                  <p className="px-3 pt-4 pb-1.5 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    {item.section}
                  </p>
                )}
                <button
                  onClick={() => onViewChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors",
                    currentView === item.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.label}</span>

                  {item.id === "alerts" && totalRed > 0 && (
                    <span className="ml-auto text-[10px] font-bold bg-severity-red/20 text-severity-red px-1.5 py-0.5 rounded-full animate-severity-pulse">
                      {totalRed}
                    </span>
                  )}
                  {item.id === "alerts" && totalRed === 0 && totalOrange > 0 && (
                    <span className="ml-auto text-[10px] font-bold bg-severity-orange/20 text-severity-orange px-1.5 py-0.5 rounded-full">
                      {totalOrange}
                    </span>
                  )}
                </button>
              </div>
            )
          })}
        </nav>
      </div>

      <div className="p-3 border-t border-sidebar-border">
        <button
          className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          onClick={() => {}}
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
        <p className="mt-2 px-3 text-[9px] text-muted-foreground/50 font-mono">
          AFRO STORM v1.0 -- Mostar Industries
        </p>
      </div>
    </aside>
  )
}
