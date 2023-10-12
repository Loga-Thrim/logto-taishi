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
var slonik_1 = require("slonik");
var HookEvent;
(function (HookEvent) {
    HookEvent["PostRegister"] = "PostRegister";
    HookEvent["PostSignIn"] = "PostSignIn";
    HookEvent["PostResetPassword"] = "PostResetPassword";
})(HookEvent || (HookEvent = {}));
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      alter table hooks\n        add column name varchar(256) not null default '',\n        add column events jsonb not null default '[]'::jsonb,\n        add column signing_key varchar(64) not null default '',\n        add column enabled boolean not null default true,\n        alter column event drop not null;\n      drop index hooks__event;\n    "], ["\n      alter table hooks\n        add column name varchar(256) not null default '',\n        add column events jsonb not null default '[]'::jsonb,\n        add column signing_key varchar(64) not null default '',\n        add column enabled boolean not null default true,\n        alter column event drop not null;\n      drop index hooks__event;\n    "]))))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var hooks, _i, hooks_1, _a, id, tenantId, events, config, retries, rest, updatedConfig, _b, _c, _d, index, event_1, hookId;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      delete from hooks where enabled = false;\n    "], ["\n      delete from hooks where enabled = false;\n    "]))))];
                case 1:
                    _e.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      select * from hooks;\n    "], ["\n      select * from hooks;\n    "]))))];
                case 2:
                    hooks = (_e.sent()).rows;
                    _i = 0, hooks_1 = hooks;
                    _e.label = 3;
                case 3:
                    if (!(_i < hooks_1.length)) return [3 /*break*/, 12];
                    _a = hooks_1[_i], id = _a.id, tenantId = _a.tenantId, events = _a.events, config = _a.config;
                    retries = config.retries, rest = __rest(config, ["retries"]);
                    updatedConfig = __assign(__assign({}, rest), { retries: retries !== null && retries !== void 0 ? retries : 3 });
                    if (!(events.length === 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          update hooks\n          set config = ", "\n          where id = ", " and tenant_id = ", ";\n        "], ["\n          update hooks\n          set config = ", "\n          where id = ", " and tenant_id = ", ";\n        "])), JSON.stringify(updatedConfig), id, tenantId))];
                case 4:
                    _e.sent();
                    return [3 /*break*/, 11];
                case 5:
                    _b = 0, _c = events.entries();
                    _e.label = 6;
                case 6:
                    if (!(_b < _c.length)) return [3 /*break*/, 11];
                    _d = _c[_b], index = _d[0], event_1 = _d[1];
                    if (!(index === 0)) return [3 /*break*/, 8];
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            update hooks\n            set event = ", ",\n            config = ", "\n            where id = ", " and tenant_id = ", ";\n          "], ["\n            update hooks\n            set event = ", ",\n            config = ", "\n            where id = ", " and tenant_id = ", ";\n          "])), event_1, JSON.stringify(updatedConfig), id, tenantId))];
                case 7:
                    _e.sent();
                    return [3 /*break*/, 10];
                case 8:
                    hookId = (0, shared_1.generateStandardId)();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n          insert into hooks (id, tenant_id,  event, config)\n          values (", ", ", ", ", ", ", ");\n        "], ["\n          insert into hooks (id, tenant_id,  event, config)\n          values (", ", ", ", ", ", ", ");\n        "])), hookId, tenantId, event_1, JSON.stringify(updatedConfig)))];
                case 9:
                    _e.sent();
                    _e.label = 10;
                case 10:
                    _b++;
                    return [3 /*break*/, 6];
                case 11:
                    _i++;
                    return [3 /*break*/, 3];
                case 12: 
                /* eslint-enable no-await-in-loop */
                return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      alter table hooks\n        alter column event set not null,\n        drop column name,\n        drop column events,\n        drop column signing_key,\n        drop column enabled;\n      create index hooks__event on hooks (tenant_id, event);\n    "], ["\n      alter table hooks\n        alter column event set not null,\n        drop column name,\n        drop column events,\n        drop column signing_key,\n        drop column enabled;\n      create index hooks__event on hooks (tenant_id, event);\n    "]))))];
                case 13:
                    /* eslint-enable no-await-in-loop */
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
