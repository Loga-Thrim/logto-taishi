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
var getDatabaseName = function (pool) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDatabase;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pool.one((0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    select current_database();\n  "], ["\n    select current_database();\n  "]))))];
            case 1:
                currentDatabase = (_a.sent()).currentDatabase;
                return [2 /*return*/, currentDatabase.replaceAll('-', '_')];
        }
    });
}); };
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        var database, baseRoleId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDatabaseName(pool)];
                case 1:
                    database = _a.sent();
                    baseRoleId = slonik_1.sql.identifier(["logto_tenant_".concat(database)]);
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      create type sentinel_action_result as enum ('Success', 'Failed');\n\n      create type sentinel_decision as enum ('Undecided', 'Allowed', 'Blocked', 'Challenge');\n\n      create table sentinel_activities (\n        tenant_id varchar(21) not null\n          references tenants (id) on update cascade on delete cascade,\n        id varchar(21) not null,\n        /** The target that the action was performed on. */\n        target_type varchar(32) /* @use SentinelActivityTargetType */ not null,\n        /** The target hashed identifier. */\n        target_hash varchar(64) not null,\n        /** The action name that was performed. */\n        action varchar(64) /* @use SentinelActivityAction */ not null,\n        /** If the action was successful or not. */\n        action_result sentinel_action_result not null,\n        /** Additional payload data if any. */\n        payload jsonb /* @use SentinelActivityPayload */ not null,\n        /** The sentinel decision for the action. */\n        decision sentinel_decision not null,\n        /** The expiry date of the decision. */\n        decision_expires_at timestamptz not null default(now()),\n        /** The time the activity was created. */\n        created_at timestamptz not null default(now()),\n        primary key (id)\n      );\n\n      create index sentinel_activities__id\n        on sentinel_activities (tenant_id, id);\n\n      create index sentinel_activities__target_type_target_hash_action_action_result_decision\n        on sentinel_activities (tenant_id, target_type, target_hash, action, action_result, decision);\n\n      create trigger set_tenant_id before insert on sentinel_activities\n        for each row execute procedure set_tenant_id();\n\n      alter table sentinel_activities enable row level security;\n\n      create policy sentinel_activities_tenant_id on sentinel_activities\n        as restrictive\n        using (tenant_id = (select id from tenants where db_user = current_user));\n\n      create policy sentinel_activities_modification on sentinel_activities\n        using (true);\n\n      grant select, insert, update, delete on sentinel_activities to ", ";\n    "], ["\n      create type sentinel_action_result as enum ('Success', 'Failed');\n\n      create type sentinel_decision as enum ('Undecided', 'Allowed', 'Blocked', 'Challenge');\n\n      create table sentinel_activities (\n        tenant_id varchar(21) not null\n          references tenants (id) on update cascade on delete cascade,\n        id varchar(21) not null,\n        /** The target that the action was performed on. */\n        target_type varchar(32) /* @use SentinelActivityTargetType */ not null,\n        /** The target hashed identifier. */\n        target_hash varchar(64) not null,\n        /** The action name that was performed. */\n        action varchar(64) /* @use SentinelActivityAction */ not null,\n        /** If the action was successful or not. */\n        action_result sentinel_action_result not null,\n        /** Additional payload data if any. */\n        payload jsonb /* @use SentinelActivityPayload */ not null,\n        /** The sentinel decision for the action. */\n        decision sentinel_decision not null,\n        /** The expiry date of the decision. */\n        decision_expires_at timestamptz not null default(now()),\n        /** The time the activity was created. */\n        created_at timestamptz not null default(now()),\n        primary key (id)\n      );\n\n      create index sentinel_activities__id\n        on sentinel_activities (tenant_id, id);\n\n      create index sentinel_activities__target_type_target_hash_action_action_result_decision\n        on sentinel_activities (tenant_id, target_type, target_hash, action, action_result, decision);\n\n      create trigger set_tenant_id before insert on sentinel_activities\n        for each row execute procedure set_tenant_id();\n\n      alter table sentinel_activities enable row level security;\n\n      create policy sentinel_activities_tenant_id on sentinel_activities\n        as restrictive\n        using (tenant_id = (select id from tenants where db_user = current_user));\n\n      create policy sentinel_activities_modification on sentinel_activities\n        using (true);\n\n      grant select, insert, update, delete on sentinel_activities to ", ";\n    "])), baseRoleId))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      drop policy sentinel_activities_tenant_id on sentinel_activities;\n      drop policy sentinel_activities_modification on sentinel_activities;\n\n      drop table sentinel_activities;\n      drop type sentinel_action_result;\n      drop type sentinel_decision;\n    "], ["\n      drop policy sentinel_activities_tenant_id on sentinel_activities;\n      drop policy sentinel_activities_modification on sentinel_activities;\n\n      drop table sentinel_activities;\n      drop type sentinel_action_result;\n      drop type sentinel_decision;\n    "]))))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3;
