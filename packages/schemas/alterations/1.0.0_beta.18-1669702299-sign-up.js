"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var essentials_1 = require("@silverhand/essentials");
var slonik_1 = require("slonik");
var DeprecatedSignUpIdentifier;
(function (DeprecatedSignUpIdentifier) {
    DeprecatedSignUpIdentifier["Email"] = "email";
    DeprecatedSignUpIdentifier["Sms"] = "sms";
    DeprecatedSignUpIdentifier["Username"] = "username";
    DeprecatedSignUpIdentifier["EmailOrSms"] = "emailOrSms";
    DeprecatedSignUpIdentifier["None"] = "none";
})(DeprecatedSignUpIdentifier || (DeprecatedSignUpIdentifier = {}));
var SignInIdentifier;
(function (SignInIdentifier) {
    SignInIdentifier["Username"] = "username";
    SignInIdentifier["Email"] = "email";
    SignInIdentifier["Sms"] = "sms";
})(SignInIdentifier || (SignInIdentifier = {}));
var signUpIdentifierMapping = (_a = {},
    _a[DeprecatedSignUpIdentifier.Email] = [SignInIdentifier.Email],
    _a[DeprecatedSignUpIdentifier.Sms] = [SignInIdentifier.Sms],
    _a[DeprecatedSignUpIdentifier.Username] = [SignInIdentifier.Username],
    _a[DeprecatedSignUpIdentifier.EmailOrSms] = [SignInIdentifier.Email, SignInIdentifier.Sms],
    _a[DeprecatedSignUpIdentifier.None] = [],
    _a);
var mapDeprecatedSignUpIdentifierToIdentifiers = function (signUpIdentifier) {
    return signUpIdentifierMapping[signUpIdentifier];
};
var alterSignUp = function (signInExperience, pool) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, identifier, signUpSettings, signUpIdentifiers, signUp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = signInExperience.id, _a = signInExperience.signUp, identifier = _a.identifier, signUpSettings = __rest(_a, ["identifier"]);
                signUpIdentifiers = mapDeprecatedSignUpIdentifierToIdentifiers(identifier);
                signUp = __assign({ identifiers: signUpIdentifiers }, signUpSettings);
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["update sign_in_experiences set sign_up = ", " where id = ", ""], ["update sign_in_experiences set sign_up = ", " where id = ", ""])), JSON.stringify(signUp), id))];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
var mapIdentifiersToDeprecatedSignUpIdentifier = function (identifiers) {
    for (var _i = 0, _a = Object.entries(signUpIdentifierMapping); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], mappedIdentifiers = _b[1];
        if ((0, essentials_1.isSameArray)(identifiers, mappedIdentifiers)) {
            // eslint-disable-next-line no-restricted-syntax
            return key;
        }
    }
    throw new Error('Invalid identifiers in the sign up settings.');
};
var rollbackSignUp = function (signInExperience, pool) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, identifiers, signUpSettings, signUpIdentifier, signUp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = signInExperience.id, _a = signInExperience.signUp, identifiers = _a.identifiers, signUpSettings = __rest(_a, ["identifiers"]);
                signUpIdentifier = mapIdentifiersToDeprecatedSignUpIdentifier(identifiers);
                signUp = __assign({ identifier: signUpIdentifier }, signUpSettings);
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["update sign_in_experiences set sign_up = ", " where id = ", ""], ["update sign_in_experiences set sign_up = ", " where id = ", ""])), JSON.stringify(signUp), id))];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.many((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["select * from sign_in_experiences"], ["select * from sign_in_experiences"]))))];
                case 1:
                    rows = _a.sent();
                    return [4 /*yield*/, Promise.all(rows.map(function (row) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, alterSignUp(row, pool)];
                        }); }); }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.many((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["select * from sign_in_experiences"], ["select * from sign_in_experiences"]))))];
                case 1:
                    rows = _a.sent();
                    return [4 /*yield*/, Promise.all(rows.map(function (row) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, rollbackSignUp(row, pool)];
                        }); }); }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
