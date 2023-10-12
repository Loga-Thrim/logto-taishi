"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hookTestErrorResponseDataGuard = exports.hookResponseGuard = void 0;
var zod_1 = require("zod");
var index_js_1 = require("../db-entries/index.js");
var hookExecutionStatsGuard = zod_1.z.object({
    successCount: zod_1.z.number(),
    requestCount: zod_1.z.number(),
});
exports.hookResponseGuard = index_js_1.Hooks.guard.extend({
    executionStats: hookExecutionStatsGuard,
});
exports.hookTestErrorResponseDataGuard = zod_1.z.object({
    responseStatus: zod_1.z.number(),
    responseBody: zod_1.z.string(),
});
