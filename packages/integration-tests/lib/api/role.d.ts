import type { CreateRole, Role, Scope, User, Application } from '@logto/schemas';
import { RoleType } from '@logto/schemas';
export type GetRoleOptions = {
    excludeUserId?: string;
    excludeApplicationId?: string;
};
export declare const createRole: ({ name, description, type, scopeIds, }: {
    name?: string | undefined;
    description?: string | undefined;
    type?: RoleType | undefined;
    scopeIds?: string[] | undefined;
}) => Promise<Role>;
export declare const getRoles: (options?: GetRoleOptions) => Promise<Role[]>;
export declare const getRole: (roleId: string) => Promise<Role>;
export declare const updateRole: (roleId: string, payload: Partial<Omit<CreateRole, 'id'>>) => Promise<Role>;
export declare const deleteRole: (roleId: string) => Promise<import("got").Response<string>>;
export declare const getRoleScopes: (roleId: string) => Promise<Scope[]>;
export declare const assignScopesToRole: (scopeIds: string[], roleId: string) => Promise<Scope[]>;
export declare const deleteScopeFromRole: (scopeId: string, roleId: string) => Promise<import("got").Response<string>>;
export declare const getRoleUsers: (roleId: string) => Promise<User[]>;
export declare const assignUsersToRole: (userIds: string[], roleId: string) => Promise<import("got").Response<string>>;
export declare const deleteUserFromRole: (userId: string, roleId: string) => Promise<import("got").Response<string>>;
export declare const getRoleApplications: (roleId: string) => Promise<Application[]>;
export declare const assignApplicationsToRole: (applicationIds: string[], roleId: string) => Promise<import("got").Response<string>>;
export declare const deleteApplicationFromRole: (applicationId: string, roleId: string) => Promise<import("got").Response<string>>;
