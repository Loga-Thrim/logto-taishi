export type TenantMetadata = {
    id: string;
    parentRole: string;
    role: string;
    password: string;
};
export declare const createTenantMetadata: (databaseName: string, tenantId?: string) => TenantMetadata;
