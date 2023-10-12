"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isManagementApi = void 0;
var isManagementApi = function (indicator) {
    return /^https:\/\/[^.]+\.logto\.app\/api$/.test(indicator);
};
exports.isManagementApi = isManagementApi;
