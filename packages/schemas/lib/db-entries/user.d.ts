import { Identities, JsonObject, MfaVerifications, GeneratedSchema } from './../foundations/index.js';
import { UsersPasswordEncryptionMethod } from './custom-types.js';
export type CreateUser = {
    tenantId?: string;
    id: string;
    username?: string | null;
    primaryEmail?: string | null;
    primaryPhone?: string | null;
    passwordEncrypted?: string | null;
    passwordEncryptionMethod?: UsersPasswordEncryptionMethod | null;
    name?: string | null;
    avatar?: string | null;
    applicationId?: string | null;
    identities?: Identities;
    customData?: JsonObject;
    mfaVerifications?: MfaVerifications;
    isSuspended?: boolean;
    lastSignInAt?: number | null;
    createdAt?: number;
};
export type User = {
    tenantId: string;
    id: string;
    username: string | null;
    primaryEmail: string | null;
    primaryPhone: string | null;
    passwordEncrypted: string | null;
    passwordEncryptionMethod: UsersPasswordEncryptionMethod | null;
    name: string | null;
    avatar: string | null;
    applicationId: string | null;
    identities: Identities;
    customData: JsonObject;
    mfaVerifications: MfaVerifications;
    isSuspended: boolean;
    lastSignInAt: number | null;
    createdAt: number;
};
export declare const Users: GeneratedSchema<CreateUser, User>;
