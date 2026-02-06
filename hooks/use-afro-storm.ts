"use client"

import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useAlerts(params?: string) {
  const query = params ? `?${params}` : ""
  return useSWR(`/api/alerts${query}`, fetcher, {
    refreshInterval: 60_000,
    revalidateOnFocus: true,
  })
}

export function useWeather() {
  return useSWR("/api/weather", fetcher, {
    refreshInterval: 300_000,
    revalidateOnFocus: true,
  })
}

export function usePipelineStatus() {
  return useSWR("/api/pipeline/status", fetcher, {
    refreshInterval: 30_000,
    revalidateOnFocus: true,
  })
}

export function useCommunityReports() {
  return useSWR("/api/reports", fetcher, {
    refreshInterval: 60_000,
  })
}

export function useRainViewer() {
  return useSWR("/api/v1/tiles/rainviewer", fetcher, {
    refreshInterval: 300_000, // 5 min
    revalidateOnFocus: false,
  })
}
