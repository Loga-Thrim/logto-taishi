"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_kit_1 = require("@logto/core-kit");
var slonik_1 = require("slonik");
var defaultPrimaryColor = '#6139F6';
var data = {
    tenantId: 'admin',
    id: 'default',
    color: {
        primaryColor: defaultPrimaryColor,
        isDarkModeEnabled: true,
        darkPrimaryColor: (0, core_kit_1.generateDarkColor)(defaultPrimaryColor),
    },
    branding: {
        style: 'Logo_Slogan',
        logoUrl: 'https://logto.io/logo.svg',
        darkLogoUrl: 'https://logto.io/logo-dark.svg',
        slogan: 'admin_console.welcome.title',
    },
    languageInfo: {
        autoDetect: true,
        fallbackLanguage: 'en',
    },
    termsOfUseUrl: null,
    signUp: {
        identifiers: ['username'],
        password: true,
        verify: false,
    },
    signIn: {
        methods: [
            {
                identifier: 'username',
                password: true,
                verificationCode: false,
                isPasswordPrimary: true,
            },
        ],
    },
    socialSignInConnectorTargets: [],
    customCss: null,
};
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var hasActiveUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.exists((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      select id\n      from users\n      where tenant_id = 'admin'\n      and is_suspended = false\n      limit 1\n    "], ["\n      select id\n      from users\n      where tenant_id = 'admin'\n      and is_suspended = false\n      limit 1\n    "]))))];
                case 1:
                    hasActiveUsers = _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      insert into sign_in_experiences (\n        tenant_id,\n        id,\n        color,\n        branding,\n        language_info,\n        terms_of_use_url,\n        sign_up,\n        sign_in,\n        social_sign_in_connector_targets,\n        sign_in_mode,\n        custom_css\n      ) values (\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n    "], ["\n      insert into sign_in_experiences (\n        tenant_id,\n        id,\n        color,\n        branding,\n        language_info,\n        terms_of_use_url,\n        sign_up,\n        sign_in,\n        social_sign_in_connector_targets,\n        sign_in_mode,\n        custom_css\n      ) values (\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n    "])), data.tenantId, data.id, slonik_1.sql.jsonb(data.color), slonik_1.sql.jsonb(data.branding), slonik_1.sql.jsonb(data.languageInfo), data.termsOfUseUrl, slonik_1.sql.jsonb(data.signUp), slonik_1.sql.jsonb(data.signIn), slonik_1.sql.jsonb(data.socialSignInConnectorTargets), hasActiveUsers ? 'SignIn' : 'Register', data.customCss))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      delete from sign_in_experiences\n        where tenant_id = 'admin'\n        and id = 'default';\n    "], ["\n      delete from sign_in_experiences\n        where tenant_id = 'admin'\n        and id = 'default';\n    "]))))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3;
