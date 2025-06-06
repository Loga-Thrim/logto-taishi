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
Object.defineProperty(exports, "__esModule", { value: true });
var slonik_1 = require("slonik");
var OldSignInIdentifier;
(function (OldSignInIdentifier) {
    OldSignInIdentifier["Email"] = "email";
    OldSignInIdentifier["Sms"] = "sms";
    OldSignInIdentifier["Username"] = "username";
})(OldSignInIdentifier || (OldSignInIdentifier = {}));
var SignInIdentifier;
(function (SignInIdentifier) {
    SignInIdentifier["Email"] = "email";
    SignInIdentifier["Phone"] = "phone";
    SignInIdentifier["Username"] = "username";
})(SignInIdentifier || (SignInIdentifier = {}));
var alterSignUp = function (signUp) {
    var identifiers = signUp.identifiers, password = signUp.password, verify = signUp.verify;
    var newIdentifiers = identifiers.map(function (identifier) {
        if (identifier.toLocaleLowerCase() === OldSignInIdentifier.Sms) {
            return SignInIdentifier.Phone;
        }
        return identifier;
    });
    return {
        identifiers: newIdentifiers,
        password: password,
        verify: verify,
    };
};
var alterSignIn = function (signIn) {
    var methods = signIn.methods;
    var newMethods = methods.map(function (method) {
        var identifier = method.identifier, rest = __rest(method, ["identifier"]);
        if (identifier === OldSignInIdentifier.Sms) {
            return __assign({ identifier: SignInIdentifier.Phone }, rest);
        }
        return method;
    });
    return {
        methods: newMethods,
    };
};
var rollbackSignUp = function (signUp) {
    var identifiers = signUp.identifiers, password = signUp.password, verify = signUp.verify;
    var newIdentifiers = identifiers.map(function (identifier) {
        if (identifier === SignInIdentifier.Phone) {
            return OldSignInIdentifier.Sms;
        }
        return identifier;
    });
    return {
        identifiers: newIdentifiers,
        password: password,
        verify: verify,
    };
};
var rollbackSignIn = function (signIn) {
    var methods = signIn.methods;
    var newMethods = methods.map(function (method) {
        var identifier = method.identifier, rest = __rest(method, ["identifier"]);
        if (identifier === SignInIdentifier.Phone) {
            return __assign({ identifier: OldSignInIdentifier.Sms }, rest);
        }
        return method;
    });
    return {
        methods: newMethods,
    };
};
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var id, data, signUp, signIn, newSignUp, newSignIn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = 'default';
                    return [4 /*yield*/, pool.maybeOne((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["select * from sign_in_experiences where id = ", ""], ["select * from sign_in_experiences where id = ", ""])), id))];
                case 1:
                    data = _a.sent();
                    if (!data) return [3 /*break*/, 4];
                    signUp = data.signUp, signIn = data.signIn;
                    newSignUp = alterSignUp(signUp);
                    newSignIn = alterSignIn(signIn);
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["update sign_in_experiences set sign_up = ", " where id = ", ""], ["update sign_in_experiences set sign_up = ", " where id = ", ""])), JSON.stringify(newSignUp), id))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["update sign_in_experiences set sign_in = ", " where id = ", ""], ["update sign_in_experiences set sign_in = ", " where id = ", ""])), JSON.stringify(newSignIn), id))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var id, data, signUp, signIn, oldSignUp, oldSignIn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = 'default';
                    return [4 /*yield*/, pool.maybeOne((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["select * from sign_in_experiences where id = ", ""], ["select * from sign_in_experiences where id = ", ""])), id))];
                case 1:
                    data = _a.sent();
                    if (!data) return [3 /*break*/, 4];
                    signUp = data.signUp, signIn = data.signIn;
                    oldSignUp = rollbackSignUp(signUp);
                    oldSignIn = rollbackSignIn(signIn);
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["update sign_in_experiences set sign_up = ", " where id = ", ""], ["update sign_in_experiences set sign_up = ", " where id = ", ""])), JSON.stringify(oldSignUp), id))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["update sign_in_experiences set sign_in = ", " where id = ", ""], ["update sign_in_experiences set sign_in = ", " where id = ", ""])), JSON.stringify(oldSignIn), id))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
