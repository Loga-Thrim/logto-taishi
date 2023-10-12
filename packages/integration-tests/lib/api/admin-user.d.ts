import type { Role, User } from '@logto/schemas';
type CreateUserPayload = Partial<{
    primaryEmail: string;
    primaryPhone: string;
    username: string;
    password: string;
    name: string;
}>;
export declare const createUser: (payload?: CreateUserPayload) => Promise<User>;
export declare const getUser: (userId: string) => Promise<User>;
export declare const getUsers: () => Promise<User[]>;
export declare const updateUser: (userId: string, payload: Partial<User>) => Promise<User>;
export declare const suspendUser: (userId: string, isSuspended: boolean) => Promise<User>;
export declare const deleteUser: (userId: string) => Promise<import("got").Response<string>>;
export declare const updateUserPassword: (userId: string, password: string) => Promise<User>;
export declare const deleteUserIdentity: (userId: string, connectorTarget: string) => Promise<import("got").Response<string>>;
export declare const assignRolesToUser: (userId: string, roleIds: string[]) => Promise<import("got").Response<string>>;
export declare const getUserRoles: (userId: string) => Promise<Role[]>;
export declare const deleteRoleFromUser: (userId: string, roleId: string) => Promise<import("got").Response<string>>;
export declare const postUserIdentity: (userId: string, connectorId: string, connectorData: Record<string, unknown>) => Promise<Record<string, {
    details?: {} | undefined;
    userId: string;
}>>;
export declare const verifyUserPassword: (userId: string, password: string) => Promise<import("got").Response<string>>;
export {};
