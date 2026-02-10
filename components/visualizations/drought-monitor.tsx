"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Sun, 
  Thermometer,
  Droplets,
  Sprout,
  AlertTriangle,
  Clock,
  TrendingUp,
  MapPin,
  Flame,
  CloudRain
} from "lucide-react"
import { cn } from "@/lib/utils"

interface DroughtIndex {
  month: string
  spi: number // Standardized Precipitation Index
  soilMoisture: number // percentage
  vegetationHealth: number // NDVI-like 0-1
  temperature: number // celsius
  rainfall: number // mm
}

interface DroughtZone {
  id: string
  name: string
  country: string
  severity: "D0" | "D1" | "D2" | "D3" | "D4" // Abnormally Dry to Exceptional Drought
  startDate: string
  duration: number // months
  populationAffected: number
  agriculturalLoss: number // percentage
  waterReservoirLevel: number // percentage
  last12Months: DroughtIndex[]
  forecastNext3Months: {
    spi: number[]
    probabilityImprove: number
    probabilityPersist: number
    probabilityWorsen: number
  }
}

interface DroughtData {
  zones: DroughtZone[]
  lastUpdate: string
  totalAffected: number
}

const SEVERITY_CONFIG = {
  D0: { label: "Abnormally Dry", color: "text-yellow-500", bg: "bg-yellow-500", border: "border-yellow-500" },
  D1: { label: "Moderate Drought", color: "text-amber-500", bg: "bg-amber-500", border: "border-amber-500" },
  D2: { label: "Severe Drought", color: "text-orange-500", bg: "bg-orange-500", border: "border-orange-500" },
  D3: { label: "Extreme Drought", color: "text-red-500", bg: "bg-red-500", border: "border-red-500" },
  D4: { label: "Exceptional Drought", color: "text-purple-500", bg: "bg-purple-500", border: "border-purple-500" },
}

