"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Waves, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Droplets,
  AlertTriangle,
  Navigation,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import { cn } from "@/lib/utils"

interface FloodZone {
  id: string
  name: string
  country: string
  lat: number
  lon: number
  currentLevel: number // meters
  normalLevel: number
  dangerLevel: number
  maxLevel: number
  trend: "rising" | "stable" | "falling"
  trendRate: number // meters per hour
  affectedArea: number // km²
  populationAtRisk: number
  lastUpdate: string
  forecast24h: number[]
}

interface FloodData {
  zones: FloodZone[]
  lastUpdate: string
  totalAffected: number
  totalAtRisk: number
}

const MOCK_FLOOD_DATA: FloodData = {
  lastUpdate: "2026-01-15T12:00:00Z",
  totalAffected: 50000,
  totalAtRisk: 250000,
  zones: [
    {
      id: "flood-001",
      name: "Niger Delta",
      country: "Nigeria",
      lat: 5.5,
      lon: 6.3,
      currentLevel: 8.2,
      normalLevel: 3.5,
      dangerLevel: 7.0,
      maxLevel: 12.0,
      trend: "rising",
      trendRate: 0.35,
      affectedArea: 1250,
      populationAtRisk: 85000,
      lastUpdate: "2026-01-15T12:00:00Z",
      forecast24h: [8.2, 8.5, 8.8, 9.1, 9.3, 9.5, 9.6, 9.7, 9.6, 9.4, 9.1, 8.8, 8.5, 8.2, 7.9, 7.6, 7.3, 7.0, 6.8, 6.5, 6.3, 6.1, 5.9, 5.7],
    },
    {
      id: "flood-002",
      name: "Blue Nile Basin",
      country: "Sudan",
      lat: 15.5,
      lon: 32.6,
      currentLevel: 14.8,
      normalLevel: 8.0,
      dangerLevel: 12.0,
      maxLevel: 18.0,
      trend: "stable",
      trendRate: 0.05,
      affectedArea: 2100,
      populationAtRisk: 45000,
      lastUpdate: "2026-01-15T11:30:00Z",
      forecast24h: [14.8, 14.9, 15.0, 15.0, 14.9, 14.8, 14.7, 14.6, 14.5, 14.4, 14.3, 14.2, 14.1, 14.0, 13.9, 13.8, 13.7, 13.6, 13.5, 13.4, 13.3, 13.2, 13.1, 13.0],
    },
    {
      id: "flood-003",
      name: "Kafue River",
      country: "Zambia",
      lat: -15.8,
      lon: 27.9,
      currentLevel: 6.1,
      normalLevel: 2.5,
      dangerLevel: 5.5,
      maxLevel: 10.0,
      trend: "falling",
      trendRate: -0.15,
      affectedArea: 680,
      populationAtRisk: 22000,
      lastUpdate: "2026-01-15T12:15:00Z",
      forecast24h: [6.1, 5.9, 5.7, 5.5, 5.3, 5.1, 4.9, 4.7, 4.5, 4.3, 4.1, 3.9, 3.7, 3.5, 3.4, 3.3, 3.2, 3.1, 3.0, 2.9, 2.8, 2.7, 2.6, 2.5],
    },
  ],
}

function getFloodSeverity(level: number, danger: number, max: number): { label: string; color: string } {
  const ratio = (level - danger) / (max - danger)
  if (ratio >= 0.5) return { label: "CRITICAL", color: "text-severity-red" }
  if (ratio >= 0) return { label: "DANGER", color: "text-severity-orange" }
  if (level > danger * 0.8) return { label: "WARNING", color: "text-severity-yellow" }
  return { label: "NORMAL", color: "text-severity-green" }
}

function getTrendIcon(trend: string, rate: number) {
  if (trend === "rising") return <ArrowUpRight className="h-4 w-4 text-severity-red" />
  if (trend === "falling") return <ArrowDownRight className="h-4 w-4 text-severity-green" />
  return <Navigation className="h-4 w-4 text-muted-foreground" />
}

