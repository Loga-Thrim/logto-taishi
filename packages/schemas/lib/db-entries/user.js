// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { z } from 'zod';
import { identitiesGuard, jsonObjectGuard, mfaVerificationsGuard } from './../foundations/index.js';
import { UsersPasswordEncryptionMethod } from './custom-types.js';
const createGuard = z.object({
    tenantId: z.string().max(21).optional(),
    id: z.string().min(1).max(12),
    username: z.string().max(128).nullable().optional(),
    primaryEmail: z.string().max(128).nullable().optional(),
    primaryPhone: z.string().max(128).nullable().optional(),
    passwordEncrypted: z.string().max(128).nullable().optional(),
    passwordEncryptionMethod: z.nativeEnum(UsersPasswordEncryptionMethod).nullable().optional(),
    name: z.string().max(128).nullable().optional(),
    avatar: z.string().max(2048).nullable().optional(),
    applicationId: z.string().max(21).nullable().optional(),
    identities: identitiesGuard.optional(),
    customData: jsonObjectGuard.optional(),
    mfaVerifications: mfaVerificationsGuard.optional(),
    isSuspended: z.boolean().optional(),
    lastSignInAt: z.number().nullable().optional(),
    createdAt: z.number().optional(),
});
const guard = z.object({
    tenantId: z.string().max(21),
    id: z.string().min(1).max(12),
    username: z.string().max(128).nullable(),
    primaryEmail: z.string().max(128).nullable(),
    primaryPhone: z.string().max(128).nullable(),
    passwordEncrypted: z.string().max(128).nullable(),
    passwordEncryptionMethod: z.nativeEnum(UsersPasswordEncryptionMethod).nullable(),
    name: z.string().max(128).nullable(),
    avatar: z.string().max(2048).nullable(),
    applicationId: z.string().max(21).nullable(),
    identities: identitiesGuard,
    customData: jsonObjectGuard,
    mfaVerifications: mfaVerificationsGuard,
    isSuspended: z.boolean(),
    lastSignInAt: z.number().nullable(),
    createdAt: z.number(),
});
export const Users = Object.freeze({
    table: 'users',
    tableSingular: 'user',
    fields: {
        tenantId: 'tenant_id',
        id: 'id',
        username: 'username',
        primaryEmail: 'primary_email',
        primaryPhone: 'primary_phone',
        passwordEncrypted: 'password_encrypted',
        passwordEncryptionMethod: 'password_encryption_method',
        name: 'name',
        avatar: 'avatar',
        applicationId: 'application_id',
        identities: 'identities',
        customData: 'custom_data',
        mfaVerifications: 'mfa_verifications',
        isSuspended: 'is_suspended',
        lastSignInAt: 'last_sign_in_at',
        createdAt: 'created_at',
    },
    fieldKeys: [
        'tenantId',
        'id',
        'username',
        'primaryEmail',
        'primaryPhone',
        'passwordEncrypted',
        'passwordEncryptionMethod',
        'name',
        'avatar',
        'applicationId',
        'identities',
        'customData',
        'mfaVerifications',
        'isSuspended',
        'lastSignInAt',
        'createdAt',
    ],
    createGuard,
    guard,
});
