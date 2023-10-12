"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var slonik_1 = require("slonik");
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      update roles\n      set name = '#internal:admin', description = 'Internal admin role for Logto tenant ' || tenant_id || '.'\n      where name = 'admin'\n      and tenant_id != 'admin';\n\n      update roles\n      set description = 'Admin tenant admin role for Logto tenant ' || substring(name from 0 for strpos(name, ':admin')) || '.'\n      where name like '%:admin'\n      and tenant_id = 'admin';\n\n      -- Restrict direct role modification\n      create policy roles_select on roles\n        for select using (true);\n\n      drop policy roles_modification on roles;\n      create policy roles_modification on roles\n        using (not starts_with(name, '#internal:'));\n\n      -- Restrict role - scope modification\n      create policy roles_scopes_select on roles_scopes\n        for select using (true);\n\n      drop policy roles_scopes_modification on roles_scopes;\n      create policy roles_scopes_modification on roles_scopes\n        using (not starts_with((select roles.name from roles where roles.id = role_id), '#internal:'));\n    "], ["\n      update roles\n      set name = '#internal:admin', description = 'Internal admin role for Logto tenant ' || tenant_id || '.'\n      where name = 'admin'\n      and tenant_id != 'admin';\n\n      update roles\n      set description = 'Admin tenant admin role for Logto tenant ' || substring(name from 0 for strpos(name, ':admin')) || '.'\n      where name like '%:admin'\n      and tenant_id = 'admin';\n\n      -- Restrict direct role modification\n      create policy roles_select on roles\n        for select using (true);\n\n      drop policy roles_modification on roles;\n      create policy roles_modification on roles\n        using (not starts_with(name, '#internal:'));\n\n      -- Restrict role - scope modification\n      create policy roles_scopes_select on roles_scopes\n        for select using (true);\n\n      drop policy roles_scopes_modification on roles_scopes;\n      create policy roles_scopes_modification on roles_scopes\n        using (not starts_with((select roles.name from roles where roles.id = role_id), '#internal:'));\n    "]))))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      update roles\n      set name = 'admin', description = 'Admin role for Logto.'\n      where name = '#internal:admin'\n      and tenant_id != 'admin';\n\n      update roles\n      set description = 'Admin role for Logto.'\n      where name like '%:admin'\n      and tenant_id = 'admin';\n\n      drop policy roles_select on roles;\n      drop policy roles_modification on roles;\n\n      create policy roles_modification on roles\n        using (true);\n\n      drop policy roles_scopes_select on roles_scopes;\n      drop policy roles_scopes_modification on roles_scopes;\n\n      create policy roles_scopes_modification on roles_scopes\n        using (true);\n    "], ["\n      update roles\n      set name = 'admin', description = 'Admin role for Logto.'\n      where name = '#internal:admin'\n      and tenant_id != 'admin';\n\n      update roles\n      set description = 'Admin role for Logto.'\n      where name like '%:admin'\n      and tenant_id = 'admin';\n\n      drop policy roles_select on roles;\n      drop policy roles_modification on roles;\n\n      create policy roles_modification on roles\n        using (true);\n\n      drop policy roles_scopes_select on roles_scopes;\n      drop policy roles_scopes_modification on roles_scopes;\n\n      create policy roles_scopes_modification on roles_scopes\n        using (true);\n    "]))))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2;
