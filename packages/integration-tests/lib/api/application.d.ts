import { type Application, type CreateApplication, type ApplicationType, type OidcClientMetadata, type Role } from '@logto/schemas';
export declare const createApplication: (name: string, type: ApplicationType, rest?: Partial<CreateApplication>) => Promise<Application>;
export declare const getApplications: (types?: ApplicationType[]) => Promise<Application[]>;
export declare const getApplication: (applicationId: string) => Promise<Application & {
    isAdmin: boolean;
}>;
export declare const updateApplication: (applicationId: string, payload: Partial<Omit<CreateApplication, 'id' | 'created_at' | 'oidcClientMetadata'> & {
    oidcClientMetadata: Partial<OidcClientMetadata>;
}> & {
    isAdmin?: boolean;
}) => Promise<Application>;
export declare const deleteApplication: (applicationId: string) => Promise<import("got").Response<string>>;
export declare const getApplicationRoles: (applicationId: string) => Promise<Role[]>;
export declare const assignRolesToApplication: (applicationId: string, roleIds: string[]) => Promise<import("got").Response<string>>;
export declare const putRolesToApplication: (applicationId: string, roleIds: string[]) => Promise<import("got").Response<string>>;
export declare const deleteRoleFromApplication: (applicationId: string, roleId: string) => Promise<import("got").Response<string>>;
