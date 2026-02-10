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
"[project]/jane_earth/app/api/v1/weather/grid/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/server.js [app-route] (ecmascript)");
;
// Global coverage at 5-degree resolution
// 37 latitudes (-90 to 90) x 72 longitudes (-180 to 175) = 2,664 points
// Open-Meteo batch API encodes coords in the URL query string.
// At 2,664 points the URL would exceed ~100KB - far past the 8KB limit most servers enforce.
// Solution: chunk into batches of 50 locations (well within URL limits) and fetch in parallel.
const LAT_MIN = -90;
const LAT_MAX = 90;
const LON_MIN = -180;
const LON_MAX = 175;
const STEP = 5;
const BATCH_SIZE = 50 // Max locations per Open-Meteo call (keeps URL under ~4KB)
;
function generateGridPoints() {
    const points = [];
    for(let lat = LAT_MIN; lat <= LAT_MAX; lat += STEP){
        for(let lon = LON_MIN; lon <= LON_MAX; lon += STEP){
            points.push({
                lat,
                lon
            });
        }
    }
    return points;
}
function chunkArray(arr, size) {
    const chunks = [];
    for(let i = 0; i < arr.length; i += size){
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
async function GET() {
    try {
        const allPoints = generateGridPoints();
        const batches = chunkArray(allPoints, BATCH_SIZE);
        // Fetch all batches in parallel (max ~54 requests for 2,664 points / 50 per batch)
        const batchPromises = batches.map(async (batch)=>{
            const latParam = batch.map((p)=>p.lat).join(",");
            const lonParam = batch.map((p)=>p.lon).join(",");
            const controller = new AbortController();
            const timeout = setTimeout(()=>controller.abort(), 15000);
            try {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latParam}&longitude=${lonParam}` + `&current=temperature_2m,wind_speed_10m,wind_direction_10m,relative_humidity_2m,precipitation` + `&timezone=auto`, {
                    signal: controller.signal,
                    next: {
                        revalidate: 900
                    }
                });
                clearTimeout(timeout);
                if (!response.ok) return [];
                const rawData = await response.json();
                const results = Array.isArray(rawData) ? rawData : [
                    rawData
                ];
                return results.map((r, i)=>({
                        result: r,
                        originalPoint: batch[i]
                    }));
            } catch  {
                clearTimeout(timeout);
                return [] // Degrade: skip failed batch
                ;
            }
        });
        const batchResults = await Promise.all(batchPromises);
        // Flatten and build structured response
        const points = [];
        for (const batch of batchResults){
            for (const { result: r, originalPoint } of batch){
                const temp = r?.current?.temperature_2m ?? null;
                const ws = r?.current?.wind_speed_10m ?? 0;
                const wd = r?.current?.wind_direction_10m ?? 0;
                const hum = r?.current?.relative_humidity_2m ?? 0;
                const prec = r?.current?.precipitation ?? 0;
                if (temp === null) continue;
                // Meteorological convention to U/V components
                const wdRad = wd * Math.PI / 180;
                const speedMs = ws / 3.6;
                const wind_u = -speedMs * Math.sin(wdRad);
                const wind_v = -speedMs * Math.cos(wdRad);
                points.push({
                    lat: r.latitude ?? originalPoint.lat,
                    lon: r.longitude ?? originalPoint.lon,
                    temperature: temp,
                    wind_speed: ws,
                    wind_direction: wd,
                    humidity: hum,
                    precipitation: prec,
                    wind_u,
                    wind_v
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            grid: {
                lat_min: LAT_MIN,
                lat_max: LAT_MAX,
                lon_min: LON_MIN,
                lon_max: LON_MAX,
                step: STEP,
                total_points: allPoints.length,
                fetched_points: points.length,
                batches: batches.length
            },
            points,
            updated_at: new Date().toISOString()
        }, {
            headers: {
                "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600"
            }
        });
    } catch (error) {
        const msg = error instanceof Error ? error.message : "Unknown error";
        return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__795ddf87._.js.map