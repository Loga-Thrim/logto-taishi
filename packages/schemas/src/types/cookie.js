"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logtoUiCookieGuard = void 0;
var zod_1 = require("zod");
exports.logtoUiCookieGuard = zod_1.z.object({ appId: zod_1.z.string() }).partial();
