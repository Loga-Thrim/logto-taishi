import type { AdminData, UpdateAdminData, CreateScope } from '@logto/schemas';
import type { CommonQueryMethods } from 'slonik';
export declare const createTenant: (pool: CommonQueryMethods, tenantId: string) => Promise<void>;
export declare const seedAdminData: (pool: CommonQueryMethods, data: AdminData | UpdateAdminData, ...additionalScopes: CreateScope[]) => Promise<void>;
export declare const assignScopesToRole: (pool: CommonQueryMethods, tenantId: string, roleId: string, ...scopeIds: string[]) => Promise<void>;
