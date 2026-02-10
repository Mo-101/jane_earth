"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wind, Navigation, AlertTriangle, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock cyclone track data (probabilistic scenarios like Google Weather Lab)
interface TrackPoint {
  time: string
  lat: number
  lon: number
  intensity: number // knots
  pressure: number // hPa
  category: number // 1-5
  radius: number // km
}

interface CycloneScenario {
  id: string
  probability: number // 0-100
  color: string
  track: TrackPoint[]
}

interface CycloneData {
  name: string
  id: string
  currentPosition: {
    lat: number
    lon: number
    intensity: number
    pressure: number
    category: number
    radius: number
  }
  scenarios: CycloneScenario[]
  formationTime: string
  lastUpdate: string
  confidence: "high" | "medium" | "low"
}

const MOCK_CYCLONE: CycloneData = {
  name: "Cyclone Belal",
  id: "TC-2024-001",
  currentPosition: {
    lat: -20.2,
    lon: 57.5,
    intensity: 95,
    pressure: 965,
    category: 2,
    radius: 120,
  },
  formationTime: "2026-01-15T00:00:00Z",
  lastUpdate: "2026-01-15T12:00:00Z",
  confidence: "medium",
  scenarios: [
    {
      id: "scenario-1",
      probability: 35,
      color: "#ef4444", // red
      track: [
        { time: "2026-01-15T12:00:00Z", lat: -20.2, lon: 57.5, intensity: 95, pressure: 965, category: 2, radius: 120 },
        { time: "2026-01-15T18:00:00Z", lat: -20.8, lon: 57.8, intensity: 105, pressure: 955, category: 3, radius: 130 },
        { time: "2026-01-16T00:00:00Z", lat: -21.5, lon: 58.2, intensity: 115, pressure: 945, category: 3, radius: 140 },
        { time: "2026-01-16T06:00:00Z", lat: -22.2, lon: 58.6, intensity: 125, pressure: 935, category: 4, radius: 150 },
        { time: "2026-01-16T12:00:00Z", lat: -23.0, lon: 59.0, intensity: 130, pressure: 930, category: 4, radius: 160 },
      ],
    },
    {
      id: "scenario-2",
      probability: 30,
      color: "#f97316", // orange
      track: [
        { time: "2026-01-15T12:00:00Z", lat: -20.2, lon: 57.5, intensity: 95, pressure: 965, category: 2, radius: 120 },
        { time: "2026-01-15T18:00:00Z", lat: -20.5, lon: 57.6, intensity: 100, pressure: 960, category: 3, radius: 125 },
        { time: "2026-01-16T00:00:00Z", lat: -21.0, lon: 57.8, intensity: 105, pressure: 955, category: 3, radius: 130 },
        { time: "2026-01-16T06:00:00Z", lat: -21.6, lon: 58.0, intensity: 110, pressure: 950, category: 3, radius: 135 },
        { time: "2026-01-16T12:00:00Z", lat: -22.2, lon: 58.3, intensity: 115, pressure: 945, category: 3, radius: 140 },
      ],
    },
    {
      id: "scenario-3",
      probability: 20,
      color: "#eab308", // yellow
      track: [
        { time: "2026-01-15T12:00:00Z", lat: -20.2, lon: 57.5, intensity: 95, pressure: 965, category: 2, radius: 120 },
        { time: "2026-01-15T18:00:00Z", lat: -20.3, lon: 57.4, intensity: 90, pressure: 970, category: 2, radius: 115 },
        { time: "2026-01-16T00:00:00Z", lat: -20.5, lon: 57.3, intensity: 85, pressure: 975, category: 1, radius: 110 },
        { time: "2026-01-16T06:00:00Z", lat: -20.8, lon: 57.2, intensity: 75, pressure: 985, category: 1, radius: 100 },
        { time: "2026-01-16T12:00:00Z", lat: -21.2, lon: 57.0, intensity: 65, pressure: 995, category: 0, radius: 90 },
      ],
    },
    {
      id: "scenario-4",
      probability: 15,
      color: "#22c55e", // green
      track: [
        { time: "2026-01-15T12:00:00Z", lat: -20.2, lon: 57.5, intensity: 95, pressure: 965, category: 2, radius: 120 },
        { time: "2026-01-15T18:00:00Z", lat: -20.0, lon: 57.8, intensity: 100, pressure: 960, category: 3, radius: 125 },
        { time: "2026-01-16T00:00:00Z", lat: -19.8, lon: 58.2, intensity: 110, pressure: 950, category: 3, radius: 135 },
        { time: "2026-01-16T06:00:00Z", lat: -19.5, lon: 58.8, intensity: 120, pressure: 940, category: 4, radius: 145 },
        { time: "2026-01-16T12:00:00Z", lat: -19.0, lon: 59.5, intensity: 135, pressure: 925, category: 4, radius: 160 },
      ],
    },
  ],
}

