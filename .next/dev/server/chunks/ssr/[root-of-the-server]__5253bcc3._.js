module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/jane_earth/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
;
}),
"[project]/jane_earth/components/dashboard/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeader",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DashboardHeader({ onToggleSidebar, sidebarOpen }) {
    const [isIngesting, setIsIngesting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastIngest, setLastIngest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function triggerIngest() {
        setIsIngesting(true);
        try {
            const res = await fetch("/api/pipeline/ingest", {
                method: "POST"
            });
            if (res.ok) {
                setLastIngest(new Date().toLocaleTimeString());
            }
        } catch  {
        // Silently fail - pipeline status will show errors
        } finally{
            setIsIngesting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center justify-between h-14 px-4 border-b border-border bg-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: onToggleSidebar,
                        className: "lg:hidden text-muted-foreground hover:text-foreground",
                        "aria-label": sidebarOpen ? "Close navigation" : "Open navigation",
                        children: sidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                            lineNumber: 46,
                            columnNumber: 26
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                            lineNumber: 46,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "h-7 w-7 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-severity-green border-2 border-card animate-severity-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-base font-bold tracking-tight text-foreground leading-none",
                                        children: "AFRO STORM"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground tracking-widest uppercase leading-none mt-0.5",
                                        children: "Multi-Hazard Early Warning System"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-severity-green/10 border border-severity-green/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                className: "h-3 w-3 text-severity-green animate-severity-pulse"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono text-severity-green",
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    lastIngest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:block text-[10px] text-muted-foreground font-mono",
                        children: [
                            "Last sync: ",
                            lastIngest
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: triggerIngest,
                        disabled: isIngesting,
                        className: "gap-1.5 text-xs border-border text-muted-foreground hover:text-foreground bg-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: `h-3.5 w-3.5 ${isIngesting ? "animate-spin" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: isIngesting ? "Syncing..." : "Sync Data"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/header.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/dashboard/header.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[project]/jane_earth/components/dashboard/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardSidebar",
    ()=>DashboardSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const NAV_ITEMS = [
    {
        href: "/",
        view: null,
        label: "Threat Map",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"],
        section: "Operations"
    },
    {
        href: "/analytics",
        view: null,
        label: "Command Center",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        section: "Operations"
    },
    {
        href: "/analytics?view=alerts",
        view: "alerts",
        label: "Active Alerts",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        section: "Operations"
    },
    {
        href: "/analytics?view=weather",
        view: "weather",
        label: "Weather Intel",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        section: "Intelligence"
    },
    {
        href: "/analytics?view=community",
        view: "community",
        label: "Field Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        section: "Community"
    },
    {
        href: "/analytics?view=pipeline",
        view: "pipeline",
        label: "Data Pipeline",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        section: "System"
    }
];
function SidebarNav({ onClose, alertCounts }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const currentView = searchParams.get("view");
    const totalRed = alertCounts?.red || 0;
    const totalOrange = alertCounts?.orange || 0;
    let currentSection = "";
    function isActive(item) {
        if (item.href === "/") return pathname === "/";
        if (item.href === "/analytics" && item.view === null) {
            return pathname === "/analytics" && !currentView;
        }
        if (item.view) {
            return pathname === "/analytics" && currentView === item.view;
        }
        return false;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "px-2 space-y-0.5",
        role: "navigation",
        "aria-label": "Main navigation",
        children: NAV_ITEMS.map((item)=>{
            const showSection = item.section !== currentSection;
            if (showSection) currentSection = item.section;
            const Icon = item.icon;
            const active = isActive(item);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    showSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-3 pt-4 pb-1.5 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground",
                        children: item.section
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                        lineNumber: 68,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        onClick: onClose,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors", active ? "bg-primary/10 text-primary font-medium border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-4 w-4 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this),
                            item.label === "Active Alerts" && totalRed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-[10px] font-bold bg-severity-red/20 text-severity-red px-1.5 py-0.5 rounded-full animate-severity-pulse",
                                children: totalRed
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this),
                            item.label === "Active Alerts" && totalRed === 0 && totalOrange > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-[10px] font-bold bg-severity-orange/20 text-severity-orange px-1.5 py-0.5 rounded-full",
                                children: totalOrange
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                ]
            }, item.href, true, {
                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                lineNumber: 66,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DashboardSidebar({ isOpen, onClose, alertCounts }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 left-0 z-40 w-56 bg-card border-r border-border flex flex-col transition-transform duration-200 lg:relative lg:translate-x-0", isOpen ? "translate-x-0" : "-translate-x-full"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex items-center gap-2.5 px-4 h-14 border-b border-border shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-severity-green border-2 border-card animate-severity-pulse"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-foreground leading-none tracking-tight",
                                children: "AFRO STORM"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] text-muted-foreground tracking-widest uppercase mt-0.5",
                                children: "Early Warning"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 py-3 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarNav, {
                        onClose: onClose,
                        alertCounts: alertCounts
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
                        onClick: ()=>{},
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 px-3 text-[9px] text-muted-foreground/50 font-mono",
                        children: "AFRO STORM v1.0 -- Mostar Industries"
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/dashboard/sidebar.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
}),
"[project]/jane_earth/components/dashboard/dashboard-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardShell",
    ()=>DashboardShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/dashboard/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/dashboard/sidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DashboardShell({ children, alertCounts }) {
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSidebarToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSidebarOpen((prev)=>!prev);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardSidebar"], {
                isOpen: sidebarOpen,
                onClose: ()=>setSidebarOpen(false),
                alertCounts: alertCounts
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/dashboard-shell.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "fixed inset-0 z-30 bg-background/50 backdrop-blur-sm lg:hidden",
                onClick: ()=>setSidebarOpen(false),
                "aria-label": "Close sidebar",
                type: "button"
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/dashboard/dashboard-shell.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardHeader"], {
                        onToggleSidebar: handleSidebarToggle,
                        sidebarOpen: sidebarOpen
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/dashboard/dashboard-shell.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/dashboard/dashboard-shell.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/dashboard/dashboard-shell.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/jane_earth/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AFRICA_BOUNDS",
    ()=>AFRICA_BOUNDS,
    "AFRICA_CENTER",
    ()=>AFRICA_CENTER,
    "AFRICA_ZOOM",
    ()=>AFRICA_ZOOM,
    "DATA_SOURCES",
    ()=>DATA_SOURCES,
    "HAZARD_ICONS",
    ()=>HAZARD_ICONS,
    "SEVERITY_CONFIG",
    ()=>SEVERITY_CONFIG,
    "SUB_REGIONS",
    ()=>SUB_REGIONS
]);
const AFRICA_CENTER = [
    2.5,
    20.0
];
const AFRICA_ZOOM = 3.5;
const AFRICA_BOUNDS = [
    [
        -40,
        -25
    ],
    [
        40,
        55
    ]
];
const SEVERITY_CONFIG = {
    GREEN: {
        label: "Advisory",
        color: "hsl(142, 71%, 45%)",
        bg: "bg-severity-green/15",
        border: "border-severity-green/30",
        textColor: "text-severity-green"
    },
    YELLOW: {
        label: "Watch",
        color: "hsl(48, 96%, 53%)",
        bg: "bg-severity-yellow/15",
        border: "border-severity-yellow/30",
        textColor: "text-severity-yellow"
    },
    ORANGE: {
        label: "Warning",
        color: "hsl(25, 95%, 53%)",
        bg: "bg-severity-orange/15",
        border: "border-severity-orange/30",
        textColor: "text-severity-orange"
    },
    RED: {
        label: "Emergency",
        color: "hsl(0, 72%, 51%)",
        bg: "bg-severity-red/15",
        border: "border-severity-red/30",
        textColor: "text-severity-red"
    }
};
const HAZARD_ICONS = {
    FLOOD: "Waves",
    DROUGHT: "Sun",
    CYCLONE: "Wind",
    LANDSLIDE: "Mountain",
    EARTHQUAKE: "Activity",
    WILDFIRE: "Flame",
    VOLCANO: "Triangle",
    STORM: "CloudLightning"
};
const SUB_REGIONS = [
    "North Africa",
    "West Africa",
    "Central Africa",
    "East Africa",
    "Southern Africa"
];
const DATA_SOURCES = {
    OPEN_METEO: {
        name: "Open-Meteo",
        baseUrl: "https://api.open-meteo.com/v1",
        description: "Free weather API - no key required"
    },
    GDACS: {
        name: "GDACS",
        baseUrl: "https://www.gdacs.org/gdacsapi/api/events",
        description: "Global Disaster Alert and Coordination System"
    },
    NASA_EONET: {
        name: "NASA EONET",
        baseUrl: "https://eonet.gsfc.nasa.gov/api/v3",
        description: "Earth Observatory Natural Event Tracker"
    },
    RELIEFWEB: {
        name: "ReliefWeb",
        baseUrl: "https://api.reliefweb.int/v1",
        description: "UN OCHA humanitarian information service"
    }
};
}),
"[project]/jane_earth/components/dashboard/alert-detail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDetail",
    ()=>AlertDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/wind.js [app-ssr] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/mountain.js [app-ssr] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/triangle.js [app-ssr] (ecmascript) <export default as Triangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$lightning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudLightning$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/cloud-lightning.js [app-ssr] (ecmascript) <export default as CloudLightning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const HAZARD_ICON_MAP = {
    FLOOD: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
    DROUGHT: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
    CYCLONE: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"],
    LANDSLIDE: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"],
    EARTHQUAKE: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    WILDFIRE: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
    VOLCANO: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"],
    STORM: __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$lightning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudLightning$3e$__["CloudLightning"]
};
function AlertDetail({ alert, onClose }) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEVERITY_CONFIG"][alert.severity] || __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEVERITY_CONFIG"].GREEN;
    const Icon = HAZARD_ICON_MAP[alert.hazard_type] || __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-lg border border-border bg-card shadow-xl",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": `Alert detail: ${alert.title}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between p-4 border-b", config.bg, config.border),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg border", config.bg, config.border),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", config.textColor)
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold uppercase tracking-wider", config.textColor),
                                                    children: config.label
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: alert.hazard_type
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-foreground mt-0.5",
                                            children: alert.title
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: onClose,
                            className: "text-muted-foreground hover:text-foreground shrink-0",
                            "aria-label": "Close alert detail",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4 max-h-[60vh] overflow-y-auto",
                    children: [
                        alert.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-foreground leading-relaxed",
                                    children: alert.description
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                alert.country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-2.5 rounded-md bg-background/50 border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-4 w-4 text-muted-foreground shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-muted-foreground",
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-medium text-foreground",
                                                    children: [
                                                        alert.country,
                                                        alert.region ? `, ${alert.region}` : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                alert.population_affected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-2.5 rounded-md bg-background/50 border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-4 w-4 text-muted-foreground shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-muted-foreground",
                                                    children: "Pop. Affected"
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-medium text-foreground",
                                                    children: alert.population_affected.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                alert.event_start && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-2.5 rounded-md bg-background/50 border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "h-4 w-4 text-muted-foreground shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-muted-foreground",
                                                    children: "Event Start"
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-medium text-foreground",
                                                    children: new Date(alert.event_start).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                alert.latitude != null && alert.longitude != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-2.5 rounded-md bg-background/50 border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-4 w-4 text-muted-foreground shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-muted-foreground",
                                                    children: "Coordinates"
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-medium text-foreground font-mono",
                                                    children: [
                                                        alert.latitude.toFixed(2),
                                                        ", ",
                                                        alert.longitude.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Source: ",
                                        alert.source
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "ID: ",
                                        alert.external_id || alert.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-2 p-4 border-t border-border",
                    children: [
                        alert.source_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            asChild: true,
                            className: "gap-1.5 bg-transparent text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: alert.source_url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this),
                                    "View Source"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/dashboard/alert-detail.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/jane_earth/hooks/use-afro-storm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAlerts",
    ()=>useAlerts,
    "useCommunityReports",
    ()=>useCommunityReports,
    "usePipelineStatus",
    ()=>usePipelineStatus,
    "useRainViewer",
    ()=>useRainViewer,
    "useWeather",
    ()=>useWeather,
    "useWeatherGrid",
    ()=>useWeatherGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/swr/dist/index/index.mjs [app-ssr] (ecmascript) <locals>");
"use client";
;
const fetcher = (url)=>fetch(url).then((r)=>r.json());
function useAlerts(params) {
    const query = params ? `?${params}` : "";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(`/api/alerts${query}`, fetcher, {
        refreshInterval: 60_000,
        revalidateOnFocus: true
    });
}
function useWeather() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("/api/weather", fetcher, {
        refreshInterval: 300_000,
        revalidateOnFocus: true
    });
}
function usePipelineStatus() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("/api/pipeline/status", fetcher, {
        refreshInterval: 30_000,
        revalidateOnFocus: true
    });
}
function useCommunityReports() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("/api/reports", fetcher, {
        refreshInterval: 60_000
    });
}
function useRainViewer() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("/api/v1/tiles/rainviewer", fetcher, {
        refreshInterval: 300_000,
        revalidateOnFocus: false
    });
}
function useWeatherGrid() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("/api/v1/weather/grid", fetcher, {
        refreshInterval: 900_000,
        revalidateOnFocus: false
    });
}
}),
"[project]/jane_earth/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg border bg-card text-card-foreground shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = 'Card';
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1.5 p-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = 'CardHeader';
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-2xl font-semibold leading-none tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = 'CardTitle';
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = 'CardDescription';
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = 'CardContent';
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = 'CardFooter';
;
}),
"[project]/jane_earth/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
            secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
            destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
            outline: 'text-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/badge.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/jane_earth/components/visualizations/cyclone-track.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CycloneTrackVisualization",
    ()=>CycloneTrackVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/wind.js [app-ssr] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/navigation.js [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const MOCK_CYCLONE = {
    name: "Cyclone Belal",
    id: "TC-2024-001",
    currentPosition: {
        lat: -20.2,
        lon: 57.5,
        intensity: 95,
        pressure: 965,
        category: 2,
        radius: 120
    },
    formationTime: "2026-01-15T00:00:00Z",
    lastUpdate: "2026-01-15T12:00:00Z",
    confidence: "medium",
    scenarios: [
        {
            id: "scenario-1",
            probability: 35,
            color: "#ef4444",
            track: [
                {
                    time: "2026-01-15T12:00:00Z",
                    lat: -20.2,
                    lon: 57.5,
                    intensity: 95,
                    pressure: 965,
                    category: 2,
                    radius: 120
                },
                {
                    time: "2026-01-15T18:00:00Z",
                    lat: -20.8,
                    lon: 57.8,
                    intensity: 105,
                    pressure: 955,
                    category: 3,
                    radius: 130
                },
                {
                    time: "2026-01-16T00:00:00Z",
                    lat: -21.5,
                    lon: 58.2,
                    intensity: 115,
                    pressure: 945,
                    category: 3,
                    radius: 140
                },
                {
                    time: "2026-01-16T06:00:00Z",
                    lat: -22.2,
                    lon: 58.6,
                    intensity: 125,
                    pressure: 935,
                    category: 4,
                    radius: 150
                },
                {
                    time: "2026-01-16T12:00:00Z",
                    lat: -23.0,
                    lon: 59.0,
                    intensity: 130,
                    pressure: 930,
                    category: 4,
                    radius: 160
                }
            ]
        },
        {
            id: "scenario-2",
            probability: 30,
            color: "#f97316",
            track: [
                {
                    time: "2026-01-15T12:00:00Z",
                    lat: -20.2,
                    lon: 57.5,
                    intensity: 95,
                    pressure: 965,
                    category: 2,
                    radius: 120
                },
                {
                    time: "2026-01-15T18:00:00Z",
                    lat: -20.5,
                    lon: 57.6,
                    intensity: 100,
                    pressure: 960,
                    category: 3,
                    radius: 125
                },
                {
                    time: "2026-01-16T00:00:00Z",
                    lat: -21.0,
                    lon: 57.8,
                    intensity: 105,
                    pressure: 955,
                    category: 3,
                    radius: 130
                },
                {
                    time: "2026-01-16T06:00:00Z",
                    lat: -21.6,
                    lon: 58.0,
                    intensity: 110,
                    pressure: 950,
                    category: 3,
                    radius: 135
                },
                {
                    time: "2026-01-16T12:00:00Z",
                    lat: -22.2,
                    lon: 58.3,
                    intensity: 115,
                    pressure: 945,
                    category: 3,
                    radius: 140
                }
            ]
        },
        {
            id: "scenario-3",
            probability: 20,
            color: "#eab308",
            track: [
                {
                    time: "2026-01-15T12:00:00Z",
                    lat: -20.2,
                    lon: 57.5,
                    intensity: 95,
                    pressure: 965,
                    category: 2,
                    radius: 120
                },
                {
                    time: "2026-01-15T18:00:00Z",
                    lat: -20.3,
                    lon: 57.4,
                    intensity: 90,
                    pressure: 970,
                    category: 2,
                    radius: 115
                },
                {
                    time: "2026-01-16T00:00:00Z",
                    lat: -20.5,
                    lon: 57.3,
                    intensity: 85,
                    pressure: 975,
                    category: 1,
                    radius: 110
                },
                {
                    time: "2026-01-16T06:00:00Z",
                    lat: -20.8,
                    lon: 57.2,
                    intensity: 75,
                    pressure: 985,
                    category: 1,
                    radius: 100
                },
                {
                    time: "2026-01-16T12:00:00Z",
                    lat: -21.2,
                    lon: 57.0,
                    intensity: 65,
                    pressure: 995,
                    category: 0,
                    radius: 90
                }
            ]
        },
        {
            id: "scenario-4",
            probability: 15,
            color: "#22c55e",
            track: [
                {
                    time: "2026-01-15T12:00:00Z",
                    lat: -20.2,
                    lon: 57.5,
                    intensity: 95,
                    pressure: 965,
                    category: 2,
                    radius: 120
                },
                {
                    time: "2026-01-15T18:00:00Z",
                    lat: -20.0,
                    lon: 57.8,
                    intensity: 100,
                    pressure: 960,
                    category: 3,
                    radius: 125
                },
                {
                    time: "2026-01-16T00:00:00Z",
                    lat: -19.8,
                    lon: 58.2,
                    intensity: 110,
                    pressure: 950,
                    category: 3,
                    radius: 135
                },
                {
                    time: "2026-01-16T06:00:00Z",
                    lat: -19.5,
                    lon: 58.8,
                    intensity: 120,
                    pressure: 940,
                    category: 4,
                    radius: 145
                },
                {
                    time: "2026-01-16T12:00:00Z",
                    lat: -19.0,
                    lon: 59.5,
                    intensity: 135,
                    pressure: 925,
                    category: 4,
                    radius: 160
                }
            ]
        }
    ]
};
function getCategoryColor(category) {
    if (category >= 5) return "bg-purple-500";
    if (category >= 4) return "bg-severity-red";
    if (category >= 3) return "bg-severity-orange";
    if (category >= 2) return "bg-severity-yellow";
    if (category >= 1) return "bg-severity-green";
    return "bg-blue-500";
}
function getCategoryLabel(category) {
    if (category === 0) return "TD";
    if (category === 5) return "Cat 5";
    return `Cat ${category}`;
}
function CycloneTrackVisualization() {
    const cyclone = MOCK_CYCLONE;
    // Calculate uncertainty cone for visualization
    const uncertaintyCone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const timePoints = [];
        // For each time step across all scenarios
        const trackLength = cyclone.scenarios[0].track.length;
        for(let i = 0; i < trackLength; i++){
            const time = cyclone.scenarios[0].track[i].time;
            const lats = cyclone.scenarios.map((s)=>s.track[i].lat);
            const lons = cyclone.scenarios.map((s)=>s.track[i].lon);
            timePoints.push({
                time,
                minLat: Math.min(...lats),
                maxLat: Math.max(...lats),
                minLon: Math.min(...lons),
                maxLon: Math.max(...lons)
            });
        }
        return timePoints;
    }, [
        cyclone
    ]);
    // Format time for display
    const formatTime = (isoString)=>{
        const date = new Date(isoString);
        return date.toLocaleTimeString([], {
            hour: "2-digit",
            day: "numeric",
            hour12: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-card border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                    className: "h-5 w-5 text-severity-red"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg font-semibold",
                                    children: cyclone.name
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs font-mono", cyclone.confidence === "high" ? "border-severity-green text-severity-green" : cyclone.confidence === "medium" ? "border-severity-yellow text-severity-yellow" : "border-severity-orange text-severity-orange"),
                                    children: [
                                        cyclone.confidence,
                                        " confidence"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                new Date(cyclone.lastUpdate).toLocaleTimeString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md bg-background/50 border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-3 w-3 rounded-full", getCategoryColor(cyclone.currentPosition.category))
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold",
                                                children: getCategoryLabel(cyclone.currentPosition.category)
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md bg-background/50 border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1",
                                        children: "Wind Speed"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold",
                                        children: [
                                            cyclone.currentPosition.intensity,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-normal text-muted-foreground",
                                                children: "kt"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 195,
                                                columnNumber: 82
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md bg-background/50 border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1",
                                        children: "Pressure"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold",
                                        children: [
                                            cyclone.currentPosition.pressure,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-normal text-muted-foreground",
                                                children: "hPa"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 199,
                                                columnNumber: 81
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md bg-background/50 border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1",
                                        children: "Radius"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold",
                                        children: [
                                            cyclone.currentPosition.radius,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-normal text-muted-foreground",
                                                children: "km"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 203,
                                                columnNumber: 79
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-lg border border-border bg-background/30 p-4 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                className: "h-4 w-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            "Probabilistic Track Forecast"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: "Multiple scenarios (up to 15 days)"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-64 bg-gradient-to-b from-slate-900/50 to-slate-800/30 rounded-md overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 400 250",
                                        className: "w-full h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                    id: "grid",
                                                    width: "40",
                                                    height: "25",
                                                    patternUnits: "userSpaceOnUse",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M 40 0 L 0 0 0 25",
                                                        fill: "none",
                                                        stroke: "rgba(255,255,255,0.05)",
                                                        strokeWidth: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "400",
                                                height: "250",
                                                fill: "url(#grid)"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this),
                                            uncertaintyCone.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: `M ${cyclone.currentPosition.lon * 4 + 100} ${-cyclone.currentPosition.lat * 4 + 150}
                      ${uncertaintyCone.slice(1).map((p, i)=>{
                                                    const centerLat = (p.minLat + p.maxLat) / 2;
                                                    const centerLon = (p.minLon + p.maxLon) / 2;
                                                    const spread = Math.max(p.maxLat - p.minLat, p.maxLon - p.minLon) * 20;
                                                    return `L ${centerLon * 4 + 100 + spread} ${-centerLat * 4 + 150}`;
                                                }).join(' ')}
                      ${[
                                                    ...uncertaintyCone
                                                ].reverse().slice(1).map((p, i)=>{
                                                    const centerLat = (p.minLat + p.maxLat) / 2;
                                                    const centerLon = (p.minLon + p.maxLon) / 2;
                                                    const spread = Math.max(p.maxLat - p.minLat, p.maxLon - p.minLon) * 20;
                                                    return `L ${centerLon * 4 + 100 - spread} ${-centerLat * 4 + 150}`;
                                                }).join(' ')} Z`,
                                                fill: "rgba(239, 68, 68, 0.1)",
                                                stroke: "rgba(239, 68, 68, 0.3)",
                                                strokeWidth: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            cyclone.scenarios.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: `M ${scenario.track[0].lon * 4 + 100} ${-scenario.track[0].lat * 4 + 150}
                        ${scenario.track.slice(1).map((p)=>`L ${p.lon * 4 + 100} ${-p.lat * 4 + 150}`).join(' ')}`,
                                                            fill: "none",
                                                            stroke: scenario.color,
                                                            strokeWidth: "2",
                                                            strokeOpacity: scenario.probability / 100,
                                                            strokeDasharray: "4 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 19
                                                        }, this),
                                                        scenario.track.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: point.lon * 4 + 100,
                                                                cy: -point.lat * 4 + 150,
                                                                r: 3 + point.category * 1.5,
                                                                fill: scenario.color,
                                                                fillOpacity: 0.7,
                                                                stroke: scenario.color,
                                                                strokeWidth: "1"
                                                            }, i, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, scenario.id, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: cyclone.currentPosition.lon * 4 + 100,
                                                        cy: -cyclone.currentPosition.lat * 4 + 150,
                                                        r: 8,
                                                        fill: "#ef4444",
                                                        stroke: "white",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: cyclone.currentPosition.lon * 4 + 100,
                                                        cy: -cyclone.currentPosition.lat * 4 + 150,
                                                        r: 20,
                                                        fill: "none",
                                                        stroke: "#ef4444",
                                                        strokeWidth: "1",
                                                        strokeOpacity: "0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                                attributeName: "r",
                                                                values: "20;30;20",
                                                                dur: "2s",
                                                                repeatCount: "indefinite"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                                attributeName: "stroke-opacity",
                                                                values: "0.5;0;0.5",
                                                                dur: "2s",
                                                                repeatCount: "indefinite"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this),
                                            cyclone.scenarios[0].track.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: point.lon * 4 + 115,
                                                    y: -point.lat * 4 + 150,
                                                    fill: "rgba(255,255,255,0.5)",
                                                    fontSize: "8",
                                                    fontFamily: "monospace",
                                                    children: [
                                                        "+",
                                                        i * 6,
                                                        "h"
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-2 left-2 flex flex-col gap-1 bg-black/50 backdrop-blur-sm rounded-md p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] text-muted-foreground uppercase mb-1",
                                                children: "Scenario Probabilities"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this),
                                            cyclone.scenarios.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-1 rounded",
                                                            style: {
                                                                backgroundColor: s.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-white/80",
                                                            children: [
                                                                s.probability,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, s.id, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 right-2 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-3 w-3 text-severity-red"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-white/80",
                                                children: [
                                                    cyclone.currentPosition.lat.toFixed(1),
                                                    "°S, ",
                                                    cyclone.currentPosition.lon.toFixed(1),
                                                    "°E"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                        children: cyclone.scenarios.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md border border-border/50 bg-background/30 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 rounded-full",
                                                style: {
                                                    backgroundColor: scenario.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium",
                                                children: [
                                                    scenario.probability,
                                                    "% probability"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-muted-foreground space-y-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Peak: Cat ",
                                                    Math.max(...scenario.track.map((t)=>t.category))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Wind: ",
                                                    Math.max(...scenario.track.map((t)=>t.intensity)),
                                                    " kt"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, scenario.id, true, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 rounded-md bg-severity-red/10 border border-severity-red/30 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4 text-severity-red shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-severity-red",
                                children: "This is an experimental AI-based prediction showing multiple possible scenarios. Actual track may vary. Monitor official weather agency updates."
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/visualizations/cyclone-track.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
}),
"[project]/jane_earth/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}),
"[project]/jane_earth/components/visualizations/flood-monitor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloodMonitorVisualization",
    ()=>FloodMonitorVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/navigation.js [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-ssr] (ecmascript) <export default as ArrowDownRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const MOCK_FLOOD_DATA = {
    lastUpdate: "2026-01-15T12:00:00Z",
    totalAffected: 50000,
    totalAtRisk: 250000,
    zones: [
        {
            id: "flood-001",
            name: "Niger Delta",
            country: "Nigeria",
            lat: 5.5,
            lon: 6.3,
            currentLevel: 8.2,
            normalLevel: 3.5,
            dangerLevel: 7.0,
            maxLevel: 12.0,
            trend: "rising",
            trendRate: 0.35,
            affectedArea: 1250,
            populationAtRisk: 85000,
            lastUpdate: "2026-01-15T12:00:00Z",
            forecast24h: [
                8.2,
                8.5,
                8.8,
                9.1,
                9.3,
                9.5,
                9.6,
                9.7,
                9.6,
                9.4,
                9.1,
                8.8,
                8.5,
                8.2,
                7.9,
                7.6,
                7.3,
                7.0,
                6.8,
                6.5,
                6.3,
                6.1,
                5.9,
                5.7
            ]
        },
        {
            id: "flood-002",
            name: "Blue Nile Basin",
            country: "Sudan",
            lat: 15.5,
            lon: 32.6,
            currentLevel: 14.8,
            normalLevel: 8.0,
            dangerLevel: 12.0,
            maxLevel: 18.0,
            trend: "stable",
            trendRate: 0.05,
            affectedArea: 2100,
            populationAtRisk: 45000,
            lastUpdate: "2026-01-15T11:30:00Z",
            forecast24h: [
                14.8,
                14.9,
                15.0,
                15.0,
                14.9,
                14.8,
                14.7,
                14.6,
                14.5,
                14.4,
                14.3,
                14.2,
                14.1,
                14.0,
                13.9,
                13.8,
                13.7,
                13.6,
                13.5,
                13.4,
                13.3,
                13.2,
                13.1,
                13.0
            ]
        },
        {
            id: "flood-003",
            name: "Kafue River",
            country: "Zambia",
            lat: -15.8,
            lon: 27.9,
            currentLevel: 6.1,
            normalLevel: 2.5,
            dangerLevel: 5.5,
            maxLevel: 10.0,
            trend: "falling",
            trendRate: -0.15,
            affectedArea: 680,
            populationAtRisk: 22000,
            lastUpdate: "2026-01-15T12:15:00Z",
            forecast24h: [
                6.1,
                5.9,
                5.7,
                5.5,
                5.3,
                5.1,
                4.9,
                4.7,
                4.5,
                4.3,
                4.1,
                3.9,
                3.7,
                3.5,
                3.4,
                3.3,
                3.2,
                3.1,
                3.0,
                2.9,
                2.8,
                2.7,
                2.6,
                2.5
            ]
        }
    ]
};
function getFloodSeverity(level, danger, max) {
    const ratio = (level - danger) / (max - danger);
    if (ratio >= 0.5) return {
        label: "CRITICAL",
        color: "text-severity-red"
    };
    if (ratio >= 0) return {
        label: "DANGER",
        color: "text-severity-orange"
    };
    if (level > danger * 0.8) return {
        label: "WARNING",
        color: "text-severity-yellow"
    };
    return {
        label: "NORMAL",
        color: "text-severity-green"
    };
}
function getTrendIcon(trend, rate) {
    if (trend === "rising") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
        className: "h-4 w-4 text-severity-red"
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
        lineNumber: 113,
        columnNumber: 34
    }, this);
    if (trend === "falling") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
        className: "h-4 w-4 text-severity-green"
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
        lineNumber: 114,
        columnNumber: 35
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
        className: "h-4 w-4 text-muted-foreground"
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
        lineNumber: 115,
        columnNumber: 10
    }, this);
}
function FloodMonitorVisualization() {
    const [selectedZone, setSelectedZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MOCK_FLOOD_DATA.zones[0].id);
    const data = MOCK_FLOOD_DATA;
    const activeZone = data.zones.find((z)=>z.id === selectedZone) || data.zones[0];
    const severity = getFloodSeverity(activeZone.currentLevel, activeZone.dangerLevel, activeZone.maxLevel);
    const floodPercentage = (activeZone.currentLevel - activeZone.normalLevel) / (activeZone.maxLevel - activeZone.normalLevel) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-card border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                    className: "h-5 w-5 text-severity-orange"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg font-semibold",
                                    children: "Flood Monitor"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                new Date(data.lastUpdate).toLocaleTimeString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: selectedZone,
                        onValueChange: setSelectedZone,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid grid-cols-3 w-full",
                                children: data.zones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: zone.id,
                                        className: "text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: zone.name
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    }, zone.id, false, {
                                        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            data.zones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: zone.id,
                                    className: "space-y-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        zone.name,
                                                                        ", ",
                                                                        zone.country
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground mt-0.5",
                                                            children: [
                                                                zone.lat.toFixed(1),
                                                                "°, ",
                                                                zone.lon.toFixed(1),
                                                                "°"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono", severity.color.replace("text-", "border-"), severity.color),
                                                    children: severity.label
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative rounded-lg border border-border bg-background/30 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                                    className: "h-4 w-4 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Water Level"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                getTrendIcon(zone.trend, zone.trendRate),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium", zone.trend === "rising" ? "text-severity-red" : zone.trend === "falling" ? "text-severity-green" : "text-muted-foreground"),
                                                                    children: [
                                                                        zone.trendRate > 0 ? "+" : "",
                                                                        zone.trendRate,
                                                                        " m/h"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-12 bg-muted rounded-full overflow-hidden mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-0 top-0 h-full bg-severity-green/20",
                                                            style: {
                                                                width: `${(zone.dangerLevel - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 h-full bg-severity-yellow/20",
                                                            style: {
                                                                left: `${(zone.dangerLevel - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100}%`,
                                                                width: `${(zone.maxLevel - zone.dangerLevel) * 0.3 / (zone.maxLevel - zone.normalLevel) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute right-0 top-0 h-full bg-severity-red/20",
                                                            style: {
                                                                width: `${30}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 h-full w-1 bg-white shadow-lg transition-all duration-500",
                                                            style: {
                                                                left: `${floodPercentage}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute -top-1 h-14 w-4 rounded-full border-2 border-white shadow-lg transition-all duration-500", severity.label === "CRITICAL" ? "bg-severity-red" : severity.label === "DANGER" ? "bg-severity-orange" : severity.label === "WARNING" ? "bg-severity-yellow" : "bg-severity-green"),
                                                            style: {
                                                                left: `calc(${floodPercentage}% - 8px)`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-[10px] text-muted-foreground font-mono",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Normal: ",
                                                                zone.normalLevel,
                                                                "m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Danger: ",
                                                                zone.dangerLevel,
                                                                "m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Max: ",
                                                                zone.maxLevel,
                                                                "m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-4xl font-bold tabular-nums",
                                                                children: zone.currentLevel.toFixed(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "meters"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-border bg-background/30 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-4 w-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "24-Hour Forecast"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-32",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 300 100",
                                                        className: "w-full h-full",
                                                        preserveAspectRatio: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "25",
                                                                x2: "300",
                                                                y2: "25",
                                                                stroke: "rgba(255,255,255,0.1)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "50",
                                                                x2: "300",
                                                                y2: "50",
                                                                stroke: "rgba(255,255,255,0.1)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "75",
                                                                x2: "300",
                                                                y2: "75",
                                                                stroke: "rgba(255,255,255,0.1)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: 100 - (zone.dangerLevel - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100,
                                                                x2: "300",
                                                                y2: 100 - (zone.dangerLevel - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100,
                                                                stroke: "#f97316",
                                                                strokeWidth: "1",
                                                                strokeDasharray: "4 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: `M 0 ${100 - (zone.forecast24h[0] - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100}
                          ${zone.forecast24h.slice(1).map((val, i)=>`L ${(i + 1) * (300 / 23)} ${100 - (val - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100}`).join(' ')}
                          L 300 100 L 0 100 Z`,
                                                                fill: "url(#floodGradient)",
                                                                opacity: "0.3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: `M 0 ${100 - (zone.forecast24h[0] - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100}
                          ${zone.forecast24h.slice(1).map((val, i)=>`L ${(i + 1) * (300 / 23)} ${100 - (val - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100}`).join(' ')}`,
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                className: severity.color
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 21
                                                            }, this),
                                                            zone.forecast24h.filter((_, i)=>i % 4 === 0).map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: i * 4 * (300 / 23),
                                                                    cy: 100 - (val - zone.normalLevel) / (zone.maxLevel - zone.normalLevel) * 100,
                                                                    r: "3",
                                                                    fill: "currentColor",
                                                                    className: severity.color
                                                                }, i, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 23
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                    id: "floodGradient",
                                                                    x1: "0",
                                                                    y1: "0",
                                                                    x2: "0",
                                                                    y2: "1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                            offset: "0%",
                                                                            stopColor: "currentColor",
                                                                            stopOpacity: "0.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                            lineNumber: 310,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                            offset: "100%",
                                                                            stopColor: "currentColor",
                                                                            stopOpacity: "0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                            lineNumber: 311,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-[10px] text-muted-foreground font-mono mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+6h"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+12h"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+18h"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+24h"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1",
                                                            children: "Affected Area"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: [
                                                                zone.affectedArea.toLocaleString(),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-normal text-muted-foreground",
                                                                    children: "km²"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 89
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1",
                                                            children: "People at Risk"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: zone.populationAtRisk.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, zone.id, true, {
                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md bg-severity-orange/10 border border-severity-orange/30 p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "h-4 w-4 text-severity-orange shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-severity-orange",
                                            children: "Regional Flood Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-severity-orange/80 mt-1",
                                            children: [
                                                data.zones.length,
                                                " active flood zones | ",
                                                data.totalAffected.toLocaleString(),
                                                " people affected |",
                                                " ",
                                                data.totalAtRisk.toLocaleString(),
                                                " at risk"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/visualizations/flood-monitor.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/jane_earth/components/visualizations/drought-monitor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DroughtMonitorVisualization",
    ()=>DroughtMonitorVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-ssr] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/sprout.js [app-ssr] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/cloud-rain.js [app-ssr] (ecmascript) <export default as CloudRain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const SEVERITY_CONFIG = {
    D0: {
        label: "Abnormally Dry",
        color: "text-yellow-500",
        bg: "bg-yellow-500",
        border: "border-yellow-500"
    },
    D1: {
        label: "Moderate Drought",
        color: "text-amber-500",
        bg: "bg-amber-500",
        border: "border-amber-500"
    },
    D2: {
        label: "Severe Drought",
        color: "text-orange-500",
        bg: "bg-orange-500",
        border: "border-orange-500"
    },
    D3: {
        label: "Extreme Drought",
        color: "text-red-500",
        bg: "bg-red-500",
        border: "border-red-500"
    },
    D4: {
        label: "Exceptional Drought",
        color: "text-purple-500",
        bg: "bg-purple-500",
        border: "border-purple-500"
    }
};
const MOCK_DROUGHT_DATA = {
    lastUpdate: "2026-01-15T12:00:00Z",
    totalAffected: 8500000,
    zones: [
        {
            id: "drought-001",
            name: "Greater Horn of Africa",
            country: "Ethiopia/Kenya/Somalia",
            severity: "D3",
            startDate: "2023-03-01",
            duration: 34,
            populationAffected: 5200000,
            agriculturalLoss: 68,
            waterReservoirLevel: 22,
            last12Months: [
                {
                    month: "Jan",
                    spi: -1.8,
                    soilMoisture: 15,
                    vegetationHealth: 0.25,
                    temperature: 32,
                    rainfall: 12
                },
                {
                    month: "Feb",
                    spi: -2.1,
                    soilMoisture: 12,
                    vegetationHealth: 0.22,
                    temperature: 34,
                    rainfall: 8
                },
                {
                    month: "Mar",
                    spi: -2.3,
                    soilMoisture: 10,
                    vegetationHealth: 0.20,
                    temperature: 35,
                    rainfall: 5
                },
                {
                    month: "Apr",
                    spi: -1.9,
                    soilMoisture: 18,
                    vegetationHealth: 0.28,
                    temperature: 33,
                    rainfall: 25
                },
                {
                    month: "May",
                    spi: -1.5,
                    soilMoisture: 25,
                    vegetationHealth: 0.35,
                    temperature: 31,
                    rainfall: 45
                },
                {
                    month: "Jun",
                    spi: -1.2,
                    soilMoisture: 30,
                    vegetationHealth: 0.42,
                    temperature: 30,
                    rainfall: 65
                },
                {
                    month: "Jul",
                    spi: -0.8,
                    soilMoisture: 35,
                    vegetationHealth: 0.48,
                    temperature: 29,
                    rainfall: 85
                },
                {
                    month: "Aug",
                    spi: -0.5,
                    soilMoisture: 38,
                    vegetationHealth: 0.52,
                    temperature: 29,
                    rainfall: 95
                },
                {
                    month: "Sep",
                    spi: -1.0,
                    soilMoisture: 28,
                    vegetationHealth: 0.40,
                    temperature: 31,
                    rainfall: 55
                },
                {
                    month: "Oct",
                    spi: -1.6,
                    soilMoisture: 20,
                    vegetationHealth: 0.30,
                    temperature: 33,
                    rainfall: 28
                },
                {
                    month: "Nov",
                    spi: -2.0,
                    soilMoisture: 14,
                    vegetationHealth: 0.24,
                    temperature: 34,
                    rainfall: 15
                },
                {
                    month: "Dec",
                    spi: -2.2,
                    soilMoisture: 11,
                    vegetationHealth: 0.21,
                    temperature: 35,
                    rainfall: 10
                }
            ],
            forecastNext3Months: {
                spi: [
                    -1.8,
                    -1.5,
                    -1.2
                ],
                probabilityImprove: 35,
                probabilityPersist: 45,
                probabilityWorsen: 20
            }
        },
        {
            id: "drought-002",
            name: "Sahel Region",
            country: "Mali/Niger/Chad",
            severity: "D2",
            startDate: "2024-06-01",
            duration: 7,
            populationAffected: 2100000,
            agriculturalLoss: 45,
            waterReservoirLevel: 38,
            last12Months: [
                {
                    month: "Jan",
                    spi: -0.5,
                    soilMoisture: 25,
                    vegetationHealth: 0.45,
                    temperature: 28,
                    rainfall: 0
                },
                {
                    month: "Feb",
                    spi: -0.8,
                    soilMoisture: 20,
                    vegetationHealth: 0.40,
                    temperature: 31,
                    rainfall: 0
                },
                {
                    month: "Mar",
                    spi: -1.2,
                    soilMoisture: 15,
                    vegetationHealth: 0.32,
                    temperature: 35,
                    rainfall: 2
                },
                {
                    month: "Apr",
                    spi: -1.5,
                    soilMoisture: 12,
                    vegetationHealth: 0.28,
                    temperature: 38,
                    rainfall: 5
                },
                {
                    month: "May",
                    spi: -1.8,
                    soilMoisture: 18,
                    vegetationHealth: 0.35,
                    temperature: 40,
                    rainfall: 15
                },
                {
                    month: "Jun",
                    spi: -1.4,
                    soilMoisture: 30,
                    vegetationHealth: 0.48,
                    temperature: 38,
                    rainfall: 55
                },
                {
                    month: "Jul",
                    spi: -0.9,
                    soilMoisture: 42,
                    vegetationHealth: 0.58,
                    temperature: 35,
                    rainfall: 120
                },
                {
                    month: "Aug",
                    spi: -0.6,
                    soilMoisture: 45,
                    vegetationHealth: 0.62,
                    temperature: 33,
                    rainfall: 145
                },
                {
                    month: "Sep",
                    spi: -1.1,
                    soilMoisture: 32,
                    vegetationHealth: 0.48,
                    temperature: 36,
                    rainfall: 65
                },
                {
                    month: "Oct",
                    spi: -1.6,
                    soilMoisture: 22,
                    vegetationHealth: 0.35,
                    temperature: 38,
                    rainfall: 18
                },
                {
                    month: "Nov",
                    spi: -1.9,
                    soilMoisture: 16,
                    vegetationHealth: 0.28,
                    temperature: 35,
                    rainfall: 2
                },
                {
                    month: "Dec",
                    spi: -2.0,
                    soilMoisture: 14,
                    vegetationHealth: 0.25,
                    temperature: 32,
                    rainfall: 0
                }
            ],
            forecastNext3Months: {
                spi: [
                    -1.5,
                    -0.8,
                    -0.3
                ],
                probabilityImprove: 55,
                probabilityPersist: 35,
                probabilityWorsen: 10
            }
        },
        {
            id: "drought-003",
            name: "Southern Madagascar",
            country: "Madagascar",
            severity: "D4",
            startDate: "2021-09-01",
            duration: 52,
            populationAffected: 1200000,
            agriculturalLoss: 85,
            waterReservoirLevel: 8,
            last12Months: [
                {
                    month: "Jan",
                    spi: -2.5,
                    soilMoisture: 8,
                    vegetationHealth: 0.12,
                    temperature: 31,
                    rainfall: 45
                },
                {
                    month: "Feb",
                    spi: -2.4,
                    soilMoisture: 10,
                    vegetationHealth: 0.15,
                    temperature: 30,
                    rainfall: 55
                },
                {
                    month: "Mar",
                    spi: -2.2,
                    soilMoisture: 12,
                    vegetationHealth: 0.18,
                    temperature: 29,
                    rainfall: 40
                },
                {
                    month: "Apr",
                    spi: -2.3,
                    soilMoisture: 9,
                    vegetationHealth: 0.12,
                    temperature: 28,
                    rainfall: 18
                },
                {
                    month: "May",
                    spi: -2.5,
                    soilMoisture: 6,
                    vegetationHealth: 0.08,
                    temperature: 26,
                    rainfall: 8
                },
                {
                    month: "Jun",
                    spi: -2.6,
                    soilMoisture: 4,
                    vegetationHealth: 0.05,
                    temperature: 24,
                    rainfall: 3
                },
                {
                    month: "Jul",
                    spi: -2.7,
                    soilMoisture: 3,
                    vegetationHealth: 0.04,
                    temperature: 23,
                    rainfall: 2
                },
                {
                    month: "Aug",
                    spi: -2.6,
                    soilMoisture: 3,
                    vegetationHealth: 0.04,
                    temperature: 24,
                    rainfall: 3
                },
                {
                    month: "Sep",
                    spi: -2.5,
                    soilMoisture: 4,
                    vegetationHealth: 0.06,
                    temperature: 26,
                    rainfall: 5
                },
                {
                    month: "Oct",
                    spi: -2.4,
                    soilMoisture: 5,
                    vegetationHealth: 0.08,
                    temperature: 28,
                    rainfall: 8
                },
                {
                    month: "Nov",
                    spi: -2.3,
                    soilMoisture: 6,
                    vegetationHealth: 0.10,
                    temperature: 29,
                    rainfall: 15
                },
                {
                    month: "Dec",
                    spi: -2.2,
                    soilMoisture: 7,
                    vegetationHealth: 0.12,
                    temperature: 30,
                    rainfall: 28
                }
            ],
            forecastNext3Months: {
                spi: [
                    -2.0,
                    -1.8,
                    -1.5
                ],
                probabilityImprove: 20,
                probabilityPersist: 40,
                probabilityWorsen: 40
            }
        }
    ]
};
function getSPIStatus(spi) {
    if (spi <= -2.0) return {
        label: "Extremely Dry",
        color: "text-purple-500"
    };
    if (spi <= -1.5) return {
        label: "Severely Dry",
        color: "text-red-500"
    };
    if (spi <= -1.0) return {
        label: "Moderately Dry",
        color: "text-orange-500"
    };
    if (spi < 0) return {
        label: "Mild Dry",
        color: "text-yellow-500"
    };
    return {
        label: "Normal",
        color: "text-severity-green"
    };
}
function DroughtMonitorVisualization() {
    const data = MOCK_DROUGHT_DATA;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-card border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "h-5 w-5 text-severity-orange"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg font-semibold",
                                    children: "Drought Monitor"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                new Date(data.lastUpdate).toLocaleTimeString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                        defaultValue: data.zones[0].id,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid grid-cols-3 w-full",
                                children: data.zones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: zone.id,
                                        className: "text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: zone.name.split(" ")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    }, zone.id, false, {
                                        fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            data.zones.map((zone)=>{
                                const config = SEVERITY_CONFIG[zone.severity];
                                const current = zone.last12Months[zone.last12Months.length - 1];
                                const spiStatus = getSPIStatus(current.spi);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: zone.id,
                                    className: "space-y-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-medium",
                                                                    children: zone.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground mt-0.5",
                                                            children: zone.country
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono text-xs", config.border, config.color),
                                                    children: [
                                                        zone.severity,
                                                        " - ",
                                                        config.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__["CloudRain"], {
                                                                    className: "h-3 w-3 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground uppercase",
                                                                    children: "SPI Index"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xl font-bold", spiStatus.color),
                                                            children: current.spi.toFixed(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] text-muted-foreground",
                                                            children: spiStatus.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                                    className: "h-3 w-3 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground uppercase",
                                                                    children: "Soil Moisture"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: [
                                                                current.soilMoisture,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-1 bg-muted rounded-full mt-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full rounded-full bg-blue-500 transition-all",
                                                                style: {
                                                                    width: `${current.soilMoisture}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"], {
                                                                    className: "h-3 w-3 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground uppercase",
                                                                    children: "Vegetation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: [
                                                                (current.vegetationHealth * 100).toFixed(0),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-1 bg-muted rounded-full mt-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full transition-all", current.vegetationHealth < 0.3 ? "bg-severity-red" : current.vegetationHealth < 0.5 ? "bg-severity-orange" : "bg-severity-green"),
                                                                style: {
                                                                    width: `${current.vegetationHealth * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                                    className: "h-3 w-3 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground uppercase",
                                                                    children: "Temperature"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: [
                                                                current.temperature,
                                                                "°C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] text-muted-foreground",
                                                            children: [
                                                                current.rainfall,
                                                                "mm rainfall"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-border bg-background/30 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                    className: "h-4 w-4 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium",
                                                                    children: "12-Month Drought Index"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "SPI - Standardized Precipitation Index"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-40 flex items-end justify-between gap-1",
                                                    children: zone.last12Months.map((month, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 flex flex-col items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative w-full flex justify-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute top-1/2 w-full h-px bg-muted-foreground/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                            lineNumber: 289,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full max-w-[20px] rounded-t transition-all", month.spi < -2.0 ? "bg-purple-500" : month.spi < -1.5 ? "bg-red-500" : month.spi < -1.0 ? "bg-orange-500" : month.spi < 0 ? "bg-yellow-500" : "bg-severity-green"),
                                                                            style: {
                                                                                height: `${Math.abs(month.spi) * 30}px`,
                                                                                marginTop: month.spi < 0 ? 'auto' : 0,
                                                                                marginBottom: month.spi >= 0 ? 'auto' : 0
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                            lineNumber: 290,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] text-muted-foreground font-mono",
                                                                    children: month.month
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-[10px] text-muted-foreground font-mono mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-purple-500",
                                                            children: "Exceptional (-2.5)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "Extreme (-2.0)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-500",
                                                            children: "Severe (-1.5)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-yellow-500",
                                                            children: "Moderate (-1.0)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-severity-green",
                                                            children: "Normal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-border bg-background/30 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium mb-3",
                                                    children: "3-Month Outlook"
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-xs mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-severity-green",
                                                                            children: "Improve"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                            lineNumber: 326,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                zone.forecastNext3Months.probabilityImprove,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                            lineNumber: 327,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-2 bg-muted rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full bg-severity-green rounded-full",
                                                                        style: {
                                                                            width: `${zone.forecastNext3Months.probabilityImprove}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-xs mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-severity-yellow",
                                                                            children: "Persist"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                zone.forecastNext3Months.probabilityPersist,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                            lineNumber: 339,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-2 bg-muted rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full bg-severity-yellow rounded-full",
                                                                        style: {
                                                                            width: `${zone.forecastNext3Months.probabilityPersist}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-xs mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-severity-red",
                                                                            children: "Worsen"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                            lineNumber: 350,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                zone.forecastNext3Months.probabilityWorsen,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                            lineNumber: 351,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-2 bg-muted rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full bg-severity-red rounded-full",
                                                                        style: {
                                                                            width: `${zone.forecastNext3Months.probabilityWorsen}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                        lineNumber: 354,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                            children: "Duration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold",
                                                            children: [
                                                                zone.duration,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-normal",
                                                                    children: "months"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 70
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                            children: "People Affected"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold",
                                                            children: [
                                                                (zone.populationAffected / 1000000).toFixed(1),
                                                                "M"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                            children: "Reservoir Level"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-bold", zone.waterReservoirLevel < 20 ? "text-severity-red" : zone.waterReservoirLevel < 40 ? "text-severity-orange" : "text-severity-green"),
                                                            children: [
                                                                zone.waterReservoirLevel,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, zone.id, true, {
                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md bg-severity-orange/10 border border-severity-orange/30 p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                    className: "h-4 w-4 text-severity-orange shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-severity-orange",
                                            children: "Regional Drought Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-severity-orange/80 mt-1",
                                            children: [
                                                data.zones.length,
                                                " drought zones monitored | ",
                                                (data.totalAffected / 1000000).toFixed(1),
                                                "M people affected |",
                                                " ",
                                                "Longest drought: ",
                                                Math.max(...data.zones.map((z)=>z.duration)),
                                                " months"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/visualizations/drought-monitor.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
}),
"[project]/jane_earth/components/visualizations/wildfire-tracker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WildfireTrackerVisualization",
    ()=>WildfireTrackerVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/wind.js [app-ssr] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-ssr] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/compass.js [app-ssr] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-ssr] (ecmascript) <export default as ArrowDownRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const MOCK_WILDFIRE_DATA = {
    lastUpdate: "2026-01-15T14:00:00Z",
    totalActive: 3,
    totalArea: 45200,
    fires: [
        {
            id: "fire-001",
            name: "Mount Kenya Forest Fire",
            country: "Kenya",
            startTime: "2026-01-12T08:30:00Z",
            cause: "lightning",
            status: "active",
            containment: 25,
            totalArea: 28500,
            personnel: 450,
            riskLevel: "extreme",
            history: [
                {
                    time: "2026-01-12T08:30:00Z",
                    lat: -0.15,
                    lon: 37.3,
                    intensity: 15,
                    spreadRate: 2.5,
                    windSpeed: 25,
                    windDirection: 120,
                    temperature: 28,
                    humidity: 35,
                    area: 120
                },
                {
                    time: "2026-01-12T20:00:00Z",
                    lat: -0.16,
                    lon: 37.32,
                    intensity: 45,
                    spreadRate: 4.2,
                    windSpeed: 32,
                    windDirection: 125,
                    temperature: 31,
                    humidity: 28,
                    area: 850
                },
                {
                    time: "2026-01-13T08:00:00Z",
                    lat: -0.18,
                    lon: 37.35,
                    intensity: 120,
                    spreadRate: 6.8,
                    windSpeed: 38,
                    windDirection: 130,
                    temperature: 34,
                    humidity: 22,
                    area: 3200
                },
                {
                    time: "2026-01-13T20:00:00Z",
                    lat: -0.21,
                    lon: 37.38,
                    intensity: 280,
                    spreadRate: 8.5,
                    windSpeed: 42,
                    windDirection: 135,
                    temperature: 36,
                    humidity: 18,
                    area: 8900
                },
                {
                    time: "2026-01-14T08:00:00Z",
                    lat: -0.25,
                    lon: 37.42,
                    intensity: 450,
                    spreadRate: 12.0,
                    windSpeed: 45,
                    windDirection: 140,
                    temperature: 38,
                    humidity: 15,
                    area: 15200
                },
                {
                    time: "2026-01-14T20:00:00Z",
                    lat: -0.30,
                    lon: 37.48,
                    intensity: 520,
                    spreadRate: 15.5,
                    windSpeed: 48,
                    windDirection: 145,
                    temperature: 40,
                    humidity: 12,
                    area: 22800
                },
                {
                    time: "2026-01-15T08:00:00Z",
                    lat: -0.36,
                    lon: 37.55,
                    intensity: 480,
                    spreadRate: 14.2,
                    windSpeed: 46,
                    windDirection: 142,
                    temperature: 39,
                    humidity: 14,
                    area: 28500
                }
            ],
            forecast: [
                {
                    time: "2026-01-15T14:00:00Z",
                    lat: -0.40,
                    lon: 37.62,
                    intensity: 550,
                    spreadRate: 16.5,
                    windSpeed: 50,
                    windDirection: 145,
                    temperature: 41,
                    humidity: 10,
                    area: 35200
                },
                {
                    time: "2026-01-15T20:00:00Z",
                    lat: -0.46,
                    lon: 37.70,
                    intensity: 620,
                    spreadRate: 18.0,
                    windSpeed: 52,
                    windDirection: 148,
                    temperature: 42,
                    humidity: 8,
                    area: 43800
                },
                {
                    time: "2026-01-16T08:00:00Z",
                    lat: -0.55,
                    lon: 37.80,
                    intensity: 580,
                    spreadRate: 15.8,
                    windSpeed: 48,
                    windDirection: 145,
                    temperature: 40,
                    humidity: 12,
                    area: 52000
                }
            ]
        },
        {
            id: "fire-002",
            name: "Cape Peninsula Fire",
            country: "South Africa",
            startTime: "2026-01-14T14:00:00Z",
            cause: "human",
            status: "active",
            containment: 45,
            totalArea: 8900,
            personnel: 280,
            riskLevel: "high",
            history: [
                {
                    time: "2026-01-14T14:00:00Z",
                    lat: -34.0,
                    lon: 18.4,
                    intensity: 25,
                    spreadRate: 1.8,
                    windSpeed: 35,
                    windDirection: 200,
                    temperature: 32,
                    humidity: 45,
                    area: 45
                },
                {
                    time: "2026-01-14T20:00:00Z",
                    lat: -34.02,
                    lon: 18.38,
                    intensity: 80,
                    spreadRate: 3.5,
                    windSpeed: 38,
                    windDirection: 205,
                    temperature: 33,
                    humidity: 40,
                    area: 380
                },
                {
                    time: "2026-01-15T08:00:00Z",
                    lat: -34.05,
                    lon: 18.35,
                    intensity: 180,
                    spreadRate: 5.2,
                    windSpeed: 42,
                    windDirection: 210,
                    temperature: 35,
                    humidity: 35,
                    area: 2100
                },
                {
                    time: "2026-01-15T14:00:00Z",
                    lat: -34.08,
                    lon: 18.32,
                    intensity: 220,
                    spreadRate: 6.0,
                    windSpeed: 45,
                    windDirection: 215,
                    temperature: 36,
                    humidity: 32,
                    area: 8900
                }
            ],
            forecast: [
                {
                    time: "2026-01-15T20:00:00Z",
                    lat: -34.10,
                    lon: 18.30,
                    intensity: 250,
                    spreadRate: 6.5,
                    windSpeed: 46,
                    windDirection: 215,
                    temperature: 37,
                    humidity: 30,
                    area: 11200
                },
                {
                    time: "2026-01-16T08:00:00Z",
                    lat: -34.12,
                    lon: 18.28,
                    intensity: 200,
                    spreadRate: 5.0,
                    windSpeed: 42,
                    windDirection: 210,
                    temperature: 35,
                    humidity: 38,
                    area: 12500
                },
                {
                    time: "2026-01-16T14:00:00Z",
                    lat: -34.13,
                    lon: 18.27,
                    intensity: 150,
                    spreadRate: 3.5,
                    windSpeed: 38,
                    windDirection: 205,
                    temperature: 33,
                    humidity: 45,
                    area: 13200
                }
            ]
        },
        {
            id: "fire-003",
            name: "Drakensberg Range Fire",
            country: "South Africa/Lesotho",
            startTime: "2026-01-10T06:00:00Z",
            cause: "lightning",
            status: "contained",
            containment: 85,
            totalArea: 7800,
            personnel: 150,
            riskLevel: "moderate",
            history: [
                {
                    time: "2026-01-10T06:00:00Z",
                    lat: -29.5,
                    lon: 29.3,
                    intensity: 30,
                    spreadRate: 2.0,
                    windSpeed: 20,
                    windDirection: 270,
                    temperature: 26,
                    humidity: 55,
                    area: 80
                },
                {
                    time: "2026-01-10T18:00:00Z",
                    lat: -29.52,
                    lon: 29.28,
                    intensity: 90,
                    spreadRate: 4.5,
                    windSpeed: 28,
                    windDirection: 275,
                    temperature: 30,
                    humidity: 40,
                    area: 650
                },
                {
                    time: "2026-01-11T06:00:00Z",
                    lat: -29.55,
                    lon: 29.25,
                    intensity: 200,
                    spreadRate: 6.0,
                    windSpeed: 35,
                    windDirection: 280,
                    temperature: 33,
                    humidity: 30,
                    area: 2100
                },
                {
                    time: "2026-01-11T18:00:00Z",
                    lat: -29.58,
                    lon: 29.22,
                    intensity: 280,
                    spreadRate: 7.5,
                    windSpeed: 40,
                    windDirection: 285,
                    temperature: 35,
                    humidity: 25,
                    area: 4500
                },
                {
                    time: "2026-01-12T06:00:00Z",
                    lat: -29.60,
                    lon: 29.20,
                    intensity: 250,
                    spreadRate: 5.5,
                    windSpeed: 32,
                    windDirection: 275,
                    temperature: 32,
                    humidity: 35,
                    area: 6200
                },
                {
                    time: "2026-01-13T06:00:00Z",
                    lat: -29.61,
                    lon: 29.19,
                    intensity: 150,
                    spreadRate: 3.0,
                    windSpeed: 25,
                    windDirection: 270,
                    temperature: 29,
                    humidity: 50,
                    area: 7400
                },
                {
                    time: "2026-01-15T14:00:00Z",
                    lat: -29.61,
                    lon: 29.19,
                    intensity: 80,
                    spreadRate: 1.5,
                    windSpeed: 18,
                    windDirection: 265,
                    temperature: 26,
                    humidity: 65,
                    area: 7800
                }
            ],
            forecast: [
                {
                    time: "2026-01-15T20:00:00Z",
                    lat: -29.61,
                    lon: 29.19,
                    intensity: 50,
                    spreadRate: 1.0,
                    windSpeed: 15,
                    windDirection: 260,
                    temperature: 24,
                    humidity: 75,
                    area: 7900
                },
                {
                    time: "2026-01-16T08:00:00Z",
                    lat: -29.61,
                    lon: 29.19,
                    intensity: 20,
                    spreadRate: 0.5,
                    windSpeed: 12,
                    windDirection: 255,
                    temperature: 22,
                    humidity: 85,
                    area: 7950
                },
                {
                    time: "2026-01-16T14:00:00Z",
                    lat: -29.61,
                    lon: 29.19,
                    intensity: 5,
                    spreadRate: 0.1,
                    windSpeed: 10,
                    windDirection: 250,
                    temperature: 21,
                    humidity: 90,
                    area: 7980
                }
            ]
        }
    ]
};
const RISK_CONFIG = {
    low: {
        label: "Low",
        color: "text-severity-green",
        bg: "bg-severity-green",
        border: "border-severity-green"
    },
    moderate: {
        label: "Moderate",
        color: "text-severity-yellow",
        bg: "bg-severity-yellow",
        border: "border-severity-yellow"
    },
    high: {
        label: "High",
        color: "text-severity-orange",
        bg: "bg-severity-orange",
        border: "border-severity-orange"
    },
    extreme: {
        label: "Extreme",
        color: "text-severity-red",
        bg: "bg-severity-red",
        border: "border-severity-red"
    }
};
function formatDuration(start) {
    const hours = Math.floor((Date.now() - new Date(start).getTime()) / (1000 * 60 * 60));
    if (hours < 24) return `${hours}h`;
    return `${Math.floor(hours / 24)}d ${hours % 24}h`;
}
function getTrendIcon(current, previous) {
    if (current > previous) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
        className: "h-4 w-4 text-severity-red"
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
        lineNumber: 155,
        columnNumber: 34
    }, this);
    if (current < previous) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
        className: "h-4 w-4 text-severity-green"
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
        lineNumber: 156,
        columnNumber: 34
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
        className: "h-4 w-4 text-muted-foreground"
    }, void 0, false, {
        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
        lineNumber: 157,
        columnNumber: 10
    }, this);
}
function WildfireTrackerVisualization() {
    const [selectedFire, setSelectedFire] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MOCK_WILDFIRE_DATA.fires[0].id);
    const data = MOCK_WILDFIRE_DATA;
    const fire = data.fires.find((f)=>f.id === selectedFire) || data.fires[0];
    const risk = RISK_CONFIG[fire.riskLevel];
    const current = fire.history[fire.history.length - 1];
    const previous = fire.history[fire.history.length - 2] || current;
    // Calculate spread direction for visualization
    const spreadAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (fire.history.length < 2) return 0;
        const start = fire.history[0];
        const end = fire.history[fire.history.length - 1];
        return Math.atan2(end.lon - start.lon, end.lat - start.lat) * (180 / Math.PI);
    }, [
        fire
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-card border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                    className: "h-5 w-5 text-severity-red"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg font-semibold",
                                    children: "Wildfire Tracker"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                new Date(data.lastUpdate).toLocaleTimeString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: selectedFire,
                        onValueChange: setSelectedFire,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid grid-cols-3 w-full",
                                children: data.fires.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: f.id,
                                        className: "text-xs relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: f.name.split(" ")[0]
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            f.status === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-severity-red animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, f.id, true, {
                                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            data.fires.map((f)=>{
                                const fRisk = RISK_CONFIG[f.riskLevel];
                                const fCurrent = f.history[f.history.length - 1];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: f.id,
                                    className: "space-y-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-medium",
                                                                    children: f.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground mt-0.5",
                                                            children: [
                                                                f.country,
                                                                " • Started ",
                                                                formatDuration(f.startTime),
                                                                " ago • ",
                                                                f.cause
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono text-xs", fRisk.border, fRisk.color),
                                                            children: [
                                                                fRisk.label,
                                                                " Risk"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: f.status === "active" ? "destructive" : "outline",
                                                            className: "text-xs",
                                                            children: f.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                            children: "Area Burned"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-bold",
                                                                    children: (fCurrent.area / 100).toFixed(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "km²"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 mt-0.5",
                                                            children: [
                                                                getTrendIcon(fCurrent.area, f.history[f.history.length - 2]?.area || fCurrent.area),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-muted-foreground",
                                                                    children: [
                                                                        "+",
                                                                        ((fCurrent.area - (f.history[f.history.length - 2]?.area || fCurrent.area)) / 100).toFixed(1),
                                                                        " km²/h"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                            children: "Fire Intensity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: fCurrent.intensity
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "MW radiative power"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                            children: "Spread Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-bold",
                                                                    children: fCurrent.spreadRate
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "km/h"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                            children: "Containment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xl font-bold", f.containment < 30 ? "text-severity-red" : f.containment < 60 ? "text-severity-orange" : f.containment < 90 ? "text-severity-yellow" : "text-severity-green"),
                                                            children: [
                                                                f.containment,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-1 bg-muted rounded-full mt-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full transition-all", f.containment < 30 ? "bg-severity-red" : f.containment < 60 ? "bg-severity-orange" : f.containment < 90 ? "bg-severity-yellow" : "bg-severity-green"),
                                                                style: {
                                                                    width: `${f.containment}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-border bg-background/30 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                                                    className: "h-4 w-4 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Fire Spread Visualization"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: [
                                                                "Wind: ",
                                                                fCurrent.windSpeed,
                                                                " km/h from ",
                                                                fCurrent.windDirection,
                                                                "°"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-48 bg-gradient-to-b from-slate-900/50 to-orange-950/20 rounded-md overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 400 200",
                                                            className: "w-full h-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                        id: "fireGrid",
                                                                        width: "40",
                                                                        height: "25",
                                                                        patternUnits: "userSpaceOnUse",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M 40 0 L 0 0 0 25",
                                                                            fill: "none",
                                                                            stroke: "rgba(255,255,255,0.03)",
                                                                            strokeWidth: "1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                            lineNumber: 306,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "400",
                                                                    height: "200",
                                                                    fill: "url(#fireGrid)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 23
                                                                }, this),
                                                                f.history.map((point, i)=>{
                                                                    const size = Math.sqrt(point.area) * 0.5;
                                                                    const opacity = (i + 1) / f.history.length * 0.3;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                        cx: 200 + (point.lon - f.history[0].lon) * 500,
                                                                        cy: 100 + (f.history[0].lat - point.lat) * 500,
                                                                        rx: size,
                                                                        ry: size * 0.7,
                                                                        fill: "rgba(239, 68, 68, 0.2)",
                                                                        stroke: "none"
                                                                    }, `hist-${i}`, false, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                        lineNumber: 316,
                                                                        columnNumber: 27
                                                                    }, this);
                                                                }),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                    cx: 200 + (fCurrent.lon - f.history[0].lon) * 500,
                                                                    cy: 100 + (f.history[0].lat - fCurrent.lat) * 500,
                                                                    rx: Math.sqrt(fCurrent.area) * 0.5,
                                                                    ry: Math.sqrt(fCurrent.area) * 0.35,
                                                                    fill: "url(#fireGradient)",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2",
                                                                    transform: `rotate(${fCurrent.windDirection - 90}, ${200 + (fCurrent.lon - f.history[0].lon) * 500}, ${100 + (f.history[0].lat - fCurrent.lat) * 500})`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 23
                                                                }, this),
                                                                f.forecast.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                        cx: 200 + (point.lon - f.history[0].lon) * 500,
                                                                        cy: 100 + (f.history[0].lat - point.lat) * 500,
                                                                        rx: Math.sqrt(point.area) * 0.5,
                                                                        ry: Math.sqrt(point.area) * 0.35,
                                                                        fill: "none",
                                                                        stroke: "#f97316",
                                                                        strokeWidth: "1",
                                                                        strokeDasharray: "4 4",
                                                                        opacity: 0.6 - i * 0.15
                                                                    }, `forecast-${i}`, false, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 25
                                                                    }, this)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                    transform: `translate(350, 30) rotate(${fCurrent.windDirection})`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "0",
                                                                            y1: "0",
                                                                            x2: "25",
                                                                            y2: "0",
                                                                            stroke: "rgba(255,255,255,0.5)",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                            lineNumber: 358,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                            points: "25,0 20,-5 20,5",
                                                                            fill: "rgba(255,255,255,0.5)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                            lineNumber: 359,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "10",
                                                                    y: "185",
                                                                    fill: "rgba(255,255,255,0.5)",
                                                                    fontSize: "9",
                                                                    children: "Current"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                    cx: "50",
                                                                    cy: "182",
                                                                    rx: "8",
                                                                    ry: "6",
                                                                    fill: "url(#fireGradient)",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 364,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "70",
                                                                    y: "185",
                                                                    fill: "rgba(255,255,255,0.5)",
                                                                    fontSize: "9",
                                                                    children: "Forecast"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                    cx: "110",
                                                                    cy: "182",
                                                                    rx: "8",
                                                                    ry: "6",
                                                                    fill: "none",
                                                                    stroke: "#f97316",
                                                                    strokeWidth: "1",
                                                                    strokeDasharray: "4 4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                                        id: "fireGradient",
                                                                        cx: "50%",
                                                                        cy: "50%",
                                                                        r: "50%",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "0%",
                                                                                stopColor: "#ef4444",
                                                                                stopOpacity: "0.8"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                                lineNumber: 370,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "50%",
                                                                                stopColor: "#f97316",
                                                                                stopOpacity: "0.4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                                lineNumber: 371,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "100%",
                                                                                stopColor: "#f97316",
                                                                                stopOpacity: "0.1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                                lineNumber: 372,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 368,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                                                        className: "h-3 w-3 text-white/70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                        lineNumber: 380,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-white/80",
                                                                        children: [
                                                                            fCurrent.windSpeed,
                                                                            " km/h"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                        lineNumber: 381,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-border bg-background/30 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-4 w-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "Fire Intensity History"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-32",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 300 100",
                                                        className: "w-full h-full",
                                                        preserveAspectRatio: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "25",
                                                                x2: "300",
                                                                y2: "25",
                                                                stroke: "rgba(255,255,255,0.1)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "50",
                                                                x2: "300",
                                                                y2: "50",
                                                                stroke: "rgba(255,255,255,0.1)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "75",
                                                                x2: "300",
                                                                y2: "75",
                                                                stroke: "rgba(255,255,255,0.1)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: `M 0 ${100 - f.history[0].intensity / 700 * 100}
                            ${f.history.slice(1).map((p, i)=>`L ${(i + 1) * (300 / (f.history.length - 1))} ${100 - p.intensity / 700 * 100}`).join(' ')}
                            L 300 100 L 0 100 Z`,
                                                                fill: "url(#intensityGradient)",
                                                                opacity: "0.3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: `M 0 ${100 - f.history[0].intensity / 700 * 100}
                            ${f.history.slice(1).map((p, i)=>`L ${(i + 1) * (300 / (f.history.length - 1))} ${100 - p.intensity / 700 * 100}`).join(' ')}`,
                                                                fill: "none",
                                                                stroke: "#ef4444",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 23
                                                            }, this),
                                                            f.forecast.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: `M ${300} ${100 - f.history[f.history.length - 1].intensity / 700 * 100}
                              ${f.forecast.map((p, i)=>`L ${300 + (i + 1) * (50 / f.forecast.length)} ${100 - p.intensity / 700 * 100}`).join(' ')}`,
                                                                fill: "none",
                                                                stroke: "#f97316",
                                                                strokeWidth: "2",
                                                                strokeDasharray: "4 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                    id: "intensityGradient",
                                                                    x1: "0",
                                                                    y1: "0",
                                                                    x2: "0",
                                                                    y2: "1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                            offset: "0%",
                                                                            stopColor: "#ef4444",
                                                                            stopOpacity: "0.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                            lineNumber: 439,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                            offset: "100%",
                                                                            stopColor: "#ef4444",
                                                                            stopOpacity: "0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                lineNumber: 437,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-[10px] text-muted-foreground font-mono mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Start"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Current"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-500",
                                                            children: "Forecast"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                                    className: "h-3 w-3 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground uppercase",
                                                                    children: "Temperature"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: [
                                                                fCurrent.temperature,
                                                                "°C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                                    className: "h-3 w-3 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground uppercase",
                                                                    children: "Humidity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: [
                                                                fCurrent.humidity,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-background/50 border border-border p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                            children: "Personnel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold",
                                                            children: f.personnel
                                                        }, void 0, false, {
                                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, f.id, true, {
                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md bg-severity-red/10 border border-severity-red/30 p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "h-4 w-4 text-severity-red shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-severity-red",
                                            children: "Active Fire Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-severity-red/80 mt-1",
                                            children: [
                                                data.totalActive,
                                                " active fires | ",
                                                (data.totalArea / 100).toFixed(0),
                                                " km² burned |",
                                                " ",
                                                data.fires.reduce((acc, f)=>acc + f.personnel, 0).toLocaleString(),
                                                " personnel deployed"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/components/visualizations/wildfire-tracker.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
}),
"[project]/jane_earth/components/visualizations/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$cyclone$2d$track$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/cyclone-track.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$flood$2d$monitor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/flood-monitor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$drought$2d$monitor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/drought-monitor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$wildfire$2d$tracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/wildfire-tracker.tsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/jane_earth/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/dashboard/dashboard-shell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$alert$2d$detail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/dashboard/alert-detail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$hooks$2f$use$2d$afro$2d$storm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/hooks/use-afro-storm.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$cyclone$2d$track$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/cyclone-track.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$flood$2d$monitor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/flood-monitor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$drought$2d$monitor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/drought-monitor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$wildfire$2d$tracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jane_earth/components/visualizations/wildfire-tracker.tsx [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
const AfricaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/jane_earth/components/dashboard/africa-map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full bg-card",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground font-mono",
                        children: "Loading Africa Threat Map..."
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/app/page.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/jane_earth/app/page.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
function MapPage() {
    const [selectedAlert, setSelectedAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: alertsData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$hooks$2f$use$2d$afro$2d$storm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAlerts"])();
    const alerts = alertsData?.alerts || [];
    const alertCounts = {
        red: alerts.filter((a)=>a.severity === "RED").length,
        orange: alerts.filter((a)=>a.severity === "ORANGE").length,
        yellow: alerts.filter((a)=>a.severity === "YELLOW").length,
        green: alerts.filter((a)=>a.severity === "GREEN").length
    };
    const handleAlertClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((alert)=>{
        setSelectedAlert(alert);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardShell"], {
        alertCounts: alertCounts,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 z-[500] flex items-center gap-2",
                        children: [
                            alertCounts.red > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-severity-red/20 border border-severity-red/30 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-severity-red animate-severity-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/app/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-severity-red font-mono",
                                        children: [
                                            alertCounts.red,
                                            " RED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/app/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/app/page.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            alertCounts.orange > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-severity-orange/20 border border-severity-orange/30 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-severity-orange"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/app/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-severity-orange font-mono",
                                        children: [
                                            alertCounts.orange,
                                            " ORG"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/app/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/app/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            alertCounts.yellow > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-severity-yellow/20 border border-severity-yellow/30 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-severity-yellow"
                                    }, void 0, false, {
                                        fileName: "[project]/jane_earth/app/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-severity-yellow font-mono",
                                        children: [
                                            alertCounts.yellow,
                                            " YLW"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/jane_earth/app/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jane_earth/app/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-background/70 border border-border backdrop-blur-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-mono text-muted-foreground",
                                    children: [
                                        alerts.length,
                                        " total"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/app/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/jane_earth/app/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jane_earth/app/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AfricaMap, {
                        alerts: alerts,
                        onAlertClick: handleAlertClick,
                        borderless: true
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 z-[500] max-h-[45vh] overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card/95 backdrop-blur-md border-t border-border p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold text-foreground mb-3 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full bg-primary animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/jane_earth/app/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        "Live Hazard Tracking & Monitoring"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/app/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 xl:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$cyclone$2d$track$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CycloneTrackVisualization"], {}, void 0, false, {
                                            fileName: "[project]/jane_earth/app/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$flood$2d$monitor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloodMonitorVisualization"], {}, void 0, false, {
                                            fileName: "[project]/jane_earth/app/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$drought$2d$monitor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DroughtMonitorVisualization"], {}, void 0, false, {
                                            fileName: "[project]/jane_earth/app/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$visualizations$2f$wildfire$2d$tracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WildfireTrackerVisualization"], {}, void 0, false, {
                                            fileName: "[project]/jane_earth/app/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jane_earth/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jane_earth/app/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/jane_earth/app/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jane_earth/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            selectedAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jane_earth$2f$components$2f$dashboard$2f$alert$2d$detail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDetail"], {
                alert: selectedAlert,
                onClose: ()=>setSelectedAlert(null)
            }, void 0, false, {
                fileName: "[project]/jane_earth/app/page.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/jane_earth/app/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5253bcc3._.js.map