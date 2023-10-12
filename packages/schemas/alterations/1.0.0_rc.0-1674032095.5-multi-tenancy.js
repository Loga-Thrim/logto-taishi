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
var slonik_sql_tag_raw_1 = require("slonik-sql-tag-raw");
var getId = function (value) { return slonik_1.sql.identifier([value]); };
var tenantId = slonik_1.sql.identifier(['tenant_id']);
var tables = [
    'applications',
    'applications_roles',
    'connectors',
    'custom_phrases',
    'logs',
    'oidc_model_instances',
    'passcodes',
    'resources',
    'roles_scopes',
    'roles',
    'scopes',
    'settings',
    'sign_in_experiences',
    'users_roles',
    'users',
];
var indexes = [
    {
        table: 'logs',
        indexes: [
            { columns: ['key'] },
            { columns: ['created_at'], strategy: 'drop-only' },
            { name: 'user_id', columns: ["(payload->>'user_id') nulls last"] },
            { name: 'application_id', columns: ["(payload->>'application_id') nulls last"] },
        ],
    },
    {
        table: 'oidc_model_instances',
        indexes: [
            { name: 'model_name_payload_user_code', columns: ['model_name', "(payload->>'userCode')"] },
            { name: 'model_name_payload_uid', columns: ['model_name', "(payload->>'uid')"] },
            { name: 'model_name_payload_grant_id', columns: ['model_name', "(payload->>'grantId')"] },
        ],
    },
    {
        table: 'passcodes',
        indexes: [
            { columns: ['interaction_jti', 'type'] },
            { columns: ['email', 'type'] },
            { columns: ['phone', 'type'] },
        ],
    },
    {
        table: 'users',
        indexes: [{ columns: ['name'] }, { columns: ['created_at'], strategy: 'drop-only' }],
    },
];
var constraints = [
    { table: 'applications_roles', columns: ['application_id', 'role_id'] },
    { table: 'custom_phrases', columns: ['language_tag'] },
    { table: 'oidc_model_instances', columns: ['model_name', 'id'] },
    { table: 'roles_scopes', columns: ['role_id', 'scope_id'] },
    { table: 'users_roles', columns: ['user_id', 'role_id'] },
    { table: 'resources', columns: ['indicator'], original: 'index' },
    { table: 'roles', columns: ['name'], original: 'index' },
    { table: 'scopes', columns: ['resource_id', 'name'], original: 'index' },
];
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Add `tenant_id` column and create index accordingly
                return [4 /*yield*/, Promise.all(tables.map(function (tableName) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: 
                                // Add `tenant_id` column and set existing data to the default tenant
                                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          alter table ", "\n            add column ", " varchar(21) not null default 'default'\n              references tenants (id) on update cascade on delete cascade;\n        "], ["\n          alter table ", "\n            add column ", " varchar(21) not null default 'default'\n              references tenants (id) on update cascade on delete cascade;\n        "])), getId(tableName), tenantId))];
                                case 1:
                                    // Add `tenant_id` column and set existing data to the default tenant
                                    _a.sent();
                                    // Column should not have a default tenant ID, it should be always assigned manually or by a trigger
                                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          alter table ", "\n            alter column ", " drop default;\n        "], ["\n          alter table ", "\n            alter column ", " drop default;\n        "])), getId(tableName), tenantId))];
                                case 2:
                                    // Column should not have a default tenant ID, it should be always assigned manually or by a trigger
                                    _a.sent();
                                    if (!(tableName !== 'oidc_model_instances')) return [3 /*break*/, 4];
                                    // Add ID index for better RLS query performance
                                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            create index ", "\n              on ", " (", ", id);\n          "], ["\n            create index ", "\n              on ", " (", ", id);\n          "])), getId("".concat(tableName, "__id")), getId(tableName), tenantId))];
                                case 3:
                                    // Add ID index for better RLS query performance
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 1:
                    // Add `tenant_id` column and create index accordingly
                    _a.sent();
                    // Update indexes
                    return [4 /*yield*/, Promise.all(indexes.flatMap(function (_a) {
                            var table = _a.table, indexes = _a.indexes;
                            return indexes.map(function (_a) {
                                var name = _a.name, columns = _a.columns, strategy = _a.strategy;
                                return __awaiter(void 0, void 0, void 0, function () {
                                    var indexName;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                indexName = getId("".concat(table, "__").concat(name !== null && name !== void 0 ? name : columns.join('_')));
                                                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["drop index ", ""], ["drop index ", ""])), indexName))];
                                            case 1:
                                                _b.sent();
                                                if (!(strategy !== 'drop-only')) return [3 /*break*/, 3];
                                                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                create index ", " \n                  on ", " (\n                    ", ",\n                    ", "\n                  );\n              "], ["\n                create index ", " \n                  on ", " (\n                    ", ",\n                    ", "\n                  );\n              "])), indexName, getId(table), tenantId, slonik_1.sql.join(columns.map(function (column) { return (0, slonik_sql_tag_raw_1.raw)(column); }), (0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject([", "], [", "]))))))];
                                            case 2:
                                                _b.sent();
                                                _b.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                        }))];
                case 2:
                    // Update indexes
                    _a.sent();
                    // Update constraints
                    return [4 /*yield*/, Promise.all(constraints.map(function (_a) {
                            var table = _a.table, columns = _a.columns, original = _a.original;
                            return __awaiter(void 0, void 0, void 0, function () {
                                var indexName;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            indexName = getId("".concat(table, "__").concat(columns.join('_')));
                                            if (!(original === 'index')) return [3 /*break*/, 2];
                                            return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["drop index ", ""], ["drop index ", ""])), indexName))];
                                        case 1:
                                            _b.sent();
                                            _b.label = 2;
                                        case 2: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n          alter table ", "\n            ", "\n            add constraint ", " unique (\n              ", ",\n              ", "\n            );\n        "], ["\n          alter table ", "\n            ", "\n            add constraint ", " unique (\n              ", ",\n              ", "\n            );\n        "])), getId(table), original === 'index' ? (0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""]))) : (0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["drop constraint ", ","], ["drop constraint ", ","])), indexName), indexName, tenantId, slonik_1.sql.join(columns.map(function (column) { return (0, slonik_sql_tag_raw_1.raw)(column); }), (0, slonik_1.sql)(templateObject_10 || (templateObject_10 = __makeTemplateObject([", "], [", "]))))))];
                                        case 3:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }))];
                case 3:
                    // Update constraints
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Restore constraints
                return [4 /*yield*/, Promise.all(constraints.map(function (_a) {
                        var table = _a.table, columns = _a.columns, original = _a.original;
                        return __awaiter(void 0, void 0, void 0, function () {
                            var indexName;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        indexName = getId("".concat(table, "__").concat(columns.join('_')));
                                        return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n          alter table ", "\n            drop constraint ", ";\n        "], ["\n          alter table ", "\n            drop constraint ", ";\n        "])), getId(table), indexName))];
                                    case 1:
                                        _b.sent();
                                        return [4 /*yield*/, (original === 'index'
                                                ? pool.query((0, slonik_1.sql)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            create unique index ", "\n              on ", " (\n                ", "\n              )\n          "], ["\n            create unique index ", "\n              on ", " (\n                ", "\n              )\n          "])), indexName, getId(table), slonik_1.sql.join(columns.map(function (column) { return (0, slonik_sql_tag_raw_1.raw)(column); }), (0, slonik_1.sql)(templateObject_13 || (templateObject_13 = __makeTemplateObject([", "], [", "]))))))
                                                : pool.query((0, slonik_1.sql)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n            alter table ", "\n              add constraint ", " unique (\n                ", "\n              );\n          "], ["\n            alter table ", "\n              add constraint ", " unique (\n                ", "\n              );\n          "])), getId(table), indexName, slonik_1.sql.join(columns.map(function (column) { return (0, slonik_sql_tag_raw_1.raw)(column); }), (0, slonik_1.sql)(templateObject_15 || (templateObject_15 = __makeTemplateObject([", "], [", "])))))))];
                                    case 2:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }))];
                case 1:
                    // Restore constraints
                    _a.sent();
                    // Restore indexes
                    return [4 /*yield*/, Promise.all(indexes.flatMap(function (_a) {
                            var table = _a.table, indexes = _a.indexes;
                            return indexes.map(function (_a) {
                                var name = _a.name, columns = _a.columns, strategy = _a.strategy;
                                return __awaiter(void 0, void 0, void 0, function () {
                                    var indexName;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                indexName = getId("".concat(table, "__").concat(name !== null && name !== void 0 ? name : columns.join('_')));
                                                if (!(strategy !== 'drop-only')) return [3 /*break*/, 2];
                                                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["drop index ", ""], ["drop index ", ""])), indexName))];
                                            case 1:
                                                _b.sent();
                                                _b.label = 2;
                                            case 2: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n              create index ", " \n                on ", " (\n                  ", "\n                );\n            "], ["\n              create index ", " \n                on ", " (\n                  ", "\n                );\n            "])), indexName, getId(table), slonik_1.sql.join(columns.map(function (column) { return (0, slonik_sql_tag_raw_1.raw)(column); }), (0, slonik_1.sql)(templateObject_18 || (templateObject_18 = __makeTemplateObject([", "], [", "]))))))];
                                            case 3:
                                                _b.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                        }))];
                case 2:
                    // Restore indexes
                    _a.sent();
                    // Drop `tenant_id` column cascade
                    return [4 /*yield*/, Promise.all(tables.map(function (tableName) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // Add `tenant_id` column and set existing data to the default tenant
                                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n          alter table ", "\n            drop column ", " cascade;\n        "], ["\n          alter table ", "\n            drop column ", " cascade;\n        "])), getId(tableName), tenantId))];
                                    case 1:
                                        // Add `tenant_id` column and set existing data to the default tenant
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 3:
                    // Drop `tenant_id` column cascade
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
