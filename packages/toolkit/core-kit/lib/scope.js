export var ReservedScope;
(function (ReservedScope) {
    ReservedScope["OpenId"] = "openid";
    ReservedScope["OfflineAccess"] = "offline_access";
})(ReservedScope || (ReservedScope = {}));
/**
 * Scopes for ID Token and Userinfo Endpoint.
 */
export var UserScope;
(function (UserScope) {
    /**
     * Scope for basic user info.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    UserScope["Profile"] = "profile";
    /**
     * Scope for user email address.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    UserScope["Email"] = "email";
    /**
     * Scope for user phone number.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    UserScope["Phone"] = "phone";
    /**
     * Scope for user's custom data.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    UserScope["CustomData"] = "custom_data";
    /**
     * Scope for user's social identity details.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    UserScope["Identities"] = "identities";
    /**
     * Scope for user's roles.
     *
     * See {@link idTokenClaims} for mapped claims in ID Token and {@link userinfoClaims} for additional claims in Userinfo Endpoint.
     */
    UserScope["Roles"] = "roles";
})(UserScope || (UserScope = {}));
/**
 * Mapped claims that ID Token includes.
 */
export const idTokenClaims = Object.freeze({
    [UserScope.Profile]: ['name', 'picture', 'username'],
    [UserScope.Email]: ['email', 'email_verified'],
    [UserScope.Phone]: ['phone_number', 'phone_number_verified'],
    [UserScope.Roles]: ['roles'],
    [UserScope.CustomData]: [],
    [UserScope.Identities]: [],
});
/**
 * Additional claims that Userinfo Endpoint returns.
 */
export const userinfoClaims = Object.freeze({
    [UserScope.Profile]: [],
    [UserScope.Email]: [],
    [UserScope.Phone]: [],
    [UserScope.Roles]: [],
    [UserScope.CustomData]: ['custom_data'],
    [UserScope.Identities]: ['identities'],
});
export const userClaims = Object.freeze(
// Hard to infer type directly, use `as` for a workaround.
// eslint-disable-next-line no-restricted-syntax
Object.fromEntries(Object.values(UserScope).map((current) => [
    current,
    [...idTokenClaims[current], ...userinfoClaims[current]],
])));
