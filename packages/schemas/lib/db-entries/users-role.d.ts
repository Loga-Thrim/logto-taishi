import { GeneratedSchema } from './../foundations/index.js';
export type CreateUsersRole = {
    tenantId?: string;
    id: string;
    userId: string;
    roleId: string;
};
export type UsersRole = {
    tenantId: string;
    id: string;
    userId: string;
    roleId: string;
};
export declare const UsersRoles: GeneratedSchema<CreateUsersRole, UsersRole>;
