"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredefinedScope = exports.AdminTenantRole = exports.InternalRole = exports.userMfaVerificationResponseGuard = exports.userProfileResponseGuard = exports.userInfoGuard = exports.userInfoSelectFields = void 0;
var zod_1 = require("zod");
var index_js_1 = require("../db-entries/index.js");
var jsonb_types_js_1 = require("../foundations/jsonb-types.js");
exports.userInfoSelectFields = Object.freeze([
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
exports.userInfoGuard = index_js_1.Users.guard.pick(Object.fromEntries(exports.userInfoSelectFields.map(function (key) { return [key, true]; })));
exports.userProfileResponseGuard = exports.userInfoGuard.extend({
    hasPassword: zod_1.z.boolean().optional(),
});
exports.userMfaVerificationResponseGuard = zod_1.z
    .object({
    id: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    type: zod_1.z.nativeEnum(jsonb_types_js_1.MfaFactor),
    agent: zod_1.z.string().optional(),
    used: zod_1.z.boolean().optional(),
})
    .array();
/** Internal read-only roles for user tenants. */
var InternalRole;
(function (InternalRole) {
    /**
     * Internal admin role for Machine-to-Machine apps in Logto user tenants.
     *
     * It should NOT be assigned to any user.
     */
    InternalRole["Admin"] = "#internal:admin";
})(InternalRole = exports.InternalRole || (exports.InternalRole = {}));
var AdminTenantRole;
(function (AdminTenantRole) {
    AdminTenantRole["Admin"] = "admin";
    /** Common user role in admin tenant. */
    AdminTenantRole["User"] = "user";
    /** The role for machine to machine applications that represent a user tenant and send requests to Logto Cloud. */
    AdminTenantRole["TenantApplication"] = "tenantApplication";
})(AdminTenantRole = exports.AdminTenantRole || (exports.AdminTenantRole = {}));
var PredefinedScope;
(function (PredefinedScope) {
    PredefinedScope["All"] = "all";
})(PredefinedScope = exports.PredefinedScope || (exports.PredefinedScope = {}));
