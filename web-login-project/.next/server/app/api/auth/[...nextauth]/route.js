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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CTaskmasterBmad%5Cweb-login-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CTaskmasterBmad%5Cweb-login-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CTaskmasterBmad%5Cweb-login-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CTaskmasterBmad%5Cweb-login-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Desktop_TaskmasterBmad_web_login_project_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Desktop\\\\TaskmasterBmad\\\\web-login-project\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_User_Desktop_TaskmasterBmad_web_login_project_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRGVza3RvcCU1Q1Rhc2ttYXN0ZXJCbWFkJTVDd2ViLWxvZ2luLXByb2plY3QlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1VzZXIlNUNEZXNrdG9wJTVDVGFza21hc3RlckJtYWQlNUN3ZWItbG9naW4tcHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUQ7QUFDdEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItbG9naW4tcHJvamVjdC8/ZTc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcVGFza21hc3RlckJtYWRcXFxcd2ViLWxvZ2luLXByb2plY3RcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRGVza3RvcFxcXFxUYXNrbWFzdGVyQm1hZFxcXFx3ZWItbG9naW4tcHJvamVjdFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CTaskmasterBmad%5Cweb-login-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CTaskmasterBmad%5Cweb-login-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDUTtBQUV4QyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0Msa0RBQVdBO0FBRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItbG9naW4tcHJvamVjdC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnXG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucylcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n// Mock user data for demonstration\nconst mockUser = {\n    id: \"demo-user-123\",\n    name: \"Demo User\",\n    email: \"demo@example.com\",\n    image: \"https://ui-avatars.com/api/?name=Demo+User&background=4285f4&color=fff&size=128\"\n};\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"mock-client-id\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"mock-client-secret\",\n            // Mock authorization for development\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 24 * 60 * 60\n    },\n    jwt: {\n        maxAge: 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET || \"development-secret-key\",\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    callbacks: {\n        // JWT callback to add user ID to token\n        async jwt ({ token, user, account }) {\n            // Initial sign in - add user info to token\n            if (user && account) {\n                // For mock mode, use our demo user data\n                if (true) {\n                    return {\n                        ...token,\n                        id: mockUser.id,\n                        name: mockUser.name,\n                        email: mockUser.email,\n                        picture: mockUser.image\n                    };\n                }\n                // For real Google OAuth (when configured)\n                return {\n                    ...token,\n                    id: user.id,\n                    picture: user.image\n                };\n            }\n            return token;\n        },\n        // Session callback to add user info to session\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        // Redirect callback to handle post-authentication redirects\n        async redirect ({ url, baseUrl }) {\n            // If the URL is relative, prepend the base URL\n            if (url.startsWith(\"/\")) {\n                return `${baseUrl}${url}`;\n            }\n            // If the URL is on the same domain, allow it\n            if (new URL(url).origin === baseUrl) {\n                return url;\n            }\n            // Default to dashboard after successful login\n            return `${baseUrl}/dashboard`;\n        }\n    },\n    // Debug mode for development\n    debug: \"development\" === \"development\",\n    // Configure secure cookies for production\n    cookies: {\n        sessionToken: {\n            name: `next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                sameSite: \"lax\",\n                path: \"/\",\n                secure: \"development\" === \"production\"\n            }\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDdUQ7QUFFdkQsbUNBQW1DO0FBQ25DLE1BQU1DLFdBQVc7SUFDZkMsSUFBSTtJQUNKQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsT0FBTztBQUNUO0FBRU8sTUFBTUMsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVFAsc0VBQWNBLENBQUM7WUFDYlEsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0IsSUFBSTtZQUMxQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0IsSUFBSTtZQUNsRCxxQ0FBcUM7WUFDckNDLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05DLFFBQVE7b0JBQ1JDLGFBQWE7b0JBQ2JDLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFNBQVM7UUFDUEMsVUFBVTtRQUNWQyxRQUFRLEtBQUssS0FBSztJQUNwQjtJQUNBQyxLQUFLO1FBQ0hELFFBQVEsS0FBSyxLQUFLO0lBQ3BCO0lBQ0FFLFFBQVFkLFFBQVFDLEdBQUcsQ0FBQ2MsZUFBZSxJQUFJO0lBQ3ZDQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFdBQVc7UUFDVCx1Q0FBdUM7UUFDdkMsTUFBTU4sS0FBSSxFQUFFTyxLQUFLLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO1lBQ2hDLDJDQUEyQztZQUMzQyxJQUFJRCxRQUFRQyxTQUFTO2dCQUNuQix3Q0FBd0M7Z0JBQ3hDLElBQUl0QixJQUF1RSxFQUFFO29CQUMzRSxPQUFPO3dCQUNMLEdBQUdvQixLQUFLO3dCQUNSM0IsSUFBSUQsU0FBU0MsRUFBRTt3QkFDZkMsTUFBTUYsU0FBU0UsSUFBSTt3QkFDbkJDLE9BQU9ILFNBQVNHLEtBQUs7d0JBQ3JCNEIsU0FBUy9CLFNBQVNJLEtBQUs7b0JBQ3pCO2dCQUNGO2dCQUNBLDBDQUEwQztnQkFDMUMsT0FBTztvQkFDTCxHQUFHd0IsS0FBSztvQkFDUjNCLElBQUk0QixLQUFLNUIsRUFBRTtvQkFDWDhCLFNBQVNGLEtBQUt6QixLQUFLO2dCQUNyQjtZQUNGO1lBQ0EsT0FBT3dCO1FBQ1Q7UUFDQSwrQ0FBK0M7UUFDL0MsTUFBTVYsU0FBUSxFQUFFQSxPQUFPLEVBQUVVLEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPO2dCQUNUVixRQUFRVyxJQUFJLENBQUM1QixFQUFFLEdBQUcyQixNQUFNM0IsRUFBRTtnQkFDMUJpQixRQUFRVyxJQUFJLENBQUMzQixJQUFJLEdBQUcwQixNQUFNMUIsSUFBSTtnQkFDOUJnQixRQUFRVyxJQUFJLENBQUMxQixLQUFLLEdBQUd5QixNQUFNekIsS0FBSztnQkFDaENlLFFBQVFXLElBQUksQ0FBQ3pCLEtBQUssR0FBR3dCLE1BQU1HLE9BQU87WUFDcEM7WUFDQSxPQUFPYjtRQUNUO1FBQ0EsNERBQTREO1FBQzVELE1BQU1jLFVBQVMsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7WUFDN0IsK0NBQStDO1lBQy9DLElBQUlELElBQUlFLFVBQVUsQ0FBQyxNQUFNO2dCQUN2QixPQUFPLENBQUMsRUFBRUQsUUFBUSxFQUFFRCxJQUFJLENBQUM7WUFDM0I7WUFDQSw2Q0FBNkM7WUFDN0MsSUFBSSxJQUFJRyxJQUFJSCxLQUFLSSxNQUFNLEtBQUtILFNBQVM7Z0JBQ25DLE9BQU9EO1lBQ1Q7WUFDQSw4Q0FBOEM7WUFDOUMsT0FBTyxDQUFDLEVBQUVDLFFBQVEsVUFBVSxDQUFDO1FBQy9CO0lBQ0Y7SUFDQSw2QkFBNkI7SUFDN0JJLE9BQU85QixrQkFBeUI7SUFDaEMsMENBQTBDO0lBQzFDK0IsU0FBUztRQUNQQyxjQUFjO1lBQ1p0QyxNQUFNLENBQUMsdUJBQXVCLENBQUM7WUFDL0J1QyxTQUFTO2dCQUNQQyxVQUFVO2dCQUNWQyxVQUFVO2dCQUNWQyxNQUFNO2dCQUNOQyxRQUFRckMsa0JBQXlCO1lBQ25DO1FBQ0Y7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItbG9naW4tcHJvamVjdC8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcblxuLy8gTW9jayB1c2VyIGRhdGEgZm9yIGRlbW9uc3RyYXRpb25cbmNvbnN0IG1vY2tVc2VyID0ge1xuICBpZDogJ2RlbW8tdXNlci0xMjMnLFxuICBuYW1lOiAnRGVtbyBVc2VyJyxcbiAgZW1haWw6ICdkZW1vQGV4YW1wbGUuY29tJyxcbiAgaW1hZ2U6ICdodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8/bmFtZT1EZW1vK1VzZXImYmFja2dyb3VuZD00Mjg1ZjQmY29sb3I9ZmZmJnNpemU9MTI4Jyxcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIHx8ICdtb2NrLWNsaWVudC1pZCcsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIHx8ICdtb2NrLWNsaWVudC1zZWNyZXQnLFxuICAgICAgLy8gTW9jayBhdXRob3JpemF0aW9uIGZvciBkZXZlbG9wbWVudFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwcm9tcHQ6ICdjb25zZW50JyxcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogJ29mZmxpbmUnLFxuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gICAgbWF4QWdlOiAyNCAqIDYwICogNjAsIC8vIDI0IGhvdXJzXG4gIH0sXG4gIGp3dDoge1xuICAgIG1heEFnZTogMjQgKiA2MCAqIDYwLFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB8fCAnZGV2ZWxvcG1lbnQtc2VjcmV0LWtleScsXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2xvZ2luJyxcbiAgICBlcnJvcjogJy9sb2dpbicsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIC8vIEpXVCBjYWxsYmFjayB0byBhZGQgdXNlciBJRCB0byB0b2tlblxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50IH0pIHtcbiAgICAgIC8vIEluaXRpYWwgc2lnbiBpbiAtIGFkZCB1c2VyIGluZm8gdG8gdG9rZW5cbiAgICAgIGlmICh1c2VyICYmIGFjY291bnQpIHtcbiAgICAgICAgLy8gRm9yIG1vY2sgbW9kZSwgdXNlIG91ciBkZW1vIHVzZXIgZGF0YVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgIXByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udG9rZW4sXG4gICAgICAgICAgICBpZDogbW9ja1VzZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiBtb2NrVXNlci5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IG1vY2tVc2VyLmVtYWlsLFxuICAgICAgICAgICAgcGljdHVyZTogbW9ja1VzZXIuaW1hZ2UsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciByZWFsIEdvb2dsZSBPQXV0aCAod2hlbiBjb25maWd1cmVkKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnRva2VuLFxuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIHBpY3R1cmU6IHVzZXIuaW1hZ2UsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gICAgLy8gU2Vzc2lvbiBjYWxsYmFjayB0byBhZGQgdXNlciBpbmZvIHRvIHNlc3Npb25cbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkIGFzIHN0cmluZ1xuICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWUgYXMgc3RyaW5nXG4gICAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsIGFzIHN0cmluZ1xuICAgICAgICBzZXNzaW9uLnVzZXIuaW1hZ2UgPSB0b2tlbi5waWN0dXJlIGFzIHN0cmluZ1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9LFxuICAgIC8vIFJlZGlyZWN0IGNhbGxiYWNrIHRvIGhhbmRsZSBwb3N0LWF1dGhlbnRpY2F0aW9uIHJlZGlyZWN0c1xuICAgIGFzeW5jIHJlZGlyZWN0KHsgdXJsLCBiYXNlVXJsIH0pIHtcbiAgICAgIC8vIElmIHRoZSBVUkwgaXMgcmVsYXRpdmUsIHByZXBlbmQgdGhlIGJhc2UgVVJMXG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gYCR7YmFzZVVybH0ke3VybH1gXG4gICAgICB9XG4gICAgICAvLyBJZiB0aGUgVVJMIGlzIG9uIHRoZSBzYW1lIGRvbWFpbiwgYWxsb3cgaXRcbiAgICAgIGlmIChuZXcgVVJMKHVybCkub3JpZ2luID09PSBiYXNlVXJsKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICAgIH1cbiAgICAgIC8vIERlZmF1bHQgdG8gZGFzaGJvYXJkIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW5cbiAgICAgIHJldHVybiBgJHtiYXNlVXJsfS9kYXNoYm9hcmRgXG4gICAgfSxcbiAgfSxcbiAgLy8gRGVidWcgbW9kZSBmb3IgZGV2ZWxvcG1lbnRcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxuICAvLyBDb25maWd1cmUgc2VjdXJlIGNvb2tpZXMgZm9yIHByb2R1Y3Rpb25cbiAgY29va2llczoge1xuICAgIHNlc3Npb25Ub2tlbjoge1xuICAgICAgbmFtZTogYG5leHQtYXV0aC5zZXNzaW9uLXRva2VuYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59Il0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwibW9ja1VzZXIiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImltYWdlIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiand0Iiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciIsImNhbGxiYWNrcyIsInRva2VuIiwidXNlciIsImFjY291bnQiLCJwaWN0dXJlIiwicmVkaXJlY3QiLCJ1cmwiLCJiYXNlVXJsIiwic3RhcnRzV2l0aCIsIlVSTCIsIm9yaWdpbiIsImRlYnVnIiwiY29va2llcyIsInNlc3Npb25Ub2tlbiIsIm9wdGlvbnMiLCJodHRwT25seSIsInNhbWVTaXRlIiwicGF0aCIsInNlY3VyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/next","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CTaskmasterBmad%5Cweb-login-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CTaskmasterBmad%5Cweb-login-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();