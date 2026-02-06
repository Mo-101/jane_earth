export type Severity = "GREEN" | "YELLOW" | "ORANGE" | "RED"

export type HazardType =
  | "FLOOD"
  | "DROUGHT"
  | "CYCLONE"
  | "LANDSLIDE"
  | "EARTHQUAKE"
  | "WILDFIRE"
  | "VOLCANO"
  | "STORM"

export type AlertSource = "GDACS" | "NASA_EONET" | "RELIEFWEB" | "COMMUNITY" | "OPEN_METEO"

export interface HazardAlert {
  id: number
  external_id: string | null
  source: AlertSource
  hazard_type: HazardType
  severity: Severity
  title: string
  description: string | null
  country: string | null
  region: string | null
  latitude: number | null
  longitude: number | null
  event_start: string | null
  event_end: string | null
  is_active: boolean
  population_affected: number | null
  source_url: string | null
  created_at: string
  updated_at: string
}

export interface StormTrack {
  id: number
  track_id: string
  sample: number
  init_time: string
  basin: string
  storm_year: number
  storm_number: number
  start_time: string
  end_time: string | null
  peak_wind_speed: number | null
  avg_wind_speed: number | null
  min_pressure: number | null
  avg_pressure: number | null
  lat_min: number | null
  lat_max: number | null
  lat_center: number | null
  lon_min: number | null
  lon_max: number | null
  lon_center: number | null
  max_intensification_rate: number | null
  min_intensification_rate: number | null
  avg_intensification_rate: number | null
  total_accumulated_energy: number | null
  storm_id: string
  duration_hours: number | null
  peak_category: string | null
}

export interface StormObservation {
  id: number
  observation_id: string
  storm_id: string
  track_id: string
  sample: number
  valid_time: string
  lead_hours: number
  lat: number
  lon: number
  minimum_sea_level_pressure_hpa: number | null
  maximum_sustained_wind_speed_knots: number | null
  radius_of_maximum_winds_km: number | null
  intensity_category: string | null
  wind_34kt_avg: number | null
  wind_50kt_avg: number | null
  wind_64kt_avg: number | null
  pressure_wind_ratio: number | null
  storm_compactness: number | null
  speed_of_movement_kmh: number | null
  pressure_change_6h: number | null
  wind_change_6h: number | null
  intensification_rate: number | null
  cumulative_energy: number | null
}

export interface CommunityReport {
  id: number
  report_type: string
  hazard_type: HazardType
  severity_estimate: Severity
  title: string
  description: string | null
  reporter_name: string | null
  country: string
  region: string | null
  locality: string | null
  lat: number | null
  lon: number | null
  people_affected_estimate: number | null
  infrastructure_damage: string | null
  immediate_needs: string | null
  verification_status: "UNVERIFIED" | "VERIFIED" | "REJECTED"
  reported_at: string
}

export interface AfricaRegion {
  id: number
  country_code: string
  country_name: string
  sub_region: string
  capital: string | null
  capital_lat: number | null
  capital_lon: number | null
  population: number | null
  primary_hazards: string[] | null
  drought_risk_level: string | null
  flood_risk_level: string | null
  cyclone_risk_level: string | null
}

export interface WeatherData {
  latitude: number
  longitude: number
  temperature: number
  humidity: number
  precipitation: number
  wind_speed: number
  wind_direction: number
  pressure: number
  weather_code: number
  cloud_cover: number
}

export interface GDACSAlert {
  alertid: string
  eventtype: string
  eventname: string
  severity: { severitytext: string }
  country: string
  fromdate: string
  todate: string
  geo_lat: number
  geo_lon: number
  population: { value: number }
  url: { report: string }
  description: string
}

export interface NASAEvent {
  id: string
  title: string
  categories: Array<{ id: string; title: string }>
  geometry: Array<{ date: string; type: string; coordinates: number[] }>
  sources: Array<{ url: string }>
}

export interface DataIngestionStatus {
  source: string
  status: string
  records_fetched: number
  last_run: string
  response_time_ms: number
}
