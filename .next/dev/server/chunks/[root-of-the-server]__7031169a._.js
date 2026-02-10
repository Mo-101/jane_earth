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
"[project]/jane_earth/app/api/v1/tiles/rainviewer/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/server.js [app-route] (ecmascript)");
;
const revalidate = 120 // Cache for 2 minutes
;
async function GET() {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(()=>controller.abort(), 8000);
        const res = await fetch("https://api.rainviewer.com/public/weather-maps.json", {
            signal: controller.signal,
            next: {
                revalidate: 120
            }
        });
        clearTimeout(timeout);
        if (!res.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "RainViewer API unavailable",
                status: res.status
            }, {
                status: 502
            });
        }
        const data = await res.json();
        // Ensure host always has protocol (RainViewer usually returns https:// but guard against it)
        const host = data.host.startsWith("http") ? data.host : `https://${data.host}`;
        // Combine past + nowcast for full timeline (past ~2hrs + forecast ~30min)
        const radarFrames = [
            ...data.radar.past.map((f)=>({
                    time: f.time,
                    path: f.path,
                    type: "past"
                })),
            ...data.radar.nowcast.map((f)=>({
                    time: f.time,
                    path: f.path,
                    type: "forecast"
                }))
        ];
        const satelliteFrames = data.satellite.infrared.map((f)=>({
                time: f.time,
                path: f.path,
                type: "past"
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            host,
            generated: data.generated,
            radar: {
                frames: radarFrames,
                count: radarFrames.length,
                oldest: radarFrames[0]?.time || null,
                newest: radarFrames[radarFrames.length - 1]?.time || null
            },
            satellite: {
                frames: satelliteFrames,
                count: satelliteFrames.length
            },
            // Tile URL template for the client:
            // `${host}${frame.path}/256/{z}/{x}/{y}/{color}/{smooth}_{snow}.png`
            tile_template: "{host}{path}/256/{z}/{x}/{y}/{color}/{smooth}_{snow}.png"
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        return __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch RainViewer data",
            detail: message
        }, {
            status: 502
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7031169a._.js.map