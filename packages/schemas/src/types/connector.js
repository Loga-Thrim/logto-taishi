"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectorFactoryResponseGuard = exports.connectorResponseGuard = exports.ConnectorPlatform = exports.ConnectorType = void 0;
var connector_kit_1 = require("@logto/connector-kit");
var zod_1 = require("zod");
var index_js_1 = require("../db-entries/index.js");
var connector_kit_2 = require("@logto/connector-kit");
Object.defineProperty(exports, "ConnectorType", { enumerable: true, get: function () { return connector_kit_2.ConnectorType; } });
Object.defineProperty(exports, "ConnectorPlatform", { enumerable: true, get: function () { return connector_kit_2.ConnectorPlatform; } });
exports.connectorResponseGuard = index_js_1.Connectors.guard
    .pick({
    id: true,
    syncProfile: true,
    config: true,
    metadata: true,
    connectorId: true,
})
    .merge(connector_kit_1.connectorMetadataGuard)
    .merge(zod_1.z.object({
    type: zod_1.z.nativeEnum(connector_kit_1.ConnectorType),
    isDemo: zod_1.z.boolean().optional(),
    extraInfo: zod_1.z.record(zod_1.z.unknown()).optional(),
    usage: zod_1.z.number().optional(),
}));
exports.connectorFactoryResponseGuard = zod_1.z
    .object({
    type: zod_1.z.nativeEnum(connector_kit_1.ConnectorType),
    isDemo: zod_1.z.boolean().optional(),
})
    .merge(connector_kit_1.connectorMetadataGuard);
