"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Flame, 
  Wind,
  TrendingUp,
  MapPin,
  Clock,
  Thermometer,
  Droplets,
  AlertTriangle,
  Compass,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from "lucide-react"
import { cn } from "@/lib/utils"

interface FirePoint {
  time: string
  lat: number
  lon: number
  intensity: number // MW
  spreadRate: number // km/h
  windSpeed: number // km/h
  windDirection: number // degrees
  temperature: number // celsius
  humidity: number // percentage
  area: number // hectares
}

interface Wildfire {
  id: string
  name: string
  country: string
  startTime: string
  cause: "lightning" | "human" | "unknown"
  status: "active" | "contained" | "extinguished"
  containment: number // percentage
  totalArea: number // hectares
  personnel: number
  history: FirePoint[]
  forecast: FirePoint[]
  riskLevel: "low" | "moderate" | "high" | "extreme"
}

interface WildfireData {
  fires: Wildfire[]
  lastUpdate: string
  totalActive: number
  totalArea: number
}

const MOCK_WILDFIRE_DATA: WildfireData = {
  lastUpdate: "2026-01-15T14:00:00Z",
  totalActive: 3,
  totalArea: 45200,
  fires: [
    {
      id: "fire-001",
      name: "Mount Kenya Forest Fire",
      country: "Kenya",
      startTime: "2026-01-12T08:30:00Z",
      cause: "lightning",
      status: "active",
      containment: 25,
      totalArea: 28500,
      personnel: 450,
      riskLevel: "extreme",
      history: [
        { time: "2026-01-12T08:30:00Z", lat: -0.15, lon: 37.3, intensity: 15, spreadRate: 2.5, windSpeed: 25, windDirection: 120, temperature: 28, humidity: 35, area: 120 },
        { time: "2026-01-12T20:00:00Z", lat: -0.16, lon: 37.32, intensity: 45, spreadRate: 4.2, windSpeed: 32, windDirection: 125, temperature: 31, humidity: 28, area: 850 },
        { time: "2026-01-13T08:00:00Z", lat: -0.18, lon: 37.35, intensity: 120, spreadRate: 6.8, windSpeed: 38, windDirection: 130, temperature: 34, humidity: 22, area: 3200 },
        { time: "2026-01-13T20:00:00Z", lat: -0.21, lon: 37.38, intensity: 280, spreadRate: 8.5, windSpeed: 42, windDirection: 135, temperature: 36, humidity: 18, area: 8900 },
        { time: "2026-01-14T08:00:00Z", lat: -0.25, lon: 37.42, intensity: 450, spreadRate: 12.0, windSpeed: 45, windDirection: 140, temperature: 38, humidity: 15, area: 15200 },
        { time: "2026-01-14T20:00:00Z", lat: -0.30, lon: 37.48, intensity: 520, spreadRate: 15.5, windSpeed: 48, windDirection: 145, temperature: 40, humidity: 12, area: 22800 },
        { time: "2026-01-15T08:00:00Z", lat: -0.36, lon: 37.55, intensity: 480, spreadRate: 14.2, windSpeed: 46, windDirection: 142, temperature: 39, humidity: 14, area: 28500 },
      ],
      forecast: [
        { time: "2026-01-15T14:00:00Z", lat: -0.40, lon: 37.62, intensity: 550, spreadRate: 16.5, windSpeed: 50, windDirection: 145, temperature: 41, humidity: 10, area: 35200 },
        { time: "2026-01-15T20:00:00Z", lat: -0.46, lon: 37.70, intensity: 620, spreadRate: 18.0, windSpeed: 52, windDirection: 148, temperature: 42, humidity: 8, area: 43800 },
        { time: "2026-01-16T08:00:00Z", lat: -0.55, lon: 37.80, intensity: 580, spreadRate: 15.8, windSpeed: 48, windDirection: 145, temperature: 40, humidity: 12, area: 52000 },
      ],
    },
    {
      id: "fire-002",
      name: "Cape Peninsula Fire",
      country: "South Africa",
      startTime: "2026-01-14T14:00:00Z",
      cause: "human",
      status: "active",
      containment: 45,
      totalArea: 8900,
      personnel: 280,
      riskLevel: "high",
      history: [
        { time: "2026-01-14T14:00:00Z", lat: -34.0, lon: 18.4, intensity: 25, spreadRate: 1.8, windSpeed: 35, windDirection: 200, temperature: 32, humidity: 45, area: 45 },
        { time: "2026-01-14T20:00:00Z", lat: -34.02, lon: 18.38, intensity: 80, spreadRate: 3.5, windSpeed: 38, windDirection: 205, temperature: 33, humidity: 40, area: 380 },
        { time: "2026-01-15T08:00:00Z", lat: -34.05, lon: 18.35, intensity: 180, spreadRate: 5.2, windSpeed: 42, windDirection: 210, temperature: 35, humidity: 35, area: 2100 },
        { time: "2026-01-15T14:00:00Z", lat: -34.08, lon: 18.32, intensity: 220, spreadRate: 6.0, windSpeed: 45, windDirection: 215, temperature: 36, humidity: 32, area: 8900 },
      ],
      forecast: [
        { time: "2026-01-15T20:00:00Z", lat: -34.10, lon: 18.30, intensity: 250, spreadRate: 6.5, windSpeed: 46, windDirection: 215, temperature: 37, humidity: 30, area: 11200 },
        { time: "2026-01-16T08:00:00Z", lat: -34.12, lon: 18.28, intensity: 200, spreadRate: 5.0, windSpeed: 42, windDirection: 210, temperature: 35, humidity: 38, area: 12500 },
        { time: "2026-01-16T14:00:00Z", lat: -34.13, lon: 18.27, intensity: 150, spreadRate: 3.5, windSpeed: 38, windDirection: 205, temperature: 33, humidity: 45, area: 13200 },
      ],
    },
    {
      id: "fire-003",
      name: "Drakensberg Range Fire",
      country: "South Africa/Lesotho",
      startTime: "2026-01-10T06:00:00Z",
      cause: "lightning",
      status: "contained",
      containment: 85,
      totalArea: 7800,
      personnel: 150,
      riskLevel: "moderate",
      history: [
        { time: "2026-01-10T06:00:00Z", lat: -29.5, lon: 29.3, intensity: 30, spreadRate: 2.0, windSpeed: 20, windDirection: 270, temperature: 26, humidity: 55, area: 80 },
        { time: "2026-01-10T18:00:00Z", lat: -29.52, lon: 29.28, intensity: 90, spreadRate: 4.5, windSpeed: 28, windDirection: 275, temperature: 30, humidity: 40, area: 650 },
        { time: "2026-01-11T06:00:00Z", lat: -29.55, lon: 29.25, intensity: 200, spreadRate: 6.0, windSpeed: 35, windDirection: 280, temperature: 33, humidity: 30, area: 2100 },
        { time: "2026-01-11T18:00:00Z", lat: -29.58, lon: 29.22, intensity: 280, spreadRate: 7.5, windSpeed: 40, windDirection: 285, temperature: 35, humidity: 25, area: 4500 },
        { time: "2026-01-12T06:00:00Z", lat: -29.60, lon: 29.20, intensity: 250, spreadRate: 5.5, windSpeed: 32, windDirection: 275, temperature: 32, humidity: 35, area: 6200 },
        { time: "2026-01-13T06:00:00Z", lat: -29.61, lon: 29.19, intensity: 150, spreadRate: 3.0, windSpeed: 25, windDirection: 270, temperature: 29, humidity: 50, area: 7400 },
        { time: "2026-01-15T14:00:00Z", lat: -29.61, lon: 29.19, intensity: 80, spreadRate: 1.5, windSpeed: 18, windDirection: 265, temperature: 26, humidity: 65, area: 7800 },
      ],
      forecast: [
        { time: "2026-01-15T20:00:00Z", lat: -29.61, lon: 29.19, intensity: 50, spreadRate: 1.0, windSpeed: 15, windDirection: 260, temperature: 24, humidity: 75, area: 7900 },
        { time: "2026-01-16T08:00:00Z", lat: -29.61, lon: 29.19, intensity: 20, spreadRate: 0.5, windSpeed: 12, windDirection: 255, temperature: 22, humidity: 85, area: 7950 },
        { time: "2026-01-16T14:00:00Z", lat: -29.61, lon: 29.19, intensity: 5, spreadRate: 0.1, windSpeed: 10, windDirection: 250, temperature: 21, humidity: 90, area: 7980 },
      ],
    },
  ],
}

