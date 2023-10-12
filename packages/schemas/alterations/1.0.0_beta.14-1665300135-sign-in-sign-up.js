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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var slonik_1 = require("slonik");
var SignInMethodState;
(function (SignInMethodState) {
    SignInMethodState["Primary"] = "primary";
    SignInMethodState["Secondary"] = "secondary";
    SignInMethodState["Disabled"] = "disabled";
})(SignInMethodState || (SignInMethodState = {}));
var SignInMethodKey;
(function (SignInMethodKey) {
    SignInMethodKey["Username"] = "username";
    SignInMethodKey["Email"] = "email";
    SignInMethodKey["Sms"] = "sms";
    SignInMethodKey["Social"] = "social";
})(SignInMethodKey || (SignInMethodKey = {}));
var SignUpIdentifier;
(function (SignUpIdentifier) {
    SignUpIdentifier["Email"] = "email";
    SignUpIdentifier["Sms"] = "sms";
    SignUpIdentifier["Username"] = "username";
    SignUpIdentifier["EmailOrSms"] = "emailOrSms";
    SignUpIdentifier["None"] = "none";
})(SignUpIdentifier || (SignUpIdentifier = {}));
var SignInIdentifier;
(function (SignInIdentifier) {
    SignInIdentifier["Email"] = "email";
    SignInIdentifier["Sms"] = "Sms";
    SignInIdentifier["Username"] = "username";
})(SignInIdentifier || (SignInIdentifier = {}));
var parseSignInMethodToSignInIdentifier = function (method) {
    if (method === SignInMethodKey.Username) {
        return SignInIdentifier.Username;
    }
    if (method === SignInMethodKey.Email) {
        return SignInIdentifier.Email;
    }
    if (method === SignInMethodKey.Sms) {
        return SignInIdentifier.Sms;
    }
};
var parseSignInMethodToSignUpIdentifier = function (method) {
    if (method === SignInMethodKey.Username) {
        return SignUpIdentifier.Username;
    }
    if (method === SignInMethodKey.Email) {
        return SignUpIdentifier.Email;
    }
    if (method === SignInMethodKey.Sms) {
        return SignUpIdentifier.Sms;
    }
    return SignUpIdentifier.None;
};
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var id, data, signInMethods_1, methodKeys, primaryMethod, secondaryMethods, signIn, methods, _i, methods_1, method, identifier, signUpIdentifier, signUp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      alter table sign_in_experiences add column sign_in jsonb\n    "], ["\n      alter table sign_in_experiences add column sign_in jsonb\n    "]))))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      alter table sign_in_experiences add column sign_up jsonb\n    "], ["\n      alter table sign_in_experiences add column sign_up jsonb\n    "]))))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      alter table sign_in_experiences add column forgot_password boolean not null default false\n    "], ["\n      alter table sign_in_experiences add column forgot_password boolean not null default false\n    "]))))];
                case 3:
                    _a.sent();
                    id = 'default';
                    return [4 /*yield*/, pool.maybeOne((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["select * from sign_in_experiences where id = ", ""], ["select * from sign_in_experiences where id = ", ""])), id))];
                case 4:
                    data = _a.sent();
                    if (!data) return [3 /*break*/, 7];
                    signInMethods_1 = data.signInMethods;
                    methodKeys = Object.values(SignInMethodKey);
                    primaryMethod = methodKeys.find(function (key) { return signInMethods_1[key] === SignInMethodState.Primary; });
                    secondaryMethods = methodKeys.filter(function (key) { return signInMethods_1[key] === SignInMethodState.Secondary; });
                    signIn = {
                        methods: [],
                    };
                    methods = __spreadArray([primaryMethod], secondaryMethods, true);
                    for (_i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
                        method = methods_1[_i];
                        if (!method) {
                            continue;
                        }
                        identifier = parseSignInMethodToSignInIdentifier(method);
                        if (identifier) {
                            signIn.methods.push({
                                identifier: identifier,
                                password: identifier === SignInIdentifier.Username,
                                verificationCode: identifier !== SignInIdentifier.Username,
                                isPasswordPrimary: false,
                            });
                        }
                    }
                    signUpIdentifier = parseSignInMethodToSignUpIdentifier(primaryMethod);
                    signUp = {
                        identifier: signUpIdentifier,
                        verify: true,
                        password: signUpIdentifier === SignUpIdentifier.Username,
                    };
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        update sign_in_experiences set sign_in = ", " where id = ", "\n      "], ["\n        update sign_in_experiences set sign_in = ", " where id = ", "\n      "])), JSON.stringify(signIn), id))];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        update sign_in_experiences set sign_up = ", " where id = ", "\n      "], ["\n        update sign_in_experiences set sign_up = ", " where id = ", "\n      "])), JSON.stringify(signUp), id))];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: 
                /* eslint-enable @silverhand/fp/no-mutating-methods */
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      alter table sign_in_experiences alter column sign_in set not null\n    "], ["\n      alter table sign_in_experiences alter column sign_in set not null\n    "]))))];
                case 8:
                    /* eslint-enable @silverhand/fp/no-mutating-methods */
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      alter table sign_in_experiences alter column sign_up set not null\n    "], ["\n      alter table sign_in_experiences alter column sign_up set not null\n    "]))))];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      alter table sign_in_experiences drop column sign_in\n    "], ["\n      alter table sign_in_experiences drop column sign_in\n    "]))))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      alter table sign_in_experiences drop column sign_up\n    "], ["\n      alter table sign_in_experiences drop column sign_up\n    "]))))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      alter table sign_in_experiences drop column forgot_password\n    "], ["\n      alter table sign_in_experiences drop column forgot_password\n    "]))))];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
