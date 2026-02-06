"use client"

import React from "react"

import { useState } from "react"
import {
  Layers,
  CloudRain,
  Satellite,
  MapPin,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  ChevronUp,
  ChevronDown,
  Thermometer,
  Wind,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export type WeatherLayer = "precipitation" | "satellite" | "temperature" | "wind" | "none"

interface MapControlsProps {
  activeLayer: WeatherLayer
  onLayerChange: (layer: WeatherLayer) => void
  alertsVisible: boolean
  onToggleAlerts: () => void
  // Time animation
  isPlaying: boolean
  onPlayPause: () => void
  onStepForward: () => void
  onStepBack: () => void
  currentFrameTime: number | null
  totalFrames: number
  currentFrameIndex: number
  onFrameChange: (index: number) => void
}

export function MapControls({
  activeLayer,
  onLayerChange,
  alertsVisible,
  onToggleAlerts,
  isPlaying,
  onPlayPause,
  onStepForward,
  onStepBack,
  currentFrameTime,
  totalFrames,
  currentFrameIndex,
  onFrameChange,
}: MapControlsProps) {
  const [expanded, setExpanded] = useState(true)

  const formatTime = (unix: number | null) => {
    if (!unix) return "--:--"
    const d = new Date(unix * 1000)
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const formatDate = (unix: number | null) => {
    if (!unix) return ""
    const d = new Date(unix * 1000)
    return d.toLocaleDateString([], { month: "short", day: "numeric" })
  }

  return (
    <div className="absolute bottom-4 left-4 z-[500] flex flex-col gap-2 max-w-xs">
      {/* Layer selector */}
      <div className="rounded-lg border border-border bg-card/90 backdrop-blur-md shadow-lg">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-foreground"
          type="button"
        >
          <span className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-primary" />
            LAYERS
          </span>
          {expanded ? (
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          ) : (
            <ChevronUp className="h-3 w-3 text-muted-foreground" />
          )}
        </button>

        {expanded && (
          <div className="px-2 pb-2 flex flex-col gap-1">
            <LayerButton
              icon={<CloudRain className="h-3.5 w-3.5" />}
              label="Precipitation Radar"
              active={activeLayer === "precipitation"}
              onClick={() => onLayerChange(activeLayer === "precipitation" ? "none" : "precipitation")}
            />
            <LayerButton
              icon={<Satellite className="h-3.5 w-3.5" />}
              label="Satellite Infrared"
              active={activeLayer === "satellite"}
              onClick={() => onLayerChange(activeLayer === "satellite" ? "none" : "satellite")}
            />
            <LayerButton
              icon={<Thermometer className="h-3.5 w-3.5" />}
              label="Temperature"
              active={activeLayer === "temperature"}
              onClick={() => onLayerChange(activeLayer === "temperature" ? "none" : "temperature")}
            />
            <LayerButton
              icon={<Wind className="h-3.5 w-3.5" />}
              label="Wind Field"
              active={activeLayer === "wind"}
              onClick={() => onLayerChange(activeLayer === "wind" ? "none" : "wind")}
            />
            <LayerButton
              icon={<MapPin className="h-3.5 w-3.5" />}
              label="Hazard Alerts"
              active={alertsVisible}
              onClick={onToggleAlerts}
            />
          </div>
        )}
      </div>

      {/* Static layer info - temperature/wind show data freshness instead of timeline */}
      {(activeLayer === "temperature" || activeLayer === "wind") && (
        <div className="rounded-lg border border-border bg-card/90 backdrop-blur-md shadow-lg px-3 py-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              {activeLayer === "temperature" ? "Temperature (ECMWF via Open-Meteo)" : "Wind Field (ECMWF via Open-Meteo)"}
            </span>
            <span className="text-[10px] font-mono text-primary">LIVE</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">
            {activeLayer === "temperature"
              ? "2m temperature grid across Africa. Color scale: blue (-10C) to red (50C)."
              : "10m wind direction and speed. Arrow length = speed, color = intensity."}
          </p>
        </div>
      )}

      {/* Time controls - only show for animated layers (precipitation/satellite) */}
      {(activeLayer === "precipitation" || activeLayer === "satellite") && totalFrames > 0 && (
        <div className="rounded-lg border border-border bg-card/90 backdrop-blur-md shadow-lg px-3 py-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              {activeLayer === "precipitation" ? "Radar Timeline" : "Satellite Timeline"}
            </span>
            <div className="flex flex-col items-end">
              <span className="text-xs font-mono font-bold text-foreground">
                {formatTime(currentFrameTime)}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">
                {formatDate(currentFrameTime)}
              </span>
            </div>
          </div>

          {/* Scrub bar */}
          <div className="relative mb-2">
            <input
              type="range"
              min={0}
              max={Math.max(0, totalFrames - 1)}
              value={currentFrameIndex}
              onChange={(e) => onFrameChange(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer
                         bg-secondary
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-3
                         [&::-webkit-slider-thumb]:h-3
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-primary
                         [&::-webkit-slider-thumb]:shadow-md
                         [&::-moz-range-thumb]:w-3
                         [&::-moz-range-thumb]:h-3
                         [&::-moz-range-thumb]:rounded-full
                         [&::-moz-range-thumb]:bg-primary
                         [&::-moz-range-thumb]:border-0"
            />
          </div>

          {/* Playback controls */}
          <div className="flex items-center justify-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={onStepBack}
              className="h-7 w-7 text-muted-foreground hover:text-foreground"
            >
              <SkipBack className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={onPlayPause}
              className="h-8 w-8 border-primary/40 text-primary hover:text-primary hover:bg-primary/10 bg-transparent"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onStepForward}
              className="h-7 w-7 text-muted-foreground hover:text-foreground"
            >
              <SkipForward className="h-3.5 w-3.5" />
            </Button>
            <span className="text-[10px] text-muted-foreground font-mono ml-2">
              {currentFrameIndex + 1}/{totalFrames}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

function LayerButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-md text-xs transition-colors ${
        active
          ? "bg-primary/15 text-primary border border-primary/30"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {active && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary animate-severity-pulse" />
      )}
    </button>
  )
}