const RISK_CONFIG = {
  low: { label: "Low", color: "text-severity-green", bg: "bg-severity-green", border: "border-severity-green" },
  moderate: { label: "Moderate", color: "text-severity-yellow", bg: "bg-severity-yellow", border: "border-severity-yellow" },
  high: { label: "High", color: "text-severity-orange", bg: "bg-severity-orange", border: "border-severity-orange" },
  extreme: { label: "Extreme", color: "text-severity-red", bg: "bg-severity-red", border: "border-severity-red" },
}

function formatDuration(start: string): string {
  const hours = Math.floor((Date.now() - new Date(start).getTime()) / (1000 * 60 * 60))
  if (hours < 24) return `${hours}h`
  return `${Math.floor(hours / 24)}d ${hours % 24}h`
}

function getTrendIcon(current: number, previous: number) {
  if (current > previous) return <ArrowUpRight className="h-4 w-4 text-severity-red" />
  if (current < previous) return <ArrowDownRight className="h-4 w-4 text-severity-green" />
  return <Minus className="h-4 w-4 text-muted-foreground" />
}

export function WildfireTrackerVisualization() {
  const [selectedFire, setSelectedFire] = useState<string>(MOCK_WILDFIRE_DATA.fires[0].id)
  const data = MOCK_WILDFIRE_DATA
  const fire = data.fires.find(f => f.id === selectedFire) || data.fires[0]
  const risk = RISK_CONFIG[fire.riskLevel]
  
  const current = fire.history[fire.history.length - 1]
  const previous = fire.history[fire.history.length - 2] || current

  // Calculate spread direction for visualization
  const spreadAngle = useMemo(() => {
    if (fire.history.length < 2) return 0
    const start = fire.history[0]
    const end = fire.history[fire.history.length - 1]
    return Math.atan2(end.lon - start.lon, end.lat - start.lat) * (180 / Math.PI)
  }, [fire])

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-severity-red" />
            <CardTitle className="text-lg font-semibold">Wildfire Tracker</CardTitle>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {new Date(data.lastUpdate).toLocaleTimeString()}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <Tabs value={selectedFire} onValueChange={setSelectedFire}>
          <TabsList className="grid grid-cols-3 w-full">
            {data.fires.map((f) => (
              <TabsTrigger key={f.id} value={f.id} className="text-xs relative">
                <span className="truncate">{f.name.split(" ")[0]}</span>
                {f.status === "active" && (
                  <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-severity-red animate-pulse" />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {data.fires.map((f) => {
            const fRisk = RISK_CONFIG[f.riskLevel]
            const fCurrent = f.history[f.history.length - 1]
            
            return (
              <TabsContent key={f.id} value={f.id} className="space-y-4 mt-4">
                {/* Fire Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-medium">{f.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {f.country} • Started {formatDuration(f.startTime)} ago • {f.cause}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={cn("font-mono text-xs", fRisk.border, fRisk.color)}
                    >
                      {fRisk.label} Risk
                    </Badge>
                    <Badge 
                      variant={f.status === "active" ? "destructive" : "outline"}
                      className="text-xs"
                    >
                      {f.status}
                    </Badge>
                  </div>
                </div>

                {/* Current Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Area Burned</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xl font-bold">{(fCurrent.area / 100).toFixed(1)}</p>
                      <span className="text-xs text-muted-foreground">km²</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      {getTrendIcon(fCurrent.area, f.history[f.history.length - 2]?.area || fCurrent.area)}
                      <span className="text-[10px] text-muted-foreground">
                        +{((fCurrent.area - (f.history[f.history.length - 2]?.area || fCurrent.area)) / 100).toFixed(1)} km²/h
                      </span>
                    </div>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Fire Intensity</p>
                    <p className="text-xl font-bold">{fCurrent.intensity}</p>
                    <p className="text-[10px] text-muted-foreground">MW radiative power</p>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Spread Rate</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xl font-bold">{fCurrent.spreadRate}</p>
                      <span className="text-xs text-muted-foreground">km/h</span>
                    </div>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Containment</p>
                    <p className={cn(
                      "text-xl font-bold",
                      f.containment < 30 ? "text-severity-red" :
                      f.containment < 60 ? "text-severity-orange" :
                      f.containment < 90 ? "text-severity-yellow" :
                      "text-severity-green"
                    )}>{f.containment}%</p>
                    <div className="w-full h-1 bg-muted rounded-full mt-1">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all",
                          f.containment < 30 ? "bg-severity-red" :
                          f.containment < 60 ? "bg-severity-orange" :
                          f.containment < 90 ? "bg-severity-yellow" :
                          "bg-severity-green"
                        )}
                        style={{ width: `${f.containment}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Fire Spread Map */}
                <div className="rounded-lg border border-border bg-background/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Compass className="h-4 w-4 text-primary" />
                      Fire Spread Visualization
                    </h4>
                    <span className="text-[10px] text-muted-foreground">
                      Wind: {fCurrent.windSpeed} km/h from {fCurrent.windDirection}°
                    </span>
                  </div>
                  
                  <div className="relative h-48 bg-gradient-to-b from-slate-900/50 to-orange-950/20 rounded-md overflow-hidden">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      {/* Grid */}
                      <defs>
                        <pattern id="fireGrid" width="40" height="25" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="400" height="200" fill="url(#fireGrid)" />

                      {/* Fire spread areas (history) */}
                      {f.history.map((point, i) => {
                        const size = Math.sqrt(point.area) * 0.5
                        const opacity = (i + 1) / f.history.length * 0.3
                        return (
                          <ellipse
                            key={`hist-${i}`}
                            cx={200 + (point.lon - f.history[0].lon) * 500}
                            cy={100 + (f.history[0].lat - point.lat) * 500}
                            rx={size}
                            ry={size * 0.7}
                            fill="rgba(239, 68, 68, 0.2)"
                            stroke="none"
                          />
                        )
                      })}

                      {/* Current fire perimeter */}
                      <ellipse
                        cx={200 + (fCurrent.lon - f.history[0].lon) * 500}
                        cy={100 + (f.history[0].lat - fCurrent.lat) * 500}
                        rx={Math.sqrt(fCurrent.area) * 0.5}
                        ry={Math.sqrt(fCurrent.area) * 0.35}
                        fill="url(#fireGradient)"
                        stroke="#ef4444"
                        strokeWidth="2"
                        transform={`rotate(${fCurrent.windDirection - 90}, ${200 + (fCurrent.lon - f.history[0].lon) * 500}, ${100 + (f.history[0].lat - fCurrent.lat) * 500})`}
                      />

                      {/* Forecast spread */}
                      {f.forecast.map((point, i) => (
                        <ellipse
                          key={`forecast-${i}`}
                          cx={200 + (point.lon - f.history[0].lon) * 500}
                          cy={100 + (f.history[0].lat - point.lat) * 500}
                          rx={Math.sqrt(point.area) * 0.5}
                          ry={Math.sqrt(point.area) * 0.35}
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          opacity={0.6 - i * 0.15}
                        />
                      ))}

                      {/* Wind direction arrow */}
                      <g transform={`translate(350, 30) rotate(${fCurrent.windDirection})`}>
                        <line x1="0" y1="0" x2="25" y2="0" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                        <polygon points="25,0 20,-5 20,5" fill="rgba(255,255,255,0.5)" />
                      </g>

                      {/* Legend */}
                      <text x="10" y="185" fill="rgba(255,255,255,0.5)" fontSize="9">Current</text>
                      <ellipse cx="50" cy="182" rx="8" ry="6" fill="url(#fireGradient)" stroke="#ef4444" strokeWidth="1" />
                      <text x="70" y="185" fill="rgba(255,255,255,0.5)" fontSize="9">Forecast</text>
                      <ellipse cx="110" cy="182" rx="8" ry="6" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" />

                      <defs>
                        <radialGradient id="fireGradient" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#f97316" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
                        </radialGradient>
                      </defs>
                    </svg>

                    {/* Wind indicator */}
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                      <div className="flex items-center gap-1">
                        <Wind className="h-3 w-3 text-white/70" />
                        <span className="text-[10px] text-white/80">{fCurrent.windSpeed} km/h</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fire Behavior Chart */}
                <div className="rounded-lg border border-border bg-background/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Fire Intensity History</span>
                  </div>
                  
                  <div className="relative h-32">
                    <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                      {/* Grid */}
                      <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                      <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                      
                      {/* Intensity area */}
                      <path
                        d={`M 0 ${100 - (f.history[0].intensity / 700) * 100}
                            ${f.history.slice(1).map((p, i) => 
                              `L ${(i + 1) * (300 / (f.history.length - 1))} ${100 - (p.intensity / 700) * 100}`
                            ).join(' ')}
                            L 300 100 L 0 100 Z`}
                        fill="url(#intensityGradient)"
                        opacity="0.3"
                      />
                      
                      {/* Intensity line */}
                      <path
                        d={`M 0 ${100 - (f.history[0].intensity / 700) * 100}
                            ${f.history.slice(1).map((p, i) => 
                              `L ${(i + 1) * (300 / (f.history.length - 1))} ${100 - (p.intensity / 700) * 100}`
                            ).join(' ')}`}
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                      />

                      {/* Forecast line */}
                      {f.forecast.length > 0 && (
                        <path
                          d={`M ${300} ${100 - (f.history[f.history.length - 1].intensity / 700) * 100}
                              ${f.forecast.map((p, i) => 
                                `L ${300 + (i + 1) * (50 / f.forecast.length)} ${100 - (p.intensity / 700) * 100}`
                              ).join(' ')}`}
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="2"
                          strokeDasharray="4 2"
                        />
                      )}
                      
                      <defs>
                        <linearGradient id="intensityGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-2">
                    <span>Start</span>
                    <span>Current</span>
                    <span className="text-orange-500">Forecast</span>
                  </div>
                </div>

                {/* Conditions */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Thermometer className="h-3 w-3 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground uppercase">Temperature</p>
                    </div>
                    <p className="text-xl font-bold">{fCurrent.temperature}°C</p>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Droplets className="h-3 w-3 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground uppercase">Humidity</p>
                    </div>
                    <p className="text-xl font-bold">{fCurrent.humidity}%</p>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Personnel</p>
                    <p className="text-xl font-bold">{f.personnel}</p>
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>

        {/* Global Summary */}
        <div className="rounded-md bg-severity-red/10 border border-severity-red/30 p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-severity-red shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-severity-red">Active Fire Summary</p>
              <p className="text-[10px] text-severity-red/80 mt-1">
                {data.totalActive} active fires | {(data.totalArea / 100).toFixed(0)} km² burned |{" "}
                {data.fires.reduce((acc, f) => acc + f.personnel, 0).toLocaleString()} personnel deployed
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
