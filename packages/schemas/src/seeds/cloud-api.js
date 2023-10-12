"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTenantApplicationRole = exports.createCloudApi = exports.CloudScope = exports.cloudApiIndicator = void 0;
var universal_1 = require("@logto/shared/universal");
var index_js_1 = require("../db-entries/index.js");
var index_js_2 = require("../types/index.js");
var tenant_js_1 = require("./tenant.js");
/** The API Resource Indicator for Logto Cloud. It's only useful when domain-based multi-tenancy is enabled. */
exports.cloudApiIndicator = 'https://cloud.logto.io/api';
var CloudScope;
(function (CloudScope) {
    /** The user can create a user tenant. */
    CloudScope["CreateTenant"] = "create:tenant";
    /** The user can perform arbitrary operations on any tenant. */
    CloudScope["ManageTenant"] = "manage:tenant";
    /** The user can update or delete its own tenants. */
    CloudScope["ManageTenantSelf"] = "manage:tenant:self";
    CloudScope["SendSms"] = "send:sms";
    CloudScope["SendEmail"] = "send:email";
    /** The user can see and manage affiliates, including create, update, and delete. */
    CloudScope["ManageAffiliate"] = "manage:affiliate";
    /** The user can create new affiliates and logs. */
    CloudScope["CreateAffiliate"] = "create:affiliate";
})(CloudScope = exports.CloudScope || (exports.CloudScope = {}));
var createCloudApi = function () {
    var resourceId = (0, universal_1.generateStandardId)();
    var buildScope = function (name, description) { return ({
        tenantId: tenant_js_1.adminTenantId,
        id: (0, universal_1.generateStandardId)(),
        name: name,
        description: description,
        resourceId: resourceId,
    }); };
    return Object.freeze([
        {
            resource: {
                tenantId: tenant_js_1.adminTenantId,
                id: resourceId,
                indicator: exports.cloudApiIndicator,
                name: "Logto Cloud API",
            },
            scopes: [
                buildScope(CloudScope.CreateTenant, 'Allow creating new tenants.'),
                buildScope(CloudScope.ManageTenantSelf, 'Allow managing tenant itself, including update and delete.'),
            ],
            role: {
                tenantId: tenant_js_1.adminTenantId,
                name: index_js_2.AdminTenantRole.User,
            },
        },
        buildScope(CloudScope.ManageTenant, 'Allow managing existing tenants, including create without limitation, update, and delete.'),
        buildScope(CloudScope.SendEmail, 'Allow sending emails. This scope is only available to M2M application.'),
        buildScope(CloudScope.SendSms, 'Allow sending SMS. This scope is only available to M2M application.'),
        buildScope(CloudScope.CreateAffiliate, 'Allow creating new affiliates and logs.'),
        buildScope(CloudScope.ManageAffiliate, 'Allow managing affiliates, including create, update, and delete.'),
    ]);
};
exports.createCloudApi = createCloudApi;
var createTenantApplicationRole = function () { return ({
    tenantId: tenant_js_1.adminTenantId,
    id: (0, universal_1.generateStandardId)(),
    name: index_js_2.AdminTenantRole.TenantApplication,
    description: 'The role for M2M applications that represent a user tenant and send requests to Logto Cloud.',
    type: index_js_1.RoleType.MachineToMachine,
}); };
exports.createTenantApplicationRole = createTenantApplicationRole;
