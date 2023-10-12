import { z } from 'zod';
import { Users } from '../db-entries/index.js';
import { MfaFactor } from '../foundations/jsonb-types.js';
export const userInfoSelectFields = Object.freeze([
    'id',
    'username',
    'primaryEmail',
    'primaryPhone',
    'name',
    'avatar',
    'customData',
    'identities',
    'lastSignInAt',
    'createdAt',
    'applicationId',
    'isSuspended',
]);
export const userInfoGuard = Users.guard.pick(Object.fromEntries(userInfoSelectFields.map((key) => [key, true])));
export const userProfileResponseGuard = userInfoGuard.extend({
    hasPassword: z.boolean().optional(),
});
export const userMfaVerificationResponseGuard = z
    .object({
    id: z.string(),
    createdAt: z.string(),
    type: z.nativeEnum(MfaFactor),
    agent: z.string().optional(),
    used: z.boolean().optional(),
})
    .array();
/** Internal read-only roles for user tenants. */
export var InternalRole;
(function (InternalRole) {
    /**
     * Internal admin role for Machine-to-Machine apps in Logto user tenants.
     *
     * It should NOT be assigned to any user.
     */
    InternalRole["Admin"] = "#internal:admin";
})(InternalRole || (InternalRole = {}));
export var AdminTenantRole;
(function (AdminTenantRole) {
    AdminTenantRole["Admin"] = "admin";
    /** Common user role in admin tenant. */
    AdminTenantRole["User"] = "user";
    /** The role for machine to machine applications that represent a user tenant and send requests to Logto Cloud. */
    AdminTenantRole["TenantApplication"] = "tenantApplication";
})(AdminTenantRole || (AdminTenantRole = {}));
export var PredefinedScope;
(function (PredefinedScope) {
    PredefinedScope["All"] = "all";
})(PredefinedScope || (PredefinedScope = {}));