function getCategoryColor(category: number): string {
  if (category >= 5) return "bg-purple-500"
  if (category >= 4) return "bg-severity-red"
  if (category >= 3) return "bg-severity-orange"
  if (category >= 2) return "bg-severity-yellow"
  if (category >= 1) return "bg-severity-green"
  return "bg-blue-500"
}

function getCategoryLabel(category: number): string {
  if (category === 0) return "TD"
  if (category === 5) return "Cat 5"
  return `Cat ${category}`
}

export function CycloneTrackVisualization() {
  const cyclone = MOCK_CYCLONE

  // Calculate uncertainty cone for visualization
  const uncertaintyCone = useMemo(() => {
    const timePoints: { time: string; minLat: number; maxLat: number; minLon: number; maxLon: number }[] = []
    
    // For each time step across all scenarios
    const trackLength = cyclone.scenarios[0].track.length
    for (let i = 0; i < trackLength; i++) {
      const time = cyclone.scenarios[0].track[i].time
      const lats = cyclone.scenarios.map(s => s.track[i].lat)
      const lons = cyclone.scenarios.map(s => s.track[i].lon)
      
      timePoints.push({
        time,
        minLat: Math.min(...lats),
        maxLat: Math.max(...lats),
        minLon: Math.min(...lons),
        maxLon: Math.max(...lons),
      })
    }
    
    return timePoints
  }, [cyclone])

  // Format time for display
  const formatTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleTimeString([], { hour: "2-digit", day: "numeric", hour12: false })
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-severity-red" />
            <CardTitle className="text-lg font-semibold">{cyclone.name}</CardTitle>
            <Badge 
              variant="outline" 
              className={cn(
                "text-xs font-mono",
                cyclone.confidence === "high" ? "border-severity-green text-severity-green" :
                cyclone.confidence === "medium" ? "border-severity-yellow text-severity-yellow" :
                "border-severity-orange text-severity-orange"
              )}
            >
              {cyclone.confidence} confidence
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {new Date(cyclone.lastUpdate).toLocaleTimeString()}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Current Status */}
        <div className="grid grid-cols-4 gap-3">
          <div className="rounded-md bg-background/50 border border-border p-3">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Category</p>
            <div className="flex items-center gap-2">
              <div className={cn("h-3 w-3 rounded-full", getCategoryColor(cyclone.currentPosition.category))} />
              <span className="text-xl font-bold">{getCategoryLabel(cyclone.currentPosition.category)}</span>
            </div>
          </div>
          <div className="rounded-md bg-background/50 border border-border p-3">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Wind Speed</p>
            <p className="text-xl font-bold">{cyclone.currentPosition.intensity} <span className="text-sm font-normal text-muted-foreground">kt</span></p>
          </div>
          <div className="rounded-md bg-background/50 border border-border p-3">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Pressure</p>
            <p className="text-xl font-bold">{cyclone.currentPosition.pressure} <span className="text-sm font-normal text-muted-foreground">hPa</span></p>
          </div>
          <div className="rounded-md bg-background/50 border border-border p-3">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Radius</p>
            <p className="text-xl font-bold">{cyclone.currentPosition.radius} <span className="text-sm font-normal text-muted-foreground">km</span></p>
          </div>
        </div>

        {/* Probabilistic Track Visualization */}
        <div className="relative rounded-lg border border-border bg-background/30 p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Navigation className="h-4 w-4 text-primary" />
              Probabilistic Track Forecast
            </h4>
            <span className="text-[10px] text-muted-foreground">Multiple scenarios (up to 15 days)</span>
          </div>

          {/* SVG Track Visualization */}
          <div className="relative h-64 bg-gradient-to-b from-slate-900/50 to-slate-800/30 rounded-md overflow-hidden">
            <svg viewBox="0 0 400 250" className="w-full h-full">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="400" height="250" fill="url(#grid)" />

              {/* Uncertainty cone */}
              {uncertaintyCone.length > 0 && (
                <path
                  d={`M ${cyclone.currentPosition.lon * 4 + 100} ${-cyclone.currentPosition.lat * 4 + 150}
                      ${uncertaintyCone.slice(1).map((p, i) => {
                        const centerLat = (p.minLat + p.maxLat) / 2
                        const centerLon = (p.minLon + p.maxLon) / 2
                        const spread = Math.max(p.maxLat - p.minLat, p.maxLon - p.minLon) * 20
                        return `L ${centerLon * 4 + 100 + spread} ${-centerLat * 4 + 150}`
                      }).join(' ')}
                      ${[...uncertaintyCone].reverse().slice(1).map((p, i) => {
                        const centerLat = (p.minLat + p.maxLat) / 2
                        const centerLon = (p.minLon + p.maxLon) / 2
                        const spread = Math.max(p.maxLat - p.minLat, p.maxLon - p.minLon) * 20
                        return `L ${centerLon * 4 + 100 - spread} ${-centerLat * 4 + 150}`
                      }).join(' ')} Z`}
                  fill="rgba(239, 68, 68, 0.1)"
                  stroke="rgba(239, 68, 68, 0.3)"
                  strokeWidth="1"
                />
              )}

              {/* Scenario tracks */}
              {cyclone.scenarios.map((scenario) => (
                <g key={scenario.id}>
                  {/* Track line */}
                  <path
                    d={`M ${scenario.track[0].lon * 4 + 100} ${-scenario.track[0].lat * 4 + 150}
                        ${scenario.track.slice(1).map(p => `L ${p.lon * 4 + 100} ${-p.lat * 4 + 150}`).join(' ')}`}
                    fill="none"
                    stroke={scenario.color}
                    strokeWidth="2"
                    strokeOpacity={scenario.probability / 100}
                    strokeDasharray="4 2"
                  />
                  {/* Track points */}
                  {scenario.track.map((point, i) => (
                    <circle
                      key={i}
                      cx={point.lon * 4 + 100}
                      cy={-point.lat * 4 + 150}
                      r={3 + point.category * 1.5}
                      fill={scenario.color}
                      fillOpacity={0.7}
                      stroke={scenario.color}
                      strokeWidth="1"
                    />
                  ))}
                </g>
              ))}

              {/* Current position marker */}
              <g>
                <circle
                  cx={cyclone.currentPosition.lon * 4 + 100}
                  cy={-cyclone.currentPosition.lat * 4 + 150}
                  r={8}
                  fill="#ef4444"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx={cyclone.currentPosition.lon * 4 + 100}
                  cy={-cyclone.currentPosition.lat * 4 + 150}
                  r={20}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                >
                  <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Time labels */}
              {cyclone.scenarios[0].track.map((point, i) => (
                <text
                  key={i}
                  x={point.lon * 4 + 115}
                  y={-point.lat * 4 + 150}
                  fill="rgba(255,255,255,0.5)"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  +{i * 6}h
                </text>
              ))}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-2 left-2 flex flex-col gap-1 bg-black/50 backdrop-blur-sm rounded-md p-2">
              <p className="text-[9px] text-muted-foreground uppercase mb-1">Scenario Probabilities</p>
              {cyclone.scenarios.map((s) => (
                <div key={s.id} className="flex items-center gap-2">
                  <div className="w-3 h-1 rounded" style={{ backgroundColor: s.color }} />
                  <span className="text-[10px] text-white/80">{s.probability}%</span>
                </div>
              ))}
            </div>

            {/* Location label */}
            <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
              <MapPin className="h-3 w-3 text-severity-red" />
              <span className="text-[10px] text-white/80">
                {cyclone.currentPosition.lat.toFixed(1)}°S, {cyclone.currentPosition.lon.toFixed(1)}°E
              </span>
            </div>
          </div>
        </div>

        {/* Scenario Details Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {cyclone.scenarios.map((scenario) => (
            <div 
              key={scenario.id}
              className="rounded-md border border-border/50 bg-background/30 p-2"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: scenario.color }} />
                <span className="text-xs font-medium">{scenario.probability}% probability</span>
              </div>
              <div className="text-[10px] text-muted-foreground space-y-0.5">
                <p>Peak: Cat {Math.max(...scenario.track.map(t => t.category))}</p>
                <p>Wind: {Math.max(...scenario.track.map(t => t.intensity))} kt</p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Banner */}
        <div className="flex items-center gap-2 rounded-md bg-severity-red/10 border border-severity-red/30 p-3">
          <AlertTriangle className="h-4 w-4 text-severity-red shrink-0" />
          <p className="text-xs text-severity-red">
            This is an experimental AI-based prediction showing multiple possible scenarios. 
            Actual track may vary. Monitor official weather agency updates.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
