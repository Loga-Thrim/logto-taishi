"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminTenantSignInExperience = exports.defaultSignInExperience = exports.createDefaultSignInExperience = void 0;
var core_kit_1 = require("@logto/core-kit");
var index_js_1 = require("../db-entries/index.js");
var index_js_2 = require("../foundations/index.js");
var tenant_js_1 = require("./tenant.js");
var defaultPrimaryColor = '#6139F6';
var createDefaultSignInExperience = function (forTenantId, isCloud) {
    return Object.freeze({
        tenantId: forTenantId,
        id: 'default',
        color: {
            primaryColor: defaultPrimaryColor,
            isDarkModeEnabled: false,
            darkPrimaryColor: (0, core_kit_1.generateDarkColor)(defaultPrimaryColor),
        },
        branding: {
            logoUrl: isCloud ? undefined : 'https://logto.io/logo.svg',
            darkLogoUrl: isCloud ? undefined : 'https://logto.io/logo-dark.svg',
        },
        languageInfo: {
            autoDetect: true,
            fallbackLanguage: 'en',
        },
        termsOfUseUrl: null,
        privacyPolicyUrl: null,
        signUp: {
            identifiers: [isCloud ? index_js_2.SignInIdentifier.Email : index_js_2.SignInIdentifier.Username],
            password: true,
            verify: isCloud,
        },
        signIn: {
            methods: [
                {
                    identifier: isCloud ? index_js_2.SignInIdentifier.Email : index_js_2.SignInIdentifier.Username,
                    password: true,
                    verificationCode: false,
                    isPasswordPrimary: true,
                },
            ],
        },
        socialSignInConnectorTargets: [],
        signInMode: index_js_1.SignInMode.SignInAndRegister,
        customCss: null,
        customContent: {},
        passwordPolicy: {},
        mfa: {
            factors: [],
            policy: index_js_2.MfaPolicy.UserControlled,
        },
    });
};
exports.createDefaultSignInExperience = createDefaultSignInExperience;
/** @deprecated Use `createDefaultSignInExperience()` instead. */
exports.defaultSignInExperience = (0, exports.createDefaultSignInExperience)(tenant_js_1.defaultTenantId, false);
var createAdminTenantSignInExperience = function () {
    return Object.freeze(__assign(__assign({}, exports.defaultSignInExperience), { tenantId: tenant_js_1.adminTenantId, color: __assign(__assign({}, exports.defaultSignInExperience.color), { isDarkModeEnabled: true }), signInMode: index_js_1.SignInMode.Register, branding: {
            logoUrl: 'https://logto.io/logo.svg',
            darkLogoUrl: 'https://logto.io/logo-dark.svg',
        } }));
};
exports.createAdminTenantSignInExperience = createAdminTenantSignInExperience;
