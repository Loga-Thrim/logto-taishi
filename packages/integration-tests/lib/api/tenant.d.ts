import type { TenantTag } from '@logto/schemas/models';
export declare const createTenant: (accessToken: string, payload: {
    name: string;
    tag: TenantTag;
}) => Promise<{
    id: string;
    name: string;
    indicator: string;
    isSuspended: boolean;
    tag: TenantTag;
}>;
export declare const getTenants: (accessToken: string) => Promise<{
    id: string;
    name: string;
    indicator: string;
    isSuspended: boolean;
    tag: TenantTag;
}[]>;
export declare const updateTenant: (accessToken: string, tenantId: string, payload: {
    name?: string;
    tag?: TenantTag;
}) => Promise<{
    id: string;
    name: string;
    indicator: string;
    isSuspended: boolean;
    tag: TenantTag;
}>;
export declare const deleteTenant: (accessToken: string, tenantId: string) => Promise<unknown>;
