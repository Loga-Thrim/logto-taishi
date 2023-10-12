import { generateStandardId } from '@logto/shared/universal';
// Use lowercase letters for tenant IDs to improve compatibility
const generateTenantId = () => generateStandardId(6);
export const createTenantMetadata = (databaseName, tenantId = generateTenantId()) => {
    const parentRole = `logto_tenant_${databaseName}`;
    const role = `logto_tenant_${databaseName}_${tenantId}`;
    const password = generateStandardId(32);
    return { id: tenantId, parentRole, role, password };
};
