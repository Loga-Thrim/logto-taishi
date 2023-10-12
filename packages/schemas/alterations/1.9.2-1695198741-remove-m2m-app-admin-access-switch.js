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
var essentials_1 = require("@silverhand/essentials");
var slonik_1 = require("slonik");
var InternalRole;
(function (InternalRole) {
    InternalRole["Admin"] = "#internal:admin";
})(InternalRole || (InternalRole = {}));
var RoleType;
(function (RoleType) {
    RoleType["User"] = "User";
    RoleType["MachineToMachine"] = "MachineToMachine";
})(RoleType || (RoleType = {}));
var PredefinedScope;
(function (PredefinedScope) {
    PredefinedScope["All"] = "all";
})(PredefinedScope || (PredefinedScope = {}));
var getManagementApiResourceIndicator = function (tenantId) { return "https://".concat(tenantId, ".logto.app/api"); };
var managementApiAccessRoleName = 'Management API access';
var managementApiAccessRoleDescription = 'Management API access';
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var internalManagementApiRolesCandidates, internalManagementApiRoles, applicationRoles, tenantsNeedManagementApiAccessRole, insertedRoles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      select\n        roles.id as \"role_id\",\n        roles.tenant_id as \"tenant_id\",\n        scopes.id as \"scope_id\",\n        resources.indicator as \"indicator\" from roles\n      join roles_scopes\n        on roles_scopes.role_id = roles.id and roles_scopes.tenant_id = roles.tenant_id\n      join scopes\n        on scopes.id = roles_scopes.scope_id and scopes.tenant_id = roles_scopes.tenant_id\n      join resources\n        on resources.id = scopes.resource_id and resources.tenant_id = scopes.tenant_id\n      where\n        roles.name = ", "\n        and roles.type = ", "\n        and scopes.name = ", "\n        and resources.indicator like ", "\n        and resources.name = 'Logto Management API'\n    "], ["\n      select\n        roles.id as \"role_id\",\n        roles.tenant_id as \"tenant_id\",\n        scopes.id as \"scope_id\",\n        resources.indicator as \"indicator\" from roles\n      join roles_scopes\n        on roles_scopes.role_id = roles.id and roles_scopes.tenant_id = roles.tenant_id\n      join scopes\n        on scopes.id = roles_scopes.scope_id and scopes.tenant_id = roles_scopes.tenant_id\n      join resources\n        on resources.id = scopes.resource_id and resources.tenant_id = scopes.tenant_id\n      where\n        roles.name = ", "\n        and roles.type = ", "\n        and scopes.name = ", "\n        and resources.indicator like ", "\n        and resources.name = 'Logto Management API'\n    "])), InternalRole.Admin, RoleType.MachineToMachine, PredefinedScope.All, getManagementApiResourceIndicator('%')))];
                case 1:
                    internalManagementApiRolesCandidates = (_a.sent()).rows;
                    internalManagementApiRoles = internalManagementApiRolesCandidates.filter(function (_a) {
                        var indicator = _a.indicator, tenantId = _a.tenantId;
                        return indicator === getManagementApiResourceIndicator(tenantId);
                    });
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      select * from applications_roles where (role_id, tenant_id) in (values ", ");\n    "], ["\n      select * from applications_roles where (role_id, tenant_id) in (values ", ");\n    "])), slonik_1.sql.join(internalManagementApiRoles.map(function (_a) {
                            var roleId = _a.roleId, tenantId = _a.tenantId;
                            return (0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["( ", ", ", " )"], ["( ", ", ", " )"])), roleId, tenantId);
                        }), (0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject([", "], [", "]))))))];
                case 2:
                    applicationRoles = (_a.sent()).rows;
                    tenantsNeedManagementApiAccessRole = (0, essentials_1.deduplicate)(applicationRoles.map(function (_a) {
                        var tenantId = _a.tenantId;
                        return tenantId;
                    }));
                    if (tenantsNeedManagementApiAccessRole.length === 0) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      insert into roles (tenant_id, id, name, description, type) values ", " returning *;\n    "], ["\n      insert into roles (tenant_id, id, name, description, type) values ", " returning *;\n    "])), slonik_1.sql.join(tenantsNeedManagementApiAccessRole.map(function (tenantId) {
                            return (0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["( ", ", ", ", ", ", ", ", ", " )"], ["( ", ", ", ", ", ", ", ", ", " )"])), tenantId, (0, universal_1.generateStandardId)(), managementApiAccessRoleName, managementApiAccessRoleDescription, RoleType.MachineToMachine);
                        }), (0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject([", "], [", "]))))))];
                case 3:
                    insertedRoles = (_a.sent()).rows;
                    /**
                     * Step 4
                     * Assign internal admin access scopes to new roles.
                     */
                    return [4 /*yield*/, Promise.all(insertedRoles.map(function (_a) {
                            var tenantId = _a.tenantId, roleId = _a.id;
                            return __awaiter(void 0, void 0, void 0, function () {
                                var internalRoleForTenant;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            internalRoleForTenant = internalManagementApiRoles.find(function (_a) {
                                                var roleTenantId = _a.tenantId;
                                                return tenantId === roleTenantId;
                                            });
                                            if (!internalRoleForTenant) {
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          insert into roles_scopes (tenant_id, id, role_id, scope_id) values (", ", ", ", ", ", ", ");\n        "], ["\n          insert into roles_scopes (tenant_id, id, role_id, scope_id) values (", ", ", ", ", ", ", ");\n        "])), tenantId, (0, universal_1.generateStandardId)(), roleId, internalRoleForTenant.scopeId))];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }))];
                case 4:
                    /**
                     * Step 4
                     * Assign internal admin access scopes to new roles.
                     */
                    _a.sent();
                    /**
                     * Step 5
                     * Should remove internal admin access roles from m2m applications and assign new roles (created in step 3) to them.
                     * These two steps can be done by simply replace the role_id in applications_roles table.
                     */
                    return [4 /*yield*/, Promise.all(insertedRoles.map(function (_a) {
                            var tenantId = _a.tenantId, roleId = _a.id;
                            return __awaiter(void 0, void 0, void 0, function () {
                                var applicationRolesOfTheTenant, previousInternalRole;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            applicationRolesOfTheTenant = applicationRoles.filter(function (_a) {
                                                var applicationRoleTenantId = _a.tenantId;
                                                return tenantId === applicationRoleTenantId;
                                            });
                                            previousInternalRole = internalManagementApiRoles.find(function (_a) {
                                                var internalRoleTenantId = _a.tenantId;
                                                return internalRoleTenantId === tenantId;
                                            });
                                            if (applicationRolesOfTheTenant.length === 0 || !previousInternalRole) {
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n          update applications_roles set role_id = ", " where tenant_id = ", " and role_id = ", " and application_id in (", ");\n        "], ["\n          update applications_roles set role_id = ", " where tenant_id = ", " and role_id = ", " and application_id in (", ");\n        "])), roleId, tenantId, previousInternalRole.roleId, slonik_1.sql.join(applicationRolesOfTheTenant.map(function (_a) {
                                                    var applicationId = _a.applicationId;
                                                    return applicationId;
                                                }), (0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject([", "], [", "]))))))];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }))];
                case 5:
                    /**
                     * Step 5
                     * Should remove internal admin access roles from m2m applications and assign new roles (created in step 3) to them.
                     * These two steps can be done by simply replace the role_id in applications_roles table.
                     */
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var managementApiAccessRolesCandidates, managementApiAccessRoles, applicationRoles, concernedTenantIds, internalAdminAccessRoles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      select\n        roles.id as \"role_id\",\n        roles.tenant_id as \"tenant_id\",\n        scopes.id as \"scope_id\",\n        resources.indicator as \"indicator\" from roles\n      join roles_scopes\n        on roles_scopes.role_id = roles.id and roles_scopes.tenant_id = roles.tenant_id\n      join scopes\n        on scopes.id = roles_scopes.scope_id and scopes.tenant_id = roles_scopes.tenant_id\n      join resources\n        on resources.id = scopes.resource_id and resources.tenant_id = scopes.tenant_id\n      where\n        roles.name = ", "\n        and roles.description = ", "\n        and roles.type = ", "\n        and scopes.name = ", "\n        and resources.indicator like ", "\n        and resources.name = 'Logto Management API';\n    "], ["\n      select\n        roles.id as \"role_id\",\n        roles.tenant_id as \"tenant_id\",\n        scopes.id as \"scope_id\",\n        resources.indicator as \"indicator\" from roles\n      join roles_scopes\n        on roles_scopes.role_id = roles.id and roles_scopes.tenant_id = roles.tenant_id\n      join scopes\n        on scopes.id = roles_scopes.scope_id and scopes.tenant_id = roles_scopes.tenant_id\n      join resources\n        on resources.id = scopes.resource_id and resources.tenant_id = scopes.tenant_id\n      where\n        roles.name = ", "\n        and roles.description = ", "\n        and roles.type = ", "\n        and scopes.name = ", "\n        and resources.indicator like ", "\n        and resources.name = 'Logto Management API';\n    "])), managementApiAccessRoleName, managementApiAccessRoleDescription, RoleType.MachineToMachine, PredefinedScope.All, getManagementApiResourceIndicator('%')))];
                case 1:
                    managementApiAccessRolesCandidates = (_a.sent()).rows;
                    managementApiAccessRoles = managementApiAccessRolesCandidates.filter(function (_a) {
                        var indicator = _a.indicator, tenantId = _a.tenantId;
                        return indicator === getManagementApiResourceIndicator(tenantId);
                    });
                    /**
                     * Step 2
                     * Get all applications_roles related to the management api access role.
                     */
                    if (managementApiAccessRoles.length === 0) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      select * from applications_roles where (role_id, tenant_id) in (values ", ");\n    "], ["\n      select * from applications_roles where (role_id, tenant_id) in (values ", ");\n    "])), slonik_1.sql.join(managementApiAccessRoles.map(function (_a) {
                            var roleId = _a.roleId, tenantId = _a.tenantId;
                            return (0, slonik_1.sql)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["( ", ", ", " )"], ["( ", ", ", " )"])), roleId, tenantId);
                        }), (0, slonik_1.sql)(templateObject_13 || (templateObject_13 = __makeTemplateObject([", "], [", "]))))))];
                case 2:
                    applicationRoles = (_a.sent()).rows;
                    concernedTenantIds = (0, essentials_1.deduplicate)(managementApiAccessRoles.map(function (_a) {
                        var tenantId = _a.tenantId;
                        return tenantId;
                    }));
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      select\n        roles.id as \"roleId\",\n        roles.tenant_id as \"tenantId\" from roles\n      join roles_scopes\n        on roles.tenant_id = roles_scopes.tenant_id and roles.id = roles_scopes.role_id\n      join scopes\n        on scopes.tenant_id = roles_scopes.tenant_id and scopes.id = roles_scopes.scope_id\n      join resources\n        on resources.id = scopes.resource_id and resources.tenant_id = scopes.tenant_id\n      where\n        roles.name = ", "\n        and ( roles.tenant_id, resources.indicator ) in (values ", ");\n    "], ["\n      select\n        roles.id as \"roleId\",\n        roles.tenant_id as \"tenantId\" from roles\n      join roles_scopes\n        on roles.tenant_id = roles_scopes.tenant_id and roles.id = roles_scopes.role_id\n      join scopes\n        on scopes.tenant_id = roles_scopes.tenant_id and scopes.id = roles_scopes.scope_id\n      join resources\n        on resources.id = scopes.resource_id and resources.tenant_id = scopes.tenant_id\n      where\n        roles.name = ", "\n        and ( roles.tenant_id, resources.indicator ) in (values ", ");\n    "])), InternalRole.Admin, slonik_1.sql.join(concernedTenantIds.map(function (tenantId) { return (0, slonik_1.sql)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["( ", ", ", " )"], ["( ", ", ", " )"])), tenantId, getManagementApiResourceIndicator(tenantId)); }), (0, slonik_1.sql)(templateObject_16 || (templateObject_16 = __makeTemplateObject([", "], [", "]))))))];
                case 3:
                    internalAdminAccessRoles = (_a.sent()).rows;
                    /**
                     * Step 4
                     * Assign internal admin access roles to m2m apps with management api access roles. (Found in step 2)
                     */
                    return [4 /*yield*/, Promise.all(internalAdminAccessRoles.map(function (_a) {
                            var internalAdminAccessRoleId = _a.roleId, tenantId = _a.tenantId;
                            return __awaiter(void 0, void 0, void 0, function () {
                                var pendingApplicationsOfTenant, previousManagementApiAccessRole;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            pendingApplicationsOfTenant = applicationRoles.filter(function (_a) {
                                                var applicationTenantId = _a.tenantId;
                                                return tenantId === applicationTenantId;
                                            });
                                            previousManagementApiAccessRole = managementApiAccessRoles.find(function (_a) {
                                                var managementApiAccessRoleTenantId = _a.tenantId;
                                                return managementApiAccessRoleTenantId === tenantId;
                                            });
                                            if (pendingApplicationsOfTenant.length === 0 || !previousManagementApiAccessRole) {
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n          update applications_roles set role_id = ", " where tenant_id = ", " and role_id = ", " and application_id in (", ");\n        "], ["\n          update applications_roles set role_id = ", " where tenant_id = ", " and role_id = ", " and application_id in (", ");\n        "])), internalAdminAccessRoleId, tenantId, previousManagementApiAccessRole.roleId, slonik_1.sql.join(pendingApplicationsOfTenant.map(function (_a) {
                                                    var applicationId = _a.applicationId;
                                                    return applicationId;
                                                }), (0, slonik_1.sql)(templateObject_18 || (templateObject_18 = __makeTemplateObject([", "], [", "]))))))];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }))];
                case 4:
                    /**
                     * Step 4
                     * Assign internal admin access roles to m2m apps with management api access roles. (Found in step 2)
                     */
                    _a.sent();
                    /**
                     * Step 5
                     * Remove management api access roles. (`roles_scopes` will automatically be removed if roles are removed)
                     */
                    if (managementApiAccessRoles.length === 0) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, Promise.all(managementApiAccessRoles.map(function (_a) {
                            var roleId = _a.roleId, tenantId = _a.tenantId;
                            return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n          delete from roles where id = ", " and tenant_id = ", ";\n        "], ["\n          delete from roles where id = ", " and tenant_id = ", ";\n        "])), roleId, tenantId))];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }))];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
