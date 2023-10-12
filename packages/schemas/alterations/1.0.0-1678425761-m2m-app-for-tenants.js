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
var universal_1 = require("@logto/shared/universal");
var slonik_1 = require("slonik");
var adminTenantId = 'admin';
var adminRoleName = 'admin:admin';
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var scopeIds, resourceId, roleId, adminRoleId, rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scopeIds = {
                        sms: (0, universal_1.generateStandardId)(),
                        email: (0, universal_1.generateStandardId)(),
                    };
                    return [4 /*yield*/, pool.one((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      select id from resources\n      where tenant_id = ", "\n      and indicator = 'https://cloud.logto.io/api'\n    "], ["\n      select id from resources\n      where tenant_id = ", "\n      and indicator = 'https://cloud.logto.io/api'\n    "])), adminTenantId))];
                case 1:
                    resourceId = (_a.sent()).id;
                    // Insert scopes
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      insert into scopes (tenant_id, id, name, description, resource_id)\n        values (\n          ", ",\n          ", ",\n          'send:sms',\n          'Allow sending SMS. This scope is only available to M2M application.',\n          ", "\n        ), (\n          ", ",\n          ", ",\n          'send:email',\n          'Allow sending emails. This scope is only available to M2M application.',\n          ", "\n        );\n    "], ["\n      insert into scopes (tenant_id, id, name, description, resource_id)\n        values (\n          ", ",\n          ", ",\n          'send:sms',\n          'Allow sending SMS. This scope is only available to M2M application.',\n          ", "\n        ), (\n          ", ",\n          ", ",\n          'send:email',\n          'Allow sending emails. This scope is only available to M2M application.',\n          ", "\n        );\n    "])), adminTenantId, scopeIds.sms, resourceId, adminTenantId, scopeIds.email, resourceId))];
                case 2:
                    // Insert scopes
                    _a.sent();
                    roleId = (0, universal_1.generateStandardId)();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      insert into roles (tenant_id, id, name, description)\n        values (\n          ", ",\n          ", ",\n          'tenantApplication',\n          'The role for M2M applications that represent a user tenant and send requests to Logto Cloud.'\n        );\n    "], ["\n      insert into roles (tenant_id, id, name, description)\n        values (\n          ", ",\n          ", ",\n          'tenantApplication',\n          'The role for M2M applications that represent a user tenant and send requests to Logto Cloud.'\n        );\n    "])), adminTenantId, roleId))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      insert into roles_scopes (tenant_id, id, role_id, scope_id)\n        values (\n          ", ",\n          ", ",\n          ", ",\n          ", "\n        ), (\n          ", ",\n          ", ",\n          ", ",\n          ", "\n        );\n    "], ["\n      insert into roles_scopes (tenant_id, id, role_id, scope_id)\n        values (\n          ", ",\n          ", ",\n          ", ",\n          ", "\n        ), (\n          ", ",\n          ", ",\n          ", ",\n          ", "\n        );\n    "])), adminTenantId, (0, universal_1.generateStandardId)(), roleId, scopeIds.sms, adminTenantId, (0, universal_1.generateStandardId)(), roleId, scopeIds.email))];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, pool.one((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      select id from roles\n      where name = ", "\n      and tenant_id = ", "\n    "], ["\n      select id from roles\n      where name = ", "\n      and tenant_id = ", "\n    "])), adminRoleName, adminTenantId))];
                case 5:
                    adminRoleId = (_a.sent()).id;
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      insert into roles_scopes (tenant_id, id, role_id, scope_id)\n        values (\n          ", ",\n          ", ",\n          ", ",\n          ", "\n        ), (\n          ", ",\n          ", ",\n          ", ",\n          ", "\n        );\n    "], ["\n      insert into roles_scopes (tenant_id, id, role_id, scope_id)\n        values (\n          ", ",\n          ", ",\n          ", ",\n          ", "\n        ), (\n          ", ",\n          ", ",\n          ", ",\n          ", "\n        );\n    "])), adminTenantId, (0, universal_1.generateStandardId)(), adminRoleId, scopeIds.sms, adminTenantId, (0, universal_1.generateStandardId)(), adminRoleId, scopeIds.email))];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      select id from tenants\n    "], ["\n      select id from tenants\n    "]))))];
                case 7:
                    rows = (_a.sent()).rows;
                    return [4 /*yield*/, Promise.all(rows.map(function (row) { return __awaiter(void 0, void 0, void 0, function () {
                            var tenantId, applicationId, description, oidcClientMetadata, customClientMetadata;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        tenantId = row.id;
                                        if (tenantId === adminTenantId) {
                                            return [2 /*return*/];
                                        }
                                        applicationId = (0, universal_1.generateStandardId)();
                                        description = "Machine to machine application for tenant ".concat(tenantId);
                                        oidcClientMetadata = { redirectUris: [], postLogoutRedirectUris: [] };
                                        customClientMetadata = { tenantId: tenantId };
                                        return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          insert into applications (tenant_id, id, name, description, secret, type, oidc_client_metadata, custom_client_metadata)\n            values (\n              'admin',\n              ", ",\n              'Cloud Service',\n              ", ",\n              ", ",\n              'MachineToMachine',\n              ", ",\n              ", "\n            );\n        "], ["\n          insert into applications (tenant_id, id, name, description, secret, type, oidc_client_metadata, custom_client_metadata)\n            values (\n              'admin',\n              ", ",\n              'Cloud Service',\n              ", ",\n              ", ",\n              'MachineToMachine',\n              ", ",\n              ", "\n            );\n        "])), applicationId, description, (0, universal_1.generateStandardId)(), JSON.stringify(oidcClientMetadata), JSON.stringify(customClientMetadata)))];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n          insert into applications_roles (tenant_id, id, role_id, application_id)\n            values (\n              'admin',\n              ", ",\n              ", ",\n              ", "\n            );\n        "], ["\n          insert into applications_roles (tenant_id, id, role_id, application_id)\n            values (\n              'admin',\n              ", ",\n              ", ",\n              ", "\n            );\n        "])), (0, universal_1.generateStandardId)(), roleId, applicationId))];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var role, applications;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.one((0, slonik_1.sql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      select id from roles\n        where tenant_id = ", "\n        and name='tenantApplication'\n    "], ["\n      select id from roles\n        where tenant_id = ", "\n        and name='tenantApplication'\n    "])), adminTenantId))];
                case 1:
                    role = _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      select application_id as id from applications_roles\n        where tenant_id = ", "\n        and role_id = ", "\n    "], ["\n      select application_id as id from applications_roles\n        where tenant_id = ", "\n        and role_id = ", "\n    "])), adminTenantId, role.id))];
                case 2:
                    applications = (_a.sent()).rows;
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      delete from applications_roles\n        where tenant_id = ", "\n        and role_id = ", ";\n    "], ["\n      delete from applications_roles\n        where tenant_id = ", "\n        and role_id = ", ";\n    "])), adminTenantId, role.id))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      delete from roles_scopes\n        where tenant_id = ", "\n        and role_id = ", ";\n    "], ["\n      delete from roles_scopes\n        where tenant_id = ", "\n        and role_id = ", ";\n    "])), adminTenantId, role.id))];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      delete from roles\n        where tenant_id = ", "\n        and id = ", ";\n    "], ["\n      delete from roles\n        where tenant_id = ", "\n        and id = ", ";\n    "])), adminTenantId, role.id))];
                case 5:
                    _a.sent();
                    if (!(applications.length > 0)) return [3 /*break*/, 7];
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n        delete from applications\n          where tenant_id = ", "\n          and id in (", ");\n      "], ["\n        delete from applications\n          where tenant_id = ", "\n          and id in (", ");\n      "])), adminTenantId, slonik_1.sql.join(applications.map(function (_a) {
                            var id = _a.id;
                            return id;
                        }), (0, slonik_1.sql)(templateObject_15 || (templateObject_15 = __makeTemplateObject([", "], [", "]))))))];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      delete from scopes\n        using resources\n        where resources.id = scopes.resource_id\n        and scopes.tenant_id = ", "\n        and resources.indicator = 'https://cloud.logto.io/api'\n        and (scopes.name='send:sms' or scopes.name='send:email');\n    "], ["\n      delete from scopes\n        using resources\n        where resources.id = scopes.resource_id\n        and scopes.tenant_id = ", "\n        and resources.indicator = 'https://cloud.logto.io/api'\n        and (scopes.name='send:sms' or scopes.name='send:email');\n    "])), adminTenantId))];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
