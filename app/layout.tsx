import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AFRO Storm | Africa Multi-Hazard Early Warning System",
  description:
    "Real-time natural disaster detection, monitoring, alerting, and reporting for the African continent. Protecting lives through early warning.",
  generator: "AFRO Storm by Mostar Industries",
  keywords: [
    "Africa",
    "early warning",
    "disaster",
    "cyclone",
    "flood",
    "drought",
    "weather",
    "AMHEWAS",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0a0e14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased overflow-hidden">{children}</body>
    </html>
  )
}