const MOCK_DROUGHT_DATA: DroughtData = {
  lastUpdate: "2026-01-15T12:00:00Z",
  totalAffected: 8500000,
  zones: [
    {
      id: "drought-001",
      name: "Greater Horn of Africa",
      country: "Ethiopia/Kenya/Somalia",
      severity: "D3",
      startDate: "2023-03-01",
      duration: 34,
      populationAffected: 5200000,
      agriculturalLoss: 68,
      waterReservoirLevel: 22,
      last12Months: [
        { month: "Jan", spi: -1.8, soilMoisture: 15, vegetationHealth: 0.25, temperature: 32, rainfall: 12 },
        { month: "Feb", spi: -2.1, soilMoisture: 12, vegetationHealth: 0.22, temperature: 34, rainfall: 8 },
        { month: "Mar", spi: -2.3, soilMoisture: 10, vegetationHealth: 0.20, temperature: 35, rainfall: 5 },
        { month: "Apr", spi: -1.9, soilMoisture: 18, vegetationHealth: 0.28, temperature: 33, rainfall: 25 },
        { month: "May", spi: -1.5, soilMoisture: 25, vegetationHealth: 0.35, temperature: 31, rainfall: 45 },
        { month: "Jun", spi: -1.2, soilMoisture: 30, vegetationHealth: 0.42, temperature: 30, rainfall: 65 },
        { month: "Jul", spi: -0.8, soilMoisture: 35, vegetationHealth: 0.48, temperature: 29, rainfall: 85 },
        { month: "Aug", spi: -0.5, soilMoisture: 38, vegetationHealth: 0.52, temperature: 29, rainfall: 95 },
        { month: "Sep", spi: -1.0, soilMoisture: 28, vegetationHealth: 0.40, temperature: 31, rainfall: 55 },
        { month: "Oct", spi: -1.6, soilMoisture: 20, vegetationHealth: 0.30, temperature: 33, rainfall: 28 },
        { month: "Nov", spi: -2.0, soilMoisture: 14, vegetationHealth: 0.24, temperature: 34, rainfall: 15 },
        { month: "Dec", spi: -2.2, soilMoisture: 11, vegetationHealth: 0.21, temperature: 35, rainfall: 10 },
      ],
      forecastNext3Months: {
        spi: [-1.8, -1.5, -1.2],
        probabilityImprove: 35,
        probabilityPersist: 45,
        probabilityWorsen: 20,
      },
    },
    {
      id: "drought-002",
      name: "Sahel Region",
      country: "Mali/Niger/Chad",
      severity: "D2",
      startDate: "2024-06-01",
      duration: 7,
      populationAffected: 2100000,
      agriculturalLoss: 45,
      waterReservoirLevel: 38,
      last12Months: [
        { month: "Jan", spi: -0.5, soilMoisture: 25, vegetationHealth: 0.45, temperature: 28, rainfall: 0 },
        { month: "Feb", spi: -0.8, soilMoisture: 20, vegetationHealth: 0.40, temperature: 31, rainfall: 0 },
        { month: "Mar", spi: -1.2, soilMoisture: 15, vegetationHealth: 0.32, temperature: 35, rainfall: 2 },
        { month: "Apr", spi: -1.5, soilMoisture: 12, vegetationHealth: 0.28, temperature: 38, rainfall: 5 },
        { month: "May", spi: -1.8, soilMoisture: 18, vegetationHealth: 0.35, temperature: 40, rainfall: 15 },
        { month: "Jun", spi: -1.4, soilMoisture: 30, vegetationHealth: 0.48, temperature: 38, rainfall: 55 },
        { month: "Jul", spi: -0.9, soilMoisture: 42, vegetationHealth: 0.58, temperature: 35, rainfall: 120 },
        { month: "Aug", spi: -0.6, soilMoisture: 45, vegetationHealth: 0.62, temperature: 33, rainfall: 145 },
        { month: "Sep", spi: -1.1, soilMoisture: 32, vegetationHealth: 0.48, temperature: 36, rainfall: 65 },
        { month: "Oct", spi: -1.6, soilMoisture: 22, vegetationHealth: 0.35, temperature: 38, rainfall: 18 },
        { month: "Nov", spi: -1.9, soilMoisture: 16, vegetationHealth: 0.28, temperature: 35, rainfall: 2 },
        { month: "Dec", spi: -2.0, soilMoisture: 14, vegetationHealth: 0.25, temperature: 32, rainfall: 0 },
      ],
      forecastNext3Months: {
        spi: [-1.5, -0.8, -0.3],
        probabilityImprove: 55,
        probabilityPersist: 35,
        probabilityWorsen: 10,
      },
    },
    {
      id: "drought-003",
      name: "Southern Madagascar",
      country: "Madagascar",
      severity: "D4",
      startDate: "2021-09-01",
      duration: 52,
      populationAffected: 1200000,
      agriculturalLoss: 85,
      waterReservoirLevel: 8,
      last12Months: [
        { month: "Jan", spi: -2.5, soilMoisture: 8, vegetationHealth: 0.12, temperature: 31, rainfall: 45 },
        { month: "Feb", spi: -2.4, soilMoisture: 10, vegetationHealth: 0.15, temperature: 30, rainfall: 55 },
        { month: "Mar", spi: -2.2, soilMoisture: 12, vegetationHealth: 0.18, temperature: 29, rainfall: 40 },
        { month: "Apr", spi: -2.3, soilMoisture: 9, vegetationHealth: 0.12, temperature: 28, rainfall: 18 },
        { month: "May", spi: -2.5, soilMoisture: 6, vegetationHealth: 0.08, temperature: 26, rainfall: 8 },
        { month: "Jun", spi: -2.6, soilMoisture: 4, vegetationHealth: 0.05, temperature: 24, rainfall: 3 },
        { month: "Jul", spi: -2.7, soilMoisture: 3, vegetationHealth: 0.04, temperature: 23, rainfall: 2 },
        { month: "Aug", spi: -2.6, soilMoisture: 3, vegetationHealth: 0.04, temperature: 24, rainfall: 3 },
        { month: "Sep", spi: -2.5, soilMoisture: 4, vegetationHealth: 0.06, temperature: 26, rainfall: 5 },
        { month: "Oct", spi: -2.4, soilMoisture: 5, vegetationHealth: 0.08, temperature: 28, rainfall: 8 },
        { month: "Nov", spi: -2.3, soilMoisture: 6, vegetationHealth: 0.10, temperature: 29, rainfall: 15 },
        { month: "Dec", spi: -2.2, soilMoisture: 7, vegetationHealth: 0.12, temperature: 30, rainfall: 28 },
      ],
      forecastNext3Months: {
        spi: [-2.0, -1.8, -1.5],
        probabilityImprove: 20,
        probabilityPersist: 40,
        probabilityWorsen: 40,
      },
    },
  ],
}

