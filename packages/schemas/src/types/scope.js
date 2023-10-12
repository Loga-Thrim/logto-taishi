"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scopeResponseGuard = void 0;
var index_js_1 = require("../db-entries/index.js");
exports.scopeResponseGuard = index_js_1.Scopes.guard.extend({
    resource: index_js_1.Resources.guard,
});
