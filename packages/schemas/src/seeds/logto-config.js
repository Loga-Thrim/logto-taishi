"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCloudConnectionConfig = exports.createDefaultAdminConsoleConfig = void 0;
var index_js_1 = require("../types/index.js");
var cloud_api_js_1 = require("./cloud-api.js");
var createDefaultAdminConsoleConfig = function (forTenantId) {
    return Object.freeze({
        tenantId: forTenantId,
        key: index_js_1.LogtoTenantConfigKey.AdminConsole,
        value: {
            signInExperienceCustomized: false,
        },
    });
};
exports.createDefaultAdminConsoleConfig = createDefaultAdminConsoleConfig;
var createCloudConnectionConfig = function (forTenantId, appId, appSecret) {
    return Object.freeze({
        tenantId: forTenantId,
        key: index_js_1.LogtoTenantConfigKey.CloudConnection,
        value: {
            appId: appId,
            appSecret: appSecret,
            resource: cloud_api_js_1.cloudApiIndicator,
        },
    });
};
exports.createCloudConnectionConfig = createCloudConnectionConfig;
