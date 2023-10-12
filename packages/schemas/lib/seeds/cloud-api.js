import { generateStandardId } from '@logto/shared/universal';
import { RoleType } from '../db-entries/index.js';
import { AdminTenantRole } from '../types/index.js';
import { adminTenantId } from './tenant.js';
/** The API Resource Indicator for Logto Cloud. It's only useful when domain-based multi-tenancy is enabled. */
export const cloudApiIndicator = 'https://cloud.logto.io/api';
export var CloudScope;
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
})(CloudScope || (CloudScope = {}));
export const createCloudApi = () => {
    const resourceId = generateStandardId();
    const buildScope = (name, description) => ({
        tenantId: adminTenantId,
        id: generateStandardId(),
        name,
        description,
        resourceId,
    });
    return Object.freeze([
        {
            resource: {
                tenantId: adminTenantId,
                id: resourceId,
                indicator: cloudApiIndicator,
                name: `Logto Cloud API`,
            },
            scopes: [
                buildScope(CloudScope.CreateTenant, 'Allow creating new tenants.'),
                buildScope(CloudScope.ManageTenantSelf, 'Allow managing tenant itself, including update and delete.'),
            ],
            role: {
                tenantId: adminTenantId,
                name: AdminTenantRole.User,
            },
        },
        buildScope(CloudScope.ManageTenant, 'Allow managing existing tenants, including create without limitation, update, and delete.'),
        buildScope(CloudScope.SendEmail, 'Allow sending emails. This scope is only available to M2M application.'),
        buildScope(CloudScope.SendSms, 'Allow sending SMS. This scope is only available to M2M application.'),
        buildScope(CloudScope.CreateAffiliate, 'Allow creating new affiliates and logs.'),
        buildScope(CloudScope.ManageAffiliate, 'Allow managing affiliates, including create, update, and delete.'),
    ]);
};
export const createTenantApplicationRole = () => ({
    tenantId: adminTenantId,
    id: generateStandardId(),
    name: AdminTenantRole.TenantApplication,
    description: 'The role for M2M applications that represent a user tenant and send requests to Logto Cloud.',
    type: RoleType.MachineToMachine,
});
