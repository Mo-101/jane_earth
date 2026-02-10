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
    ()=>getDb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
;
function getDb() {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is not set");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(process.env.DATABASE_URL);
}
}),
"[project]/jane_earth/app/api/pipeline/ingest/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/db.ts [app-route] (ecmascript)");
;
;
const SOURCES = [
    "GDACS",
    "NASA_EONET",
    "RELIEFWEB"
];
const SOURCE_ENDPOINTS = {
    GDACS: "/api/alerts/gdacs",
    NASA_EONET: "/api/alerts/nasa",
    RELIEFWEB: "/api/alerts/reliefweb"
};
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1500;
const STALE_THRESHOLD_HOURS = 72 // Mark alerts inactive if no update in 72h
;
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function fetchWithRetry(url, retries = MAX_RETRIES) {
    let lastError = "";
    for(let attempt = 1; attempt <= retries + 1; attempt++){
        try {
            const res = await fetch(url, {
                cache: "no-store"
            });
            if (res.ok) {
                return {
                    ok: true,
                    data: await res.json(),
                    attempts: attempt
                };
            }
            lastError = `HTTP ${res.status}`;
        } catch (err) {
            lastError = err instanceof Error ? err.message : "Network error";
        }
        if (attempt <= retries) {
            await sleep(RETRY_DELAY_MS * attempt); // Linear backoff
        }
    }
    return {
        ok: false,
        error: lastError,
        attempts: MAX_RETRIES + 1
    };
}
async function POST(request) {
    const origin = new URL(request.url).origin;
    const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    const results = [];
    // 1. Check watermarks - skip sources in backoff
    let watermarks = [];
    try {
        watermarks = await sql`SELECT source, backoff_until, consecutive_errors FROM source_watermarks`;
    } catch  {
    // If watermarks table fails, proceed anyway - don't block ingestion
    }
    const now = new Date();
    const watermarkMap = new Map(watermarks.map((w)=>[
            w.source,
            w
        ]));
    // 2. Fetch each source with retry + backoff awareness
    for (const source of SOURCES){
        const wm = watermarkMap.get(source);
        const backedOff = wm?.backoff_until && new Date(wm.backoff_until) > now;
        if (backedOff) {
            results.push({
                source,
                status: "SKIPPED_BACKOFF",
                error: `In backoff until ${wm.backoff_until}`,
                attempts: 0
            });
            continue;
        }
        const url = `${origin}${SOURCE_ENDPOINTS[source]}`;
        const result = await fetchWithRetry(url);
        if (result.ok) {
            results.push({
                source,
                status: "SUCCESS",
                data: result.data,
                attempts: result.attempts
            });
            // Reset watermark on success
            try {
                await sql`
          UPDATE source_watermarks SET
            last_fetched_at = NOW(),
            total_lifetime_fetches = total_lifetime_fetches + 1,
            consecutive_errors = 0,
            backoff_until = NULL,
            updated_at = NOW()
          WHERE source = ${source}
        `;
            } catch  {
            // Non-critical
            }
        } else {
            results.push({
                source,
                status: "ERROR",
                error: result.error,
                attempts: result.attempts
            });
            // Increment error counter and apply exponential backoff
            try {
                const errCount = (wm?.consecutive_errors || 0) + 1;
                const backoffMinutes = Math.min(Math.pow(2, errCount) * 5, 120) // 10min, 20min, 40min... max 2h
                ;
                await sql`
          UPDATE source_watermarks SET
            consecutive_errors = ${errCount},
            backoff_until = NOW() + INTERVAL '1 minute' * ${backoffMinutes},
            updated_at = NOW()
          WHERE source = ${source}
        `;
            } catch  {
            // Non-critical
            }
        }
    }
    // 3. Expire stale alerts (no update in 72 hours)
    let expiredCount = 0;
    try {
        const expired = await sql`
      UPDATE hazard_alerts SET
        is_active = false,
        updated_at = NOW()
      WHERE is_active = true
        AND updated_at < NOW() - INTERVAL '1 hour' * ${STALE_THRESHOLD_HOURS}
        AND source != 'COMMUNITY'
      RETURNING id
    `;
        expiredCount = expired.length;
    } catch  {
    // Non-critical
    }
    const successCount = results.filter((r)=>r.status === "SUCCESS").length;
    const errorCount = results.filter((r)=>r.status === "ERROR").length;
    return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        api_version: "1.0.0",
        ingest_completed: now.toISOString(),
        summary: {
            sources_attempted: SOURCES.length,
            successful: successCount,
            failed: errorCount,
            skipped_backoff: results.filter((r)=>r.status === "SKIPPED_BACKOFF").length,
            stale_alerts_expired: expiredCount
        },
        results
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fa950c80._.js.map