function getSPIStatus(spi: number): { label: string; color: string } {
  if (spi <= -2.0) return { label: "Extremely Dry", color: "text-purple-500" }
  if (spi <= -1.5) return { label: "Severely Dry", color: "text-red-500" }
  if (spi <= -1.0) return { label: "Moderately Dry", color: "text-orange-500" }
  if (spi < 0) return { label: "Mild Dry", color: "text-yellow-500" }
  return { label: "Normal", color: "text-severity-green" }
}

export function DroughtMonitorVisualization() {
  const data = MOCK_DROUGHT_DATA

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-severity-orange" />
            <CardTitle className="text-lg font-semibold">Drought Monitor</CardTitle>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {new Date(data.lastUpdate).toLocaleTimeString()}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <Tabs defaultValue={data.zones[0].id}>
          <TabsList className="grid grid-cols-3 w-full">
            {data.zones.map((zone) => (
              <TabsTrigger key={zone.id} value={zone.id} className="text-xs">
                <span className="truncate">{zone.name.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {data.zones.map((zone) => {
            const config = SEVERITY_CONFIG[zone.severity]
            const current = zone.last12Months[zone.last12Months.length - 1]
            const spiStatus = getSPIStatus(current.spi)
            
            return (
              <TabsContent key={zone.id} value={zone.id} className="space-y-4 mt-4">
                {/* Zone Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-medium">{zone.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{zone.country}</p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={cn("font-mono text-xs", config.border, config.color)}
                  >
                    {zone.severity} - {config.label}
                  </Badge>
                </div>

                {/* Current Conditions */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <CloudRain className="h-3 w-3 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground uppercase">SPI Index</p>
                    </div>
                    <p className={cn("text-xl font-bold", spiStatus.color)}>{current.spi.toFixed(1)}</p>
                    <p className="text-[9px] text-muted-foreground">{spiStatus.label}</p>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Droplets className="h-3 w-3 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground uppercase">Soil Moisture</p>
                    </div>
                    <p className="text-xl font-bold">{current.soilMoisture}%</p>
                    <div className="w-full h-1 bg-muted rounded-full mt-1">
                      <div 
                        className="h-full rounded-full bg-blue-500 transition-all"
                        style={{ width: `${current.soilMoisture}%` }}
                      />
                    </div>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Sprout className="h-3 w-3 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground uppercase">Vegetation</p>
                    </div>
                    <p className="text-xl font-bold">{(current.vegetationHealth * 100).toFixed(0)}%</p>
                    <div className="w-full h-1 bg-muted rounded-full mt-1">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all",
                          current.vegetationHealth < 0.3 ? "bg-severity-red" :
                          current.vegetationHealth < 0.5 ? "bg-severity-orange" :
                          "bg-severity-green"
                        )}
                        style={{ width: `${current.vegetationHealth * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Thermometer className="h-3 w-3 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground uppercase">Temperature</p>
                    </div>
                    <p className="text-xl font-bold">{current.temperature}°C</p>
                    <p className="text-[9px] text-muted-foreground">{current.rainfall}mm rainfall</p>
                  </div>
                </div>

                {/* 12-Month SPI Chart */}
                <div className="rounded-lg border border-border bg-background/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">12-Month Drought Index</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">SPI - Standardized Precipitation Index</span>
                  </div>
                  
                  {/* SPI Bar Chart */}
                  <div className="relative h-40 flex items-end justify-between gap-1">
                    {zone.last12Months.map((month, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="relative w-full flex justify-center">
                          {/* Zero line at 50% */}
                          <div className="absolute top-1/2 w-full h-px bg-muted-foreground/30" />
                          <div 
                            className={cn(
                              "w-full max-w-[20px] rounded-t transition-all",
                              month.spi < -2.0 ? "bg-purple-500" :
                              month.spi < -1.5 ? "bg-red-500" :
                              month.spi < -1.0 ? "bg-orange-500" :
                              month.spi < 0 ? "bg-yellow-500" :
                              "bg-severity-green"
                            )}
                            style={{ 
                              height: `${Math.abs(month.spi) * 30}px`,
                              marginTop: month.spi < 0 ? 'auto' : 0,
                              marginBottom: month.spi >= 0 ? 'auto' : 0,
                            }}
                          />
                        </div>
                        <span className="text-[9px] text-muted-foreground font-mono">{month.month}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-2">
                    <span className="text-purple-500">Exceptional (-2.5)</span>
                    <span className="text-red-500">Extreme (-2.0)</span>
                    <span className="text-orange-500">Severe (-1.5)</span>
                    <span className="text-yellow-500">Moderate (-1.0)</span>
                    <span className="text-severity-green">Normal</span>
                  </div>
                </div>

                {/* 3-Month Forecast */}
                <div className="rounded-lg border border-border bg-background/30 p-4">
                  <h4 className="text-sm font-medium mb-3">3-Month Outlook</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-severity-green">Improve</span>
                        <span className="font-medium">{zone.forecastNext3Months.probabilityImprove}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-severity-green rounded-full"
                          style={{ width: `${zone.forecastNext3Months.probabilityImprove}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-severity-yellow">Persist</span>
                        <span className="font-medium">{zone.forecastNext3Months.probabilityPersist}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-severity-yellow rounded-full"
                          style={{ width: `${zone.forecastNext3Months.probabilityPersist}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-severity-red">Worsen</span>
                        <span className="font-medium">{zone.forecastNext3Months.probabilityWorsen}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-severity-red rounded-full"
                          style={{ width: `${zone.forecastNext3Months.probabilityWorsen}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Duration</p>
                    <p className="text-lg font-bold">{zone.duration} <span className="text-xs font-normal">months</span></p>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">People Affected</p>
                    <p className="text-lg font-bold">{(zone.populationAffected / 1000000).toFixed(1)}M</p>
                  </div>
                  <div className="rounded-md bg-background/50 border border-border p-3">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Reservoir Level</p>
                    <p className={cn(
                      "text-lg font-bold",
                      zone.waterReservoirLevel < 20 ? "text-severity-red" :
                      zone.waterReservoirLevel < 40 ? "text-severity-orange" :
                      "text-severity-green"
                    )}>{zone.waterReservoirLevel}%</p>
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>

        {/* Global Summary */}
        <div className="rounded-md bg-severity-orange/10 border border-severity-orange/30 p-3">
          <div className="flex items-start gap-2">
            <Flame className="h-4 w-4 text-severity-orange shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-severity-orange">Regional Drought Summary</p>
              <p className="text-[10px] text-severity-orange/80 mt-1">
                {data.zones.length} drought zones monitored | {(data.totalAffected / 1000000).toFixed(1)}M people affected |{" "}
                Longest drought: {Math.max(...data.zones.map(z => z.duration))} months
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
