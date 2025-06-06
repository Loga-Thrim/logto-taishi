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
var shared_1 = require("@logto/shared");
var essentials_1 = require("@silverhand/essentials");
var slonik_1 = require("slonik");
var ServiceConnector;
(function (ServiceConnector) {
    ServiceConnector["Email"] = "logto-email";
})(ServiceConnector || (ServiceConnector = {}));
var cloudConnectionKey = 'cloudConnection';
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var rawConnectors, connectors, _i, connectors_1, connector, tenantId, config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      select tenant_id, config from connectors where connector_id = ", ";\n    "], ["\n      select tenant_id, config from connectors where connector_id = ", ";\n    "])), ServiceConnector.Email))];
                case 1:
                    rawConnectors = (_a.sent()).rows;
                    connectors = rawConnectors.map(function (rawConnector) {
                        var tenantId = rawConnector.tenantId, _a = rawConnector.config, appSecret = _a.appSecret, appId = _a.appId, endpoint = _a.endpoint, tokenEndpoint = _a.tokenEndpoint, resource = _a.resource, rest = __rest(_a, ["appSecret", "appId", "endpoint", "tokenEndpoint", "resource"]);
                        return { tenantId: tenantId, config: rest };
                    });
                    _i = 0, connectors_1 = connectors;
                    _a.label = 2;
                case 2:
                    if (!(_i < connectors_1.length)) return [3 /*break*/, 5];
                    connector = connectors_1[_i];
                    tenantId = connector.tenantId, config = connector.config;
                    // eslint-disable-next-line no-await-in-loop
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        update connectors set config = ", " where tenant_id = ", " and connector_id = ", ";\n      "], ["\n        update connectors set config = ", " where tenant_id = ", " and connector_id = ", ";\n      "])), JSON.stringify(config), tenantId, ServiceConnector.Email))];
                case 3:
                    // eslint-disable-next-line no-await-in-loop
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var cloudConnections, globalValues, cloudUrlSet, adminUrlSet, endpoint, tokenEndpoint, rawEmailServiceConnectors, tenantIdsWithM2mCredentials, emailServiceConnectors, _loop_1, _i, emailServiceConnectors_1, emailServiceConnector;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      select tenant_id, value from logto_configs where key = ", ";\n    "], ["\n      select tenant_id, value from logto_configs where key = ", ";\n    "])), cloudConnectionKey))];
                case 1:
                    cloudConnections = (_b.sent()).rows;
                    globalValues = new shared_1.GlobalValues();
                    cloudUrlSet = globalValues.cloudUrlSet, adminUrlSet = globalValues.adminUrlSet;
                    endpoint = (0, essentials_1.appendPath)(cloudUrlSet.endpoint, 'api').toString();
                    tokenEndpoint = (0, essentials_1.appendPath)(adminUrlSet.endpoint, 'oidc/token').toString();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      select tenant_id, config from connectors where connector_id = ", ";\n    "], ["\n      select tenant_id, config from connectors where connector_id = ", ";\n    "])), ServiceConnector.Email))];
                case 2:
                    rawEmailServiceConnectors = (_b.sent()).rows;
                    tenantIdsWithM2mCredentials = new Set(cloudConnections.map(function (_a) {
                        var tenantId = _a.tenantId;
                        return tenantId;
                    }));
                    emailServiceConnectors = rawEmailServiceConnectors.filter(function (_a) {
                        var tenantId = _a.tenantId;
                        return tenantIdsWithM2mCredentials.has(tenantId);
                    });
                    _loop_1 = function (emailServiceConnector) {
                        var currentTenantId, config, newConfig;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    currentTenantId = emailServiceConnector.tenantId, config = emailServiceConnector.config;
                                    newConfig = __assign(__assign(__assign({}, config), { endpoint: endpoint, tokenEndpoint: tokenEndpoint }), (_a = cloudConnections.find(function (_a) {
                                        var tenantId = _a.tenantId;
                                        return tenantId === currentTenantId;
                                    })) === null || _a === void 0 ? void 0 : _a.value);
                                    // eslint-disable-next-line no-await-in-loop
                                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        update connectors set config = ", " where tenant_id = ", " and connector_id = ", ";\n      "], ["\n        update connectors set config = ", " where tenant_id = ", " and connector_id = ", ";\n      "])), JSON.stringify(newConfig), currentTenantId, ServiceConnector.Email))];
                                case 1:
                                    // eslint-disable-next-line no-await-in-loop
                                    _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, emailServiceConnectors_1 = emailServiceConnectors;
                    _b.label = 3;
                case 3:
                    if (!(_i < emailServiceConnectors_1.length)) return [3 /*break*/, 6];
                    emailServiceConnector = emailServiceConnectors_1[_i];
                    return [5 /*yield**/, _loop_1(emailServiceConnector)];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
