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
var tables = [
    'applications_roles',
    'applications',
    'connectors',
    'custom_phrases',
    'logs',
    'logto_configs',
    'oidc_model_instances',
    'passcodes',
    'resources',
    'roles_scopes',
    'roles',
    'scopes',
    'sign_in_experiences',
    'users_roles',
    'users',
    'verification_statuses',
    'hooks',
];
var getDatabaseName = function (pool) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDatabase;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pool.one((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    select current_database();\n  "], ["\n    select current_database();\n  "]))))];
            case 1:
                currentDatabase = (_a.sent()).currentDatabase;
                return [2 /*return*/, currentDatabase.replaceAll('-', '_')];
        }
    });
}); };
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(tables.map(function (tableRaw) { return __awaiter(void 0, void 0, void 0, function () {
                        var table, tenantIdPolicy, modificationPolicy;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    table = slonik_1.sql.identifier([tableRaw]);
                                    tenantIdPolicy = slonik_1.sql.identifier(["".concat(tableRaw, "_tenant_id")]);
                                    modificationPolicy = slonik_1.sql.identifier(["".concat(tableRaw, "_modification")]);
                                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          drop policy ", " on ", ";\n          create policy ", " on ", "\n            as restrictive\n            using (tenant_id = (select id from tenants where db_user = current_user));\n          create policy ", " on ", "\n              using (true);\n        "], ["\n          drop policy ", " on ", ";\n          create policy ", " on ", "\n            as restrictive\n            using (tenant_id = (select id from tenants where db_user = current_user));\n          create policy ", " on ", "\n              using (true);\n        "])), tenantIdPolicy, table, tenantIdPolicy, table, modificationPolicy, table))];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      drop policy tenants_tenant_id on tenants;\n      create policy tenants_tenant_id on tenants\n        using (db_user = current_user);\n    "], ["\n      drop policy tenants_tenant_id on tenants;\n      create policy tenants_tenant_id on tenants\n        using (db_user = current_user);\n    "]))))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var role, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = slonik_1.sql).identifier;
                    _c = "logto_tenant_".concat;
                    return [4 /*yield*/, getDatabaseName(pool)];
                case 1:
                    role = _b.apply(_a, [[_c.apply("logto_tenant_", [_d.sent()])]]);
                    return [4 /*yield*/, Promise.all(tables.map(function (tableRaw) { return __awaiter(void 0, void 0, void 0, function () {
                            var table, tenantIdPolicy, modificationPolicy;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        table = slonik_1.sql.identifier([tableRaw]);
                                        tenantIdPolicy = slonik_1.sql.identifier(["".concat(tableRaw, "_tenant_id")]);
                                        modificationPolicy = slonik_1.sql.identifier(["".concat(tableRaw, "_modification")]);
                                        return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          drop policy ", " on ", ";\n          drop policy ", " on ", ";\n          create policy ", " on ", "\n            to ", "\n            using (tenant_id = (select id from tenants where db_user = current_user));\n        "], ["\n          drop policy ", " on ", ";\n          drop policy ", " on ", ";\n          create policy ", " on ", "\n            to ", "\n            using (tenant_id = (select id from tenants where db_user = current_user));\n        "])), tenantIdPolicy, table, modificationPolicy, table, tenantIdPolicy, table, role))];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      drop policy tenants_tenant_id on tenants;\n      create policy tenants_tenant_id on tenants\n        to ", "\n        using (db_user = current_user);\n    "], ["\n      drop policy tenants_tenant_id on tenants;\n      create policy tenants_tenant_id on tenants\n        to ", "\n        using (db_user = current_user);\n    "])), role))];
                case 3:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
