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
"[project]/jane_earth/app/api/alerts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/db.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    const { searchParams } = new URL(request.url);
    const severity = searchParams.get("severity");
    const hazardType = searchParams.get("hazard_type");
    const country = searchParams.get("country");
    const activeOnly = searchParams.get("active") !== "false";
    const limit = Math.min(parseInt(searchParams.get("limit") || "100"), 500);
    try {
        let alerts;
        if (severity && hazardType) {
            alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
          AND severity = ${severity}
          AND hazard_type = ${hazardType}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `;
        } else if (severity) {
            alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
          AND severity = ${severity}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `;
        } else if (hazardType) {
            alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
          AND hazard_type = ${hazardType}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `;
        } else if (country) {
            alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
          AND country = ${country}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `;
        } else {
            alerts = await sql`
        SELECT * FROM hazard_alerts
        WHERE is_active = ${activeOnly}
        ORDER BY
          CASE severity
            WHEN 'RED' THEN 1
            WHEN 'ORANGE' THEN 2
            WHEN 'YELLOW' THEN 3
            WHEN 'GREEN' THEN 4
          END,
          created_at DESC
        LIMIT ${limit}
      `;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            count: alerts.length,
            alerts
        });
    } catch (error) {
        const errMsg = error instanceof Error ? error.message : "Unknown error";
        return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: errMsg
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b714699f._.js.map