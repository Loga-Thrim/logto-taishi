"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMeApiInAdminTenant = exports.createAdminDataInAdminTenant = exports.createAdminData = exports.getManagementApiAdminName = exports.getManagementApiResourceIndicator = exports.defaultManagementApi = void 0;
var universal_1 = require("@logto/shared/universal");
var index_js_1 = require("../db-entries/index.js");
var index_js_2 = require("../types/index.js");
var tenant_js_1 = require("./tenant.js");
// Consider remove the dependency of IDs
var defaultResourceId = 'management-api';
var defaultScopeAllId = 'management-api-all';
// Consider combining this with `createAdminData()`
/** The fixed Management API Resource for `default` tenant. */
exports.defaultManagementApi = Object.freeze({
    resource: {
        tenantId: tenant_js_1.defaultTenantId,
        /** @deprecated You should not rely on this constant. Change to something else. */
        id: defaultResourceId,
        /**
         * The fixed resource indicator for Management APIs.
         *
         * Admin Console requires the access token of this resource to be functional.
         */
        indicator: "https://".concat(tenant_js_1.defaultTenantId, ".logto.app/api"),
        name: 'Logto Management API',
    },
    scopes: [
        {
            tenantId: tenant_js_1.defaultTenantId,
            /** @deprecated You should not rely on this constant. Change to something else. */
            id: defaultScopeAllId,
            name: index_js_2.PredefinedScope.All,
            description: 'Default scope for Management API, allows all permissions.',
            /** @deprecated You should not rely on this constant. Change to something else. */
            resourceId: defaultResourceId,
        },
    ],
    role: {
        tenantId: tenant_js_1.defaultTenantId,
        /** @deprecated You should not rely on this constant. Change to something else. */
        id: 'admin-role',
        name: index_js_2.InternalRole.Admin,
        description: "Internal admin role for Logto tenant ".concat(tenant_js_1.defaultTenantId, "."),
        type: index_js_1.RoleType.MachineToMachine,
    },
});
function getManagementApiResourceIndicator(tenantId, path) {
    if (path === void 0) { path = 'api'; }
    return "https://".concat(tenantId, ".logto.app/").concat(path);
}
exports.getManagementApiResourceIndicator = getManagementApiResourceIndicator;
var getManagementApiAdminName = function (tenantId) {
    return "".concat(tenantId, ":").concat(index_js_2.AdminTenantRole.Admin);
};
exports.getManagementApiAdminName = getManagementApiAdminName;
/** Create a set of admin data for Management API of the given tenant ID. */
var createAdminData = function (tenantId) {
    var resourceId = (0, universal_1.generateStandardId)();
    return Object.freeze({
        resource: {
            tenantId: tenantId,
            id: resourceId,
            indicator: getManagementApiResourceIndicator(tenantId),
            name: "Logto Management API",
        },
        scopes: [
            {
                tenantId: tenantId,
                id: (0, universal_1.generateStandardId)(),
                name: index_js_2.PredefinedScope.All,
                description: 'Default scope for Management API, allows all permissions.',
                resourceId: resourceId,
            },
        ],
        role: {
            tenantId: tenantId,
            id: (0, universal_1.generateStandardId)(),
            name: index_js_2.InternalRole.Admin,
            description: "Internal admin role for Logto tenant ".concat(tenant_js_1.defaultTenantId, "."),
            type: index_js_1.RoleType.MachineToMachine,
        },
    });
};
exports.createAdminData = createAdminData;
/** Create a set of admin data for Management API of the given tenant ID for `admin` tenant. */
var createAdminDataInAdminTenant = function (tenantId) {
    var resourceId = (0, universal_1.generateStandardId)();
    return Object.freeze({
        resource: {
            tenantId: tenant_js_1.adminTenantId,
            id: resourceId,
            indicator: getManagementApiResourceIndicator(tenantId),
            name: "Logto Management API for tenant ".concat(tenantId),
        },
        scopes: [
            {
                tenantId: tenant_js_1.adminTenantId,
                id: (0, universal_1.generateStandardId)(),
                name: index_js_2.PredefinedScope.All,
                description: 'Default scope for Management API, allows all permissions.',
                resourceId: resourceId,
            },
        ],
        role: {
            tenantId: tenant_js_1.adminTenantId,
            id: (0, universal_1.generateStandardId)(),
            name: (0, exports.getManagementApiAdminName)(tenantId),
            description: "Admin tenant admin role for Logto tenant ".concat(tenantId, "."),
            type: index_js_1.RoleType.User,
        },
    });
};
exports.createAdminDataInAdminTenant = createAdminDataInAdminTenant;
var createMeApiInAdminTenant = function () {
    var resourceId = (0, universal_1.generateStandardId)();
    return Object.freeze({
        resource: {
            tenantId: tenant_js_1.adminTenantId,
            id: resourceId,
            indicator: getManagementApiResourceIndicator(tenant_js_1.adminTenantId, 'me'),
            name: "Logto Me API",
        },
        scopes: [
            {
                tenantId: tenant_js_1.adminTenantId,
                id: (0, universal_1.generateStandardId)(),
                name: index_js_2.PredefinedScope.All,
                description: 'Default scope for Me API, allows all permissions.',
                resourceId: resourceId,
            },
        ],
        role: {
            tenantId: tenant_js_1.adminTenantId,
            id: (0, universal_1.generateStandardId)(),
            name: index_js_2.AdminTenantRole.User,
            description: 'Default role for admin tenant.',
            type: index_js_1.RoleType.User,
        },
    });
};
exports.createMeApiInAdminTenant = createMeApiInAdminTenant;
