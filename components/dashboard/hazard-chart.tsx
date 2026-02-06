"use client"

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts"
import type { HazardAlert, HazardType } from "@/lib/types"
import { SEVERITY_CONFIG } from "@/lib/constants"

interface HazardChartProps {
  alerts: HazardAlert[]
}

export function HazardChart({ alerts }: HazardChartProps) {
  const hazardCounts: Record<string, { name: string; RED: number; ORANGE: number; YELLOW: number; GREEN: number }> = {}

  for (const alert of alerts) {
    if (!hazardCounts[alert.hazard_type]) {
      hazardCounts[alert.hazard_type] = { name: alert.hazard_type, RED: 0, ORANGE: 0, YELLOW: 0, GREEN: 0 }
    }
    hazardCounts[alert.hazard_type][alert.severity] += 1
  }

  const data = Object.values(hazardCounts).sort(
    (a, b) => b.RED + b.ORANGE + b.YELLOW + b.GREEN - (a.RED + a.ORANGE + a.YELLOW + a.GREEN)
  )

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-sm text-muted-foreground">
        No hazard data to display
      </div>
    )
  }

  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 12, bottom: 0, left: 60 }}>
          <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(215 20% 55%)" }} axisLine={false} tickLine={false} />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fontSize: 10, fill: "hsl(215 20% 55%)" }}
            axisLine={false}
            tickLine={false}
            width={55}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222 47% 11%)",
              border: "1px solid hsl(217.2 32.6% 17.5%)",
              borderRadius: "6px",
              fontSize: "11px",
              color: "hsl(210 40% 98%)",
            }}
          />
          <Bar dataKey="RED" stackId="a" fill={SEVERITY_CONFIG.RED.color} radius={0} />
          <Bar dataKey="ORANGE" stackId="a" fill={SEVERITY_CONFIG.ORANGE.color} radius={0} />
          <Bar dataKey="YELLOW" stackId="a" fill={SEVERITY_CONFIG.YELLOW.color} radius={0} />
          <Bar dataKey="GREEN" stackId="a" fill={SEVERITY_CONFIG.GREEN.color} radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
