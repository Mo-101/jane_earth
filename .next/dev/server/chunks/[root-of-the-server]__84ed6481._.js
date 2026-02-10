module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/jane_earth/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDb",
    ()=>getDb,
    "isDbConfigured",
    ()=>isDbConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
;
let sqlInstance = null;
function getDb() {
    if (sqlInstance) {
        return sqlInstance;
    }
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is not set");
    }
    sqlInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(process.env.DATABASE_URL);
    return sqlInstance;
}
function isDbConfigured() {
    return !!process.env.DATABASE_URL;
}
}),
"[project]/jane_earth/lib/mock-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for development when database is unavailable
__turbopack_context__.s([
    "mockAlerts",
    ()=>mockAlerts,
    "mockPipelineStatus",
    ()=>mockPipelineStatus,
    "mockReports",
    ()=>mockReports
]);
const mockAlerts = [
    {
        id: 1,
        external_id: "GDACS-TC-2024001",
        source: "GDACS",
        hazard_type: "CYCLONE",
        severity: "RED",
        title: "Tropical Cyclone Belal",
        description: "Tropical Cyclone Belal affecting Mauritius and Reunion Islands with heavy rainfall and strong winds.",
        country: "Mauritius",
        region: "Indian Ocean",
        latitude: -20.2,
        longitude: 57.5,
        event_start: "2026-01-15T00:00:00Z",
        event_end: null,
        is_active: true,
        population_affected: 150000,
        source_url: "https://www.gdacs.org/report.aspx?eventid=1000001",
        created_at: "2026-01-15T00:00:00Z",
        updated_at: "2026-01-15T00:00:00Z"
    },
    {
        id: 2,
        external_id: "GDACS-FL-2024002",
        source: "GDACS",
        hazard_type: "FLOOD",
        severity: "ORANGE",
        title: "Nigeria Floods - Niger Delta",
        description: "Severe flooding in the Niger Delta region affecting multiple states.",
        country: "Nigeria",
        region: "Niger Delta",
        latitude: 5.0,
        longitude: 6.3,
        event_start: "2026-01-10T00:00:00Z",
        event_end: null,
        is_active: true,
        population_affected: 50000,
        source_url: "https://www.gdacs.org/report.aspx?eventid=1000002",
        created_at: "2026-01-10T00:00:00Z",
        updated_at: "2026-01-10T00:00:00Z"
    },
    {
        id: 3,
        external_id: "NASA-12345",
        source: "NASA_EONET",
        hazard_type: "WILDFIRE",
        severity: "YELLOW",
        title: "Forest Fire - Mount Kenya Region",
        description: "Wildfire burning in forest areas near Mount Kenya.",
        country: "Kenya",
        region: "Mount Kenya",
        latitude: -0.15,
        longitude: 37.3,
        event_start: "2026-01-12T00:00:00Z",
        event_end: null,
        is_active: true,
        population_affected: null,
        source_url: "https://eonet.gsfc.nasa.gov/api/v3/events/12345",
        created_at: "2026-01-12T00:00:00Z",
        updated_at: "2026-01-12T00:00:00Z"
    },
    {
        id: 4,
        external_id: "GDACS-DR-2024003",
        source: "GDACS",
        hazard_type: "DROUGHT",
        severity: "ORANGE",
        title: "Eastern Africa Drought",
        description: "Prolonged drought affecting parts of Ethiopia, Kenya, and Somalia.",
        country: "Ethiopia",
        region: "Eastern Highlands",
        latitude: 9.0,
        longitude: 40.0,
        event_start: "2025-11-01T00:00:00Z",
        event_end: null,
        is_active: true,
        population_affected: 2000000,
        source_url: "https://www.gdacs.org/report.aspx?eventid=1000003",
        created_at: "2025-11-01T00:00:00Z",
        updated_at: "2025-11-01T00:00:00Z"
    },
    {
        id: 5,
        external_id: "RELIEFWEB-98765",
        source: "RELIEFWEB",
        hazard_type: "FLOOD",
        severity: "RED",
        title: "Libya Flash Floods - Derna",
        description: "Catastrophic flooding in Derna after Storm Daniel caused dam collapses.",
        country: "Libya",
        region: "Derna",
        latitude: 32.75,
        longitude: 22.65,
        event_start: "2025-09-10T00:00:00Z",
        event_end: null,
        is_active: true,
        population_affected: 100000,
        source_url: "https://reliefweb.int/disaster/fl-2023-000165-lby",
        created_at: "2025-09-10T00:00:00Z",
        updated_at: "2025-09-10T00:00:00Z"
    }
];
const mockPipelineStatus = {
    pipeline: [
        {
            source: "GDACS",
            status: "SUCCESS",
            records_fetched: 45,
            records_inserted: 2,
            records_updated: 3,
            error_message: null,
            response_time_ms: 2345,
            started_at: new Date(Date.now() - 300000).toISOString(),
            completed_at: new Date(Date.now() - 297000).toISOString()
        },
        {
            source: "NASA_EONET",
            status: "SUCCESS",
            records_fetched: 120,
            records_inserted: 1,
            records_updated: 0,
            error_message: null,
            response_time_ms: 1890,
            started_at: new Date(Date.now() - 600000).toISOString(),
            completed_at: new Date(Date.now() - 598000).toISOString()
        },
        {
            source: "RELIEFWEB",
            status: "SUCCESS",
            records_fetched: 25,
            records_inserted: 0,
            records_updated: 1,
            error_message: null,
            response_time_ms: 3100,
            started_at: new Date(Date.now() - 900000).toISOString(),
            completed_at: new Date(Date.now() - 897000).toISOString()
        }
    ],
    summary: {
        total_active_alerts: mockAlerts.length,
        by_severity: [
            {
                severity: "RED",
                count: 2
            },
            {
                severity: "ORANGE",
                count: 2
            },
            {
                severity: "YELLOW",
                count: 1
            }
        ],
        by_hazard_type: [
            {
                hazard_type: "FLOOD",
                count: 2
            },
            {
                hazard_type: "CYCLONE",
                count: 1
            },
            {
                hazard_type: "WILDFIRE",
                count: 1
            },
            {
                hazard_type: "DROUGHT",
                count: 1
            }
        ]
    },
    timestamp: new Date().toISOString()
};
const mockReports = [
    {
        id: 1,
        report_type: "Eyewitness",
        hazard_type: "FLOOD",
        severity_estimate: "ORANGE",
        title: "Flooding in Lagos Suburbs",
        description: "Significant flooding observed in residential areas after heavy overnight rains.",
        reporter_name: "John Doe",
        reporter_contact: "john@example.com",
        reporter_organization: "Community Watch",
        country: "Nigeria",
        region: "Lagos State",
        locality: "Ikeja",
        lat: 6.6,
        lon: 3.35,
        people_affected_estimate: 500,
        infrastructure_damage: "Roads blocked, some homes flooded",
        immediate_needs: "Clean water, temporary shelter",
        verification_status: "UNVERIFIED",
        is_active: true,
        reported_at: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: 2,
        report_type: "Damage Assessment",
        hazard_type: "CYCLONE",
        severity_estimate: "RED",
        title: "Cyclone damage in coastal areas",
        description: "Multiple structures damaged, power lines down.",
        reporter_name: "Jane Smith",
        reporter_contact: "jane@redcross.org",
        reporter_organization: "Red Cross",
        country: "Mozambique",
        region: "Sofala",
        locality: "Beira",
        lat: -19.8,
        lon: 34.9,
        people_affected_estimate: 2000,
        infrastructure_damage: "Hospitals, schools, roads damaged",
        immediate_needs: "Medical supplies, food, water",
        verification_status: "VERIFIED",
        is_active: true,
        reported_at: new Date(Date.now() - 172800000).toISOString()
    }
];
}),
"[project]/jane_earth/app/api/v1/health/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/mock-data.ts [app-route] (ecmascript)");
;
;
;
const dynamic = "force-dynamic";
const revalidate = 0;
async function GET() {
    const checks = {};
    let overallHealthy = true;
    // If database is not configured, return mock health status
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDbConfigured"])()) {
        console.log("[API /v1/health] Using mock data (DATABASE_URL not set)");
        checks.database = {
            status: "MOCK",
            detail: "DATABASE_URL not set - using mock data"
        };
        checks.alert_data = {
            status: "UP",
            detail: `${__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockAlerts"].length} mock active alerts, 2 RED, source: mock data`
        };
        checks.sources = {
            status: "UP",
            detail: "Mock pipeline sources available"
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "HEALTHY (MOCK MODE)",
            version: "1.0.0",
            service: "afro-storm",
            timestamp: new Date().toISOString(),
            uptime_note: "Running in mock mode - no database configured",
            checks
        }, {
            status: 200
        });
    }
    // 1. Database connectivity check
    const dbStart = Date.now();
    try {
        const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        const result = await sql`SELECT 1 as alive, NOW() as server_time`;
        checks.database = {
            status: "UP",
            latency_ms: Date.now() - dbStart,
            detail: `Server time: ${result[0]?.server_time}`
        };
    } catch (err) {
        overallHealthy = false;
        checks.database = {
            status: "DOWN",
            latency_ms: Date.now() - dbStart,
            detail: err instanceof Error ? err.message : "Connection failed"
        };
    }
    // 2. Source watermark check - are feeds stale?
    try {
        const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        const watermarks = await sql`
      SELECT source, last_fetched_at, consecutive_errors, backoff_until
      FROM source_watermarks
    `;
        const now = new Date();
        const staleThresholdMs = 2 * 60 * 60 * 1000 // 2 hours
        ;
        for (const wm of watermarks){
            const lastFetch = wm.last_fetched_at ? new Date(wm.last_fetched_at) : null;
            const isStale = !lastFetch || now.getTime() - lastFetch.getTime() > staleThresholdMs;
            const isBackedOff = wm.backoff_until && new Date(wm.backoff_until) > now;
            const hasErrors = (wm.consecutive_errors || 0) >= 3;
            let status = "UP";
            if (hasErrors) {
                status = "DEGRADED";
                overallHealthy = false;
            }
            if (isBackedOff) {
                status = "BACKING_OFF";
            }
            if (isStale && !lastFetch) {
                status = "NEVER_RUN";
            }
            checks[`source_${wm.source.toLowerCase()}`] = {
                status,
                detail: isStale ? `Last fetch: ${lastFetch?.toISOString() || "never"}, errors: ${wm.consecutive_errors || 0}` : `Healthy, last fetch: ${lastFetch?.toISOString()}`
            };
        }
    } catch  {
        checks.watermarks = {
            status: "UNKNOWN",
            detail: "Could not check source watermarks"
        };
    }
    // 3. Alert data freshness
    try {
        const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        const alertStats = await sql`
      SELECT
        COUNT(*) as total_active,
        MAX(updated_at) as last_updated,
        COUNT(CASE WHEN severity = 'RED' THEN 1 END) as red_count
      FROM hazard_alerts WHERE is_active = true
    `;
        const stats = alertStats[0];
        checks.alert_data = {
            status: parseInt(stats?.total_active || "0") > 0 ? "UP" : "EMPTY",
            detail: `${stats?.total_active || 0} active alerts, ${stats?.red_count || 0} RED, last update: ${stats?.last_updated || "never"}`
        };
    } catch  {
        checks.alert_data = {
            status: "UNKNOWN",
            detail: "Could not query alerts"
        };
    }
    const statusCode = overallHealthy ? 200 : 503;
    return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: overallHealthy ? "HEALTHY" : "DEGRADED",
        version: "1.0.0",
        service: "afro-storm",
        timestamp: new Date().toISOString(),
        uptime_note: "Serverless - no persistent uptime counter",
        checks
    }, {
        status: statusCode
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__84ed6481._.js.map