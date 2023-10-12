"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseType = exports.getType = exports.splitTableFieldDefinitions = exports.findFirstParentheses = exports.removeUnrecognizedComments = exports.stripLeadingJsDocComments = exports.normalizeWhitespaces = void 0;
var essentials_1 = require("@silverhand/essentials");
var normalizeWhitespaces = function (string) {
    return string.replaceAll(/\s+/g, ' ').trim();
};
exports.normalizeWhitespaces = normalizeWhitespaces;
// eslint-disable-next-line unicorn/prevent-abbreviations -- JSDoc is a term
var leadingJsDocRegex = /^\s*\/\*\*([^*]*?)\*\//;
// eslint-disable-next-line unicorn/prevent-abbreviations -- JSDoc is a term
var stripLeadingJsDocComments = function (string) {
    return string.replace(leadingJsDocRegex, '').trim();
};
exports.stripLeadingJsDocComments = stripLeadingJsDocComments;
// eslint-disable-next-line unicorn/prevent-abbreviations -- JSDoc is a term
var getLeadingJsDocComments = function (string) { var _a; return (_a = leadingJsDocRegex.exec(string)) === null || _a === void 0 ? void 0 : _a[1]; };
// Remove all comments not start with @
var removeUnrecognizedComments = function (string) {
    return string.replaceAll(/\/\*(?!\s@)[^*]+\*\//g, '');
};
exports.removeUnrecognizedComments = removeUnrecognizedComments;
var getCountDelta = function (value) {
    if (value === '(') {
        return 1;
    }
    if (value === ')') {
        return -1;
    }
    return 0;
};
var findFirstParentheses = function (value) {
    var _a = Object.values(value).reduce(function (previous, current) {
        var count = previous.count + getCountDelta(current);
        if (count === 0) {
            if (current === ')') {
                return __assign(__assign({}, previous), { count: count, matched: true });
            }
            return __assign(__assign({}, previous), { count: count, prefix: previous.prefix + current });
        }
        return __assign(__assign({}, previous), { count: count, body: previous.body + (count === 1 && current === '(' ? '' : current) });
    }, {
        body: '',
        prefix: '',
        count: 0,
        matched: false,
    }), matched = _a.matched, count = _a.count, rest = __rest(_a, ["matched", "count"]);
    return matched ? rest : undefined;
};
exports.findFirstParentheses = findFirstParentheses;
var splitTableFieldDefinitions = function (value) {
    // Split at each comma that is not in parentheses
    return Object.values(value).reduce(function (_a, current) {
        var _b, _c;
        var result = _a.result, previousCount = _a.count;
        var count = previousCount + getCountDelta(current);
        if (count === 0 &&
            current === ',' &&
            // Ignore commas in JSDoc comments
            !(0, exports.stripLeadingJsDocComments)((_b = result.at(-1)) !== null && _b !== void 0 ? _b : '').includes('/**')) {
            return {
                result: __spreadArray(__spreadArray([], result, true), [''], false),
                count: count,
            };
        }
        var rest = result.slice(0, -1);
        var last = (_c = result.at(-1)) !== null && _c !== void 0 ? _c : '';
        return {
            result: __spreadArray(__spreadArray([], rest, true), ["".concat(last).concat(current)], false),
            count: count,
        };
    }, {
        result: [''],
        count: 0,
    }).result;
};
exports.splitTableFieldDefinitions = splitTableFieldDefinitions;
var getRawType = function (value) {
    var squareBracketIndex = value.indexOf('[');
    var parenthesesIndex = value.indexOf('(');
    if (parenthesesIndex !== -1) {
        return value.slice(0, parenthesesIndex);
    }
    return squareBracketIndex === -1 ? value : value.slice(0, squareBracketIndex);
};
// Reference: https://github.com/SweetIQ/schemats/blob/7c3d3e16b5d507b4d9bd246794e7463b05d20e75/src/schemaPostgres.ts
// eslint-disable-next-line complexity
var getType = function (value) {
    switch (getRawType(value)) {
        case 'bpchar': // https://www.postgresql.org/docs/current/typeconv-query.html
        case 'char':
        case 'varchar':
        case 'text':
        case 'citext':
        case 'uuid':
        case 'bytea':
        case 'inet':
        case 'time':
        case 'timetz':
        case 'interval':
        case 'name': {
            return 'string';
        }
        case 'int2':
        case 'int4':
        case 'int8':
        case 'bigint':
        case 'float4':
        case 'float8':
        case 'numeric':
        case 'money':
        case 'oid':
        case 'date':
        case 'timestamp':
        case 'timestamptz': {
            return 'number';
        }
        case 'boolean': {
            // https://www.postgresql.org/docs/14/datatype-boolean.html
            return 'boolean';
        }
        case 'json':
        case 'jsonb': {
            return 'Record<string, unknown>';
        }
        default:
    }
};
exports.getType = getType;
var parseStringMaxLength = function (rawType) {
    var squareBracketIndex = rawType.indexOf('[');
    var parenthesesMatch = (0, exports.findFirstParentheses)(squareBracketIndex === -1 ? rawType : rawType.slice(0, squareBracketIndex));
    return (0, essentials_1.conditional)(parenthesesMatch &&
        ['bpchar', 'char', 'varchar'].includes(parenthesesMatch.prefix) &&
        Number(parenthesesMatch.body));
};
var parseType = function (tableFieldDefinition) {
    var _a;
    var normalized = (0, exports.stripLeadingJsDocComments)(tableFieldDefinition);
    var comments = getLeadingJsDocComments(tableFieldDefinition);
    var _b = normalized.split(' '), nameRaw = _b[0], typeRaw = _b[1], rest = _b.slice(2);
    (0, essentials_1.assert)(nameRaw && typeRaw, new Error('Missing field name or type: ' + normalized));
    var name = nameRaw.toLowerCase();
    var type = typeRaw.toLowerCase();
    var restJoined = rest.join(' ');
    var restLowercased = restJoined.toLowerCase();
    var primitiveType = (0, exports.getType)(type);
    var isString = primitiveType === 'string';
    // CAUTION: Only works for single dimension arrays
    var isArray = Boolean(/\[.*]/.test(type)) || restLowercased.includes('array');
    var hasDefaultValue = restLowercased.includes('default');
    var nullable = !restLowercased.includes('not null');
    var tsType = (_a = /\/\* @use (.*) \*\//.exec(restJoined)) === null || _a === void 0 ? void 0 : _a[1];
    (0, essentials_1.assert)(!(!primitiveType && tsType), new Error("TS type can only be applied on primitive types, found ".concat(tsType !== null && tsType !== void 0 ? tsType : 'N/A', " over ").concat(type)));
    return {
        name: name,
        comments: comments,
        type: primitiveType,
        isString: isString,
        isArray: isArray,
        maxLength: (0, essentials_1.conditional)(isString && parseStringMaxLength(type)),
        customType: (0, essentials_1.conditional)(!primitiveType && type),
        tsType: tsType,
        hasDefaultValue: hasDefaultValue,
        nullable: nullable,
    };
};
exports.parseType = parseType;
