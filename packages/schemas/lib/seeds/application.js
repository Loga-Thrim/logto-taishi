import { generateStandardId, generateStandardSecret } from '@logto/shared/universal';
import { ApplicationType } from '../db-entries/index.js';
import { adminTenantId } from './tenant.js';
/**
 * The fixed application ID for Admin Console.
 *
 * This built-in application does not belong to any tenant in the OSS version.
 */
export const adminConsoleApplicationId = 'admin-console';
export const demoAppApplicationId = 'demo-app';
export const buildDemoAppDataForTenant = (tenantId) => ({
    tenantId,
    id: demoAppApplicationId,
    name: 'Live Preview',
    secret: 'N/A',
    description: 'Preview for Sign-in Experience.',
    type: ApplicationType.SPA,
    oidcClientMetadata: { redirectUris: [], postLogoutRedirectUris: [] },
    customClientMetadata: {},
    createdAt: 0,
});
export const createDefaultAdminConsoleApplication = () => Object.freeze({
    tenantId: adminTenantId,
    id: adminConsoleApplicationId,
    name: 'Admin Console',
    secret: generateStandardSecret(),
    description: 'Logto Admin Console.',
    type: ApplicationType.SPA,
    oidcClientMetadata: { redirectUris: [], postLogoutRedirectUris: [] },
});
export const createTenantMachineToMachineApplication = (tenantId) => Object.freeze({
    tenantId: adminTenantId,
    id: generateStandardId(),
    name: 'Cloud Service',
    description: `Machine to machine application for tenant ${tenantId}`,
    secret: generateStandardSecret(),
    type: ApplicationType.MachineToMachine,
    oidcClientMetadata: {
        redirectUris: [],
        postLogoutRedirectUris: [],
    },
    customClientMetadata: {
        tenantId,
    },
});
/** Create role for "tenant application (M2M)" in admin tenant */
export const createAdminTenantApplicationRole = (applicationId, roleId) => Object.freeze({
    id: generateStandardId(),
    tenantId: adminTenantId,
    applicationId,
    roleId,
});
