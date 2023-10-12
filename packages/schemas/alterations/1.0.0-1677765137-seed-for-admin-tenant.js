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
var addApiData = function (pool) { return __awaiter(void 0, void 0, void 0, function () {
    var adminApi, cloudApi, adminRole, userRoleId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                adminApi = {
                    resourceId: (0, universal_1.generateStandardId)(),
                    scopeId: (0, universal_1.generateStandardId)(),
                };
                cloudApi = {
                    resourceId: (0, universal_1.generateStandardId)(),
                    scopeId: (0, universal_1.generateStandardId)(),
                };
                adminRole = {
                    id: (0, universal_1.generateStandardId)(),
                    name: 'admin:admin',
                    description: 'Admin role for Logto.',
                };
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    insert into resources (tenant_id, id, indicator, name)\n      values (\n        ", ",\n        ", ",\n        'https://admin.logto.app/api',\n        'Logto Management API for tenant admin'\n      ), (\n        ", ",\n        ", ",\n        'https://cloud.logto.io/api',\n        'Logto Cloud API'\n      );\n  "], ["\n    insert into resources (tenant_id, id, indicator, name)\n      values (\n        ", ",\n        ", ",\n        'https://admin.logto.app/api',\n        'Logto Management API for tenant admin'\n      ), (\n        ", ",\n        ", ",\n        'https://cloud.logto.io/api',\n        'Logto Cloud API'\n      );\n  "])), adminTenantId, adminApi.resourceId, adminTenantId, cloudApi.resourceId))];
            case 1:
                _a.sent();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    insert into scopes (tenant_id, id, name, description, resource_id)\n      values (\n        ", ",\n        ", ",\n        'all',\n        'Default scope for Management API, allows all permissions.',\n        ", "\n      ), (\n        ", ",\n        ", ",\n        'create:tenant',\n        'Allow creating new tenants.',\n        ", "\n      );\n  "], ["\n    insert into scopes (tenant_id, id, name, description, resource_id)\n      values (\n        ", ",\n        ", ",\n        'all',\n        'Default scope for Management API, allows all permissions.',\n        ", "\n      ), (\n        ", ",\n        ", ",\n        'create:tenant',\n        'Allow creating new tenants.',\n        ", "\n      );\n  "])), adminTenantId, adminApi.scopeId, adminApi.resourceId, adminTenantId, cloudApi.scopeId, cloudApi.resourceId))];
            case 2:
                _a.sent();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    insert into roles (tenant_id, id, name, description)\n      values (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n  "], ["\n    insert into roles (tenant_id, id, name, description)\n      values (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n  "])), adminTenantId, adminRole.id, adminRole.name, adminRole.description))];
            case 3:
                _a.sent();
                return [4 /*yield*/, pool.one((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    select id from roles\n    where tenant_id = ", "\n    and name = 'user'\n  "], ["\n    select id from roles\n    where tenant_id = ", "\n    and name = 'user'\n  "])), adminTenantId))];
            case 4:
                userRoleId = (_a.sent()).id;
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    insert into roles_scopes (tenant_id, id, role_id, scope_id)\n      values (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      ), (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n  "], ["\n    insert into roles_scopes (tenant_id, id, role_id, scope_id)\n      values (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      ), (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n  "])), adminTenantId, (0, universal_1.generateStandardId)(), userRoleId, cloudApi.scopeId, adminTenantId, (0, universal_1.generateStandardId)(), adminRole.id, adminApi.scopeId))];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, addApiData(pool)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      insert into logto_configs (tenant_id, key, value)\n      values (\n        ", ",\n        'adminConsole',\n        ", "\n      );\n    "], ["\n      insert into logto_configs (tenant_id, key, value)\n      values (\n        ", ",\n        'adminConsole',\n        ", "\n      );\n    "])), adminTenantId, slonik_1.sql.jsonb({
                            language: 'en',
                            appearanceMode: 'system',
                            livePreviewChecked: false,
                            applicationCreated: false,
                            signInExperienceCustomized: false,
                            passwordlessConfigured: false,
                            selfHostingChecked: false,
                            communityChecked: false,
                            m2mApplicationCreated: false,
                        })))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      delete from resources\n        where tenant_id = ", "\n        and indicator in ('https://admin.logto.app/api', 'https://cloud.logto.io/api');\n    "], ["\n      delete from resources\n        where tenant_id = ", "\n        and indicator in ('https://admin.logto.app/api', 'https://cloud.logto.io/api');\n    "])), adminTenantId))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      delete from roles\n        where tenant_id = ", "\n        and name = 'admin:admin';\n    "], ["\n      delete from roles\n        where tenant_id = ", "\n        and name = 'admin:admin';\n    "])), adminTenantId))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      delete from logto_configs\n        where tenant_id = ", "\n        and key = 'adminConsole';\n    "], ["\n      delete from logto_configs\n        where tenant_id = ", "\n        and key = 'adminConsole';\n    "])), adminTenantId))];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
