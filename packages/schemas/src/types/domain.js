"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainResponseGuard = exports.domainSelectFields = void 0;
var index_js_1 = require("../db-entries/index.js");
exports.domainSelectFields = Object.freeze([
    'id',
    'domain',
    'status',
    'errorMessage',
    'dnsRecords',
]);
exports.domainResponseGuard = index_js_1.Domains.guard.pick({
    id: true,
    domain: true,
    status: true,
    errorMessage: true,
    dnsRecords: true,
});
