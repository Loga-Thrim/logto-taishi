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
    'hooks',
];
var defaultTenantId = 'default';
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
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var database, baseRole, baseRoleId, role, password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDatabaseName(pool)];
                case 1:
                    database = _a.sent();
                    // Alter hooks table for multi-tenancy (missed before)
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      alter table hooks\n        add column tenant_id varchar(21) not null default 'default'\n          references tenants (id) on update cascade on delete cascade,\n        alter column id type varchar(21); -- OK to downsize since we use length 21 for ID generation in core\n\n      alter table hooks\n        alter column tenant_id drop default;\n\n      create index hooks__id on hooks (tenant_id, id);\n\n      drop index hooks__event;\n      create index hooks__event on hooks (tenant_id, event);\n\n      create trigger set_tenant_id before insert on hooks\n        for each row execute procedure set_tenant_id();\n    "], ["\n      alter table hooks\n        add column tenant_id varchar(21) not null default 'default'\n          references tenants (id) on update cascade on delete cascade,\n        alter column id type varchar(21); -- OK to downsize since we use length 21 for ID generation in core\n\n      alter table hooks\n        alter column tenant_id drop default;\n\n      create index hooks__id on hooks (tenant_id, id);\n\n      drop index hooks__event;\n      create index hooks__event on hooks (tenant_id, event);\n\n      create trigger set_tenant_id before insert on hooks\n        for each row execute procedure set_tenant_id();\n    "]))))];
                case 2:
                    // Alter hooks table for multi-tenancy (missed before)
                    _a.sent();
                    // Add db_user column to tenants table
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      alter table tenants\n        add column db_user varchar(128),\n        add constraint tenants__db_user\n          unique (db_user);\n    "], ["\n      alter table tenants\n        add column db_user varchar(128),\n        add constraint tenants__db_user\n          unique (db_user);\n    "]))))];
                case 3:
                    // Add db_user column to tenants table
                    _a.sent();
                    baseRole = "logto_tenant_".concat(database);
                    baseRoleId = getId(baseRole);
                    // See `_after_all.sql` for comments
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      create role ", " noinherit;\n\n      grant select, insert, update, delete\n        on all tables\n        in schema public\n        to ", ";\n\n      revoke all privileges\n        on table tenants\n        from ", ";\n\n      grant select (id, db_user)\n        on table tenants\n        to ", ";\n\n      alter table tenants enable row level security;\n\n      create policy tenants_tenant_id on tenants\n        to ", "\n        using (db_user = current_user);\n\n      revoke all privileges\n        on table systems\n        from ", ";\n    "], ["\n      create role ", " noinherit;\n\n      grant select, insert, update, delete\n        on all tables\n        in schema public\n        to ", ";\n\n      revoke all privileges\n        on table tenants\n        from ", ";\n\n      grant select (id, db_user)\n        on table tenants\n        to ", ";\n\n      alter table tenants enable row level security;\n\n      create policy tenants_tenant_id on tenants\n        to ", "\n        using (db_user = current_user);\n\n      revoke all privileges\n        on table systems\n        from ", ";\n    "])), baseRoleId, baseRoleId, baseRoleId, baseRoleId, baseRoleId, baseRoleId))];
                case 4:
                    // See `_after_all.sql` for comments
                    _a.sent();
                    // Enable RLS
                    return [4 /*yield*/, Promise.all(tables.map(function (tableName) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          alter table ", " enable row level security;\n\n          create policy ", " on ", "\n            to ", "\n            using (tenant_id = (select id from tenants where db_user = current_user));\n        "], ["\n          alter table ", " enable row level security;\n\n          create policy ", " on ", "\n            to ", "\n            using (tenant_id = (select id from tenants where db_user = current_user));\n        "])), getId(tableName), getId("".concat(tableName, "_tenant_id")), getId(tableName), baseRoleId))];
                            });
                        }); }))];
                case 5:
                    // Enable RLS
                    _a.sent();
                    role = "logto_tenant_".concat(database, "_").concat(defaultTenantId);
                    password = (0, universal_1.generateStandardId)(32);
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      update tenants\n        set db_user=", ", db_user_password=", "\n        where id=", ";\n    "], ["\n      update tenants\n        set db_user=", ", db_user_password=", "\n        where id=", ";\n    "])), role, password, defaultTenantId))];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      create role ", " with inherit login\n        password '", "'\n        in role ", ";\n    "], ["\n      create role ", " with inherit login\n        password '", "'\n        in role ", ";\n    "])), slonik_1.sql.identifier([role]), (0, slonik_sql_tag_raw_1.raw)(password), slonik_1.sql.identifier([baseRole])))];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var database, baseRoleId, role;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDatabaseName(pool)];
                case 1:
                    database = _a.sent();
                    baseRoleId = getId("logto_tenant_".concat(database));
                    role = "logto_tenant_".concat(database, "_").concat(defaultTenantId);
                    // Disable RLS
                    return [4 /*yield*/, Promise.all(tables.map(function (tableName) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, pool.query((0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          drop policy ", " on ", ";\n          alter table ", " disable row level security;\n        "], ["\n          drop policy ", " on ", ";\n          alter table ", " disable row level security;\n        "])), getId("".concat(tableName, "_tenant_id")), getId(tableName), getId(tableName)))];
                            });
                        }); }))];
                case 2:
                    // Disable RLS
                    _a.sent();
                    // Drop role
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      drop role ", ";\n\n      revoke all privileges\n        on all tables\n        in schema public\n        from ", ";\n\n      drop policy tenants_tenant_id on tenants;\n      alter table tenants disable row level security;\n\n      drop role ", ";\n    "], ["\n      drop role ", ";\n\n      revoke all privileges\n        on all tables\n        in schema public\n        from ", ";\n\n      drop policy tenants_tenant_id on tenants;\n      alter table tenants disable row level security;\n\n      drop role ", ";\n    "])), getId(role), baseRoleId, baseRoleId))];
                case 3:
                    // Drop role
                    _a.sent();
                    // Drop db_user column from tenants table
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      alter table tenants\n        drop column db_user;\n    "], ["\n      alter table tenants\n        drop column db_user;\n    "]))))];
                case 4:
                    // Drop db_user column from tenants table
                    _a.sent();
                    // Revert hooks table from multi-tenancy
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      drop index hooks__id;\n\n      alter table hooks\n        drop column tenant_id,\n        alter column id type varchar(32);\n\n      create index hooks__event on hooks (event);\n\n      drop trigger set_tenant_id on hooks;\n    "], ["\n      drop index hooks__id;\n\n      alter table hooks\n        drop column tenant_id,\n        alter column id type varchar(32);\n\n      create index hooks__event on hooks (event);\n\n      drop trigger set_tenant_id on hooks;\n    "]))))];
                case 5:
                    // Revert hooks table from multi-tenancy
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
