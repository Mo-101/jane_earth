import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export async function GET() {
  const sql = getDb()
  try {
    const reports = await sql`
      SELECT * FROM community_reports
      WHERE is_active = true
      ORDER BY reported_at DESC
      LIMIT 100
    `
    return NextResponse.json({ count: reports.length, reports })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const sql = getDb()
  try {
    const body = await request.json()

    const {
      report_type,
      hazard_type,
      severity_estimate,
      title,
      description,
      reporter_name,
      reporter_contact,
      reporter_organization,
      country,
      region,
      locality,
      lat,
      lon,
      people_affected_estimate,
      infrastructure_damage,
      immediate_needs,
    } = body

    if (!report_type || !hazard_type || !title || !country) {
      return NextResponse.json(
        { error: "report_type, hazard_type, title, and country are required" },
        { status: 400 }
      )
    }

    const result = await sql`
      INSERT INTO community_reports (
        report_type, hazard_type, severity_estimate, title, description,
        reporter_name, reporter_contact, reporter_organization,
        country, region, locality, lat, lon,
        people_affected_estimate, infrastructure_damage, immediate_needs
      ) VALUES (
        ${report_type}, ${hazard_type}, ${severity_estimate || "YELLOW"},
        ${title}, ${description || null},
        ${reporter_name || null}, ${reporter_contact || null}, ${reporter_organization || null},
        ${country}, ${region || null}, ${locality || null},
        ${lat || null}, ${lon || null},
        ${people_affected_estimate || null}, ${infrastructure_damage || null}, ${immediate_needs || null}
      )
      RETURNING id
    `

    return NextResponse.json({ success: true, id: result[0].id }, { status: 201 })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errMsg }, { status: 500 })
  }
}
