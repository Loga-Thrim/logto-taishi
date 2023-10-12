"use strict";

console.log('================================ > > > > Fucked you')
// LOG-88: Refactor '@logto/schemas' type gen
// Consider add the better assert into `essentials` package
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var node_assert_1 = require("node:assert");
var promises_1 = require("node:fs/promises");
var node_path_1 = require("node:path");
var essentials_1 = require("@silverhand/essentials");
var camelcase_1 = require("camelcase");
var pluralize_1 = require("pluralize");
var schema_js_1 = require("./schema.js");
var utils_js_1 = require("./utils.js");
var directory = 'tables';
var constrainedKeywords = [
    'primary',
    'foreign',
    'unique',
    'exclude',
    'check',
    'constraint',
    'references',
];
var getOutputFileName = function (file) { return (0, pluralize_1.default)(file.slice(0, -4).replaceAll('_', '-'), 1); };
var generate = function () { return __awaiter(void 0, void 0, void 0, function () {
    var files, generated, generatedDirectory, generatedTypesFilename, tsTypesFilename, header, allTypes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, promises_1.default.readdir(directory)];
            case 1:
                files = _a.sent();
                return [4 /*yield*/, Promise.all(files
                        .filter(function (file) { return file.endsWith('.sql'); })
                        .map(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                        var paragraph, statements, tables, types;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, promises_1.default.readFile(node_path_1.default.join(directory, file), { encoding: 'utf8' })];
                                case 1:
                                    paragraph = _a.sent();
                                    statements = paragraph
                                        .split(';')
                                        .map(function (value) { return (0, utils_js_1.removeUnrecognizedComments)(value); })
                                        .map(function (value) { return (0, utils_js_1.normalizeWhitespaces)(value); });
                                    tables = statements
                                        .filter(function (value) { return value.toLowerCase().startsWith('create table'); })
                                        .map(function (value) { return (0, utils_js_1.findFirstParentheses)(value); })
                                        // eslint-disable-next-line unicorn/prefer-native-coercion-functions
                                        .filter(function (value) { return Boolean(value); })
                                        .map(function (_a) {
                                        var prefix = _a.prefix, body = _a.body;
                                        var name = (0, utils_js_1.normalizeWhitespaces)(prefix).split(' ')[2];
                                        (0, node_assert_1.default)(name, 'Missing table name: ' + prefix);
                                        var fields = (0, utils_js_1.splitTableFieldDefinitions)(body)
                                            .map(function (value) { return (0, utils_js_1.normalizeWhitespaces)(value); })
                                            .filter(function (value) {
                                            return constrainedKeywords.every(function (constraint) {
                                                return !(0, utils_js_1.stripLeadingJsDocComments)(value)
                                                    .toLowerCase()
                                                    .startsWith(constraint + ' ');
                                            });
                                        })
                                            .map(function (value) { return (0, utils_js_1.parseType)(value); });
                                        return { name: name, fields: fields };
                                    });
                                    types = statements
                                        .filter(function (value) { return value.toLowerCase().startsWith('create type'); })
                                        .map(function (value) {
                                        var _a, _b;
                                        var breakdowns = value.split(' ');
                                        var name = breakdowns[2];
                                        var data = (0, utils_js_1.findFirstParentheses)(value);
                                        (0, node_assert_1.default)(name &&
                                            data &&
                                            ((_a = breakdowns[3]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'as' &&
                                            ((_b = breakdowns[4]) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'enum', 'Only support enum custom type');
                                        var values = data.body.split(',').map(function (value) { return value.trim().slice(1, -1); });
                                        return { name: name, type: 'enum', values: values };
                                    });
                                    return [2 /*return*/, [file, { tables: tables, types: types }]];
                            }
                        });
                    }); }))];
            case 2:
                generated = _a.sent();
                generatedDirectory = 'src/db-entries';
                generatedTypesFilename = 'custom-types';
                tsTypesFilename = '../foundations/index';
                header = '// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n\n';
                return [4 /*yield*/, promises_1.default.rm(generatedDirectory, { recursive: true, force: true })];
            case 3:
                _a.sent();
                return [4 /*yield*/, promises_1.default.mkdir(generatedDirectory, { recursive: true })];
            case 4:
                _a.sent();
                allTypes = generated
                    .flatMap(function (data) { return data[1].types; })
                    .map(function (type) { return (__assign(__assign({}, type), { tsName: (0, camelcase_1.default)(type.name, { pascalCase: true }) })); });
                if (!(allTypes.length > 0)) return [3 /*break*/, 6];
                // Generate custom types
                return [4 /*yield*/, promises_1.default.writeFile(node_path_1.default.join(generatedDirectory, "".concat(generatedTypesFilename, ".ts")), header +
                        allTypes
                            .map(function (_a) {
                            var tsName = _a.tsName, values = _a.values;
                            return __spreadArray(__spreadArray([
                                "export enum ".concat(tsName, " {")
                            ], values.map(function (value) { return "  ".concat(value, " = '").concat(value, "',"); }), true), [
                                '}',
                            ], false).join('\n');
                        })
                            .join('\n') +
                        '\n')];
            case 5:
                // Generate custom types
                _a.sent();
                _a.label = 6;
            case 6: 
            // Generate DB entry types
            return [4 /*yield*/, Promise.all(generated.map(function (_a) {
                    var file = _a[0], tables = _a[1].tables;
                    return __awaiter(void 0, void 0, void 0, function () {
                        var tsTypes, customTypes, tableWithTypes, importZod, importTsTypes, importTypes, content;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    tsTypes = [];
                                    customTypes = [];
                                    tableWithTypes = tables.map(function (_a) {
                                        var fields = _a.fields, rest = __rest(_a, ["fields"]);
                                        return (__assign(__assign({}, rest), { fields: fields.map(function (_a) {
                                                var _b, _c;
                                                var type = _a.type, customType = _a.customType, tsType = _a.tsType, rest = __rest(_a, ["type", "customType", "tsType"]);
                                                var finalType = (_b = tsType !== null && tsType !== void 0 ? tsType : type) !== null && _b !== void 0 ? _b : (_c = allTypes.find(function (_a) {
                                                    var name = _a.name;
                                                    return name === customType;
                                                })) === null || _c === void 0 ? void 0 : _c.tsName;
                                                (0, node_assert_1.default)(finalType, "Type ".concat(customType !== null && customType !== void 0 ? customType : 'N/A', " not found"));
                                                if (tsType) {
                                                    tsTypes.push(tsType, "".concat((0, camelcase_1.default)(tsType), "Guard"));
                                                }
                                                else if (!type) {
                                                    customTypes.push(finalType);
                                                }
                                                return __assign(__assign({}, rest), { tsType: tsType, type: finalType, isEnum: !tsType && !type });
                                            }) }));
                                    });
                                    if (tableWithTypes.length > 0) {
                                        tsTypes.push('GeneratedSchema', 'Guard', 'CreateGuard');
                                    }
                                    importZod = (0, essentials_1.conditionalString)(tableWithTypes.length > 0 && "import { z } from 'zod';\n\n");
                                    importTsTypes = (0, essentials_1.conditionalString)(tsTypes.length > 0 &&
                                        [
                                            'import {',
                                            (0, essentials_1.deduplicate)(tsTypes)
                                                .map(function (value) { return "  ".concat(value); })
                                                .join(',\n'),
                                            "} from'./".concat(tsTypesFilename, ".js';"),
                                        ].join('\n') + '\n\n');
                                    importTypes = (0, essentials_1.conditionalString)(customTypes.length > 0 &&
                                        [
                                            'import {',
                                            (0, essentials_1.deduplicate)(customTypes)
                                                .map(function (value) { return "  ".concat(value); })
                                                .join(',\n'),
                                            "} from'./".concat(generatedTypesFilename, ".js';"),
                                        ].join('\n') + '\n\n');
                                    content = header +
                                        importZod +
                                        importTsTypes +
                                        importTypes +
                                        tableWithTypes.map(function (table) { return (0, schema_js_1.generateSchema)(table); }).join('\n') +
                                        '\n';
                                    return [4 /*yield*/, promises_1.default.writeFile(node_path_1.default.join(generatedDirectory, getOutputFileName(file) + '.ts'), content)];
                                case 1:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                }))];
            case 7:
                // Generate DB entry types
                _a.sent();
                return [4 /*yield*/, promises_1.default.writeFile(node_path_1.default.join(generatedDirectory, 'index.ts'), header +
                        (0, essentials_1.conditionalString)(allTypes.length > 0 && "export * from'./".concat(generatedTypesFilename, ".js';\n")) +
                        generated.map(function (_a) {
                            var file = _a[0];
                            return "export * from'./".concat(getOutputFileName(file), ".js';");
                        }).join('\n') +
                        '\n')];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
void generate();
