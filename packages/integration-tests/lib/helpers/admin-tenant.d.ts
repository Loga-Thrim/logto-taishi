import type { LogtoConfig } from '@logto/node';
import { AdminTenantRole, type User } from '@logto/schemas';
import type { InteractionPayload } from '#src/api/interaction.js';
export declare const resourceDefault: "https://default.logto.app/api";
export declare const resourceMe: "https://admin.logto.app/me";
export declare const createUserWithAllRoles: () => Promise<readonly [User, {
    readonly username: string;
    readonly password: string;
}]>;
export declare const deleteUser: (id: string) => Promise<void>;
export declare const putInteraction: (cookie: string, payload: InteractionPayload) => Promise<unknown>;
export declare const initClientAndSignIn: (username: string, password: string, config?: Partial<LogtoConfig>) => Promise<import("../client/index.js").default>;
export declare const createUserWithAllRolesAndSignInToClient: () => Promise<{
    id: string;
    client: import("../client/index.js").default;
}>;
export declare const createUserAndSignInToCloudClient: (userRoleType: AdminTenantRole.User | AdminTenantRole.Admin) => Promise<{
    id: string;
    client: import("../client/index.js").default;
}>;
