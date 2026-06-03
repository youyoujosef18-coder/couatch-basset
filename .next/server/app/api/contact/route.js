"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = import("pg");;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5CJoe%5CDesktop%5Cfitnesss%5Cfitness-coach5%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJoe%5CDesktop%5Cfitnesss%5Cfitness-coach5&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5CJoe%5CDesktop%5Cfitnesss%5Cfitness-coach5%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJoe%5CDesktop%5Cfitnesss%5Cfitness-coach5&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Joe_Desktop_fitnesss_fitness_coach5_src_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/contact/route.ts */ \"(rsc)/./src/app/api/contact/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([C_Users_Joe_Desktop_fitnesss_fitness_coach5_src_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\nC_Users_Joe_Desktop_fitnesss_fitness_coach5_src_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Joe\\\\Desktop\\\\fitnesss\\\\fitness-coach5\\\\src\\\\app\\\\api\\\\contact\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Joe_Desktop_fitnesss_fitness_coach5_src_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/contact/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNKb2UlNUNEZXNrdG9wJTVDZml0bmVzc3MlNUNmaXRuZXNzLWNvYWNoNSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDSm9lJTVDRGVza3RvcCU1Q2ZpdG5lc3NzJTVDZml0bmVzcy1jb2FjaDUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZILHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml0bmVzcy1jb2FjaC8/M2VmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxKb2VcXFxcRGVza3RvcFxcXFxmaXRuZXNzc1xcXFxmaXRuZXNzLWNvYWNoNVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjb250YWN0XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb250YWN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29udGFjdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29udGFjdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEpvZVxcXFxEZXNrdG9wXFxcXGZpdG5lc3NzXFxcXGZpdG5lc3MtY29hY2g1XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvbnRhY3RcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NvbnRhY3Qvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5CJoe%5CDesktop%5Cfitnesss%5Cfitness-coach5%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJoe%5CDesktop%5Cfitnesss%5Cfitness-coach5&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"(rsc)/./node_modules/dotenv/config.js\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_adapter_pg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/adapter-pg */ \"(rsc)/./node_modules/@prisma/adapter-pg/dist/index.mjs\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prisma_adapter_pg__WEBPACK_IMPORTED_MODULE_2__]);\n_prisma_adapter_pg__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst connectionString = process.env.DATABASE_URL;\nif (!connectionString) {\n    throw new Error(\"DATABASE_URL is not set. Run 'prisma postgres link' first.\");\n}\nconst adapter = new _prisma_adapter_pg__WEBPACK_IMPORTED_MODULE_2__.PrismaPg({\n    connectionString\n});\n// Singleton — reuses one client across hot-reloads in Next.js dev\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient({\n    adapter\n});\nif (true) globalForPrisma.prisma = prisma;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQjtBQUMwQjtBQUNIO0FBRTdDLE1BQU1FLG1CQUFtQkMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0FBRWpELElBQUksQ0FBQ0gsa0JBQWtCO0lBQ3JCLE1BQU0sSUFBSUksTUFBTTtBQUNsQjtBQUVBLE1BQU1DLFVBQVUsSUFBSVAsd0RBQVFBLENBQUM7SUFBRUU7QUFBaUI7QUFFaEQsa0VBQWtFO0FBQ2xFLE1BQU1NLGtCQUFrQkM7QUFDakIsTUFBTUMsU0FBWUYsZ0JBQWdCRSxNQUFNLElBQUksSUFBSVQsd0RBQVlBLENBQUM7SUFBRU07QUFBUSxHQUFFO0FBQ2hGLElBQUlKLElBQXFDLEVBQUVLLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpdG5lc3MtY29hY2gvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiXG5pbXBvcnQgeyBQcmlzbWFQZyB9ICAgIGZyb20gXCJAcHJpc21hL2FkYXB0ZXItcGdcIlxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgY29ubmVjdGlvblN0cmluZyA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCFcblxuaWYgKCFjb25uZWN0aW9uU3RyaW5nKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkRBVEFCQVNFX1VSTCBpcyBub3Qgc2V0LiBSdW4gJ3ByaXNtYSBwb3N0Z3JlcyBsaW5rJyBmaXJzdC5cIilcbn1cblxuY29uc3QgYWRhcHRlciA9IG5ldyBQcmlzbWFQZyh7IGNvbm5lY3Rpb25TdHJpbmcgfSlcblxuLy8gU2luZ2xldG9uIOKAlCByZXVzZXMgb25lIGNsaWVudCBhY3Jvc3MgaG90LXJlbG9hZHMgaW4gTmV4dC5qcyBkZXZcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7IHByaXNtYTogUHJpc21hQ2xpZW50IH1cbmV4cG9ydCBjb25zdCBwcmlzbWEgICAgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoeyBhZGFwdGVyIH0pXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hXG4iXSwibmFtZXMiOlsiUHJpc21hUGciLCJQcmlzbWFDbGllbnQiLCJjb25uZWN0aW9uU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsIkVycm9yIiwiYWRhcHRlciIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/contact/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/contact/route.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/ZodError.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/email */ \"(rsc)/./src/lib/email.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_prisma__WEBPACK_IMPORTED_MODULE_1__, _lib_email__WEBPACK_IMPORTED_MODULE_2__]);\n([_lib_prisma__WEBPACK_IMPORTED_MODULE_1__, _lib_email__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst schema = zod__WEBPACK_IMPORTED_MODULE_3__.object({\n    fullName: zod__WEBPACK_IMPORTED_MODULE_3__.string().min(2, \"Name required\"),\n    email: zod__WEBPACK_IMPORTED_MODULE_3__.string().email(\"Invalid email\"),\n    whatsapp: zod__WEBPACK_IMPORTED_MODULE_3__.string().min(8, \"WhatsApp required\"),\n    message: zod__WEBPACK_IMPORTED_MODULE_3__.string().min(10, \"Message too short\"),\n    instagramLink: zod__WEBPACK_IMPORTED_MODULE_3__.string().optional()\n});\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const data = schema.parse(body);\n        const lead = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.lead.create({\n            data\n        });\n        // Track analytics\n        const today = new Date().toISOString().split(\"T\")[0];\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.pageView.upsert({\n            where: {\n                date: `lead-${today}`\n            },\n            update: {\n                count: {\n                    increment: 1\n                }\n            },\n            create: {\n                date: `lead-${today}`,\n                count: 1\n            }\n        }).catch(()=>{});\n        await (0,_lib_email__WEBPACK_IMPORTED_MODULE_2__.sendLeadEmail)(lead);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            id: lead.id\n        });\n    } catch (e) {\n        if (e instanceof zod__WEBPACK_IMPORTED_MODULE_4__.ZodError) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e.errors[0].message\n        }, {\n            status: 422\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb250YWN0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNoQztBQUNzQjtBQUNEO0FBRTVDLE1BQU1JLFNBQVNILHVDQUFRLENBQUM7SUFDdEJLLFVBQWVMLHVDQUFRLEdBQUdPLEdBQUcsQ0FBQyxHQUFHO0lBQ2pDQyxPQUFlUix1Q0FBUSxHQUFHUSxLQUFLLENBQUM7SUFDaENDLFVBQWVULHVDQUFRLEdBQUdPLEdBQUcsQ0FBQyxHQUFHO0lBQ2pDRyxTQUFlVix1Q0FBUSxHQUFHTyxHQUFHLENBQUMsSUFBSTtJQUNsQ0ksZUFBZVgsdUNBQVEsR0FBR1ksUUFBUTtBQUNwQztBQUVPLGVBQWVDLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsTUFBTUMsT0FBT2QsT0FBT2UsS0FBSyxDQUFDSDtRQUUxQixNQUFNSSxPQUFPLE1BQU1sQiwrQ0FBTUEsQ0FBQ2tCLElBQUksQ0FBQ0MsTUFBTSxDQUFDO1lBQUVIO1FBQUs7UUFFN0Msa0JBQWtCO1FBQ2xCLE1BQU1JLFFBQVEsSUFBSUMsT0FBT0MsV0FBVyxHQUFHQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEQsTUFBTXZCLCtDQUFNQSxDQUFDd0IsUUFBUSxDQUFDQyxNQUFNLENBQUM7WUFDM0JDLE9BQVE7Z0JBQUVDLE1BQU0sQ0FBQyxLQUFLLEVBQUVQLE1BQU0sQ0FBQztZQUFDO1lBQ2hDUSxRQUFRO2dCQUFFQyxPQUFPO29CQUFFQyxXQUFXO2dCQUFFO1lBQUU7WUFDbENYLFFBQVE7Z0JBQUVRLE1BQU0sQ0FBQyxLQUFLLEVBQUVQLE1BQU0sQ0FBQztnQkFBRVMsT0FBTztZQUFFO1FBQzVDLEdBQUdFLEtBQUssQ0FBQyxLQUFPO1FBRWhCLE1BQU05Qix5REFBYUEsQ0FBQ2lCO1FBRXBCLE9BQU9wQixxREFBWUEsQ0FBQ2lCLElBQUksQ0FBQztZQUFFaUIsU0FBUztZQUFNQyxJQUFJZixLQUFLZSxFQUFFO1FBQUM7SUFDeEQsRUFBRSxPQUFPQyxHQUFHO1FBQ1YsSUFBSUEsYUFBYW5DLHlDQUFVLEVBQ3pCLE9BQU9ELHFEQUFZQSxDQUFDaUIsSUFBSSxDQUFDO1lBQUVxQixPQUFPRixFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDNUIsT0FBTztRQUFDLEdBQUc7WUFBRTZCLFFBQVE7UUFBSTtRQUN6RSxPQUFPeEMscURBQVlBLENBQUNpQixJQUFJLENBQUM7WUFBRXFCLE9BQU87UUFBZSxHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUNwRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml0bmVzcy1jb2FjaC8uL3NyYy9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHM/MDIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuaW1wb3J0IHsgcHJpc21hIH0gICAgICAgICBmcm9tICdAL2xpYi9wcmlzbWEnXG5pbXBvcnQgeyBzZW5kTGVhZEVtYWlsIH0gIGZyb20gJ0AvbGliL2VtYWlsJ1xuXG5jb25zdCBzY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGZ1bGxOYW1lOiAgICAgIHouc3RyaW5nKCkubWluKDIsICdOYW1lIHJlcXVpcmVkJyksXG4gIGVtYWlsOiAgICAgICAgIHouc3RyaW5nKCkuZW1haWwoJ0ludmFsaWQgZW1haWwnKSxcbiAgd2hhdHNhcHA6ICAgICAgei5zdHJpbmcoKS5taW4oOCwgJ1doYXRzQXBwIHJlcXVpcmVkJyksXG4gIG1lc3NhZ2U6ICAgICAgIHouc3RyaW5nKCkubWluKDEwLCAnTWVzc2FnZSB0b28gc2hvcnQnKSxcbiAgaW5zdGFncmFtTGluazogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpXG4gICAgY29uc3QgZGF0YSA9IHNjaGVtYS5wYXJzZShib2R5KVxuXG4gICAgY29uc3QgbGVhZCA9IGF3YWl0IHByaXNtYS5sZWFkLmNyZWF0ZSh7IGRhdGEgfSlcblxuICAgIC8vIFRyYWNrIGFuYWx5dGljc1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICBhd2FpdCBwcmlzbWEucGFnZVZpZXcudXBzZXJ0KHtcbiAgICAgIHdoZXJlOiAgeyBkYXRlOiBgbGVhZC0ke3RvZGF5fWAgfSxcbiAgICAgIHVwZGF0ZTogeyBjb3VudDogeyBpbmNyZW1lbnQ6IDEgfSB9LFxuICAgICAgY3JlYXRlOiB7IGRhdGU6IGBsZWFkLSR7dG9kYXl9YCwgY291bnQ6IDEgfSxcbiAgICB9KS5jYXRjaCgoKSA9PiB7fSlcblxuICAgIGF3YWl0IHNlbmRMZWFkRW1haWwobGVhZClcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGlkOiBsZWFkLmlkIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIHouWm9kRXJyb3IpXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZS5lcnJvcnNbMF0ubWVzc2FnZSB9LCB7IHN0YXR1czogNDIyIH0pXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdTZXJ2ZXIgZXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInoiLCJwcmlzbWEiLCJzZW5kTGVhZEVtYWlsIiwic2NoZW1hIiwib2JqZWN0IiwiZnVsbE5hbWUiLCJzdHJpbmciLCJtaW4iLCJlbWFpbCIsIndoYXRzYXBwIiwibWVzc2FnZSIsImluc3RhZ3JhbUxpbmsiLCJvcHRpb25hbCIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsImRhdGEiLCJwYXJzZSIsImxlYWQiLCJjcmVhdGUiLCJ0b2RheSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwicGFnZVZpZXciLCJ1cHNlcnQiLCJ3aGVyZSIsImRhdGUiLCJ1cGRhdGUiLCJjb3VudCIsImluY3JlbWVudCIsImNhdGNoIiwic3VjY2VzcyIsImlkIiwiZSIsIlpvZEVycm9yIiwiZXJyb3IiLCJlcnJvcnMiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/contact/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/email.ts":
/*!**************************!*\
  !*** ./src/lib/email.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendLeadEmail: () => (/* binding */ sendLeadEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prisma__WEBPACK_IMPORTED_MODULE_1__]);\n_prisma__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function getAdminEmail() {\n    try {\n        const s = await _prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.siteSetting.findUnique({\n            where: {\n                key: \"admin_email\"\n            }\n        });\n        return s?.value ?? process.env.ADMIN_EMAIL ?? \"coach@lounissi.dz\";\n    } catch  {\n        return process.env.ADMIN_EMAIL ?? \"coach@lounissi.dz\";\n    }\n}\nfunction getTransporter() {\n    return nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n        host: process.env.SMTP_HOST ?? \"smtp.gmail.com\",\n        port: parseInt(process.env.SMTP_PORT ?? \"587\"),\n        secure: parseInt(process.env.SMTP_PORT ?? \"587\") === 465,\n        auth: {\n            user: process.env.SMTP_USER,\n            pass: process.env.SMTP_PASSWORD\n        }\n    });\n}\nasync function sendLeadEmail(lead) {\n    const to = await getAdminEmail();\n    const html = `\n<!DOCTYPE html><html><head><style>\nbody{font-family:Arial,sans-serif;background:#0d0d0d;color:#f5f5f5;margin:0;padding:0}\n.wrapper{max-width:600px;margin:0 auto;padding:32px 16px}\n.card{background:#111;border:1px solid rgba(212,168,80,0.3);border-radius:16px;overflow:hidden}\n.header{background:linear-gradient(135deg,#D4A850,#A07828);padding:32px;text-align:center}\n.header h1{color:#000;font-size:22px;font-weight:900;margin:0}\n.body{padding:28px}\n.row{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #1a1a1a;font-size:14px}\n.label{color:#888}.value{color:#f5f5f5;font-weight:600}\n.msg{background:#1a1a1a;border-radius:10px;padding:16px;margin-top:16px;font-size:14px;line-height:1.6;color:#ccc}\n.footer{text-align:center;padding:20px;color:#555;font-size:12px}\n</style></head><body>\n<div class=\"wrapper\">\n  <div class=\"card\">\n    <div class=\"header\"><h1>🏋️ New Lead — Lounissi Fitness</h1></div>\n    <div class=\"body\">\n      <div class=\"row\"><span class=\"label\">Name</span><span class=\"value\">${lead.fullName}</span></div>\n      <div class=\"row\"><span class=\"label\">Email</span><span class=\"value\">${lead.email}</span></div>\n      <div class=\"row\"><span class=\"label\">WhatsApp</span><span class=\"value\">${lead.whatsapp}</span></div>\n      ${lead.instagramLink ? `<div class=\"row\"><span class=\"label\">Instagram</span><span class=\"value\">${lead.instagramLink}</span></div>` : \"\"}\n      <p style=\"margin:20px 0 8px;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px\">Message</p>\n      <div class=\"msg\">${lead.message}</div>\n    </div>\n  </div>\n  <div class=\"footer\">Lounissi Abdelbasset Fitness Coach · ${new Date().toLocaleDateString(\"fr-DZ\")}</div>\n</div></body></html>`;\n    try {\n        await getTransporter().sendMail({\n            from: process.env.SMTP_FROM,\n            to,\n            subject: `🔥 New Lead: ${lead.fullName}`,\n            html\n        });\n        return {\n            success: true\n        };\n    } catch (e) {\n        console.error(\"Email error:\", e);\n        return {\n            success: false\n        };\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2VtYWlsLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtQztBQUNGO0FBRWpDLGVBQWVFO0lBQ2IsSUFBSTtRQUNGLE1BQU1DLElBQUksTUFBTUYsMkNBQU1BLENBQUNHLFdBQVcsQ0FBQ0MsVUFBVSxDQUFDO1lBQUVDLE9BQU87Z0JBQUVDLEtBQUs7WUFBYztRQUFFO1FBQzlFLE9BQU9KLEdBQUdLLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO0lBQ2hELEVBQUUsT0FBTTtRQUNOLE9BQU9GLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO0lBQ3BDO0FBQ0Y7QUFFQSxTQUFTQztJQUNQLE9BQU9aLHVEQUEwQixDQUFDO1FBQ2hDYyxNQUFRTCxRQUFRQyxHQUFHLENBQUNLLFNBQVMsSUFBTTtRQUNuQ0MsTUFBUUMsU0FBU1IsUUFBUUMsR0FBRyxDQUFDUSxTQUFTLElBQUk7UUFDMUNDLFFBQVFGLFNBQVNSLFFBQVFDLEdBQUcsQ0FBQ1EsU0FBUyxJQUFJLFdBQVc7UUFDckRFLE1BQVE7WUFBRUMsTUFBTVosUUFBUUMsR0FBRyxDQUFDWSxTQUFTO1lBQUVDLE1BQU1kLFFBQVFDLEdBQUcsQ0FBQ2MsYUFBYTtRQUFDO0lBQ3pFO0FBQ0Y7QUFFTyxlQUFlQyxjQUFjQyxJQUVuQztJQUNDLE1BQU1DLEtBQUssTUFBTXpCO0lBQ2pCLE1BQU0wQixPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBFQWlCMEQsRUFBRUYsS0FBS0csUUFBUSxDQUFDOzJFQUNmLEVBQUVILEtBQUtJLEtBQUssQ0FBQzs4RUFDVixFQUFFSixLQUFLSyxRQUFRLENBQUM7TUFDeEYsRUFBRUwsS0FBS00sYUFBYSxHQUFHLENBQUMseUVBQXlFLEVBQUVOLEtBQUtNLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHOzt1QkFFekgsRUFBRU4sS0FBS08sT0FBTyxDQUFDOzs7MkRBR3FCLEVBQUUsSUFBSUMsT0FBT0Msa0JBQWtCLENBQUMsU0FBUztvQkFDaEYsQ0FBQztJQUNuQixJQUFJO1FBQ0YsTUFBTXZCLGlCQUFpQndCLFFBQVEsQ0FBQztZQUFFQyxNQUFNNUIsUUFBUUMsR0FBRyxDQUFDNEIsU0FBUztZQUFFWDtZQUFJWSxTQUFTLENBQUMsYUFBYSxFQUFFYixLQUFLRyxRQUFRLENBQUMsQ0FBQztZQUFFRDtRQUFLO1FBQ2xILE9BQU87WUFBRVksU0FBUztRQUFLO0lBQ3pCLEVBQUUsT0FBT0MsR0FBRztRQUNWQyxRQUFRQyxLQUFLLENBQUMsZ0JBQWdCRjtRQUM5QixPQUFPO1lBQUVELFNBQVM7UUFBTTtJQUMxQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml0bmVzcy1jb2FjaC8uL3NyYy9saWIvZW1haWwudHM/NGMxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi9wcmlzbWEnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFkbWluRW1haWwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzID0gYXdhaXQgcHJpc21hLnNpdGVTZXR0aW5nLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBrZXk6ICdhZG1pbl9lbWFpbCcgfSB9KVxuICAgIHJldHVybiBzPy52YWx1ZSA/PyBwcm9jZXNzLmVudi5BRE1JTl9FTUFJTCA/PyAnY29hY2hAbG91bmlzc2kuZHonXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5BRE1JTl9FTUFJTCA/PyAnY29hY2hAbG91bmlzc2kuZHonXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNwb3J0ZXIoKSB7XG4gIHJldHVybiBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgaG9zdDogICBwcm9jZXNzLmVudi5TTVRQX0hPU1QgICA/PyAnc210cC5nbWFpbC5jb20nLFxuICAgIHBvcnQ6ICAgcGFyc2VJbnQocHJvY2Vzcy5lbnYuU01UUF9QT1JUID8/ICc1ODcnKSxcbiAgICBzZWN1cmU6IHBhcnNlSW50KHByb2Nlc3MuZW52LlNNVFBfUE9SVCA/PyAnNTg3JykgPT09IDQ2NSxcbiAgICBhdXRoOiAgIHsgdXNlcjogcHJvY2Vzcy5lbnYuU01UUF9VU0VSLCBwYXNzOiBwcm9jZXNzLmVudi5TTVRQX1BBU1NXT1JEIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTGVhZEVtYWlsKGxlYWQ6IHtcbiAgZnVsbE5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZzsgd2hhdHNhcHA6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nOyBpbnN0YWdyYW1MaW5rPzogc3RyaW5nIHwgbnVsbFxufSkge1xuICBjb25zdCB0byA9IGF3YWl0IGdldEFkbWluRW1haWwoKVxuICBjb25zdCBodG1sID0gYFxuPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PHN0eWxlPlxuYm9keXtmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO2JhY2tncm91bmQ6IzBkMGQwZDtjb2xvcjojZjVmNWY1O21hcmdpbjowO3BhZGRpbmc6MH1cbi53cmFwcGVye21heC13aWR0aDo2MDBweDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MzJweCAxNnB4fVxuLmNhcmR7YmFja2dyb3VuZDojMTExO2JvcmRlcjoxcHggc29saWQgcmdiYSgyMTIsMTY4LDgwLDAuMyk7Ym9yZGVyLXJhZGl1czoxNnB4O292ZXJmbG93OmhpZGRlbn1cbi5oZWFkZXJ7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCNENEE4NTAsI0EwNzgyOCk7cGFkZGluZzozMnB4O3RleHQtYWxpZ246Y2VudGVyfVxuLmhlYWRlciBoMXtjb2xvcjojMDAwO2ZvbnQtc2l6ZToyMnB4O2ZvbnQtd2VpZ2h0OjkwMDttYXJnaW46MH1cbi5ib2R5e3BhZGRpbmc6MjhweH1cbi5yb3d7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MTJweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxYTFhMWE7Zm9udC1zaXplOjE0cHh9XG4ubGFiZWx7Y29sb3I6Izg4OH0udmFsdWV7Y29sb3I6I2Y1ZjVmNTtmb250LXdlaWdodDo2MDB9XG4ubXNne2JhY2tncm91bmQ6IzFhMWExYTtib3JkZXItcmFkaXVzOjEwcHg7cGFkZGluZzoxNnB4O21hcmdpbi10b3A6MTZweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjY7Y29sb3I6I2NjY31cbi5mb290ZXJ7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMHB4O2NvbG9yOiM1NTU7Zm9udC1zaXplOjEycHh9XG48L3N0eWxlPjwvaGVhZD48Ym9keT5cbjxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxoMT7wn4+L77iPIE5ldyBMZWFkIOKAlCBMb3VuaXNzaSBGaXRuZXNzPC9oMT48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5OYW1lPC9zcGFuPjxzcGFuIGNsYXNzPVwidmFsdWVcIj4ke2xlYWQuZnVsbE5hbWV9PC9zcGFuPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5FbWFpbDwvc3Bhbj48c3BhbiBjbGFzcz1cInZhbHVlXCI+JHtsZWFkLmVtYWlsfTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj48c3BhbiBjbGFzcz1cImxhYmVsXCI+V2hhdHNBcHA8L3NwYW4+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiR7bGVhZC53aGF0c2FwcH08L3NwYW4+PC9kaXY+XG4gICAgICAke2xlYWQuaW5zdGFncmFtTGluayA/IGA8ZGl2IGNsYXNzPVwicm93XCI+PHNwYW4gY2xhc3M9XCJsYWJlbFwiPkluc3RhZ3JhbTwvc3Bhbj48c3BhbiBjbGFzcz1cInZhbHVlXCI+JHtsZWFkLmluc3RhZ3JhbUxpbmt9PC9zcGFuPjwvZGl2PmAgOiAnJ31cbiAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjIwcHggMCA4cHg7Y29sb3I6Izg4ODtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjFweFwiPk1lc3NhZ2U8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwibXNnXCI+JHtsZWFkLm1lc3NhZ2V9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+TG91bmlzc2kgQWJkZWxiYXNzZXQgRml0bmVzcyBDb2FjaCDCtyAke25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1EWicpfTwvZGl2PlxuPC9kaXY+PC9ib2R5PjwvaHRtbD5gXG4gIHRyeSB7XG4gICAgYXdhaXQgZ2V0VHJhbnNwb3J0ZXIoKS5zZW5kTWFpbCh7IGZyb206IHByb2Nlc3MuZW52LlNNVFBfRlJPTSwgdG8sIHN1YmplY3Q6IGDwn5SlIE5ldyBMZWFkOiAke2xlYWQuZnVsbE5hbWV9YCwgaHRtbCB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRW1haWwgZXJyb3I6JywgZSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicHJpc21hIiwiZ2V0QWRtaW5FbWFpbCIsInMiLCJzaXRlU2V0dGluZyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImtleSIsInZhbHVlIiwicHJvY2VzcyIsImVudiIsIkFETUlOX0VNQUlMIiwiZ2V0VHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwiU01UUF9IT1NUIiwicG9ydCIsInBhcnNlSW50IiwiU01UUF9QT1JUIiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJTTVRQX1VTRVIiLCJwYXNzIiwiU01UUF9QQVNTV09SRCIsInNlbmRMZWFkRW1haWwiLCJsZWFkIiwidG8iLCJodG1sIiwiZnVsbE5hbWUiLCJlbWFpbCIsIndoYXRzYXBwIiwiaW5zdGFncmFtTGluayIsIm1lc3NhZ2UiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2VuZE1haWwiLCJmcm9tIiwiU01UUF9GUk9NIiwic3ViamVjdCIsInN1Y2Nlc3MiLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/email.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* reexport safe */ _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(rsc)/./lib/prisma.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_prisma__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Re-export the singleton from the root lib so Next.js server code can import via @/lib/prisma\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLCtGQUErRjtBQUN0RCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpdG5lc3MtY29hY2gvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlLWV4cG9ydCB0aGUgc2luZ2xldG9uIGZyb20gdGhlIHJvb3QgbGliIHNvIE5leHQuanMgc2VydmVyIGNvZGUgY2FuIGltcG9ydCB2aWEgQC9saWIvcHJpc21hXG5leHBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiXG4iXSwibmFtZXMiOlsicHJpc21hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@prisma","vendor-chunks/dotenv","vendor-chunks/postgres-array","vendor-chunks/zod","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5CJoe%5CDesktop%5Cfitnesss%5Cfitness-coach5%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJoe%5CDesktop%5Cfitnesss%5Cfitness-coach5&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();