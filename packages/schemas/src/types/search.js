"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchJointMode = exports.SearchMatchMode = void 0;
/** Mode for matching the given value(s) and database entries. */
var SearchMatchMode;
(function (SearchMatchMode) {
    /** Use `=` or in-array checking. */
    SearchMatchMode["Exact"] = "exact";
    /** Use the keyword `LIKE`. See [Postgres docs](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE). */
    SearchMatchMode["Like"] = "like";
    /** Use the keyword `SIMILAR TO` for regular expression matching. See [Postgres docs](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP). */
    SearchMatchMode["SimilarTo"] = "similar_to";
    /** Use the keyword `POSIX` for regular expression matching. See [Postgres docs](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP). */
    SearchMatchMode["Posix"] = "posix";
})(SearchMatchMode = exports.SearchMatchMode || (exports.SearchMatchMode = {}));
/** Mode for joining multiple expressions when searching. */
var SearchJointMode;
(function (SearchJointMode) {
    SearchJointMode["Or"] = "or";
    SearchJointMode["And"] = "and";
})(SearchJointMode = exports.SearchJointMode || (exports.SearchJointMode = {}));
