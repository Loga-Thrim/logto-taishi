import { got, HTTPError } from 'got';
import path from 'node:path';
import http from 'http';
import https from 'https';
import crypto$1 from 'crypto';
import require$$0 from 'buffer';
import require$$3 from 'stream';
import require$$5 from 'util';
import { ConnectorPlatform, ConnectorConfigFormItemType, ConnectorType, validateConfig, parseJson, ConnectorError, ConnectorErrorCodes } from '@logto/connector-kit';
import { z } from 'zod';

// https://github.com/facebook/jest/issues/7547
const assert = (value, error) => {
    if (!value) {
        // https://github.com/typescript-eslint/typescript-eslint/issues/3814
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw error;
    }
};

// eslint-disable-next-line id-length
// eslint-disable-next-line unicorn/prefer-native-coercion-functions
const notFalsy = (value) => Boolean(value);

/**
 * Conditional return the expression result when it's not {@link Falsy};
 * otherwise return `undefined`.
 *
 * @example
 * ```ts
 * conditional(1 && '2') // '2'
 * conditional(false && '1') // undefined
 * ```
 */
const conditional = (exp) => (notFalsy(exp) ? exp : undefined);

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Constants$1 = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    // Prefix for all library cache entries
    CACHE_PREFIX: "msal",
    // default authority
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    DEFAULT_COMMON_TENANT: "common",
    // ADFS String
    ADFS: "adfs",
    DSTS: "dstsv2",
    // Default AAD Instance Discovery Endpoint
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    // Resource delimiter - used for certain cache entries
    RESOURCE_DELIM: "|",
    // Placeholder for non-existent account ids/objects
    NO_ACCOUNT: "NO_ACCOUNT",
    // Claims
    CLAIMS: "claims",
    // Consumer UTID
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    // Default scopes
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    EMAIL_SCOPE: "email",
    // Default response type for authorization code flow
    CODE_RESPONSE_TYPE: "code",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    FRAGMENT_RESPONSE_MODE: "fragment",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    FORWARD_SLASH: "/",
    IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
    IMDS_VERSION: "2020-06-01",
    IMDS_TIMEOUT: 2000,
    AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
    REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
    REGIONAL_AUTH_NON_MSI_QUERY_STRING: "allowestsrnonmsi=true",
    KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
    TOKEN_RESPONSE_TYPE: "token",
    ID_TOKEN_RESPONSE_TYPE: "id_token",
    SHR_NONCE_VALIDITY: 240
};
var OIDC_DEFAULT_SCOPES = [
    Constants$1.OPENID_SCOPE,
    Constants$1.PROFILE_SCOPE,
    Constants$1.OFFLINE_ACCESS_SCOPE
];
var OIDC_SCOPES = __spreadArrays(OIDC_DEFAULT_SCOPES, [
    Constants$1.EMAIL_SCOPE
]);
/**
 * Request header names
 */
var HeaderNames;
(function (HeaderNames) {
    HeaderNames["CONTENT_TYPE"] = "Content-Type";
    HeaderNames["RETRY_AFTER"] = "Retry-After";
    HeaderNames["CCS_HEADER"] = "X-AnchorMailbox";
    HeaderNames["WWWAuthenticate"] = "WWW-Authenticate";
    HeaderNames["AuthenticationInfo"] = "Authentication-Info";
    HeaderNames["X_MS_REQUEST_ID"] = "x-ms-request-id";
})(HeaderNames || (HeaderNames = {}));
/**
 * Persistent cache keys MSAL which stay while user is logged in.
 */
var PersistentCacheKeys;
(function (PersistentCacheKeys) {
    PersistentCacheKeys["ID_TOKEN"] = "idtoken";
    PersistentCacheKeys["CLIENT_INFO"] = "client.info";
    PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
    PersistentCacheKeys["ERROR"] = "error";
    PersistentCacheKeys["ERROR_DESC"] = "error.description";
    PersistentCacheKeys["ACTIVE_ACCOUNT"] = "active-account";
    PersistentCacheKeys["ACTIVE_ACCOUNT_FILTERS"] = "active-account-filters"; // new cache entry for active_account for a more robust version for browser
})(PersistentCacheKeys || (PersistentCacheKeys = {}));
/**
 * String constants related to AAD Authority
 */
var AADAuthorityConstants;
(function (AADAuthorityConstants) {
    AADAuthorityConstants["COMMON"] = "common";
    AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
    AADAuthorityConstants["CONSUMERS"] = "consumers";
})(AADAuthorityConstants || (AADAuthorityConstants = {}));
/**
 * Keys in the hashParams sent by AAD Server
 */
var AADServerParamKeys;
(function (AADServerParamKeys) {
    AADServerParamKeys["CLIENT_ID"] = "client_id";
    AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
    AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
    AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
    AADServerParamKeys["GRANT_TYPE"] = "grant_type";
    AADServerParamKeys["CLAIMS"] = "claims";
    AADServerParamKeys["SCOPE"] = "scope";
    AADServerParamKeys["ERROR"] = "error";
    AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
    AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
    AADServerParamKeys["ID_TOKEN"] = "id_token";
    AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
    AADServerParamKeys["EXPIRES_IN"] = "expires_in";
    AADServerParamKeys["STATE"] = "state";
    AADServerParamKeys["NONCE"] = "nonce";
    AADServerParamKeys["PROMPT"] = "prompt";
    AADServerParamKeys["SESSION_STATE"] = "session_state";
    AADServerParamKeys["CLIENT_INFO"] = "client_info";
    AADServerParamKeys["CODE"] = "code";
    AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
    AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
    AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
    AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
    AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
    AADServerParamKeys["X_CLIENT_VER"] = "x-client-VER";
    AADServerParamKeys["X_CLIENT_OS"] = "x-client-OS";
    AADServerParamKeys["X_CLIENT_CPU"] = "x-client-CPU";
    AADServerParamKeys["X_CLIENT_CURR_TELEM"] = "x-client-current-telemetry";
    AADServerParamKeys["X_CLIENT_LAST_TELEM"] = "x-client-last-telemetry";
    AADServerParamKeys["X_MS_LIB_CAPABILITY"] = "x-ms-lib-capability";
    AADServerParamKeys["X_APP_NAME"] = "x-app-name";
    AADServerParamKeys["X_APP_VER"] = "x-app-ver";
    AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
    AADServerParamKeys["ID_TOKEN_HINT"] = "id_token_hint";
    AADServerParamKeys["DEVICE_CODE"] = "device_code";
    AADServerParamKeys["CLIENT_SECRET"] = "client_secret";
    AADServerParamKeys["CLIENT_ASSERTION"] = "client_assertion";
    AADServerParamKeys["CLIENT_ASSERTION_TYPE"] = "client_assertion_type";
    AADServerParamKeys["TOKEN_TYPE"] = "token_type";
    AADServerParamKeys["REQ_CNF"] = "req_cnf";
    AADServerParamKeys["OBO_ASSERTION"] = "assertion";
    AADServerParamKeys["REQUESTED_TOKEN_USE"] = "requested_token_use";
    AADServerParamKeys["ON_BEHALF_OF"] = "on_behalf_of";
    AADServerParamKeys["FOCI"] = "foci";
    AADServerParamKeys["CCS_HEADER"] = "X-AnchorMailbox";
    AADServerParamKeys["RETURN_SPA_CODE"] = "return_spa_code";
    AADServerParamKeys["NATIVE_BROKER"] = "nativebroker";
    AADServerParamKeys["LOGOUT_HINT"] = "logout_hint";
})(AADServerParamKeys || (AADServerParamKeys = {}));
/**
 * Claims request keys
 */
var ClaimsRequestKeys;
(function (ClaimsRequestKeys) {
    ClaimsRequestKeys["ACCESS_TOKEN"] = "access_token";
    ClaimsRequestKeys["XMS_CC"] = "xms_cc";
})(ClaimsRequestKeys || (ClaimsRequestKeys = {}));
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 */
var PromptValue = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
    CREATE: "create",
    NO_SESSION: "no_session"
};
/**
 * SSO Types - generated to populate hints
 */
var SSOTypes;
(function (SSOTypes) {
    SSOTypes["ACCOUNT"] = "account";
    SSOTypes["SID"] = "sid";
    SSOTypes["LOGIN_HINT"] = "login_hint";
    SSOTypes["ID_TOKEN"] = "id_token";
    SSOTypes["DOMAIN_HINT"] = "domain_hint";
    SSOTypes["ORGANIZATIONS"] = "organizations";
    SSOTypes["CONSUMERS"] = "consumers";
    SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
    SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
})(SSOTypes || (SSOTypes = {}));
/**
 * allowed values for codeVerifier
 */
var CodeChallengeMethodValues = {
    PLAIN: "plain",
    S256: "S256"
};
/**
 * allowed values for response_mode
 */
var ResponseMode;
(function (ResponseMode) {
    ResponseMode["QUERY"] = "query";
    ResponseMode["FRAGMENT"] = "fragment";
    ResponseMode["FORM_POST"] = "form_post";
})(ResponseMode || (ResponseMode = {}));
/**
 * allowed grant_type
 */
var GrantType;
(function (GrantType) {
    GrantType["IMPLICIT_GRANT"] = "implicit";
    GrantType["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
    GrantType["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
    GrantType["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
    GrantType["REFRESH_TOKEN_GRANT"] = "refresh_token";
    GrantType["DEVICE_CODE_GRANT"] = "device_code";
    GrantType["JWT_BEARER"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(GrantType || (GrantType = {}));
/**
 * Account types in Cache
 */
var CacheAccountType;
(function (CacheAccountType) {
    CacheAccountType["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
    CacheAccountType["ADFS_ACCOUNT_TYPE"] = "ADFS";
    CacheAccountType["MSAV1_ACCOUNT_TYPE"] = "MSA";
    CacheAccountType["GENERIC_ACCOUNT_TYPE"] = "Generic"; // NTLM, Kerberos, FBA, Basic etc
})(CacheAccountType || (CacheAccountType = {}));
/**
 * Separators used in cache
 */
var Separators;
(function (Separators) {
    Separators["CACHE_KEY_SEPARATOR"] = "-";
    Separators["CLIENT_INFO_SEPARATOR"] = ".";
})(Separators || (Separators = {}));
/**
 * Credential Type stored in the cache
 */
var CredentialType;
(function (CredentialType) {
    CredentialType["ID_TOKEN"] = "IdToken";
    CredentialType["ACCESS_TOKEN"] = "AccessToken";
    CredentialType["ACCESS_TOKEN_WITH_AUTH_SCHEME"] = "AccessToken_With_AuthScheme";
    CredentialType["REFRESH_TOKEN"] = "RefreshToken";
})(CredentialType || (CredentialType = {}));
/**
 * Credential Type stored in the cache
 */
var CacheSchemaType;
(function (CacheSchemaType) {
    CacheSchemaType["ACCOUNT"] = "Account";
    CacheSchemaType["CREDENTIAL"] = "Credential";
    CacheSchemaType["ID_TOKEN"] = "IdToken";
    CacheSchemaType["ACCESS_TOKEN"] = "AccessToken";
    CacheSchemaType["REFRESH_TOKEN"] = "RefreshToken";
    CacheSchemaType["APP_METADATA"] = "AppMetadata";
    CacheSchemaType["TEMPORARY"] = "TempCache";
    CacheSchemaType["TELEMETRY"] = "Telemetry";
    CacheSchemaType["UNDEFINED"] = "Undefined";
    CacheSchemaType["THROTTLING"] = "Throttling";
})(CacheSchemaType || (CacheSchemaType = {}));
/**
 * Combine all cache types
 */
var CacheType;
(function (CacheType) {
    CacheType[CacheType["ADFS"] = 1001] = "ADFS";
    CacheType[CacheType["MSA"] = 1002] = "MSA";
    CacheType[CacheType["MSSTS"] = 1003] = "MSSTS";
    CacheType[CacheType["GENERIC"] = 1004] = "GENERIC";
    CacheType[CacheType["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
    CacheType[CacheType["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
    CacheType[CacheType["ID_TOKEN"] = 2003] = "ID_TOKEN";
    CacheType[CacheType["APP_METADATA"] = 3001] = "APP_METADATA";
    CacheType[CacheType["UNDEFINED"] = 9999] = "UNDEFINED";
})(CacheType || (CacheType = {}));
/**
 * More Cache related constants
 */
var APP_METADATA = "appmetadata";
var CLIENT_INFO = "client_info";
var THE_FAMILY_ID = "1";
var AUTHORITY_METADATA_CONSTANTS = {
    CACHE_KEY: "authority-metadata",
    REFRESH_TIME_SECONDS: 3600 * 24 // 24 Hours
};
var AuthorityMetadataSource;
(function (AuthorityMetadataSource) {
    AuthorityMetadataSource["CONFIG"] = "config";
    AuthorityMetadataSource["CACHE"] = "cache";
    AuthorityMetadataSource["NETWORK"] = "network";
    AuthorityMetadataSource["HARDCODED_VALUES"] = "hardcoded_values";
})(AuthorityMetadataSource || (AuthorityMetadataSource = {}));
var SERVER_TELEM_CONSTANTS = {
    SCHEMA_VERSION: 5,
    MAX_CUR_HEADER_BYTES: 80,
    MAX_LAST_HEADER_BYTES: 330,
    MAX_CACHED_ERRORS: 50,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error"
};
/**
 * Type of the authentication request
 */
var AuthenticationScheme;
(function (AuthenticationScheme) {
    AuthenticationScheme["BEARER"] = "Bearer";
    AuthenticationScheme["POP"] = "pop";
    AuthenticationScheme["SSH"] = "ssh-cert";
})(AuthenticationScheme || (AuthenticationScheme = {}));
/**
 * Constants related to throttling
 */
var ThrottlingConstants = {
    // Default time to throttle RequestThumbprint in seconds
    DEFAULT_THROTTLE_TIME_SECONDS: 60,
    // Default maximum time to throttle in seconds, overrides what the server sends back
    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
    // Prefix for storing throttling entries
    THROTTLING_PREFIX: "throttling",
    // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
    X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
};
var Errors = {
    INVALID_GRANT_ERROR: "invalid_grant",
    CLIENT_MISMATCH_ERROR: "client_mismatch",
};
/**
 * Password grant parameters
 */
var PasswordGrantConstants;
(function (PasswordGrantConstants) {
    PasswordGrantConstants["username"] = "username";
    PasswordGrantConstants["password"] = "password";
})(PasswordGrantConstants || (PasswordGrantConstants = {}));
/**
 * Response codes
 */
var ResponseCodes;
(function (ResponseCodes) {
    ResponseCodes[ResponseCodes["httpSuccess"] = 200] = "httpSuccess";
    ResponseCodes[ResponseCodes["httpBadRequest"] = 400] = "httpBadRequest";
})(ResponseCodes || (ResponseCodes = {}));
/**
 * Region Discovery Sources
 */
var RegionDiscoverySources;
(function (RegionDiscoverySources) {
    RegionDiscoverySources["FAILED_AUTO_DETECTION"] = "1";
    RegionDiscoverySources["INTERNAL_CACHE"] = "2";
    RegionDiscoverySources["ENVIRONMENT_VARIABLE"] = "3";
    RegionDiscoverySources["IMDS"] = "4";
})(RegionDiscoverySources || (RegionDiscoverySources = {}));
/**
 * Region Discovery Outcomes
 */
var RegionDiscoveryOutcomes;
(function (RegionDiscoveryOutcomes) {
    RegionDiscoveryOutcomes["CONFIGURED_MATCHES_DETECTED"] = "1";
    RegionDiscoveryOutcomes["CONFIGURED_NO_AUTO_DETECTION"] = "2";
    RegionDiscoveryOutcomes["CONFIGURED_NOT_DETECTED"] = "3";
    RegionDiscoveryOutcomes["AUTO_DETECTION_REQUESTED_SUCCESSFUL"] = "4";
    RegionDiscoveryOutcomes["AUTO_DETECTION_REQUESTED_FAILED"] = "5";
})(RegionDiscoveryOutcomes || (RegionDiscoveryOutcomes = {}));
var CacheOutcome;
(function (CacheOutcome) {
    CacheOutcome["NO_CACHE_HIT"] = "0";
    CacheOutcome["FORCE_REFRESH"] = "1";
    CacheOutcome["NO_CACHED_ACCESS_TOKEN"] = "2";
    CacheOutcome["CACHED_ACCESS_TOKEN_EXPIRED"] = "3";
    CacheOutcome["REFRESH_CACHED_ACCESS_TOKEN"] = "4";
})(CacheOutcome || (CacheOutcome = {}));
var JsonTypes;
(function (JsonTypes) {
    JsonTypes["Jwt"] = "JWT";
    JsonTypes["Jwk"] = "JWK";
})(JsonTypes || (JsonTypes = {}));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * AuthErrorMessage class containing string constants used by error codes and messages.
 */
var AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    },
    postRequestFailed: {
        code: "post_request_failed",
        desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    function AuthError(errorCode, errorMessage, suberror) {
        var _this = this;
        var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
        _this = _super.call(this, errorString) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode || Constants$1.EMPTY_STRING;
        _this.errorMessage = errorMessage || Constants$1.EMPTY_STRING;
        _this.subError = suberror || Constants$1.EMPTY_STRING;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.prototype.setCorrelationId = function (correlationId) {
        this.correlationId = correlationId;
    };
    /**
     * Creates an error that is thrown when something unexpected happens in the library.
     * @param errDesc
     */
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    /**
     * Creates an error for post request failures.
     * @param errDesc
     * @returns
     */
    AuthError.createPostRequestFailed = function (errDesc) {
        return new AuthError(AuthErrorMessage.postRequestFailed.code, AuthErrorMessage.postRequestFailed.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var DEFAULT_CRYPTO_IMPLEMENTATION = {
    createNewGuid: function () {
        var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    base64Decode: function () {
        var notImplErr = "Crypto interface - base64Decode() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    base64Encode: function () {
        var notImplErr = "Crypto interface - base64Encode() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    generatePkceCodes: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    getPublicKeyThumbprint: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - getPublicKeyThumbprint() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    removeTokenBindingKey: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - removeTokenBindingKey() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    clearKeystore: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - clearKeystore() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    signJwt: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - signJwt() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    hashString: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - hashString() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    }
};

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ClientAuthErrorMessage class containing string constants used by error codes and messages.
 */
var ClientAuthErrorMessage = {
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoEmptyError: {
        code: "client_info_empty_error",
        desc: "The client info was empty. Please review the trace to determine the root cause."
    },
    tokenParsingError: {
        code: "token_parsing_error",
        desc: "Token cannot be parsed. Please review stack trace to determine root cause."
    },
    nullOrEmptyToken: {
        code: "null_or_empty_token",
        desc: "The token is null or empty. Please review the trace to determine the root cause."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    networkError: {
        code: "network_error",
        desc: "Network request failed. Please check network trace to determine root cause."
    },
    unableToGetOpenidConfigError: {
        code: "openid_config_error",
        desc: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints."
    },
    hashNotDeserialized: {
        code: "hash_not_deserialized",
        desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
    },
    blankGuidGenerated: {
        code: "blank_guid_generated",
        desc: "The guid generated was blank. Please review the trace to determine the root cause."
    },
    invalidStateError: {
        code: "invalid_state",
        desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
    },
    stateMismatchError: {
        code: "state_mismatch",
        desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
    },
    stateNotFoundError: {
        code: "state_not_found",
        desc: "State not found"
    },
    nonceMismatchError: {
        code: "nonce_mismatch",
        desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
    },
    nonceNotFoundError: {
        code: "nonce_not_found",
        desc: "nonce not found"
    },
    authTimeNotFoundError: {
        code: "auth_time_not_found",
        desc: "Max Age was requested and the ID token is missing the auth_time variable." +
            " auth_time is an optional claim and is not enabled by default - it must be enabled." +
            " See https://aka.ms/msaljs/optional-claims for more information."
    },
    maxAgeTranspiredError: {
        code: "max_age_transpired",
        desc: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication."
    },
    noTokensFoundError: {
        code: "no_tokens_found",
        desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
    },
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements such as authority or account."
    },
    multipleMatchingAccounts: {
        code: "multiple_matching_accounts",
        desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
    },
    multipleMatchingAppMetadata: {
        code: "multiple_matching_appMetadata",
        desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
    },
    tokenRequestCannotBeMade: {
        code: "request_cannot_be_made",
        desc: "Token request cannot be made without authorization code or refresh token."
    },
    appendEmptyScopeError: {
        code: "cannot_append_empty_scope",
        desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
    },
    removeEmptyScopeError: {
        code: "cannot_remove_empty_scope",
        desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
    },
    appendScopeSetError: {
        code: "cannot_append_scopeset",
        desc: "Cannot append ScopeSet due to error."
    },
    emptyInputScopeSetError: {
        code: "empty_input_scopeset",
        desc: "Empty input ScopeSet cannot be processed."
    },
    DeviceCodePollingCancelled: {
        code: "device_code_polling_cancelled",
        desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
    },
    DeviceCodeExpired: {
        code: "device_code_expired",
        desc: "Device code is expired."
    },
    DeviceCodeUnknownError: {
        code: "device_code_unknown_error",
        desc: "Device code stopped polling for unknown reasons."
    },
    NoAccountInSilentRequest: {
        code: "no_account_in_silent_request",
        desc: "Please pass an account object, silent flow is not supported without account information"
    },
    invalidCacheRecord: {
        code: "invalid_cache_record",
        desc: "Cache record object was null or undefined."
    },
    invalidCacheEnvironment: {
        code: "invalid_cache_environment",
        desc: "Invalid environment when attempting to create cache entry"
    },
    noAccountFound: {
        code: "no_account_found",
        desc: "No account found in cache for given key."
    },
    CachePluginError: {
        code: "no cache plugin set on CacheManager",
        desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
    },
    noCryptoObj: {
        code: "no_crypto_object",
        desc: "No crypto object detected. This is required for the following operation: "
    },
    invalidCacheType: {
        code: "invalid_cache_type",
        desc: "Invalid cache type"
    },
    unexpectedAccountType: {
        code: "unexpected_account_type",
        desc: "Unexpected account type."
    },
    unexpectedCredentialType: {
        code: "unexpected_credential_type",
        desc: "Unexpected credential type."
    },
    invalidAssertion: {
        code: "invalid_assertion",
        desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
    },
    invalidClientCredential: {
        code: "invalid_client_credential",
        desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
    },
    tokenRefreshRequired: {
        code: "token_refresh_required",
        desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
    },
    userTimeoutReached: {
        code: "user_timeout_reached",
        desc: "User defined timeout for device code polling reached",
    },
    tokenClaimsRequired: {
        code: "token_claims_cnf_required_for_signedjwt",
        desc: "Cannot generate a POP jwt if the token_claims are not populated"
    },
    noAuthorizationCodeFromServer: {
        code: "authorization_code_missing_from_server_response",
        desc: "Server response does not contain an authorization code to proceed"
    },
    noAzureRegionDetected: {
        code: "no_azure_region_detected",
        desc: "No azure region was detected and no fallback was made available"
    },
    accessTokenEntityNullError: {
        code: "access_token_entity_null",
        desc: "Access token entity is null, please check logs and cache to ensure a valid access token is present."
    },
    bindingKeyNotRemovedError: {
        code: "binding_key_not_removed",
        desc: "Could not remove the credential's binding key from storage."
    },
    logoutNotSupported: {
        code: "end_session_endpoint_not_supported",
        desc: "Provided authority does not support logout."
    },
    keyIdMissing: {
        code: "key_id_missing",
        desc: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key."
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    __extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when client info object doesn't decode correctly.
     * @param caughtError
     */
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    /**
     * Creates an error thrown if the client info is empty.
     * @param rawClientInfo
     */
    ClientAuthError.createClientInfoEmptyError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, "" + ClientAuthErrorMessage.clientInfoEmptyError.desc);
    };
    /**
     * Creates an error thrown when the id token extraction errors out.
     * @param err
     */
    ClientAuthError.createTokenParsingError = function (caughtExtractionError) {
        return new ClientAuthError(ClientAuthErrorMessage.tokenParsingError.code, ClientAuthErrorMessage.tokenParsingError.desc + " Failed with error: " + caughtExtractionError);
    };
    /**
     * Creates an error thrown when the id token string is null or empty.
     * @param invalidRawTokenString
     */
    ClientAuthError.createTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyToken.code, ClientAuthErrorMessage.nullOrEmptyToken.desc + " Raw Token Value: " + invalidRawTokenString);
    };
    /**
     * Creates an error thrown when the endpoint discovery doesn't complete correctly.
     */
    ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
        return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
    };
    /**
     * Creates an error thrown when the fetch client throws
     */
    ClientAuthError.createNetworkError = function (endpoint, errDetail) {
        return new ClientAuthError(ClientAuthErrorMessage.networkError.code, ClientAuthErrorMessage.networkError.desc + " | Fetch client threw: " + errDetail + " | Attempted to reach: " + endpoint.split("?")[0]);
    };
    /**
     * Creates an error thrown when the openid-configuration endpoint cannot be reached or does not contain the required data
     */
    ClientAuthError.createUnableToGetOpenidConfigError = function (errDetail) {
        return new ClientAuthError(ClientAuthErrorMessage.unableToGetOpenidConfigError.code, ClientAuthErrorMessage.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + errDetail);
    };
    /**
     * Creates an error thrown when the hash cannot be deserialized.
     * @param hashParamObj
     */
    ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
        return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
    };
    /**
     * Creates an error thrown when the state cannot be parsed.
     * @param invalidState
     */
    ClientAuthError.createInvalidStateError = function (invalidState, errorString) {
        return new ClientAuthError(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
    };
    /**
     * Creates an error thrown when two states do not match.
     */
    ClientAuthError.createStateMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
    };
    /**
     * Creates an error thrown when the state is not present
     * @param missingState
     */
    ClientAuthError.createStateNotFoundError = function (missingState) {
        return new ClientAuthError(ClientAuthErrorMessage.stateNotFoundError.code, ClientAuthErrorMessage.stateNotFoundError.desc + ":  " + missingState);
    };
    /**
     * Creates an error thrown when the nonce does not match.
     */
    ClientAuthError.createNonceMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
    };
    /**
     * Creates an error thrown when max_age was provided in the request, but auth_time is not in the token claims
     * @param missingNonce
     */
    ClientAuthError.createAuthTimeNotFoundError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.authTimeNotFoundError.code, ClientAuthErrorMessage.authTimeNotFoundError.desc);
    };
    /**
     * Creates an error thrown when too much time has elapsed since the last end-user authentication
     */
    ClientAuthError.createMaxAgeTranspiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.maxAgeTranspiredError.code, ClientAuthErrorMessage.maxAgeTranspiredError.desc);
    };
    /**
     * Creates an error thrown when the mnonce is not present
     * @param missingNonce
     */
    ClientAuthError.createNonceNotFoundError = function (missingNonce) {
        return new ClientAuthError(ClientAuthErrorMessage.nonceNotFoundError.code, ClientAuthErrorMessage.nonceNotFoundError.desc + ":  " + missingNonce);
    };
    /**
     * Throws error when multiple tokens are in cache.
     */
    ClientAuthError.createMultipleMatchingTokensInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    /**
     * Throws error when multiple accounts are in cache for the given params
     */
    ClientAuthError.createMultipleMatchingAccountsInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
    };
    /**
     * Throws error when multiple appMetada are in cache for the given clientId.
     */
    ClientAuthError.createMultipleMatchingAppMetadataInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAppMetadata.code, ClientAuthErrorMessage.multipleMatchingAppMetadata.desc);
    };
    /**
     * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
     */
    ClientAuthError.createTokenRequestCannotBeMadeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
    };
    /**
     * Throws error when attempting to append a null, undefined or empty scope to a set
     * @param givenScope
     */
    ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
        return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    /**
     * Throws error when attempting to append a null, undefined or empty scope to a set
     * @param givenScope
     */
    ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
        return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    /**
     * Throws error when attempting to append null or empty ScopeSet.
     * @param appendError
     */
    ClientAuthError.createAppendScopeSetError = function (appendError) {
        return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
    };
    /**
     * Throws error if ScopeSet is null or undefined.
     * @param givenScopeSet
     */
    ClientAuthError.createEmptyInputScopeSetError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, "" + ClientAuthErrorMessage.emptyInputScopeSetError.desc);
    };
    /**
     * Throws error if user sets CancellationToken.cancel = true during polling of token endpoint during device code flow
     */
    ClientAuthError.createDeviceCodeCancelledError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
    };
    /**
     * Throws error if device code is expired
     */
    ClientAuthError.createDeviceCodeExpiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
    };
    /**
     * Throws error if device code is expired
     */
    ClientAuthError.createDeviceCodeUnknownError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeUnknownError.code, "" + ClientAuthErrorMessage.DeviceCodeUnknownError.desc);
    };
    /**
     * Throws error when silent requests are made without an account object
     */
    ClientAuthError.createNoAccountInSilentRequestError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
    };
    /**
     * Throws error when cache record is null or undefined.
     */
    ClientAuthError.createNullOrUndefinedCacheRecord = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
    };
    /**
     * Throws error when provided environment is not part of the CloudDiscoveryMetadata object
     */
    ClientAuthError.createInvalidCacheEnvironmentError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
    };
    /**
     * Throws error when account is not found in cache.
     */
    ClientAuthError.createNoAccountFoundError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
    };
    /**
     * Throws error if ICachePlugin not set on CacheManager.
     */
    ClientAuthError.createCachePluginError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
    };
    /**
     * Throws error if crypto object not found.
     * @param operationName
     */
    ClientAuthError.createNoCryptoObjectError = function (operationName) {
        return new ClientAuthError(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
    };
    /**
     * Throws error if cache type is invalid.
     */
    ClientAuthError.createInvalidCacheTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
    };
    /**
     * Throws error if unexpected account type.
     */
    ClientAuthError.createUnexpectedAccountTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
    };
    /**
     * Throws error if unexpected credential type.
     */
    ClientAuthError.createUnexpectedCredentialTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
    };
    /**
     * Throws error if client assertion is not valid.
     */
    ClientAuthError.createInvalidAssertionError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidAssertion.code, "" + ClientAuthErrorMessage.invalidAssertion.desc);
    };
    /**
     * Throws error if client assertion is not valid.
     */
    ClientAuthError.createInvalidCredentialError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidClientCredential.code, "" + ClientAuthErrorMessage.invalidClientCredential.desc);
    };
    /**
     * Throws error if token cannot be retrieved from cache due to refresh being required.
     */
    ClientAuthError.createRefreshRequiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenRefreshRequired.code, ClientAuthErrorMessage.tokenRefreshRequired.desc);
    };
    /**
     * Throws error if the user defined timeout is reached.
     */
    ClientAuthError.createUserTimeoutReachedError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.userTimeoutReached.code, ClientAuthErrorMessage.userTimeoutReached.desc);
    };
    /*
     * Throws error if token claims are not populated for a signed jwt generation
     */
    ClientAuthError.createTokenClaimsRequiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenClaimsRequired.code, ClientAuthErrorMessage.tokenClaimsRequired.desc);
    };
    /**
     * Throws error when the authorization code is missing from the server response
     */
    ClientAuthError.createNoAuthCodeInServerResponseError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noAuthorizationCodeFromServer.code, ClientAuthErrorMessage.noAuthorizationCodeFromServer.desc);
    };
    ClientAuthError.createBindingKeyNotRemovedError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.bindingKeyNotRemovedError.code, ClientAuthErrorMessage.bindingKeyNotRemovedError.desc);
    };
    /**
     * Thrown when logout is attempted for an authority that doesnt have an end_session_endpoint
     */
    ClientAuthError.createLogoutNotSupportedError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.logoutNotSupported.code, ClientAuthErrorMessage.logoutNotSupported.desc);
    };
    /**
     * Create an error when kid attribute is missing from a PoP token's cache record
     */
    ClientAuthError.createKeyIdMissingError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.keyIdMissing.code, ClientAuthErrorMessage.keyIdMissing.desc);
    };
    return ClientAuthError;
}(AuthError));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * decode a JWT
     *
     * @param authToken
     */
    StringUtils.decodeAuthToken = function (authToken) {
        if (StringUtils.isEmpty(authToken)) {
            throw ClientAuthError.createTokenNullOrEmptyError(authToken);
        }
        var tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = tokenPartsRegex.exec(authToken);
        if (!matches || matches.length < 4) {
            throw ClientAuthError.createTokenParsingError("Given token is malformed: " + JSON.stringify(authToken));
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Check if a string is empty.
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    /**
     * Check if stringified object is empty
     * @param strObj
     */
    StringUtils.isEmptyObj = function (strObj) {
        if (strObj && !StringUtils.isEmpty(strObj)) {
            try {
                var obj = JSON.parse(strObj);
                return Object.keys(obj).length === 0;
            }
            catch (e) { }
        }
        return true;
    };
    StringUtils.startsWith = function (str, search) {
        return str.indexOf(search) === 0;
    };
    StringUtils.endsWith = function (str, search) {
        return (str.length >= search.length) && (str.lastIndexOf(search) === (str.length - search.length));
    };
    /**
     * Parses string into an object.
     *
     * @param query
     */
    StringUtils.queryStringToObject = function (query) {
        var obj = {};
        var params = query.split("&");
        var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
        params.forEach(function (pair) {
            if (pair.trim()) {
                var _a = pair.split(/=(.+)/g, 2), key = _a[0], value = _a[1]; // Split on the first occurence of the '=' character
                if (key && value) {
                    obj[decode(key)] = decode(value);
                }
            }
        });
        return obj;
    };
    /**
     * Trims entries in an array.
     *
     * @param arr
     */
    StringUtils.trimArrayEntries = function (arr) {
        return arr.map(function (entry) { return entry.trim(); });
    };
    /**
     * Removes empty strings from array
     * @param arr
     */
    StringUtils.removeEmptyStringsFromArray = function (arr) {
        return arr.filter(function (entry) {
            return !StringUtils.isEmpty(entry);
        });
    };
    /**
     * Attempts to parse a string into JSON
     * @param str
     */
    StringUtils.jsonParseHelper = function (str) {
        try {
            return JSON.parse(str);
        }
        catch (e) {
            return null;
        }
    };
    /**
     * Tests if a given string matches a given pattern, with support for wildcards and queries.
     * @param pattern Wildcard pattern to string match. Supports "*" for wildcards and "?" for queries
     * @param input String to match against
     */
    StringUtils.matchPattern = function (pattern, input) {
        /**
         * Wildcard support: https://stackoverflow.com/a/3117248/4888559
         * Queries: replaces "?" in string with escaped "\?" for regex test
         */
        var regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\\?")); // eslint-disable-line security/detect-non-literal-regexp
        return regex.test(input);
    };
    return StringUtils;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Log message level.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
    LogLevel[LogLevel["Trace"] = 4] = "Trace";
})(LogLevel || (LogLevel = {}));
/**
 * Class which facilitates logging of messages to a specific place.
 */
var Logger = /** @class */ (function () {
    function Logger(loggerOptions, packageName, packageVersion) {
        // Current log level, defaults to info.
        this.level = LogLevel.Info;
        var defaultLoggerCallback = function () {
            return;
        };
        this.localCallback = loggerOptions.loggerCallback || defaultLoggerCallback;
        this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled || false;
        this.level = typeof (loggerOptions.logLevel) === "number" ? loggerOptions.logLevel : LogLevel.Info;
        this.correlationId = loggerOptions.correlationId || Constants$1.EMPTY_STRING;
        this.packageName = packageName || Constants$1.EMPTY_STRING;
        this.packageVersion = packageVersion || Constants$1.EMPTY_STRING;
    }
    /**
     * Create new Logger with existing configurations.
     */
    Logger.prototype.clone = function (packageName, packageVersion, correlationId) {
        return new Logger({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: correlationId || this.correlationId }, packageName, packageVersion);
    };
    /**
     * Log message with required options.
     */
    Logger.prototype.logMessage = function (logMessage, options) {
        if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        // Add correlationId to logs if set, correlationId provided on log messages take precedence
        var logHeader;
        if (!StringUtils.isEmpty(options.correlationId)) {
            logHeader = "[" + timestamp + "] : [" + options.correlationId + "]";
        }
        else if (!StringUtils.isEmpty(this.correlationId)) {
            logHeader = "[" + timestamp + "] : [" + this.correlationId + "]";
        }
        else {
            logHeader = "[" + timestamp + "]";
        }
        var log = logHeader + " : " + this.packageName + "@" + this.packageVersion + " : " + LogLevel[options.logLevel] + " - " + logMessage;
        // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": Constants.EMPTY_STRING}${options.context ? `:${options.context}` : Constants.EMPTY_STRING}`)(logMessage);
        this.executeCallback(options.logLevel, log, options.containsPii || false);
    };
    /**
     * Execute callback with message.
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * Logs error messages.
     */
    Logger.prototype.error = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Error,
            containsPii: false,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs error messages with PII.
     */
    Logger.prototype.errorPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Error,
            containsPii: true,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs warning messages.
     */
    Logger.prototype.warning = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Warning,
            containsPii: false,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs warning messages with PII.
     */
    Logger.prototype.warningPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Warning,
            containsPii: true,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs info messages.
     */
    Logger.prototype.info = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Info,
            containsPii: false,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs info messages with PII.
     */
    Logger.prototype.infoPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Info,
            containsPii: true,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs verbose messages.
     */
    Logger.prototype.verbose = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Verbose,
            containsPii: false,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs verbose messages with PII.
     */
    Logger.prototype.verbosePii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Verbose,
            containsPii: true,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs trace messages.
     */
    Logger.prototype.trace = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Trace,
            containsPii: false,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Logs trace messages with PII.
     */
    Logger.prototype.tracePii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Trace,
            containsPii: true,
            correlationId: correlationId || Constants$1.EMPTY_STRING
        });
    };
    /**
     * Returns whether PII Logging is enabled or not.
     */
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled || false;
    };
    return Logger;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */
/* eslint-disable header/header */
var name$1 = "@azure/msal-common";
var version$1 = "7.6.0";

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var AzureCloudInstance;
(function (AzureCloudInstance) {
    // AzureCloudInstance is not specified.
    AzureCloudInstance[AzureCloudInstance["None"] = 0] = "None";
    // Microsoft Azure public cloud
    AzureCloudInstance["AzurePublic"] = "https://login.microsoftonline.com";
    // Microsoft PPE
    AzureCloudInstance["AzurePpe"] = "https://login.windows-ppe.net";
    // Microsoft Chinese national cloud
    AzureCloudInstance["AzureChina"] = "https://login.chinacloudapi.cn";
    // Microsoft German national cloud ("Black Forest")
    AzureCloudInstance["AzureGermany"] = "https://login.microsoftonline.de";
    // US Government cloud
    AzureCloudInstance["AzureUsGovernment"] = "https://login.microsoftonline.us";
})(AzureCloudInstance || (AzureCloudInstance = {}));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base type for credentials to be stored in the cache: eg: ACCESS_TOKEN, ID_TOKEN etc
 *
 * Key:Value Schema:
 *
 * Key: <home_account_id*>-<environment>-<credential_type>-<client_id>-<realm*>-<target*>-<requestedClaims*>-<scheme*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, usually only used for refresh tokens
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 *      tokenType: Matches the authentication scheme for which the token was issued (i.e. Bearer or pop)
 *      requestedClaimsHash: Matches the SHA 256 hash of the claims object included in the token request
 *      userAssertionHash: Matches the SHA 256 hash of the obo_assertion for the OBO flow
 * }
 */
var CredentialEntity = /** @class */ (function () {
    function CredentialEntity() {
    }
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */
    CredentialEntity.prototype.generateAccountId = function () {
        return CredentialEntity.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
    };
    /**
     * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
     */
    CredentialEntity.prototype.generateCredentialId = function () {
        return CredentialEntity.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
    };
    /**
     * Generate target key component as per schema: <target>
     */
    CredentialEntity.prototype.generateTarget = function () {
        return CredentialEntity.generateTargetForCacheKey(this.target);
    };
    /**
     * generates credential key
     */
    CredentialEntity.prototype.generateCredentialKey = function () {
        return CredentialEntity.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId, this.tokenType, this.requestedClaimsHash);
    };
    /**
     * returns the type of the cache (in this case credential)
     */
    CredentialEntity.prototype.generateType = function () {
        switch (this.credentialType) {
            case CredentialType.ID_TOKEN:
                return CacheType.ID_TOKEN;
            case CredentialType.ACCESS_TOKEN:
            case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                return CacheType.ACCESS_TOKEN;
            case CredentialType.REFRESH_TOKEN:
                return CacheType.REFRESH_TOKEN;
            default: {
                throw ClientAuthError.createUnexpectedCredentialTypeError();
            }
        }
    };
    /**
     * helper function to return `CredentialType`
     * @param key
     */
    CredentialEntity.getCredentialType = function (key) {
        // First keyword search will match all "AccessToken" and "AccessToken_With_AuthScheme" credentials
        if (key.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) !== -1) {
            // Perform second search to differentiate between "AccessToken" and "AccessToken_With_AuthScheme" credential types
            if (key.indexOf(CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) !== -1) {
                return CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
            }
            return CredentialType.ACCESS_TOKEN;
        }
        else if (key.indexOf(CredentialType.ID_TOKEN.toLowerCase()) !== -1) {
            return CredentialType.ID_TOKEN;
        }
        else if (key.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) !== -1) {
            return CredentialType.REFRESH_TOKEN;
        }
        return Constants$1.NOT_DEFINED;
    };
    /**
     * generates credential key
     * <home_account_id*>-\<environment>-<credential_type>-<client_id>-<realm\*>-<target\*>-<scheme\*>
     */
    CredentialEntity.generateCredentialCacheKey = function (homeAccountId, environment, credentialType, clientId, realm, target, familyId, tokenType, requestedClaimsHash) {
        var credentialKey = [
            this.generateAccountIdForCacheKey(homeAccountId, environment),
            this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
            this.generateTargetForCacheKey(target),
            this.generateClaimsHashForCacheKey(requestedClaimsHash),
            this.generateSchemeForCacheKey(tokenType)
        ];
        return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * generates Account Id for keys
     * @param homeAccountId
     * @param environment
     */
    CredentialEntity.generateAccountIdForCacheKey = function (homeAccountId, environment) {
        var accountId = [homeAccountId, environment];
        return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generates Credential Id for keys
     * @param credentialType
     * @param realm
     * @param clientId
     * @param familyId
     */
    CredentialEntity.generateCredentialIdForCacheKey = function (credentialType, clientId, realm, familyId) {
        var clientOrFamilyId = credentialType === CredentialType.REFRESH_TOKEN
            ? familyId || clientId
            : clientId;
        var credentialId = [
            credentialType,
            clientOrFamilyId,
            realm || Constants$1.EMPTY_STRING,
        ];
        return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generate target key component as per schema: <target>
     */
    CredentialEntity.generateTargetForCacheKey = function (scopes) {
        return (scopes || Constants$1.EMPTY_STRING).toLowerCase();
    };
    /**
     * Generate requested claims key component as per schema: <requestedClaims>
     */
    CredentialEntity.generateClaimsHashForCacheKey = function (requestedClaimsHash) {
        return (requestedClaimsHash || Constants$1.EMPTY_STRING).toLowerCase();
    };
    /**
     * Generate scheme key componenet as per schema: <scheme>
     */
    CredentialEntity.generateSchemeForCacheKey = function (tokenType) {
        /*
         * PoP Tokens and SSH certs include scheme in cache key
         * Cast to lowercase to handle "bearer" from ADFS
         */
        return (tokenType && tokenType.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) ? tokenType.toLowerCase() : Constants$1.EMPTY_STRING;
    };
    return CredentialEntity;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
 */
var ClientConfigurationErrorMessage = {
    redirectUriNotSet: {
        code: "redirect_uri_empty",
        desc: "A redirect URI is required for all calls, and none has been set."
    },
    postLogoutUriNotSet: {
        code: "post_logout_uri_empty",
        desc: "A post logout redirect has not been set."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
    },
    urlParseError: {
        code: "url_parse_error",
        desc: "URL could not be parsed into appropriate segments."
    },
    urlEmptyError: {
        code: "empty_url_error",
        desc: "URL was empty or null."
    },
    emptyScopesError: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
    },
    nonArrayScopesError: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientIdSingleScopeError: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent', 'create', 'none' and 'no_session'.  Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
    },
    invalidClaimsRequest: {
        code: "invalid_claims",
        desc: "Given claims parameter must be a stringified JSON object."
    },
    tokenRequestEmptyError: {
        code: "token_request_empty",
        desc: "Token request was empty and not found in cache."
    },
    logoutRequestEmptyError: {
        code: "logout_request_empty",
        desc: "The logout request was null or undefined."
    },
    invalidCodeChallengeMethod: {
        code: "invalid_code_challenge_method",
        desc: "code_challenge_method passed is invalid. Valid values are \"plain\" and \"S256\"."
    },
    invalidCodeChallengeParams: {
        code: "pkce_params_missing",
        desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
    },
    invalidCloudDiscoveryMetadata: {
        code: "invalid_cloud_discovery_metadata",
        desc: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields"
    },
    invalidAuthorityMetadata: {
        code: "invalid_authority_metadata",
        desc: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields."
    },
    untrustedAuthority: {
        code: "untrusted_authority",
        desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
    },
    invalidAzureCloudInstance: {
        code: "invalid_azure_cloud_instance",
        desc: "Invalid AzureCloudInstance provided. Please refer MSAL JS docs: aks.ms/msaljs/azure_cloud_instance for valid values"
    },
    missingSshJwk: {
        code: "missing_ssh_jwk",
        desc: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme."
    },
    missingSshKid: {
        code: "missing_ssh_kid",
        desc: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme."
    },
    missingNonceAuthenticationHeader: {
        code: "missing_nonce_authentication_header",
        desc: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce."
    },
    invalidAuthenticationHeader: {
        code: "invalid_authentication_header",
        desc: "Invalid authentication header provided"
    }
};
/**
 * Error thrown when there is an error in configuration of the MSAL.js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    __extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when the redirect uri is empty (not set by caller)
     */
    ClientConfigurationError.createRedirectUriEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
     */
    ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the claims request could not be successfully parsed
     */
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    /**
     * Creates an error thrown if authority uri is given an insecure protocol.
     * @param urlString
     */
    ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
    };
    /**
     * Creates an error thrown if URL string does not parse into separate segments.
     * @param urlString
     */
    ClientConfigurationError.createUrlParseError = function (urlParseError) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
    };
    /**
     * Creates an error thrown if URL string is empty or null.
     * @param urlString
     */
    ClientConfigurationError.createUrlEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
    };
    /**
     * Error thrown when scopes are empty.
     * @param scopesValue
     */
    ClientConfigurationError.createEmptyScopesArrayError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, "" + ClientConfigurationErrorMessage.emptyScopesError.desc);
    };
    /**
     * Error thrown when client id scope is not provided as single scope.
     * @param inputScopes
     */
    ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when prompt is not an allowed type.
     * @param promptValue
     */
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    /**
     * Creates error thrown when claims parameter is not a stringified JSON object
     */
    ClientConfigurationError.createInvalidClaimsRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidClaimsRequest.code, ClientConfigurationErrorMessage.invalidClaimsRequest.desc);
    };
    /**
     * Throws error when token request is empty and nothing cached in storage.
     */
    ClientConfigurationError.createEmptyLogoutRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
    };
    /**
     * Throws error when token request is empty and nothing cached in storage.
     */
    ClientConfigurationError.createEmptyTokenRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
    };
    /**
     * Throws error when an invalid code_challenge_method is passed by the user
     */
    ClientConfigurationError.createInvalidCodeChallengeMethodError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
    };
    /**
     * Throws error when both params: code_challenge and code_challenge_method are not passed together
     */
    ClientConfigurationError.createInvalidCodeChallengeParamsError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
    };
    /**
     * Throws an error when the user passes invalid cloudDiscoveryMetadata
     */
    ClientConfigurationError.createInvalidCloudDiscoveryMetadataError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
    };
    /**
     * Throws an error when the user passes invalid cloudDiscoveryMetadata
     */
    ClientConfigurationError.createInvalidAuthorityMetadataError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidAuthorityMetadata.code, ClientConfigurationErrorMessage.invalidAuthorityMetadata.desc);
    };
    /**
     * Throws error when provided authority is not a member of the trusted host list
     */
    ClientConfigurationError.createUntrustedAuthorityError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
    };
    /**
     * Throws error when the AzureCloudInstance is set to an invalid value
     */
    ClientConfigurationError.createInvalidAzureCloudInstanceError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidAzureCloudInstance.code, ClientConfigurationErrorMessage.invalidAzureCloudInstance.desc);
    };
    /**
     * Throws an error when the authentication scheme is set to SSH but the SSH public key is omitted from the request
     */
    ClientConfigurationError.createMissingSshJwkError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.missingSshJwk.code, ClientConfigurationErrorMessage.missingSshJwk.desc);
    };
    /**
     * Throws an error when the authentication scheme is set to SSH but the SSH public key ID is omitted from the request
     */
    ClientConfigurationError.createMissingSshKidError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.missingSshKid.code, ClientConfigurationErrorMessage.missingSshKid.desc);
    };
    /**
     * Throws error when provided headers don't contain a header that a server nonce can be extracted from
     */
    ClientConfigurationError.createMissingNonceAuthenticationHeadersError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.missingNonceAuthenticationHeader.code, ClientConfigurationErrorMessage.missingNonceAuthenticationHeader.desc);
    };
    /**
     * Throws error when a provided header is invalid in any way
     */
    ClientConfigurationError.createInvalidAuthenticationHeaderError = function (invalidHeaderName, details) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidAuthenticationHeader.code, ClientConfigurationErrorMessage.invalidAuthenticationHeader.desc + ". Invalid header: " + invalidHeaderName + ". Details: " + details);
    };
    return ClientConfigurationError;
}(ClientAuthError));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
 * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings in intersection and union functions
 * to ensure uniqueness of strings.
 */
var ScopeSet = /** @class */ (function () {
    function ScopeSet(inputScopes) {
        var _this = this;
        // Filter empty string and null/undefined array items
        var scopeArr = inputScopes ? StringUtils.trimArrayEntries(__spreadArrays(inputScopes)) : [];
        var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
        // Validate and filter scopes (validate function throws if validation fails)
        this.validateInputScopes(filteredInput);
        this.scopes = new Set(); // Iterator in constructor not supported by IE11
        filteredInput.forEach(function (scope) { return _this.scopes.add(scope); });
    }
    /**
     * Factory method to create ScopeSet from space-delimited string
     * @param inputScopeString
     * @param appClientId
     * @param scopesRequired
     */
    ScopeSet.fromString = function (inputScopeString) {
        var scopeString = inputScopeString || Constants$1.EMPTY_STRING;
        var inputScopes = scopeString.split(" ");
        return new ScopeSet(inputScopes);
    };
    /**
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     */
    ScopeSet.prototype.validateInputScopes = function (inputScopes) {
        // Check if scopes are required but not given or is an empty array
        if (!inputScopes || inputScopes.length < 1) {
            throw ClientConfigurationError.createEmptyScopesArrayError();
        }
    };
    /**
     * Check if a given scope is present in this set of scopes.
     * @param scope
     */
    ScopeSet.prototype.containsScope = function (scope) {
        var lowerCaseScopes = this.printScopesLowerCase().split(" ");
        var lowerCaseScopesSet = new ScopeSet(lowerCaseScopes);
        // compare lowercase scopes
        return !StringUtils.isEmpty(scope) ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
    };
    /**
     * Check if a set of scopes is present in this set of scopes.
     * @param scopeSet
     */
    ScopeSet.prototype.containsScopeSet = function (scopeSet) {
        var _this = this;
        if (!scopeSet || scopeSet.scopes.size <= 0) {
            return false;
        }
        return (this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); }));
    };
    /**
     * Check if set of scopes contains only the defaults
     */
    ScopeSet.prototype.containsOnlyOIDCScopes = function () {
        var _this = this;
        var defaultScopeCount = 0;
        OIDC_SCOPES.forEach(function (defaultScope) {
            if (_this.containsScope(defaultScope)) {
                defaultScopeCount += 1;
            }
        });
        return this.scopes.size === defaultScopeCount;
    };
    /**
     * Appends single scope if passed
     * @param newScope
     */
    ScopeSet.prototype.appendScope = function (newScope) {
        if (!StringUtils.isEmpty(newScope)) {
            this.scopes.add(newScope.trim());
        }
    };
    /**
     * Appends multiple scopes if passed
     * @param newScopes
     */
    ScopeSet.prototype.appendScopes = function (newScopes) {
        var _this = this;
        try {
            newScopes.forEach(function (newScope) { return _this.appendScope(newScope); });
        }
        catch (e) {
            throw ClientAuthError.createAppendScopeSetError(e);
        }
    };
    /**
     * Removes element from set of scopes.
     * @param scope
     */
    ScopeSet.prototype.removeScope = function (scope) {
        if (StringUtils.isEmpty(scope)) {
            throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
        }
        this.scopes.delete(scope.trim());
    };
    /**
     * Removes default scopes from set of scopes
     * Primarily used to prevent cache misses if the default scopes are not returned from the server
     */
    ScopeSet.prototype.removeOIDCScopes = function () {
        var _this = this;
        OIDC_SCOPES.forEach(function (defaultScope) {
            _this.scopes.delete(defaultScope);
        });
    };
    /**
     * Combines an array of scopes with the current set of scopes.
     * @param otherScopes
     */
    ScopeSet.prototype.unionScopeSets = function (otherScopes) {
        if (!otherScopes) {
            throw ClientAuthError.createEmptyInputScopeSetError();
        }
        var unionScopes = new Set(); // Iterator in constructor not supported in IE11
        otherScopes.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
        this.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
        return unionScopes;
    };
    /**
     * Check if scopes intersect between this set and another.
     * @param otherScopes
     */
    ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
        if (!otherScopes) {
            throw ClientAuthError.createEmptyInputScopeSetError();
        }
        // Do not allow OIDC scopes to be the only intersecting scopes
        if (!otherScopes.containsOnlyOIDCScopes()) {
            otherScopes.removeOIDCScopes();
        }
        var unionScopes = this.unionScopeSets(otherScopes);
        var sizeOtherScopes = otherScopes.getScopeCount();
        var sizeThisScopes = this.getScopeCount();
        var sizeUnionScopes = unionScopes.size;
        return sizeUnionScopes < (sizeThisScopes + sizeOtherScopes);
    };
    /**
     * Returns size of set of scopes.
     */
    ScopeSet.prototype.getScopeCount = function () {
        return this.scopes.size;
    };
    /**
     * Returns the scopes as an array of string values
     */
    ScopeSet.prototype.asArray = function () {
        var array = [];
        this.scopes.forEach(function (val) { return array.push(val); });
        return array;
    };
    /**
     * Prints scopes into a space-delimited string
     */
    ScopeSet.prototype.printScopes = function () {
        if (this.scopes) {
            var scopeArr = this.asArray();
            return scopeArr.join(" ");
        }
        return Constants$1.EMPTY_STRING;
    };
    /**
     * Prints scopes into a space-delimited lower-case string (used for caching)
     */
    ScopeSet.prototype.printScopesLowerCase = function () {
        return this.printScopes().toLowerCase();
    };
    return ScopeSet;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Function to build a client info object from server clientInfo string
 * @param rawClientInfo
 * @param crypto
 */
function buildClientInfo(rawClientInfo, crypto) {
    if (StringUtils.isEmpty(rawClientInfo)) {
        throw ClientAuthError.createClientInfoEmptyError();
    }
    try {
        var decodedClientInfo = crypto.base64Decode(rawClientInfo);
        return JSON.parse(decodedClientInfo);
    }
    catch (e) {
        throw ClientAuthError.createClientInfoDecodingError(e.message);
    }
}
/**
 * Function to build a client info object from cached homeAccountId string
 * @param homeAccountId
 */
function buildClientInfoFromHomeAccountId(homeAccountId) {
    if (StringUtils.isEmpty(homeAccountId)) {
        throw ClientAuthError.createClientInfoDecodingError("Home account ID was empty.");
    }
    var clientInfoParts = homeAccountId.split(Separators.CLIENT_INFO_SEPARATOR, 2);
    return {
        uid: clientInfoParts[0],
        utid: clientInfoParts.length < 2 ? Constants$1.EMPTY_STRING : clientInfoParts[1]
    };
}

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Authority types supported by MSAL.
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Default"] = 0] = "Default";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["Dsts"] = 2] = "Dsts";
})(AuthorityType || (AuthorityType = {}));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs).
 *
 * Key : Value Schema
 *
 * Key: <home_account_id>-<environment>-<realm*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      localAccountId: Original tenant-specific accountID, usually used for legacy cases
 *      username: primary username that represents the user, usually corresponds to preferred_username in the v2 endpt
 *      authorityType: Accounts authority type as a string
 *      name: Full name for the account, including given name and family name,
 *      clientInfo: Full base64 encoded client info received from ESTS
 *      lastModificationTime: last time this entity was modified in the cache
 *      lastModificationApp:
 *      idTokenClaims: Object containing claims parsed from ID token
 *      nativeAccountId: Account identifier on the native device
 * }
 */
var AccountEntity = /** @class */ (function () {
    function AccountEntity() {
    }
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */
    AccountEntity.prototype.generateAccountId = function () {
        var accountId = [this.homeAccountId, this.environment];
        return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
     */
    AccountEntity.prototype.generateAccountKey = function () {
        return AccountEntity.generateAccountCacheKey({
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username,
            localAccountId: this.localAccountId
        });
    };
    /**
     * returns the type of the cache (in this case account)
     */
    AccountEntity.prototype.generateType = function () {
        switch (this.authorityType) {
            case CacheAccountType.ADFS_ACCOUNT_TYPE:
                return CacheType.ADFS;
            case CacheAccountType.MSAV1_ACCOUNT_TYPE:
                return CacheType.MSA;
            case CacheAccountType.MSSTS_ACCOUNT_TYPE:
                return CacheType.MSSTS;
            case CacheAccountType.GENERIC_ACCOUNT_TYPE:
                return CacheType.GENERIC;
            default: {
                throw ClientAuthError.createUnexpectedAccountTypeError();
            }
        }
    };
    /**
     * Returns the AccountInfo interface for this account.
     */
    AccountEntity.prototype.getAccountInfo = function () {
        return {
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username,
            localAccountId: this.localAccountId,
            name: this.name,
            idTokenClaims: this.idTokenClaims,
            nativeAccountId: this.nativeAccountId
        };
    };
    /**
     * Generates account key from interface
     * @param accountInterface
     */
    AccountEntity.generateAccountCacheKey = function (accountInterface) {
        var accountKey = [
            accountInterface.homeAccountId,
            accountInterface.environment || Constants$1.EMPTY_STRING,
            accountInterface.tenantId || Constants$1.EMPTY_STRING,
        ];
        return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Build Account cache from IdToken, clientInfo and authority/policy. Associated with AAD.
     * @param clientInfo
     * @param authority
     * @param idToken
     * @param policy
     */
    AccountEntity.createAccount = function (clientInfo, homeAccountId, idToken, authority, cloudGraphHostName, msGraphHost, environment, nativeAccountId) {
        var _a, _b, _c, _d, _e, _f;
        var account = new AccountEntity();
        account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
        account.clientInfo = clientInfo;
        account.homeAccountId = homeAccountId;
        account.nativeAccountId = nativeAccountId;
        var env = environment || (authority && authority.getPreferredCache());
        if (!env) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        account.environment = env;
        // non AAD scenarios can have empty realm
        account.realm = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.tid) || Constants$1.EMPTY_STRING;
        if (idToken) {
            account.idTokenClaims = idToken.claims;
            // How do you account for MSA CID here?
            account.localAccountId = ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.oid) || ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.sub) || Constants$1.EMPTY_STRING;
            /*
             * In B2C scenarios the emails claim is used instead of preferred_username and it is an array.
             * In most cases it will contain a single email. This field should not be relied upon if a custom
             * policy is configured to return more than 1 email.
             */
            var preferredUsername = (_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.preferred_username;
            var email = ((_e = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _e === void 0 ? void 0 : _e.emails) ? idToken.claims.emails[0] : null;
            account.username = preferredUsername || email || Constants$1.EMPTY_STRING;
            account.name = (_f = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _f === void 0 ? void 0 : _f.name;
        }
        account.cloudGraphHostName = cloudGraphHostName;
        account.msGraphHost = msGraphHost;
        return account;
    };
    /**
     * Builds non-AAD/ADFS account.
     * @param authority
     * @param idToken
     */
    AccountEntity.createGenericAccount = function (homeAccountId, idToken, authority, cloudGraphHostName, msGraphHost, environment) {
        var _a, _b, _c, _d;
        var account = new AccountEntity();
        account.authorityType = (authority &&
            authority.authorityType === AuthorityType.Adfs) ? CacheAccountType.ADFS_ACCOUNT_TYPE : CacheAccountType.GENERIC_ACCOUNT_TYPE;
        account.homeAccountId = homeAccountId;
        // non AAD scenarios can have empty realm
        account.realm = Constants$1.EMPTY_STRING;
        var env = environment || authority && authority.getPreferredCache();
        if (!env) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        if (idToken) {
            // How do you account for MSA CID here?
            account.localAccountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.oid) || ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.sub) || Constants$1.EMPTY_STRING;
            // upn claim for most ADFS scenarios
            account.username = ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.upn) || Constants$1.EMPTY_STRING;
            account.name = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.name) || Constants$1.EMPTY_STRING;
            account.idTokenClaims = idToken === null || idToken === void 0 ? void 0 : idToken.claims;
        }
        account.environment = env;
        account.cloudGraphHostName = cloudGraphHostName;
        account.msGraphHost = msGraphHost;
        /*
         * add uniqueName to claims
         * account.name = idToken.claims.uniqueName;
         */
        return account;
    };
    /**
     * Generate HomeAccountId from server response
     * @param serverClientInfo
     * @param authType
     */
    AccountEntity.generateHomeAccountId = function (serverClientInfo, authType, logger, cryptoObj, idToken) {
        var _a;
        var accountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.sub) ? idToken.claims.sub : Constants$1.EMPTY_STRING;
        // since ADFS does not have tid and does not set client_info
        if (authType === AuthorityType.Adfs || authType === AuthorityType.Dsts) {
            return accountId;
        }
        // for cases where there is clientInfo
        if (serverClientInfo) {
            try {
                var clientInfo = buildClientInfo(serverClientInfo, cryptoObj);
                if (!StringUtils.isEmpty(clientInfo.uid) && !StringUtils.isEmpty(clientInfo.utid)) {
                    return "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid;
                }
            }
            catch (e) { }
        }
        // default to "sub" claim
        logger.verbose("No client info in response");
        return accountId;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AccountEntity.isAccountEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("localAccountId") &&
            entity.hasOwnProperty("username") &&
            entity.hasOwnProperty("authorityType"));
    };
    /**
     * Helper function to determine whether 2 accountInfo objects represent the same account
     * @param accountA
     * @param accountB
     * @param compareClaims - If set to true idTokenClaims will also be compared to determine account equality
     */
    AccountEntity.accountInfoIsEqual = function (accountA, accountB, compareClaims) {
        if (!accountA || !accountB) {
            return false;
        }
        var claimsMatch = true; // default to true so as to not fail comparison below if compareClaims: false
        if (compareClaims) {
            var accountAClaims = (accountA.idTokenClaims || {});
            var accountBClaims = (accountB.idTokenClaims || {});
            // issued at timestamp and nonce are expected to change each time a new id token is acquired
            claimsMatch = (accountAClaims.iat === accountBClaims.iat) &&
                (accountAClaims.nonce === accountBClaims.nonce);
        }
        return (accountA.homeAccountId === accountB.homeAccountId) &&
            (accountA.localAccountId === accountB.localAccountId) &&
            (accountA.username === accountB.username) &&
            (accountA.tenantId === accountB.tenantId) &&
            (accountA.environment === accountB.environment) &&
            (accountA.nativeAccountId === accountB.nativeAccountId) &&
            claimsMatch;
    };
    return AccountEntity;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * JWT Token representation class. Parses token string and generates claims object.
 */
var AuthToken = /** @class */ (function () {
    function AuthToken(rawToken, crypto) {
        if (StringUtils.isEmpty(rawToken)) {
            throw ClientAuthError.createTokenNullOrEmptyError(rawToken);
        }
        this.rawToken = rawToken;
        this.claims = AuthToken.extractTokenClaims(rawToken, crypto);
    }
    /**
     * Extract token by decoding the rawToken
     *
     * @param encodedToken
     */
    AuthToken.extractTokenClaims = function (encodedToken, crypto) {
        var decodedToken = StringUtils.decodeAuthToken(encodedToken);
        // token will be decoded to get the username
        try {
            var base64TokenPayload = decodedToken.JWSPayload;
            // base64Decode() should throw an error if there is an issue
            var base64Decoded = crypto.base64Decode(base64TokenPayload);
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            throw ClientAuthError.createTokenParsingError(err);
        }
    };
    /**
     * Determine if the token's max_age has transpired
     */
    AuthToken.checkMaxAge = function (authTime, maxAge) {
        /*
         * per https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
         * To force an immediate re-authentication: If an app requires that a user re-authenticate prior to access,
         * provide a value of 0 for the max_age parameter and the AS will force a fresh login.
         */
        var fiveMinuteSkew = 300000; // five minutes in milliseconds
        if ((maxAge === 0) || ((Date.now() - fiveMinuteSkew) > (authTime + maxAge))) {
            throw ClientAuthError.createMaxAgeTranspiredError();
        }
    };
    return AuthToken;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Interface class which implement cache storage functions used by MSAL to perform validity checks, and store tokens.
 */
var CacheManager = /** @class */ (function () {
    function CacheManager(clientId, cryptoImpl) {
        this.clientId = clientId;
        this.cryptoImpl = cryptoImpl;
    }
    /**
     * Returns all accounts in cache
     */
    CacheManager.prototype.getAllAccounts = function () {
        var _this = this;
        var currentAccounts = this.getAccountsFilteredBy();
        var accountValues = Object.keys(currentAccounts).map(function (accountKey) { return currentAccounts[accountKey]; });
        var numAccounts = accountValues.length;
        if (numAccounts < 1) {
            return [];
        }
        else {
            var allAccounts = accountValues.map(function (value) {
                var accountEntity = CacheManager.toObject(new AccountEntity(), value);
                var accountInfo = accountEntity.getAccountInfo();
                var idToken = _this.readIdTokenFromCache(_this.clientId, accountInfo);
                if (idToken && !accountInfo.idTokenClaims) {
                    accountInfo.idToken = idToken.secret;
                    accountInfo.idTokenClaims = new AuthToken(idToken.secret, _this.cryptoImpl).claims;
                }
                return accountInfo;
            });
            return allAccounts;
        }
    };
    /**
     * saves a cache record
     * @param cacheRecord
     */
    CacheManager.prototype.saveCacheRecord = function (cacheRecord) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cacheRecord) {
                            throw ClientAuthError.createNullOrUndefinedCacheRecord();
                        }
                        if (!!cacheRecord.account) {
                            this.setAccount(cacheRecord.account);
                        }
                        if (!!cacheRecord.idToken) {
                            this.setIdTokenCredential(cacheRecord.idToken);
                        }
                        if (!!!cacheRecord.accessToken) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.saveAccessToken(cacheRecord.accessToken)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!!cacheRecord.refreshToken) {
                            this.setRefreshTokenCredential(cacheRecord.refreshToken);
                        }
                        if (!!cacheRecord.appMetadata) {
                            this.setAppMetadata(cacheRecord.appMetadata);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * saves access token credential
     * @param credential
     */
    CacheManager.prototype.saveAccessToken = function (credential) {
        return __awaiter(this, void 0, void 0, function () {
            var currentTokenCache, currentScopes, currentAccessTokens, removedAccessTokens_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentTokenCache = this.getCredentialsFilteredBy({
                            clientId: credential.clientId,
                            credentialType: credential.credentialType,
                            environment: credential.environment,
                            homeAccountId: credential.homeAccountId,
                            realm: credential.realm,
                            tokenType: credential.tokenType,
                            requestedClaimsHash: credential.requestedClaimsHash
                        });
                        currentScopes = ScopeSet.fromString(credential.target);
                        currentAccessTokens = Object.keys(currentTokenCache.accessTokens).map(function (key) { return currentTokenCache.accessTokens[key]; });
                        if (!currentAccessTokens) return [3 /*break*/, 2];
                        removedAccessTokens_1 = [];
                        currentAccessTokens.forEach(function (tokenEntity) {
                            var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                            if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                                removedAccessTokens_1.push(_this.removeCredential(tokenEntity));
                            }
                        });
                        return [4 /*yield*/, Promise.all(removedAccessTokens_1)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.setAccessTokenCredential(credential);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * retrieve accounts matching all provided filters; if no filter is set, get all accounts
     * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param homeAccountId
     * @param environment
     * @param realm
     */
    CacheManager.prototype.getAccountsFilteredBy = function (accountFilter) {
        return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : Constants$1.EMPTY_STRING, accountFilter ? accountFilter.environment : Constants$1.EMPTY_STRING, accountFilter ? accountFilter.realm : Constants$1.EMPTY_STRING, accountFilter ? accountFilter.nativeAccountId : Constants$1.EMPTY_STRING);
    };
    /**
     * retrieve accounts matching all provided filters; if no filter is set, get all accounts
     * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param homeAccountId
     * @param environment
     * @param realm
     */
    CacheManager.prototype.getAccountsFilteredByInternal = function (homeAccountId, environment, realm, nativeAccountId) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingAccounts = {};
        allCacheKeys.forEach(function (cacheKey) {
            var entity = _this.getAccount(cacheKey);
            if (!entity) {
                return;
            }
            if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!realm && !_this.matchRealm(entity, realm)) {
                return;
            }
            if (!!nativeAccountId && !_this.matchNativeAccountId(entity, nativeAccountId)) {
                return;
            }
            matchingAccounts[cacheKey] = entity;
        });
        return matchingAccounts;
    };
    /**
     * retrieve credentails matching all provided filters; if no filter is set, get all credentials
     * @param homeAccountId
     * @param environment
     * @param credentialType
     * @param clientId
     * @param realm
     * @param target
     */
    CacheManager.prototype.getCredentialsFilteredBy = function (filter) {
        return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.familyId, filter.realm, filter.target, filter.userAssertionHash, filter.tokenType, filter.keyId, filter.requestedClaimsHash);
    };
    /**
     * Support function to help match credentials
     * @param homeAccountId
     * @param environment
     * @param credentialType
     * @param clientId
     * @param realm
     * @param target
     * @param userAssertionHash
     * @param tokenType
     */
    CacheManager.prototype.getCredentialsFilteredByInternal = function (homeAccountId, environment, credentialType, clientId, familyId, realm, target, userAssertionHash, tokenType, keyId, requestedClaimsHash) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingCredentials = {
            idTokens: {},
            accessTokens: {},
            refreshTokens: {},
        };
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-credential type cache entities
            var credType = CredentialEntity.getCredentialType(cacheKey);
            if (credType === Constants$1.NOT_DEFINED) {
                return;
            }
            // Attempt retrieval
            var entity = _this.getSpecificCredential(cacheKey, credType);
            if (!entity) {
                return;
            }
            if (!!userAssertionHash && !_this.matchUserAssertionHash(entity, userAssertionHash)) {
                return;
            }
            /*
             * homeAccountId can undefined, and we want to filter out cached items that have a homeAccountId of ""
             * because we don't want a client_credential request to return a cached token that has a homeAccountId
             */
            if ((typeof homeAccountId === "string") && !_this.matchHomeAccountId(entity, homeAccountId)) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!realm && !_this.matchRealm(entity, realm)) {
                return;
            }
            if (!!credentialType && !_this.matchCredentialType(entity, credentialType)) {
                return;
            }
            if (!!clientId && !_this.matchClientId(entity, clientId)) {
                return;
            }
            if (!!familyId && !_this.matchFamilyId(entity, familyId)) {
                return;
            }
            /*
             * idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
             * Resource specific refresh tokens case will be added when the support is deemed necessary
             */
            if (!!target && !_this.matchTarget(entity, target)) {
                return;
            }
            // If request OR cached entity has requested Claims Hash, check if they match
            if (requestedClaimsHash || entity.requestedClaimsHash) {
                // Don't match if either is undefined or they are different
                if (entity.requestedClaimsHash !== requestedClaimsHash) {
                    return;
                }
            }
            // Access Token with Auth Scheme specific matching
            if (credentialType === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
                if (!!tokenType && !_this.matchTokenType(entity, tokenType)) {
                    return;
                }
                // KeyId (sshKid) in request must match cached SSH certificate keyId because SSH cert is bound to a specific key
                if (tokenType === AuthenticationScheme.SSH) {
                    if (keyId && !_this.matchKeyId(entity, keyId)) {
                        return;
                    }
                }
            }
            // At this point, the entity matches the request, update cache key if key schema has changed
            var updatedCacheKey = _this.updateCredentialCacheKey(cacheKey, entity);
            switch (credType) {
                case CredentialType.ID_TOKEN:
                    matchingCredentials.idTokens[updatedCacheKey] = entity;
                    break;
                case CredentialType.ACCESS_TOKEN:
                case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                    matchingCredentials.accessTokens[updatedCacheKey] = entity;
                    break;
                case CredentialType.REFRESH_TOKEN:
                    matchingCredentials.refreshTokens[updatedCacheKey] = entity;
                    break;
            }
        });
        return matchingCredentials;
    };
    /**
     * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
     * @param filter
     */
    CacheManager.prototype.getAppMetadataFilteredBy = function (filter) {
        return this.getAppMetadataFilteredByInternal(filter.environment, filter.clientId);
    };
    /**
     * Support function to help match appMetadata
     * @param environment
     * @param clientId
     */
    CacheManager.prototype.getAppMetadataFilteredByInternal = function (environment, clientId) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingAppMetadata = {};
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-appMetadata type cache entities
            if (!_this.isAppMetadata(cacheKey)) {
                return;
            }
            // Attempt retrieval
            var entity = _this.getAppMetadata(cacheKey);
            if (!entity) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!clientId && !_this.matchClientId(entity, clientId)) {
                return;
            }
            matchingAppMetadata[cacheKey] = entity;
        });
        return matchingAppMetadata;
    };
    /**
     * retrieve authorityMetadata that contains a matching alias
     * @param filter
     */
    CacheManager.prototype.getAuthorityMetadataByAlias = function (host) {
        var _this = this;
        var allCacheKeys = this.getAuthorityMetadataKeys();
        var matchedEntity = null;
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-authorityMetadata type cache entities
            if (!_this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(_this.clientId) === -1) {
                return;
            }
            // Attempt retrieval
            var entity = _this.getAuthorityMetadata(cacheKey);
            if (!entity) {
                return;
            }
            if (entity.aliases.indexOf(host) === -1) {
                return;
            }
            matchedEntity = entity;
        });
        return matchedEntity;
    };
    /**
     * Removes all accounts and related tokens from cache.
     */
    CacheManager.prototype.removeAllAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allCacheKeys, removedAccounts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allCacheKeys = this.getKeys();
                        removedAccounts = [];
                        allCacheKeys.forEach(function (cacheKey) {
                            var entity = _this.getAccount(cacheKey);
                            if (!entity) {
                                return;
                            }
                            removedAccounts.push(_this.removeAccount(cacheKey));
                        });
                        return [4 /*yield*/, Promise.all(removedAccounts)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * returns a boolean if the given account is removed
     * @param account
     */
    CacheManager.prototype.removeAccount = function (accountKey) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = this.getAccount(accountKey);
                        if (!account) {
                            throw ClientAuthError.createNoAccountFoundError();
                        }
                        return [4 /*yield*/, this.removeAccountContext(account)];
                    case 1: return [2 /*return*/, ((_a.sent()) && this.removeItem(accountKey, CacheSchemaType.ACCOUNT))];
                }
            });
        });
    };
    /**
     * Removes credentials associated with the provided account
     * @param account
     */
    CacheManager.prototype.removeAccountContext = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var allCacheKeys, accountId, removedCredentials;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allCacheKeys = this.getKeys();
                        accountId = account.generateAccountId();
                        removedCredentials = [];
                        allCacheKeys.forEach(function (cacheKey) {
                            // don't parse any non-credential type cache entities
                            var credType = CredentialEntity.getCredentialType(cacheKey);
                            if (credType === Constants$1.NOT_DEFINED) {
                                return;
                            }
                            var cacheEntity = _this.getSpecificCredential(cacheKey, credType);
                            if (!!cacheEntity && accountId === cacheEntity.generateAccountId()) {
                                removedCredentials.push(_this.removeCredential(cacheEntity));
                            }
                        });
                        return [4 /*yield*/, Promise.all(removedCredentials)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * returns a boolean if the given credential is removed
     * @param credential
     */
    CacheManager.prototype.removeCredential = function (credential) {
        return __awaiter(this, void 0, void 0, function () {
            var key, accessTokenWithAuthSchemeEntity, kid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = credential.generateCredentialKey();
                        if (!(credential.credentialType.toLowerCase() === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())) return [3 /*break*/, 4];
                        if (!(credential.tokenType === AuthenticationScheme.POP)) return [3 /*break*/, 4];
                        accessTokenWithAuthSchemeEntity = credential;
                        kid = accessTokenWithAuthSchemeEntity.keyId;
                        if (!kid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.cryptoImpl.removeTokenBindingKey(kid)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a.sent();
                        throw ClientAuthError.createBindingKeyNotRemovedError();
                    case 4: return [2 /*return*/, this.removeItem(key, CacheSchemaType.CREDENTIAL)];
                }
            });
        });
    };
    /**
     * Removes all app metadata objects from cache.
     */
    CacheManager.prototype.removeAppMetadata = function () {
        var _this = this;
        var allCacheKeys = this.getKeys();
        allCacheKeys.forEach(function (cacheKey) {
            if (_this.isAppMetadata(cacheKey)) {
                _this.removeItem(cacheKey, CacheSchemaType.APP_METADATA);
            }
        });
        return true;
    };
    /**
     * Retrieve the cached credentials into a cacherecord
     * @param account
     * @param clientId
     * @param scopes
     * @param environment
     * @param authScheme
     */
    CacheManager.prototype.readCacheRecord = function (account, clientId, request, environment) {
        var cachedAccount = this.readAccountFromCache(account);
        var cachedIdToken = this.readIdTokenFromCache(clientId, account);
        var cachedAccessToken = this.readAccessTokenFromCache(clientId, account, request);
        var cachedRefreshToken = this.readRefreshTokenFromCache(clientId, account, false);
        var cachedAppMetadata = this.readAppMetadataFromCache(environment, clientId);
        if (cachedAccount && cachedIdToken) {
            cachedAccount.idTokenClaims = new AuthToken(cachedIdToken.secret, this.cryptoImpl).claims;
        }
        return {
            account: cachedAccount,
            idToken: cachedIdToken,
            accessToken: cachedAccessToken,
            refreshToken: cachedRefreshToken,
            appMetadata: cachedAppMetadata,
        };
    };
    /**
     * Retrieve AccountEntity from cache
     * @param account
     */
    CacheManager.prototype.readAccountFromCache = function (account) {
        var accountKey = AccountEntity.generateAccountCacheKey(account);
        return this.getAccount(accountKey);
    };
    /**
     * Retrieve AccountEntity from cache
     * @param nativeAccountId
     * @returns AccountEntity or Null
     */
    CacheManager.prototype.readAccountFromCacheWithNativeAccountId = function (nativeAccountId) {
        // fetch account from memory
        var accountFilter = {
            nativeAccountId: nativeAccountId
        };
        var accountCache = this.getAccountsFilteredBy(accountFilter);
        var accounts = Object.keys(accountCache).map(function (key) { return accountCache[key]; });
        if (accounts.length < 1) {
            return null;
        }
        else if (accounts.length > 1) {
            throw ClientAuthError.createMultipleMatchingAccountsInCacheError();
        }
        return accountCache[0];
    };
    /**
     * Retrieve IdTokenEntity from cache
     * @param clientId
     * @param account
     * @param inputRealm
     */
    CacheManager.prototype.readIdTokenFromCache = function (clientId, account) {
        var idTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: CredentialType.ID_TOKEN,
            clientId: clientId,
            realm: account.tenantId,
        };
        var credentialCache = this.getCredentialsFilteredBy(idTokenFilter);
        var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
        var numIdTokens = idTokens.length;
        if (numIdTokens < 1) {
            return null;
        }
        else if (numIdTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return idTokens[0];
    };
    /**
     * Retrieve AccessTokenEntity from cache
     * @param clientId
     * @param account
     * @param scopes
     * @param authScheme
     */
    CacheManager.prototype.readAccessTokenFromCache = function (clientId, account, request) {
        var scopes = new ScopeSet(request.scopes || []);
        var authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
        /*
         * Distinguish between Bearer and PoP/SSH token cache types
         * Cast to lowercase to handle "bearer" from ADFS
         */
        var credentialType = (authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
        var accessTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: credentialType,
            clientId: clientId,
            realm: account.tenantId,
            target: scopes.printScopesLowerCase(),
            tokenType: authScheme,
            keyId: request.sshKid,
            requestedClaimsHash: request.requestedClaimsHash,
        };
        var credentialCache = this.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        var numAccessTokens = accessTokens.length;
        if (numAccessTokens < 1) {
            return null;
        }
        else if (numAccessTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * Helper to retrieve the appropriate refresh token from cache
     * @param clientId
     * @param account
     * @param familyRT
     */
    CacheManager.prototype.readRefreshTokenFromCache = function (clientId, account, familyRT) {
        var id = familyRT ? THE_FAMILY_ID : undefined;
        var refreshTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: CredentialType.REFRESH_TOKEN,
            clientId: clientId,
            familyId: id,
        };
        var credentialCache = this.getCredentialsFilteredBy(refreshTokenFilter);
        var refreshTokens = Object.keys(credentialCache.refreshTokens).map(function (key) { return credentialCache.refreshTokens[key]; });
        var numRefreshTokens = refreshTokens.length;
        if (numRefreshTokens < 1) {
            return null;
        }
        // address the else case after remove functions address environment aliases
        return refreshTokens[0];
    };
    /**
     * Retrieve AppMetadataEntity from cache
     */
    CacheManager.prototype.readAppMetadataFromCache = function (environment, clientId) {
        var appMetadataFilter = {
            environment: environment,
            clientId: clientId,
        };
        var appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
        var appMetadataEntries = Object.keys(appMetadata).map(function (key) { return appMetadata[key]; });
        var numAppMetadata = appMetadataEntries.length;
        if (numAppMetadata < 1) {
            return null;
        }
        else if (numAppMetadata > 1) {
            throw ClientAuthError.createMultipleMatchingAppMetadataInCacheError();
        }
        return appMetadataEntries[0];
    };
    /**
     * Return the family_id value associated  with FOCI
     * @param environment
     * @param clientId
     */
    CacheManager.prototype.isAppMetadataFOCI = function (environment, clientId) {
        var appMetadata = this.readAppMetadataFromCache(environment, clientId);
        return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
    };
    /**
     * helper to match account ids
     * @param value
     * @param homeAccountId
     */
    CacheManager.prototype.matchHomeAccountId = function (entity, homeAccountId) {
        return !!((typeof entity.homeAccountId === "string") && (homeAccountId === entity.homeAccountId));
    };
    /**
     * helper to match assertion
     * @param value
     * @param oboAssertion
     */
    CacheManager.prototype.matchUserAssertionHash = function (entity, userAssertionHash) {
        return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
    };
    /**
     * helper to match environment
     * @param value
     * @param environment
     */
    CacheManager.prototype.matchEnvironment = function (entity, environment) {
        var cloudMetadata = this.getAuthorityMetadataByAlias(environment);
        if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
            return true;
        }
        return false;
    };
    /**
     * helper to match credential type
     * @param entity
     * @param credentialType
     */
    CacheManager.prototype.matchCredentialType = function (entity, credentialType) {
        return (entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase());
    };
    /**
     * helper to match client ids
     * @param entity
     * @param clientId
     */
    CacheManager.prototype.matchClientId = function (entity, clientId) {
        return !!(entity.clientId && clientId === entity.clientId);
    };
    /**
     * helper to match family ids
     * @param entity
     * @param familyId
     */
    CacheManager.prototype.matchFamilyId = function (entity, familyId) {
        return !!(entity.familyId && familyId === entity.familyId);
    };
    /**
     * helper to match realm
     * @param entity
     * @param realm
     */
    CacheManager.prototype.matchRealm = function (entity, realm) {
        return !!(entity.realm && realm === entity.realm);
    };
    /**
     * helper to match nativeAccountId
     * @param entity
     * @param nativeAccountId
     * @returns boolean indicating the match result
     */
    CacheManager.prototype.matchNativeAccountId = function (entity, nativeAccountId) {
        return !!(entity.nativeAccountId && nativeAccountId === entity.nativeAccountId);
    };
    /**
     * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
     * @param entity
     * @param target
     */
    CacheManager.prototype.matchTarget = function (entity, target) {
        var isNotAccessTokenCredential = (entity.credentialType !== CredentialType.ACCESS_TOKEN && entity.credentialType !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME);
        if (isNotAccessTokenCredential || !entity.target) {
            return false;
        }
        var entityScopeSet = ScopeSet.fromString(entity.target);
        var requestTargetScopeSet = ScopeSet.fromString(target);
        if (!requestTargetScopeSet.containsOnlyOIDCScopes()) {
            requestTargetScopeSet.removeOIDCScopes(); // ignore OIDC scopes
        }
        else {
            requestTargetScopeSet.removeScope(Constants$1.OFFLINE_ACCESS_SCOPE);
        }
        return entityScopeSet.containsScopeSet(requestTargetScopeSet);
    };
    /**
     * Returns true if the credential's tokenType or Authentication Scheme matches the one in the request, false otherwise
     * @param entity
     * @param tokenType
     */
    CacheManager.prototype.matchTokenType = function (entity, tokenType) {
        return !!(entity.tokenType && entity.tokenType === tokenType);
    };
    /**
     * Returns true if the credential's keyId matches the one in the request, false otherwise
     * @param entity
     * @param tokenType
     */
    CacheManager.prototype.matchKeyId = function (entity, keyId) {
        return !!(entity.keyId && entity.keyId === keyId);
    };
    /**
     * returns if a given cache entity is of the type appmetadata
     * @param key
     */
    CacheManager.prototype.isAppMetadata = function (key) {
        return key.indexOf(APP_METADATA) !== -1;
    };
    /**
     * returns if a given cache entity is of the type authoritymetadata
     * @param key
     */
    CacheManager.prototype.isAuthorityMetadata = function (key) {
        return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) !== -1;
    };
    /**
     * returns cache key used for cloud instance metadata
     */
    CacheManager.prototype.generateAuthorityMetadataCacheKey = function (authority) {
        return AUTHORITY_METADATA_CONSTANTS.CACHE_KEY + "-" + this.clientId + "-" + authority;
    };
    /**
     * Returns the specific credential (IdToken/AccessToken/RefreshToken) from the cache
     * @param key
     * @param credType
     */
    CacheManager.prototype.getSpecificCredential = function (key, credType) {
        switch (credType) {
            case CredentialType.ID_TOKEN: {
                return this.getIdTokenCredential(key);
            }
            case CredentialType.ACCESS_TOKEN:
            case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME: {
                return this.getAccessTokenCredential(key);
            }
            case CredentialType.REFRESH_TOKEN: {
                return this.getRefreshTokenCredential(key);
            }
            default:
                return null;
        }
    };
    /**
     * Helper to convert serialized data to object
     * @param obj
     * @param json
     */
    CacheManager.toObject = function (obj, json) {
        for (var propertyName in json) {
            obj[propertyName] = json[propertyName];
        }
        return obj;
    };
    return CacheManager;
}());
var DefaultStorageClass = /** @class */ (function (_super) {
    __extends(DefaultStorageClass, _super);
    function DefaultStorageClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultStorageClass.prototype.setAccount = function () {
        var notImplErr = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAccount = function () {
        var notImplErr = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setIdTokenCredential = function () {
        var notImplErr = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getIdTokenCredential = function () {
        var notImplErr = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setAccessTokenCredential = function () {
        var notImplErr = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAccessTokenCredential = function () {
        var notImplErr = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setRefreshTokenCredential = function () {
        var notImplErr = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getRefreshTokenCredential = function () {
        var notImplErr = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setAppMetadata = function () {
        var notImplErr = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAppMetadata = function () {
        var notImplErr = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setServerTelemetry = function () {
        var notImplErr = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getServerTelemetry = function () {
        var notImplErr = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setAuthorityMetadata = function () {
        var notImplErr = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAuthorityMetadata = function () {
        var notImplErr = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAuthorityMetadataKeys = function () {
        var notImplErr = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setThrottlingCache = function () {
        var notImplErr = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getThrottlingCache = function () {
        var notImplErr = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.removeItem = function () {
        var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.containsKey = function () {
        var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getKeys = function () {
        var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    };
    DefaultStorageClass.prototype.updateCredentialCacheKey = function () {
        var notImplErr = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    return DefaultStorageClass;
}(CacheManager));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// Token renewal offset default in seconds
var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
var DEFAULT_SYSTEM_OPTIONS$1 = {
    tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
    preventCorsPreflight: false,
    proxyUrl: Constants$1.EMPTY_STRING
};
var DEFAULT_LOGGER_IMPLEMENTATION = {
    loggerCallback: function () {
        // allow users to not set loggerCallback
    },
    piiLoggingEnabled: false,
    logLevel: LogLevel.Info,
    correlationId: Constants$1.EMPTY_STRING
};
var DEFAULT_NETWORK_IMPLEMENTATION = {
    sendGetRequestAsync: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    sendPostRequestAsync: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    }
};
var DEFAULT_LIBRARY_INFO = {
    sku: Constants$1.SKU,
    version: version$1,
    cpu: Constants$1.EMPTY_STRING,
    os: Constants$1.EMPTY_STRING
};
var DEFAULT_CLIENT_CREDENTIALS = {
    clientSecret: Constants$1.EMPTY_STRING,
    clientAssertion: undefined
};
var DEFAULT_AZURE_CLOUD_OPTIONS = {
    azureCloudInstance: AzureCloudInstance.None,
    tenant: "" + Constants$1.DEFAULT_COMMON_TENANT
};
var DEFAULT_TELEMETRY_OPTIONS$1 = {
    application: {
        appName: "",
        appVersion: ""
    }
};
/**
 * Function that sets the default options when not explicitly configured from app developer
 *
 * @param Configuration
 *
 * @returns Configuration
 */
function buildClientConfiguration(_a) {
    var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, clientCredentials = _a.clientCredentials, libraryInfo = _a.libraryInfo, telemetry = _a.telemetry, serverTelemetryManager = _a.serverTelemetryManager, persistencePlugin = _a.persistencePlugin, serializableCache = _a.serializableCache;
    var loggerOptions = __assign(__assign({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption);
    return {
        authOptions: buildAuthOptions(userAuthOptions),
        systemOptions: __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS$1), userSystemOptions),
        loggerOptions: loggerOptions,
        storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION),
        networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
        cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
        clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
        libraryInfo: __assign(__assign({}, DEFAULT_LIBRARY_INFO), libraryInfo),
        telemetry: __assign(__assign({}, DEFAULT_TELEMETRY_OPTIONS$1), telemetry),
        serverTelemetryManager: serverTelemetryManager || null,
        persistencePlugin: persistencePlugin || null,
        serializableCache: serializableCache || null,
    };
}
/**
 * Construct authoptions from the client and platform passed values
 * @param authOptions
 */
function buildAuthOptions(authOptions) {
    return __assign({ clientCapabilities: [], azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS, skipAuthorityMetadataCache: false }, authOptions);
}

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(errorCode, errorMessage, subError) {
        var _this = _super.call(this, errorCode, errorMessage, subError) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    return ServerError;
}(AuthError));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ThrottlingUtils = /** @class */ (function () {
    function ThrottlingUtils() {
    }
    /**
     * Prepares a RequestThumbprint to be stored as a key.
     * @param thumbprint
     */
    ThrottlingUtils.generateThrottlingStorageKey = function (thumbprint) {
        return ThrottlingConstants.THROTTLING_PREFIX + "." + JSON.stringify(thumbprint);
    };
    /**
     * Performs necessary throttling checks before a network request.
     * @param cacheManager
     * @param thumbprint
     */
    ThrottlingUtils.preProcess = function (cacheManager, thumbprint) {
        var _a;
        var key = ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
        var value = cacheManager.getThrottlingCache(key);
        if (value) {
            if (value.throttleTime < Date.now()) {
                cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
                return;
            }
            throw new ServerError(((_a = value.errorCodes) === null || _a === void 0 ? void 0 : _a.join(" ")) || Constants$1.EMPTY_STRING, value.errorMessage, value.subError);
        }
    };
    /**
     * Performs necessary throttling checks after a network request.
     * @param cacheManager
     * @param thumbprint
     * @param response
     */
    ThrottlingUtils.postProcess = function (cacheManager, thumbprint, response) {
        if (ThrottlingUtils.checkResponseStatus(response) || ThrottlingUtils.checkResponseForRetryAfter(response)) {
            var thumbprintValue = {
                throttleTime: ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
                error: response.body.error,
                errorCodes: response.body.error_codes,
                errorMessage: response.body.error_description,
                subError: response.body.suberror
            };
            cacheManager.setThrottlingCache(ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue);
        }
    };
    /**
     * Checks a NetworkResponse object's status codes against 429 or 5xx
     * @param response
     */
    ThrottlingUtils.checkResponseStatus = function (response) {
        return response.status === 429 || response.status >= 500 && response.status < 600;
    };
    /**
     * Checks a NetworkResponse object's RetryAfter header
     * @param response
     */
    ThrottlingUtils.checkResponseForRetryAfter = function (response) {
        if (response.headers) {
            return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
        }
        return false;
    };
    /**
     * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
     * @param throttleTime
     */
    ThrottlingUtils.calculateThrottleTime = function (throttleTime) {
        var time = throttleTime <= 0 ? 0 : throttleTime;
        var currentSeconds = Date.now() / 1000;
        return Math.floor(Math.min(currentSeconds + (time || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
    };
    ThrottlingUtils.removeThrottle = function (cacheManager, clientId, request, homeAccountIdentifier) {
        var thumbprint = {
            clientId: clientId,
            authority: request.authority,
            scopes: request.scopes,
            homeAccountIdentifier: homeAccountIdentifier,
            claims: request.claims,
            authenticationScheme: request.authenticationScheme,
            resourceRequestMethod: request.resourceRequestMethod,
            resourceRequestUri: request.resourceRequestUri,
            shrClaims: request.shrClaims,
            sshKid: request.sshKid
        };
        var key = this.generateThrottlingStorageKey(thumbprint);
        return cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
    };
    return ThrottlingUtils;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var NetworkManager = /** @class */ (function () {
    function NetworkManager(networkClient, cacheManager) {
        this.networkClient = networkClient;
        this.cacheManager = cacheManager;
    }
    /**
     * Wraps sendPostRequestAsync with necessary preflight and postflight logic
     * @param thumbprint
     * @param tokenEndpoint
     * @param options
     */
    NetworkManager.prototype.sendPostRequest = function (thumbprint, tokenEndpoint, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ThrottlingUtils.preProcess(this.cacheManager, thumbprint);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.networkClient.sendPostRequestAsync(tokenEndpoint, options)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (e_1 instanceof AuthError) {
                            throw e_1;
                        }
                        else {
                            throw ClientAuthError.createNetworkError(tokenEndpoint, e_1);
                        }
                    case 4:
                        ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response);
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return NetworkManager;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var CcsCredentialType;
(function (CcsCredentialType) {
    CcsCredentialType["HOME_ACCOUNT_ID"] = "home_account_id";
    CcsCredentialType["UPN"] = "UPN";
})(CcsCredentialType || (CcsCredentialType = {}));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
 */
var BaseClient = /** @class */ (function () {
    function BaseClient(configuration, performanceClient) {
        // Set the configuration
        this.config = buildClientConfiguration(configuration);
        // Initialize the logger
        this.logger = new Logger(this.config.loggerOptions, name$1, version$1);
        // Initialize crypto
        this.cryptoUtils = this.config.cryptoInterface;
        // Initialize storage interface
        this.cacheManager = this.config.storageInterface;
        // Set the network interface
        this.networkClient = this.config.networkInterface;
        // Set the NetworkManager
        this.networkManager = new NetworkManager(this.networkClient, this.cacheManager);
        // Set TelemetryManager
        this.serverTelemetryManager = this.config.serverTelemetryManager;
        // set Authority
        this.authority = this.config.authOptions.authority;
        // set performance telemetry client
        this.performanceClient = performanceClient;
    }
    /**
     * Creates default headers for requests to token endpoint
     */
    BaseClient.prototype.createTokenRequestHeaders = function (ccsCred) {
        var headers = {};
        headers[HeaderNames.CONTENT_TYPE] = Constants$1.URL_FORM_CONTENT_TYPE;
        if (!this.config.systemOptions.preventCorsPreflight && ccsCred) {
            switch (ccsCred.type) {
                case CcsCredentialType.HOME_ACCOUNT_ID:
                    try {
                        var clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
                        headers[HeaderNames.CCS_HEADER] = "Oid:" + clientInfo.uid + "@" + clientInfo.utid;
                    }
                    catch (e) {
                        this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                    }
                    break;
                case CcsCredentialType.UPN:
                    headers[HeaderNames.CCS_HEADER] = "UPN: " + ccsCred.credential;
                    break;
            }
        }
        return headers;
    };
    /**
     * Http post to token endpoint
     * @param tokenEndpoint
     * @param queryString
     * @param headers
     * @param thumbprint
     */
    BaseClient.prototype.executePostToTokenEndpoint = function (tokenEndpoint, queryString, headers, thumbprint) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers: headers, proxyUrl: this.config.systemOptions.proxyUrl })];
                    case 1:
                        response = _a.sent();
                        if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
                            // Telemetry data successfully logged by server, clear Telemetry cache
                            this.config.serverTelemetryManager.clearTelemetryCache();
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Updates the authority object of the client. Endpoint discovery must be completed.
     * @param updatedAuthority
     */
    BaseClient.prototype.updateAuthority = function (updatedAuthority) {
        if (!updatedAuthority.discoveryComplete()) {
            throw ClientAuthError.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
        }
        this.authority = updatedAuthority;
    };
    return BaseClient;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Validates server consumable params from the "request" objects
 */
var RequestValidator = /** @class */ (function () {
    function RequestValidator() {
    }
    /**
     * Utility to check if the `redirectUri` in the request is a non-null value
     * @param redirectUri
     */
    RequestValidator.validateRedirectUri = function (redirectUri) {
        if (StringUtils.isEmpty(redirectUri)) {
            throw ClientConfigurationError.createRedirectUriEmptyError();
        }
    };
    /**
     * Utility to validate prompt sent by the user in the request
     * @param prompt
     */
    RequestValidator.validatePrompt = function (prompt) {
        var promptValues = [];
        for (var value in PromptValue) {
            promptValues.push(PromptValue[value]);
        }
        if (promptValues.indexOf(prompt) < 0) {
            throw ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    RequestValidator.validateClaims = function (claims) {
        try {
            JSON.parse(claims);
        }
        catch (e) {
            throw ClientConfigurationError.createInvalidClaimsRequestError();
        }
    };
    /**
     * Utility to validate code_challenge and code_challenge_method
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    RequestValidator.validateCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
        if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
            throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
        }
        else {
            this.validateCodeChallengeMethod(codeChallengeMethod);
        }
    };
    /**
     * Utility to validate code_challenge_method
     * @param codeChallengeMethod
     */
    RequestValidator.validateCodeChallengeMethod = function (codeChallengeMethod) {
        if ([
            CodeChallengeMethodValues.PLAIN,
            CodeChallengeMethodValues.S256
        ].indexOf(codeChallengeMethod) < 0) {
            throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
        }
    };
    /**
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    RequestValidator.sanitizeEQParams = function (eQParams, queryParams) {
        if (!eQParams) {
            return {};
        }
        // Remove any query parameters already included in SSO params
        queryParams.forEach(function (value, key) {
            if (eQParams[key]) {
                delete eQParams[key];
            }
        });
        return eQParams;
    };
    return RequestValidator;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var RequestParameterBuilder = /** @class */ (function () {
    function RequestParameterBuilder() {
        this.parameters = new Map();
    }
    /**
     * add response_type = code
     */
    RequestParameterBuilder.prototype.addResponseTypeCode = function () {
        this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants$1.CODE_RESPONSE_TYPE));
    };
    /**
     * add response_type = token id_token
     */
    RequestParameterBuilder.prototype.addResponseTypeForTokenAndIdToken = function () {
        this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants$1.TOKEN_RESPONSE_TYPE + " " + Constants$1.ID_TOKEN_RESPONSE_TYPE));
    };
    /**
     * add response_mode. defaults to query.
     * @param responseMode
     */
    RequestParameterBuilder.prototype.addResponseMode = function (responseMode) {
        this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent((responseMode) ? responseMode : ResponseMode.QUERY));
    };
    /**
     * Add flag to indicate STS should attempt to use WAM if available
     */
    RequestParameterBuilder.prototype.addNativeBroker = function () {
        this.parameters.set(AADServerParamKeys.NATIVE_BROKER, encodeURIComponent("1"));
    };
    /**
     * add scopes. set addOidcScopes to false to prevent default scopes in non-user scenarios
     * @param scopeSet
     * @param addOidcScopes
     */
    RequestParameterBuilder.prototype.addScopes = function (scopes, addOidcScopes) {
        if (addOidcScopes === void 0) { addOidcScopes = true; }
        var requestScopes = addOidcScopes ? __spreadArrays(scopes || [], OIDC_DEFAULT_SCOPES) : scopes || [];
        var scopeSet = new ScopeSet(requestScopes);
        this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
    };
    /**
     * add clientId
     * @param clientId
     */
    RequestParameterBuilder.prototype.addClientId = function (clientId) {
        this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
    };
    /**
     * add redirect_uri
     * @param redirectUri
     */
    RequestParameterBuilder.prototype.addRedirectUri = function (redirectUri) {
        RequestValidator.validateRedirectUri(redirectUri);
        this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
    };
    /**
     * add post logout redirectUri
     * @param redirectUri
     */
    RequestParameterBuilder.prototype.addPostLogoutRedirectUri = function (redirectUri) {
        RequestValidator.validateRedirectUri(redirectUri);
        this.parameters.set(AADServerParamKeys.POST_LOGOUT_URI, encodeURIComponent(redirectUri));
    };
    /**
     * add id_token_hint to logout request
     * @param idTokenHint
     */
    RequestParameterBuilder.prototype.addIdTokenHint = function (idTokenHint) {
        this.parameters.set(AADServerParamKeys.ID_TOKEN_HINT, encodeURIComponent(idTokenHint));
    };
    /**
     * add domain_hint
     * @param domainHint
     */
    RequestParameterBuilder.prototype.addDomainHint = function (domainHint) {
        this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
    };
    /**
     * add login_hint
     * @param loginHint
     */
    RequestParameterBuilder.prototype.addLoginHint = function (loginHint) {
        this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
    };
    /**
     * Adds the CCS (Cache Credential Service) query parameter for login_hint
     * @param loginHint
     */
    RequestParameterBuilder.prototype.addCcsUpn = function (loginHint) {
        this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent("UPN:" + loginHint));
    };
    /**
     * Adds the CCS (Cache Credential Service) query parameter for account object
     * @param loginHint
     */
    RequestParameterBuilder.prototype.addCcsOid = function (clientInfo) {
        this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent("Oid:" + clientInfo.uid + "@" + clientInfo.utid));
    };
    /**
     * add sid
     * @param sid
     */
    RequestParameterBuilder.prototype.addSid = function (sid) {
        this.parameters.set(SSOTypes.SID, encodeURIComponent(sid));
    };
    /**
     * add claims
     * @param claims
     */
    RequestParameterBuilder.prototype.addClaims = function (claims, clientCapabilities) {
        var mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
        RequestValidator.validateClaims(mergedClaims);
        this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(mergedClaims));
    };
    /**
     * add correlationId
     * @param correlationId
     */
    RequestParameterBuilder.prototype.addCorrelationId = function (correlationId) {
        this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
    };
    /**
     * add library info query params
     * @param libraryInfo
     */
    RequestParameterBuilder.prototype.addLibraryInfo = function (libraryInfo) {
        // Telemetry Info
        this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
        this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
        if (libraryInfo.os) {
            this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
        }
        if (libraryInfo.cpu) {
            this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
        }
    };
    /**
     * Add client telemetry parameters
     * @param appTelemetry
     */
    RequestParameterBuilder.prototype.addApplicationTelemetry = function (appTelemetry) {
        if (appTelemetry === null || appTelemetry === void 0 ? void 0 : appTelemetry.appName) {
            this.parameters.set(AADServerParamKeys.X_APP_NAME, appTelemetry.appName);
        }
        if (appTelemetry === null || appTelemetry === void 0 ? void 0 : appTelemetry.appVersion) {
            this.parameters.set(AADServerParamKeys.X_APP_VER, appTelemetry.appVersion);
        }
    };
    /**
     * add prompt
     * @param prompt
     */
    RequestParameterBuilder.prototype.addPrompt = function (prompt) {
        RequestValidator.validatePrompt(prompt);
        this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
    };
    /**
     * add state
     * @param state
     */
    RequestParameterBuilder.prototype.addState = function (state) {
        if (!StringUtils.isEmpty(state)) {
            this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
        }
    };
    /**
     * add nonce
     * @param nonce
     */
    RequestParameterBuilder.prototype.addNonce = function (nonce) {
        this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
    };
    /**
     * add code_challenge and code_challenge_method
     * - throw if either of them are not passed
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    RequestParameterBuilder.prototype.addCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
        RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
        if (codeChallenge && codeChallengeMethod) {
            this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
            this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
        }
        else {
            throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
        }
    };
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    RequestParameterBuilder.prototype.addAuthorizationCode = function (code) {
        this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
    };
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    RequestParameterBuilder.prototype.addDeviceCode = function (code) {
        this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
    };
    /**
     * add the `refreshToken` passed by the user
     * @param refreshToken
     */
    RequestParameterBuilder.prototype.addRefreshToken = function (refreshToken) {
        this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
    };
    /**
     * add the `code_verifier` passed by the user to exchange for a token
     * @param codeVerifier
     */
    RequestParameterBuilder.prototype.addCodeVerifier = function (codeVerifier) {
        this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
    };
    /**
     * add client_secret
     * @param clientSecret
     */
    RequestParameterBuilder.prototype.addClientSecret = function (clientSecret) {
        this.parameters.set(AADServerParamKeys.CLIENT_SECRET, encodeURIComponent(clientSecret));
    };
    /**
     * add clientAssertion for confidential client flows
     * @param clientAssertion
     */
    RequestParameterBuilder.prototype.addClientAssertion = function (clientAssertion) {
        if (!StringUtils.isEmpty(clientAssertion)) {
            this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION, encodeURIComponent(clientAssertion));
        }
    };
    /**
     * add clientAssertionType for confidential client flows
     * @param clientAssertionType
     */
    RequestParameterBuilder.prototype.addClientAssertionType = function (clientAssertionType) {
        if (!StringUtils.isEmpty(clientAssertionType)) {
            this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION_TYPE, encodeURIComponent(clientAssertionType));
        }
    };
    /**
     * add OBO assertion for confidential client flows
     * @param clientAssertion
     */
    RequestParameterBuilder.prototype.addOboAssertion = function (oboAssertion) {
        this.parameters.set(AADServerParamKeys.OBO_ASSERTION, encodeURIComponent(oboAssertion));
    };
    /**
     * add grant type
     * @param grantType
     */
    RequestParameterBuilder.prototype.addRequestTokenUse = function (tokenUse) {
        this.parameters.set(AADServerParamKeys.REQUESTED_TOKEN_USE, encodeURIComponent(tokenUse));
    };
    /**
     * add grant type
     * @param grantType
     */
    RequestParameterBuilder.prototype.addGrantType = function (grantType) {
        this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
    };
    /**
     * add client info
     *
     */
    RequestParameterBuilder.prototype.addClientInfo = function () {
        this.parameters.set(CLIENT_INFO, "1");
    };
    /**
     * add extraQueryParams
     * @param eQparams
     */
    RequestParameterBuilder.prototype.addExtraQueryParameters = function (eQparams) {
        var _this = this;
        RequestValidator.sanitizeEQParams(eQparams, this.parameters);
        Object.keys(eQparams).forEach(function (key) {
            _this.parameters.set(key, eQparams[key]);
        });
    };
    RequestParameterBuilder.prototype.addClientCapabilitiesToClaims = function (claims, clientCapabilities) {
        var mergedClaims;
        // Parse provided claims into JSON object or initialize empty object
        if (!claims) {
            mergedClaims = {};
        }
        else {
            try {
                mergedClaims = JSON.parse(claims);
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidClaimsRequestError();
            }
        }
        if (clientCapabilities && clientCapabilities.length > 0) {
            if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
                // Add access_token key to claims object
                mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
            }
            // Add xms_cc claim with provided clientCapabilities to access_token key
            mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
                values: clientCapabilities
            };
        }
        return JSON.stringify(mergedClaims);
    };
    /**
     * adds `username` for Password Grant flow
     * @param username
     */
    RequestParameterBuilder.prototype.addUsername = function (username) {
        this.parameters.set(PasswordGrantConstants.username, encodeURIComponent(username));
    };
    /**
     * adds `password` for Password Grant flow
     * @param password
     */
    RequestParameterBuilder.prototype.addPassword = function (password) {
        this.parameters.set(PasswordGrantConstants.password, encodeURIComponent(password));
    };
    /**
     * add pop_jwk to query params
     * @param cnfString
     */
    RequestParameterBuilder.prototype.addPopToken = function (cnfString) {
        if (!StringUtils.isEmpty(cnfString)) {
            this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.POP);
            this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(cnfString));
        }
    };
    /**
     * add SSH JWK and key ID to query params
     */
    RequestParameterBuilder.prototype.addSshJwk = function (sshJwkString) {
        if (!StringUtils.isEmpty(sshJwkString)) {
            this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.SSH);
            this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(sshJwkString));
        }
    };
    /**
     * add server telemetry fields
     * @param serverTelemetryManager
     */
    RequestParameterBuilder.prototype.addServerTelemetry = function (serverTelemetryManager) {
        this.parameters.set(AADServerParamKeys.X_CLIENT_CURR_TELEM, serverTelemetryManager.generateCurrentRequestHeaderValue());
        this.parameters.set(AADServerParamKeys.X_CLIENT_LAST_TELEM, serverTelemetryManager.generateLastRequestHeaderValue());
    };
    /**
     * Adds parameter that indicates to the server that throttling is supported
     */
    RequestParameterBuilder.prototype.addThrottling = function () {
        this.parameters.set(AADServerParamKeys.X_MS_LIB_CAPABILITY, ThrottlingConstants.X_MS_LIB_CAPABILITY_VALUE);
    };
    /**
     * Adds logout_hint parameter for "silent" logout which prevent server account picker
     */
    RequestParameterBuilder.prototype.addLogoutHint = function (logoutHint) {
        this.parameters.set(AADServerParamKeys.LOGOUT_HINT, encodeURIComponent(logoutHint));
    };
    /**
     * Utility to create a URL from the params map
     */
    RequestParameterBuilder.prototype.createQueryString = function () {
        var queryParameterArray = new Array();
        this.parameters.forEach(function (value, key) {
            queryParameterArray.push(key + "=" + value);
        });
        return queryParameterArray.join("&");
    };
    return RequestParameterBuilder;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ID_TOKEN Cache
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-idtoken-clientId-contoso.com-
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      realm: Full tenant or organizational identifier that the account belongs to
 * }
 */
var IdTokenEntity = /** @class */ (function (_super) {
    __extends(IdTokenEntity, _super);
    function IdTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create IdTokenEntity
     * @param homeAccountId
     * @param authenticationResult
     * @param clientId
     * @param authority
     */
    IdTokenEntity.createIdTokenEntity = function (homeAccountId, environment, idToken, clientId, tenantId) {
        var idTokenEntity = new IdTokenEntity();
        idTokenEntity.credentialType = CredentialType.ID_TOKEN;
        idTokenEntity.homeAccountId = homeAccountId;
        idTokenEntity.environment = environment;
        idTokenEntity.clientId = clientId;
        idTokenEntity.secret = idToken;
        idTokenEntity.realm = tenantId;
        return idTokenEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    IdTokenEntity.isIdTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity["credentialType"] === CredentialType.ID_TOKEN);
    };
    return IdTokenEntity;
}(CredentialEntity));

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Utility class which exposes functions for managing date and time operations.
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * return the current time in Unix time (seconds).
     */
    TimeUtils.nowSeconds = function () {
        // Date.getTime() returns in milliseconds.
        return Math.round(new Date().getTime() / 1000.0);
    };
    /**
     * check if a token is expired based on given UTC time in seconds.
     * @param expiresOn
     */
    TimeUtils.isTokenExpired = function (expiresOn, offset) {
        // check for access token expiry
        var expirationSec = Number(expiresOn) || 0;
        var offsetCurrentTimeSec = TimeUtils.nowSeconds() + offset;
        // If current time + offset is greater than token expiration time, then token is expired.
        return (offsetCurrentTimeSec > expirationSec);
    };
    /**
     * If the current time is earlier than the time that a token was cached at, we must discard the token
     * i.e. The system clock was turned back after acquiring the cached token
     * @param cachedAt
     * @param offset
     */
    TimeUtils.wasClockTurnedBack = function (cachedAt) {
        var cachedAtSec = Number(cachedAt);
        return cachedAtSec > TimeUtils.nowSeconds();
    };
    /**
     * Waits for t number of milliseconds
     * @param t number
     * @param value T
     */
    TimeUtils.delay = function (t, value) {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(value); }, t); });
    };
    return TimeUtils;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ACCESS_TOKEN Credential Type
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-accesstoken-clientId-contoso.com-user.read
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, usually only used for refresh tokens
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 *      cachedAt: Absolute device time when entry was created in the cache.
 *      expiresOn: Token expiry time, calculated based on current UTC time in seconds. Represented as a string.
 *      extendedExpiresOn: Additional extended expiry time until when token is valid in case of server-side outage. Represented as string in UTC seconds.
 *      keyId: used for POP and SSH tokenTypes
 *      tokenType: Type of the token issued. Usually "Bearer"
 * }
 */
var AccessTokenEntity = /** @class */ (function (_super) {
    __extends(AccessTokenEntity, _super);
    function AccessTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create AccessTokenEntity
     * @param homeAccountId
     * @param environment
     * @param accessToken
     * @param clientId
     * @param tenantId
     * @param scopes
     * @param expiresOn
     * @param extExpiresOn
     */
    AccessTokenEntity.createAccessTokenEntity = function (homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, cryptoUtils, refreshOn, tokenType, userAssertionHash, keyId, requestedClaims, requestedClaimsHash) {
        var _a, _b;
        var atEntity = new AccessTokenEntity();
        atEntity.homeAccountId = homeAccountId;
        atEntity.credentialType = CredentialType.ACCESS_TOKEN;
        atEntity.secret = accessToken;
        var currentTime = TimeUtils.nowSeconds();
        atEntity.cachedAt = currentTime.toString();
        /*
         * Token expiry time.
         * This value should be  calculated based on the current UTC time measured locally and the value  expires_in Represented as a string in JSON.
         */
        atEntity.expiresOn = expiresOn.toString();
        atEntity.extendedExpiresOn = extExpiresOn.toString();
        if (refreshOn) {
            atEntity.refreshOn = refreshOn.toString();
        }
        atEntity.environment = environment;
        atEntity.clientId = clientId;
        atEntity.realm = tenantId;
        atEntity.target = scopes;
        atEntity.userAssertionHash = userAssertionHash;
        atEntity.tokenType = StringUtils.isEmpty(tokenType) ? AuthenticationScheme.BEARER : tokenType;
        if (requestedClaims) {
            atEntity.requestedClaims = requestedClaims;
            atEntity.requestedClaimsHash = requestedClaimsHash;
        }
        /*
         * Create Access Token With Auth Scheme instead of regular access token
         * Cast to lower to handle "bearer" from ADFS
         */
        if (((_a = atEntity.tokenType) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== AuthenticationScheme.BEARER.toLowerCase()) {
            atEntity.credentialType = CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
            switch (atEntity.tokenType) {
                case AuthenticationScheme.POP:
                    // Make sure keyId is present and add it to credential
                    var tokenClaims = AuthToken.extractTokenClaims(accessToken, cryptoUtils);
                    if (!((_b = tokenClaims === null || tokenClaims === void 0 ? void 0 : tokenClaims.cnf) === null || _b === void 0 ? void 0 : _b.kid)) {
                        throw ClientAuthError.createTokenClaimsRequiredError();
                    }
                    atEntity.keyId = tokenClaims.cnf.kid;
                    break;
                case AuthenticationScheme.SSH:
                    atEntity.keyId = keyId;
            }
        }
        return atEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AccessTokenEntity.isAccessTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity.hasOwnProperty("target") &&
            (entity["credentialType"] === CredentialType.ACCESS_TOKEN || entity["credentialType"] === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME));
    };
    return AccessTokenEntity;
}(CredentialEntity));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * REFRESH_TOKEN Cache
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-refreshtoken-clientId--
 *
 * Value:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, '1' represents Microsoft Family
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 * }
 */
var RefreshTokenEntity = /** @class */ (function (_super) {
    __extends(RefreshTokenEntity, _super);
    function RefreshTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create RefreshTokenEntity
     * @param homeAccountId
     * @param authenticationResult
     * @param clientId
     * @param authority
     */
    RefreshTokenEntity.createRefreshTokenEntity = function (homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash) {
        var rtEntity = new RefreshTokenEntity();
        rtEntity.clientId = clientId;
        rtEntity.credentialType = CredentialType.REFRESH_TOKEN;
        rtEntity.environment = environment;
        rtEntity.homeAccountId = homeAccountId;
        rtEntity.secret = refreshToken;
        rtEntity.userAssertionHash = userAssertionHash;
        if (familyId)
            rtEntity.familyId = familyId;
        return rtEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    RefreshTokenEntity.isRefreshTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity["credentialType"] === CredentialType.REFRESH_TOKEN);
    };
    return RefreshTokenEntity;
}(CredentialEntity));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * InteractionRequiredServerErrorMessage contains string constants used by error codes and messages returned by the server indicating interaction is required
 */
var InteractionRequiredServerErrorMessage = [
    "interaction_required",
    "consent_required",
    "login_required"
];
var InteractionRequiredAuthSubErrorMessage = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required"
];
/**
 * Interaction required errors defined by the SDK
 */
var InteractionRequiredAuthErrorMessage = {
    noTokensFoundError: {
        code: "no_tokens_found",
        desc: "No refresh token found in the cache. Please sign-in."
    },
    native_account_unavailable: {
        code: "native_account_unavailable",
        desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
    }
};
/**
 * Error thrown when user interaction is required.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    __extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage, subError) {
        var _this = _super.call(this, errorCode, errorMessage, subError) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    /**
     * Helper function used to determine if an error thrown by the server requires interaction to resolve
     * @param errorCode
     * @param errorString
     * @param subError
     */
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorCode, errorString, subError) {
        var isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
        var isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
        var isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some(function (irErrorCode) {
            return errorString.indexOf(irErrorCode) > -1;
        });
        return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
    };
    /**
     * Creates an error thrown when the authorization code required for a token request is null or empty.
     */
    InteractionRequiredAuthError.createNoTokensFoundError = function () {
        return new InteractionRequiredAuthError(InteractionRequiredAuthErrorMessage.noTokensFoundError.code, InteractionRequiredAuthErrorMessage.noTokensFoundError.desc);
    };
    /**
     * Creates an error thrown when the native broker returns ACCOUNT_UNAVAILABLE status, indicating that the account was removed and interactive sign-in is required
     * @returns
     */
    InteractionRequiredAuthError.createNativeAccountUnavailableError = function () {
        return new InteractionRequiredAuthError(InteractionRequiredAuthErrorMessage.native_account_unavailable.code, InteractionRequiredAuthErrorMessage.native_account_unavailable.desc);
    };
    return InteractionRequiredAuthError;
}(AuthError));

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var CacheRecord = /** @class */ (function () {
    function CacheRecord(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity) {
        this.account = accountEntity || null;
        this.idToken = idTokenEntity || null;
        this.accessToken = accessTokenEntity || null;
        this.refreshToken = refreshTokenEntity || null;
        this.appMetadata = appMetadataEntity || null;
    }
    return CacheRecord;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class which provides helpers for OAuth 2.0 protocol specific values
 */
var ProtocolUtils = /** @class */ (function () {
    function ProtocolUtils() {
    }
    /**
     * Appends user state with random guid, or returns random guid.
     * @param userState
     * @param randomGuid
     */
    ProtocolUtils.setRequestState = function (cryptoObj, userState, meta) {
        var libraryState = ProtocolUtils.generateLibraryState(cryptoObj, meta);
        return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants$1.RESOURCE_DELIM + userState : libraryState;
    };
    /**
     * Generates the state value used by the common library.
     * @param randomGuid
     * @param cryptoObj
     */
    ProtocolUtils.generateLibraryState = function (cryptoObj, meta) {
        if (!cryptoObj) {
            throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
        }
        // Create a state object containing a unique id and the timestamp of the request creation
        var stateObj = {
            id: cryptoObj.createNewGuid()
        };
        if (meta) {
            stateObj.meta = meta;
        }
        var stateString = JSON.stringify(stateObj);
        return cryptoObj.base64Encode(stateString);
    };
    /**
     * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
     * @param state
     * @param cryptoObj
     */
    ProtocolUtils.parseRequestState = function (cryptoObj, state) {
        if (!cryptoObj) {
            throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
        }
        if (StringUtils.isEmpty(state)) {
            throw ClientAuthError.createInvalidStateError(state, "Null, undefined or empty state");
        }
        try {
            // Split the state between library state and user passed state and decode them separately
            var splitState = state.split(Constants$1.RESOURCE_DELIM);
            var libraryState = splitState[0];
            var userState = splitState.length > 1 ? splitState.slice(1).join(Constants$1.RESOURCE_DELIM) : Constants$1.EMPTY_STRING;
            var libraryStateString = cryptoObj.base64Decode(libraryState);
            var libraryStateObj = JSON.parse(libraryStateString);
            return {
                userRequestState: !StringUtils.isEmpty(userState) ? userState : Constants$1.EMPTY_STRING,
                libraryState: libraryStateObj
            };
        }
        catch (e) {
            throw ClientAuthError.createInvalidStateError(state, e);
        }
    };
    return ProtocolUtils;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Url object class which can perform various transformations on url strings.
 */
var UrlString = /** @class */ (function () {
    function UrlString(url) {
        this._urlString = url;
        if (StringUtils.isEmpty(this._urlString)) {
            // Throws error if url is empty
            throw ClientConfigurationError.createUrlEmptyError();
        }
        if (StringUtils.isEmpty(this.getHash())) {
            this._urlString = UrlString.canonicalizeUri(url);
        }
    }
    Object.defineProperty(UrlString.prototype, "urlString", {
        get: function () {
            return this._urlString;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Ensure urls are lower case and end with a / character.
     * @param url
     */
    UrlString.canonicalizeUri = function (url) {
        if (url) {
            var lowerCaseUrl = url.toLowerCase();
            if (StringUtils.endsWith(lowerCaseUrl, "?")) {
                lowerCaseUrl = lowerCaseUrl.slice(0, -1);
            }
            else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
                lowerCaseUrl = lowerCaseUrl.slice(0, -2);
            }
            if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
                lowerCaseUrl += "/";
            }
            return lowerCaseUrl;
        }
        return url;
    };
    /**
     * Throws if urlString passed is not a valid authority URI string.
     */
    UrlString.prototype.validateAsUri = function () {
        // Attempts to parse url for uri components
        var components;
        try {
            components = this.getUrlComponents();
        }
        catch (e) {
            throw ClientConfigurationError.createUrlParseError(e);
        }
        // Throw error if URI or path segments are not parseable.
        if (!components.HostNameAndPort || !components.PathSegments) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
        }
        // Throw error if uri is insecure.
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
        }
    };
    /**
     * Given a url and a query string return the url with provided query string appended
     * @param url
     * @param queryString
     */
    UrlString.appendQueryString = function (url, queryString) {
        if (StringUtils.isEmpty(queryString)) {
            return url;
        }
        return url.indexOf("?") < 0 ? url + "?" + queryString : url + "&" + queryString;
    };
    /**
     * Returns a url with the hash removed
     * @param url
     */
    UrlString.removeHashFromUrl = function (url) {
        return UrlString.canonicalizeUri(url.split("#")[0]);
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlString.prototype.replaceTenantPath = function (tenantId) {
        var urlObject = this.getUrlComponents();
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return UrlString.constructAuthorityUriFromObject(urlObject);
    };
    /**
     * Returns the anchor part(#) of the URL
     */
    UrlString.prototype.getHash = function () {
        return UrlString.parseHash(this.urlString);
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlString.prototype.getUrlComponents = function () {
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        // If url string does not match regEx, we throw an error
        var match = this.urlString.match(regEx);
        if (!match) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
        }
        // Url component object
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5],
            QueryString: match[7]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        if (!StringUtils.isEmpty(urlComponents.QueryString) && urlComponents.QueryString.endsWith("/")) {
            urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
        }
        return urlComponents;
    };
    UrlString.getDomainFromUrl = function (url) {
        var regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
        var match = url.match(regEx);
        if (!match) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + url);
        }
        return match[2];
    };
    UrlString.getAbsoluteUrl = function (relativeUrl, baseUrl) {
        if (relativeUrl[0] === Constants$1.FORWARD_SLASH) {
            var url = new UrlString(baseUrl);
            var baseComponents = url.getUrlComponents();
            return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
        }
        return relativeUrl;
    };
    /**
     * Parses hash string from given string. Returns empty string if no hash symbol is found.
     * @param hashString
     */
    UrlString.parseHash = function (hashString) {
        var hashIndex1 = hashString.indexOf("#");
        var hashIndex2 = hashString.indexOf("#/");
        if (hashIndex2 > -1) {
            return hashString.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return hashString.substring(hashIndex1 + 1);
        }
        return Constants$1.EMPTY_STRING;
    };
    /**
     * Parses query string from given string. Returns empty string if no query symbol is found.
     * @param queryString
     */
    UrlString.parseQueryString = function (queryString) {
        var queryIndex1 = queryString.indexOf("?");
        var queryIndex2 = queryString.indexOf("/?");
        if (queryIndex2 > -1) {
            return queryString.substring(queryIndex2 + 2);
        }
        else if (queryIndex1 > -1) {
            return queryString.substring(queryIndex1 + 1);
        }
        return Constants$1.EMPTY_STRING;
    };
    UrlString.constructAuthorityUriFromObject = function (urlObject) {
        return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
    };
    /**
     * Returns URL hash as server auth code response object.
     */
    UrlString.getDeserializedHash = function (hash) {
        // Check if given hash is empty
        if (StringUtils.isEmpty(hash)) {
            return {};
        }
        // Strip the # symbol if present
        var parsedHash = UrlString.parseHash(hash);
        // If # symbol was not present, above will return empty string, so give original hash value
        var deserializedHash = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedHash) ? hash : parsedHash);
        // Check if deserialization didn't work
        if (!deserializedHash) {
            throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
        }
        return deserializedHash;
    };
    /**
     * Returns URL query string as server auth code response object.
     */
    UrlString.getDeserializedQueryString = function (query) {
        // Check if given query is empty
        if (StringUtils.isEmpty(query)) {
            return {};
        }
        // Strip the ? symbol if present
        var parsedQueryString = UrlString.parseQueryString(query);
        // If ? symbol was not present, above will return empty string, so give original query value
        var deserializedQueryString = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedQueryString) ? query : parsedQueryString);
        // Check if deserialization didn't work
        if (!deserializedQueryString) {
            throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedQueryString));
        }
        return deserializedQueryString;
    };
    /**
     * Check if the hash of the URL string contains known properties
     */
    UrlString.hashContainsKnownProperties = function (hash) {
        if (StringUtils.isEmpty(hash) || hash.indexOf("=") < 0) {
            // Hash doesn't contain key/value pairs
            return false;
        }
        var parameters = UrlString.getDeserializedHash(hash);
        return !!(parameters.code ||
            parameters.error_description ||
            parameters.error ||
            parameters.state);
    };
    return UrlString;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var KeyLocation;
(function (KeyLocation) {
    KeyLocation["SW"] = "sw";
    KeyLocation["UHW"] = "uhw";
})(KeyLocation || (KeyLocation = {}));
var PopTokenGenerator = /** @class */ (function () {
    function PopTokenGenerator(cryptoUtils) {
        this.cryptoUtils = cryptoUtils;
    }
    /**
     * Generates the req_cnf validated at the RP in the POP protocol for SHR parameters
     * and returns an object containing the keyid, the full req_cnf string and the req_cnf string hash
     * @param request
     * @returns
     */
    PopTokenGenerator.prototype.generateCnf = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var reqCnf, reqCnfString, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.generateKid(request)];
                    case 1:
                        reqCnf = _b.sent();
                        reqCnfString = this.cryptoUtils.base64Encode(JSON.stringify(reqCnf));
                        _a = {
                            kid: reqCnf.kid,
                            reqCnfString: reqCnfString
                        };
                        return [4 /*yield*/, this.cryptoUtils.hashString(reqCnfString)];
                    case 2: return [2 /*return*/, (_a.reqCnfHash = _b.sent(),
                            _a)];
                }
            });
        });
    };
    /**
     * Generates key_id for a SHR token request
     * @param request
     * @returns
     */
    PopTokenGenerator.prototype.generateKid = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var kidThumbprint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cryptoUtils.getPublicKeyThumbprint(request)];
                    case 1:
                        kidThumbprint = _a.sent();
                        return [2 /*return*/, {
                                kid: kidThumbprint,
                                xms_ksl: KeyLocation.SW
                            }];
                }
            });
        });
    };
    /**
     * Signs the POP access_token with the local generated key-pair
     * @param accessToken
     * @param request
     * @returns
     */
    PopTokenGenerator.prototype.signPopToken = function (accessToken, keyId, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.signPayload(accessToken, keyId, request)];
            });
        });
    };
    /**
     * Utility function to generate the signed JWT for an access_token
     * @param payload
     * @param kid
     * @param request
     * @param claims
     * @returns
     */
    PopTokenGenerator.prototype.signPayload = function (payload, keyId, request, claims) {
        return __awaiter(this, void 0, void 0, function () {
            var resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, resourceUrlString, resourceUrlComponents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resourceRequestMethod = request.resourceRequestMethod, resourceRequestUri = request.resourceRequestUri, shrClaims = request.shrClaims, shrNonce = request.shrNonce;
                        resourceUrlString = (resourceRequestUri) ? new UrlString(resourceRequestUri) : undefined;
                        resourceUrlComponents = resourceUrlString === null || resourceUrlString === void 0 ? void 0 : resourceUrlString.getUrlComponents();
                        return [4 /*yield*/, this.cryptoUtils.signJwt(__assign({ at: payload, ts: TimeUtils.nowSeconds(), m: resourceRequestMethod === null || resourceRequestMethod === void 0 ? void 0 : resourceRequestMethod.toUpperCase(), u: resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.HostNameAndPort, nonce: shrNonce || this.cryptoUtils.createNewGuid(), p: resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.AbsolutePath, q: (resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.QueryString) ? [[], resourceUrlComponents.QueryString] : undefined, client_claims: shrClaims || undefined }, claims), keyId, request.correlationId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PopTokenGenerator;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * APP_METADATA Cache
 *
 * Key:Value Schema:
 *
 * Key: appmetadata-<environment>-<client_id>
 *
 * Value:
 * {
 *      clientId: client ID of the application
 *      environment: entity that issued the token, represented as a full host
 *      familyId: Family ID identifier, '1' represents Microsoft Family
 * }
 */
var AppMetadataEntity = /** @class */ (function () {
    function AppMetadataEntity() {
    }
    /**
     * Generate AppMetadata Cache Key as per the schema: appmetadata-<environment>-<client_id>
     */
    AppMetadataEntity.prototype.generateAppMetadataKey = function () {
        return AppMetadataEntity.generateAppMetadataCacheKey(this.environment, this.clientId);
    };
    /**
     * Generate AppMetadata Cache Key
     */
    AppMetadataEntity.generateAppMetadataCacheKey = function (environment, clientId) {
        var appMetaDataKeyArray = [
            APP_METADATA,
            environment,
            clientId,
        ];
        return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Creates AppMetadataEntity
     * @param clientId
     * @param environment
     * @param familyId
     */
    AppMetadataEntity.createAppMetadataEntity = function (clientId, environment, familyId) {
        var appMetadata = new AppMetadataEntity();
        appMetadata.clientId = clientId;
        appMetadata.environment = environment;
        if (familyId) {
            appMetadata.familyId = familyId;
        }
        return appMetadata;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AppMetadataEntity.isAppMetadataEntity = function (key, entity) {
        if (!entity) {
            return false;
        }
        return (key.indexOf(APP_METADATA) === 0 &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("environment"));
    };
    return AppMetadataEntity;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class instance helps track the memory changes facilitating
 * decisions to read from and write to the persistent cache
 */ var TokenCacheContext = /** @class */ (function () {
    function TokenCacheContext(tokenCache, hasChanged) {
        this.cache = tokenCache;
        this.hasChanged = hasChanged;
    }
    Object.defineProperty(TokenCacheContext.prototype, "cacheHasChanged", {
        /**
         * boolean which indicates the changes in cache
         */
        get: function () {
            return this.hasChanged;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenCacheContext.prototype, "tokenCache", {
        /**
         * function to retrieve the token cache
         */
        get: function () {
            return this.cache;
        },
        enumerable: false,
        configurable: true
    });
    return TokenCacheContext;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class that handles response parsing.
 */
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin) {
        this.clientId = clientId;
        this.cacheStorage = cacheStorage;
        this.cryptoObj = cryptoObj;
        this.logger = logger;
        this.serializableCache = serializableCache;
        this.persistencePlugin = persistencePlugin;
    }
    /**
     * Function which validates server authorization code response.
     * @param serverResponseHash
     * @param cachedState
     * @param cryptoObj
     */
    ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
        if (!serverResponseHash.state || !cachedState) {
            throw !serverResponseHash.state ? ClientAuthError.createStateNotFoundError("Server State") : ClientAuthError.createStateNotFoundError("Cached State");
        }
        if (decodeURIComponent(serverResponseHash.state) !== decodeURIComponent(cachedState)) {
            throw ClientAuthError.createStateMismatchError();
        }
        // Check for error
        if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
            if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
                throw new InteractionRequiredAuthError(serverResponseHash.error || Constants$1.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
            }
            throw new ServerError(serverResponseHash.error || Constants$1.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
        }
        if (serverResponseHash.client_info) {
            buildClientInfo(serverResponseHash.client_info, cryptoObj);
        }
    };
    /**
     * Function which validates server authorization token response.
     * @param serverResponse
     */
    ResponseHandler.prototype.validateTokenResponse = function (serverResponse) {
        // Check for error
        if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
            if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
                throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
            }
            var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
            throw new ServerError(serverResponse.error, errString, serverResponse.suberror);
        }
    };
    /**
     * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
     * @param serverTokenResponse
     * @param authority
     */
    ResponseHandler.prototype.handleServerTokenResponse = function (serverTokenResponse, authority, reqTimestamp, request, authCodePayload, userAssertionHash, handlingRefreshTokenResponse, forceCacheRefreshTokenResponse, serverRequestId) {
        return __awaiter(this, void 0, void 0, function () {
            var idTokenObj, authTime, requestStateObj, cacheRecord, cacheContext, key, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (serverTokenResponse.id_token) {
                            idTokenObj = new AuthToken(serverTokenResponse.id_token || Constants$1.EMPTY_STRING, this.cryptoObj);
                            // token nonce check (TODO: Add a warning if no nonce is given?)
                            if (authCodePayload && !StringUtils.isEmpty(authCodePayload.nonce)) {
                                if (idTokenObj.claims.nonce !== authCodePayload.nonce) {
                                    throw ClientAuthError.createNonceMismatchError();
                                }
                            }
                            // token max_age check
                            if (request.maxAge || (request.maxAge === 0)) {
                                authTime = idTokenObj.claims.auth_time;
                                if (!authTime) {
                                    throw ClientAuthError.createAuthTimeNotFoundError();
                                }
                                AuthToken.checkMaxAge(authTime, request.maxAge);
                            }
                        }
                        // generate homeAccountId
                        this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants$1.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenObj);
                        if (!!authCodePayload && !!authCodePayload.state) {
                            requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
                        }
                        // Add keyId from request to serverTokenResponse if defined
                        serverTokenResponse.key_id = serverTokenResponse.key_id || request.sshKid || undefined;
                        cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenObj, userAssertionHash, authCodePayload);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 5, 8]);
                        if (!(this.persistencePlugin && this.serializableCache)) return [3 /*break*/, 3];
                        this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
                        cacheContext = new TokenCacheContext(this.serializableCache, true);
                        return [4 /*yield*/, this.persistencePlugin.beforeCacheAccess(cacheContext)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        /*
                         * When saving a refreshed tokens to the cache, it is expected that the account that was used is present in the cache.
                         * If not present, we should return null, as it's the case that another application called removeAccount in between
                         * the calls to getAllAccounts and acquireTokenSilent. We should not overwrite that removal, unless explicitly flagged by
                         * the developer, as in the case of refresh token flow used in ADAL Node to MSAL Node migration.
                         */
                        if (handlingRefreshTokenResponse && !forceCacheRefreshTokenResponse && cacheRecord.account) {
                            key = cacheRecord.account.generateAccountKey();
                            account = this.cacheStorage.getAccount(key);
                            if (!account) {
                                this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                                return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenObj, requestStateObj, undefined, serverRequestId)];
                            }
                        }
                        return [4 /*yield*/, this.cacheStorage.saveCacheRecord(cacheRecord)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        if (!(this.persistencePlugin && this.serializableCache && cacheContext)) return [3 /*break*/, 7];
                        this.logger.verbose("Persistence enabled, calling afterCacheAccess");
                        return [4 /*yield*/, this.persistencePlugin.afterCacheAccess(cacheContext)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenObj, requestStateObj, serverTokenResponse.spa_code, serverRequestId)];
                }
            });
        });
    };
    /**
     * Generates CacheRecord
     * @param serverTokenResponse
     * @param idTokenObj
     * @param authority
     */
    ResponseHandler.prototype.generateCacheRecord = function (serverTokenResponse, authority, reqTimestamp, request, idTokenObj, userAssertionHash, authCodePayload) {
        var env = authority.getPreferredCache();
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        // IdToken: non AAD scenarios can have empty realm
        var cachedIdToken;
        var cachedAccount;
        if (!StringUtils.isEmpty(serverTokenResponse.id_token) && !!idTokenObj) {
            cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token || Constants$1.EMPTY_STRING, this.clientId, idTokenObj.claims.tid || Constants$1.EMPTY_STRING);
            cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority, authCodePayload);
        }
        // AccessToken
        var cachedAccessToken = null;
        if (!StringUtils.isEmpty(serverTokenResponse.access_token)) {
            // If scopes not returned in server response, use request scopes
            var responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(request.scopes || []);
            /*
             * Use timestamp calculated before request
             * Server may return timestamps as strings, parse to numbers if so.
             */
            var expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
            var extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
            var refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || undefined;
            var tokenExpirationSeconds = reqTimestamp + expiresIn;
            var extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
            var refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : undefined;
            // non AAD scenarios can have empty realm
            cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token || Constants$1.EMPTY_STRING, this.clientId, idTokenObj ? idTokenObj.claims.tid || Constants$1.EMPTY_STRING : authority.tenant, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id, request.claims, request.requestedClaimsHash);
        }
        // refreshToken
        var cachedRefreshToken = null;
        if (!StringUtils.isEmpty(serverTokenResponse.refresh_token)) {
            cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token || Constants$1.EMPTY_STRING, this.clientId, serverTokenResponse.foci, userAssertionHash);
        }
        // appMetadata
        var cachedAppMetadata = null;
        if (!StringUtils.isEmpty(serverTokenResponse.foci)) {
            cachedAppMetadata = AppMetadataEntity.createAppMetadataEntity(this.clientId, env, serverTokenResponse.foci);
        }
        return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
    };
    /**
     * Generate Account
     * @param serverTokenResponse
     * @param idToken
     * @param authority
     */
    ResponseHandler.prototype.generateAccountEntity = function (serverTokenResponse, idToken, authority, authCodePayload) {
        var authorityType = authority.authorityType;
        var cloudGraphHostName = authCodePayload ? authCodePayload.cloud_graph_host_name : Constants$1.EMPTY_STRING;
        var msGraphhost = authCodePayload ? authCodePayload.msgraph_host : Constants$1.EMPTY_STRING;
        // ADFS does not require client_info in the response
        if (authorityType === AuthorityType.Adfs) {
            this.logger.verbose("Authority type is ADFS, creating ADFS account");
            return AccountEntity.createGenericAccount(this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost);
        }
        // This fallback applies to B2C as well as they fall under an AAD account type.
        if (StringUtils.isEmpty(serverTokenResponse.client_info) && authority.protocolMode === "AAD") {
            throw ClientAuthError.createClientInfoEmptyError();
        }
        return serverTokenResponse.client_info ?
            AccountEntity.createAccount(serverTokenResponse.client_info, this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost) :
            AccountEntity.createGenericAccount(this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost);
    };
    /**
     * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
     *
     * Optionally takes a state string that is set as-is in the response.
     *
     * @param cacheRecord
     * @param idTokenObj
     * @param fromTokenCache
     * @param stateString
     */
    ResponseHandler.generateAuthenticationResult = function (cryptoObj, authority, cacheRecord, fromTokenCache, request, idTokenObj, requestState, code, requestId) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var accessToken, responseScopes, expiresOn, extExpiresOn, familyId, popTokenGenerator, _d, secret, keyId, uid, tid;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        accessToken = Constants$1.EMPTY_STRING;
                        responseScopes = [];
                        expiresOn = null;
                        familyId = Constants$1.EMPTY_STRING;
                        if (!cacheRecord.accessToken) return [3 /*break*/, 4];
                        if (!(cacheRecord.accessToken.tokenType === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(cryptoObj);
                        _d = cacheRecord.accessToken, secret = _d.secret, keyId = _d.keyId;
                        if (!keyId) {
                            throw ClientAuthError.createKeyIdMissingError();
                        }
                        return [4 /*yield*/, popTokenGenerator.signPopToken(secret, keyId, request)];
                    case 1:
                        accessToken = _e.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        accessToken = cacheRecord.accessToken.secret;
                        _e.label = 3;
                    case 3:
                        responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
                        expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1000);
                        extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000);
                        _e.label = 4;
                    case 4:
                        if (cacheRecord.appMetadata) {
                            familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : Constants$1.EMPTY_STRING;
                        }
                        uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants$1.EMPTY_STRING;
                        tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants$1.EMPTY_STRING;
                        return [2 /*return*/, {
                                authority: authority.canonicalAuthority,
                                uniqueId: uid,
                                tenantId: tid,
                                scopes: responseScopes,
                                account: cacheRecord.account ? cacheRecord.account.getAccountInfo() : null,
                                idToken: idTokenObj ? idTokenObj.rawToken : Constants$1.EMPTY_STRING,
                                idTokenClaims: idTokenObj ? idTokenObj.claims : {},
                                accessToken: accessToken,
                                fromCache: fromTokenCache,
                                expiresOn: expiresOn,
                                correlationId: request.correlationId,
                                requestId: requestId || Constants$1.EMPTY_STRING,
                                extExpiresOn: extExpiresOn,
                                familyId: familyId,
                                tokenType: ((_a = cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants$1.EMPTY_STRING,
                                state: requestState ? requestState.userRequestState : Constants$1.EMPTY_STRING,
                                cloudGraphHostName: ((_b = cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants$1.EMPTY_STRING,
                                msGraphHost: ((_c = cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants$1.EMPTY_STRING,
                                code: code,
                                fromNativeBroker: false
                            }];
                }
            });
        });
    };
    return ResponseHandler;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Oauth2.0 Authorization Code client
 */
var AuthorizationCodeClient = /** @class */ (function (_super) {
    __extends(AuthorizationCodeClient, _super);
    function AuthorizationCodeClient(configuration) {
        var _this = _super.call(this, configuration) || this;
        // Flag to indicate if client is for hybrid spa auth code redemption
        _this.includeRedirectUri = true;
        return _this;
    }
    /**
     * Creates the URL of the authorization request letting the user input credentials and consent to the
     * application. The URL target the /authorize endpoint of the authority configured in the
     * application object.
     *
     * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
     * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
     * acquireToken(AuthorizationCodeRequest)
     * @param request
     */
    AuthorizationCodeClient.prototype.getAuthCodeUrl = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createAuthCodeUrlQueryString(request)];
                    case 1:
                        queryString = _a.sent();
                        return [2 /*return*/, UrlString.appendQueryString(this.authority.authorizationEndpoint, queryString)];
                }
            });
        });
    };
    /**
     * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
     * authorization_code_grant
     * @param request
     */
    AuthorizationCodeClient.prototype.acquireToken = function (request, authCodePayload) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var reqTimestamp, response, requestId, responseHandler;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.logger.info("in acquireToken call");
                        if (!request || StringUtils.isEmpty(request.code)) {
                            throw ClientAuthError.createTokenRequestCannotBeMadeError();
                        }
                        reqTimestamp = TimeUtils.nowSeconds();
                        return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                    case 1:
                        response = _b.sent();
                        requestId = (_a = response.headers) === null || _a === void 0 ? void 0 : _a[HeaderNames.X_MS_REQUEST_ID];
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response.body);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, authCodePayload, undefined, undefined, undefined, requestId)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * Handles the hash fragment response from public client code request. Returns a code response used by
     * the client to exchange for a token in acquireToken.
     * @param hashFragment
     */
    AuthorizationCodeClient.prototype.handleFragmentResponse = function (hashFragment, cachedState) {
        // Handle responses.
        var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
        // Deserialize hash fragment response parameters.
        var hashUrlString = new UrlString(hashFragment);
        // Deserialize hash fragment response parameters.
        var serverParams = UrlString.getDeserializedHash(hashUrlString.getHash());
        // Get code response
        responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
        // throw when there is no auth code in the response
        if (!serverParams.code) {
            throw ClientAuthError.createNoAuthCodeInServerResponseError();
        }
        return __assign(__assign({}, serverParams), { 
            // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
            code: serverParams.code });
    };
    /**
     * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param authorityUri
     */
    AuthorizationCodeClient.prototype.getLogoutUri = function (logoutRequest) {
        // Throw error if logoutRequest is null/undefined
        if (!logoutRequest) {
            throw ClientConfigurationError.createEmptyLogoutRequestError();
        }
        var queryString = this.createLogoutUrlQueryString(logoutRequest);
        // Construct logout URI
        return UrlString.appendQueryString(this.authority.endSessionEndpoint, queryString);
    };
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    AuthorizationCodeClient.prototype.executeTokenRequest = function (authority, request) {
        return __awaiter(this, void 0, void 0, function () {
            var thumbprint, requestBody, queryParameters, ccsCredential, clientInfo, headers, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: authority.canonicalAuthority,
                            scopes: request.scopes,
                            claims: request.claims,
                            authenticationScheme: request.authenticationScheme,
                            resourceRequestMethod: request.resourceRequestMethod,
                            resourceRequestUri: request.resourceRequestUri,
                            shrClaims: request.shrClaims,
                            sshKid: request.sshKid
                        };
                        return [4 /*yield*/, this.createTokenRequestBody(request)];
                    case 1:
                        requestBody = _a.sent();
                        queryParameters = this.createTokenQueryParameters(request);
                        ccsCredential = undefined;
                        if (request.clientInfo) {
                            try {
                                clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils);
                                ccsCredential = {
                                    credential: "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid,
                                    type: CcsCredentialType.HOME_ACCOUNT_ID
                                };
                            }
                            catch (e) {
                                this.logger.verbose("Could not parse client info for CCS Header: " + e);
                            }
                        }
                        headers = this.createTokenRequestHeaders(ccsCredential || request.ccsCredential);
                        endpoint = StringUtils.isEmpty(queryParameters) ? authority.tokenEndpoint : authority.tokenEndpoint + "?" + queryParameters;
                        return [2 /*return*/, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
                }
            });
        });
    };
    /**
     * Creates query string for the /token request
     * @param request
     */
    AuthorizationCodeClient.prototype.createTokenQueryParameters = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        if (request.tokenQueryParameters) {
            parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
        }
        return parameterBuilder.createQueryString();
    };
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    AuthorizationCodeClient.prototype.createTokenRequestBody = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var parameterBuilder, clientAssertion, popTokenGenerator, reqCnfData, correlationId, ccsCred, clientInfo, clientInfo;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        parameterBuilder = new RequestParameterBuilder();
                        parameterBuilder.addClientId(this.config.authOptions.clientId);
                        /*
                         * For hybrid spa flow, there will be a code but no verifier
                         * In this scenario, don't include redirect uri as auth code will not be bound to redirect URI
                         */
                        if (!this.includeRedirectUri) {
                            // Just validate
                            RequestValidator.validateRedirectUri(request.redirectUri);
                        }
                        else {
                            // Validate and include redirect uri
                            parameterBuilder.addRedirectUri(request.redirectUri);
                        }
                        // Add scope array, parameter builder will add default scopes and dedupe
                        parameterBuilder.addScopes(request.scopes);
                        // add code: user set, not validated
                        parameterBuilder.addAuthorizationCode(request.code);
                        // Add library metadata
                        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
                        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
                        parameterBuilder.addThrottling();
                        if (this.serverTelemetryManager) {
                            parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
                        }
                        // add code_verifier if passed
                        if (request.codeVerifier) {
                            parameterBuilder.addCodeVerifier(request.codeVerifier);
                        }
                        if (this.config.clientCredentials.clientSecret) {
                            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                        }
                        if (this.config.clientCredentials.clientAssertion) {
                            clientAssertion = this.config.clientCredentials.clientAssertion;
                            parameterBuilder.addClientAssertion(clientAssertion.assertion);
                            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                        }
                        parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
                        parameterBuilder.addClientInfo();
                        if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                        return [4 /*yield*/, popTokenGenerator.generateCnf(request)];
                    case 1:
                        reqCnfData = _b.sent();
                        // SPA PoP requires full Base64Url encoded req_cnf string (unhashed)
                        parameterBuilder.addPopToken(reqCnfData.reqCnfString);
                        return [3 /*break*/, 3];
                    case 2:
                        if (request.authenticationScheme === AuthenticationScheme.SSH) {
                            if (request.sshJwk) {
                                parameterBuilder.addSshJwk(request.sshJwk);
                            }
                            else {
                                throw ClientConfigurationError.createMissingSshJwkError();
                            }
                        }
                        _b.label = 3;
                    case 3:
                        correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                        parameterBuilder.addCorrelationId(correlationId);
                        if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                        }
                        ccsCred = undefined;
                        if (request.clientInfo) {
                            try {
                                clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils);
                                ccsCred = {
                                    credential: "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid,
                                    type: CcsCredentialType.HOME_ACCOUNT_ID
                                };
                            }
                            catch (e) {
                                this.logger.verbose("Could not parse client info for CCS Header: " + e);
                            }
                        }
                        else {
                            ccsCred = request.ccsCredential;
                        }
                        // Adds these as parameters in the request instead of headers to prevent CORS preflight request
                        if (this.config.systemOptions.preventCorsPreflight && ccsCred) {
                            switch (ccsCred.type) {
                                case CcsCredentialType.HOME_ACCOUNT_ID:
                                    try {
                                        clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
                                        parameterBuilder.addCcsOid(clientInfo);
                                    }
                                    catch (e) {
                                        this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                                    }
                                    break;
                                case CcsCredentialType.UPN:
                                    parameterBuilder.addCcsUpn(ccsCred.credential);
                                    break;
                            }
                        }
                        if (request.tokenBodyParameters) {
                            parameterBuilder.addExtraQueryParameters(request.tokenBodyParameters);
                        }
                        // Add hybrid spa parameters if not already provided
                        if (request.enableSpaAuthorizationCode && (!request.tokenBodyParameters || !request.tokenBodyParameters[AADServerParamKeys.RETURN_SPA_CODE])) {
                            parameterBuilder.addExtraQueryParameters((_a = {},
                                _a[AADServerParamKeys.RETURN_SPA_CODE] = "1",
                                _a));
                        }
                        return [2 /*return*/, parameterBuilder.createQueryString()];
                }
            });
        });
    };
    /**
     * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
     * @param request
     */
    AuthorizationCodeClient.prototype.createAuthCodeUrlQueryString = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var parameterBuilder, requestScopes, correlationId, accountSid, accountLoginHintClaim, clientInfo, clientInfo, clientInfo, popTokenGenerator, reqCnfData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parameterBuilder = new RequestParameterBuilder();
                        parameterBuilder.addClientId(this.config.authOptions.clientId);
                        requestScopes = __spreadArrays(request.scopes || [], request.extraScopesToConsent || []);
                        parameterBuilder.addScopes(requestScopes);
                        // validate the redirectUri (to be a non null value)
                        parameterBuilder.addRedirectUri(request.redirectUri);
                        correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                        parameterBuilder.addCorrelationId(correlationId);
                        // add response_mode. If not passed in it defaults to query.
                        parameterBuilder.addResponseMode(request.responseMode);
                        // add response_type = code
                        parameterBuilder.addResponseTypeCode();
                        // add library info parameters
                        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
                        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
                        // add client_info=1
                        parameterBuilder.addClientInfo();
                        if (request.codeChallenge && request.codeChallengeMethod) {
                            parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
                        }
                        if (request.prompt) {
                            parameterBuilder.addPrompt(request.prompt);
                        }
                        if (request.domainHint) {
                            parameterBuilder.addDomainHint(request.domainHint);
                        }
                        // Add sid or loginHint with preference for login_hint claim (in request) -> sid -> loginHint (upn/email) -> username of AccountInfo object
                        if (request.prompt !== PromptValue.SELECT_ACCOUNT) {
                            // AAD will throw if prompt=select_account is passed with an account hint
                            if (request.sid && request.prompt === PromptValue.NONE) {
                                // SessionID is only used in silent calls
                                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request");
                                parameterBuilder.addSid(request.sid);
                            }
                            else if (request.account) {
                                accountSid = this.extractAccountSid(request.account);
                                accountLoginHintClaim = this.extractLoginHint(request.account);
                                // If login_hint claim is present, use it over sid/username
                                if (accountLoginHintClaim) {
                                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account");
                                    parameterBuilder.addLoginHint(accountLoginHintClaim);
                                    try {
                                        clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                                        parameterBuilder.addCcsOid(clientInfo);
                                    }
                                    catch (e) {
                                        this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                                    }
                                }
                                else if (accountSid && request.prompt === PromptValue.NONE) {
                                    /*
                                     * If account and loginHint are provided, we will check account first for sid before adding loginHint
                                     * SessionId is only used in silent calls
                                     */
                                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account");
                                    parameterBuilder.addSid(accountSid);
                                    try {
                                        clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                                        parameterBuilder.addCcsOid(clientInfo);
                                    }
                                    catch (e) {
                                        this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                                    }
                                }
                                else if (request.loginHint) {
                                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request");
                                    parameterBuilder.addLoginHint(request.loginHint);
                                    parameterBuilder.addCcsUpn(request.loginHint);
                                }
                                else if (request.account.username) {
                                    // Fallback to account username if provided
                                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account");
                                    parameterBuilder.addLoginHint(request.account.username);
                                    try {
                                        clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                                        parameterBuilder.addCcsOid(clientInfo);
                                    }
                                    catch (e) {
                                        this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                                    }
                                }
                            }
                            else if (request.loginHint) {
                                this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request");
                                parameterBuilder.addLoginHint(request.loginHint);
                                parameterBuilder.addCcsUpn(request.loginHint);
                            }
                        }
                        else {
                            this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
                        }
                        if (request.nonce) {
                            parameterBuilder.addNonce(request.nonce);
                        }
                        if (request.state) {
                            parameterBuilder.addState(request.state);
                        }
                        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                        }
                        if (request.extraQueryParameters) {
                            parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
                        }
                        if (!request.nativeBroker) return [3 /*break*/, 2];
                        // signal ests that this is a WAM call
                        parameterBuilder.addNativeBroker();
                        if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                        return [4 /*yield*/, popTokenGenerator.generateCnf(request)];
                    case 1:
                        reqCnfData = _a.sent();
                        parameterBuilder.addPopToken(reqCnfData.reqCnfHash);
                        _a.label = 2;
                    case 2: return [2 /*return*/, parameterBuilder.createQueryString()];
                }
            });
        });
    };
    /**
     * This API validates the `EndSessionRequest` and creates a URL
     * @param request
     */
    AuthorizationCodeClient.prototype.createLogoutUrlQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        if (request.postLogoutRedirectUri) {
            parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
        }
        if (request.correlationId) {
            parameterBuilder.addCorrelationId(request.correlationId);
        }
        if (request.idTokenHint) {
            parameterBuilder.addIdTokenHint(request.idTokenHint);
        }
        if (request.state) {
            parameterBuilder.addState(request.state);
        }
        if (request.logoutHint) {
            parameterBuilder.addLogoutHint(request.logoutHint);
        }
        if (request.extraQueryParameters) {
            parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
        }
        return parameterBuilder.createQueryString();
    };
    /**
     * Helper to get sid from account. Returns null if idTokenClaims are not present or sid is not present.
     * @param account
     */
    AuthorizationCodeClient.prototype.extractAccountSid = function (account) {
        var _a;
        return ((_a = account.idTokenClaims) === null || _a === void 0 ? void 0 : _a.sid) || null;
    };
    AuthorizationCodeClient.prototype.extractLoginHint = function (account) {
        var _a;
        return ((_a = account.idTokenClaims) === null || _a === void 0 ? void 0 : _a.login_hint) || null;
    };
    return AuthorizationCodeClient;
}(BaseClient));

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Enumeration of operations that are instrumented by have their performance measured by the PerformanceClient.
 *
 * @export
 * @enum {number}
 */
var PerformanceEvents;
(function (PerformanceEvents) {
    /**
     * acquireTokenByCode API (msal-browser and msal-node).
     * Used to acquire tokens by trading an authorization code against the token endpoint.
     */
    PerformanceEvents["AcquireTokenByCode"] = "acquireTokenByCode";
    /**
     * acquireTokenByRefreshToken API (msal-browser and msal-node).
     * Used to renew an access token using a refresh token against the token endpoint.
     */
    PerformanceEvents["AcquireTokenByRefreshToken"] = "acquireTokenByRefreshToken";
    /**
     * acquireTokenSilent API (msal-browser and msal-node).
     * Used to silently acquire a new access token (from the cache or the network).
     */
    PerformanceEvents["AcquireTokenSilent"] = "acquireTokenSilent";
    /**
     * acquireTokenSilentAsync (msal-browser).
     * Internal API for acquireTokenSilent.
     */
    PerformanceEvents["AcquireTokenSilentAsync"] = "acquireTokenSilentAsync";
    /**
     * acquireTokenPopup (msal-browser).
     * Used to acquire a new access token interactively through pop ups
     */
    PerformanceEvents["AcquireTokenPopup"] = "acquireTokenPopup";
    /**
     * getPublicKeyThumbprint API in CryptoOpts class (msal-browser).
     * Used to generate a public/private keypair and generate a public key thumbprint for pop requests.
     */
    PerformanceEvents["CryptoOptsGetPublicKeyThumbprint"] = "cryptoOptsGetPublicKeyThumbprint";
    /**
     * signJwt API in CryptoOpts class (msal-browser).
     * Used to signed a pop token.
     */
    PerformanceEvents["CryptoOptsSignJwt"] = "cryptoOptsSignJwt";
    /**
     * acquireToken API in the SilentCacheClient class (msal-browser).
     * Used to read access tokens from the cache.
     */
    PerformanceEvents["SilentCacheClientAcquireToken"] = "silentCacheClientAcquireToken";
    /**
     * acquireToken API in the SilentIframeClient class (msal-browser).
     * Used to acquire a new set of tokens from the authorize endpoint in a hidden iframe.
     */
    PerformanceEvents["SilentIframeClientAcquireToken"] = "silentIframeClientAcquireToken";
    /**
     * acquireToken API in SilentRereshClient (msal-browser).
     * Used to acquire a new set of tokens from the token endpoint using a refresh token.
     */
    PerformanceEvents["SilentRefreshClientAcquireToken"] = "silentRefreshClientAcquireToken";
    /**
     * ssoSilent API (msal-browser).
     * Used to silently acquire an authorization code and set of tokens using a hidden iframe.
     */
    PerformanceEvents["SsoSilent"] = "ssoSilent";
    /**
     * getDiscoveredAuthority API in StandardInteractionClient class (msal-browser).
     * Used to load authority metadata for a request.
     */
    PerformanceEvents["StandardInteractionClientGetDiscoveredAuthority"] = "standardInteractionClientGetDiscoveredAuthority";
    /**
     * acquireToken APIs in msal-browser.
     * Used to make an /authorize endpoint call with native brokering enabled.
     */
    PerformanceEvents["FetchAccountIdWithNativeBroker"] = "fetchAccountIdWithNativeBroker";
    /**
     * acquireToken API in NativeInteractionClient class (msal-browser).
     * Used to acquire a token from Native component when native brokering is enabled.
     */
    PerformanceEvents["NativeInteractionClientAcquireToken"] = "nativeInteractionClientAcquireToken";
    /**
     * Time spent creating default headers for requests to token endpoint
     */
    PerformanceEvents["BaseClientCreateTokenRequestHeaders"] = "baseClientCreateTokenRequestHeaders";
    /**
     * Used to measure the time taken for completing embedded-broker handshake (PW-Broker).
     */
    PerformanceEvents["BrokerHandhshake"] = "brokerHandshake";
    /**
     * acquireTokenByRefreshToken API in BrokerClientApplication (PW-Broker) .
     */
    PerformanceEvents["AcquireTokenByRefreshTokenInBroker"] = "acquireTokenByRefreshTokenInBroker";
    /**
     * Time taken for token acquisition by broker
     */
    PerformanceEvents["AcquireTokenByBroker"] = "acquireTokenByBroker";
    /**
     * Time spent on the network for refresh token acquisition
     */
    PerformanceEvents["RefreshTokenClientExecuteTokenRequest"] = "refreshTokenClientExecuteTokenRequest";
    /**
     * Time taken for acquiring refresh token , records RT size
     */
    PerformanceEvents["RefreshTokenClientAcquireToken"] = "refreshTokenClientAcquireToken";
    /**
     * Time taken for acquiring cached refresh token
     */
    PerformanceEvents["RefreshTokenClientAcquireTokenWithCachedRefreshToken"] = "refreshTokenClientAcquireTokenWithCachedRefreshToken";
})(PerformanceEvents || (PerformanceEvents = {}));
/**
 * State of the performance event.
 *
 * @export
 * @enum {number}
 */
var PerformanceEventStatus;
(function (PerformanceEventStatus) {
    PerformanceEventStatus[PerformanceEventStatus["NotStarted"] = 0] = "NotStarted";
    PerformanceEventStatus[PerformanceEventStatus["InProgress"] = 1] = "InProgress";
    PerformanceEventStatus[PerformanceEventStatus["Completed"] = 2] = "Completed";
})(PerformanceEventStatus || (PerformanceEventStatus = {}));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 refresh token client
 */
var RefreshTokenClient = /** @class */ (function (_super) {
    __extends(RefreshTokenClient, _super);
    function RefreshTokenClient(configuration, performanceClient) {
        return _super.call(this, configuration, performanceClient) || this;
    }
    RefreshTokenClient.prototype.acquireToken = function (request) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var atsMeasurement, reqTimestamp, response, requestId, responseHandler;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        atsMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.RefreshTokenClientAcquireToken, request.correlationId);
                        this.logger.verbose("RefreshTokenClientAcquireToken called", request.correlationId);
                        reqTimestamp = TimeUtils.nowSeconds();
                        return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1:
                        response = _c.sent();
                        requestId = (_b = response.headers) === null || _b === void 0 ? void 0 : _b[HeaderNames.X_MS_REQUEST_ID];
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(response.body);
                        return [2 /*return*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, undefined, undefined, true, request.forceCache, requestId).then(function (result) {
                                var _a;
                                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                                    success: true,
                                    refreshTokenSize: ((_a = response.body.refresh_token) === null || _a === void 0 ? void 0 : _a.length) || 0
                                });
                                return result;
                            })
                                .catch(function (error) {
                                _this.logger.verbose("Error in fetching refresh token", request.correlationId);
                                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                                    errorCode: error.errorCode,
                                    subErrorCode: error.subError,
                                    success: false,
                                    refreshTokenSize: undefined
                                });
                                throw error;
                            })];
                }
            });
        });
    };
    /**
     * Gets cached refresh token and attaches to request, then calls acquireToken API
     * @param request
     */
    RefreshTokenClient.prototype.acquireTokenByRefreshToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var isFOCI, noFamilyRTInCache, clientMismatchErrorWithFamilyRT;
            return __generator(this, function (_a) {
                // Cannot renew token if no request object is given.
                if (!request) {
                    throw ClientConfigurationError.createEmptyTokenRequestError();
                }
                // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                if (!request.account) {
                    throw ClientAuthError.createNoAccountInSilentRequestError();
                }
                isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment, this.config.authOptions.clientId);
                // if the app is part of the family, retrive a Family refresh token if present and make a refreshTokenRequest
                if (isFOCI) {
                    try {
                        return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, true)];
                    }
                    catch (e) {
                        noFamilyRTInCache = e instanceof InteractionRequiredAuthError && e.errorCode === InteractionRequiredAuthErrorMessage.noTokensFoundError.code;
                        clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === Errors.INVALID_GRANT_ERROR && e.subError === Errors.CLIENT_MISMATCH_ERROR;
                        // if family Refresh Token (FRT) cache acquisition fails or if client_mismatch error is seen with FRT, reattempt with application Refresh Token (ART)
                        if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
                            return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
                            // throw in all other cases
                        }
                        else {
                            throw e;
                        }
                    }
                }
                // fall back to application refresh token acquisition
                return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
            });
        });
    };
    /**
     * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
     * @param request
     */
    RefreshTokenClient.prototype.acquireTokenWithCachedRefreshToken = function (request, foci) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var atsMeasurement, refreshToken, refreshTokenRequest;
            return __generator(this, function (_b) {
                atsMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
                this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", request.correlationId);
                refreshToken = this.cacheManager.readRefreshTokenFromCache(this.config.authOptions.clientId, request.account, foci);
                if (!refreshToken) {
                    atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.discardMeasurement();
                    throw InteractionRequiredAuthError.createNoTokensFoundError();
                }
                // attach cached RT size to the current measurement
                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                    success: true
                });
                refreshTokenRequest = __assign(__assign({}, request), { refreshToken: refreshToken.secret, authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER, ccsCredential: {
                        credential: request.account.homeAccountId,
                        type: CcsCredentialType.HOME_ACCOUNT_ID
                    } });
                return [2 /*return*/, this.acquireToken(refreshTokenRequest)];
            });
        });
    };
    /**
     * Constructs the network message and makes a NW call to the underlying secure token service
     * @param request
     * @param authority
     */
    RefreshTokenClient.prototype.executeTokenRequest = function (request, authority) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var acquireTokenMeasurement, requestBody, queryParameters, headers, thumbprint, endpoint;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        acquireTokenMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.RefreshTokenClientExecuteTokenRequest, request.correlationId);
                        return [4 /*yield*/, this.createTokenRequestBody(request)];
                    case 1:
                        requestBody = _b.sent();
                        queryParameters = this.createTokenQueryParameters(request);
                        headers = this.createTokenRequestHeaders(request.ccsCredential);
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: authority.canonicalAuthority,
                            scopes: request.scopes,
                            claims: request.claims,
                            authenticationScheme: request.authenticationScheme,
                            resourceRequestMethod: request.resourceRequestMethod,
                            resourceRequestUri: request.resourceRequestUri,
                            shrClaims: request.shrClaims,
                            sshKid: request.sshKid
                        };
                        endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParameters);
                        return [2 /*return*/, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)
                                .then(function (result) {
                                acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                                    success: true
                                });
                                return result;
                            })
                                .catch(function (error) {
                                acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                                    success: false
                                });
                                throw error;
                            })];
                }
            });
        });
    };
    /**
     * Creates query string for the /token request
     * @param request
     */
    RefreshTokenClient.prototype.createTokenQueryParameters = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        if (request.tokenQueryParameters) {
            parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
        }
        return parameterBuilder.createQueryString();
    };
    /**
     * Helper function to create the token request body
     * @param request
     */
    RefreshTokenClient.prototype.createTokenRequestBody = function (request) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var correlationId, acquireTokenMeasurement, parameterBuilder, clientAssertion, popTokenGenerator, reqCnfData, clientInfo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        correlationId = request.correlationId;
                        acquireTokenMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.BaseClientCreateTokenRequestHeaders, correlationId);
                        parameterBuilder = new RequestParameterBuilder();
                        parameterBuilder.addClientId(this.config.authOptions.clientId);
                        parameterBuilder.addScopes(request.scopes);
                        parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
                        parameterBuilder.addClientInfo();
                        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
                        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
                        parameterBuilder.addThrottling();
                        if (this.serverTelemetryManager) {
                            parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
                        }
                        parameterBuilder.addCorrelationId(correlationId);
                        parameterBuilder.addRefreshToken(request.refreshToken);
                        if (this.config.clientCredentials.clientSecret) {
                            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                        }
                        if (this.config.clientCredentials.clientAssertion) {
                            clientAssertion = this.config.clientCredentials.clientAssertion;
                            parameterBuilder.addClientAssertion(clientAssertion.assertion);
                            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                        }
                        if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                        return [4 /*yield*/, popTokenGenerator.generateCnf(request)];
                    case 1:
                        reqCnfData = _b.sent();
                        // SPA PoP requires full Base64Url encoded req_cnf string (unhashed)
                        parameterBuilder.addPopToken(reqCnfData.reqCnfString);
                        return [3 /*break*/, 3];
                    case 2:
                        if (request.authenticationScheme === AuthenticationScheme.SSH) {
                            if (request.sshJwk) {
                                parameterBuilder.addSshJwk(request.sshJwk);
                            }
                            else {
                                acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                                    success: false
                                });
                                throw ClientConfigurationError.createMissingSshJwkError();
                            }
                        }
                        _b.label = 3;
                    case 3:
                        if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                        }
                        if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) {
                            switch (request.ccsCredential.type) {
                                case CcsCredentialType.HOME_ACCOUNT_ID:
                                    try {
                                        clientInfo = buildClientInfoFromHomeAccountId(request.ccsCredential.credential);
                                        parameterBuilder.addCcsOid(clientInfo);
                                    }
                                    catch (e) {
                                        this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                                    }
                                    break;
                                case CcsCredentialType.UPN:
                                    parameterBuilder.addCcsUpn(request.ccsCredential.credential);
                                    break;
                            }
                        }
                        acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                            success: true
                        });
                        return [2 /*return*/, parameterBuilder.createQueryString()];
                }
            });
        });
    };
    return RefreshTokenClient;
}(BaseClient));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 client credential grant
 */
var ClientCredentialClient = /** @class */ (function (_super) {
    __extends(ClientCredentialClient, _super);
    function ClientCredentialClient(configuration, appTokenProvider) {
        var _this = _super.call(this, configuration) || this;
        _this.appTokenProvider = appTokenProvider;
        return _this;
    }
    /**
     * Public API to acquire a token with ClientCredential Flow for Confidential clients
     * @param request
     */
    ClientCredentialClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedAuthenticationResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scopeSet = new ScopeSet(request.scopes || []);
                        if (!request.skipCache) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.getCachedAuthenticationResult(request)];
                    case 3:
                        cachedAuthenticationResult = _a.sent();
                        if (!cachedAuthenticationResult) return [3 /*break*/, 4];
                        return [2 /*return*/, cachedAuthenticationResult];
                    case 4: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * looks up cache if the tokens are cached already
     */
    ClientCredentialClient.prototype.getCachedAuthenticationResult = function (request) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var cachedAccessToken;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cachedAccessToken = this.readAccessTokenFromCache();
                        if (!cachedAccessToken) {
                            (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                            return [2 /*return*/, null];
                        }
                        if (TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                            (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                account: null,
                                idToken: null,
                                accessToken: cachedAccessToken,
                                refreshToken: null,
                                appMetadata: null
                            }, true, request)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * Reads access token from the cache
     * TODO: Move this call to cacheManager instead
     */
    ClientCredentialClient.prototype.readAccessTokenFromCache = function () {
        var accessTokenFilter = {
            homeAccountId: Constants$1.EMPTY_STRING,
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: CredentialType.ACCESS_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant,
            target: this.scopeSet.printScopesLowerCase()
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        if (accessTokens.length < 1) {
            return null;
        }
        else if (accessTokens.length > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * Makes a network call to request the token from the service
     * @param request
     * @param authority
     */
    ClientCredentialClient.prototype.executeTokenRequest = function (request, authority) {
        return __awaiter(this, void 0, void 0, function () {
            var serverTokenResponse, reqTimestamp, appTokenPropviderParameters, appTokenProviderResult, requestBody, headers, thumbprint, response, responseHandler, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.appTokenProvider) return [3 /*break*/, 2];
                        this.logger.info("Using appTokenProvider extensibility.");
                        appTokenPropviderParameters = {
                            correlationId: request.correlationId,
                            tenantId: this.config.authOptions.authority.tenant,
                            scopes: request.scopes,
                            claims: request.claims,
                        };
                        reqTimestamp = TimeUtils.nowSeconds();
                        return [4 /*yield*/, this.appTokenProvider(appTokenPropviderParameters)];
                    case 1:
                        appTokenProviderResult = _a.sent();
                        serverTokenResponse = {
                            access_token: appTokenProviderResult.accessToken,
                            expires_in: appTokenProviderResult.expiresInSeconds,
                            refresh_in: appTokenProviderResult.refreshInSeconds,
                            token_type: AuthenticationScheme.BEARER
                        };
                        return [3 /*break*/, 4];
                    case 2:
                        requestBody = this.createTokenRequestBody(request);
                        headers = this.createTokenRequestHeaders();
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: request.authority,
                            scopes: request.scopes,
                            claims: request.claims,
                            authenticationScheme: request.authenticationScheme,
                            resourceRequestMethod: request.resourceRequestMethod,
                            resourceRequestUri: request.resourceRequestUri,
                            shrClaims: request.shrClaims,
                            sshKid: request.sshKid
                        };
                        reqTimestamp = TimeUtils.nowSeconds();
                        return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                    case 3:
                        response = _a.sent();
                        serverTokenResponse = response.body;
                        _a.label = 4;
                    case 4:
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(serverTokenResponse);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(serverTokenResponse, this.authority, reqTimestamp, request)];
                    case 5:
                        tokenResponse = _a.sent();
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * generate the request to the server in the acceptable format
     * @param request
     */
    ClientCredentialClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addScopes(request.scopes, false);
        parameterBuilder.addGrantType(GrantType.CLIENT_CREDENTIALS_GRANT);
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
        parameterBuilder.addThrottling();
        if (this.serverTelemetryManager) {
            parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
        }
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        if (this.config.clientCredentials.clientSecret) {
            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        }
        // Use clientAssertion from request, fallback to client assertion in base configuration
        var clientAssertion = request.clientAssertion || this.config.clientCredentials.clientAssertion;
        if (clientAssertion) {
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return parameterBuilder.createQueryString();
    };
    return ClientCredentialClient;
}(BaseClient));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * On-Behalf-Of client
 */
var OnBehalfOfClient = /** @class */ (function (_super) {
    __extends(OnBehalfOfClient, _super);
    function OnBehalfOfClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Public API to acquire tokens with on behalf of flow
     * @param request
     */
    OnBehalfOfClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.scopeSet = new ScopeSet(request.scopes || []);
                        // generate the user_assertion_hash for OBOAssertion
                        _a = this;
                        return [4 /*yield*/, this.cryptoUtils.hashString(request.oboAssertion)];
                    case 1:
                        // generate the user_assertion_hash for OBOAssertion
                        _a.userAssertionHash = _b.sent();
                        if (!request.skipCache) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.executeTokenRequest(request, this.authority, this.userAssertionHash)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        _b.trys.push([3, 5, , 7]);
                        return [4 /*yield*/, this.getCachedAuthenticationResult(request)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.executeTokenRequest(request, this.authority, this.userAssertionHash)];
                    case 6: 
                    // Any failure falls back to interactive request, once we implement distributed cache, we plan to handle `createRefreshRequiredError` to refresh using the RT
                    return [2 /*return*/, _b.sent()];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * look up cache for tokens
     * Find idtoken in the cache
     * Find accessToken based on user assertion and account info in the cache
     * Please note we are not yet supported OBO tokens refreshed with long lived RT. User will have to send a new assertion if the current access token expires
     * This is to prevent security issues when the assertion changes over time, however, longlived RT helps retaining the session
     * @param request
     */
    OnBehalfOfClient.prototype.getCachedAuthenticationResult = function (request) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var cachedAccessToken, cachedIdToken, idTokenObject, cachedAccount, localAccountId, accountInfo;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cachedAccessToken = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, request);
                        if (!cachedAccessToken) {
                            // Must refresh due to non-existent access_token.
                            (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                            this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.");
                            throw ClientAuthError.createRefreshRequiredError();
                        }
                        else if (TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                            // Access token expired, will need to renewed
                            (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                            this.logger.info("OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds.");
                            throw ClientAuthError.createRefreshRequiredError();
                        }
                        cachedIdToken = this.readIdTokenFromCacheForOBO(request, cachedAccessToken.homeAccountId);
                        cachedAccount = null;
                        if (cachedIdToken) {
                            idTokenObject = new AuthToken(cachedIdToken.secret, this.config.cryptoInterface);
                            localAccountId = idTokenObject.claims.oid ? idTokenObject.claims.oid : idTokenObject.claims.sub;
                            accountInfo = {
                                homeAccountId: cachedIdToken.homeAccountId,
                                environment: cachedIdToken.environment,
                                tenantId: cachedIdToken.realm,
                                username: Constants$1.EMPTY_STRING,
                                localAccountId: localAccountId || Constants$1.EMPTY_STRING
                            };
                            cachedAccount = this.cacheManager.readAccountFromCache(accountInfo);
                        }
                        // increment telemetry cache hit counter
                        if (this.config.serverTelemetryManager) {
                            this.config.serverTelemetryManager.incrementCacheHits();
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                account: cachedAccount,
                                accessToken: cachedAccessToken,
                                idToken: cachedIdToken,
                                refreshToken: null,
                                appMetadata: null
                            }, true, request, idTokenObject)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * read idtoken from cache, this is a specific implementation for OBO as the requirements differ from a generic lookup in the cacheManager
     * Certain use cases of OBO flow do not expect an idToken in the cache/or from the service
     * @param request
     */
    OnBehalfOfClient.prototype.readIdTokenFromCacheForOBO = function (request, atHomeAccountId) {
        var idTokenFilter = {
            homeAccountId: atHomeAccountId,
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: CredentialType.ID_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(idTokenFilter);
        var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
        // When acquiring a token on behalf of an application, there might not be an id token in the cache
        if (idTokens.length < 1) {
            return null;
        }
        return idTokens[0];
    };
    /**
     * Fetches the cached access token based on incoming assertion
     * @param clientId
     * @param request
     * @param userAssertionHash
     */
    OnBehalfOfClient.prototype.readAccessTokenFromCacheForOBO = function (clientId, request) {
        var authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
        /*
         * Distinguish between Bearer and PoP/SSH token cache types
         * Cast to lowercase to handle "bearer" from ADFS
         */
        var credentialType = (authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
        var accessTokenFilter = {
            credentialType: credentialType,
            clientId: clientId,
            target: this.scopeSet.printScopesLowerCase(),
            tokenType: authScheme,
            keyId: request.sshKid,
            requestedClaimsHash: request.requestedClaimsHash,
            userAssertionHash: this.userAssertionHash
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        var numAccessTokens = accessTokens.length;
        if (numAccessTokens < 1) {
            return null;
        }
        else if (numAccessTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * Make a network call to the server requesting credentials
     * @param request
     * @param authority
     */
    OnBehalfOfClient.prototype.executeTokenRequest = function (request, authority, userAssertionHash) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, headers, thumbprint, reqTimestamp, response, responseHandler, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = this.createTokenRequestBody(request);
                        headers = this.createTokenRequestHeaders();
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: request.authority,
                            scopes: request.scopes,
                            claims: request.claims,
                            authenticationScheme: request.authenticationScheme,
                            resourceRequestMethod: request.resourceRequestMethod,
                            resourceRequestUri: request.resourceRequestUri,
                            shrClaims: request.shrClaims,
                            sshKid: request.sshKid
                        };
                        reqTimestamp = TimeUtils.nowSeconds();
                        return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(response.body);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, undefined, userAssertionHash)];
                    case 2:
                        tokenResponse = _a.sent();
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * generate a server request in accepable format
     * @param request
     */
    OnBehalfOfClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addScopes(request.scopes);
        parameterBuilder.addGrantType(GrantType.JWT_BEARER);
        parameterBuilder.addClientInfo();
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
        parameterBuilder.addThrottling();
        if (this.serverTelemetryManager) {
            parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
        }
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        parameterBuilder.addRequestTokenUse(AADServerParamKeys.ON_BEHALF_OF);
        parameterBuilder.addOboAssertion(request.oboAssertion);
        if (this.config.clientCredentials.clientSecret) {
            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        }
        if (this.config.clientCredentials.clientAssertion) {
            var clientAssertion = this.config.clientCredentials.clientAssertion;
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        return parameterBuilder.createQueryString();
    };
    return OnBehalfOfClient;
}(BaseClient));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var SilentFlowClient = /** @class */ (function (_super) {
    __extends(SilentFlowClient, _super);
    function SilentFlowClient(configuration, performanceClient) {
        return _super.call(this, configuration, performanceClient) || this;
    }
    /**
     * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
     * the given token and returns the renewed token
     * @param request
     */
    SilentFlowClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, refreshTokenClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.acquireCachedToken(request)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof ClientAuthError && e_1.errorCode === ClientAuthErrorMessage.tokenRefreshRequired.code) {
                            refreshTokenClient = new RefreshTokenClient(this.config, this.performanceClient);
                            return [2 /*return*/, refreshTokenClient.acquireTokenByRefreshToken(request)];
                        }
                        else {
                            throw e_1;
                        }
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves token from cache or throws an error if it must be refreshed.
     * @param request
     */
    SilentFlowClient.prototype.acquireCachedToken = function (request) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var environment, cacheRecord;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        // Cannot renew token if no request object is given.
                        if (!request) {
                            throw ClientConfigurationError.createEmptyTokenRequestError();
                        }
                        if (request.forceRefresh) {
                            // Must refresh due to present force_refresh flag.
                            (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.FORCE_REFRESH);
                            this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true.");
                            throw ClientAuthError.createRefreshRequiredError();
                        }
                        // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                        if (!request.account) {
                            throw ClientAuthError.createNoAccountInSilentRequestError();
                        }
                        environment = request.authority || this.authority.getPreferredCache();
                        cacheRecord = this.cacheManager.readCacheRecord(request.account, this.config.authOptions.clientId, request, environment);
                        if (!cacheRecord.accessToken) {
                            // Must refresh due to non-existent access_token.
                            (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                            this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.");
                            throw ClientAuthError.createRefreshRequiredError();
                        }
                        else if (TimeUtils.wasClockTurnedBack(cacheRecord.accessToken.cachedAt) ||
                            TimeUtils.isTokenExpired(cacheRecord.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                            // Must refresh due to expired access_token.
                            (_c = this.serverTelemetryManager) === null || _c === void 0 ? void 0 : _c.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                            this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds.");
                            throw ClientAuthError.createRefreshRequiredError();
                        }
                        else if (cacheRecord.accessToken.refreshOn && TimeUtils.isTokenExpired(cacheRecord.accessToken.refreshOn, 0)) {
                            // Must refresh due to the refresh_in value.
                            (_d = this.serverTelemetryManager) === null || _d === void 0 ? void 0 : _d.setCacheOutcome(CacheOutcome.REFRESH_CACHED_ACCESS_TOKEN);
                            this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'.");
                            throw ClientAuthError.createRefreshRequiredError();
                        }
                        if (this.config.serverTelemetryManager) {
                            this.config.serverTelemetryManager.incrementCacheHits();
                        }
                        return [4 /*yield*/, this.generateResultFromCacheRecord(cacheRecord, request)];
                    case 1: return [2 /*return*/, _e.sent()];
                }
            });
        });
    };
    /**
     * Helper function to build response object from the CacheRecord
     * @param cacheRecord
     */
    SilentFlowClient.prototype.generateResultFromCacheRecord = function (cacheRecord, request) {
        return __awaiter(this, void 0, void 0, function () {
            var idTokenObj, authTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (cacheRecord.idToken) {
                            idTokenObj = new AuthToken(cacheRecord.idToken.secret, this.config.cryptoInterface);
                        }
                        // token max_age check
                        if (request.maxAge || (request.maxAge === 0)) {
                            authTime = idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.auth_time;
                            if (!authTime) {
                                throw ClientAuthError.createAuthTimeNotFoundError();
                            }
                            AuthToken.checkMaxAge(authTime, request.maxAge);
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, idTokenObj)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SilentFlowClient;
}(BaseClient));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Oauth2.0 Password grant client
 * Note: We are only supporting public clients for password grant and for purely testing purposes
 */
var UsernamePasswordClient = /** @class */ (function (_super) {
    __extends(UsernamePasswordClient, _super);
    function UsernamePasswordClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * API to acquire a token by passing the username and password to the service in exchage of credentials
     * password_grant
     * @param request
     */
    UsernamePasswordClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var reqTimestamp, response, responseHandler, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.info("in acquireToken call");
                        reqTimestamp = TimeUtils.nowSeconds();
                        return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response.body);
                        tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request);
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    UsernamePasswordClient.prototype.executeTokenRequest = function (authority, request) {
        return __awaiter(this, void 0, void 0, function () {
            var thumbprint, requestBody, headers;
            return __generator(this, function (_a) {
                thumbprint = {
                    clientId: this.config.authOptions.clientId,
                    authority: authority.canonicalAuthority,
                    scopes: request.scopes,
                    claims: request.claims,
                    authenticationScheme: request.authenticationScheme,
                    resourceRequestMethod: request.resourceRequestMethod,
                    resourceRequestUri: request.resourceRequestUri,
                    shrClaims: request.shrClaims,
                    sshKid: request.sshKid
                };
                requestBody = this.createTokenRequestBody(request);
                headers = this.createTokenRequestHeaders({
                    credential: request.username,
                    type: CcsCredentialType.UPN
                });
                return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
            });
        });
    };
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    UsernamePasswordClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addUsername(request.username);
        parameterBuilder.addPassword(request.password);
        parameterBuilder.addScopes(request.scopes);
        parameterBuilder.addResponseTypeForTokenAndIdToken();
        parameterBuilder.addGrantType(GrantType.RESOURCE_OWNER_PASSWORD_GRANT);
        parameterBuilder.addClientInfo();
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
        parameterBuilder.addThrottling();
        if (this.serverTelemetryManager) {
            parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
        }
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        if (this.config.clientCredentials.clientSecret) {
            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        }
        if (this.config.clientCredentials.clientAssertion) {
            var clientAssertion = this.config.clientCredentials.clientAssertion;
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        if (this.config.systemOptions.preventCorsPreflight && request.username) {
            parameterBuilder.addCcsUpn(request.username);
        }
        return parameterBuilder.createQueryString();
    };
    return UsernamePasswordClient;
}(BaseClient));

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function isOpenIdConfigResponse(response) {
    return (response.hasOwnProperty("authorization_endpoint") &&
        response.hasOwnProperty("token_endpoint") &&
        response.hasOwnProperty("issuer") &&
        response.hasOwnProperty("jwks_uri"));
}

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var rawMetdataJSON = { "endpointMetadata": { "https://login.microsoftonline.com/common/": { "token_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.com/common/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.com/common/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.com", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { "token_endpoint": "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", "authorization_endpoint": "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.chinacloudapi.cn/common/kerberos", "tenant_region_scope": null, "cloud_instance_name": "partner.microsoftonline.cn", "cloud_graph_host_name": "graph.chinacloudapi.cn", "msgraph_host": "microsoftgraph.chinacloudapi.cn", "rbac_url": "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { "token_endpoint": "https://login.microsoftonline.us/common/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.us/common/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.us/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.us/common/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.us/common/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.us", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { "token_endpoint": "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.com/consumers/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.com", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { "token_endpoint": "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", "authorization_endpoint": "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.chinacloudapi.cn/consumers/kerberos", "tenant_region_scope": null, "cloud_instance_name": "partner.microsoftonline.cn", "cloud_graph_host_name": "graph.chinacloudapi.cn", "msgraph_host": "microsoftgraph.chinacloudapi.cn", "rbac_url": "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { "token_endpoint": "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.us/consumers/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.us", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { "token_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.com/organizations/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.com", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { "token_endpoint": "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", "authorization_endpoint": "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.chinacloudapi.cn/organizations/kerberos", "tenant_region_scope": null, "cloud_instance_name": "partner.microsoftonline.cn", "cloud_graph_host_name": "graph.chinacloudapi.cn", "msgraph_host": "microsoftgraph.chinacloudapi.cn", "rbac_url": "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { "token_endpoint": "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.us/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.us/organizations/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.us", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pasff.usgovcloudapi.net" } }, "instanceDiscoveryMetadata": { "https://login.microsoftonline.com/common/": { "tenant_discovery_endpoint": "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { "tenant_discovery_endpoint": "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { "tenant_discovery_endpoint": "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { "tenant_discovery_endpoint": "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { "tenant_discovery_endpoint": "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { "tenant_discovery_endpoint": "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { "tenant_discovery_endpoint": "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { "tenant_discovery_endpoint": "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { "tenant_discovery_endpoint": "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] } } };
var EndpointMetadata = rawMetdataJSON.endpointMetadata;
var InstanceDiscoveryMetadata = rawMetdataJSON.instanceDiscoveryMetadata;

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Protocol modes supported by MSAL.
 */
var ProtocolMode;
(function (ProtocolMode) {
    ProtocolMode["AAD"] = "AAD";
    ProtocolMode["OIDC"] = "OIDC";
})(ProtocolMode || (ProtocolMode = {}));

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var AuthorityMetadataEntity = /** @class */ (function () {
    function AuthorityMetadataEntity() {
        this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
    }
    /**
     * Update the entity with new aliases, preferred_cache and preferred_network values
     * @param metadata
     * @param fromNetwork
     */
    AuthorityMetadataEntity.prototype.updateCloudDiscoveryMetadata = function (metadata, fromNetwork) {
        this.aliases = metadata.aliases;
        this.preferred_cache = metadata.preferred_cache;
        this.preferred_network = metadata.preferred_network;
        this.aliasesFromNetwork = fromNetwork;
    };
    /**
     * Update the entity with new endpoints
     * @param metadata
     * @param fromNetwork
     */
    AuthorityMetadataEntity.prototype.updateEndpointMetadata = function (metadata, fromNetwork) {
        this.authorization_endpoint = metadata.authorization_endpoint;
        this.token_endpoint = metadata.token_endpoint;
        this.end_session_endpoint = metadata.end_session_endpoint;
        this.issuer = metadata.issuer;
        this.endpointsFromNetwork = fromNetwork;
        this.jwks_uri = metadata.jwks_uri;
    };
    /**
     * Save the authority that was used to create this cache entry
     * @param authority
     */
    AuthorityMetadataEntity.prototype.updateCanonicalAuthority = function (authority) {
        this.canonical_authority = authority;
    };
    /**
     * Reset the exiresAt value
     */
    AuthorityMetadataEntity.prototype.resetExpiresAt = function () {
        this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
    };
    /**
     * Returns whether or not the data needs to be refreshed
     */
    AuthorityMetadataEntity.prototype.isExpired = function () {
        return this.expiresAt <= TimeUtils.nowSeconds();
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AuthorityMetadataEntity.isAuthorityMetadataEntity = function (key, entity) {
        if (!entity) {
            return false;
        }
        return (key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) === 0 &&
            entity.hasOwnProperty("aliases") &&
            entity.hasOwnProperty("preferred_cache") &&
            entity.hasOwnProperty("preferred_network") &&
            entity.hasOwnProperty("canonical_authority") &&
            entity.hasOwnProperty("authorization_endpoint") &&
            entity.hasOwnProperty("token_endpoint") &&
            entity.hasOwnProperty("issuer") &&
            entity.hasOwnProperty("aliasesFromNetwork") &&
            entity.hasOwnProperty("endpointsFromNetwork") &&
            entity.hasOwnProperty("expiresAt") &&
            entity.hasOwnProperty("jwks_uri"));
    };
    return AuthorityMetadataEntity;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function isCloudInstanceDiscoveryResponse(response) {
    return (response.hasOwnProperty("tenant_discovery_endpoint") &&
        response.hasOwnProperty("metadata"));
}

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var RegionDiscovery = /** @class */ (function () {
    function RegionDiscovery(networkInterface) {
        this.networkInterface = networkInterface;
    }
    /**
     * Detect the region from the application's environment.
     *
     * @returns Promise<string | null>
     */
    RegionDiscovery.prototype.detectRegion = function (environmentRegion, regionDiscoveryMetadata, proxyUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var autodetectedRegionName, options, localIMDSVersionResponse, currentIMDSVersion, currentIMDSVersionResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        autodetectedRegionName = environmentRegion;
                        if (!!autodetectedRegionName) return [3 /*break*/, 8];
                        options = RegionDiscovery.IMDS_OPTIONS;
                        if (proxyUrl) {
                            options.proxyUrl = proxyUrl;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.getRegionFromIMDS(Constants$1.IMDS_VERSION, options)];
                    case 2:
                        localIMDSVersionResponse = _a.sent();
                        if (localIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
                            autodetectedRegionName = localIMDSVersionResponse.body;
                            regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
                        }
                        if (!(localIMDSVersionResponse.status === ResponseCodes.httpBadRequest)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getCurrentVersion(options)];
                    case 3:
                        currentIMDSVersion = _a.sent();
                        if (!currentIMDSVersion) {
                            regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.getRegionFromIMDS(currentIMDSVersion, options)];
                    case 4:
                        currentIMDSVersionResponse = _a.sent();
                        if (currentIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
                            autodetectedRegionName = currentIMDSVersionResponse.body;
                            regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        _a.sent();
                        regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
                        return [2 /*return*/, null];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        regionDiscoveryMetadata.region_source = RegionDiscoverySources.ENVIRONMENT_VARIABLE;
                        _a.label = 9;
                    case 9:
                        // If no region was auto detected from the environment or from the IMDS endpoint, mark the attempt as a FAILED_AUTO_DETECTION
                        if (!autodetectedRegionName) {
                            regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
                        }
                        return [2 /*return*/, autodetectedRegionName || null];
                }
            });
        });
    };
    /**
     * Make the call to the IMDS endpoint
     *
     * @param imdsEndpointUrl
     * @returns Promise<NetworkResponse<string>>
     */
    RegionDiscovery.prototype.getRegionFromIMDS = function (version, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.networkInterface.sendGetRequestAsync(Constants$1.IMDS_ENDPOINT + "?api-version=" + version + "&format=text", options, Constants$1.IMDS_TIMEOUT)];
            });
        });
    };
    /**
     * Get the most recent version of the IMDS endpoint available
     *
     * @returns Promise<string | null>
     */
    RegionDiscovery.prototype.getCurrentVersion = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(Constants$1.IMDS_ENDPOINT + "?format=json", options)];
                    case 1:
                        response = _a.sent();
                        // When IMDS endpoint is called without the api version query param, bad request response comes back with latest version.
                        if (response.status === ResponseCodes.httpBadRequest && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) {
                            return [2 /*return*/, response.body["newest-versions"][0]];
                        }
                        return [2 /*return*/, null];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Options for the IMDS endpoint request
    RegionDiscovery.IMDS_OPTIONS = {
        headers: {
            Metadata: "true",
        },
    };
    return RegionDiscovery;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
 * endpoint. It will store the pertinent config data in this object for use during token calls.
 */
var Authority = /** @class */ (function () {
    function Authority(authority, networkInterface, cacheManager, authorityOptions, proxyUrl) {
        this.canonicalAuthority = authority;
        this._canonicalAuthority.validateAsUri();
        this.networkInterface = networkInterface;
        this.cacheManager = cacheManager;
        this.authorityOptions = authorityOptions;
        this.regionDiscovery = new RegionDiscovery(networkInterface);
        this.regionDiscoveryMetadata = { region_used: undefined, region_source: undefined, region_outcome: undefined };
        this.proxyUrl = proxyUrl || Constants$1.EMPTY_STRING;
    }
    Object.defineProperty(Authority.prototype, "authorityType", {
        // See above for AuthorityType
        get: function () {
            var pathSegments = this.canonicalAuthorityUrlComponents.PathSegments;
            if (pathSegments.length) {
                switch (pathSegments[0].toLowerCase()) {
                    case Constants$1.ADFS:
                        return AuthorityType.Adfs;
                    case Constants$1.DSTS:
                        return AuthorityType.Dsts;
                }
            }
            return AuthorityType.Default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "protocolMode", {
        /**
         * ProtocolMode enum representing the way endpoints are constructed.
         */
        get: function () {
            return this.authorityOptions.protocolMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "options", {
        /**
         * Returns authorityOptions which can be used to reinstantiate a new authority instance
         */
        get: function () {
            return this.authorityOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "canonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this._canonicalAuthority.urlString;
        },
        /**
         * Sets canonical authority.
         */
        set: function (url) {
            this._canonicalAuthority = new UrlString(url);
            this._canonicalAuthority.validateAsUri();
            this._canonicalAuthorityUrlComponents = null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
        /**
         * Get authority components.
         */
        get: function () {
            if (!this._canonicalAuthorityUrlComponents) {
                this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
            }
            return this._canonicalAuthorityUrlComponents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "hostnameAndPort", {
        /**
         * Get hostname and port i.e. login.microsoftonline.com
         */
        get: function () {
            return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "tenant", {
        /**
         * Get tenant for authority.
         */
        get: function () {
            return this.canonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
        /**
         * OAuth /authorize endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                var endpoint = this.replacePath(this.metadata.authorization_endpoint);
                return this.replaceTenant(endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "tokenEndpoint", {
        /**
         * OAuth /token endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                var endpoint = this.replacePath(this.metadata.token_endpoint);
                return this.replaceTenant(endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "deviceCodeEndpoint", {
        get: function () {
            if (this.discoveryComplete()) {
                var endpoint = this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
                return this.replaceTenant(endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
        /**
         * OAuth logout endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                // ROPC policies may not have end_session_endpoint set
                if (!this.metadata.end_session_endpoint) {
                    throw ClientAuthError.createLogoutNotSupportedError();
                }
                var endpoint = this.replacePath(this.metadata.end_session_endpoint);
                return this.replaceTenant(endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
        /**
         * OAuth issuer for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                var endpoint = this.replacePath(this.metadata.issuer);
                return this.replaceTenant(endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "jwksUri", {
        /**
         * Jwks_uri for token signing keys
         */
        get: function () {
            if (this.discoveryComplete()) {
                var endpoint = this.replacePath(this.metadata.jwks_uri);
                return this.replaceTenant(endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Replaces tenant in url path with current tenant. Defaults to common.
     * @param urlString
     */
    Authority.prototype.replaceTenant = function (urlString) {
        return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
    };
    /**
     * Replaces path such as tenant or policy with the current tenant or policy.
     * @param urlString
     */
    Authority.prototype.replacePath = function (urlString) {
        var endpoint = urlString;
        var cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority);
        var cachedAuthorityParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
        var currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
        currentAuthorityParts.forEach(function (currentPart, index) {
            var cachedPart = cachedAuthorityParts[index];
            if (currentPart !== cachedPart) {
                endpoint = endpoint.replace("/" + cachedPart + "/", "/" + currentPart + "/");
            }
        });
        return endpoint;
    };
    Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
        /**
         * The default open id configuration endpoint for any canonical authority.
         */
        get: function () {
            if (this.authorityType === AuthorityType.Adfs ||
                this.authorityType === AuthorityType.Dsts ||
                this.protocolMode === ProtocolMode.OIDC) {
                return this.canonicalAuthority + ".well-known/openid-configuration";
            }
            return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Boolean that returns whethr or not tenant discovery has been completed.
     */
    Authority.prototype.discoveryComplete = function () {
        return !!this.metadata;
    };
    /**
     * Perform endpoint discovery to discover aliases, preferred_cache, preferred_network
     * and the /authorize, /token and logout endpoints.
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var metadataEntity, cloudDiscoverySource, endpointSource, cacheKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
                        if (!metadataEntity) {
                            metadataEntity = new AuthorityMetadataEntity();
                            metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
                        }
                        return [4 /*yield*/, this.updateCloudDiscoveryMetadata(metadataEntity)];
                    case 1:
                        cloudDiscoverySource = _a.sent();
                        this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
                        return [4 /*yield*/, this.updateEndpointMetadata(metadataEntity)];
                    case 2:
                        endpointSource = _a.sent();
                        if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointSource !== AuthorityMetadataSource.CACHE) {
                            // Reset the expiration time unless both values came from a successful cache lookup
                            metadataEntity.resetExpiresAt();
                            metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
                        }
                        cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache);
                        this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity);
                        this.metadata = metadataEntity;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Update AuthorityMetadataEntity with new endpoints and return where the information came from
     * @param metadataEntity
     */
    Authority.prototype.updateEndpointMetadata = function (metadataEntity) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var metadata, harcodedMetadata;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        metadata = this.getEndpointMetadataFromConfig();
                        if (metadata) {
                            metadataEntity.updateEndpointMetadata(metadata, false);
                            return [2 /*return*/, AuthorityMetadataSource.CONFIG];
                        }
                        if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntity.isExpired()) {
                            // No need to update
                            return [2 /*return*/, AuthorityMetadataSource.CACHE];
                        }
                        harcodedMetadata = this.getEndpointMetadataFromHardcodedValues();
                        return [4 /*yield*/, this.getEndpointMetadataFromNetwork()];
                    case 1:
                        metadata = _c.sent();
                        if (!metadata) return [3 /*break*/, 4];
                        if (!((_a = this.authorityOptions.azureRegionConfiguration) === null || _a === void 0 ? void 0 : _a.azureRegion)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.updateMetadataWithRegionalInformation(metadata)];
                    case 2:
                        metadata = _c.sent();
                        _c.label = 3;
                    case 3:
                        metadataEntity.updateEndpointMetadata(metadata, true);
                        return [2 /*return*/, AuthorityMetadataSource.NETWORK];
                    case 4:
                        if (!(harcodedMetadata && !this.authorityOptions.skipAuthorityMetadataCache)) return [3 /*break*/, 7];
                        if (!((_b = this.authorityOptions.azureRegionConfiguration) === null || _b === void 0 ? void 0 : _b.azureRegion)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.updateMetadataWithRegionalInformation(harcodedMetadata)];
                    case 5:
                        harcodedMetadata = _c.sent();
                        _c.label = 6;
                    case 6:
                        metadataEntity.updateEndpointMetadata(harcodedMetadata, false);
                        return [2 /*return*/, AuthorityMetadataSource.HARDCODED_VALUES];
                    case 7: throw ClientAuthError.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
                }
            });
        });
    };
    /**
     * Compares the number of url components after the domain to determine if the cached
     * authority metadata can be used for the requested authority. Protects against same domain different
     * authority such as login.microsoftonline.com/tenant and login.microsoftonline.com/tfp/tenant/policy
     * @param metadataEntity
     */
    Authority.prototype.isAuthoritySameType = function (metadataEntity) {
        var cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority);
        var cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
        return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    };
    /**
     * Parse authorityMetadata config option
     */
    Authority.prototype.getEndpointMetadataFromConfig = function () {
        if (this.authorityOptions.authorityMetadata) {
            try {
                return JSON.parse(this.authorityOptions.authorityMetadata);
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidAuthorityMetadataError();
            }
        }
        return null;
    };
    /**
     * Gets OAuth endpoints from the given OpenID configuration endpoint.
     *
     * @param hasHardcodedMetadata boolean
     */
    Authority.prototype.getEndpointMetadataFromNetwork = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {};
                        if (this.proxyUrl) {
                            options.proxyUrl = this.proxyUrl;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.networkInterface.
                                sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, options)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, isOpenIdConfigResponse(response.body) ? response.body : null];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get OAuth endpoints for common authorities.
     */
    Authority.prototype.getEndpointMetadataFromHardcodedValues = function () {
        if (this.canonicalAuthority in EndpointMetadata) {
            return EndpointMetadata[this.canonicalAuthority];
        }
        return null;
    };
    /**
     * Update the retrieved metadata with regional information.
     */
    Authority.prototype.updateMetadataWithRegionalInformation = function (metadata) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var autodetectedRegionName, azureRegion;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.regionDiscovery.detectRegion((_a = this.authorityOptions.azureRegionConfiguration) === null || _a === void 0 ? void 0 : _a.environmentRegion, this.regionDiscoveryMetadata, this.proxyUrl)];
                    case 1:
                        autodetectedRegionName = _f.sent();
                        azureRegion = ((_b = this.authorityOptions.azureRegionConfiguration) === null || _b === void 0 ? void 0 : _b.azureRegion) === Constants$1.AZURE_REGION_AUTO_DISCOVER_FLAG
                            ? autodetectedRegionName
                            : (_c = this.authorityOptions.azureRegionConfiguration) === null || _c === void 0 ? void 0 : _c.azureRegion;
                        if (((_d = this.authorityOptions.azureRegionConfiguration) === null || _d === void 0 ? void 0 : _d.azureRegion) === Constants$1.AZURE_REGION_AUTO_DISCOVER_FLAG) {
                            this.regionDiscoveryMetadata.region_outcome = autodetectedRegionName ?
                                RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_SUCCESSFUL :
                                RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_FAILED;
                        }
                        else {
                            if (autodetectedRegionName) {
                                this.regionDiscoveryMetadata.region_outcome = (((_e = this.authorityOptions.azureRegionConfiguration) === null || _e === void 0 ? void 0 : _e.azureRegion) === autodetectedRegionName) ?
                                    RegionDiscoveryOutcomes.CONFIGURED_MATCHES_DETECTED :
                                    RegionDiscoveryOutcomes.CONFIGURED_NOT_DETECTED;
                            }
                            else {
                                this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.CONFIGURED_NO_AUTO_DETECTION;
                            }
                        }
                        if (azureRegion) {
                            this.regionDiscoveryMetadata.region_used = azureRegion;
                            return [2 /*return*/, Authority.replaceWithRegionalInformation(metadata, azureRegion)];
                        }
                        return [2 /*return*/, metadata];
                }
            });
        });
    };
    /**
     * Updates the AuthorityMetadataEntity with new aliases, preferred_network and preferred_cache
     * and returns where the information was retrieved from
     * @param cachedMetadata
     * @param newMetadata
     */
    Authority.prototype.updateCloudDiscoveryMetadata = function (metadataEntity) {
        return __awaiter(this, void 0, void 0, function () {
            var metadata, harcodedMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = this.getCloudDiscoveryMetadataFromConfig();
                        if (metadata) {
                            metadataEntity.updateCloudDiscoveryMetadata(metadata, false);
                            return [2 /*return*/, AuthorityMetadataSource.CONFIG];
                        }
                        // If The cached metadata came from config but that config was not passed to this instance, we must go to the network
                        if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntity.isExpired()) {
                            // No need to update
                            return [2 /*return*/, AuthorityMetadataSource.CACHE];
                        }
                        harcodedMetadata = this.getCloudDiscoveryMetadataFromHarcodedValues();
                        return [4 /*yield*/, this.getCloudDiscoveryMetadataFromNetwork()];
                    case 1:
                        metadata = _a.sent();
                        if (metadata) {
                            metadataEntity.updateCloudDiscoveryMetadata(metadata, true);
                            return [2 /*return*/, AuthorityMetadataSource.NETWORK];
                        }
                        if (harcodedMetadata && !this.options.skipAuthorityMetadataCache) {
                            metadataEntity.updateCloudDiscoveryMetadata(harcodedMetadata, false);
                            return [2 /*return*/, AuthorityMetadataSource.HARDCODED_VALUES];
                        }
                        else {
                            // Metadata could not be obtained from config, cache or network
                            throw ClientConfigurationError.createUntrustedAuthorityError();
                        }
                }
            });
        });
    };
    /**
     * Parse cloudDiscoveryMetadata config or check knownAuthorities
     */
    Authority.prototype.getCloudDiscoveryMetadataFromConfig = function () {
        // Check if network response was provided in config
        if (this.authorityOptions.cloudDiscoveryMetadata) {
            try {
                var parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
                var metadata = Authority.getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
                if (metadata) {
                    return metadata;
                }
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
            }
        }
        // If cloudDiscoveryMetadata is empty or does not contain the host, check knownAuthorities
        if (this.isInKnownAuthorities()) {
            return Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        }
        return null;
    };
    /**
     * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
     *
     * @param hasHardcodedMetadata boolean
     */
    Authority.prototype.getCloudDiscoveryMetadataFromNetwork = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instanceDiscoveryEndpoint, options, match, response, metadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instanceDiscoveryEndpoint = "" + Constants$1.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize";
                        options = {};
                        if (this.proxyUrl) {
                            options.proxyUrl = this.proxyUrl;
                        }
                        match = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options)];
                    case 2:
                        response = _a.sent();
                        metadata = isCloudInstanceDiscoveryResponse(response.body)
                            ? response.body.metadata
                            : [];
                        if (metadata.length === 0) {
                            // If no metadata is returned, authority is untrusted
                            return [2 /*return*/, null];
                        }
                        match = Authority.getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
                        return [3 /*break*/, 4];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 4:
                        if (!match) {
                            // Custom Domain scenario, host is trusted because Instance Discovery call succeeded
                            match = Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
                        }
                        return [2 /*return*/, match];
                }
            });
        });
    };
    /**
     * Get cloud discovery metadata for common authorities
     */
    Authority.prototype.getCloudDiscoveryMetadataFromHarcodedValues = function () {
        if (this.canonicalAuthority in InstanceDiscoveryMetadata) {
            return InstanceDiscoveryMetadata[this.canonicalAuthority];
        }
        return null;
    };
    /**
     * Helper function to determine if this host is included in the knownAuthorities config option
     */
    Authority.prototype.isInKnownAuthorities = function () {
        var _this = this;
        var matches = this.authorityOptions.knownAuthorities.filter(function (authority) {
            return UrlString.getDomainFromUrl(authority).toLowerCase() === _this.hostnameAndPort;
        });
        return matches.length > 0;
    };
    /**
     * helper function to populate the authority based on azureCloudOptions
     * @param authorityString
     * @param azureCloudOptions
     */
    Authority.generateAuthority = function (authorityString, azureCloudOptions) {
        var authorityAzureCloudInstance;
        if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== AzureCloudInstance.None) {
            var tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : Constants$1.DEFAULT_COMMON_TENANT;
            authorityAzureCloudInstance = azureCloudOptions.azureCloudInstance + "/" + tenant + "/";
        }
        return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
    };
    /**
     * Creates cloud discovery metadata object from a given host
     * @param host
     */
    Authority.createCloudDiscoveryMetadataFromHost = function (host) {
        return {
            preferred_network: host,
            preferred_cache: host,
            aliases: [host]
        };
    };
    /**
     * Searches instance discovery network response for the entry that contains the host in the aliases list
     * @param response
     * @param authority
     */
    Authority.getCloudDiscoveryMetadataFromNetworkResponse = function (response, authority) {
        for (var i = 0; i < response.length; i++) {
            var metadata = response[i];
            if (metadata.aliases.indexOf(authority) > -1) {
                return metadata;
            }
        }
        return null;
    };
    /**
     * helper function to generate environment from authority object
     */
    Authority.prototype.getPreferredCache = function () {
        if (this.discoveryComplete()) {
            return this.metadata.preferred_cache;
        }
        else {
            throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
        }
    };
    /**
     * Returns whether or not the provided host is an alias of this authority instance
     * @param host
     */
    Authority.prototype.isAlias = function (host) {
        return this.metadata.aliases.indexOf(host) > -1;
    };
    /**
     * Checks whether the provided host is that of a public cloud authority
     *
     * @param authority string
     * @returns bool
     */
    Authority.isPublicCloudAuthority = function (host) {
        return Constants$1.KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
    };
    /**
     * Rebuild the authority string with the region
     *
     * @param host string
     * @param region string
     */
    Authority.buildRegionalAuthorityString = function (host, region, queryString) {
        // Create and validate a Url string object with the initial authority string
        var authorityUrlInstance = new UrlString(host);
        authorityUrlInstance.validateAsUri();
        var authorityUrlParts = authorityUrlInstance.getUrlComponents();
        var hostNameAndPort = region + "." + authorityUrlParts.HostNameAndPort;
        if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) {
            hostNameAndPort = region + "." + Constants$1.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX;
        }
        // Include the query string portion of the url
        var url = UrlString.constructAuthorityUriFromObject(__assign(__assign({}, authorityUrlInstance.getUrlComponents()), { HostNameAndPort: hostNameAndPort })).urlString;
        // Add the query string if a query string was provided
        if (queryString)
            return url + "?" + queryString;
        return url;
    };
    /**
     * Replace the endpoints in the metadata object with their regional equivalents.
     *
     * @param metadata OpenIdConfigResponse
     * @param azureRegion string
     */
    Authority.replaceWithRegionalInformation = function (metadata, azureRegion) {
        metadata.authorization_endpoint = Authority.buildRegionalAuthorityString(metadata.authorization_endpoint, azureRegion);
        // TODO: Enquire on whether we should leave the query string or remove it before releasing the feature
        metadata.token_endpoint = Authority.buildRegionalAuthorityString(metadata.token_endpoint, azureRegion, Constants$1.REGIONAL_AUTH_NON_MSI_QUERY_STRING);
        if (metadata.end_session_endpoint) {
            metadata.end_session_endpoint = Authority.buildRegionalAuthorityString(metadata.end_session_endpoint, azureRegion);
        }
        return metadata;
    };
    return Authority;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
     *
     * Also performs endpoint discovery.
     *
     * @param authorityUri
     * @param networkClient
     * @param protocolMode
     */
    AuthorityFactory.createDiscoveredInstance = function (authorityUri, networkClient, cacheManager, authorityOptions, proxyUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var acquireTokenAuthority, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acquireTokenAuthority = AuthorityFactory.createInstance(authorityUri, networkClient, cacheManager, authorityOptions, proxyUrl);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, acquireTokenAuthority];
                    case 3:
                        e_1 = _a.sent();
                        throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
     *
     * Does not perform endpoint discovery.
     *
     * @param authorityUrl
     * @param networkInterface
     * @param protocolMode
     */
    AuthorityFactory.createInstance = function (authorityUrl, networkInterface, cacheManager, authorityOptions, proxyUrl) {
        // Throw error if authority url is empty
        if (StringUtils.isEmpty(authorityUrl)) {
            throw ClientConfigurationError.createUrlEmptyError();
        }
        return new Authority(authorityUrl, networkInterface, cacheManager, authorityOptions, proxyUrl);
    };
    return AuthorityFactory;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ServerTelemetryEntity = /** @class */ (function () {
    function ServerTelemetryEntity() {
        this.failedRequests = [];
        this.errors = [];
        this.cacheHits = 0;
    }
    /**
     * validates if a given cache entry is "Telemetry", parses <key,value>
     * @param key
     * @param entity
     */
    ServerTelemetryEntity.isServerTelemetryEntity = function (key, entity) {
        var validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
        var validateEntity = true;
        if (entity) {
            validateEntity =
                entity.hasOwnProperty("failedRequests") &&
                    entity.hasOwnProperty("errors") &&
                    entity.hasOwnProperty("cacheHits");
        }
        return validateKey && validateEntity;
    };
    return ServerTelemetryEntity;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ThrottlingEntity = /** @class */ (function () {
    function ThrottlingEntity() {
    }
    /**
     * validates if a given cache entry is "Throttling", parses <key,value>
     * @param key
     * @param entity
     */
    ThrottlingEntity.isThrottlingEntity = function (key, entity) {
        var validateKey = false;
        if (key) {
            validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
        }
        var validateEntity = true;
        if (entity) {
            validateEntity = entity.hasOwnProperty("throttleTime");
        }
        return validateKey && validateEntity;
    };
    return ThrottlingEntity;
}());

/*! @azure/msal-common v7.6.0 2022-10-10 */

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ServerTelemetryManager = /** @class */ (function () {
    function ServerTelemetryManager(telemetryRequest, cacheManager) {
        this.cacheOutcome = CacheOutcome.NO_CACHE_HIT;
        this.cacheManager = cacheManager;
        this.apiId = telemetryRequest.apiId;
        this.correlationId = telemetryRequest.correlationId;
        this.wrapperSKU = telemetryRequest.wrapperSKU || Constants$1.EMPTY_STRING;
        this.wrapperVer = telemetryRequest.wrapperVer || Constants$1.EMPTY_STRING;
        this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
    }
    /**
     * API to add MSER Telemetry to request
     */
    ServerTelemetryManager.prototype.generateCurrentRequestHeaderValue = function () {
        var request = "" + this.apiId + SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR + this.cacheOutcome;
        var platformFields = [this.wrapperSKU, this.wrapperVer].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        var regionDiscoveryFields = this.getRegionDiscoveryFields();
        var requestWithRegionDiscoveryFields = [request, regionDiscoveryFields].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, requestWithRegionDiscoveryFields, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    };
    /**
     * API to add MSER Telemetry for the last failed request
     */
    ServerTelemetryManager.prototype.generateLastRequestHeaderValue = function () {
        var lastRequests = this.getLastRequests();
        var maxErrors = ServerTelemetryManager.maxErrorsToSend(lastRequests);
        var failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        var errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        var errorCount = lastRequests.errors.length;
        // Indicate whether this header contains all data or partial data
        var overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
        var platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, lastRequests.cacheHits, failedRequests, errors, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    };
    /**
     * API to cache token failures for MSER data capture
     * @param error
     */
    ServerTelemetryManager.prototype.cacheFailedRequest = function (error) {
        var lastRequests = this.getLastRequests();
        if (lastRequests.errors.length >= SERVER_TELEM_CONSTANTS.MAX_CACHED_ERRORS) {
            // Remove a cached error to make room, first in first out
            lastRequests.failedRequests.shift(); // apiId
            lastRequests.failedRequests.shift(); // correlationId
            lastRequests.errors.shift();
        }
        lastRequests.failedRequests.push(this.apiId, this.correlationId);
        if (!StringUtils.isEmpty(error.subError)) {
            lastRequests.errors.push(error.subError);
        }
        else if (!StringUtils.isEmpty(error.errorCode)) {
            lastRequests.errors.push(error.errorCode);
        }
        else if (!!error && error.toString()) {
            lastRequests.errors.push(error.toString());
        }
        else {
            lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
        }
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
        return;
    };
    /**
     * Update server telemetry cache entry by incrementing cache hit counter
     */
    ServerTelemetryManager.prototype.incrementCacheHits = function () {
        var lastRequests = this.getLastRequests();
        lastRequests.cacheHits += 1;
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
        return lastRequests.cacheHits;
    };
    /**
     * Get the server telemetry entity from cache or initialize a new one
     */
    ServerTelemetryManager.prototype.getLastRequests = function () {
        var initialValue = new ServerTelemetryEntity();
        var lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
        return lastRequests || initialValue;
    };
    /**
     * Remove server telemetry cache entry
     */
    ServerTelemetryManager.prototype.clearTelemetryCache = function () {
        var lastRequests = this.getLastRequests();
        var numErrorsFlushed = ServerTelemetryManager.maxErrorsToSend(lastRequests);
        var errorCount = lastRequests.errors.length;
        if (numErrorsFlushed === errorCount) {
            // All errors were sent on last request, clear Telemetry cache
            this.cacheManager.removeItem(this.telemetryCacheKey);
        }
        else {
            // Partial data was flushed to server, construct a new telemetry cache item with errors that were not flushed
            var serverTelemEntity = new ServerTelemetryEntity();
            serverTelemEntity.failedRequests = lastRequests.failedRequests.slice(numErrorsFlushed * 2); // failedRequests contains 2 items for each error
            serverTelemEntity.errors = lastRequests.errors.slice(numErrorsFlushed);
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
        }
    };
    /**
     * Returns the maximum number of errors that can be flushed to the server in the next network request
     * @param serverTelemetryEntity
     */
    ServerTelemetryManager.maxErrorsToSend = function (serverTelemetryEntity) {
        var i;
        var maxErrors = 0;
        var dataSize = 0;
        var errorCount = serverTelemetryEntity.errors.length;
        for (i = 0; i < errorCount; i++) {
            // failedRequests parameter contains pairs of apiId and correlationId, multiply index by 2 to preserve pairs
            var apiId = serverTelemetryEntity.failedRequests[2 * i] || Constants$1.EMPTY_STRING;
            var correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || Constants$1.EMPTY_STRING;
            var errorCode = serverTelemetryEntity.errors[i] || Constants$1.EMPTY_STRING;
            // Count number of characters that would be added to header, each character is 1 byte. Add 3 at the end to account for separators
            dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
            if (dataSize < SERVER_TELEM_CONSTANTS.MAX_LAST_HEADER_BYTES) {
                // Adding this entry to the header would still keep header size below the limit
                maxErrors += 1;
            }
            else {
                break;
            }
        }
        return maxErrors;
    };
    /**
     * Get the region discovery fields
     *
     * @returns string
     */
    ServerTelemetryManager.prototype.getRegionDiscoveryFields = function () {
        var regionDiscoveryFields = [];
        regionDiscoveryFields.push(this.regionUsed || Constants$1.EMPTY_STRING);
        regionDiscoveryFields.push(this.regionSource || Constants$1.EMPTY_STRING);
        regionDiscoveryFields.push(this.regionOutcome || Constants$1.EMPTY_STRING);
        return regionDiscoveryFields.join(",");
    };
    /**
     * Update the region discovery metadata
     *
     * @param regionDiscoveryMetadata
     * @returns void
     */
    ServerTelemetryManager.prototype.updateRegionDiscoveryMetadata = function (regionDiscoveryMetadata) {
        this.regionUsed = regionDiscoveryMetadata.region_used;
        this.regionSource = regionDiscoveryMetadata.region_source;
        this.regionOutcome = regionDiscoveryMetadata.region_outcome;
    };
    /**
     * Set cache outcome
     */
    ServerTelemetryManager.prototype.setCacheOutcome = function (cacheOutcome) {
        this.cacheOutcome = cacheOutcome;
    };
    return ServerTelemetryManager;
}());

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto$1.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate$1(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate$1(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var jws$3 = {};

var safeBuffer = {exports: {}};

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
safeBuffer.exports;

(function (module, exports) {
	/* eslint-disable node/no-deprecated-api */
	var buffer = require$$0;
	var Buffer = buffer.Buffer;

	// alternative to using Object.keys for old browsers
	function copyProps (src, dst) {
	  for (var key in src) {
	    dst[key] = src[key];
	  }
	}
	if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
	  module.exports = buffer;
	} else {
	  // Copy properties from require('buffer')
	  copyProps(buffer, exports);
	  exports.Buffer = SafeBuffer;
	}

	function SafeBuffer (arg, encodingOrOffset, length) {
	  return Buffer(arg, encodingOrOffset, length)
	}

	SafeBuffer.prototype = Object.create(Buffer.prototype);

	// Copy static methods from Buffer
	copyProps(Buffer, SafeBuffer);

	SafeBuffer.from = function (arg, encodingOrOffset, length) {
	  if (typeof arg === 'number') {
	    throw new TypeError('Argument must not be a number')
	  }
	  return Buffer(arg, encodingOrOffset, length)
	};

	SafeBuffer.alloc = function (size, fill, encoding) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  var buf = Buffer(size);
	  if (fill !== undefined) {
	    if (typeof encoding === 'string') {
	      buf.fill(fill, encoding);
	    } else {
	      buf.fill(fill);
	    }
	  } else {
	    buf.fill(0);
	  }
	  return buf
	};

	SafeBuffer.allocUnsafe = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return Buffer(size)
	};

	SafeBuffer.allocUnsafeSlow = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return buffer.SlowBuffer(size)
	}; 
} (safeBuffer, safeBuffer.exports));

var safeBufferExports = safeBuffer.exports;

/*global module, process*/

var Buffer$7 = safeBufferExports.Buffer;
var Stream$2 = require$$3;
var util$3 = require$$5;

function DataStream$2(data) {
  this.buffer = null;
  this.writable = true;
  this.readable = true;

  // No input
  if (!data) {
    this.buffer = Buffer$7.alloc(0);
    return this;
  }

  // Stream
  if (typeof data.pipe === 'function') {
    this.buffer = Buffer$7.alloc(0);
    data.pipe(this);
    return this;
  }

  // Buffer or String
  // or Object (assumedly a passworded key)
  if (data.length || typeof data === 'object') {
    this.buffer = data;
    this.writable = false;
    process.nextTick(function () {
      this.emit('end', data);
      this.readable = false;
      this.emit('close');
    }.bind(this));
    return this;
  }

  throw new TypeError('Unexpected data type ('+ typeof data + ')');
}
util$3.inherits(DataStream$2, Stream$2);

DataStream$2.prototype.write = function write(data) {
  this.buffer = Buffer$7.concat([this.buffer, Buffer$7.from(data)]);
  this.emit('data', data);
};

DataStream$2.prototype.end = function end(data) {
  if (data)
    this.write(data);
  this.emit('end', data);
  this.emit('close');
  this.writable = false;
  this.readable = false;
};

var dataStream = DataStream$2;

/*jshint node:true */
var Buffer$6 = require$$0.Buffer; // browserify
var SlowBuffer = require$$0.SlowBuffer;

var bufferEqualConstantTime = bufferEq;

function bufferEq(a, b) {

  // shortcutting on type is necessary for correctness
  if (!Buffer$6.isBuffer(a) || !Buffer$6.isBuffer(b)) {
    return false;
  }

  // buffer sizes should be well-known information, so despite this
  // shortcutting, it doesn't leak any information about the *contents* of the
  // buffers.
  if (a.length !== b.length) {
    return false;
  }

  var c = 0;
  for (var i = 0; i < a.length; i++) {
    /*jshint bitwise:false */
    c |= a[i] ^ b[i]; // XOR
  }
  return c === 0;
}

bufferEq.install = function() {
  Buffer$6.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
    return bufferEq(this, that);
  };
};

var origBufEqual = Buffer$6.prototype.equal;
var origSlowBufEqual = SlowBuffer.prototype.equal;
bufferEq.restore = function() {
  Buffer$6.prototype.equal = origBufEqual;
  SlowBuffer.prototype.equal = origSlowBufEqual;
};

function getParamSize(keySize) {
	var result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);
	return result;
}

var paramBytesForAlg = {
	ES256: getParamSize(256),
	ES384: getParamSize(384),
	ES512: getParamSize(521)
};

function getParamBytesForAlg$1(alg) {
	var paramBytes = paramBytesForAlg[alg];
	if (paramBytes) {
		return paramBytes;
	}

	throw new Error('Unknown algorithm "' + alg + '"');
}

var paramBytesForAlg_1 = getParamBytesForAlg$1;

var Buffer$5 = safeBufferExports.Buffer;

var getParamBytesForAlg = paramBytesForAlg_1;

var MAX_OCTET = 0x80,
	CLASS_UNIVERSAL = 0,
	PRIMITIVE_BIT = 0x20,
	TAG_SEQ = 0x10,
	TAG_INT = 0x02,
	ENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),
	ENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);

function base64Url(base64) {
	return base64
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
}

function signatureAsBuffer(signature) {
	if (Buffer$5.isBuffer(signature)) {
		return signature;
	} else if ('string' === typeof signature) {
		return Buffer$5.from(signature, 'base64');
	}

	throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}

function derToJose(signature, alg) {
	signature = signatureAsBuffer(signature);
	var paramBytes = getParamBytesForAlg(alg);

	// the DER encoded param should at most be the param size, plus a padding
	// zero, since due to being a signed integer
	var maxEncodedParamLength = paramBytes + 1;

	var inputLength = signature.length;

	var offset = 0;
	if (signature[offset++] !== ENCODED_TAG_SEQ) {
		throw new Error('Could not find expected "seq"');
	}

	var seqLength = signature[offset++];
	if (seqLength === (MAX_OCTET | 1)) {
		seqLength = signature[offset++];
	}

	if (inputLength - offset < seqLength) {
		throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
	}

	if (signature[offset++] !== ENCODED_TAG_INT) {
		throw new Error('Could not find expected "int" for "r"');
	}

	var rLength = signature[offset++];

	if (inputLength - offset - 2 < rLength) {
		throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
	}

	if (maxEncodedParamLength < rLength) {
		throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
	}

	var rOffset = offset;
	offset += rLength;

	if (signature[offset++] !== ENCODED_TAG_INT) {
		throw new Error('Could not find expected "int" for "s"');
	}

	var sLength = signature[offset++];

	if (inputLength - offset !== sLength) {
		throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
	}

	if (maxEncodedParamLength < sLength) {
		throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
	}

	var sOffset = offset;
	offset += sLength;

	if (offset !== inputLength) {
		throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
	}

	var rPadding = paramBytes - rLength,
		sPadding = paramBytes - sLength;

	var dst = Buffer$5.allocUnsafe(rPadding + rLength + sPadding + sLength);

	for (offset = 0; offset < rPadding; ++offset) {
		dst[offset] = 0;
	}
	signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);

	offset = paramBytes;

	for (var o = offset; offset < o + sPadding; ++offset) {
		dst[offset] = 0;
	}
	signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);

	dst = dst.toString('base64');
	dst = base64Url(dst);

	return dst;
}

function countPadding(buf, start, stop) {
	var padding = 0;
	while (start + padding < stop && buf[start + padding] === 0) {
		++padding;
	}

	var needsSign = buf[start + padding] >= MAX_OCTET;
	if (needsSign) {
		--padding;
	}

	return padding;
}

function joseToDer(signature, alg) {
	signature = signatureAsBuffer(signature);
	var paramBytes = getParamBytesForAlg(alg);

	var signatureBytes = signature.length;
	if (signatureBytes !== paramBytes * 2) {
		throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
	}

	var rPadding = countPadding(signature, 0, paramBytes);
	var sPadding = countPadding(signature, paramBytes, signature.length);
	var rLength = paramBytes - rPadding;
	var sLength = paramBytes - sPadding;

	var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;

	var shortLength = rsBytes < MAX_OCTET;

	var dst = Buffer$5.allocUnsafe((shortLength ? 2 : 3) + rsBytes);

	var offset = 0;
	dst[offset++] = ENCODED_TAG_SEQ;
	if (shortLength) {
		// Bit 8 has value "0"
		// bits 7-1 give the length.
		dst[offset++] = rsBytes;
	} else {
		// Bit 8 of first octet has value "1"
		// bits 7-1 give the number of additional length octets.
		dst[offset++] = MAX_OCTET	| 1;
		// length, base 256
		dst[offset++] = rsBytes & 0xff;
	}
	dst[offset++] = ENCODED_TAG_INT;
	dst[offset++] = rLength;
	if (rPadding < 0) {
		dst[offset++] = 0;
		offset += signature.copy(dst, offset, 0, paramBytes);
	} else {
		offset += signature.copy(dst, offset, rPadding, paramBytes);
	}
	dst[offset++] = ENCODED_TAG_INT;
	dst[offset++] = sLength;
	if (sPadding < 0) {
		dst[offset++] = 0;
		signature.copy(dst, offset, paramBytes);
	} else {
		signature.copy(dst, offset, paramBytes + sPadding);
	}

	return dst;
}

var ecdsaSigFormatter = {
	derToJose: derToJose,
	joseToDer: joseToDer
};

var bufferEqual = bufferEqualConstantTime;
var Buffer$4 = safeBufferExports.Buffer;
var crypto = crypto$1;
var formatEcdsa = ecdsaSigFormatter;
var util$2 = require$$5;

var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
var MSG_INVALID_SECRET = 'secret must be a string or buffer';
var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';

var supportsKeyObjects = typeof crypto.createPublicKey === 'function';
if (supportsKeyObjects) {
  MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
  MSG_INVALID_SECRET += 'or a KeyObject';
}

function checkIsPublicKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return;
  }

  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key !== 'object') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.type !== 'string') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.asymmetricKeyType !== 'string') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.export !== 'function') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
}
function checkIsPrivateKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return;
  }

  if (typeof key === 'object') {
    return;
  }

  throw typeError(MSG_INVALID_SIGNER_KEY);
}
function checkIsSecretKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return key;
  }

  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (typeof key !== 'object') {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (key.type !== 'secret') {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (typeof key.export !== 'function') {
    throw typeError(MSG_INVALID_SECRET);
  }
}

function fromBase64(base64) {
  return base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function toBase64(base64url) {
  base64url = base64url.toString();

  var padding = 4 - base64url.length % 4;
  if (padding !== 4) {
    for (var i = 0; i < padding; ++i) {
      base64url += '=';
    }
  }

  return base64url
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
}

function typeError(template) {
  var args = [].slice.call(arguments, 1);
  var errMsg = util$2.format.bind(util$2, template).apply(null, args);
  return new TypeError(errMsg);
}

function bufferOrString(obj) {
  return Buffer$4.isBuffer(obj) || typeof obj === 'string';
}

function normalizeInput(thing) {
  if (!bufferOrString(thing))
    thing = JSON.stringify(thing);
  return thing;
}

function createHmacSigner(bits) {
  return function sign(thing, secret) {
    checkIsSecretKey(secret);
    thing = normalizeInput(thing);
    var hmac = crypto.createHmac('sha' + bits, secret);
    var sig = (hmac.update(thing), hmac.digest('base64'));
    return fromBase64(sig);
  }
}

function createHmacVerifier(bits) {
  return function verify(thing, signature, secret) {
    var computedSig = createHmacSigner(bits)(thing, secret);
    return bufferEqual(Buffer$4.from(signature), Buffer$4.from(computedSig));
  }
}

function createKeySigner(bits) {
 return function sign(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    // Even though we are specifying "RSA" here, this works with ECDSA
    // keys as well.
    var signer = crypto.createSign('RSA-SHA' + bits);
    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
    return fromBase64(sig);
  }
}

function createKeyVerifier(bits) {
  return function verify(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify('RSA-SHA' + bits);
    verifier.update(thing);
    return verifier.verify(publicKey, signature, 'base64');
  }
}

function createPSSKeySigner(bits) {
  return function sign(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    var signer = crypto.createSign('RSA-SHA' + bits);
    var sig = (signer.update(thing), signer.sign({
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, 'base64'));
    return fromBase64(sig);
  }
}

function createPSSKeyVerifier(bits) {
  return function verify(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify('RSA-SHA' + bits);
    verifier.update(thing);
    return verifier.verify({
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, signature, 'base64');
  }
}

function createECDSASigner(bits) {
  var inner = createKeySigner(bits);
  return function sign() {
    var signature = inner.apply(null, arguments);
    signature = formatEcdsa.derToJose(signature, 'ES' + bits);
    return signature;
  };
}

function createECDSAVerifer(bits) {
  var inner = createKeyVerifier(bits);
  return function verify(thing, signature, publicKey) {
    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
    var result = inner(thing, signature, publicKey);
    return result;
  };
}

function createNoneSigner() {
  return function sign() {
    return '';
  }
}

function createNoneVerifier() {
  return function verify(thing, signature) {
    return signature === '';
  }
}

var jwa$2 = function jwa(algorithm) {
  var signerFactories = {
    hs: createHmacSigner,
    rs: createKeySigner,
    ps: createPSSKeySigner,
    es: createECDSASigner,
    none: createNoneSigner,
  };
  var verifierFactories = {
    hs: createHmacVerifier,
    rs: createKeyVerifier,
    ps: createPSSKeyVerifier,
    es: createECDSAVerifer,
    none: createNoneVerifier,
  };
  var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
  if (!match)
    throw typeError(MSG_INVALID_ALGORITHM, algorithm);
  var algo = (match[1] || match[3]).toLowerCase();
  var bits = match[2];

  return {
    sign: signerFactories[algo](bits),
    verify: verifierFactories[algo](bits),
  }
};

/*global module*/

var Buffer$3 = require$$0.Buffer;

var tostring = function toString(obj) {
  if (typeof obj === 'string')
    return obj;
  if (typeof obj === 'number' || Buffer$3.isBuffer(obj))
    return obj.toString();
  return JSON.stringify(obj);
};

/*global module*/

var Buffer$2 = safeBufferExports.Buffer;
var DataStream$1 = dataStream;
var jwa$1 = jwa$2;
var Stream$1 = require$$3;
var toString$1 = tostring;
var util$1 = require$$5;

function base64url(string, encoding) {
  return Buffer$2
    .from(string, encoding)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function jwsSecuredInput(header, payload, encoding) {
  encoding = encoding || 'utf8';
  var encodedHeader = base64url(toString$1(header), 'binary');
  var encodedPayload = base64url(toString$1(payload), encoding);
  return util$1.format('%s.%s', encodedHeader, encodedPayload);
}

function jwsSign(opts) {
  var header = opts.header;
  var payload = opts.payload;
  var secretOrKey = opts.secret || opts.privateKey;
  var encoding = opts.encoding;
  var algo = jwa$1(header.alg);
  var securedInput = jwsSecuredInput(header, payload, encoding);
  var signature = algo.sign(securedInput, secretOrKey);
  return util$1.format('%s.%s', securedInput, signature);
}

function SignStream$1(opts) {
  var secret = opts.secret||opts.privateKey||opts.key;
  var secretStream = new DataStream$1(secret);
  this.readable = true;
  this.header = opts.header;
  this.encoding = opts.encoding;
  this.secret = this.privateKey = this.key = secretStream;
  this.payload = new DataStream$1(opts.payload);
  this.secret.once('close', function () {
    if (!this.payload.writable && this.readable)
      this.sign();
  }.bind(this));

  this.payload.once('close', function () {
    if (!this.secret.writable && this.readable)
      this.sign();
  }.bind(this));
}
util$1.inherits(SignStream$1, Stream$1);

SignStream$1.prototype.sign = function sign() {
  try {
    var signature = jwsSign({
      header: this.header,
      payload: this.payload.buffer,
      secret: this.secret.buffer,
      encoding: this.encoding
    });
    this.emit('done', signature);
    this.emit('data', signature);
    this.emit('end');
    this.readable = false;
    return signature;
  } catch (e) {
    this.readable = false;
    this.emit('error', e);
    this.emit('close');
  }
};

SignStream$1.sign = jwsSign;

var signStream = SignStream$1;

/*global module*/

var Buffer$1 = safeBufferExports.Buffer;
var DataStream = dataStream;
var jwa = jwa$2;
var Stream = require$$3;
var toString = tostring;
var util = require$$5;
var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function isObject$3(thing) {
  return Object.prototype.toString.call(thing) === '[object Object]';
}

function safeJsonParse(thing) {
  if (isObject$3(thing))
    return thing;
  try { return JSON.parse(thing); }
  catch (e) { return undefined; }
}

function headerFromJWS(jwsSig) {
  var encodedHeader = jwsSig.split('.', 1)[0];
  return safeJsonParse(Buffer$1.from(encodedHeader, 'base64').toString('binary'));
}

function securedInputFromJWS(jwsSig) {
  return jwsSig.split('.', 2).join('.');
}

function signatureFromJWS(jwsSig) {
  return jwsSig.split('.')[2];
}

function payloadFromJWS(jwsSig, encoding) {
  encoding = encoding || 'utf8';
  var payload = jwsSig.split('.')[1];
  return Buffer$1.from(payload, 'base64').toString(encoding);
}

function isValidJws(string) {
  return JWS_REGEX.test(string) && !!headerFromJWS(string);
}

function jwsVerify(jwsSig, algorithm, secretOrKey) {
  if (!algorithm) {
    var err = new Error("Missing algorithm parameter for jws.verify");
    err.code = "MISSING_ALGORITHM";
    throw err;
  }
  jwsSig = toString(jwsSig);
  var signature = signatureFromJWS(jwsSig);
  var securedInput = securedInputFromJWS(jwsSig);
  var algo = jwa(algorithm);
  return algo.verify(securedInput, signature, secretOrKey);
}

function jwsDecode(jwsSig, opts) {
  opts = opts || {};
  jwsSig = toString(jwsSig);

  if (!isValidJws(jwsSig))
    return null;

  var header = headerFromJWS(jwsSig);

  if (!header)
    return null;

  var payload = payloadFromJWS(jwsSig);
  if (header.typ === 'JWT' || opts.json)
    payload = JSON.parse(payload, opts.encoding);

  return {
    header: header,
    payload: payload,
    signature: signatureFromJWS(jwsSig)
  };
}

function VerifyStream$1(opts) {
  opts = opts || {};
  var secretOrKey = opts.secret||opts.publicKey||opts.key;
  var secretStream = new DataStream(secretOrKey);
  this.readable = true;
  this.algorithm = opts.algorithm;
  this.encoding = opts.encoding;
  this.secret = this.publicKey = this.key = secretStream;
  this.signature = new DataStream(opts.signature);
  this.secret.once('close', function () {
    if (!this.signature.writable && this.readable)
      this.verify();
  }.bind(this));

  this.signature.once('close', function () {
    if (!this.secret.writable && this.readable)
      this.verify();
  }.bind(this));
}
util.inherits(VerifyStream$1, Stream);
VerifyStream$1.prototype.verify = function verify() {
  try {
    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
    var obj = jwsDecode(this.signature.buffer, this.encoding);
    this.emit('done', valid, obj);
    this.emit('data', valid);
    this.emit('end');
    this.readable = false;
    return valid;
  } catch (e) {
    this.readable = false;
    this.emit('error', e);
    this.emit('close');
  }
};

VerifyStream$1.decode = jwsDecode;
VerifyStream$1.isValid = isValidJws;
VerifyStream$1.verify = jwsVerify;

var verifyStream = VerifyStream$1;

/*global exports*/

var SignStream = signStream;
var VerifyStream = verifyStream;

var ALGORITHMS = [
  'HS256', 'HS384', 'HS512',
  'RS256', 'RS384', 'RS512',
  'PS256', 'PS384', 'PS512',
  'ES256', 'ES384', 'ES512'
];

jws$3.ALGORITHMS = ALGORITHMS;
jws$3.sign = SignStream.sign;
jws$3.verify = VerifyStream.verify;
jws$3.decode = VerifyStream.decode;
jws$3.isValid = VerifyStream.isValid;
jws$3.createSign = function createSign(opts) {
  return new SignStream(opts);
};
jws$3.createVerify = function createVerify(opts) {
  return new VerifyStream(opts);
};

var jws$2 = jws$3;

var decode$1 = function (jwt, options) {
  options = options || {};
  var decoded = jws$2.decode(jwt, options);
  if (!decoded) { return null; }
  var payload = decoded.payload;

  //try parse the payload
  if(typeof payload === 'string') {
    try {
      var obj = JSON.parse(payload);
      if(obj !== null && typeof obj === 'object') {
        payload = obj;
      }
    } catch (e) { }
  }

  //return header if `complete` option is enabled.  header includes claims
  //such as `kid` and `alg` used to select the key within a JWKS needed to
  //verify the signature
  if (options.complete === true) {
    return {
      header: decoded.header,
      payload: payload,
      signature: decoded.signature
    };
  }
  return payload;
};

var JsonWebTokenError$3 = function (message, error) {
  Error.call(this, message);
  if(Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'JsonWebTokenError';
  this.message = message;
  if (error) this.inner = error;
};

JsonWebTokenError$3.prototype = Object.create(Error.prototype);
JsonWebTokenError$3.prototype.constructor = JsonWebTokenError$3;

var JsonWebTokenError_1 = JsonWebTokenError$3;

var JsonWebTokenError$2 = JsonWebTokenError_1;

var NotBeforeError$1 = function (message, date) {
  JsonWebTokenError$2.call(this, message);
  this.name = 'NotBeforeError';
  this.date = date;
};

NotBeforeError$1.prototype = Object.create(JsonWebTokenError$2.prototype);

NotBeforeError$1.prototype.constructor = NotBeforeError$1;

var NotBeforeError_1 = NotBeforeError$1;

var JsonWebTokenError$1 = JsonWebTokenError_1;

var TokenExpiredError$1 = function (message, expiredAt) {
  JsonWebTokenError$1.call(this, message);
  this.name = 'TokenExpiredError';
  this.expiredAt = expiredAt;
};

TokenExpiredError$1.prototype = Object.create(JsonWebTokenError$1.prototype);

TokenExpiredError$1.prototype.constructor = TokenExpiredError$1;

var TokenExpiredError_1 = TokenExpiredError$1;

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms$1 = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

var ms = ms$1;

var timespan$2 = function (time, iat) {
  var timestamp = iat || Math.floor(Date.now() / 1000);

  if (typeof time === 'string') {
    var milliseconds = ms(time);
    if (typeof milliseconds === 'undefined') {
      return;
    }
    return Math.floor(timestamp + milliseconds / 1000);
  } else if (typeof time === 'number') {
    return timestamp + time;
  } else {
    return;
  }

};

var semver$1 = {exports: {}};

semver$1.exports;

(function (module, exports) {
	exports = module.exports = SemVer;

	var debug;
	/* istanbul ignore next */
	if (typeof process === 'object' &&
	    process.env &&
	    process.env.NODE_DEBUG &&
	    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
	  debug = function () {
	    var args = Array.prototype.slice.call(arguments, 0);
	    args.unshift('SEMVER');
	    console.log.apply(console, args);
	  };
	} else {
	  debug = function () {};
	}

	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';

	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
	  /* istanbul ignore next */ 9007199254740991;

	// Max safe segment length for coercion.
	var MAX_SAFE_COMPONENT_LENGTH = 16;

	var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;

	// The actual regexps go on exports.re
	var re = exports.re = [];
	var safeRe = exports.safeRe = [];
	var src = exports.src = [];
	var R = 0;

	var LETTERDASHNUMBER = '[a-zA-Z0-9-]';

	// Replace some greedy regex tokens to prevent regex dos issues. These regex are
	// used internally via the safeRe object since all inputs in this library get
	// normalized first to trim and collapse all extra whitespace. The original
	// regexes are exported for userland consumption and lower level usage. A
	// future breaking change could export the safer regex only with a note that
	// all input should have extra whitespace removed.
	var safeRegexReplacements = [
	  ['\\s', 1],
	  ['\\d', MAX_LENGTH],
	  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
	];

	function makeSafeRe (value) {
	  for (var i = 0; i < safeRegexReplacements.length; i++) {
	    var token = safeRegexReplacements[i][0];
	    var max = safeRegexReplacements[i][1];
	    value = value
	      .split(token + '*').join(token + '{0,' + max + '}')
	      .split(token + '+').join(token + '{1,' + max + '}');
	  }
	  return value
	}

	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.

	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.

	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '\\d+';

	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.

	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-]' + LETTERDASHNUMBER + '*';

	// ## Main Version
	// Three dot-separated numeric identifiers.

	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')';

	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.

	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
	                            '|' + src[NONNUMERICIDENTIFIER] + ')';

	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
	                                 '|' + src[NONNUMERICIDENTIFIER] + ')';

	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.

	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
	                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
	                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.

	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = LETTERDASHNUMBER + '+';

	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.

	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
	             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';

	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.

	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.

	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] +
	                src[PRERELEASE] + '?' +
	                src[BUILD] + '?';

	src[FULL] = '^' + FULLPLAIN + '$';

	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
	                 src[PRERELEASELOOSE] + '?' +
	                 src[BUILD] + '?';

	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';

	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';

	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:' + src[PRERELEASE] + ')?' +
	                   src[BUILD] + '?' +
	                   ')?)?';

	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:' + src[PRERELEASELOOSE] + ')?' +
	                        src[BUILD] + '?' +
	                        ')?)?';

	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

	// Coercion.
	// Extract anything that could conceivably be a part of a valid semver
	var COERCE = R++;
	src[COERCE] = '(?:^|[^\\d])' +
	              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
	              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
	              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
	              '(?:$|[^\\d])';

	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';

	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	safeRe[TILDETRIM] = new RegExp(makeSafeRe(src[TILDETRIM]), 'g');
	var tildeTrimReplace = '$1~';

	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';

	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	safeRe[CARETTRIM] = new RegExp(makeSafeRe(src[CARETTRIM]), 'g');
	var caretTrimReplace = '$1^';

	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';

	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
	                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	safeRe[COMPARATORTRIM] = new RegExp(makeSafeRe(src[COMPARATORTRIM]), 'g');
	var comparatorTrimReplace = '$1$2$3';

	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
	                   '\\s+-\\s+' +
	                   '(' + src[XRANGEPLAIN] + ')' +
	                   '\\s*$';

	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s+-\\s+' +
	                        '(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s*$';

	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';

	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i]) {
	    re[i] = new RegExp(src[i]);

	    // Replace all greedy whitespace to prevent regex dos issues. These regex are
	    // used internally via the safeRe object since all inputs in this library get
	    // normalized first to trim and collapse all extra whitespace. The original
	    // regexes are exported for userland consumption and lower level usage. A
	    // future breaking change could export the safer regex only with a note that
	    // all input should have extra whitespace removed.
	    safeRe[i] = new RegExp(makeSafeRe(src[i]));
	  }
	}

	exports.parse = parse;
	function parse (version, options) {
	  if (!options || typeof options !== 'object') {
	    options = {
	      loose: !!options,
	      includePrerelease: false
	    };
	  }

	  if (version instanceof SemVer) {
	    return version
	  }

	  if (typeof version !== 'string') {
	    return null
	  }

	  if (version.length > MAX_LENGTH) {
	    return null
	  }

	  var r = options.loose ? safeRe[LOOSE] : safeRe[FULL];
	  if (!r.test(version)) {
	    return null
	  }

	  try {
	    return new SemVer(version, options)
	  } catch (er) {
	    return null
	  }
	}

	exports.valid = valid;
	function valid (version, options) {
	  var v = parse(version, options);
	  return v ? v.version : null
	}

	exports.clean = clean;
	function clean (version, options) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), options);
	  return s ? s.version : null
	}

	exports.SemVer = SemVer;

	function SemVer (version, options) {
	  if (!options || typeof options !== 'object') {
	    options = {
	      loose: !!options,
	      includePrerelease: false
	    };
	  }
	  if (version instanceof SemVer) {
	    if (version.loose === options.loose) {
	      return version
	    } else {
	      version = version.version;
	    }
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version)
	  }

	  if (version.length > MAX_LENGTH) {
	    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
	  }

	  if (!(this instanceof SemVer)) {
	    return new SemVer(version, options)
	  }

	  debug('SemVer', version, options);
	  this.options = options;
	  this.loose = !!options.loose;

	  var m = version.trim().match(options.loose ? safeRe[LOOSE] : safeRe[FULL]);

	  if (!m) {
	    throw new TypeError('Invalid Version: ' + version)
	  }

	  this.raw = version;

	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];

	  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
	    throw new TypeError('Invalid major version')
	  }

	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
	    throw new TypeError('Invalid minor version')
	  }

	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
	    throw new TypeError('Invalid patch version')
	  }

	  // numberify any prerelease numeric ids
	  if (!m[4]) {
	    this.prerelease = [];
	  } else {
	    this.prerelease = m[4].split('.').map(function (id) {
	      if (/^[0-9]+$/.test(id)) {
	        var num = +id;
	        if (num >= 0 && num < MAX_SAFE_INTEGER) {
	          return num
	        }
	      }
	      return id
	    });
	  }

	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}

	SemVer.prototype.format = function () {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length) {
	    this.version += '-' + this.prerelease.join('.');
	  }
	  return this.version
	};

	SemVer.prototype.toString = function () {
	  return this.version
	};

	SemVer.prototype.compare = function (other) {
	  debug('SemVer.compare', this.version, this.options, other);
	  if (!(other instanceof SemVer)) {
	    other = new SemVer(other, this.options);
	  }

	  return this.compareMain(other) || this.comparePre(other)
	};

	SemVer.prototype.compareMain = function (other) {
	  if (!(other instanceof SemVer)) {
	    other = new SemVer(other, this.options);
	  }

	  return compareIdentifiers(this.major, other.major) ||
	         compareIdentifiers(this.minor, other.minor) ||
	         compareIdentifiers(this.patch, other.patch)
	};

	SemVer.prototype.comparePre = function (other) {
	  if (!(other instanceof SemVer)) {
	    other = new SemVer(other, this.options);
	  }

	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length) {
	    return -1
	  } else if (!this.prerelease.length && other.prerelease.length) {
	    return 1
	  } else if (!this.prerelease.length && !other.prerelease.length) {
	    return 0
	  }

	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined) {
	      return 0
	    } else if (b === undefined) {
	      return 1
	    } else if (a === undefined) {
	      return -1
	    } else if (a === b) {
	      continue
	    } else {
	      return compareIdentifiers(a, b)
	    }
	  } while (++i)
	};

	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function (release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0) {
	        this.inc('patch', identifier);
	      }
	      this.inc('pre', identifier);
	      break

	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 ||
	          this.patch !== 0 ||
	          this.prerelease.length === 0) {
	        this.major++;
	      }
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0) {
	        this.minor++;
	      }
	      this.patch = 0;
	      this.prerelease = [];
	      break
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0) {
	        this.patch++;
	      }
	      this.prerelease = [];
	      break
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0) {
	        this.prerelease = [0];
	      } else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) {
	          // didn't increment anything
	          this.prerelease.push(0);
	        }
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1])) {
	            this.prerelease = [identifier, 0];
	          }
	        } else {
	          this.prerelease = [identifier, 0];
	        }
	      }
	      break

	    default:
	      throw new Error('invalid increment argument: ' + release)
	  }
	  this.format();
	  this.raw = this.version;
	  return this
	};

	exports.inc = inc;
	function inc (version, release, loose, identifier) {
	  if (typeof (loose) === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }

	  try {
	    return new SemVer(version, loose).inc(release, identifier).version
	  } catch (er) {
	    return null
	  }
	}

	exports.diff = diff;
	function diff (version1, version2) {
	  if (eq(version1, version2)) {
	    return null
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    var prefix = '';
	    if (v1.prerelease.length || v2.prerelease.length) {
	      prefix = 'pre';
	      var defaultResult = 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return prefix + key
	        }
	      }
	    }
	    return defaultResult // may be undefined
	  }
	}

	exports.compareIdentifiers = compareIdentifiers;

	var numeric = /^[0-9]+$/;
	function compareIdentifiers (a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);

	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }

	  return a === b ? 0
	    : (anum && !bnum) ? -1
	    : (bnum && !anum) ? 1
	    : a < b ? -1
	    : 1
	}

	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers (a, b) {
	  return compareIdentifiers(b, a)
	}

	exports.major = major;
	function major (a, loose) {
	  return new SemVer(a, loose).major
	}

	exports.minor = minor;
	function minor (a, loose) {
	  return new SemVer(a, loose).minor
	}

	exports.patch = patch;
	function patch (a, loose) {
	  return new SemVer(a, loose).patch
	}

	exports.compare = compare;
	function compare (a, b, loose) {
	  return new SemVer(a, loose).compare(new SemVer(b, loose))
	}

	exports.compareLoose = compareLoose;
	function compareLoose (a, b) {
	  return compare(a, b, true)
	}

	exports.rcompare = rcompare;
	function rcompare (a, b, loose) {
	  return compare(b, a, loose)
	}

	exports.sort = sort;
	function sort (list, loose) {
	  return list.sort(function (a, b) {
	    return exports.compare(a, b, loose)
	  })
	}

	exports.rsort = rsort;
	function rsort (list, loose) {
	  return list.sort(function (a, b) {
	    return exports.rcompare(a, b, loose)
	  })
	}

	exports.gt = gt;
	function gt (a, b, loose) {
	  return compare(a, b, loose) > 0
	}

	exports.lt = lt;
	function lt (a, b, loose) {
	  return compare(a, b, loose) < 0
	}

	exports.eq = eq;
	function eq (a, b, loose) {
	  return compare(a, b, loose) === 0
	}

	exports.neq = neq;
	function neq (a, b, loose) {
	  return compare(a, b, loose) !== 0
	}

	exports.gte = gte;
	function gte (a, b, loose) {
	  return compare(a, b, loose) >= 0
	}

	exports.lte = lte;
	function lte (a, b, loose) {
	  return compare(a, b, loose) <= 0
	}

	exports.cmp = cmp;
	function cmp (a, op, b, loose) {
	  switch (op) {
	    case '===':
	      if (typeof a === 'object')
	        a = a.version;
	      if (typeof b === 'object')
	        b = b.version;
	      return a === b

	    case '!==':
	      if (typeof a === 'object')
	        a = a.version;
	      if (typeof b === 'object')
	        b = b.version;
	      return a !== b

	    case '':
	    case '=':
	    case '==':
	      return eq(a, b, loose)

	    case '!=':
	      return neq(a, b, loose)

	    case '>':
	      return gt(a, b, loose)

	    case '>=':
	      return gte(a, b, loose)

	    case '<':
	      return lt(a, b, loose)

	    case '<=':
	      return lte(a, b, loose)

	    default:
	      throw new TypeError('Invalid operator: ' + op)
	  }
	}

	exports.Comparator = Comparator;
	function Comparator (comp, options) {
	  if (!options || typeof options !== 'object') {
	    options = {
	      loose: !!options,
	      includePrerelease: false
	    };
	  }

	  if (comp instanceof Comparator) {
	    if (comp.loose === !!options.loose) {
	      return comp
	    } else {
	      comp = comp.value;
	    }
	  }

	  if (!(this instanceof Comparator)) {
	    return new Comparator(comp, options)
	  }

	  comp = comp.trim().split(/\s+/).join(' ');
	  debug('comparator', comp, options);
	  this.options = options;
	  this.loose = !!options.loose;
	  this.parse(comp);

	  if (this.semver === ANY) {
	    this.value = '';
	  } else {
	    this.value = this.operator + this.semver.version;
	  }

	  debug('comp', this);
	}

	var ANY = {};
	Comparator.prototype.parse = function (comp) {
	  var r = this.options.loose ? safeRe[COMPARATORLOOSE] : safeRe[COMPARATOR];
	  var m = comp.match(r);

	  if (!m) {
	    throw new TypeError('Invalid comparator: ' + comp)
	  }

	  this.operator = m[1];
	  if (this.operator === '=') {
	    this.operator = '';
	  }

	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2]) {
	    this.semver = ANY;
	  } else {
	    this.semver = new SemVer(m[2], this.options.loose);
	  }
	};

	Comparator.prototype.toString = function () {
	  return this.value
	};

	Comparator.prototype.test = function (version) {
	  debug('Comparator.test', version, this.options.loose);

	  if (this.semver === ANY) {
	    return true
	  }

	  if (typeof version === 'string') {
	    version = new SemVer(version, this.options);
	  }

	  return cmp(version, this.operator, this.semver, this.options)
	};

	Comparator.prototype.intersects = function (comp, options) {
	  if (!(comp instanceof Comparator)) {
	    throw new TypeError('a Comparator is required')
	  }

	  if (!options || typeof options !== 'object') {
	    options = {
	      loose: !!options,
	      includePrerelease: false
	    };
	  }

	  var rangeTmp;

	  if (this.operator === '') {
	    rangeTmp = new Range(comp.value, options);
	    return satisfies(this.value, rangeTmp, options)
	  } else if (comp.operator === '') {
	    rangeTmp = new Range(this.value, options);
	    return satisfies(comp.semver, rangeTmp, options)
	  }

	  var sameDirectionIncreasing =
	    (this.operator === '>=' || this.operator === '>') &&
	    (comp.operator === '>=' || comp.operator === '>');
	  var sameDirectionDecreasing =
	    (this.operator === '<=' || this.operator === '<') &&
	    (comp.operator === '<=' || comp.operator === '<');
	  var sameSemVer = this.semver.version === comp.semver.version;
	  var differentDirectionsInclusive =
	    (this.operator === '>=' || this.operator === '<=') &&
	    (comp.operator === '>=' || comp.operator === '<=');
	  var oppositeDirectionsLessThan =
	    cmp(this.semver, '<', comp.semver, options) &&
	    ((this.operator === '>=' || this.operator === '>') &&
	    (comp.operator === '<=' || comp.operator === '<'));
	  var oppositeDirectionsGreaterThan =
	    cmp(this.semver, '>', comp.semver, options) &&
	    ((this.operator === '<=' || this.operator === '<') &&
	    (comp.operator === '>=' || comp.operator === '>'));

	  return sameDirectionIncreasing || sameDirectionDecreasing ||
	    (sameSemVer && differentDirectionsInclusive) ||
	    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
	};

	exports.Range = Range;
	function Range (range, options) {
	  if (!options || typeof options !== 'object') {
	    options = {
	      loose: !!options,
	      includePrerelease: false
	    };
	  }

	  if (range instanceof Range) {
	    if (range.loose === !!options.loose &&
	        range.includePrerelease === !!options.includePrerelease) {
	      return range
	    } else {
	      return new Range(range.raw, options)
	    }
	  }

	  if (range instanceof Comparator) {
	    return new Range(range.value, options)
	  }

	  if (!(this instanceof Range)) {
	    return new Range(range, options)
	  }

	  this.options = options;
	  this.loose = !!options.loose;
	  this.includePrerelease = !!options.includePrerelease;

	  // First reduce all whitespace as much as possible so we do not have to rely
	  // on potentially slow regexes like \s*. This is then stored and used for
	  // future error messages as well.
	  this.raw = range
	    .trim()
	    .split(/\s+/)
	    .join(' ');

	  // First, split based on boolean or ||
	  this.set = this.raw.split('||').map(function (range) {
	    return this.parseRange(range.trim())
	  }, this).filter(function (c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length
	  });

	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + this.raw)
	  }

	  this.format();
	}

	Range.prototype.format = function () {
	  this.range = this.set.map(function (comps) {
	    return comps.join(' ').trim()
	  }).join('||').trim();
	  return this.range
	};

	Range.prototype.toString = function () {
	  return this.range
	};

	Range.prototype.parseRange = function (range) {
	  var loose = this.options.loose;
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? safeRe[HYPHENRANGELOOSE] : safeRe[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(safeRe[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, safeRe[COMPARATORTRIM]);

	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(safeRe[TILDETRIM], tildeTrimReplace);

	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(safeRe[CARETTRIM], caretTrimReplace);

	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	  var compRe = loose ? safeRe[COMPARATORLOOSE] : safeRe[COMPARATOR];
	  var set = range.split(' ').map(function (comp) {
	    return parseComparator(comp, this.options)
	  }, this).join(' ').split(/\s+/);
	  if (this.options.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function (comp) {
	      return !!comp.match(compRe)
	    });
	  }
	  set = set.map(function (comp) {
	    return new Comparator(comp, this.options)
	  }, this);

	  return set
	};

	Range.prototype.intersects = function (range, options) {
	  if (!(range instanceof Range)) {
	    throw new TypeError('a Range is required')
	  }

	  return this.set.some(function (thisComparators) {
	    return thisComparators.every(function (thisComparator) {
	      return range.set.some(function (rangeComparators) {
	        return rangeComparators.every(function (rangeComparator) {
	          return thisComparator.intersects(rangeComparator, options)
	        })
	      })
	    })
	  })
	};

	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators (range, options) {
	  return new Range(range, options).set.map(function (comp) {
	    return comp.map(function (c) {
	      return c.value
	    }).join(' ').trim().split(' ')
	  })
	}

	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator (comp, options) {
	  debug('comp', comp, options);
	  comp = replaceCarets(comp, options);
	  debug('caret', comp);
	  comp = replaceTildes(comp, options);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, options);
	  debug('xrange', comp);
	  comp = replaceStars(comp, options);
	  debug('stars', comp);
	  return comp
	}

	function isX (id) {
	  return !id || id.toLowerCase() === 'x' || id === '*'
	}

	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes (comp, options) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceTilde(comp, options)
	  }).join(' ')
	}

	function replaceTilde (comp, options) {
	  var r = options.loose ? safeRe[TILDELOOSE] : safeRe[TILDE];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;

	    if (isX(M)) {
	      ret = '';
	    } else if (isX(m)) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (isX(p)) {
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    } else if (pr) {
	      debug('replaceTilde pr', pr);
	      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
	            ' <' + M + '.' + (+m + 1) + '.0';
	    } else {
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p +
	            ' <' + M + '.' + (+m + 1) + '.0';
	    }

	    debug('tilde return', ret);
	    return ret
	  })
	}

	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets (comp, options) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceCaret(comp, options)
	  }).join(' ')
	}

	function replaceCaret (comp, options) {
	  debug('caret', comp, options);
	  var r = options.loose ? safeRe[CARETLOOSE] : safeRe[CARET];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;

	    if (isX(M)) {
	      ret = '';
	    } else if (isX(m)) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (isX(p)) {
	      if (M === '0') {
	        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	      } else {
	        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	      }
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (M === '0') {
	        if (m === '0') {
	          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        } else {
	          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
	                ' <' + M + '.' + (+m + 1) + '.0';
	        }
	      } else {
	        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
	              ' <' + (+M + 1) + '.0.0';
	      }
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') {
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        } else {
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + (+m + 1) + '.0';
	        }
	      } else {
	        ret = '>=' + M + '.' + m + '.' + p +
	              ' <' + (+M + 1) + '.0.0';
	      }
	    }

	    debug('caret return', ret);
	    return ret
	  })
	}

	function replaceXRanges (comp, options) {
	  debug('replaceXRanges', comp, options);
	  return comp.split(/\s+/).map(function (comp) {
	    return replaceXRange(comp, options)
	  }).join(' ')
	}

	function replaceXRange (comp, options) {
	  comp = comp.trim();
	  var r = options.loose ? safeRe[XRANGELOOSE] : safeRe[XRANGE];
	  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;

	    if (gtlt === '=' && anyX) {
	      gtlt = '';
	    }

	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // we know patch is an x, because we have any x at all.
	      // replace X with 0
	      if (xm) {
	        m = 0;
	      }
	      p = 0;

	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) {
	          M = +M + 1;
	        } else {
	          m = +m + 1;
	        }
	      }

	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }

	    debug('xRange return', ret);

	    return ret
	  })
	}

	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars (comp, options) {
	  debug('replaceStars', comp, options);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(safeRe[STAR], '')
	}

	// This function is passed to string.replace(safeRe[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace ($0,
	  from, fM, fm, fp, fpr, fb,
	  to, tM, tm, tp, tpr, tb) {
	  if (isX(fM)) {
	    from = '';
	  } else if (isX(fm)) {
	    from = '>=' + fM + '.0.0';
	  } else if (isX(fp)) {
	    from = '>=' + fM + '.' + fm + '.0';
	  } else {
	    from = '>=' + from;
	  }

	  if (isX(tM)) {
	    to = '';
	  } else if (isX(tm)) {
	    to = '<' + (+tM + 1) + '.0.0';
	  } else if (isX(tp)) {
	    to = '<' + tM + '.' + (+tm + 1) + '.0';
	  } else if (tpr) {
	    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
	  } else {
	    to = '<=' + to;
	  }

	  return (from + ' ' + to).trim()
	}

	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function (version) {
	  if (!version) {
	    return false
	  }

	  if (typeof version === 'string') {
	    version = new SemVer(version, this.options);
	  }

	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version, this.options)) {
	      return true
	    }
	  }
	  return false
	};

	function testSet (set, version, options) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) {
	      return false
	    }
	  }

	  if (version.prerelease.length && !options.includePrerelease) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY) {
	        continue
	      }

	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch) {
	          return true
	        }
	      }
	    }

	    // Version has a -pre, but it's not one of the ones we like.
	    return false
	  }

	  return true
	}

	exports.satisfies = satisfies;
	function satisfies (version, range, options) {
	  try {
	    range = new Range(range, options);
	  } catch (er) {
	    return false
	  }
	  return range.test(version)
	}

	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying (versions, range, options) {
	  var max = null;
	  var maxSV = null;
	  try {
	    var rangeObj = new Range(range, options);
	  } catch (er) {
	    return null
	  }
	  versions.forEach(function (v) {
	    if (rangeObj.test(v)) {
	      // satisfies(v, range, options)
	      if (!max || maxSV.compare(v) === -1) {
	        // compare(max, v, true)
	        max = v;
	        maxSV = new SemVer(max, options);
	      }
	    }
	  });
	  return max
	}

	exports.minSatisfying = minSatisfying;
	function minSatisfying (versions, range, options) {
	  var min = null;
	  var minSV = null;
	  try {
	    var rangeObj = new Range(range, options);
	  } catch (er) {
	    return null
	  }
	  versions.forEach(function (v) {
	    if (rangeObj.test(v)) {
	      // satisfies(v, range, options)
	      if (!min || minSV.compare(v) === 1) {
	        // compare(min, v, true)
	        min = v;
	        minSV = new SemVer(min, options);
	      }
	    }
	  });
	  return min
	}

	exports.minVersion = minVersion;
	function minVersion (range, loose) {
	  range = new Range(range, loose);

	  var minver = new SemVer('0.0.0');
	  if (range.test(minver)) {
	    return minver
	  }

	  minver = new SemVer('0.0.0-0');
	  if (range.test(minver)) {
	    return minver
	  }

	  minver = null;
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];

	    comparators.forEach(function (comparator) {
	      // Clone to avoid manipulating the comparator's semver object.
	      var compver = new SemVer(comparator.semver.version);
	      switch (comparator.operator) {
	        case '>':
	          if (compver.prerelease.length === 0) {
	            compver.patch++;
	          } else {
	            compver.prerelease.push(0);
	          }
	          compver.raw = compver.format();
	          /* fallthrough */
	        case '':
	        case '>=':
	          if (!minver || gt(minver, compver)) {
	            minver = compver;
	          }
	          break
	        case '<':
	        case '<=':
	          /* Ignore maximum versions */
	          break
	        /* istanbul ignore next */
	        default:
	          throw new Error('Unexpected operation: ' + comparator.operator)
	      }
	    });
	  }

	  if (minver && range.test(minver)) {
	    return minver
	  }

	  return null
	}

	exports.validRange = validRange;
	function validRange (range, options) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, options).range || '*'
	  } catch (er) {
	    return null
	  }
	}

	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr (version, range, options) {
	  return outside(version, range, '<', options)
	}

	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr (version, range, options) {
	  return outside(version, range, '>', options)
	}

	exports.outside = outside;
	function outside (version, range, hilo, options) {
	  version = new SemVer(version, options);
	  range = new Range(range, options);

	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"')
	  }

	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, options)) {
	    return false
	  }

	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.

	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];

	    var high = null;
	    var low = null;

	    comparators.forEach(function (comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0');
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, options)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, options)) {
	        low = comparator;
	      }
	    });

	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false
	    }

	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) &&
	        ltefn(version, low.semver)) {
	      return false
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false
	    }
	  }
	  return true
	}

	exports.prerelease = prerelease;
	function prerelease (version, options) {
	  var parsed = parse(version, options);
	  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
	}

	exports.intersects = intersects;
	function intersects (r1, r2, options) {
	  r1 = new Range(r1, options);
	  r2 = new Range(r2, options);
	  return r1.intersects(r2)
	}

	exports.coerce = coerce;
	function coerce (version) {
	  if (version instanceof SemVer) {
	    return version
	  }

	  if (typeof version !== 'string') {
	    return null
	  }

	  var match = version.match(safeRe[COERCE]);

	  if (match == null) {
	    return null
	  }

	  return parse(match[1] +
	    '.' + (match[2] || '0') +
	    '.' + (match[3] || '0'))
	} 
} (semver$1, semver$1.exports));

var semverExports = semver$1.exports;

var semver = semverExports;

var psSupported = semver.satisfies(process.version, '^6.12.0 || >=8.0.0');

var JsonWebTokenError = JsonWebTokenError_1;
var NotBeforeError    = NotBeforeError_1;
var TokenExpiredError = TokenExpiredError_1;
var decode            = decode$1;
var timespan$1          = timespan$2;
var PS_SUPPORTED$1      = psSupported;
var jws$1               = jws$3;

var PUB_KEY_ALGS = ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512'];
var RSA_KEY_ALGS = ['RS256', 'RS384', 'RS512'];
var HS_ALGS = ['HS256', 'HS384', 'HS512'];

if (PS_SUPPORTED$1) {
  PUB_KEY_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
  RSA_KEY_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}

var verify = function (jwtString, secretOrPublicKey, options, callback) {
  if ((typeof options === 'function') && !callback) {
    callback = options;
    options = {};
  }

  if (!options) {
    options = {};
  }

  //clone this object since we are going to mutate it.
  options = Object.assign({}, options);

  var done;

  if (callback) {
    done = callback;
  } else {
    done = function(err, data) {
      if (err) throw err;
      return data;
    };
  }

  if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {
    return done(new JsonWebTokenError('clockTimestamp must be a number'));
  }

  if (options.nonce !== undefined && (typeof options.nonce !== 'string' || options.nonce.trim() === '')) {
    return done(new JsonWebTokenError('nonce must be a non-empty string'));
  }

  var clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);

  if (!jwtString){
    return done(new JsonWebTokenError('jwt must be provided'));
  }

  if (typeof jwtString !== 'string') {
    return done(new JsonWebTokenError('jwt must be a string'));
  }

  var parts = jwtString.split('.');

  if (parts.length !== 3){
    return done(new JsonWebTokenError('jwt malformed'));
  }

  var decodedToken;

  try {
    decodedToken = decode(jwtString, { complete: true });
  } catch(err) {
    return done(err);
  }

  if (!decodedToken) {
    return done(new JsonWebTokenError('invalid token'));
  }

  var header = decodedToken.header;
  var getSecret;

  if(typeof secretOrPublicKey === 'function') {
    if(!callback) {
      return done(new JsonWebTokenError('verify must be called asynchronous if secret or public key is provided as a callback'));
    }

    getSecret = secretOrPublicKey;
  }
  else {
    getSecret = function(header, secretCallback) {
      return secretCallback(null, secretOrPublicKey);
    };
  }

  return getSecret(header, function(err, secretOrPublicKey) {
    if(err) {
      return done(new JsonWebTokenError('error in secret or public key callback: ' + err.message));
    }

    var hasSignature = parts[2].trim() !== '';

    if (!hasSignature && secretOrPublicKey){
      return done(new JsonWebTokenError('jwt signature is required'));
    }

    if (hasSignature && !secretOrPublicKey) {
      return done(new JsonWebTokenError('secret or public key must be provided'));
    }

    if (!hasSignature && !options.algorithms) {
      options.algorithms = ['none'];
    }

    if (!options.algorithms) {
      options.algorithms = ~secretOrPublicKey.toString().indexOf('BEGIN CERTIFICATE') ||
        ~secretOrPublicKey.toString().indexOf('BEGIN PUBLIC KEY') ? PUB_KEY_ALGS :
        ~secretOrPublicKey.toString().indexOf('BEGIN RSA PUBLIC KEY') ? RSA_KEY_ALGS : HS_ALGS;

    }

    if (!~options.algorithms.indexOf(decodedToken.header.alg)) {
      return done(new JsonWebTokenError('invalid algorithm'));
    }

    var valid;

    try {
      valid = jws$1.verify(jwtString, decodedToken.header.alg, secretOrPublicKey);
    } catch (e) {
      return done(e);
    }

    if (!valid) {
      return done(new JsonWebTokenError('invalid signature'));
    }

    var payload = decodedToken.payload;

    if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
      if (typeof payload.nbf !== 'number') {
        return done(new JsonWebTokenError('invalid nbf value'));
      }
      if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
        return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));
      }
    }

    if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
      if (typeof payload.exp !== 'number') {
        return done(new JsonWebTokenError('invalid exp value'));
      }
      if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));
      }
    }

    if (options.audience) {
      var audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
      var target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];

      var match = target.some(function (targetAudience) {
        return audiences.some(function (audience) {
          return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
        });
      });

      if (!match) {
        return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));
      }
    }

    if (options.issuer) {
      var invalid_issuer =
              (typeof options.issuer === 'string' && payload.iss !== options.issuer) ||
              (Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1);

      if (invalid_issuer) {
        return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));
      }
    }

    if (options.subject) {
      if (payload.sub !== options.subject) {
        return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));
      }
    }

    if (options.jwtid) {
      if (payload.jti !== options.jwtid) {
        return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));
      }
    }

    if (options.nonce) {
      if (payload.nonce !== options.nonce) {
        return done(new JsonWebTokenError('jwt nonce invalid. expected: ' + options.nonce));
      }
    }

    if (options.maxAge) {
      if (typeof payload.iat !== 'number') {
        return done(new JsonWebTokenError('iat required when maxAge is specified'));
      }

      var maxAgeTimestamp = timespan$1(options.maxAge, payload.iat);
      if (typeof maxAgeTimestamp === 'undefined') {
        return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
      if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));
      }
    }

    if (options.complete === true) {
      var signature = decodedToken.signature;

      return done(null, {
        header: header,
        payload: payload,
        signature: signature
      });
    }

    return done(null, payload);
  });
};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER$2 = 1.7976931348623157e+308,
    NAN$2 = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    stringTag$1 = '[object String]',
    symbolTag$2 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$2 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$2 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$2 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$2 = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$2 = parseInt;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$6.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$6 = objectProto$6.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg$1(Object.keys, Object),
    nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray$1(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

  return value === proto;
}

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes$1(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger$2(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString$2(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty$1.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString$6.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike$6(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$2(value) ? objectToString$6.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$6(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString$2(value) {
  return typeof value == 'string' ||
    (!isArray$1(value) && isObjectLike$6(value) && objectToString$6.call(value) == stringTag$1);
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$2(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$6(value) && objectToString$6.call(value) == symbolTag$2);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$2(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$2(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER$2;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$2(value) {
  var result = toFinite$2(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$2(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$2(value)) {
    return NAN$2;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$2, '');
  var isBinary = reIsBinary$2.test(value);
  return (isBinary || reIsOctal$2.test(value))
    ? freeParseInt$2(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$2.test(value) ? NAN$2 : +value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

var lodash_includes = includes$1;

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$5 = objectProto$5.toString;

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean$1(value) {
  return value === true || value === false ||
    (isObjectLike$5(value) && objectToString$5.call(value) == boolTag);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$5(value) {
  return !!value && typeof value == 'object';
}

var lodash_isboolean = isBoolean$1;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0,
    MAX_INTEGER$1 = 1.7976931348623157e+308,
    NAN$1 = 0 / 0;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$1 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$4 = objectProto$4.toString;

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger$1(value) {
  return typeof value == 'number' && value == toInteger$1(value);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$4(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$4(value) && objectToString$4.call(value) == symbolTag$1);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$1(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER$1;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite$1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var lodash_isinteger = isInteger$1;

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$3 = objectProto$3.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$3(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber$1(value) {
  return typeof value == 'number' ||
    (isObjectLike$3(value) && objectToString$3.call(value) == numberTag);
}

var lodash_isnumber = isNumber$1;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$2.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$2.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$2(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject$1(value) {
  if (!isObjectLike$2(value) ||
      objectToString$2.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

var lodash_isplainobject = isPlainObject$1;

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString$1(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike$1(value) && objectToString$1.call(value) == stringTag);
}

var lodash_isstring = isString$1;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once$1(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_once = once$1;

var timespan = timespan$2;
var PS_SUPPORTED = psSupported;
var jws = jws$3;
var includes = lodash_includes;
var isBoolean = lodash_isboolean;
var isInteger = lodash_isinteger;
var isNumber = lodash_isnumber;
var isPlainObject = lodash_isplainobject;
var isString = lodash_isstring;
var once = lodash_once;

var SUPPORTED_ALGS = ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'HS256', 'HS384', 'HS512', 'none'];
if (PS_SUPPORTED) {
  SUPPORTED_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}

var sign_options_schema = {
  expiresIn: { isValid: function(value) { return isInteger(value) || (isString(value) && value); }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
  notBefore: { isValid: function(value) { return isInteger(value) || (isString(value) && value); }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
  audience: { isValid: function(value) { return isString(value) || Array.isArray(value); }, message: '"audience" must be a string or array' },
  algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
  header: { isValid: isPlainObject, message: '"header" must be an object' },
  encoding: { isValid: isString, message: '"encoding" must be a string' },
  issuer: { isValid: isString, message: '"issuer" must be a string' },
  subject: { isValid: isString, message: '"subject" must be a string' },
  jwtid: { isValid: isString, message: '"jwtid" must be a string' },
  noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
  keyid: { isValid: isString, message: '"keyid" must be a string' },
  mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' }
};

var registered_claims_schema = {
  iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
  exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
  nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
};

function validate(schema, allowUnknown, object, parameterName) {
  if (!isPlainObject(object)) {
    throw new Error('Expected "' + parameterName + '" to be a plain object.');
  }
  Object.keys(object)
    .forEach(function(key) {
      var validator = schema[key];
      if (!validator) {
        if (!allowUnknown) {
          throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
        }
        return;
      }
      if (!validator.isValid(object[key])) {
        throw new Error(validator.message);
      }
    });
}

function validateOptions(options) {
  return validate(sign_options_schema, false, options, 'options');
}

function validatePayload(payload) {
  return validate(registered_claims_schema, true, payload, 'payload');
}

var options_to_payload = {
  'audience': 'aud',
  'issuer': 'iss',
  'subject': 'sub',
  'jwtid': 'jti'
};

var options_for_objects = [
  'expiresIn',
  'notBefore',
  'noTimestamp',
  'audience',
  'issuer',
  'subject',
  'jwtid',
];

var sign = function (payload, secretOrPrivateKey, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else {
    options = options || {};
  }

  var isObjectPayload = typeof payload === 'object' &&
                        !Buffer.isBuffer(payload);

  var header = Object.assign({
    alg: options.algorithm || 'HS256',
    typ: isObjectPayload ? 'JWT' : undefined,
    kid: options.keyid
  }, options.header);

  function failure(err) {
    if (callback) {
      return callback(err);
    }
    throw err;
  }

  if (!secretOrPrivateKey && options.algorithm !== 'none') {
    return failure(new Error('secretOrPrivateKey must have a value'));
  }

  if (typeof payload === 'undefined') {
    return failure(new Error('payload is required'));
  } else if (isObjectPayload) {
    try {
      validatePayload(payload);
    }
    catch (error) {
      return failure(error);
    }
    if (!options.mutatePayload) {
      payload = Object.assign({},payload);
    }
  } else {
    var invalid_options = options_for_objects.filter(function (opt) {
      return typeof options[opt] !== 'undefined';
    });

    if (invalid_options.length > 0) {
      return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + (typeof payload ) + ' payload'));
    }
  }

  if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {
    return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
  }

  if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {
    return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
  }

  try {
    validateOptions(options);
  }
  catch (error) {
    return failure(error);
  }

  var timestamp = payload.iat || Math.floor(Date.now() / 1000);

  if (options.noTimestamp) {
    delete payload.iat;
  } else if (isObjectPayload) {
    payload.iat = timestamp;
  }

  if (typeof options.notBefore !== 'undefined') {
    try {
      payload.nbf = timespan(options.notBefore, timestamp);
    }
    catch (err) {
      return failure(err);
    }
    if (typeof payload.nbf === 'undefined') {
      return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }

  if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {
    try {
      payload.exp = timespan(options.expiresIn, timestamp);
    }
    catch (err) {
      return failure(err);
    }
    if (typeof payload.exp === 'undefined') {
      return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }

  Object.keys(options_to_payload).forEach(function (key) {
    var claim = options_to_payload[key];
    if (typeof options[key] !== 'undefined') {
      if (typeof payload[claim] !== 'undefined') {
        return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
      }
      payload[claim] = options[key];
    }
  });

  var encoding = options.encoding || 'utf8';

  if (typeof callback === 'function') {
    callback = callback && once(callback);

    jws.createSign({
      header: header,
      privateKey: secretOrPrivateKey,
      payload: payload,
      encoding: encoding
    }).once('error', callback)
      .once('done', function (signature) {
        callback(null, signature);
      });
  } else {
    return jws.sign({header: header, payload: payload, secret: secretOrPrivateKey, encoding: encoding});
  }
};

var jsonwebtoken = {
  decode: decode$1,
  verify: verify,
  sign: sign,
  JsonWebTokenError: JsonWebTokenError_1,
  NotBeforeError: NotBeforeError_1,
  TokenExpiredError: TokenExpiredError_1,
};

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * http methods
 */
var HttpMethod;

(function (HttpMethod) {
  HttpMethod["GET"] = "get";
  HttpMethod["POST"] = "post";
})(HttpMethod || (HttpMethod = {}));
/**
 * Constants used for region discovery
 */


const REGION_ENVIRONMENT_VARIABLE = "REGION_NAME";
/**
 * Constant used for PKCE
 */

const RANDOM_OCTET_SIZE = 32;
/**
 * Constants used in PKCE
 */

const Hash = {
  SHA256: "sha256"
};
/**
 * Constants for encoding schemes
 */

const CharSet = {
  CV_CHARSET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
};
/**
 * Constants
 */

const Constants = {
  MSAL_SKU: "msal.js.node",
  JWT_BEARER_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  AUTHORIZATION_PENDING: "authorization_pending"
};
/**
 * API Codes for Telemetry purposes.
 * Before adding a new code you must claim it in the MSAL Telemetry tracker as these number spaces are shared across all MSALs
 * 0-99 Silent Flow
 * 600-699 Device Code Flow
 * 800-899 Auth Code Flow
 */

var ApiId;

(function (ApiId) {
  ApiId[ApiId["acquireTokenSilent"] = 62] = "acquireTokenSilent";
  ApiId[ApiId["acquireTokenByUsernamePassword"] = 371] = "acquireTokenByUsernamePassword";
  ApiId[ApiId["acquireTokenByDeviceCode"] = 671] = "acquireTokenByDeviceCode";
  ApiId[ApiId["acquireTokenByClientCredential"] = 771] = "acquireTokenByClientCredential";
  ApiId[ApiId["acquireTokenByCode"] = 871] = "acquireTokenByCode";
  ApiId[ApiId["acquireTokenByRefreshToken"] = 872] = "acquireTokenByRefreshToken";
})(ApiId || (ApiId = {}));
/**
 * JWT  constants
 */


const JwtConstants = {
  ALGORITHM: "alg",
  RSA_256: "RS256",
  X5T: "x5t",
  X5C: "x5c",
  AUDIENCE: "aud",
  EXPIRATION_TIME: "exp",
  ISSUER: "iss",
  SUBJECT: "sub",
  NOT_BEFORE: "nbf",
  JWT_ID: "jti"
};

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements the API for network requests.
 */

class HttpClient {
  /**
   * Http Get request
   * @param url
   * @param options
   */
  async sendGetRequestAsync(url, options) {
    if (options != null && options.proxyUrl) {
      return networkRequestViaProxy(url, HttpMethod.GET, options);
    } else {
      return networkRequestViaHttps(url, HttpMethod.GET, options);
    }
  }
  /**
   * Http Post request
   * @param url
   * @param options
   */


  async sendPostRequestAsync(url, options, cancellationToken) {
    if (options != null && options.proxyUrl) {
      return networkRequestViaProxy(url, HttpMethod.POST, options, cancellationToken);
    } else {
      return networkRequestViaHttps(url, HttpMethod.POST, options, cancellationToken);
    }
  }

}

const networkRequestViaProxy = (url, httpMethod, options, timeout) => {
  const headers = (options == null ? void 0 : options.headers) || {};
  const proxyUrl = new URL((options == null ? void 0 : options.proxyUrl) || "");
  const destinationUrl = new URL(url); // "method: connect" must be used to establish a connection to the proxy

  const tunnelRequestOptions = {
    host: proxyUrl.hostname,
    port: proxyUrl.port,
    method: "CONNECT",
    path: destinationUrl.hostname,
    headers: headers
  };

  if (timeout) {
    tunnelRequestOptions.timeout = timeout;
  } // compose a request string for the socket


  let postRequestStringContent = "";

  if (httpMethod === HttpMethod.POST) {
    const body = (options == null ? void 0 : options.body) || "";
    postRequestStringContent = "Content-Type: application/x-www-form-urlencoded\r\n" + `Content-Length: ${body.length}\r\n` + `\r\n${body}`;
  }

  const outgoingRequestString = `${httpMethod.toUpperCase()} ${destinationUrl.href} HTTP/1.1\r\n` + `Host: ${destinationUrl.host}\r\n` + "Connection: close\r\n" + postRequestStringContent + "\r\n";
  return new Promise((resolve, reject) => {
    const request = http.request(tunnelRequestOptions);

    if (tunnelRequestOptions.timeout) {
      request.on("timeout", () => {
        request.destroy();
        reject(new Error("Request time out"));
      });
    }

    request.end(); // establish connection to the proxy

    request.on("connect", (response, socket) => {
      const statusCode = (response == null ? void 0 : response.statusCode) || 500;

      if (statusCode < 200 || statusCode > 299) {
        request.destroy();
        socket.destroy();
        reject(new Error(`HTTP status code ${statusCode}`));
      }

      if (tunnelRequestOptions.timeout) {
        socket.setTimeout(tunnelRequestOptions.timeout);
        socket.on("timeout", () => {
          request.destroy();
          socket.destroy();
          reject(new Error("Request time out"));
        });
      } // make a request over an HTTP tunnel


      socket.write(outgoingRequestString);
      const data = [];
      socket.on("data", chunk => {
        data.push(chunk);
      });
      socket.on("end", () => {
        // combine all received buffer streams into one buffer, and then into a string
        const dataString = Buffer.concat([...data]).toString(); // separate each line into it's own entry in an arry

        const dataStringArray = dataString.split("\r\n"); // the first entry will contain the statusCode

        const statusCode = parseInt(dataStringArray[0].split(" ")[1]); // the last entry will contain the body

        const body = dataStringArray[dataStringArray.length - 1]; // everything in between the first and last entries are the headers

        const headersArray = dataStringArray.slice(1, dataStringArray.length - 2); // build an object out of all the headers

        const entries = new Map();
        headersArray.forEach(header => {
          /**
           * the header might look like "Content-Length: 1531", but that is just a string
           * it needs to be converted to a key/value pair
           * split the string at the first instance of ":"
           * there may be more than one ":" if the value of the header is supposed to be a JSON object
           */
          const headerKeyValue = header.split(new RegExp(/:\s(.*)/s));
          const headerKey = headerKeyValue[0];
          let headerValue = headerKeyValue[1]; // check if the value of the header is supposed to be a JSON object

          try {
            const object = JSON.parse(headerValue); // if it is, then convert it from a string to a JSON object

            if (object && typeof object === "object") {
              headerValue = object;
            }
          } catch (e) {// otherwise, leave it as a string
          }

          entries.set(headerKey, headerValue);
        });
        const headers = Object.fromEntries(entries);
        const networkResponse = {
          headers: headers,
          body: JSON.parse(body),
          status: statusCode
        };

        if ((statusCode < 200 || statusCode > 299) && // do not destroy the request for the device code flow
        networkResponse.body["error"] !== Constants.AUTHORIZATION_PENDING) {
          request.destroy();
          socket.destroy();
          reject(new Error(`HTTP status code ${statusCode}`));
        }

        resolve(networkResponse);
      });
      socket.on("error", chunk => {
        request.destroy();
        socket.destroy();
        reject(new Error(chunk.toString()));
      });
    });
    request.on("error", chunk => {
      request.destroy();
      reject(new Error(chunk.toString()));
    });
  });
};

const networkRequestViaHttps = (url, httpMethod, options, timeout) => {
  const isPostRequest = httpMethod === HttpMethod.POST;
  const body = (options == null ? void 0 : options.body) || "";
  const emptyHeaders = {};
  const customOptions = {
    method: httpMethod,
    headers: (options == null ? void 0 : options.headers) || emptyHeaders
  };

  if (timeout) {
    customOptions.timeout = timeout;
  }

  if (isPostRequest) {
    // needed for post request to work
    customOptions.headers = { ...customOptions.headers,
      "Content-Length": body.length
    };
  }

  return new Promise((resolve, reject) => {
    const request = https.request(url, customOptions);

    if (timeout) {
      request.on("timeout", () => {
        request.destroy();
        reject(new Error("Request time out"));
      });
    }

    if (isPostRequest) {
      request.write(body);
    }

    request.end();
    request.on("response", response => {
      const headers = response.headers;
      const statusCode = response.statusCode;
      const data = [];
      response.on("data", chunk => {
        data.push(chunk);
      });
      response.on("end", () => {
        // combine all received buffer streams into one buffer, and then into a string
        const body = Buffer.concat([...data]).toString();
        const networkResponse = {
          headers: headers,
          body: JSON.parse(body),
          status: statusCode
        };

        if ((statusCode < 200 || statusCode > 299) && // do not destroy the request for the device code flow
        networkResponse.body["error"] !== Constants.AUTHORIZATION_PENDING) {
          request.destroy();
          reject(new Error(`HTTP status code ${statusCode}`));
        }

        resolve(networkResponse);
      });
    });
    request.on("error", chunk => {
      request.destroy();
      reject(new Error(chunk.toString()));
    });
  });
};

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class NetworkUtils {
  /**
   * Returns best compatible network client object.
   */
  static getNetworkClient() {
    return new HttpClient();
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const DEFAULT_AUTH_OPTIONS = {
  clientId: Constants$1.EMPTY_STRING,
  authority: Constants$1.DEFAULT_AUTHORITY,
  clientSecret: Constants$1.EMPTY_STRING,
  clientAssertion: Constants$1.EMPTY_STRING,
  clientCertificate: {
    thumbprint: Constants$1.EMPTY_STRING,
    privateKey: Constants$1.EMPTY_STRING,
    x5c: Constants$1.EMPTY_STRING
  },
  knownAuthorities: [],
  cloudDiscoveryMetadata: Constants$1.EMPTY_STRING,
  authorityMetadata: Constants$1.EMPTY_STRING,
  clientCapabilities: [],
  protocolMode: ProtocolMode.AAD,
  azureCloudOptions: {
    azureCloudInstance: AzureCloudInstance.None,
    tenant: Constants$1.EMPTY_STRING
  },
  skipAuthorityMetadataCache: false
};
const DEFAULT_CACHE_OPTIONS = {};
const DEFAULT_LOGGER_OPTIONS = {
  loggerCallback: () => {// allow users to not set logger call back
  },
  piiLoggingEnabled: false,
  logLevel: LogLevel.Info
};
const DEFAULT_SYSTEM_OPTIONS = {
  loggerOptions: DEFAULT_LOGGER_OPTIONS,
  networkClient: /*#__PURE__*/NetworkUtils.getNetworkClient(),
  proxyUrl: Constants$1.EMPTY_STRING
};
const DEFAULT_TELEMETRY_OPTIONS = {
  application: {
    appName: Constants$1.EMPTY_STRING,
    appVersion: Constants$1.EMPTY_STRING
  }
};
/**
 * Sets the default options when not explicitly configured from app developer
 *
 * @param auth - Authentication options
 * @param cache - Cache options
 * @param system - System options
 * @param telemetry - Telemetry options
 *
 * @returns Configuration
 * @public
 */

function buildAppConfiguration({
  auth,
  cache,
  system,
  telemetry
}) {
  return {
    auth: { ...DEFAULT_AUTH_OPTIONS,
      ...auth
    },
    cache: { ...DEFAULT_CACHE_OPTIONS,
      ...cache
    },
    system: { ...DEFAULT_SYSTEM_OPTIONS,
      ...system
    },
    telemetry: { ...DEFAULT_TELEMETRY_OPTIONS,
      ...telemetry
    }
  };
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class GuidGenerator {
  /**
   *
   * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or pseudo-random numbers.
   * uuidv4 generates guids from cryprtographically-string random
   */
  generateGuid() {
    return v4();
  }
  /**
   * verifies if a string is  GUID
   * @param guid
   */


  isGuid(guid) {
    const regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regexGuid.test(guid);
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class EncodingUtils {
  /**
   * 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
   * 'base64': Base64 encoding.
   *
   * @param str text
   */
  static base64Encode(str, encoding) {
    return Buffer.from(str, encoding).toString("base64");
  }
  /**
   * encode a URL
   * @param str
   */


  static base64EncodeUrl(str, encoding) {
    return EncodingUtils.base64Encode(str, encoding).replace(/=/g, Constants$1.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
  }
  /**
   * 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
   * 'base64': Base64 encoding.
   *
   * @param base64Str Base64 encoded text
   */


  static base64Decode(base64Str) {
    return Buffer.from(base64Str, "base64").toString("utf8");
  }
  /**
   * @param base64Str Base64 encoded Url
   */


  static base64DecodeUrl(base64Str) {
    let str = base64Str.replace(/-/g, "+").replace(/_/g, "/");

    while (str.length % 4) {
      str += "=";
    }

    return EncodingUtils.base64Decode(str);
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class HashUtils {
  /**
   * generate 'SHA256' hash
   * @param buffer
   */
  sha256(buffer) {
    return crypto$1.createHash(Hash.SHA256).update(buffer).digest();
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * https://tools.ietf.org/html/rfc7636#page-8
 */

class PkceGenerator {
  constructor() {
    this.hashUtils = new HashUtils();
  }
  /**
   * generates the codeVerfier and the challenge from the codeVerfier
   * reference: https://tools.ietf.org/html/rfc7636#section-4.1 and https://tools.ietf.org/html/rfc7636#section-4.2
   */


  async generatePkceCodes() {
    const verifier = this.generateCodeVerifier();
    const challenge = this.generateCodeChallengeFromVerifier(verifier);
    return {
      verifier,
      challenge
    };
  }
  /**
   * generates the codeVerfier; reference: https://tools.ietf.org/html/rfc7636#section-4.1
   */


  generateCodeVerifier() {
    const charArr = [];
    const maxNumber = 256 - 256 % CharSet.CV_CHARSET.length;

    while (charArr.length <= RANDOM_OCTET_SIZE) {
      const byte = crypto$1.randomBytes(1)[0];

      if (byte >= maxNumber) {
        /*
         * Ignore this number to maintain randomness.
         * Including it would result in an unequal distribution of characters after doing the modulo
         */
        continue;
      }

      const index = byte % CharSet.CV_CHARSET.length;
      charArr.push(CharSet.CV_CHARSET[index]);
    }

    const verifier = charArr.join(Constants$1.EMPTY_STRING);
    return EncodingUtils.base64EncodeUrl(verifier);
  }
  /**
   * generate the challenge from the codeVerfier; reference: https://tools.ietf.org/html/rfc7636#section-4.2
   * @param codeVerifier
   */


  generateCodeChallengeFromVerifier(codeVerifier) {
    return EncodingUtils.base64EncodeUrl(this.hashUtils.sha256(codeVerifier).toString("base64"), "base64");
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements MSAL node's crypto interface, which allows it to perform base64 encoding and decoding, generating cryptographically random GUIDs and
 * implementing Proof Key for Code Exchange specs for the OAuth Authorization Code Flow using PKCE (rfc here: https://tools.ietf.org/html/rfc7636).
 * @public
 */

class CryptoProvider {
  constructor() {
    // Browser crypto needs to be validated first before any other classes can be set.
    this.pkceGenerator = new PkceGenerator();
    this.guidGenerator = new GuidGenerator();
    this.hashUtils = new HashUtils();
  }
  /**
   * Creates a new random GUID - used to populate state and nonce.
   * @returns string (GUID)
   */


  createNewGuid() {
    return this.guidGenerator.generateGuid();
  }
  /**
   * Encodes input string to base64.
   * @param input - string to be encoded
   */


  base64Encode(input) {
    return EncodingUtils.base64Encode(input);
  }
  /**
   * Decodes input string from base64.
   * @param input - string to be decoded
   */


  base64Decode(input) {
    return EncodingUtils.base64Decode(input);
  }
  /**
   * Generates PKCE codes used in Authorization Code Flow.
   */


  generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  }
  /**
   * Generates a keypair, stores it and returns a thumbprint - not yet implemented for node
   */


  getPublicKeyThumbprint() {
    throw new Error("Method not implemented.");
  }
  /**
   * Removes cryptographic keypair from key store matching the keyId passed in
   * @param kid
   */


  removeTokenBindingKey() {
    throw new Error("Method not implemented.");
  }
  /**
   * Removes all cryptographic keys from Keystore
   */


  clearKeystore() {
    throw new Error("Method not implemented.");
  }
  /**
   * Signs the given object as a jwt payload with private key retrieved by given kid - currently not implemented for node
   */


  signJwt() {
    throw new Error("Method not implemented.");
  }
  /**
   * Returns the SHA-256 hash of an input string
   */


  async hashString(plainText) {
    return EncodingUtils.base64EncodeUrl(this.hashUtils.sha256(plainText).toString("base64"), "base64");
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class deserializes cache entities read from the file into in memory object types defined internally
 */

class Deserializer {
  /**
   * Parse the JSON blob in memory and deserialize the content
   * @param cachedJson
   */
  static deserializeJSONBlob(jsonFile) {
    const deserializedCache = StringUtils.isEmpty(jsonFile) ? {} : JSON.parse(jsonFile);
    return deserializedCache;
  }
  /**
   * Deserializes accounts to AccountEntity objects
   * @param accounts
   */


  static deserializeAccounts(accounts) {
    const accountObjects = {};

    if (accounts) {
      Object.keys(accounts).map(function (key) {
        const serializedAcc = accounts[key];
        const mappedAcc = {
          homeAccountId: serializedAcc.home_account_id,
          environment: serializedAcc.environment,
          realm: serializedAcc.realm,
          localAccountId: serializedAcc.local_account_id,
          username: serializedAcc.username,
          authorityType: serializedAcc.authority_type,
          name: serializedAcc.name,
          clientInfo: serializedAcc.client_info,
          lastModificationTime: serializedAcc.last_modification_time,
          lastModificationApp: serializedAcc.last_modification_app
        };
        const account = new AccountEntity();
        CacheManager.toObject(account, mappedAcc);
        accountObjects[key] = account;
      });
    }

    return accountObjects;
  }
  /**
   * Deserializes id tokens to IdTokenEntity objects
   * @param idTokens
   */


  static deserializeIdTokens(idTokens) {
    const idObjects = {};

    if (idTokens) {
      Object.keys(idTokens).map(function (key) {
        const serializedIdT = idTokens[key];
        const mappedIdT = {
          homeAccountId: serializedIdT.home_account_id,
          environment: serializedIdT.environment,
          credentialType: serializedIdT.credential_type,
          clientId: serializedIdT.client_id,
          secret: serializedIdT.secret,
          realm: serializedIdT.realm
        };
        const idToken = new IdTokenEntity();
        CacheManager.toObject(idToken, mappedIdT);
        idObjects[key] = idToken;
      });
    }

    return idObjects;
  }
  /**
   * Deserializes access tokens to AccessTokenEntity objects
   * @param accessTokens
   */


  static deserializeAccessTokens(accessTokens) {
    const atObjects = {};

    if (accessTokens) {
      Object.keys(accessTokens).map(function (key) {
        const serializedAT = accessTokens[key];
        const mappedAT = {
          homeAccountId: serializedAT.home_account_id,
          environment: serializedAT.environment,
          credentialType: serializedAT.credential_type,
          clientId: serializedAT.client_id,
          secret: serializedAT.secret,
          realm: serializedAT.realm,
          target: serializedAT.target,
          cachedAt: serializedAT.cached_at,
          expiresOn: serializedAT.expires_on,
          extendedExpiresOn: serializedAT.extended_expires_on,
          refreshOn: serializedAT.refresh_on,
          keyId: serializedAT.key_id,
          tokenType: serializedAT.token_type,
          requestedClaims: serializedAT.requestedClaims,
          requestedClaimsHash: serializedAT.requestedClaimsHash
        };
        const accessToken = new AccessTokenEntity();
        CacheManager.toObject(accessToken, mappedAT);
        atObjects[key] = accessToken;
      });
    }

    return atObjects;
  }
  /**
   * Deserializes refresh tokens to RefreshTokenEntity objects
   * @param refreshTokens
   */


  static deserializeRefreshTokens(refreshTokens) {
    const rtObjects = {};

    if (refreshTokens) {
      Object.keys(refreshTokens).map(function (key) {
        const serializedRT = refreshTokens[key];
        const mappedRT = {
          homeAccountId: serializedRT.home_account_id,
          environment: serializedRT.environment,
          credentialType: serializedRT.credential_type,
          clientId: serializedRT.client_id,
          secret: serializedRT.secret,
          familyId: serializedRT.family_id,
          target: serializedRT.target,
          realm: serializedRT.realm
        };
        const refreshToken = new RefreshTokenEntity();
        CacheManager.toObject(refreshToken, mappedRT);
        rtObjects[key] = refreshToken;
      });
    }

    return rtObjects;
  }
  /**
   * Deserializes appMetadata to AppMetaData objects
   * @param appMetadata
   */


  static deserializeAppMetadata(appMetadata) {
    const appMetadataObjects = {};

    if (appMetadata) {
      Object.keys(appMetadata).map(function (key) {
        const serializedAmdt = appMetadata[key];
        const mappedAmd = {
          clientId: serializedAmdt.client_id,
          environment: serializedAmdt.environment,
          familyId: serializedAmdt.family_id
        };
        const amd = new AppMetadataEntity();
        CacheManager.toObject(amd, mappedAmd);
        appMetadataObjects[key] = amd;
      });
    }

    return appMetadataObjects;
  }
  /**
   * Deserialize an inMemory Cache
   * @param jsonCache
   */


  static deserializeAllCache(jsonCache) {
    return {
      accounts: jsonCache.Account ? this.deserializeAccounts(jsonCache.Account) : {},
      idTokens: jsonCache.IdToken ? this.deserializeIdTokens(jsonCache.IdToken) : {},
      accessTokens: jsonCache.AccessToken ? this.deserializeAccessTokens(jsonCache.AccessToken) : {},
      refreshTokens: jsonCache.RefreshToken ? this.deserializeRefreshTokens(jsonCache.RefreshToken) : {},
      appMetadata: jsonCache.AppMetadata ? this.deserializeAppMetadata(jsonCache.AppMetadata) : {}
    };
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Serializer {
  /**
   * serialize the JSON blob
   * @param data
   */
  static serializeJSONBlob(data) {
    return JSON.stringify(data);
  }
  /**
   * Serialize Accounts
   * @param accCache
   */


  static serializeAccounts(accCache) {
    const accounts = {};
    Object.keys(accCache).map(function (key) {
      const accountEntity = accCache[key];
      accounts[key] = {
        home_account_id: accountEntity.homeAccountId,
        environment: accountEntity.environment,
        realm: accountEntity.realm,
        local_account_id: accountEntity.localAccountId,
        username: accountEntity.username,
        authority_type: accountEntity.authorityType,
        name: accountEntity.name,
        client_info: accountEntity.clientInfo,
        last_modification_time: accountEntity.lastModificationTime,
        last_modification_app: accountEntity.lastModificationApp
      };
    });
    return accounts;
  }
  /**
   * Serialize IdTokens
   * @param idTCache
   */


  static serializeIdTokens(idTCache) {
    const idTokens = {};
    Object.keys(idTCache).map(function (key) {
      const idTEntity = idTCache[key];
      idTokens[key] = {
        home_account_id: idTEntity.homeAccountId,
        environment: idTEntity.environment,
        credential_type: idTEntity.credentialType,
        client_id: idTEntity.clientId,
        secret: idTEntity.secret,
        realm: idTEntity.realm
      };
    });
    return idTokens;
  }
  /**
   * Serializes AccessTokens
   * @param atCache
   */


  static serializeAccessTokens(atCache) {
    const accessTokens = {};
    Object.keys(atCache).map(function (key) {
      const atEntity = atCache[key];
      accessTokens[key] = {
        home_account_id: atEntity.homeAccountId,
        environment: atEntity.environment,
        credential_type: atEntity.credentialType,
        client_id: atEntity.clientId,
        secret: atEntity.secret,
        realm: atEntity.realm,
        target: atEntity.target,
        cached_at: atEntity.cachedAt,
        expires_on: atEntity.expiresOn,
        extended_expires_on: atEntity.extendedExpiresOn,
        refresh_on: atEntity.refreshOn,
        key_id: atEntity.keyId,
        token_type: atEntity.tokenType,
        requestedClaims: atEntity.requestedClaims,
        requestedClaimsHash: atEntity.requestedClaimsHash
      };
    });
    return accessTokens;
  }
  /**
   * Serialize refreshTokens
   * @param rtCache
   */


  static serializeRefreshTokens(rtCache) {
    const refreshTokens = {};
    Object.keys(rtCache).map(function (key) {
      const rtEntity = rtCache[key];
      refreshTokens[key] = {
        home_account_id: rtEntity.homeAccountId,
        environment: rtEntity.environment,
        credential_type: rtEntity.credentialType,
        client_id: rtEntity.clientId,
        secret: rtEntity.secret,
        family_id: rtEntity.familyId,
        target: rtEntity.target,
        realm: rtEntity.realm
      };
    });
    return refreshTokens;
  }
  /**
   * Serialize amdtCache
   * @param amdtCache
   */


  static serializeAppMetadata(amdtCache) {
    const appMetadata = {};
    Object.keys(amdtCache).map(function (key) {
      const amdtEntity = amdtCache[key];
      appMetadata[key] = {
        client_id: amdtEntity.clientId,
        environment: amdtEntity.environment,
        family_id: amdtEntity.familyId
      };
    });
    return appMetadata;
  }
  /**
   * Serialize the cache
   * @param jsonContent
   */


  static serializeAllCache(inMemCache) {
    return {
      Account: this.serializeAccounts(inMemCache.accounts),
      IdToken: this.serializeIdTokens(inMemCache.idTokens),
      AccessToken: this.serializeAccessTokens(inMemCache.accessTokens),
      RefreshToken: this.serializeRefreshTokens(inMemCache.refreshTokens),
      AppMetadata: this.serializeAppMetadata(inMemCache.appMetadata)
    };
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements Storage for node, reading cache from user specified storage location or an  extension library
 * @public
 */

class NodeStorage extends CacheManager {
  constructor(logger, clientId, cryptoImpl) {
    super(clientId, cryptoImpl);
    this.cache = {};
    this.changeEmitters = [];
    this.logger = logger;
  }
  /**
   * Queue up callbacks
   * @param func - a callback function for cache change indication
   */


  registerChangeEmitter(func) {
    this.changeEmitters.push(func);
  }
  /**
   * Invoke the callback when cache changes
   */


  emitChange() {
    this.changeEmitters.forEach(func => func.call(null));
  }
  /**
   * Converts cacheKVStore to InMemoryCache
   * @param cache - key value store
   */


  cacheToInMemoryCache(cache) {
    const inMemoryCache = {
      accounts: {},
      idTokens: {},
      accessTokens: {},
      refreshTokens: {},
      appMetadata: {}
    };

    for (const key in cache) {
      if (cache[key] instanceof AccountEntity) {
        inMemoryCache.accounts[key] = cache[key];
      } else if (cache[key] instanceof IdTokenEntity) {
        inMemoryCache.idTokens[key] = cache[key];
      } else if (cache[key] instanceof AccessTokenEntity) {
        inMemoryCache.accessTokens[key] = cache[key];
      } else if (cache[key] instanceof RefreshTokenEntity) {
        inMemoryCache.refreshTokens[key] = cache[key];
      } else if (cache[key] instanceof AppMetadataEntity) {
        inMemoryCache.appMetadata[key] = cache[key];
      } else {
        continue;
      }
    }

    return inMemoryCache;
  }
  /**
   * converts inMemoryCache to CacheKVStore
   * @param inMemoryCache - kvstore map for inmemory
   */


  inMemoryCacheToCache(inMemoryCache) {
    // convert in memory cache to a flat Key-Value map
    let cache = this.getCache();
    cache = { ...cache,
      ...inMemoryCache.accounts,
      ...inMemoryCache.idTokens,
      ...inMemoryCache.accessTokens,
      ...inMemoryCache.refreshTokens,
      ...inMemoryCache.appMetadata
    }; // convert in memory cache to a flat Key-Value map

    return cache;
  }
  /**
   * gets the current in memory cache for the client
   */


  getInMemoryCache() {
    this.logger.trace("Getting in-memory cache"); // convert the cache key value store to inMemoryCache

    const inMemoryCache = this.cacheToInMemoryCache(this.getCache());
    return inMemoryCache;
  }
  /**
   * sets the current in memory cache for the client
   * @param inMemoryCache - key value map in memory
   */


  setInMemoryCache(inMemoryCache) {
    this.logger.trace("Setting in-memory cache"); // convert and append the inMemoryCache to cacheKVStore

    const cache = this.inMemoryCacheToCache(inMemoryCache);
    this.setCache(cache);
    this.emitChange();
  }
  /**
   * get the current cache key-value store
   */


  getCache() {
    this.logger.trace("Getting cache key-value store");
    return this.cache;
  }
  /**
   * sets the current cache (key value store)
   * @param cacheMap - key value map
   */


  setCache(cache) {
    this.logger.trace("Setting cache key value store");
    this.cache = cache; // mark change in cache

    this.emitChange();
  }
  /**
   * Gets cache item with given key.
   * @param key - lookup key for the cache entry
   */


  getItem(key) {
    this.logger.tracePii(`Item key: ${key}`); // read cache

    const cache = this.getCache();
    return cache[key];
  }
  /**
   * Gets cache item with given key-value
   * @param key - lookup key for the cache entry
   * @param value - value of the cache entry
   */


  setItem(key, value) {
    this.logger.tracePii(`Item key: ${key}`); // read cache

    const cache = this.getCache();
    cache[key] = value; // write to cache

    this.setCache(cache);
  }
  /**
   * fetch the account entity
   * @param accountKey - lookup key to fetch cache type AccountEntity
   */


  getAccount(accountKey) {
    const account = this.getItem(accountKey);

    if (AccountEntity.isAccountEntity(account)) {
      return account;
    }

    return null;
  }
  /**
   * set account entity
   * @param account - cache value to be set of type AccountEntity
   */


  setAccount(account) {
    const accountKey = account.generateAccountKey();
    this.setItem(accountKey, account);
  }
  /**
   * fetch the idToken credential
   * @param idTokenKey - lookup key to fetch cache type IdTokenEntity
   */


  getIdTokenCredential(idTokenKey) {
    const idToken = this.getItem(idTokenKey);

    if (IdTokenEntity.isIdTokenEntity(idToken)) {
      return idToken;
    }

    return null;
  }
  /**
   * set idToken credential
   * @param idToken - cache value to be set of type IdTokenEntity
   */


  setIdTokenCredential(idToken) {
    const idTokenKey = idToken.generateCredentialKey();
    this.setItem(idTokenKey, idToken);
  }
  /**
   * fetch the accessToken credential
   * @param accessTokenKey - lookup key to fetch cache type AccessTokenEntity
   */


  getAccessTokenCredential(accessTokenKey) {
    const accessToken = this.getItem(accessTokenKey);

    if (AccessTokenEntity.isAccessTokenEntity(accessToken)) {
      return accessToken;
    }

    return null;
  }
  /**
   * set accessToken credential
   * @param accessToken -  cache value to be set of type AccessTokenEntity
   */


  setAccessTokenCredential(accessToken) {
    const accessTokenKey = accessToken.generateCredentialKey();
    this.setItem(accessTokenKey, accessToken);
  }
  /**
   * fetch the refreshToken credential
   * @param refreshTokenKey - lookup key to fetch cache type RefreshTokenEntity
   */


  getRefreshTokenCredential(refreshTokenKey) {
    const refreshToken = this.getItem(refreshTokenKey);

    if (RefreshTokenEntity.isRefreshTokenEntity(refreshToken)) {
      return refreshToken;
    }

    return null;
  }
  /**
   * set refreshToken credential
   * @param refreshToken - cache value to be set of type RefreshTokenEntity
   */


  setRefreshTokenCredential(refreshToken) {
    const refreshTokenKey = refreshToken.generateCredentialKey();
    this.setItem(refreshTokenKey, refreshToken);
  }
  /**
   * fetch appMetadata entity from the platform cache
   * @param appMetadataKey - lookup key to fetch cache type AppMetadataEntity
   */


  getAppMetadata(appMetadataKey) {
    const appMetadata = this.getItem(appMetadataKey);

    if (AppMetadataEntity.isAppMetadataEntity(appMetadataKey, appMetadata)) {
      return appMetadata;
    }

    return null;
  }
  /**
   * set appMetadata entity to the platform cache
   * @param appMetadata - cache value to be set of type AppMetadataEntity
   */


  setAppMetadata(appMetadata) {
    const appMetadataKey = appMetadata.generateAppMetadataKey();
    this.setItem(appMetadataKey, appMetadata);
  }
  /**
   * fetch server telemetry entity from the platform cache
   * @param serverTelemetrykey - lookup key to fetch cache type ServerTelemetryEntity
   */


  getServerTelemetry(serverTelemetrykey) {
    const serverTelemetryEntity = this.getItem(serverTelemetrykey);

    if (serverTelemetryEntity && ServerTelemetryEntity.isServerTelemetryEntity(serverTelemetrykey, serverTelemetryEntity)) {
      return serverTelemetryEntity;
    }

    return null;
  }
  /**
   * set server telemetry entity to the platform cache
   * @param serverTelemetryKey - lookup key to fetch cache type ServerTelemetryEntity
   * @param serverTelemetry - cache value to be set of type ServerTelemetryEntity
   */


  setServerTelemetry(serverTelemetryKey, serverTelemetry) {
    this.setItem(serverTelemetryKey, serverTelemetry);
  }
  /**
   * fetch authority metadata entity from the platform cache
   * @param key - lookup key to fetch cache type AuthorityMetadataEntity
   */


  getAuthorityMetadata(key) {
    const authorityMetadataEntity = this.getItem(key);

    if (authorityMetadataEntity && AuthorityMetadataEntity.isAuthorityMetadataEntity(key, authorityMetadataEntity)) {
      return authorityMetadataEntity;
    }

    return null;
  }
  /**
   * Get all authority metadata keys
   */


  getAuthorityMetadataKeys() {
    return this.getKeys().filter(key => {
      return this.isAuthorityMetadata(key);
    });
  }
  /**
   * set authority metadata entity to the platform cache
   * @param key - lookup key to fetch cache type AuthorityMetadataEntity
   * @param metadata - cache value to be set of type AuthorityMetadataEntity
   */


  setAuthorityMetadata(key, metadata) {
    this.setItem(key, metadata);
  }
  /**
   * fetch throttling entity from the platform cache
   * @param throttlingCacheKey - lookup key to fetch cache type ThrottlingEntity
   */


  getThrottlingCache(throttlingCacheKey) {
    const throttlingCache = this.getItem(throttlingCacheKey);

    if (throttlingCache && ThrottlingEntity.isThrottlingEntity(throttlingCacheKey, throttlingCache)) {
      return throttlingCache;
    }

    return null;
  }
  /**
   * set throttling entity to the platform cache
   * @param throttlingCacheKey - lookup key to fetch cache type ThrottlingEntity
   * @param throttlingCache - cache value to be set of type ThrottlingEntity
   */


  setThrottlingCache(throttlingCacheKey, throttlingCache) {
    this.setItem(throttlingCacheKey, throttlingCache);
  }
  /**
   * Removes the cache item from memory with the given key.
   * @param key - lookup key to remove a cache entity
   * @param inMemory - key value map of the cache
   */


  removeItem(key) {
    this.logger.tracePii(`Item key: ${key}`); // read inMemoryCache

    let result = false;
    const cache = this.getCache();

    if (!!cache[key]) {
      delete cache[key];
      result = true;
    } // write to the cache after removal


    if (result) {
      this.setCache(cache);
      this.emitChange();
    }

    return result;
  }
  /**
   * Checks whether key is in cache.
   * @param key - look up key for a cache entity
   */


  containsKey(key) {
    return this.getKeys().includes(key);
  }
  /**
   * Gets all keys in window.
   */


  getKeys() {
    this.logger.trace("Retrieving all cache keys"); // read cache

    const cache = this.getCache();
    return [...Object.keys(cache)];
  }
  /**
   * Clears all cache entries created by MSAL (except tokens).
   */


  async clear() {
    this.logger.trace("Clearing cache entries created by MSAL"); // read inMemoryCache

    const cacheKeys = this.getKeys(); // delete each element

    cacheKeys.forEach(key => {
      this.removeItem(key);
    });
    this.emitChange();
  }
  /**
   * Initialize in memory cache from an exisiting cache vault
   * @param cache - blob formatted cache (JSON)
   */


  static generateInMemoryCache(cache) {
    return Deserializer.deserializeAllCache(Deserializer.deserializeJSONBlob(cache));
  }
  /**
   * retrieves the final JSON
   * @param inMemoryCache - itemised cache read from the JSON
   */


  static generateJsonCache(inMemoryCache) {
    return Serializer.serializeAllCache(inMemoryCache);
  }
  /**
   * Updates a credential's cache key if the current cache key is outdated
   */


  updateCredentialCacheKey(currentCacheKey, credential) {
    const updatedCacheKey = credential.generateCredentialKey();

    if (currentCacheKey !== updatedCacheKey) {
      const cacheItem = this.getItem(currentCacheKey);

      if (cacheItem) {
        this.removeItem(currentCacheKey);
        this.setItem(updatedCacheKey, cacheItem);
        this.logger.verbose(`Updated an outdated ${credential.credentialType} cache key`);
        return updatedCacheKey;
      } else {
        this.logger.error(`Attempted to update an outdated ${credential.credentialType} cache key but no item matching the outdated key was found in storage`);
      }
    }

    return currentCacheKey;
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const defaultSerializedCache = {
  Account: {},
  IdToken: {},
  AccessToken: {},
  RefreshToken: {},
  AppMetadata: {}
};
/**
 * In-memory token cache manager
 * @public
 */

class TokenCache {
  constructor(storage, logger, cachePlugin) {
    this.cacheHasChanged = false;
    this.storage = storage;
    this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this));

    if (cachePlugin) {
      this.persistence = cachePlugin;
    }

    this.logger = logger;
  }
  /**
   * Set to true if cache state has changed since last time serialize or writeToPersistence was called
   */


  hasChanged() {
    return this.cacheHasChanged;
  }
  /**
   * Serializes in memory cache to JSON
   */


  serialize() {
    this.logger.trace("Serializing in-memory cache");
    let finalState = Serializer.serializeAllCache(this.storage.getInMemoryCache()); // if cacheSnapshot not null or empty, merge

    if (!StringUtils.isEmpty(this.cacheSnapshot)) {
      this.logger.trace("Reading cache snapshot from disk");
      finalState = this.mergeState(JSON.parse(this.cacheSnapshot), finalState);
    } else {
      this.logger.trace("No cache snapshot to merge");
    }

    this.cacheHasChanged = false;
    return JSON.stringify(finalState);
  }
  /**
   * Deserializes JSON to in-memory cache. JSON should be in MSAL cache schema format
   * @param cache - blob formatted cache
   */


  deserialize(cache) {
    this.logger.trace("Deserializing JSON to in-memory cache");
    this.cacheSnapshot = cache;

    if (!StringUtils.isEmpty(this.cacheSnapshot)) {
      this.logger.trace("Reading cache snapshot from disk");
      const deserializedCache = Deserializer.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
      this.storage.setInMemoryCache(deserializedCache);
    } else {
      this.logger.trace("No cache snapshot to deserialize");
    }
  }
  /**
   * Fetches the cache key-value map
   */


  getKVStore() {
    return this.storage.getCache();
  }
  /**
   * API that retrieves all accounts currently in cache to the user
   */


  async getAllAccounts() {
    this.logger.trace("getAllAccounts called");
    let cacheContext;

    try {
      if (this.persistence) {
        cacheContext = new TokenCacheContext(this, false);
        await this.persistence.beforeCacheAccess(cacheContext);
      }

      return this.storage.getAllAccounts();
    } finally {
      if (this.persistence && cacheContext) {
        await this.persistence.afterCacheAccess(cacheContext);
      }
    }
  }
  /**
   * Returns the signed in account matching homeAccountId.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found
   * @param homeAccountId - unique identifier for an account (uid.utid)
   */


  async getAccountByHomeId(homeAccountId) {
    const allAccounts = await this.getAllAccounts();

    if (!StringUtils.isEmpty(homeAccountId) && allAccounts && allAccounts.length) {
      return allAccounts.filter(accountObj => accountObj.homeAccountId === homeAccountId)[0] || null;
    } else {
      return null;
    }
  }
  /**
   * Returns the signed in account matching localAccountId.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found
   * @param localAccountId - unique identifier of an account (sub/obj when homeAccountId cannot be populated)
   */


  async getAccountByLocalId(localAccountId) {
    const allAccounts = await this.getAllAccounts();

    if (!StringUtils.isEmpty(localAccountId) && allAccounts && allAccounts.length) {
      return allAccounts.filter(accountObj => accountObj.localAccountId === localAccountId)[0] || null;
    } else {
      return null;
    }
  }
  /**
   * API to remove a specific account and the relevant data from cache
   * @param account - AccountInfo passed by the user
   */


  async removeAccount(account) {
    this.logger.trace("removeAccount called");
    let cacheContext;

    try {
      if (this.persistence) {
        cacheContext = new TokenCacheContext(this, true);
        await this.persistence.beforeCacheAccess(cacheContext);
      }

      await this.storage.removeAccount(AccountEntity.generateAccountCacheKey(account));
    } finally {
      if (this.persistence && cacheContext) {
        await this.persistence.afterCacheAccess(cacheContext);
      }
    }
  }
  /**
   * Called when the cache has changed state.
   */


  handleChangeEvent() {
    this.cacheHasChanged = true;
  }
  /**
   * Merge in memory cache with the cache snapshot.
   * @param oldState - cache before changes
   * @param currentState - current cache state in the library
   */


  mergeState(oldState, currentState) {
    this.logger.trace("Merging in-memory cache with cache snapshot");
    const stateAfterRemoval = this.mergeRemovals(oldState, currentState);
    return this.mergeUpdates(stateAfterRemoval, currentState);
  }
  /**
   * Deep update of oldState based on newState values
   * @param oldState - cache before changes
   * @param newState - updated cache
   */


  mergeUpdates(oldState, newState) {
    Object.keys(newState).forEach(newKey => {
      const newValue = newState[newKey]; // if oldState does not contain value but newValue does, add it

      if (!oldState.hasOwnProperty(newKey)) {
        if (newValue !== null) {
          oldState[newKey] = newValue;
        }
      } else {
        // both oldState and newState contain the key, do deep update
        const newValueNotNull = newValue !== null;
        const newValueIsObject = typeof newValue === "object";
        const newValueIsNotArray = !Array.isArray(newValue);
        const oldStateNotUndefinedOrNull = typeof oldState[newKey] !== "undefined" && oldState[newKey] !== null;

        if (newValueNotNull && newValueIsObject && newValueIsNotArray && oldStateNotUndefinedOrNull) {
          this.mergeUpdates(oldState[newKey], newValue);
        } else {
          oldState[newKey] = newValue;
        }
      }
    });
    return oldState;
  }
  /**
   * Removes entities in oldState that the were removed from newState. If there are any unknown values in root of
   * oldState that are not recognized, they are left untouched.
   * @param oldState - cache before changes
   * @param newState - updated cache
   */


  mergeRemovals(oldState, newState) {
    this.logger.trace("Remove updated entries in cache");
    const accounts = oldState.Account ? this.mergeRemovalsDict(oldState.Account, newState.Account) : oldState.Account;
    const accessTokens = oldState.AccessToken ? this.mergeRemovalsDict(oldState.AccessToken, newState.AccessToken) : oldState.AccessToken;
    const refreshTokens = oldState.RefreshToken ? this.mergeRemovalsDict(oldState.RefreshToken, newState.RefreshToken) : oldState.RefreshToken;
    const idTokens = oldState.IdToken ? this.mergeRemovalsDict(oldState.IdToken, newState.IdToken) : oldState.IdToken;
    const appMetadata = oldState.AppMetadata ? this.mergeRemovalsDict(oldState.AppMetadata, newState.AppMetadata) : oldState.AppMetadata;
    return { ...oldState,
      Account: accounts,
      AccessToken: accessTokens,
      RefreshToken: refreshTokens,
      IdToken: idTokens,
      AppMetadata: appMetadata
    };
  }
  /**
   * Helper to merge new cache with the old one
   * @param oldState - cache before changes
   * @param newState - updated cache
   */


  mergeRemovalsDict(oldState, newState) {
    const finalState = { ...oldState
    };
    Object.keys(oldState).forEach(oldKey => {
      if (!newState || !newState.hasOwnProperty(oldKey)) {
        delete finalState[oldKey];
      }
    });
    return finalState;
  }
  /**
   * Helper to overlay as a part of cache merge
   * @param passedInCache - cache read from the blob
   */


  overlayDefaults(passedInCache) {
    this.logger.trace("Overlaying input cache with the default cache");
    return {
      Account: { ...defaultSerializedCache.Account,
        ...passedInCache.Account
      },
      IdToken: { ...defaultSerializedCache.IdToken,
        ...passedInCache.IdToken
      },
      AccessToken: { ...defaultSerializedCache.AccessToken,
        ...passedInCache.AccessToken
      },
      RefreshToken: { ...defaultSerializedCache.RefreshToken,
        ...passedInCache.RefreshToken
      },
      AppMetadata: { ...defaultSerializedCache.AppMetadata,
        ...passedInCache.AppMetadata
      }
    };
  }

}

/* eslint-disable header/header */
const name = "@azure/msal-node";
const version = "1.12.0";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base abstract class for all ClientApplications - public and confidential
 * @public
 */

class ClientApplication {
  /**
   * Constructor for the ClientApplication
   */
  constructor(configuration) {
    this.config = buildAppConfiguration(configuration);
    this.cryptoProvider = new CryptoProvider();
    this.logger = new Logger(this.config.system.loggerOptions, name, version);
    this.storage = new NodeStorage(this.logger, this.config.auth.clientId, this.cryptoProvider);
    this.tokenCache = new TokenCache(this.storage, this.logger, this.config.cache.cachePlugin);
  }
  /**
   * Creates the URL of the authorization request, letting the user input credentials and consent to the
   * application. The URL targets the /authorize endpoint of the authority configured in the
   * application object.
   *
   * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
   * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
   * `acquireTokenByCode(AuthorizationCodeRequest)`.
   */


  async getAuthCodeUrl(request) {
    this.logger.info("getAuthCodeUrl called", request.correlationId);
    const validRequest = { ...request,
      ...(await this.initializeBaseRequest(request)),
      responseMode: request.responseMode || ResponseMode.QUERY,
      authenticationScheme: AuthenticationScheme.BEARER
    };
    const authClientConfig = await this.buildOauthClientConfiguration(validRequest.authority, validRequest.correlationId, undefined, undefined, request.azureCloudOptions);
    const authorizationCodeClient = new AuthorizationCodeClient(authClientConfig);
    this.logger.verbose("Auth code client created", validRequest.correlationId);
    return authorizationCodeClient.getAuthCodeUrl(validRequest);
  }
  /**
   * Acquires a token by exchanging the Authorization Code received from the first step of OAuth2.0
   * Authorization Code flow.
   *
   * `getAuthCodeUrl(AuthorizationCodeUrlRequest)` can be used to create the URL for the first step of OAuth2.0
   * Authorization Code flow. Ensure that values for redirectUri and scopes in AuthorizationCodeUrlRequest and
   * AuthorizationCodeRequest are the same.
   */


  async acquireTokenByCode(request, authCodePayLoad) {
    this.logger.info("acquireTokenByCode called", request.correlationId);
    const validRequest = { ...request,
      ...(await this.initializeBaseRequest(request)),
      authenticationScheme: AuthenticationScheme.BEARER
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByCode, validRequest.correlationId);

    try {
      const authClientConfig = await this.buildOauthClientConfiguration(validRequest.authority, validRequest.correlationId, serverTelemetryManager, undefined, request.azureCloudOptions);
      const authorizationCodeClient = new AuthorizationCodeClient(authClientConfig);
      this.logger.verbose("Auth code client created", validRequest.correlationId);
      return authorizationCodeClient.acquireToken(validRequest, authCodePayLoad);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }

      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    }
  }
  /**
   * Acquires a token by exchanging the refresh token provided for a new set of tokens.
   *
   * This API is provided only for scenarios where you would like to migrate from ADAL to MSAL. Otherwise, it is
   * recommended that you use `acquireTokenSilent()` for silent scenarios. When using `acquireTokenSilent()`, MSAL will
   * handle the caching and refreshing of tokens automatically.
   */


  async acquireTokenByRefreshToken(request) {
    this.logger.info("acquireTokenByRefreshToken called", request.correlationId);
    const validRequest = { ...request,
      ...(await this.initializeBaseRequest(request)),
      authenticationScheme: AuthenticationScheme.BEARER
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByRefreshToken, validRequest.correlationId);

    try {
      const refreshTokenClientConfig = await this.buildOauthClientConfiguration(validRequest.authority, validRequest.correlationId, serverTelemetryManager, undefined, request.azureCloudOptions);
      const refreshTokenClient = new RefreshTokenClient(refreshTokenClientConfig);
      this.logger.verbose("Refresh token client created", validRequest.correlationId);
      return refreshTokenClient.acquireToken(validRequest);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }

      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    }
  }
  /**
   * Acquires a token silently when a user specifies the account the token is requested for.
   *
   * This API expects the user to provide an account object and looks into the cache to retrieve the token if present.
   * There is also an optional "forceRefresh" boolean the user can send to bypass the cache for access_token and id_token.
   * In case the refresh_token is expired or not found, an error is thrown
   * and the guidance is for the user to call any interactive token acquisition API (eg: `acquireTokenByCode()`).
   */


  async acquireTokenSilent(request) {
    const validRequest = { ...request,
      ...(await this.initializeBaseRequest(request)),
      forceRefresh: request.forceRefresh || false
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent, validRequest.correlationId, validRequest.forceRefresh);

    try {
      const silentFlowClientConfig = await this.buildOauthClientConfiguration(validRequest.authority, validRequest.correlationId, serverTelemetryManager, undefined, request.azureCloudOptions);
      const silentFlowClient = new SilentFlowClient(silentFlowClientConfig);
      this.logger.verbose("Silent flow client created", validRequest.correlationId);
      return silentFlowClient.acquireToken(validRequest);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }

      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    }
  }
  /**
   * Acquires tokens with password grant by exchanging client applications username and password for credentials
   *
   * The latest OAuth 2.0 Security Best Current Practice disallows the password grant entirely.
   * More details on this recommendation at https://tools.ietf.org/html/draft-ietf-oauth-security-topics-13#section-3.4
   * Microsoft's documentation and recommendations are at:
   * https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-authentication-flows#usernamepassword
   *
   * @param request - UsenamePasswordRequest
   */


  async acquireTokenByUsernamePassword(request) {
    this.logger.info("acquireTokenByUsernamePassword called", request.correlationId);
    const validRequest = { ...request,
      ...(await this.initializeBaseRequest(request))
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByUsernamePassword, validRequest.correlationId);

    try {
      const usernamePasswordClientConfig = await this.buildOauthClientConfiguration(validRequest.authority, validRequest.correlationId, serverTelemetryManager, undefined, request.azureCloudOptions);
      const usernamePasswordClient = new UsernamePasswordClient(usernamePasswordClientConfig);
      this.logger.verbose("Username password client created", validRequest.correlationId);
      return usernamePasswordClient.acquireToken(validRequest);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }

      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    }
  }
  /**
   * Gets the token cache for the application.
   */


  getTokenCache() {
    this.logger.info("getTokenCache called");
    return this.tokenCache;
  }
  /**
   * Returns the logger instance
   */


  getLogger() {
    return this.logger;
  }
  /**
   * Replaces the default logger set in configurations with new Logger with new configurations
   * @param logger - Logger instance
   */


  setLogger(logger) {
    this.logger = logger;
  }
  /**
   * Builds the common configuration to be passed to the common component based on the platform configurarion
   * @param authority - user passed authority in configuration
   * @param serverTelemetryManager - initializes servertelemetry if passed
   */


  async buildOauthClientConfiguration(authority, requestCorrelationId, serverTelemetryManager, azureRegionConfiguration, azureCloudOptions) {
    this.logger.verbose("buildOauthClientConfiguration called", requestCorrelationId); // precedence - azureCloudInstance + tenant >> authority and request  >> config

    const userAzureCloudOptions = azureCloudOptions ? azureCloudOptions : this.config.auth.azureCloudOptions; // using null assertion operator as we ensure that all config values have default values in buildConfiguration()

    this.logger.verbose(`building oauth client configuration with the authority: ${authority}`, requestCorrelationId);
    const discoveredAuthority = await this.createAuthority(authority, azureRegionConfiguration, requestCorrelationId, userAzureCloudOptions);
    serverTelemetryManager == null ? void 0 : serverTelemetryManager.updateRegionDiscoveryMetadata(discoveredAuthority.regionDiscoveryMetadata);
    const clientConfiguration = {
      authOptions: {
        clientId: this.config.auth.clientId,
        authority: discoveredAuthority,
        clientCapabilities: this.config.auth.clientCapabilities
      },
      systemOptions: {
        proxyUrl: this.config.system.proxyUrl
      },
      loggerOptions: {
        logLevel: this.config.system.loggerOptions.logLevel,
        loggerCallback: this.config.system.loggerOptions.loggerCallback,
        piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
        correlationId: requestCorrelationId
      },
      cryptoInterface: this.cryptoProvider,
      networkInterface: this.config.system.networkClient,
      storageInterface: this.storage,
      serverTelemetryManager: serverTelemetryManager,
      clientCredentials: {
        clientSecret: this.clientSecret,
        clientAssertion: this.clientAssertion ? this.getClientAssertion(discoveredAuthority) : undefined
      },
      libraryInfo: {
        sku: Constants.MSAL_SKU,
        version: version,
        cpu: process.arch || Constants$1.EMPTY_STRING,
        os: process.platform || Constants$1.EMPTY_STRING
      },
      telemetry: this.config.telemetry,
      persistencePlugin: this.config.cache.cachePlugin,
      serializableCache: this.tokenCache
    };
    return clientConfiguration;
  }

  getClientAssertion(authority) {
    return {
      assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, authority.tokenEndpoint),
      assertionType: Constants.JWT_BEARER_ASSERTION_TYPE
    };
  }
  /**
   * Generates a request with the default scopes & generates a correlationId.
   * @param authRequest - BaseAuthRequest for initialization
   */


  async initializeBaseRequest(authRequest) {
    this.logger.verbose("initializeRequestScopes called", authRequest.correlationId); // Default authenticationScheme to Bearer, log that POP isn't supported yet

    if (authRequest.authenticationScheme && authRequest.authenticationScheme === AuthenticationScheme.POP) {
      this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", authRequest.correlationId);
    }

    authRequest.authenticationScheme = AuthenticationScheme.BEARER; // Set requested claims hash if claims were requested

    if (authRequest.claims && !StringUtils.isEmpty(authRequest.claims)) {
      authRequest.requestedClaimsHash = await this.cryptoProvider.hashString(authRequest.claims);
    }

    return { ...authRequest,
      scopes: [...(authRequest && authRequest.scopes || []), ...OIDC_DEFAULT_SCOPES],
      correlationId: authRequest && authRequest.correlationId || this.cryptoProvider.createNewGuid(),
      authority: authRequest.authority || this.config.auth.authority
    };
  }
  /**
   * Initializes the server telemetry payload
   * @param apiId - Id for a specific request
   * @param correlationId - GUID
   * @param forceRefresh - boolean to indicate network call
   */


  initializeServerTelemetryManager(apiId, correlationId, forceRefresh) {
    const telemetryPayload = {
      clientId: this.config.auth.clientId,
      correlationId: correlationId,
      apiId: apiId,
      forceRefresh: forceRefresh || false
    };
    return new ServerTelemetryManager(telemetryPayload, this.storage);
  }
  /**
   * Create authority instance. If authority not passed in request, default to authority set on the application
   * object. If no authority set in application object, then default to common authority.
   * @param authorityString - authority from user configuration
   */


  async createAuthority(authorityString, azureRegionConfiguration, requestCorrelationId, azureCloudOptions) {
    this.logger.verbose("createAuthority called", requestCorrelationId); // build authority string based on auth params - azureCloudInstance is prioritized if provided

    const authorityUrl = Authority.generateAuthority(authorityString, azureCloudOptions);
    const authorityOptions = {
      protocolMode: this.config.auth.protocolMode,
      knownAuthorities: this.config.auth.knownAuthorities,
      cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
      authorityMetadata: this.config.auth.authorityMetadata,
      azureRegionConfiguration,
      skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
    };
    return await AuthorityFactory.createDiscoveredInstance(authorityUrl, this.config.system.networkClient, this.storage, authorityOptions, this.config.system.proxyUrl);
  }
  /**
   * Clear the cache
   */


  clearCache() {
    this.storage.clear();
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Client assertion of type jwt-bearer used in confidential client flows
 * @public
 */

class ClientAssertion {
  /**
   * Initialize the ClientAssertion class from the clientAssertion passed by the user
   * @param assertion - refer https://tools.ietf.org/html/rfc7521
   */
  static fromAssertion(assertion) {
    const clientAssertion = new ClientAssertion();
    clientAssertion.jwt = assertion;
    return clientAssertion;
  }
  /**
   * Initialize the ClientAssertion class from the certificate passed by the user
   * @param thumbprint - identifier of a certificate
   * @param privateKey - secret key
   * @param publicCertificate - electronic document provided to prove the ownership of the public key
   */


  static fromCertificate(thumbprint, privateKey, publicCertificate) {
    const clientAssertion = new ClientAssertion();
    clientAssertion.privateKey = privateKey;
    clientAssertion.thumbprint = thumbprint;

    if (publicCertificate) {
      clientAssertion.publicCertificate = this.parseCertificate(publicCertificate);
    }

    return clientAssertion;
  }
  /**
   * Update JWT for certificate based clientAssertion, if passed by the user, uses it as is
   * @param cryptoProvider - library's crypto helper
   * @param issuer - iss claim
   * @param jwtAudience - aud claim
   */


  getJwt(cryptoProvider, issuer, jwtAudience) {
    // if assertion was created from certificate, check if jwt is expired and create new one.
    if (this.privateKey && this.thumbprint) {
      if (this.jwt && !this.isExpired() && issuer === this.issuer && jwtAudience === this.jwtAudience) {
        return this.jwt;
      }

      return this.createJwt(cryptoProvider, issuer, jwtAudience);
    }
    /*
     * if assertion was created by caller, then we just append it. It is up to the caller to
     * ensure that it contains necessary claims and that it is not expired.
     */


    if (this.jwt) {
      return this.jwt;
    }

    throw ClientAuthError.createInvalidAssertionError();
  }
  /**
   * JWT format and required claims specified: https://tools.ietf.org/html/rfc7523#section-3
   */


  createJwt(cryptoProvider, issuer, jwtAudience) {
    this.issuer = issuer;
    this.jwtAudience = jwtAudience;
    const issuedAt = TimeUtils.nowSeconds();
    this.expirationTime = issuedAt + 600;
    const header = {
      alg: JwtConstants.RSA_256,
      x5t: EncodingUtils.base64EncodeUrl(this.thumbprint, "hex")
    };

    if (this.publicCertificate) {
      Object.assign(header, {
        x5c: this.publicCertificate
      });
    }

    const payload = {
      [JwtConstants.AUDIENCE]: this.jwtAudience,
      [JwtConstants.EXPIRATION_TIME]: this.expirationTime,
      [JwtConstants.ISSUER]: this.issuer,
      [JwtConstants.SUBJECT]: this.issuer,
      [JwtConstants.NOT_BEFORE]: issuedAt,
      [JwtConstants.JWT_ID]: cryptoProvider.createNewGuid()
    };
    this.jwt = jsonwebtoken.sign(payload, this.privateKey, {
      header
    });
    return this.jwt;
  }
  /**
   * Utility API to check expiration
   */


  isExpired() {
    return this.expirationTime < TimeUtils.nowSeconds();
  }
  /**
   * Extracts the raw certs from a given certificate string and returns them in an array.
   * @param publicCertificate - electronic document provided to prove the ownership of the public key
   */


  static parseCertificate(publicCertificate) {
    /**
     * This is regex to identify the certs in a given certificate string.
     * We want to look for the contents between the BEGIN and END certificate strings, without the associated newlines.
     * The information in parens "(.+?)" is the capture group to represent the cert we want isolated.
     * "." means any string character, "+" means match 1 or more times, and "?" means the shortest match.
     * The "g" at the end of the regex means search the string globally, and the "s" enables the "." to match newlines.
     */
    const regexToFindCerts = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs;
    const certs = [];
    let matches;

    while ((matches = regexToFindCerts.exec(publicCertificate)) !== null) {
      // matches[1] represents the first parens capture group in the regex.
      certs.push(matches[1].replace(/\r*\n/g, Constants$1.EMPTY_STRING));
    }

    return certs;
  }

}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 *  This class is to be used to acquire tokens for confidential client applications (webApp, webAPI). Confidential client applications
 *  will configure application secrets, client certificates/assertions as applicable
 * @public
 */

class ConfidentialClientApplication extends ClientApplication {
  /**
   * Constructor for the ConfidentialClientApplication
   *
   * Required attributes in the Configuration object are:
   * - clientID: the application ID of your application. You can obtain one by registering your application with our application registration portal
   * - authority: the authority URL for your application.
   * - client credential: Must set either client secret, certificate, or assertion for confidential clients. You can obtain a client secret from the application registration portal.
   *
   * In Azure AD, authority is a URL indicating of the form https://login.microsoftonline.com/\{Enter_the_Tenant_Info_Here\}.
   * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
   * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
   * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
   * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
   *
   * In Azure B2C, authority is of the form https://\{instance\}/tfp/\{tenant\}/\{policyName\}/
   * Full B2C functionality will be available in this library in future versions.
   *
   * @param Configuration - configuration object for the MSAL ConfidentialClientApplication instance
   */
  constructor(configuration) {
    super(configuration);
    this.setClientCredential(this.config);
    this.appTokenProvider = undefined;
  }
  /**
   * This extensibility point only works for the client_credential flow, i.e. acquireTokenByClientCredential and
   * is meant for Azure SDK to enhance Managed Identity support.
   *
   * @param IAppTokenProvider  - Extensibility interface, which allows the app developer to return a token from a custom source.
   */


  SetAppTokenProvider(provider) {
    this.appTokenProvider = provider;
  }
  /**
   * Acquires tokens from the authority for the application (not for an end user).
   */


  async acquireTokenByClientCredential(request) {
    this.logger.info("acquireTokenByClientCredential called", request.correlationId); // If there is a client assertion present in the request, it overrides the one present in the client configuration

    let clientAssertion;

    if (request.clientAssertion) {
      clientAssertion = {
        assertion: request.clientAssertion,
        assertionType: Constants.JWT_BEARER_ASSERTION_TYPE
      };
    }

    const validRequest = { ...request,
      ...(await this.initializeBaseRequest(request)),
      clientAssertion
    };
    const azureRegionConfiguration = {
      azureRegion: validRequest.azureRegion,
      environmentRegion: process.env[REGION_ENVIRONMENT_VARIABLE]
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByClientCredential, validRequest.correlationId, validRequest.skipCache);

    try {
      const clientCredentialConfig = await this.buildOauthClientConfiguration(validRequest.authority, validRequest.correlationId, serverTelemetryManager, azureRegionConfiguration, request.azureCloudOptions);
      const clientCredentialClient = new ClientCredentialClient(clientCredentialConfig, this.appTokenProvider);
      this.logger.verbose("Client credential client created", validRequest.correlationId);
      return clientCredentialClient.acquireToken(validRequest);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }

      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    }
  }
  /**
   * Acquires tokens from the authority for the application.
   *
   * Used in scenarios where the current app is a middle-tier service which was called with a token
   * representing an end user. The current app can use the token (oboAssertion) to request another
   * token to access downstream web API, on behalf of that user.
   *
   * The current middle-tier app has no user interaction to obtain consent.
   * See how to gain consent upfront for your middle-tier app from this article.
   * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow#gaining-consent-for-the-middle-tier-application
   */


  async acquireTokenOnBehalfOf(request) {
    this.logger.info("acquireTokenOnBehalfOf called", request.correlationId);
    const validRequest = { ...request,
      ...(await this.initializeBaseRequest(request))
    };

    try {
      const onBehalfOfConfig = await this.buildOauthClientConfiguration(validRequest.authority, validRequest.correlationId, undefined, undefined, request.azureCloudOptions);
      const oboClient = new OnBehalfOfClient(onBehalfOfConfig);
      this.logger.verbose("On behalf of client created", validRequest.correlationId);
      return oboClient.acquireToken(validRequest);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }

      throw e;
    }
  }

  setClientCredential(configuration) {
    const clientSecretNotEmpty = !StringUtils.isEmpty(configuration.auth.clientSecret);
    const clientAssertionNotEmpty = !StringUtils.isEmpty(configuration.auth.clientAssertion);
    const certificate = configuration.auth.clientCertificate || {
      thumbprint: Constants$1.EMPTY_STRING,
      privateKey: Constants$1.EMPTY_STRING
    };
    const certificateNotEmpty = !StringUtils.isEmpty(certificate.thumbprint) || !StringUtils.isEmpty(certificate.privateKey);
    /*
     * If app developer configures this callback, they don't need a credential
     * i.e. AzureSDK can get token from Managed Identity without a cert / secret
     */

    if (this.appTokenProvider) {
      return;
    } // Check that at most one credential is set on the application


    if (clientSecretNotEmpty && clientAssertionNotEmpty || clientAssertionNotEmpty && certificateNotEmpty || clientSecretNotEmpty && certificateNotEmpty) {
      throw ClientAuthError.createInvalidCredentialError();
    }

    if (configuration.auth.clientSecret) {
      this.clientSecret = configuration.auth.clientSecret;
      return;
    }

    if (configuration.auth.clientAssertion) {
      this.clientAssertion = ClientAssertion.fromAssertion(configuration.auth.clientAssertion);
      return;
    }

    if (!certificateNotEmpty) {
      throw ClientAuthError.createInvalidCredentialError();
    } else {
      var _configuration$auth$c;

      this.clientAssertion = ClientAssertion.fromCertificate(certificate.thumbprint, certificate.privateKey, (_configuration$auth$c = configuration.auth.clientCertificate) == null ? void 0 : _configuration$auth$c.x5c);
    }
  }

}

const graphAPIEndpoint = 'https://graph.microsoft.com/v1.0/me';
const scopes = ['User.Read'];
const defaultMetadata = {
    id: 'azuread-universal',
    target: 'azuread',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'Microsoft',
        'zh-CN': 'Microsoft',
        'tr-TR': 'Microsoft',
        ko: 'Microsoft',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Microsoft Azure Active Directory is a leading AD provider.',
        'zh-CN': 'Microsoft Azure Active Directory 是领先的 AD 服务提供商。',
        'tr-TR': 'Microsoft Azure Active Directory en büyük AD servisidir.',
        ko: 'Microsoft Azure Active Directory is the biggest AD provider.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'clientId',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            label: 'Client ID',
            placeholder: '<client-id>',
        },
        {
            key: 'clientSecret',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            label: 'Client Secret',
            placeholder: '<client-secret>',
        },
        {
            key: 'cloudInstance',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            label: 'Cloud Instance',
            placeholder: 'https://login.microsoftonline.com',
            defaultValue: 'https://login.microsoftonline.com',
        },
        {
            key: 'tenantId',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            label: 'Tenant ID',
            placeholder: '<tenant-id>',
        },
    ],
};
const defaultTimeout = 5000;

const azureADConfigGuard = z.object({
    clientId: z.string(),
    clientSecret: z.string(),
    cloudInstance: z.string(),
    tenantId: z.string(),
});
const accessTokenResponseGuard = z.object({
    accessToken: z.string(),
    scopes: z.array(z.string()),
    tokenType: z.string(),
});
const userInfoResponseGuard = z.object({
    id: z.string(),
    displayName: z.string().nullish(),
    givenName: z.string().nullish(),
    surname: z.string().nullish(),
    userPrincipalName: z.string().nullish(),
    jobTitle: z.string().nullish(),
    mail: z.string().nullish(),
    mobilePhone: z.string().nullish(),
    officeLocation: z.string().nullish(),
    preferredLanguage: z.string().nullish(),
    businessPhones: z.array(z.string()).nullish(),
});
const authResponseGuard = z.object({
    code: z.string(),
    redirectUri: z.string(),
});

// eslint-disable-next-line @silverhand/fp/no-let
let authCodeRequest;
// This `cryptoProvider` seems not used.
// Temporarily keep this as this is a refactor, which should not change the logics.
new CryptoProvider();
const getAuthorizationUri = (getConfig) => async ({ state, redirectUri }) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, azureADConfigGuard);
    const { clientId, clientSecret, cloudInstance, tenantId } = config;
    const defaultAuthCodeUrlParameters = {
        scopes,
        state,
        redirectUri,
    };
    const clientApplication = new ConfidentialClientApplication({
        auth: {
            clientId,
            clientSecret,
            authority: new URL(path.join(cloudInstance, tenantId)).toString(),
        },
    });
    const authCodeUrlParameters = {
        ...defaultAuthCodeUrlParameters,
    };
    const authCodeUrl = await clientApplication.getAuthCodeUrl(authCodeUrlParameters);
    return authCodeUrl;
};
const getAccessToken = async (config, code, redirectUri) => {
    const codeRequest = {
        ...authCodeRequest,
        redirectUri,
        scopes: ['User.Read'],
        code,
    };
    const { clientId, clientSecret, cloudInstance, tenantId } = config;
    const clientApplication = new ConfidentialClientApplication({
        auth: {
            clientId,
            clientSecret,
            authority: new URL(path.join(cloudInstance, tenantId)).toString(),
        },
    });
    const authResult = await clientApplication.acquireTokenByCode(codeRequest);
    const result = accessTokenResponseGuard.safeParse(authResult);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
    }
    const { accessToken } = result.data;
    assert(accessToken, new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid));
    return { accessToken };
};
const getUserInfo = (getConfig) => async (data) => {
    const { code, redirectUri } = await authorizationCallbackHandler(data);
    // Temporarily keep this as this is a refactor, which should not change the logics.
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, azureADConfigGuard);
    const { accessToken } = await getAccessToken(config, code, redirectUri);
    try {
        const httpResponse = await got.get(graphAPIEndpoint, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
            timeout: { request: defaultTimeout },
        });
        const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));
        if (!result.success) {
            throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
        }
        const { id, mail, displayName } = result.data;
        return {
            id,
            email: conditional(mail),
            name: conditional(displayName),
        };
    }
    catch (error) {
        if (error instanceof HTTPError) {
            const { statusCode, body: rawBody } = error.response;
            if (statusCode === 401) {
                throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);
            }
            throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));
        }
        throw error;
    }
};
const authorizationCallbackHandler = async (parameterObject) => {
    const result = authResponseGuard.safeParse(parameterObject);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(parameterObject));
    }
    return result.data;
};
const createAzureAdConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: azureADConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { createAzureAdConnector as default };
