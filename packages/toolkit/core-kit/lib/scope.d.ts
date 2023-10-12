export declare enum ReservedScope {
    OpenId = "openid",
    OfflineAccess = "offline_access"
}
export type UserClaim = 'name' | 'picture' | 'username' | 'email' | 'email_verified' | 'phone_number' | 'phone_number_verified' | 'roles' | 'custom_data' | 'identities';
/**
 * Scopes for ID Token and Userinfo Endpoint.
 */
export declare enum UserScope {
    /**
     * Scope for basic user info.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    Profile = "profile",
    /**
     * Scope for user email address.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    Email = "email",
    /**
     * Scope for user phone number.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    Phone = "phone",
    /**
     * Scope for user's custom data.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    CustomData = "custom_data",
    /**
     * Scope for user's social identity details.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    Identities = "identities",
    /**
     * Scope for user's roles.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    Roles = "roles"
}
/**
 * Mapped claims that ID Token includes.
 */
export declare const idTokenClaims: Readonly<Record<UserScope, UserClaim[]>>;
/**
 * Additional claims that Userinfo Endpoint returns.
 */
export declare const userinfoClaims: Readonly<Record<UserScope, UserClaim[]>>;
export declare const userClaims: Readonly<Record<UserScope, UserClaim[]>>;