export function FloodMonitorVisualization() {
  const [selectedZone, setSelectedZone] = useState<string>(MOCK_FLOOD_DATA.zones[0].id)
  const data = MOCK_FLOOD_DATA
  const activeZone = data.zones.find(z => z.id === selectedZone) || data.zones[0]

  const severity = getFloodSeverity(activeZone.currentLevel, activeZone.dangerLevel, activeZone.maxLevel)
  const floodPercentage = ((activeZone.currentLevel - activeZone.normalLevel) / (activeZone.maxLevel - activeZone.normalLevel)) * 100

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Waves className="h-5 w-5 text-severity-orange" />
            <CardTitle className="text-lg font-semibold">Flood Monitor</CardTitle>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {new Date(data.lastUpdate).toLocaleTimeString()}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Zone Selector Tabs */}
        <Tabs value={selectedZone} onValueChange={setSelectedZone}>
          <TabsList className="grid grid-cols-3 w-full">
            {data.zones.map((zone) => (
              <TabsTrigger key={zone.id} value={zone.id} className="text-xs">
                <span className="truncate">{zone.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {data.zones.map((zone) => (
            <TabsContent key={zone.id} value={zone.id} className="space-y-4 mt-4">
              {/* Zone Header */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-medium">{zone.name}, {zone.country}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {zone.lat.toFixed(1)}°, {zone.lon.toFixed(1)}°
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className={cn("font-mono", severity.color.replace("text-", "border-"), severity.color)}
                >
                  {severity.label}
                </Badge>
              </div>

              {/* Current Level Gauge */}
              <div className="relative rounded-lg border border-border bg-background/30 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Water Level</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(zone.trend, zone.trendRate)}
                    <span className={cn(
                      "text-sm font-medium",
                      zone.trend === "rising" ? "text-severity-red" :
                      zone.trend === "falling" ? "text-severity-green" :
                      "text-muted-foreground"
                    )}>
                      {zone.trendRate > 0 ? "+" : ""}{zone.trendRate} m/h
                    </span>
                  </div>
                </div>

                {/* Visual Gauge */}
                <div className="relative h-12 bg-muted rounded-full overflow-hidden mb-2">
                  {/* Background zones */}
                  <div 
                    className="absolute left-0 top-0 h-full bg-severity-green/20" 
                    style={{ width: `${((zone.dangerLevel - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100}%` }}
                  />
                  <div 
                    className="absolute top-0 h-full bg-severity-yellow/20" 
                    style={{ 
                      left: `${((zone.dangerLevel - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100}%`,
                      width: `${((zone.maxLevel - zone.dangerLevel) * 0.3 / (zone.maxLevel - zone.normalLevel)) * 100}%`
                    }}
                  />
                  <div 
                    className="absolute right-0 top-0 h-full bg-severity-red/20" 
                    style={{ width: `${30}%` }}
                  />
                  
                  {/* Level marker */}
                  <div 
                    className="absolute top-0 h-full w-1 bg-white shadow-lg transition-all duration-500"
                    style={{ left: `${floodPercentage}%` }}
                  />
                  
                  {/* Current level indicator */}
                  <div 
                    className={cn(
                      "absolute -top-1 h-14 w-4 rounded-full border-2 border-white shadow-lg transition-all duration-500",
                      severity.label === "CRITICAL" ? "bg-severity-red" :
                      severity.label === "DANGER" ? "bg-severity-orange" :
                      severity.label === "WARNING" ? "bg-severity-yellow" :
                      "bg-severity-green"
                    )}
                    style={{ left: `calc(${floodPercentage}% - 8px)` }}
                  />
                </div>

                {/* Level Labels */}
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>Normal: {zone.normalLevel}m</span>
                  <span>Danger: {zone.dangerLevel}m</span>
                  <span>Max: {zone.maxLevel}m</span>
                </div>

                {/* Current Level Display */}
                <div className="flex items-center justify-center mt-4">
                  <div className="text-center">
                    <p className="text-4xl font-bold tabular-nums">{zone.currentLevel.toFixed(1)}</p>
                    <p className="text-xs text-muted-foreground">meters</p>
                  </div>
                </div>
              </div>

              {/* 24h Forecast Chart */}
              <div className="rounded-lg border border-border bg-background/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">24-Hour Forecast</span>
                </div>
                
                {/* SVG Area Chart */}
                <div className="relative h-32">
                  <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    
                    {/* Danger level line */}
                    <line 
                      x1="0" 
                      y1={100 - ((zone.dangerLevel - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100} 
                      x2="300" 
                      y2={100 - ((zone.dangerLevel - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100} 
                      stroke="#f97316" 
                      strokeWidth="1" 
                      strokeDasharray="4 2"
                    />
                    
                    {/* Area path */}
                    <path
                      d={`M 0 ${100 - ((zone.forecast24h[0] - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100}
                          ${zone.forecast24h.slice(1).map((val, i) => 
                            `L ${(i + 1) * (300 / 23)} ${100 - ((val - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100}`
                          ).join(' ')}
                          L 300 100 L 0 100 Z`}
                      fill="url(#floodGradient)"
                      opacity="0.3"
                    />
                    
                    {/* Line path */}
                    <path
                      d={`M 0 ${100 - ((zone.forecast24h[0] - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100}
                          ${zone.forecast24h.slice(1).map((val, i) => 
                            `L ${(i + 1) * (300 / 23)} ${100 - ((val - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100}`
                          ).join(' ')}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={severity.color}
                    />
                    
                    {/* Data points */}
                    {zone.forecast24h.filter((_, i) => i % 4 === 0).map((val, i) => (
                      <circle
                        key={i}
                        cx={i * 4 * (300 / 23)}
                        cy={100 - ((val - zone.normalLevel) / (zone.maxLevel - zone.normalLevel)) * 100}
                        r="3"
                        fill="currentColor"
                        className={severity.color}
                      />
                    ))}
                    
                    <defs>
                      <linearGradient id="floodGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-2">
                  <span>Now</span>
                  <span>+6h</span>
                  <span>+12h</span>
                  <span>+18h</span>
                  <span>+24h</span>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md bg-background/50 border border-border p-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Affected Area</p>
                  <p className="text-xl font-bold">{zone.affectedArea.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">km²</span></p>
                </div>
                <div className="rounded-md bg-background/50 border border-border p-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">People at Risk</p>
                  <p className="text-xl font-bold">{zone.populationAtRisk.toLocaleString()}</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Summary Stats */}
        <div className="rounded-md bg-severity-orange/10 border border-severity-orange/30 p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-severity-orange shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-severity-orange">Regional Flood Summary</p>
              <p className="text-[10px] text-severity-orange/80 mt-1">
                {data.zones.length} active flood zones | {data.totalAffected.toLocaleString()} people affected |{" "}
                {data.totalAtRisk.toLocaleString()} at risk
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
