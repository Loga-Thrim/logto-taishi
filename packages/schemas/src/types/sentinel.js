"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentinel = void 0;
/**
 * The sentinel class interface.
 *
 * Sentinels are responsible for accepting activity reports and making decisions based on them.
 *
 * For example, for a user sign-in activity, the sentinel might decide to:
 *
 * - Accept since the user uses the same device and location as usual;
 * - Require a MFA code since the user uses a new device or location;
 * - Block the user since the user tried to sign-in too many times with an incorrect password.
 *
 * The implementation should be privacy-aware and not store any personal identifiable information.
 */
var Sentinel = /** @class */ (function () {
    function Sentinel() {
    }
    return Sentinel;
}());
exports.Sentinel = Sentinel;
