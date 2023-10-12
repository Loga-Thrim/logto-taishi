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
var node_crypto_1 = require("node:crypto");
var node_util_1 = require("node:util");
var universal_1 = require("@logto/shared/universal");
var inquirer_1 = require("inquirer");
var slonik_1 = require("slonik");
// Copied from CLI with default execution path
var generateOidcPrivateKey = function () { return __awaiter(void 0, void 0, void 0, function () {
    var privateKey;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, node_util_1.promisify)(node_crypto_1.generateKeyPair)('ec', {
                    // https://security.stackexchange.com/questions/78621/which-elliptic-curve-should-i-use
                    namedCurve: 'secp384r1',
                    publicKeyEncoding: {
                        type: 'spki',
                        format: 'pem',
                    },
                    privateKeyEncoding: {
                        type: 'pkcs8',
                        format: 'pem',
                    },
                })];
            case 1:
                privateKey = (_a.sent()).privateKey;
                return [2 /*return*/, privateKey];
        }
    });
}); };
var generateOidcCookieKey = function () { return (0, universal_1.generateStandardId)(); };
// Edited from CLI
var updateConfigByKey = function (pool, tenantId, key, value) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      insert into logto_configs (tenant_id, key, value) \n        values (", ", ", ", ", ")\n    "], ["\n      insert into logto_configs (tenant_id, key, value) \n        values (", ", ", ", ", ")\n    "])), tenantId, key, slonik_1.sql.jsonb(value)))];
    });
}); };
var adminTenantId = 'admin';
var defaultTenantId = 'default';
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, rows, invalidUsers, userIds, inUserIds, roles;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = updateConfigByKey;
                    _b = [pool, adminTenantId, 'oidc.privateKeys'];
                    return [4 /*yield*/, generateOidcPrivateKey()];
                case 1: 
                // Init admin OIDC configs
                return [4 /*yield*/, _a.apply(void 0, _b.concat([[
                            _c.sent()
                        ]]))];
                case 2:
                    // Init admin OIDC configs
                    _c.sent();
                    return [4 /*yield*/, updateConfigByKey(pool, adminTenantId, 'oidc.cookieKeys', [generateOidcCookieKey()])];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      select\n        users.id as \"userId\",\n        (select count(*) from users_roles where users.id = user_id) \n      from users\n        inner join users_roles on users.id = users_roles.user_id\n        inner join roles on roles.id = users_roles.role_id\n        where roles.name = 'admin';\n    "], ["\n      select\n        users.id as \"userId\",\n        (select count(*) from users_roles where users.id = user_id) \n      from users\n        inner join users_roles on users.id = users_roles.user_id\n        inner join roles on roles.id = users_roles.role_id\n        where roles.name = 'admin';\n    "]))))];
                case 4:
                    rows = (_c.sent()).rows;
                    invalidUsers = rows.filter(function (_a) {
                        var count = _a.count;
                        return count > 1;
                    });
                    if (invalidUsers.length > 0) {
                        throw new Error('Some of your current admin users have extra roles. Either remove their `admin` role to become a normal user, or remove all other roles to migrate them to the new Admin Tenant.\n\n' +
                            'Invalid user IDs: ' +
                            invalidUsers.map(function (_a) {
                                var userId = _a.userId;
                                return userId;
                            }).join(', '));
                    }
                    userIds = rows.map(function (_a) {
                        var userId = _a.userId;
                        return userId;
                    });
                    if (userIds.length === 0) {
                        console.log('No admin user found, skip alteration');
                        return [2 /*return*/];
                    }
                    inUserIds = (0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["in (", ")"], ["in (", ")"])), slonik_1.sql.join(userIds, (0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject([", "], [", "])))));
                    // Remove the admin role from users_roles
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      delete from users_roles\n      where user_id ", ";\n    "], ["\n      delete from users_roles\n      where user_id ", ";\n    "])), inUserIds))];
                case 5:
                    // Remove the admin role from users_roles
                    _c.sent();
                    // Update data
                    console.warn('Some of the logs will stay in the default tenant since the related interaction has been removed.');
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      update users\n        set tenant_id = ", "\n        where id ", ";\n    "], ["\n      update users\n        set tenant_id = ", "\n        where id ", ";\n    "])), adminTenantId, inUserIds))];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      update logs\n        set tenant_id = ", "\n        where payload->>'userId' ", ";\n    "], ["\n      update logs\n        set tenant_id = ", "\n        where payload->>'userId' ", ";\n    "])), adminTenantId, inUserIds))];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      update oidc_model_instances\n      set tenant_id = ", "\n        where payload->>'accountId' ", ";\n    "], ["\n      update oidc_model_instances\n      set tenant_id = ", "\n        where payload->>'accountId' ", ";\n    "])), adminTenantId, inUserIds))];
                case 8:
                    _c.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      select id from roles\n        where tenant_id = ", "\n        and (name = ", " or name = ", ")\n    "], ["\n      select id from roles\n        where tenant_id = ", "\n        and (name = ", " or name = ", ")\n    "])), adminTenantId, 'default:admin', 'user'))];
                case 9:
                    roles = (_c.sent()).rows;
                    if (roles.length !== 2) {
                        throw new Error('Admin tenant should have both `default:admin` and `user` role.');
                    }
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      insert into users_roles (tenant_id, id, user_id, role_id)\n        values ", ";\n    "], ["\n      insert into users_roles (tenant_id, id, user_id, role_id)\n        values ", ";\n    "])), slonik_1.sql.join(userIds.flatMap(function (userId) {
                            return roles.map(function (_a) {
                                var id = _a.id;
                                return (0, slonik_1.sql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["(", ", ", ", ", ", ", ")"], ["(", ", ", ", ", ", ", ")"])), adminTenantId, (0, universal_1.generateStandardId)(), userId, id);
                            });
                        }), (0, slonik_1.sql)(templateObject_11 || (templateObject_11 = __makeTemplateObject([","], [","]))))))];
                case 10:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var rows, tenantIds, isCi, confirm, adminUsers, adminUserIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["select id from tenants;"], ["select id from tenants;"]))))];
                case 1:
                    rows = (_a.sent()).rows;
                    tenantIds = rows
                        .map(function (_a) {
                        var id = _a.id;
                        return id;
                    })
                        .slice()
                        .sort(function (i, j) { return i.localeCompare(j); });
                    if (!(tenantIds.length === 2 && tenantIds[0] === 'admin' && tenantIds[1] === 'default')) {
                        throw new Error('The tenants table should only have exact `admin` and `default` tenant.');
                    }
                    isCi = process.env.CI;
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: 'confirm',
                            name: 'confirm',
                            message: String('***CAUTION***\n' +
                                'The `down()` function will restore Admin Tenant users to the default tenant.\n' +
                                'Except `users`, and `logs`, ALL other data will be dropped.\n' +
                                'Are you sure to continue?'),
                            default: false,
                            when: !isCi,
                        })];
                case 2:
                    confirm = (_a.sent()).confirm;
                    if (!isCi && !confirm) {
                        throw new Error('User cancelled alteration.');
                    }
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      select users.id from users\n        inner join users_roles on users.id = users_roles.user_id\n        inner join roles on roles.id = users_roles.role_id\n        where roles.name = 'default:admin'\n        and users.tenant_id = 'admin';\n    "], ["\n      select users.id from users\n        inner join users_roles on users.id = users_roles.user_id\n        inner join roles on roles.id = users_roles.role_id\n        where roles.name = 'default:admin'\n        and users.tenant_id = 'admin';\n    "]))))];
                case 3:
                    adminUsers = (_a.sent()).rows;
                    adminUserIds = adminUsers.map(function (_a) {
                        var id = _a.id;
                        return id;
                    });
                    if (!(adminUserIds.length > 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n        insert into users_roles (tenant_id, id, user_id, role_id)\n          values ", ";\n      "], ["\n        insert into users_roles (tenant_id, id, user_id, role_id)\n          values ", ";\n      "])), slonik_1.sql.join(adminUserIds.map(function (id) { return (0, slonik_1.sql)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["(", ", ", ", ", ", ", ")"], ["(", ", ", ", ", ", ", ")"])), defaultTenantId, (0, universal_1.generateStandardId)(), id, 'admin-role'); }), (0, slonik_1.sql)(templateObject_16 || (templateObject_16 = __makeTemplateObject([","], [","]))))))];
                case 4:
                    _a.sent();
                    console.log("Converted admin role for user ID(s): ".concat(adminUserIds.join(', ')));
                    _a.label = 5;
                case 5: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      update users set tenant_id = ", ";\n    "], ["\n      update users set tenant_id = ", ";\n    "])), defaultTenantId))];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n      update logs set tenant_id = ", ";\n    "], ["\n      update logs set tenant_id = ", ";\n    "])), defaultTenantId))];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n      delete from tenants where id = ", ";\n    "], ["\n      delete from tenants where id = ", ";\n    "])), adminTenantId))];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
