"use client"

import React from "react"

import { useState, useCallback } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

interface DashboardShellProps {
  children: React.ReactNode
  alertCounts?: {
    red: number
    orange: number
    yellow: number
    green: number
  }
}

export function DashboardShell({ children, alertCounts }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        alertCounts={alertCounts}
      />

      {sidebarOpen && (
        <button
          className="fixed inset-0 z-30 bg-background/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
          type="button"
        />
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader
          onToggleSidebar={handleSidebarToggle}
          sidebarOpen={sidebarOpen}
        />
        {children}
      </div>
    </div>
  )
}
