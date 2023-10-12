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
var slonik_1 = require("slonik");
var InternalRole;
(function (InternalRole) {
    InternalRole["Admin"] = "#internal:admin";
})(InternalRole || (InternalRole = {}));
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var m2mRoleIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      select roles.id as \"id\" from roles\n        left join applications_roles on applications_roles.role_id = roles.id and applications_roles.tenant_id = roles.tenant_id\n        left join applications on applications.id = applications_roles.application_id and applications.tenant_id = applications_roles.tenant_id\n      where applications.type = 'MachineToMachine' or roles.name = ", " group by roles.id;\n    "], ["\n      select roles.id as \"id\" from roles\n        left join applications_roles on applications_roles.role_id = roles.id and applications_roles.tenant_id = roles.tenant_id\n        left join applications on applications.id = applications_roles.application_id and applications.tenant_id = applications_roles.tenant_id\n      where applications.type = 'MachineToMachine' or roles.name = ", " group by roles.id;\n    "])), InternalRole.Admin))];
                case 1:
                    m2mRoleIds = (_a.sent()).rows;
                    // Add `type` column to `roles` table, and set `type` to 'MachineToMachine' for all m2m roles.
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      create type role_type as enum ('User', 'MachineToMachine');\n    "], ["\n      create type role_type as enum ('User', 'MachineToMachine');\n    "]))))];
                case 2:
                    // Add `type` column to `roles` table, and set `type` to 'MachineToMachine' for all m2m roles.
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["alter table roles add column type role_type not null default 'User';"], ["alter table roles add column type role_type not null default 'User';"]))))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      update roles set type = 'MachineToMachine' where id in (", ");\n    "], ["\n      update roles set type = 'MachineToMachine' where id in (", ");\n    "])), slonik_1.sql.join(m2mRoleIds.map(function (_a) {
                            var id = _a.id;
                            return id;
                        }), (0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject([", "], [", "]))))))];
                case 4:
                    _a.sent();
                    // Add role type check function and constraints for recording user/application-role relations.
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      create function check_role_type(role_id varchar(21), target_type role_type) returns boolean as\n      $$ begin\n        return (select type from roles where id = role_id) = target_type;\n      end; $$ language plpgsql;\n    "], ["\n      create function check_role_type(role_id varchar(21), target_type role_type) returns boolean as\n      $$ begin\n        return (select type from roles where id = role_id) = target_type;\n      end; $$ language plpgsql;\n    "]))))];
                case 5:
                    // Add role type check function and constraints for recording user/application-role relations.
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      alter table users_roles add constraint users_roles__role_type\n          check (check_role_type(role_id, 'User'));\n    "], ["\n      alter table users_roles add constraint users_roles__role_type\n          check (check_role_type(role_id, 'User'));\n    "]))))];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["alter table applications_roles add constraint applications_roles__role_type check (check_role_type(role_id, 'MachineToMachine'));"], ["alter table applications_roles add constraint applications_roles__role_type check (check_role_type(role_id, 'MachineToMachine'));"]))))];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["alter table applications_roles drop constraint applications_roles__role_type;"], ["alter table applications_roles drop constraint applications_roles__role_type;"]))))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["alter table users_roles drop constraint users_roles__role_type;"], ["alter table users_roles drop constraint users_roles__role_type;"]))))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["drop function check_role_type;"], ["drop function check_role_type;"]))))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["alter table roles drop column type;"], ["alter table roles drop column type;"]))))];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["drop type role_type;"], ["drop type role_type;"]))))];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
