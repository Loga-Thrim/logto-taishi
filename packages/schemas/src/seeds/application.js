"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminTenantApplicationRole = exports.createTenantMachineToMachineApplication = exports.createDefaultAdminConsoleApplication = exports.buildDemoAppDataForTenant = exports.demoAppApplicationId = exports.adminConsoleApplicationId = void 0;
var universal_1 = require("@logto/shared/universal");
var index_js_1 = require("../db-entries/index.js");
var tenant_js_1 = require("./tenant.js");
/**
 * The fixed application ID for Admin Console.
 *
 * This built-in application does not belong to any tenant in the OSS version.
 */
exports.adminConsoleApplicationId = 'admin-console';
exports.demoAppApplicationId = 'demo-app';
var buildDemoAppDataForTenant = function (tenantId) { return ({
    tenantId: tenantId,
    id: exports.demoAppApplicationId,
    name: 'Live Preview',
    secret: 'N/A',
    description: 'Preview for Sign-in Experience.',
    type: index_js_1.ApplicationType.SPA,
    oidcClientMetadata: { redirectUris: [], postLogoutRedirectUris: [] },
    customClientMetadata: {},
    createdAt: 0,
}); };
exports.buildDemoAppDataForTenant = buildDemoAppDataForTenant;
var createDefaultAdminConsoleApplication = function () {
    return Object.freeze({
        tenantId: tenant_js_1.adminTenantId,
        id: exports.adminConsoleApplicationId,
        name: 'Admin Console',
        secret: (0, universal_1.generateStandardSecret)(),
        description: 'Logto Admin Console.',
        type: index_js_1.ApplicationType.SPA,
        oidcClientMetadata: { redirectUris: [], postLogoutRedirectUris: [] },
    });
};
exports.createDefaultAdminConsoleApplication = createDefaultAdminConsoleApplication;
var createTenantMachineToMachineApplication = function (tenantId) {
    return Object.freeze({
        tenantId: tenant_js_1.adminTenantId,
        id: (0, universal_1.generateStandardId)(),
        name: 'Cloud Service',
        description: "Machine to machine application for tenant ".concat(tenantId),
        secret: (0, universal_1.generateStandardSecret)(),
        type: index_js_1.ApplicationType.MachineToMachine,
        oidcClientMetadata: {
            redirectUris: [],
            postLogoutRedirectUris: [],
        },
        customClientMetadata: {
            tenantId: tenantId,
        },
    });
};
exports.createTenantMachineToMachineApplication = createTenantMachineToMachineApplication;
/** Create role for "tenant application (M2M)" in admin tenant */
var createAdminTenantApplicationRole = function (applicationId, roleId) {
    return Object.freeze({
        id: (0, universal_1.generateStandardId)(),
        tenantId: tenant_js_1.adminTenantId,
        applicationId: applicationId,
        roleId: roleId,
    });
};
exports.createAdminTenantApplicationRole = createAdminTenantApplicationRole;
