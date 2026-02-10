(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/jane_earth/components/dashboard/map-controls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapControls",
    ()=>MapControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/cloud-rain.js [app-client] (ecmascript) <export default as CloudRain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$satellite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Satellite$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/satellite.js [app-client] (ecmascript) <export default as Satellite>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MapControls({ activeLayer, onLayerChange, alertsVisible, onToggleAlerts, isPlaying, onPlayPause, onStepForward, onStepBack, currentFrameTime, totalFrames, currentFrameIndex, onFrameChange }) {
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const formatTime = (unix)=>{
        if (!unix) return "--:--";
        const d = new Date(unix * 1000);
        return d.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const formatDate = (unix)=>{
        if (!unix) return "";
        const d = new Date(unix * 1000);
        return d.toLocaleDateString([], {
            month: "short",
            day: "numeric"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-4 left-4 z-[500] flex flex-col gap-2 max-w-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-border bg-card/90 backdrop-blur-md shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setExpanded(!expanded),
                        className: "flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-foreground",
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                        className: "h-3.5 w-3.5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    "LAYERS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-3 w-3 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "h-3 w-3 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pb-2 flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerButton, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__["CloudRain"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 91,
                                    columnNumber: 21
                                }, void 0),
                                label: "Precipitation Radar",
                                active: activeLayer === "precipitation",
                                onClick: ()=>onLayerChange(activeLayer === "precipitation" ? "none" : "precipitation")
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerButton, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$satellite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Satellite$3e$__["Satellite"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 97,
                                    columnNumber: 21
                                }, void 0),
                                label: "Satellite Infrared",
                                active: activeLayer === "satellite",
                                onClick: ()=>onLayerChange(activeLayer === "satellite" ? "none" : "satellite")
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerButton, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 103,
                                    columnNumber: 21
                                }, void 0),
                                label: "Wind Particles",
                                active: activeLayer === "wind",
                                onClick: ()=>onLayerChange(activeLayer === "wind" ? "none" : "wind")
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerButton, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 109,
                                    columnNumber: 21
                                }, void 0),
                                label: "Animated Hazards",
                                active: activeLayer === "hazards",
                                onClick: ()=>onLayerChange(activeLayer === "hazards" ? "none" : "hazards")
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerButton, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 115,
                                    columnNumber: 21
                                }, void 0),
                                label: "Hazard Alerts",
                                active: alertsVisible,
                                onClick: onToggleAlerts
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            activeLayer === "wind" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-border bg-card/90 backdrop-blur-md shadow-lg px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
                                children: "Global Wind Field (ECMWF via Open-Meteo)"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-primary",
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-muted-foreground mt-1",
                        children: "2,000+ particles flowing along real 10m wind vectors. Color: cyan (calm) to red (extreme)."
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this),
            activeLayer === "hazards" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-border bg-card/90 backdrop-blur-md shadow-lg px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
                                children: "Animated Hazard Visualization"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-primary",
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-muted-foreground mt-1",
                        children: "Cyclone vortices, flood ripples, fire glow, seismic rings. Driven by real alert data."
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this),
            (activeLayer === "precipitation" || activeLayer === "satellite") && totalFrames > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-border bg-card/90 backdrop-blur-md shadow-lg px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
                                children: activeLayer === "precipitation" ? "Radar Timeline" : "Satellite Timeline"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono font-bold text-foreground",
                                        children: formatTime(currentFrameTime)
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-muted-foreground",
                                        children: formatDate(currentFrameTime)
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "range",
                            min: 0,
                            max: Math.max(0, totalFrames - 1),
                            value: currentFrameIndex,
                            onChange: (e)=>onFrameChange(Number(e.target.value)),
                            className: "w-full h-1.5 rounded-full appearance-none cursor-pointer   bg-secondary   [&::-webkit-slider-thumb]:appearance-none   [&::-webkit-slider-thumb]:w-3   [&::-webkit-slider-thumb]:h-3   [&::-webkit-slider-thumb]:rounded-full   [&::-webkit-slider-thumb]:bg-primary   [&::-webkit-slider-thumb]:shadow-md   [&::-moz-range-thumb]:w-3   [&::-moz-range-thumb]:h-3   [&::-moz-range-thumb]:rounded-full   [&::-moz-range-thumb]:bg-primary   [&::-moz-range-thumb]:border-0"
                        }, void 0, false, {
                            fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onStepBack,
                                className: "h-7 w-7 text-muted-foreground hover:text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                onClick: onPlayPause,
                                className: "h-8 w-8 border-primary/40 text-primary hover:text-primary hover:bg-primary/10 bg-transparent",
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-4 w-4 ml-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onStepForward,
                                className: "h-7 w-7 text-muted-foreground hover:text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-muted-foreground font-mono ml-2",
                                children: [
                                    currentFrameIndex + 1,
                                    "/",
                                    totalFrames
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(MapControls, "NZEs4N34I2vU569ODzuIjdsqMlo=");
_c = MapControls;
function LayerButton({ icon, label, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: `flex items-center gap-2 w-full px-2.5 py-1.5 rounded-md text-xs transition-colors ${active ? "bg-primary/15 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"}`,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-auto h-1.5 w-1.5 rounded-full bg-primary animate-severity-pulse"
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
                lineNumber: 258,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/dashboard/map-controls.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
_c1 = LayerButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapControls");
__turbopack_context__.k.register(_c1, "LayerButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/jane_earth/components/dashboard/wind-particles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WindParticles",
    ()=>WindParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
// --- Config ---
const MAX_TRAIL_LEN = 12;
const FADE_TAIL_ALPHA = 0.03;
const SPEED_SCALE = 0.0008 // Scale wind m/s to pixel movement per frame at zoom ~4
;
// Wind speed to color (HSL, matching AFRO STORM palette)
function windSpeedToHSL(speed) {
    // speed in km/h
    if (speed < 10) return "hsla(199, 89%, 60%, 0.5)" // calm - soft cyan
    ;
    if (speed < 25) return "hsla(170, 70%, 55%, 0.65)" // light - teal
    ;
    if (speed < 40) return "hsla(142, 71%, 50%, 0.7)" // moderate - green
    ;
    if (speed < 60) return "hsla(48, 96%, 53%, 0.8)" // strong - yellow
    ;
    if (speed < 80) return "hsla(25, 95%, 53%, 0.85)" // very strong - orange
    ;
    return "hsla(0, 72%, 55%, 0.9)" // extreme - red
    ;
}
function windSpeedToWidth(speed) {
    if (speed < 10) return 0.5;
    if (speed < 30) return 1;
    if (speed < 60) return 1.5;
    return 2;
}
function WindParticles({ map, points, visible, particleCount = 2000 }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Build indexed grid from points for fast interpolation
    const buildGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WindParticles.useCallback[buildGrid]": (pts)=>{
            if (pts.length === 0) {
                gridCacheRef.current = null;
                return;
            }
            const uniqueLats = [
                ...new Set(pts.map({
                    "WindParticles.useCallback[buildGrid].uniqueLats": (p)=>p.lat
                }["WindParticles.useCallback[buildGrid].uniqueLats"]))
            ].sort({
                "WindParticles.useCallback[buildGrid].uniqueLats": (a, b)=>a - b
            }["WindParticles.useCallback[buildGrid].uniqueLats"]);
            const uniqueLons = [
                ...new Set(pts.map({
                    "WindParticles.useCallback[buildGrid].uniqueLons": (p)=>p.lon
                }["WindParticles.useCallback[buildGrid].uniqueLons"]))
            ].sort({
                "WindParticles.useCallback[buildGrid].uniqueLons": (a, b)=>a - b
            }["WindParticles.useCallback[buildGrid].uniqueLons"]);
            const rows = uniqueLats.length;
            const cols = uniqueLons.length;
            if (rows < 2 || cols < 2) {
                gridCacheRef.current = null;
                return;
            }
            const uGrid = new Float32Array(rows * cols);
            const vGrid = new Float32Array(rows * cols);
            const sGrid = new Float32Array(rows * cols);
            // Map lat/lon to grid indices
            const latIdx = new Map();
            const lonIdx = new Map();
            uniqueLats.forEach({
                "WindParticles.useCallback[buildGrid]": (lat, i)=>latIdx.set(lat, i)
            }["WindParticles.useCallback[buildGrid]"]);
            uniqueLons.forEach({
                "WindParticles.useCallback[buildGrid]": (lon, i)=>lonIdx.set(lon, i)
            }["WindParticles.useCallback[buildGrid]"]);
            for (const p of pts){
                const ri = latIdx.get(p.lat);
                const ci = lonIdx.get(p.lon);
                if (ri !== undefined && ci !== undefined) {
                    const idx = ri * cols + ci;
                    uGrid[idx] = p.wind_u;
                    vGrid[idx] = p.wind_v;
                    sGrid[idx] = p.wind_speed;
                }
            }
            gridCacheRef.current = {
                lats: uniqueLats,
                lons: uniqueLons,
                uGrid,
                vGrid,
                sGrid,
                rows,
                cols
            };
        }
    }["WindParticles.useCallback[buildGrid]"], []);
    // Bilinear interpolation of wind at a given lat/lon
    const interpolateWind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WindParticles.useCallback[interpolateWind]": (lat, lon)=>{
            const g = gridCacheRef.current;
            if (!g) return null;
            const { lats, lons, uGrid, vGrid, sGrid, rows, cols } = g;
            // Find bounding grid cell
            if (lat < lats[0] || lat > lats[rows - 1] || lon < lons[0] || lon > lons[cols - 1]) return null;
            // Binary search for lat/lon indices
            let li = 0;
            for(let i = 0; i < rows - 1; i++){
                if (lat >= lats[i] && lat <= lats[i + 1]) {
                    li = i;
                    break;
                }
            }
            let lj = 0;
            for(let j = 0; j < cols - 1; j++){
                if (lon >= lons[j] && lon <= lons[j + 1]) {
                    lj = j;
                    break;
                }
            }
            // Bilinear weights
            const latRange = lats[li + 1] - lats[li];
            const lonRange = lons[lj + 1] - lons[lj];
            if (latRange === 0 || lonRange === 0) return null;
            const ty = (lat - lats[li]) / latRange;
            const tx = (lon - lons[lj]) / lonRange;
            const i00 = li * cols + lj;
            const i01 = li * cols + (lj + 1);
            const i10 = (li + 1) * cols + lj;
            const i11 = (li + 1) * cols + (lj + 1);
            const u = (1 - ty) * ((1 - tx) * uGrid[i00] + tx * uGrid[i01]) + ty * ((1 - tx) * uGrid[i10] + tx * uGrid[i11]);
            const v = (1 - ty) * ((1 - tx) * vGrid[i00] + tx * vGrid[i01]) + ty * ((1 - tx) * vGrid[i10] + tx * vGrid[i11]);
            const speed = (1 - ty) * ((1 - tx) * sGrid[i00] + tx * sGrid[i01]) + ty * ((1 - tx) * sGrid[i10] + tx * sGrid[i11]);
            return {
                u,
                v,
                speed
            };
        }
    }["WindParticles.useCallback[interpolateWind]"], []);
    // Initialize or reset particles
    const resetParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WindParticles.useCallback[resetParticles]": ()=>{
            if (!map) return;
            const bounds = map.getBounds();
            const particles = [];
            for(let i = 0; i < particleCount; i++){
                const lat = bounds.getSouth() + Math.random() * (bounds.getNorth() - bounds.getSouth());
                const lon = bounds.getWest() + Math.random() * (bounds.getEast() - bounds.getWest());
                const pt = map.latLngToContainerPoint({
                    lat,
                    lng: lon
                });
                particles.push({
                    x: pt.x,
                    y: pt.y,
                    age: Math.floor(Math.random() * 120),
                    maxAge: 80 + Math.floor(Math.random() * 80),
                    trail: []
                });
            }
            particlesRef.current = particles;
        }
    }["WindParticles.useCallback[resetParticles]"], [
        map,
        particleCount
    ]);
    // Rebuild grid when points change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindParticles.useEffect": ()=>{
            buildGrid(points);
        }
    }["WindParticles.useEffect"], [
        points,
        buildGrid
    ]);
    // Main animation loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindParticles.useEffect": ()=>{
            if (!map || !visible || points.length === 0) {
                // Cleanup
                if (animRef.current) cancelAnimationFrame(animRef.current);
                animRef.current = null;
                if (canvasRef.current?.parentNode) {
                    canvasRef.current.parentNode.removeChild(canvasRef.current);
                    canvasRef.current = null;
                }
                return;
            }
            // Create canvas
            if (!canvasRef.current) {
                const canvas = document.createElement("canvas");
                canvas.style.position = "absolute";
                canvas.style.top = "0";
                canvas.style.left = "0";
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                canvas.style.pointerEvents = "none";
                canvas.style.zIndex = "480";
                canvasRef.current = canvas;
            }
            const container = map.getContainer();
            const pane = container.querySelector(".leaflet-overlay-pane");
            if (pane && canvasRef.current && !pane.contains(canvasRef.current)) {
                pane.appendChild(canvasRef.current);
            }
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Size canvas
            const rect = container.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            resetParticles();
            const zoomFactor = Math.pow(2, map.getZoom());
            function animate() {
                if (!ctx || !map || !canvasRef.current) return;
                const w = rect.width;
                const h = rect.height;
                // Semi-transparent black overlay for trail fade effect
                ctx.fillStyle = `rgba(11, 14, 18, ${FADE_TAIL_ALPHA})`;
                ctx.fillRect(0, 0, w, h);
                const particles = particlesRef.current;
                const bounds = map.getBounds();
                for(let i = 0; i < particles.length; i++){
                    const p = particles[i];
                    // Convert current screen position back to lat/lon
                    const latlng = map.containerPointToLatLng({
                        x: p.x,
                        y: p.y
                    });
                    const wind = interpolateWind(latlng.lat, latlng.lng);
                    if (wind && Math.abs(wind.u) + Math.abs(wind.v) > 0.01) {
                        // Save old position to trail
                        p.trail.push({
                            x: p.x,
                            y: p.y
                        });
                        if (p.trail.length > MAX_TRAIL_LEN) p.trail.shift();
                        // Move particle: u is eastward (positive = right on screen), v is northward (positive = up but screen y is down)
                        const scale = SPEED_SCALE * zoomFactor;
                        p.x += wind.u * scale;
                        p.y -= wind.v * scale; // negative because screen y is inverted
                        // Draw trail as gradient lines
                        const color = windSpeedToHSL(wind.speed);
                        const lineWidth = windSpeedToWidth(wind.speed);
                        if (p.trail.length > 1) {
                            ctx.beginPath();
                            ctx.moveTo(p.trail[0].x, p.trail[0].y);
                            for(let t = 1; t < p.trail.length; t++){
                                ctx.lineTo(p.trail[t].x, p.trail[t].y);
                            }
                            ctx.lineTo(p.x, p.y);
                            ctx.strokeStyle = color;
                            ctx.lineWidth = lineWidth;
                            ctx.stroke();
                        }
                        // Draw head dot
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, lineWidth + 0.5, 0, Math.PI * 2);
                        ctx.fillStyle = color;
                        ctx.fill();
                    }
                    p.age++;
                    // Respawn particle if too old or out of bounds
                    if (p.age > p.maxAge || p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
                        const lat = bounds.getSouth() + Math.random() * (bounds.getNorth() - bounds.getSouth());
                        const lon = bounds.getWest() + Math.random() * (bounds.getEast() - bounds.getWest());
                        const pt = map.latLngToContainerPoint({
                            lat,
                            lng: lon
                        });
                        p.x = pt.x;
                        p.y = pt.y;
                        p.age = 0;
                        p.maxAge = 80 + Math.floor(Math.random() * 80);
                        p.trail = [];
                    }
                }
                animRef.current = requestAnimationFrame(animate);
            }
            animRef.current = requestAnimationFrame(animate);
            // Reset on map movement
            const onMove = {
                "WindParticles.useEffect.onMove": ()=>{
                    // Re-size canvas
                    const r = container.getBoundingClientRect();
                    canvas.width = r.width * dpr;
                    canvas.height = r.height * dpr;
                    ctx.scale(dpr, dpr);
                    resetParticles();
                }
            }["WindParticles.useEffect.onMove"];
            map.on("moveend", onMove);
            map.on("zoomend", onMove);
            return ({
                "WindParticles.useEffect": ()=>{
                    if (animRef.current) cancelAnimationFrame(animRef.current);
                    animRef.current = null;
                    map.off("moveend", onMove);
                    map.off("zoomend", onMove);
                    if (canvasRef.current?.parentNode) {
                        canvasRef.current.parentNode.removeChild(canvasRef.current);
                        canvasRef.current = null;
                    }
                }
            })["WindParticles.useEffect"];
        }
    }["WindParticles.useEffect"], [
        map,
        visible,
        points,
        resetParticles,
        interpolateWind
    ]);
    return null;
}
_s(WindParticles, "gAdJo3fnrgqpk1IcvyEixR4TDTI=");
_c = WindParticles;
var _c;
__turbopack_context__.k.register(_c, "WindParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/jane_earth/components/dashboard/animated-hazards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedHazards",
    ()=>AnimatedHazards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
// --- Cyclone vortex config ---
const CYCLONE_RING_COUNT = 3;
const CYCLONE_MAX_RADIUS = 40;
const CYCLONE_ARM_COUNT = 6;
// --- Flood wave config ---
const FLOOD_WAVE_COUNT = 3;
const FLOOD_MAX_RADIUS = 30;
// Color per hazard type
const HAZARD_COLORS = {
    CYCLONE: {
        stroke: "hsla(199, 89%, 60%, 0.9)",
        fill: "hsla(199, 89%, 48%, 0.15)",
        glow: "hsla(199, 89%, 48%, 0.4)"
    },
    STORM: {
        stroke: "hsla(199, 89%, 60%, 0.9)",
        fill: "hsla(199, 89%, 48%, 0.15)",
        glow: "hsla(199, 89%, 48%, 0.4)"
    },
    FLOOD: {
        stroke: "hsla(210, 80%, 55%, 0.9)",
        fill: "hsla(210, 80%, 55%, 0.1)",
        glow: "hsla(210, 80%, 55%, 0.35)"
    },
    WILDFIRE: {
        stroke: "hsla(25, 95%, 55%, 0.9)",
        fill: "hsla(25, 95%, 53%, 0.12)",
        glow: "hsla(25, 95%, 53%, 0.35)"
    },
    VOLCANO: {
        stroke: "hsla(0, 72%, 55%, 0.9)",
        fill: "hsla(0, 72%, 51%, 0.12)",
        glow: "hsla(0, 72%, 51%, 0.35)"
    },
    EARTHQUAKE: {
        stroke: "hsla(48, 96%, 55%, 0.9)",
        fill: "hsla(48, 96%, 53%, 0.1)",
        glow: "hsla(48, 96%, 53%, 0.3)"
    },
    DROUGHT: {
        stroke: "hsla(48, 96%, 55%, 0.7)",
        fill: "hsla(48, 96%, 53%, 0.08)",
        glow: "hsla(48, 96%, 53%, 0.2)"
    },
    LANDSLIDE: {
        stroke: "hsla(25, 60%, 50%, 0.8)",
        fill: "hsla(25, 60%, 50%, 0.1)",
        glow: "hsla(25, 60%, 50%, 0.25)"
    }
};
function getColors(type) {
    return HAZARD_COLORS[type] || HAZARD_COLORS.STORM;
}
// Severity to pulse speed and size multiplier
function severityScale(severity) {
    switch(severity){
        case "RED":
            return {
                speed: 1.5,
                size: 1.3
            };
        case "ORANGE":
            return {
                speed: 1.2,
                size: 1.1
            };
        case "YELLOW":
            return {
                speed: 1.0,
                size: 0.9
            };
        default:
            return {
                speed: 0.7,
                size: 0.7
            };
    }
}
function AnimatedHazards({ map, alerts, visible }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(performance.now());
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnimatedHazards.useCallback[draw]": (timestamp)=>{
            if (!map || !canvasRef.current || !visible) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const container = map.getContainer();
            const rect = container.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);
            }
            ctx.clearRect(0, 0, rect.width, rect.height);
            const elapsed = (timestamp - startTimeRef.current) / 1000 // seconds
            ;
            for (const alert of alerts){
                if (alert.latitude == null || alert.longitude == null) continue;
                const px = map.latLngToContainerPoint({
                    lat: alert.latitude,
                    lng: alert.longitude
                });
                if (px.x < -60 || px.x > rect.width + 60 || px.y < -60 || px.y > rect.height + 60) continue;
                const colors = getColors(alert.hazard_type);
                const sev = severityScale(alert.severity);
                if (alert.hazard_type === "CYCLONE" || alert.hazard_type === "STORM") {
                    drawCycloneVortex(ctx, px.x, px.y, elapsed, colors, sev);
                } else if (alert.hazard_type === "FLOOD") {
                    drawFloodWaves(ctx, px.x, px.y, elapsed, colors, sev);
                } else if (alert.hazard_type === "WILDFIRE" || alert.hazard_type === "VOLCANO") {
                    drawFirePulse(ctx, px.x, px.y, elapsed, colors, sev);
                } else if (alert.hazard_type === "EARTHQUAKE") {
                    drawSeismicRings(ctx, px.x, px.y, elapsed, colors, sev);
                } else {
                    // Generic pulsing circle for drought, landslide, etc.
                    drawGenericPulse(ctx, px.x, px.y, elapsed, colors, sev);
                }
            }
            animRef.current = requestAnimationFrame(draw);
        }
    }["AnimatedHazards.useCallback[draw]"], [
        map,
        alerts,
        visible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedHazards.useEffect": ()=>{
            if (!map || !visible || alerts.length === 0) {
                if (animRef.current) cancelAnimationFrame(animRef.current);
                animRef.current = null;
                if (canvasRef.current?.parentNode) {
                    canvasRef.current.parentNode.removeChild(canvasRef.current);
                    canvasRef.current = null;
                }
                return;
            }
            if (!canvasRef.current) {
                const canvas = document.createElement("canvas");
                canvas.style.position = "absolute";
                canvas.style.top = "0";
                canvas.style.left = "0";
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                canvas.style.pointerEvents = "none";
                canvas.style.zIndex = "490";
                canvasRef.current = canvas;
            }
            const container = map.getContainer();
            const pane = container.querySelector(".leaflet-overlay-pane");
            if (pane && canvasRef.current && !pane.contains(canvasRef.current)) {
                pane.appendChild(canvasRef.current);
            }
            startTimeRef.current = performance.now();
            animRef.current = requestAnimationFrame(draw);
            // Re-draw on map movement
            const onMove = {
                "AnimatedHazards.useEffect.onMove": ()=>{}
            }["AnimatedHazards.useEffect.onMove"];
            map.on("moveend", onMove);
            return ({
                "AnimatedHazards.useEffect": ()=>{
                    if (animRef.current) cancelAnimationFrame(animRef.current);
                    animRef.current = null;
                    map.off("moveend", onMove);
                    if (canvasRef.current?.parentNode) {
                        canvasRef.current.parentNode.removeChild(canvasRef.current);
                        canvasRef.current = null;
                    }
                }
            })["AnimatedHazards.useEffect"];
        }
    }["AnimatedHazards.useEffect"], [
        map,
        visible,
        alerts,
        draw
    ]);
    return null;
}
_s(AnimatedHazards, "ZdlEocKXRAb8Ui6sBIEsfGPeUNQ=");
_c = AnimatedHazards;
// --- CYCLONE: Rotating spiral arms ---
function drawCycloneVortex(ctx, x, y, t, colors, sev) {
    const rotation = t * sev.speed * 1.2;
    const maxR = CYCLONE_MAX_RADIUS * sev.size;
    // Glow circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, maxR * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = colors.glow;
    ctx.fill();
    ctx.restore();
    // Rotating concentric rings
    for(let r = 0; r < CYCLONE_RING_COUNT; r++){
        const progress = (t * sev.speed * 0.4 + r * 0.33) % 1;
        const radius = progress * maxR;
        const alpha = 1 - progress;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, `${alpha * 0.7})`);
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
    }
    // Spiral arms
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    for(let arm = 0; arm < CYCLONE_ARM_COUNT; arm++){
        const armAngle = arm / CYCLONE_ARM_COUNT * Math.PI * 2;
        ctx.beginPath();
        for(let step = 0; step < 30; step++){
            const t2 = step / 30;
            const r = t2 * maxR * 0.8;
            const angle = armAngle + t2 * Math.PI * 1.5;
            const px = Math.cos(angle) * r;
            const py = Math.sin(angle) * r;
            if (step === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, "0.4)");
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    // Center eye
    ctx.beginPath();
    ctx.arc(0, 0, 3 * sev.size, 0, Math.PI * 2);
    ctx.fillStyle = colors.stroke;
    ctx.fill();
    ctx.restore();
}
// --- FLOOD: Expanding wave ripples ---
function drawFloodWaves(ctx, x, y, t, colors, sev) {
    const maxR = FLOOD_MAX_RADIUS * sev.size;
    for(let w = 0; w < FLOOD_WAVE_COUNT; w++){
        const progress = (t * sev.speed * 0.5 + w / FLOOD_WAVE_COUNT) % 1;
        const radius = progress * maxR;
        const alpha = (1 - progress) * 0.7;
        // Wavy circle (simulate water ripple)
        ctx.save();
        ctx.beginPath();
        const segments = 40;
        for(let s = 0; s <= segments; s++){
            const angle = s / segments * Math.PI * 2;
            const wobble = Math.sin(angle * 6 + t * 3) * 2;
            const r = radius + wobble;
            const px = x + Math.cos(angle) * r;
            const py = y + Math.sin(angle) * r;
            if (s === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = colors.fill.replace(/[\d.]+\)$/, `${alpha * 0.3})`);
        ctx.fill();
        ctx.restore();
    }
    // Center droplet
    const bounce = Math.abs(Math.sin(t * sev.speed * 2)) * 3;
    ctx.beginPath();
    ctx.arc(x, y - bounce, 4 * sev.size, 0, Math.PI * 2);
    ctx.fillStyle = colors.stroke;
    ctx.fill();
}
// --- WILDFIRE / VOLCANO: Pulsing fire glow with sparks ---
function drawFirePulse(ctx, x, y, t, colors, sev) {
    const pulse = 0.7 + Math.sin(t * sev.speed * 3) * 0.3;
    const maxR = 25 * sev.size;
    // Glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, maxR * pulse);
    gradient.addColorStop(0, colors.glow);
    gradient.addColorStop(1, "transparent");
    ctx.beginPath();
    ctx.arc(x, y, maxR * pulse, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    // Spark particles (deterministic per-alert using position as seed)
    const seed = x * 1000 + y | 0;
    for(let i = 0; i < 8; i++){
        const angle = (seed + i * 45) % 360 * Math.PI / 180;
        const dist = (10 + (t * sev.speed * 20 + i * 7) % 25) * sev.size;
        const sparkAlpha = Math.max(0, 1 - dist / (35 * sev.size));
        const sx = x + Math.cos(angle + t * 0.5) * dist;
        const sy = y + Math.sin(angle + t * 0.5) * dist - dist * 0.3 // drift upward
        ;
        ctx.beginPath();
        ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = colors.stroke.replace(/[\d.]+\)$/, `${sparkAlpha})`);
        ctx.fill();
    }
    // Center
    ctx.beginPath();
    ctx.arc(x, y, 4 * sev.size, 0, Math.PI * 2);
    ctx.fillStyle = colors.stroke;
    ctx.fill();
}
// --- EARTHQUAKE: Seismic wave rings ---
function drawSeismicRings(ctx, x, y, t, colors, sev) {
    const maxR = 35 * sev.size;
    for(let r = 0; r < 4; r++){
        const progress = (t * sev.speed * 0.6 + r * 0.25) % 1;
        const radius = progress * maxR;
        const alpha = (1 - progress) * 0.6;
        // Jagged ring (simulate seismic disturbance)
        ctx.save();
        ctx.beginPath();
        const segs = 32;
        for(let s = 0; s <= segs; s++){
            const angle = s / segs * Math.PI * 2;
            const jag = Math.sin(angle * 12 + t * 8) * 2 * (1 - progress);
            const rr = radius + jag;
            const px = x + Math.cos(angle) * rr;
            const py = y + Math.sin(angle) * rr;
            if (s === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.lineWidth = 1.5;
        ctx.setLineDash([
            3,
            3
        ]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
    }
    // Epicenter
    const shake = Math.sin(t * 15) * 2 * sev.size;
    ctx.beginPath();
    ctx.arc(x + shake, y, 3.5 * sev.size, 0, Math.PI * 2);
    ctx.fillStyle = colors.stroke;
    ctx.fill();
}
// --- Generic pulsing marker ---
function drawGenericPulse(ctx, x, y, t, colors, sev) {
    const pulse = t * sev.speed * 0.5 % 1;
    const radius = pulse * 25 * sev.size;
    const alpha = (1 - pulse) * 0.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/, `${alpha})`);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, 4 * sev.size, 0, Math.PI * 2);
    ctx.fillStyle = colors.stroke;
    ctx.fill();
}
var _c;
__turbopack_context__.k.register(_c, "AnimatedHazards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/jane_earth/components/dashboard/africa-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AfricaMap",
    ()=>AfricaMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$map$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/dashboard/map-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$wind$2d$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/dashboard/wind-particles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$animated$2d$hazards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/dashboard/animated-hazards.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const RAINVIEWER_MAX_ZOOM = 7;
const FRAME_OPACITY = 0.65;
const TRANSITION_MS = 400;
function AfricaMap({ alerts, onAlertClick, borderless }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leafletRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Filmstrip refs
    const filmstripRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const prevFrameIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zoomLevel, setZoomLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AFRICA_ZOOM"]);
    const [filmstripReady, setFilmstripReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Weather layer state
    const [activeLayer, setActiveLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [alertsVisible, setAlertsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [rainViewerData, setRainViewerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Wind grid data (for wind particles)
    const [windGridPoints, setWindGridPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Time animation state
    const [currentFrameIndex, setCurrentFrameIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Active frames (only for animated tile layers: precipitation / satellite)
    const activeFrames = activeLayer === "precipitation" ? rainViewerData?.radar.frames || [] : activeLayer === "satellite" ? rainViewerData?.satellite.frames || [] : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AfricaMap.useEffect": ()=>{
            setCurrentFrameIndex({
                "AfricaMap.useEffect": (i)=>Math.min(i, Math.max(0, activeFrames.length - 1))
            }["AfricaMap.useEffect"]);
        }
    }["AfricaMap.useEffect"], [
        activeFrames.length
    ]);
    const currentFrame = activeFrames[currentFrameIndex] || null;
    // Build correct RainViewer tile URL
    const buildTileUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AfricaMap.useCallback[buildTileUrl]": (frame, layer)=>{
            const host = rainViewerData?.host || "";
            const color = layer === "precipitation" ? "4" : "0";
            const smooth = "1";
            const snow = layer === "precipitation" ? "1" : "0";
            return `${host}${frame.path}/256/{z}/{x}/{y}/${color}/${smooth}_${snow}.png`;
        }
    }["AfricaMap.useCallback[buildTileUrl]"], [
        rainViewerData
    ]);
    // --- Init Map ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AfricaMap.useEffect": ()=>{
            if (!mapRef.current) return;
            let cancelled = false;
            async function initMap() {
                const L = await __turbopack_context__.A("[project]/jane_earth/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)");
                await __turbopack_context__.A("[project]/jane_earth/node_modules/leaflet/dist/leaflet.css [app-client] (css, async loader)");
                if (cancelled || !mapRef.current) return;
                if (mapInstanceRef.current) {
                    mapInstanceRef.current.remove();
                    mapInstanceRef.current = null;
                }
                leafletRef.current = L;
                const map = L.default.map(mapRef.current, {
                    center: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AFRICA_CENTER"],
                    zoom: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AFRICA_ZOOM"],
                    minZoom: 3,
                    maxZoom: 10,
                    zoomControl: true,
                    attributionControl: true
                });
                L.default.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
                    subdomains: "abcd",
                    maxZoom: 19
                }).addTo(map);
                map.on("zoomend", {
                    "AfricaMap.useEffect.initMap": ()=>setZoomLevel(map.getZoom())
                }["AfricaMap.useEffect.initMap"]);
                const markersGroup = L.default.layerGroup().addTo(map);
                markersLayerRef.current = markersGroup;
                if (cancelled) {
                    map.remove();
                    return;
                }
                mapInstanceRef.current = map;
                setIsLoaded(true);
            }
            initMap();
            return ({
                "AfricaMap.useEffect": ()=>{
                    cancelled = true;
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                    filmstripRef.current = [];
                    markersLayerRef.current = null;
                    setIsLoaded(false);
                }
            })["AfricaMap.useEffect"];
        }
    }["AfricaMap.useEffect"], []);
    // --- Fetch RainViewer data ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AfricaMap.useEffect": ()=>{
            async function fetchRainViewer() {
                try {
                    const res = await fetch("/api/v1/tiles/rainviewer");
                    if (res.ok) {
                        const data = await res.json();
                        setRainViewerData(data);
                        const radarPast = (data.radar?.frames || []).filter({
                            "AfricaMap.useEffect.fetchRainViewer.radarPast": (f)=>f.type === "past"
                        }["AfricaMap.useEffect.fetchRainViewer.radarPast"]);
                        if (radarPast.length > 0) setCurrentFrameIndex(radarPast.length - 1);
                    }
                } catch  {}
            }
            fetchRainViewer();
            const interval = setInterval(fetchRainViewer, 300_000);
            return ({
                "AfricaMap.useEffect": ()=>clearInterval(interval)
            })["AfricaMap.useEffect"];
        }
    }["AfricaMap.useEffect"], []);
    // --- Fetch wind grid data (global) for particle animation ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AfricaMap.useEffect": ()=>{
            if (activeLayer !== "wind") {
                // Don't fetch if wind layer isn't active
                return;
            }
            async function fetchWindGrid() {
                try {
                    const res = await fetch("/api/v1/weather/grid");
                    if (res.ok) {
                        const data = await res.json();
                        setWindGridPoints(data.points || []);
                    }
                } catch  {}
            }
            fetchWindGrid();
            const interval = setInterval(fetchWindGrid, 900_000);
            return ({
                "AfricaMap.useEffect": ()=>clearInterval(interval)
            })["AfricaMap.useEffect"];
        }
    }["AfricaMap.useEffect"], [
        activeLayer
    ]);
    // --- FILMSTRIP: Pre-load ALL frame tile layers ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AfricaMap.useEffect": ()=>{
            if (!mapInstanceRef.current || !isLoaded || !leafletRef.current) return;
            if (activeLayer !== "precipitation" && activeLayer !== "satellite" || activeFrames.length === 0 || !rainViewerData?.host) {
                for (const layer of filmstripRef.current){
                    if (mapInstanceRef.current) mapInstanceRef.current.removeLayer(layer);
                }
                filmstripRef.current = [];
                prevFrameIndexRef.current = -1;
                setFilmstripReady(false);
                return;
            }
            const L = leafletRef.current.default;
            const map = mapInstanceRef.current;
            for (const layer of filmstripRef.current){
                map.removeLayer(layer);
            }
            filmstripRef.current = [];
            prevFrameIndexRef.current = -1;
            setFilmstripReady(false);
            const layers = [];
            for(let i = 0; i < activeFrames.length; i++){
                const url = buildTileUrl(activeFrames[i], activeLayer);
                const layer = L.tileLayer(url, {
                    opacity: 0,
                    zIndex: 500,
                    maxNativeZoom: RAINVIEWER_MAX_ZOOM,
                    maxZoom: 10,
                    updateWhenZooming: false,
                    keepBuffer: 2,
                    attribution: i === 0 ? '&copy; <a href="https://rainviewer.com">RainViewer</a>' : ""
                });
                layer.addTo(map);
                const container = layer.getContainer();
                if (container) {
                    container.style.transition = `opacity ${TRANSITION_MS}ms ease`;
                }
                layers.push(layer);
            }
            filmstripRef.current = layers;
            const startIdx = Math.min(currentFrameIndex, layers.length - 1);
            if (layers[startIdx]) {
                layers[startIdx].setOpacity(FRAME_OPACITY);
                prevFrameIndexRef.current = startIdx;
            }
            setFilmstripReady(true);
            return ({
                "AfricaMap.useEffect": ()=>{
                    for (const layer of layers){
                        if (mapInstanceRef.current) mapInstanceRef.current.removeLayer(layer);
                    }
                }
            })["AfricaMap.useEffect"];
        }
    }["AfricaMap.useEffect"], [
        activeLayer,
        rainViewerData,
        isLoaded
    ]);
    // --- Smooth frame transition ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AfricaMap.useEffect": ()=>{
            if (!filmstripReady || filmstripRef.current.length === 0) return;
            const layers = filmstripRef.current;
            const prevIdx = prevFrameIndexRef.current;
            const currIdx = Math.min(currentFrameIndex, layers.length - 1);
            if (prevIdx === currIdx) return;
            if (prevIdx >= 0 && prevIdx < layers.length) layers[prevIdx].setOpacity(0);
            if (layers[currIdx]) layers[currIdx].setOpacity(FRAME_OPACITY);
            prevFrameIndexRef.current = currIdx;
        }
    }["AfricaMap.useEffect"], [
        currentFrameIndex,
        filmstripReady
    ]);
    // --- Alert markers ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AfricaMap.useEffect": ()=>{
            if (!markersLayerRef.current || !isLoaded || !leafletRef.current) return;
            const L = leafletRef.current.default;
            const group = markersLayerRef.current;
            group.clearLayers();
            if (!alertsVisible || !alerts?.length) return;
            for (const alert of alerts){
                if (alert.latitude == null || alert.longitude == null) continue;
                const config = __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_CONFIG"][alert.severity] || __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_CONFIG"].GREEN;
                const radius = alert.severity === "RED" ? 10 : alert.severity === "ORANGE" ? 8 : alert.severity === "YELLOW" ? 6 : 5;
                const marker = L.circleMarker([
                    alert.latitude,
                    alert.longitude
                ], {
                    radius,
                    fillColor: config.color,
                    color: config.color,
                    weight: 2,
                    opacity: 0.9,
                    fillOpacity: 0.5
                });
                marker.bindPopup(`<div style="min-width:180px">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${config.color};margin-bottom:4px">
            ${config.label} - ${alert.hazard_type}
          </div>
          <div style="font-size:13px;font-weight:600;margin-bottom:6px;color:#e2e8f0">${alert.title}</div>
          ${alert.country ? `<div style="font-size:11px;color:#94a3b8;margin-bottom:2px">${alert.country}${alert.region ? ` - ${alert.region}` : ""}</div>` : ""}
          ${alert.population_affected ? `<div style="font-size:11px;color:#94a3b8">Pop. affected: ${alert.population_affected.toLocaleString()}</div>` : ""}
          ${alert.source ? `<div style="font-size:10px;color:#64748b;margin-top:4px">Source: ${alert.source}</div>` : ""}
        </div>`, {
                    className: "afro-storm-popup"
                });
                marker.on("click", {
                    "AfricaMap.useEffect": ()=>onAlertClick?.(alert)
                }["AfricaMap.useEffect"]);
                marker.addTo(group);
            }
        }
    }["AfricaMap.useEffect"], [
        alerts,
        isLoaded,
        alertsVisible,
        onAlertClick
    ]);
    // --- Playback (rAF loop for tile animation) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AfricaMap.useEffect": ()=>{
            if (!isPlaying || activeFrames.length === 0) {
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
                return;
            }
            const interval = Math.max(1000, TRANSITION_MS + 200);
            function tick(timestamp) {
                if (timestamp - lastTickRef.current >= interval) {
                    lastTickRef.current = timestamp;
                    setCurrentFrameIndex({
                        "AfricaMap.useEffect.tick": (prev)=>prev + 1 >= activeFrames.length ? 0 : prev + 1
                    }["AfricaMap.useEffect.tick"]);
                }
                rafRef.current = requestAnimationFrame(tick);
            }
            lastTickRef.current = performance.now();
            rafRef.current = requestAnimationFrame(tick);
            return ({
                "AfricaMap.useEffect": ()=>{
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
            })["AfricaMap.useEffect"];
        }
    }["AfricaMap.useEffect"], [
        isPlaying,
        activeFrames.length
    ]);
    // --- Controls ---
    const handlePlayPause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AfricaMap.useCallback[handlePlayPause]": ()=>setIsPlaying({
                "AfricaMap.useCallback[handlePlayPause]": (p)=>!p
            }["AfricaMap.useCallback[handlePlayPause]"])
    }["AfricaMap.useCallback[handlePlayPause]"], []);
    const handleStepForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AfricaMap.useCallback[handleStepForward]": ()=>{
            setIsPlaying(false);
            setCurrentFrameIndex({
                "AfricaMap.useCallback[handleStepForward]": (prev)=>prev + 1 >= activeFrames.length ? 0 : prev + 1
            }["AfricaMap.useCallback[handleStepForward]"]);
        }
    }["AfricaMap.useCallback[handleStepForward]"], [
        activeFrames.length
    ]);
    const handleStepBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AfricaMap.useCallback[handleStepBack]": ()=>{
            setIsPlaying(false);
            setCurrentFrameIndex({
                "AfricaMap.useCallback[handleStepBack]": (prev)=>prev - 1 < 0 ? activeFrames.length - 1 : prev - 1
            }["AfricaMap.useCallback[handleStepBack]"]);
        }
    }["AfricaMap.useCallback[handleStepBack]"], [
        activeFrames.length
    ]);
    const handleFrameChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AfricaMap.useCallback[handleFrameChange]": (index)=>{
            setIsPlaying(false);
            setCurrentFrameIndex(index);
        }
    }["AfricaMap.useCallback[handleFrameChange]"], []);
    const handleLayerChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AfricaMap.useCallback[handleLayerChange]": (layer)=>{
            setActiveLayer(layer);
            setCurrentFrameIndex(0);
            setIsPlaying(false);
        }
    }["AfricaMap.useCallback[handleLayerChange]"], []);
    const handleToggleAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AfricaMap.useCallback[handleToggleAlerts]": ()=>setAlertsVisible({
                "AfricaMap.useCallback[handleToggleAlerts]": (v)=>!v
            }["AfricaMap.useCallback[handleToggleAlerts]"])
    }["AfricaMap.useCallback[handleToggleAlerts]"], []);
    const isZoomBeyondRadar = zoomLevel > RAINVIEWER_MAX_ZOOM && (activeLayer === "precipitation" || activeLayer === "satellite");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-full overflow-hidden ${borderless ? "" : "rounded-lg border border-border"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            isZoomBeyondRadar && isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-14 left-1/2 -translate-x-1/2 z-[500] px-3 py-1.5 rounded-md bg-severity-yellow/20 border border-severity-yellow/30 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-semibold text-severity-yellow font-mono",
                    children: "Zoom out to see weather overlay (max zoom 7)"
                }, void 0, false, {
                    fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                    lineNumber: 351,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, this),
            isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$map$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapControls"], {
                activeLayer: activeLayer,
                onLayerChange: handleLayerChange,
                alertsVisible: alertsVisible,
                onToggleAlerts: handleToggleAlerts,
                isPlaying: isPlaying,
                onPlayPause: handlePlayPause,
                onStepForward: handleStepForward,
                onStepBack: handleStepBack,
                currentFrameTime: currentFrame?.time ?? null,
                totalFrames: activeFrames.length,
                currentFrameIndex: currentFrameIndex,
                onFrameChange: handleFrameChange
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                lineNumber: 358,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$wind$2d$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindParticles"], {
                map: mapInstanceRef.current,
                points: windGridPoints,
                visible: activeLayer === "wind" && isLoaded
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$animated$2d$hazards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedHazards"], {
                map: mapInstanceRef.current,
                alerts: alerts,
                visible: activeLayer === "hazards" && isLoaded
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground font-mono",
                            children: "Loading Africa Map..."
                        }, void 0, false, {
                            fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                    lineNumber: 390,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
                lineNumber: 389,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/dashboard/africa-map.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
_s(AfricaMap, "i9s4c2H+tBhoQGxHinlySHmS2ZI=");
_c = AfricaMap;
var _c;
__turbopack_context__.k.register(_c, "AfricaMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/jane_earth/components/dashboard/africa-map.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/jane_earth/components/dashboard/africa-map.tsx [app-client] (ecmascript)"));
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Layers
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }
    ]
];
const Layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("layers", __iconNode);
;
 //# sourceMappingURL=layers.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript)");
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/satellite.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Satellite
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",
            key: "dzhfyz"
        }
    ],
    [
        "path",
        {
            d: "M16.5 7.5 19 5",
            key: "1ltcjm"
        }
    ],
    [
        "path",
        {
            d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",
            key: "nfoymv"
        }
    ],
    [
        "path",
        {
            d: "M9 21a6 6 0 0 0-6-6",
            key: "1iajcf"
        }
    ],
    [
        "path",
        {
            d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",
            key: "nv9zqy"
        }
    ]
];
const Satellite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("satellite", __iconNode);
;
 //# sourceMappingURL=satellite.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/satellite.js [app-client] (ecmascript) <export default as Satellite>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Satellite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$satellite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$satellite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/satellite.js [app-client] (ecmascript)");
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Play
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }
    ]
];
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("play", __iconNode);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)");
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pause
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            x: "14",
            y: "3",
            width: "5",
            height: "18",
            rx: "1",
            key: "kaeet6"
        }
    ],
    [
        "rect",
        {
            x: "5",
            y: "3",
            width: "5",
            height: "18",
            rx: "1",
            key: "1wsw3u"
        }
    ]
];
const Pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("pause", __iconNode);
;
 //# sourceMappingURL=pause.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pause",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript)");
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SkipForward
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 4v16",
            key: "7j8fe9"
        }
    ],
    [
        "path",
        {
            d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
            key: "zs4d6"
        }
    ]
];
const SkipForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("skip-forward", __iconNode);
;
 //# sourceMappingURL=skip-forward.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkipForward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript)");
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SkipBack
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
            key: "15892j"
        }
    ],
    [
        "path",
        {
            d: "M3 20V4",
            key: "1ptbpl"
        }
    ]
];
const SkipBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("skip-back", __iconNode);
;
 //# sourceMappingURL=skip-back.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkipBack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript)");
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronUp
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
];
const ChevronUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-up", __iconNode);
;
 //# sourceMappingURL=chevron-up.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript)");
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Zap
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
];
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("zap", __iconNode);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=jane_earth_46f0f1dd._.js.map