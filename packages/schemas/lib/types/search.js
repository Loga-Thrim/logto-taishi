/** Mode for matching the given value(s) and database entries. */
export var SearchMatchMode;
(function (SearchMatchMode) {
    /** Use `=` or in-array checking. */
    SearchMatchMode["Exact"] = "exact";
    /** Use the keyword `LIKE`. See [Postgres docs](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE). */
    SearchMatchMode["Like"] = "like";
    /** Use the keyword `SIMILAR TO` for regular expression matching. See [Postgres docs](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP). */
    SearchMatchMode["SimilarTo"] = "similar_to";
    /** Use the keyword `POSIX` for regular expression matching. See [Postgres docs](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP). */
    SearchMatchMode["Posix"] = "posix";
})(SearchMatchMode || (SearchMatchMode = {}));
/** Mode for joining multiple expressions when searching. */
export var SearchJointMode;
(function (SearchJointMode) {
    SearchJointMode["Or"] = "or";
    SearchJointMode["And"] = "and";
})(SearchJointMode || (SearchJointMode = {}));
