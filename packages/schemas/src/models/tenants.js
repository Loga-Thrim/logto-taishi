"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantInfoGuard = exports.Tenants = exports.TenantTag = void 0;
var model_1 = require("@withtyped/server/model");
var zod_1 = require("zod");
var TenantTag;
(function (TenantTag) {
    TenantTag["Development"] = "development";
    TenantTag["Staging"] = "staging";
    TenantTag["Production"] = "production";
})(TenantTag = exports.TenantTag || (exports.TenantTag = {}));
exports.Tenants = (0, model_1.createModel)(
/* Sql */ "\n  /* init_order = 0 */\n  create table tenants (\n    id varchar(21) not null,\n    db_user varchar(128),\n    db_user_password varchar(128),\n    name varchar(128) not null default 'My Project',\n    tag varchar(64) not null default '".concat(TenantTag.Development, "',\n    created_at timestamptz not null default(now()),\n    is_suspended boolean not null default false,\n    primary key (id),\n    constraint tenants__db_user\n      unique (db_user)\n  );\n  /* no_after_each */\n"), 'public')
    .extend('tag', zod_1.z.nativeEnum(TenantTag))
    .extend('createdAt', { readonly: true });
exports.tenantInfoGuard = exports.Tenants.guard('model')
    .pick({ id: true, name: true, tag: true, isSuspended: true })
    .extend({ indicator: zod_1.z.string() });
