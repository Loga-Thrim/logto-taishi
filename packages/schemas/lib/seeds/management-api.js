import { generateStandardId } from '@logto/shared/universal';
import { RoleType, } from '../db-entries/index.js';
import { PredefinedScope, InternalRole, AdminTenantRole } from '../types/index.js';
import { adminTenantId, defaultTenantId } from './tenant.js';
// Consider remove the dependency of IDs
const defaultResourceId = 'management-api';
const defaultScopeAllId = 'management-api-all';
// Consider combining this with `createAdminData()`
/** The fixed Management API Resource for `default` tenant. */
export const defaultManagementApi = Object.freeze({
    resource: {
        tenantId: defaultTenantId,
        /** @deprecated You should not rely on this constant. Change to something else. */
        id: defaultResourceId,
        /**
         * The fixed resource indicator for Management APIs.
         *
         * Admin Console requires the access token of this resource to be functional.
         */
        indicator: `https://${defaultTenantId}.logto.app/api`,
        name: 'Logto Management API',
    },
    scopes: [
        {
            tenantId: defaultTenantId,
            /** @deprecated You should not rely on this constant. Change to something else. */
            id: defaultScopeAllId,
            name: PredefinedScope.All,
            description: 'Default scope for Management API, allows all permissions.',
            /** @deprecated You should not rely on this constant. Change to something else. */
            resourceId: defaultResourceId,
        },
    ],
    role: {
        tenantId: defaultTenantId,
        /** @deprecated You should not rely on this constant. Change to something else. */
        id: 'admin-role',
        name: InternalRole.Admin,
        description: `Internal admin role for Logto tenant ${defaultTenantId}.`,
        type: RoleType.MachineToMachine,
    },
});
export function getManagementApiResourceIndicator(tenantId, path = 'api') {
    return `https://${tenantId}.logto.app/${path}`;
}
export const getManagementApiAdminName = (tenantId) => `${tenantId}:${AdminTenantRole.Admin}`;
/** Create a set of admin data for Management API of the given tenant ID. */
export const createAdminData = (tenantId) => {
    const resourceId = generateStandardId();
    return Object.freeze({
        resource: {
            tenantId,
            id: resourceId,
            indicator: getManagementApiResourceIndicator(tenantId),
            name: `Logto Management API`,
        },
        scopes: [
            {
                tenantId,
                id: generateStandardId(),
                name: PredefinedScope.All,
                description: 'Default scope for Management API, allows all permissions.',
                resourceId,
            },
        ],
        role: {
            tenantId,
            id: generateStandardId(),
            name: InternalRole.Admin,
            description: `Internal admin role for Logto tenant ${defaultTenantId}.`,
            type: RoleType.MachineToMachine,
        },
    });
};
/** Create a set of admin data for Management API of the given tenant ID for `admin` tenant. */
export const createAdminDataInAdminTenant = (tenantId) => {
    const resourceId = generateStandardId();
    return Object.freeze({
        resource: {
            tenantId: adminTenantId,
            id: resourceId,
            indicator: getManagementApiResourceIndicator(tenantId),
            name: `Logto Management API for tenant ${tenantId}`,
        },
        scopes: [
            {
                tenantId: adminTenantId,
                id: generateStandardId(),
                name: PredefinedScope.All,
                description: 'Default scope for Management API, allows all permissions.',
                resourceId,
            },
        ],
        role: {
            tenantId: adminTenantId,
            id: generateStandardId(),
            name: getManagementApiAdminName(tenantId),
            description: `Admin tenant admin role for Logto tenant ${tenantId}.`,
            type: RoleType.User,
        },
    });
};
export const createMeApiInAdminTenant = () => {
    const resourceId = generateStandardId();
    return Object.freeze({
        resource: {
            tenantId: adminTenantId,
            id: resourceId,
            indicator: getManagementApiResourceIndicator(adminTenantId, 'me'),
            name: `Logto Me API`,
        },
        scopes: [
            {
                tenantId: adminTenantId,
                id: generateStandardId(),
                name: PredefinedScope.All,
                description: 'Default scope for Me API, allows all permissions.',
                resourceId,
            },
        ],
        role: {
            tenantId: adminTenantId,
            id: generateStandardId(),
            name: AdminTenantRole.User,
            description: 'Default role for admin tenant.',
            type: RoleType.User,
        },
    });
};
