(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/jane_earth/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/befa4_leaflet_dist_leaflet-src_485b3ba1.js",
  "static/chunks/befa4_leaflet_dist_leaflet-src_8b6b6e5f.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/jane_earth/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
    });
});
}),
"[project]/jane_earth/node_modules/leaflet/dist/leaflet.css [app-client] (css, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/befa4_leaflet_dist_leaflet_7d57296a.css",
    "included": [
      "[project]/jane_earth/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/befa4_leaflet_dist_leaflet_css_44f214f8._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {});
});
}),
]);