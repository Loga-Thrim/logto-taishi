"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeByType = exports.TokenType = exports.Type = void 0;
/** The type of a token event. */
var Type;
(function (Type) {
    Type["ExchangeTokenBy"] = "ExchangeTokenBy";
    Type["RevokeToken"] = "RevokeToken";
})(Type = exports.Type || (exports.Type = {}));
/** Available grant token types extracted from [oidc-provider](https://github.com/panva/node-oidc-provider/blob/564b1095ee869c89381d63dfdb5875c99f870f5f/lib/helpers/revoke.js#L13). */
var TokenType;
(function (TokenType) {
    TokenType["AccessToken"] = "AccessToken";
    TokenType["RefreshToken"] = "RefreshToken";
    TokenType["IdToken"] = "IdToken";
    TokenType["AuthorizationCode"] = "AuthorizationCode";
    TokenType["DeviceCode"] = "DeviceCode";
    TokenType["BackchannelAuthenticationRequest"] = "BackchannelAuthenticationRequest";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
/** The credential to request a grant. */
var ExchangeByType;
(function (ExchangeByType) {
    ExchangeByType["Unknown"] = "Unknown";
    ExchangeByType["AuthorizationCode"] = "AuthorizationCode";
    ExchangeByType["RefreshToken"] = "RefreshToken";
    ExchangeByType["ClientCredentials"] = "ClientCredentials";
})(ExchangeByType = exports.ExchangeByType || (exports.ExchangeByType = {}));
