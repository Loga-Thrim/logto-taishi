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
var slonik_sql_tag_raw_1 = require("slonik-sql-tag-raw");
var adminTenantId = 'admin';
var getId = function (value) { return slonik_1.sql.identifier([value]); };
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
var addManagementApiData = function (pool) { return __awaiter(void 0, void 0, void 0, function () {
    var resourceId, roleId, scopeId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resourceId = (0, universal_1.generateStandardId)();
                roleId = (0, universal_1.generateStandardId)();
                scopeId = (0, universal_1.generateStandardId)();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    insert into resources (tenant_id, id, indicator, name)\n      values (\n        ", ",\n        ", ",\n        'https://default.logto.app/api',\n        'Logto Management API for tenant default'\n      );\n  "], ["\n    insert into resources (tenant_id, id, indicator, name)\n      values (\n        ", ",\n        ", ",\n        'https://default.logto.app/api',\n        'Logto Management API for tenant default'\n      );\n  "])), adminTenantId, resourceId))];
            case 1:
                _a.sent();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    insert into scopes (tenant_id, id, name, description, resource_id)\n      values (\n        ", ",\n        ", ",\n        'all',\n        'Default scope for Management API, allows all permissions.',\n        ", "\n      );\n  "], ["\n    insert into scopes (tenant_id, id, name, description, resource_id)\n      values (\n        ", ",\n        ", ",\n        'all',\n        'Default scope for Management API, allows all permissions.',\n        ", "\n      );\n  "])), adminTenantId, scopeId, resourceId))];
            case 2:
                _a.sent();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    insert into roles (tenant_id, id, name, description)\n      values (\n        ", ",\n        ", ",\n        'default:admin',\n        'Admin role for Logto.'\n      );\n  "], ["\n    insert into roles (tenant_id, id, name, description)\n      values (\n        ", ",\n        ", ",\n        'default:admin',\n        'Admin role for Logto.'\n      );\n  "])), adminTenantId, roleId))];
            case 3:
                _a.sent();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    insert into roles_scopes (tenant_id, id, role_id, scope_id)\n      values (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n  "], ["\n    insert into roles_scopes (tenant_id, id, role_id, scope_id)\n      values (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n  "])), adminTenantId, (0, universal_1.generateStandardId)(), roleId, scopeId))];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var addMeApiData = function (pool) { return __awaiter(void 0, void 0, void 0, function () {
    var resourceId, roleId, scopeId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resourceId = (0, universal_1.generateStandardId)();
                roleId = (0, universal_1.generateStandardId)();
                scopeId = (0, universal_1.generateStandardId)();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    insert into resources (tenant_id, id, indicator, name)\n      values (\n        ", ",\n        ", ",\n        'https://admin.logto.app/me',\n        'Logto Me API'\n      );\n  "], ["\n    insert into resources (tenant_id, id, indicator, name)\n      values (\n        ", ",\n        ", ",\n        'https://admin.logto.app/me',\n        'Logto Me API'\n      );\n  "])), adminTenantId, resourceId))];
            case 1:
                _a.sent();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    insert into scopes (tenant_id, id, name, description, resource_id)\n      values (\n        ", ",\n        ", ",\n        'all',\n        'Default scope for Me API, allows all permissions.',\n        ", "\n      );\n  "], ["\n    insert into scopes (tenant_id, id, name, description, resource_id)\n      values (\n        ", ",\n        ", ",\n        'all',\n        'Default scope for Me API, allows all permissions.',\n        ", "\n      );\n  "])), adminTenantId, scopeId, resourceId))];
            case 2:
                _a.sent();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    insert into roles (tenant_id, id, name, description)\n      values (\n        ", ",\n        ", ",\n        'user',\n        'Default role for admin tenant.'\n      );\n  "], ["\n    insert into roles (tenant_id, id, name, description)\n      values (\n        ", ",\n        ", ",\n        'user',\n        'Default role for admin tenant.'\n      );\n  "])), adminTenantId, roleId))];
            case 3:
                _a.sent();
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    insert into roles_scopes (tenant_id, id, role_id, scope_id)\n      values (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n  "], ["\n    insert into roles_scopes (tenant_id, id, role_id, scope_id)\n      values (\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n  "])), adminTenantId, (0, universal_1.generateStandardId)(), roleId, scopeId))];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var database, baseRole, role, password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDatabaseName(pool)];
                case 1:
                    database = _a.sent();
                    // Update function
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      create or replace function set_tenant_id() returns trigger as\n      $$ begin\n        if new.tenant_id is not null then\n          return new;\n        end if;\n\n        select tenants.id into new.tenant_id\n          from tenants\n          where tenants.db_user = current_user;\n\n        return new;\n      end; $$ language plpgsql;\n    "], ["\n      create or replace function set_tenant_id() returns trigger as\n      $$ begin\n        if new.tenant_id is not null then\n          return new;\n        end if;\n\n        select tenants.id into new.tenant_id\n          from tenants\n          where tenants.db_user = current_user;\n\n        return new;\n      end; $$ language plpgsql;\n    "]))))];
                case 2:
                    // Update function
                    _a.sent();
                    // Update users table constraint
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      alter table users\n        drop constraint users_username_key,\n        add constraint users__username unique (tenant_id, username),\n        drop constraint users_primary_email_key,\n        add constraint users__primary_email unique (tenant_id, primary_email),\n        drop constraint users_primary_phone_key,\n        add constraint users__primary_phone unique (tenant_id, primary_phone);\n    "], ["\n      alter table users\n        drop constraint users_username_key,\n        add constraint users__username unique (tenant_id, username),\n        drop constraint users_primary_email_key,\n        add constraint users__primary_email unique (tenant_id, primary_email),\n        drop constraint users_primary_phone_key,\n        add constraint users__primary_phone unique (tenant_id, primary_phone);\n    "]))))];
                case 3:
                    // Update users table constraint
                    _a.sent();
                    // Update old resource
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      update resources\n        set indicator = 'https://default.logto.app/api'\n        where indicator = 'https://api.logto.io';\n    "], ["\n      update resources\n        set indicator = 'https://default.logto.app/api'\n        where indicator = 'https://api.logto.io';\n    "]))))];
                case 4:
                    // Update old resource
                    _a.sent();
                    baseRole = "logto_tenant_".concat(database);
                    role = "logto_tenant_".concat(database, "_").concat(adminTenantId);
                    password = (0, universal_1.generateStandardId)(32);
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      insert into tenants (id, db_user, db_user_password)\n        values (", ", ", ", ", ");\n    "], ["\n      insert into tenants (id, db_user, db_user_password)\n        values (", ", ", ", ", ");\n    "])), adminTenantId, role, password))];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      create role ", " with inherit login\n        password '", "'\n        in role ", ";\n    "], ["\n      create role ", " with inherit login\n        password '", "'\n        in role ", ";\n    "])), getId(role), (0, slonik_sql_tag_raw_1.raw)(password), getId(baseRole)))];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, addManagementApiData(pool)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, addMeApiData(pool)];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var database, role;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDatabaseName(pool)];
                case 1:
                    database = _a.sent();
                    role = "logto_tenant_".concat(database, "_").concat(adminTenantId);
                    // Drop role and tenant
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      drop role ", ";\n    "], ["\n      drop role ", ";\n    "])), getId(role)))];
                case 2:
                    // Drop role and tenant
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      delete from tenants where id = ", ";\n    "], ["\n      delete from tenants where id = ", ";\n    "])), adminTenantId))];
                case 3:
                    _a.sent();
                    // Restore users table constraint
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      alter table users\n        drop constraint users__username,\n        add constraint users_username_key unique (username),\n        drop constraint users__primary_email,\n        add constraint users_primary_email_key unique (primary_email),\n        drop constraint users__primary_phone,\n        add constraint users_primary_phone_key unique (primary_phone);\n    "], ["\n      alter table users\n        drop constraint users__username,\n        add constraint users_username_key unique (username),\n        drop constraint users__primary_email,\n        add constraint users_primary_email_key unique (primary_email),\n        drop constraint users__primary_phone,\n        add constraint users_primary_phone_key unique (primary_phone);\n    "]))))];
                case 4:
                    // Restore users table constraint
                    _a.sent();
                    // Restore old resource
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      update resources\n      set indicator = 'https://api.logto.io'\n        where indicator = 'https://default.logto.app/api';\n    "], ["\n      update resources\n      set indicator = 'https://api.logto.io'\n        where indicator = 'https://default.logto.app/api';\n    "]))))];
                case 5:
                    // Restore old resource
                    _a.sent();
                    // Update function
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n      create or replace function set_tenant_id() returns trigger as\n      $$ begin\n        select tenants.id into new.tenant_id\n            from tenants\n            where ('tenant_user_' || tenants.id) = current_user;\n\n        if new.tenant_id is null then\n            new.tenant_id := 'default';\n        end if;\n\n        return new;\n      end; $$ language plpgsql;\n    "], ["\n      create or replace function set_tenant_id() returns trigger as\n      $$ begin\n        select tenants.id into new.tenant_id\n            from tenants\n            where ('tenant_user_' || tenants.id) = current_user;\n\n        if new.tenant_id is null then\n            new.tenant_id := 'default';\n        end if;\n\n        return new;\n      end; $$ language plpgsql;\n    "]))))];
                case 6:
                    // Update function
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
