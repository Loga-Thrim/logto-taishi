"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveUsersResponseGuard = exports.getNewUsersResponseGuard = void 0;
var zod_1 = require("zod");
var dashboardUsersDataGuard = (0, zod_1.object)({
    count: (0, zod_1.number)(),
    delta: (0, zod_1.number)(),
});
exports.getNewUsersResponseGuard = (0, zod_1.object)({
    today: dashboardUsersDataGuard,
    last7Days: dashboardUsersDataGuard,
});
exports.getActiveUsersResponseGuard = (0, zod_1.object)({
    dauCurve: (0, zod_1.array)((0, zod_1.object)({
        date: (0, zod_1.string)(),
        count: (0, zod_1.number)(),
    })),
    dau: dashboardUsersDataGuard,
    wau: dashboardUsersDataGuard,
    mau: dashboardUsersDataGuard,
});
