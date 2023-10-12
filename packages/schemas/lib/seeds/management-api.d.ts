import { RoleType, type CreateResource, type CreateRole, type CreateScope } from '../db-entries/index.js';
import { PredefinedScope, InternalRole } from '../types/index.js';
export type AdminData = {
    resource: CreateResource;
    scopes: CreateScope[];
    role: CreateRole;
};
export type UpdateAdminData = Omit<AdminData, 'role'> & {
    /** Attach to an existing role instead of creating one. */
    role: Pick<CreateRole, 'tenantId' | 'name'>;
};
/** The fixed Management API Resource for `default` tenant. */
export declare const defaultManagementApi: Readonly<{
    resource: {
        tenantId: string;
        /** @deprecated You should not rely on this constant. Change to something else. */
        id: string;
        /**
         * The fixed resource indicator for Management APIs.
         *
         * Admin Console requires the access token of this resource to be functional.
         */
        indicator: string;
        name: string;
    };
    scopes: {
        tenantId: string;
        /** @deprecated You should not rely on this constant. Change to something else. */
        id: string;
        name: PredefinedScope;
        description: string;
        /** @deprecated You should not rely on this constant. Change to something else. */
        resourceId: string;
    }[];
    role: {
        tenantId: string;
        /** @deprecated You should not rely on this constant. Change to something else. */
        id: string;
        name: InternalRole;
        description: string;
        type: RoleType.MachineToMachine;
    };
}>;
export declare function getManagementApiResourceIndicator<TenantId extends string>(tenantId: TenantId): `https://${TenantId}.logto.app/api`;
export declare function getManagementApiResourceIndicator<TenantId extends string, Path extends string>(tenantId: TenantId, path: Path): `https://${TenantId}.logto.app/${Path}`;
export declare const getManagementApiAdminName: <TenantId extends string>(tenantId: TenantId) => `${TenantId}:admin`;
/** Create a set of admin data for Management API of the given tenant ID. */
export declare const createAdminData: (tenantId: string) => AdminData;
/** Create a set of admin data for Management API of the given tenant ID for `admin` tenant. */
export declare const createAdminDataInAdminTenant: (tenantId: string) => AdminData;
export declare const createMeApiInAdminTenant: () => AdminData;
