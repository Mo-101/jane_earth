import type { Severity, HazardType } from "./types"

export const AFRICA_CENTER: [number, number] = [2.5, 20.0]
export const AFRICA_ZOOM = 3.5
export const AFRICA_BOUNDS: [[number, number], [number, number]] = [
  [-40, -25],
  [40, 55],
]

export const SEVERITY_CONFIG: Record<
  Severity,
  { label: string; color: string; bg: string; border: string; textColor: string }
> = {
  GREEN: {
    label: "Advisory",
    color: "hsl(142, 71%, 45%)",
    bg: "bg-severity-green/15",
    border: "border-severity-green/30",
    textColor: "text-severity-green",
  },
  YELLOW: {
    label: "Watch",
    color: "hsl(48, 96%, 53%)",
    bg: "bg-severity-yellow/15",
    border: "border-severity-yellow/30",
    textColor: "text-severity-yellow",
  },
  ORANGE: {
    label: "Warning",
    color: "hsl(25, 95%, 53%)",
    bg: "bg-severity-orange/15",
    border: "border-severity-orange/30",
    textColor: "text-severity-orange",
  },
  RED: {
    label: "Emergency",
    color: "hsl(0, 72%, 51%)",
    bg: "bg-severity-red/15",
    border: "border-severity-red/30",
    textColor: "text-severity-red",
  },
}

export const HAZARD_ICONS: Record<HazardType, string> = {
  FLOOD: "Waves",
  DROUGHT: "Sun",
  CYCLONE: "Wind",
  LANDSLIDE: "Mountain",
  EARTHQUAKE: "Activity",
  WILDFIRE: "Flame",
  VOLCANO: "Triangle",
  STORM: "CloudLightning",
}

export const SUB_REGIONS = [
  "North Africa",
  "West Africa",
  "Central Africa",
  "East Africa",
  "Southern Africa",
] as const

export const DATA_SOURCES = {
  OPEN_METEO: {
    name: "Open-Meteo",
    baseUrl: "https://api.open-meteo.com/v1",
    description: "Free weather API - no key required",
  },
  GDACS: {
    name: "GDACS",
    baseUrl: "https://www.gdacs.org/gdacsapi/api/events",
    description: "Global Disaster Alert and Coordination System",
  },
  NASA_EONET: {
    name: "NASA EONET",
    baseUrl: "https://eonet.gsfc.nasa.gov/api/v3",
    description: "Earth Observatory Natural Event Tracker",
  },
  RELIEFWEB: {
    name: "ReliefWeb",
    baseUrl: "https://api.reliefweb.int/v1",
    description: "UN OCHA humanitarian information service",
  },
} as const
