"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInternalRole = exports.internalRolePrefix = void 0;
exports.internalRolePrefix = '#internal:';
var isInternalRole = function (roleName) { return roleName.startsWith(exports.internalRolePrefix); };
exports.isInternalRole = isInternalRole;
