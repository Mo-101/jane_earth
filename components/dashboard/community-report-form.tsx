"use client"

import React from "react"

import { useState } from "react"
import { Send, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { HazardType, Severity } from "@/lib/types"
import { SEVERITY_CONFIG } from "@/lib/constants"

const HAZARD_OPTIONS: { value: HazardType; label: string }[] = [
  { value: "FLOOD", label: "Flooding" },
  { value: "DROUGHT", label: "Drought" },
  { value: "CYCLONE", label: "Cyclone / Storm" },
  { value: "LANDSLIDE", label: "Landslide" },
  { value: "EARTHQUAKE", label: "Earthquake" },
  { value: "WILDFIRE", label: "Wildfire" },
  { value: "VOLCANO", label: "Volcanic Activity" },
]

const SEVERITY_OPTIONS: { value: Severity; label: string }[] = [
  { value: "GREEN", label: "Low - Advisory" },
  { value: "YELLOW", label: "Moderate - Watch" },
  { value: "ORANGE", label: "High - Warning" },
  { value: "RED", label: "Critical - Emergency" },
]

interface CommunityReportFormProps {
  onSubmitSuccess?: () => void
}

export function CommunityReportForm({ onSubmitSuccess }: CommunityReportFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    hazard_type: "" as HazardType | "",
    severity_estimate: "YELLOW" as Severity,
    title: "",
    description: "",
    country: "",
    region: "",
    locality: "",
    reporter_name: "",
    reporter_contact: "",
    reporter_organization: "",
    people_affected_estimate: "",
    infrastructure_damage: "",
    immediate_needs: "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!formData.hazard_type || !formData.title || !formData.country) {
      setError("Please fill in all required fields: hazard type, title, and country.")
      return
    }

    setIsSubmitting(true)

    try {
      const body = {
        report_type: "FIELD_REPORT",
        hazard_type: formData.hazard_type,
        severity_estimate: formData.severity_estimate,
        title: formData.title,
        description: formData.description || null,
        country: formData.country,
        region: formData.region || null,
        locality: formData.locality || null,
        reporter_name: formData.reporter_name || null,
        reporter_contact: formData.reporter_contact || null,
        reporter_organization: formData.reporter_organization || null,
        people_affected_estimate: formData.people_affected_estimate
          ? Number.parseInt(formData.people_affected_estimate)
          : null,
        infrastructure_damage: formData.infrastructure_damage || null,
        immediate_needs: formData.immediate_needs || null,
      }

      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (!res.ok) throw new Error("Failed to submit report")

      setSubmitted(true)
      onSubmitSuccess?.()
    } catch {
      setError("Failed to submit report. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <div className="p-3 rounded-full bg-severity-green/15 border border-severity-green/30">
          <CheckCircle2 className="h-8 w-8 text-severity-green" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground">Report Submitted</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Your field report has been received and will be verified by our team.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false)
            setFormData({
              hazard_type: "",
              severity_estimate: "YELLOW",
              title: "",
              description: "",
              country: "",
              region: "",
              locality: "",
              reporter_name: "",
              reporter_contact: "",
              reporter_organization: "",
              people_affected_estimate: "",
              infrastructure_damage: "",
              immediate_needs: "",
            })
          }}
          className="bg-transparent"
        >
          Submit Another Report
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-md bg-severity-red/10 border border-severity-red/20">
          <AlertTriangle className="h-4 w-4 text-severity-red shrink-0" />
          <p className="text-sm text-severity-red">{error}</p>
        </div>
      )}

      {/* Hazard type and severity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="hazard_type" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Hazard Type <span className="text-severity-red">*</span>
          </label>
          <select
            id="hazard_type"
            value={formData.hazard_type}
            onChange={(e) => setFormData({ ...formData, hazard_type: e.target.value as HazardType })}
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            required
          >
            <option value="">Select hazard type</option>
            {HAZARD_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="severity" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Estimated Severity
          </label>
          <select
            id="severity"
            value={formData.severity_estimate}
            onChange={(e) => setFormData({ ...formData, severity_estimate: e.target.value as Severity })}
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {SEVERITY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-xs font-medium text-muted-foreground mb-1.5">
          Report Title <span className="text-severity-red">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Brief description of the hazard event"
          className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
          required
          maxLength={500}
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-xs font-medium text-muted-foreground mb-1.5">
          Detailed Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Provide details about what you are observing on the ground..."
          rows={3}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
        />
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label htmlFor="country" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Country <span className="text-severity-red">*</span>
          </label>
          <input
            id="country"
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. Mozambique"
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="region" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Region / Province
          </label>
          <input
            id="region"
            type="text"
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            placeholder="e.g. Sofala Province"
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="locality" className="block text-xs font-medium text-muted-foreground mb-1.5">
            City / Locality
          </label>
          <input
            id="locality"
            type="text"
            value={formData.locality}
            onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
            placeholder="e.g. Beira"
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Impact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="people_affected" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Estimated People Affected
          </label>
          <input
            id="people_affected"
            type="number"
            value={formData.people_affected_estimate}
            onChange={(e) => setFormData({ ...formData, people_affected_estimate: e.target.value })}
            placeholder="e.g. 5000"
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
            min={0}
          />
        </div>
        <div>
          <label htmlFor="immediate_needs" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Immediate Needs
          </label>
          <input
            id="immediate_needs"
            type="text"
            value={formData.immediate_needs}
            onChange={(e) => setFormData({ ...formData, immediate_needs: e.target.value })}
            placeholder="e.g. Clean water, shelter, medical supplies"
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Reporter info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label htmlFor="reporter_name" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Your Name
          </label>
          <input
            id="reporter_name"
            type="text"
            value={formData.reporter_name}
            onChange={(e) => setFormData({ ...formData, reporter_name: e.target.value })}
            placeholder="Name (optional)"
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="reporter_contact" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Contact (Phone/Email)
          </label>
          <input
            id="reporter_contact"
            type="text"
            value={formData.reporter_contact}
            onChange={(e) => setFormData({ ...formData, reporter_contact: e.target.value })}
            placeholder="For follow-up (optional)"
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="reporter_org" className="block text-xs font-medium text-muted-foreground mb-1.5">
            Organization
          </label>
          <input
            id="reporter_org"
            type="text"
            value={formData.reporter_organization}
            onChange={(e) => setFormData({ ...formData, reporter_organization: e.target.value })}
            placeholder="e.g. Red Cross, UNDP"
            className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {isSubmitting ? "Submitting Report..." : "Submit Field Report"}
      </Button>
    </form>
  )
}
