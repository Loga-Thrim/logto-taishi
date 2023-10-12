/** The type of a token event. */
export var Type;
(function (Type) {
    Type["ExchangeTokenBy"] = "ExchangeTokenBy";
    Type["RevokeToken"] = "RevokeToken";
})(Type || (Type = {}));
/** Available grant token types extracted from [oidc-provider](https://github.com/panva/node-oidc-provider/blob/564b1095ee869c89381d63dfdb5875c99f870f5f/lib/helpers/revoke.js#L13). */
export var TokenType;
(function (TokenType) {
    TokenType["AccessToken"] = "AccessToken";
    TokenType["RefreshToken"] = "RefreshToken";
    TokenType["IdToken"] = "IdToken";
    TokenType["AuthorizationCode"] = "AuthorizationCode";
    TokenType["DeviceCode"] = "DeviceCode";
    TokenType["BackchannelAuthenticationRequest"] = "BackchannelAuthenticationRequest";
})(TokenType || (TokenType = {}));
/** The credential to request a grant. */
export var ExchangeByType;
(function (ExchangeByType) {
    ExchangeByType["Unknown"] = "Unknown";
    ExchangeByType["AuthorizationCode"] = "AuthorizationCode";
    ExchangeByType["RefreshToken"] = "RefreshToken";
    ExchangeByType["ClientCredentials"] = "ClientCredentials";
})(ExchangeByType || (ExchangeByType = {}));
