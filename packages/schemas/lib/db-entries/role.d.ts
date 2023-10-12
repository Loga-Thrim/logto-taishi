import { GeneratedSchema } from './../foundations/index.js';
import { RoleType } from './custom-types.js';
export type CreateRole = {
    tenantId?: string;
    id: string;
    name: string;
    description: string;
    type?: RoleType;
};
export type Role = {
    tenantId: string;
    id: string;
    name: string;
    description: string;
    type: RoleType;
};
export declare const Roles: GeneratedSchema<CreateRole, Role>;
