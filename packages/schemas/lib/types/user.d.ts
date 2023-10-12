import { z } from 'zod';
import { MfaFactor } from '../foundations/jsonb-types.js';
export declare const userInfoSelectFields: readonly ["id", "username", "primaryEmail", "primaryPhone", "name", "avatar", "customData", "identities", "lastSignInAt", "createdAt", "applicationId", "isSuspended"];
export declare const userInfoGuard: z.ZodObject<Pick<{
    tenantId: z.ZodType<string, z.ZodTypeDef, string>;
    id: z.ZodType<string, z.ZodTypeDef, string>;
    username: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    primaryEmail: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    primaryPhone: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    passwordEncrypted: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    passwordEncryptionMethod: z.ZodType<import("../db-entries/custom-types.js").UsersPasswordEncryptionMethod | null, z.ZodTypeDef, import("../db-entries/custom-types.js").UsersPasswordEncryptionMethod | null>;
    name: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    avatar: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    applicationId: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    identities: z.ZodType<Record<string, {
        details?: {} | undefined;
        userId: string;
    }>, z.ZodTypeDef, Record<string, {
        details?: {} | undefined;
        userId: string;
    }>>;
    customData: z.ZodType<import("../foundations/jsonb-types.js").JsonObject, z.ZodTypeDef, import("../foundations/jsonb-types.js").JsonObject>;
    mfaVerifications: z.ZodType<({
        type: MfaFactor.TOTP;
        key: string;
        id: string;
        createdAt: string;
    } | {
        type: MfaFactor.WebAuthn;
        id: string;
        createdAt: string;
        credentialId: string;
        publicKey: string;
        counter: number;
        agent: string;
    } | {
        usedAt?: string | undefined;
        code: string;
        type: MfaFactor.BackupCode;
        id: string;
        createdAt: string;
    })[], z.ZodTypeDef, ({
        type: MfaFactor.TOTP;
        key: string;
        id: string;
        createdAt: string;
    } | {
        type: MfaFactor.WebAuthn;
        id: string;
        createdAt: string;
        credentialId: string;
        publicKey: string;
        counter: number;
        agent: string;
    } | {
        usedAt?: string | undefined;
        code: string;
        type: MfaFactor.BackupCode;
        id: string;
        createdAt: string;
    })[]>;
    isSuspended: z.ZodType<boolean, z.ZodTypeDef, boolean>;
    lastSignInAt: z.ZodType<number | null, z.ZodTypeDef, number | null>;
    createdAt: z.ZodType<number, z.ZodTypeDef, number>;
}, "tenantId" | "username" | "id" | "createdAt" | "applicationId" | "name" | "primaryEmail" | "primaryPhone" | "passwordEncrypted" | "passwordEncryptionMethod" | "avatar" | "identities" | "customData" | "mfaVerifications" | "isSuspended" | "lastSignInAt">, "strip", z.ZodTypeAny, {
    tenantId: string;
    username: string | null;
    id: string;
    createdAt: number;
    applicationId: string | null;
    name: string | null;
    primaryEmail: string | null;
    primaryPhone: string | null;
    passwordEncrypted: string | null;
    passwordEncryptionMethod: import("../db-entries/custom-types.js").UsersPasswordEncryptionMethod | null;
    avatar: string | null;
    identities: Record<string, {
        details?: {} | undefined;
        userId: string;
    }>;
    customData: import("../foundations/jsonb-types.js").JsonObject;
    mfaVerifications: ({
        type: MfaFactor.TOTP;
        key: string;
        id: string;
        createdAt: string;
    } | {
        type: MfaFactor.WebAuthn;
        id: string;
        createdAt: string;
        credentialId: string;
        publicKey: string;
        counter: number;
        agent: string;
    } | {
        usedAt?: string | undefined;
        code: string;
        type: MfaFactor.BackupCode;
        id: string;
        createdAt: string;
    })[];
    isSuspended: boolean;
    lastSignInAt: number | null;
}, {
    tenantId: string;
    username: string | null;
    id: string;
    createdAt: number;
    applicationId: string | null;
    name: string | null;
    primaryEmail: string | null;
    primaryPhone: string | null;
    passwordEncrypted: string | null;
    passwordEncryptionMethod: import("../db-entries/custom-types.js").UsersPasswordEncryptionMethod | null;
    avatar: string | null;
    identities: Record<string, {
        details?: {} | undefined;
        userId: string;
    }>;
    customData: import("../foundations/jsonb-types.js").JsonObject;
    mfaVerifications: ({
        type: MfaFactor.TOTP;
        key: string;
        id: string;
        createdAt: string;
    } | {
        type: MfaFactor.WebAuthn;
        id: string;
        createdAt: string;
        credentialId: string;
        publicKey: string;
        counter: number;
        agent: string;
    } | {
        usedAt?: string | undefined;
        code: string;
        type: MfaFactor.BackupCode;
        id: string;
        createdAt: string;
    })[];
    isSuspended: boolean;
    lastSignInAt: number | null;
}>;
export type UserInfo = z.infer<typeof userInfoGuard>;
export declare const userProfileResponseGuard: z.ZodObject<z.extendShape<Pick<{
    tenantId: z.ZodType<string, z.ZodTypeDef, string>;
    id: z.ZodType<string, z.ZodTypeDef, string>;
    username: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    primaryEmail: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    primaryPhone: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    passwordEncrypted: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    passwordEncryptionMethod: z.ZodType<import("../db-entries/custom-types.js").UsersPasswordEncryptionMethod | null, z.ZodTypeDef, import("../db-entries/custom-types.js").UsersPasswordEncryptionMethod | null>;
    name: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    avatar: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    applicationId: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    identities: z.ZodType<Record<string, {
        details?: {} | undefined;
        userId: string;
    }>, z.ZodTypeDef, Record<string, {
        details?: {} | undefined;
        userId: string;
    }>>;
    customData: z.ZodType<import("../foundations/jsonb-types.js").JsonObject, z.ZodTypeDef, import("../foundations/jsonb-types.js").JsonObject>;
    mfaVerifications: z.ZodType<({
        type: MfaFactor.TOTP;
        key: string;
        id: string;
        createdAt: string;
    } | {
        type: MfaFactor.WebAuthn;
        id: string;
        createdAt: string;
        credentialId: string;
        publicKey: string;
        counter: number;
        agent: string;
    } | {
        usedAt?: string | undefined;
        code: string;
        type: MfaFactor.BackupCode;
        id: string;
        createdAt: string;
    })[], z.ZodTypeDef, ({
        type: MfaFactor.TOTP;
        key: string;
        id: string;
        createdAt: string;
    } | {
        type: MfaFactor.WebAuthn;
        id: string;
        createdAt: string;
        credentialId: string;
        publicKey: string;
        counter: number;
        agent: string;
    } | {
        usedAt?: string | undefined;
        code: string;
        type: MfaFactor.BackupCode;
        id: string;
        createdAt: string;
    })[]>;
    isSuspended: z.ZodType<boolean, z.ZodTypeDef, boolean>;
    lastSignInAt: z.ZodType<number | null, z.ZodTypeDef, number | null>;
    createdAt: z.ZodType<number, z.ZodTypeDef, number>;
}, "tenantId" | "username" | "id" | "createdAt" | "applicationId" | "name" | "primaryEmail" | "primaryPhone" | "passwordEncrypted" | "passwordEncryptionMethod" | "avatar" | "identities" | "customData" | "mfaVerifications" | "isSuspended" | "lastSignInAt">, {
    hasPassword: z.ZodOptional<z.ZodBoolean>;
}>, "strip", z.ZodTypeAny, {
    hasPassword?: boolean | undefined;
    tenantId: string;
    username: string | null;
    id: string;
    createdAt: number;
    applicationId: string | null;
    name: string | null;
    primaryEmail: string | null;
    primaryPhone: string | null;
    passwordEncrypted: string | null;
    passwordEncryptionMethod: import("../db-entries/custom-types.js").UsersPasswordEncryptionMethod | null;
    avatar: string | null;
    identities: Record<string, {
        details?: {} | undefined;
        userId: string;
    }>;
    customData: import("../foundations/jsonb-types.js").JsonObject;
    mfaVerifications: ({
        type: MfaFactor.TOTP;
        key: string;
        id: string;
        createdAt: string;
    } | {
        type: MfaFactor.WebAuthn;
        id: string;
        createdAt: string;
        credentialId: string;
        publicKey: string;
        counter: number;
        agent: string;
    } | {
        usedAt?: string | undefined;
        code: string;
        type: MfaFactor.BackupCode;
        id: string;
        createdAt: string;
    })[];
    isSuspended: boolean;
    lastSignInAt: number | null;
}, {
    hasPassword?: boolean | undefined;
    tenantId: string;
    username: string | null;
    id: string;
    createdAt: number;
    applicationId: string | null;
    name: string | null;
    primaryEmail: string | null;
    primaryPhone: string | null;
    passwordEncrypted: string | null;
    passwordEncryptionMethod: import("../db-entries/custom-types.js").UsersPasswordEncryptionMethod | null;
    avatar: string | null;
    identities: Record<string, {
        details?: {} | undefined;
        userId: string;
    }>;
    customData: import("../foundations/jsonb-types.js").JsonObject;
    mfaVerifications: ({
        type: MfaFactor.TOTP;
        key: string;
        id: string;
        createdAt: string;
    } | {
        type: MfaFactor.WebAuthn;
        id: string;
        createdAt: string;
        credentialId: string;
        publicKey: string;
        counter: number;
        agent: string;
    } | {
        usedAt?: string | undefined;
        code: string;
        type: MfaFactor.BackupCode;
        id: string;
        createdAt: string;
    })[];
    isSuspended: boolean;
    lastSignInAt: number | null;
}>;
export type UserProfileResponse = z.infer<typeof userProfileResponseGuard>;
export declare const userMfaVerificationResponseGuard: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodNativeEnum<typeof MfaFactor>;
    agent: z.ZodOptional<z.ZodString>;
    used: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    agent?: string | undefined;
    used?: boolean | undefined;
    type: MfaFactor;
    id: string;
    createdAt: string;
}, {
    agent?: string | undefined;
    used?: boolean | undefined;
    type: MfaFactor;
    id: string;
    createdAt: string;
}>, "many">;
export type UserMfaVerificationResponse = z.infer<typeof userMfaVerificationResponseGuard>;
/** Internal read-only roles for user tenants. */
export declare enum InternalRole {
    /**
     * Internal admin role for Machine-to-Machine apps in Logto user tenants.
     *
     * It should NOT be assigned to any user.
     */
    Admin = "#internal:admin"
}
export declare enum AdminTenantRole {
    Admin = "admin",
    /** Common user role in admin tenant. */
    User = "user",
    /** The role for machine to machine applications that represent a user tenant and send requests to Logto Cloud. */
    TenantApplication = "tenantApplication"
}
export declare enum PredefinedScope {
    All = "all"
}
