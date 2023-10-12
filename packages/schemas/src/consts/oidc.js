"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customClientMetadataDefault = exports.tenantIdKey = void 0;
var date_js_1 = require("./date.js");
exports.tenantIdKey = 'tenant_id';
exports.customClientMetadataDefault = Object.freeze({
    idTokenTtl: date_js_1.inSeconds.oneHour,
    refreshTokenTtlInDays: 14,
    rotateRefreshToken: true,
});
