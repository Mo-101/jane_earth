"use client"

import React, { Suspense } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import {
  Map,
  AlertTriangle,
  Cloud,
  Users,
  Activity,
  BarChart3,
  Database,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  alertCounts?: {
    red: number
    orange: number
    yellow: number
    green: number
  }
}

const NAV_ITEMS = [
  { href: "/", view: null, label: "Threat Map", icon: Map, section: "Operations" },
  { href: "/analytics", view: null, label: "Command Center", icon: BarChart3, section: "Operations" },
  { href: "/analytics?view=alerts", view: "alerts", label: "Active Alerts", icon: AlertTriangle, section: "Operations" },
  { href: "/analytics?view=weather", view: "weather", label: "Weather Intel", icon: Cloud, section: "Intelligence" },
  { href: "/analytics?view=storms", view: "storms", label: "Storm Tracker", icon: Activity, section: "Intelligence" },
  { href: "/analytics?view=community", view: "community", label: "Field Reports", icon: Users, section: "Community" },
  { href: "/analytics?view=pipeline", view: "pipeline", label: "Data Pipeline", icon: Database, section: "System" },
]

function SidebarNav({ onClose, alertCounts }: { onClose: () => void; alertCounts?: SidebarProps["alertCounts"] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentView = searchParams.get("view")
  const totalRed = alertCounts?.red || 0
  const totalOrange = alertCounts?.orange || 0

  let currentSection = ""

  function isActive(item: typeof NAV_ITEMS[number]) {
    if (item.href === "/") return pathname === "/"
    if (item.href === "/analytics" && item.view === null) {
      return pathname === "/analytics" && !currentView
    }
    if (item.view) {
      return pathname === "/analytics" && currentView === item.view
    }
    return false
  }

  return (
    <nav className="px-2 space-y-0.5" role="navigation" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const showSection = item.section !== currentSection
        if (showSection) currentSection = item.section!
        const Icon = item.icon
        const active = isActive(item)

        return (
          <div key={item.href}>
            {showSection && (
              <p className="px-3 pt-4 pb-1.5 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                {item.section}
              </p>
            )}
            <Link
              href={item.href}
              onClick={onClose}
              className={cn(
                "w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors",
                active
                  ? "bg-primary/10 text-primary font-medium border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.label}</span>

              {item.label === "Active Alerts" && totalRed > 0 && (
                <span className="ml-auto text-[10px] font-bold bg-severity-red/20 text-severity-red px-1.5 py-0.5 rounded-full animate-severity-pulse">
                  {totalRed}
                </span>
              )}
              {item.label === "Active Alerts" && totalRed === 0 && totalOrange > 0 && (
                <span className="ml-auto text-[10px] font-bold bg-severity-orange/20 text-severity-orange px-1.5 py-0.5 rounded-full">
                  {totalOrange}
                </span>
              )}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}

export function DashboardSidebar({ isOpen, onClose, alertCounts }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-56 bg-card border-r border-border flex flex-col transition-transform duration-200 lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Logo */}
      <div className="hidden lg:flex items-center gap-2.5 px-4 h-14 border-b border-border shrink-0">
        <div className="relative">
          <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Activity className="h-4 w-4 text-primary" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-severity-green border-2 border-card animate-severity-pulse" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground leading-none tracking-tight">AFRO STORM</p>
          <p className="text-[9px] text-muted-foreground tracking-widest uppercase mt-0.5">Early Warning</p>
        </div>
      </div>

      <div className="flex-1 py-3 overflow-y-auto">
        <Suspense fallback={null}>
          <SidebarNav onClose={onClose} alertCounts={alertCounts} />
        </Suspense>
      </div>

      <div className="p-3 border-t border-border">
        <button
          className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
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
