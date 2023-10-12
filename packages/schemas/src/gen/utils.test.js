"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_js_1 = require("./utils.js");
describe('splitTableFieldDefinitions', function () {
    it('splitTableFieldDefinitions should split at each comma that is not in the parentheses', function () {
        var segments = ['a', 'b(1)', 'c(2,3)', 'd(4,(5,6))'];
        expect((0, utils_js_1.splitTableFieldDefinitions)(segments.join(','))).toEqual(segments);
        var oneSegment = 'id bigint';
        expect((0, utils_js_1.splitTableFieldDefinitions)(oneSegment)).toEqual([oneSegment]);
    });
});
describe('getType', function () {
    it.each(['varchar(32)[]', 'char', 'text'])('getStringType', function (type) {
        expect((0, utils_js_1.getType)(type)).toBe('string');
    });
    it.each(['int2', 'float4', 'timestamp'])('should return number', function (type) {
        expect((0, utils_js_1.getType)(type)).toBe('number');
    });
});
describe('parseType', function () {
    var length = 128;
    it('should throw without column name', function () {
        expect(function () { return (0, utils_js_1.parseType)('varchar'); }).toThrow();
    });
    it.each(["foo bpchar(".concat(length, ")"), "foo char(".concat(length, ")"), "foo varchar(".concat(length, ")")])('should return the string max length of %s', function (type) {
        expect((0, utils_js_1.parseType)(type)).toMatchObject({
            name: 'foo',
            type: 'string',
            isArray: false,
            isString: true,
            maxLength: length,
            hasDefaultValue: false,
            nullable: true,
            tsType: undefined,
            customType: undefined,
        });
    });
    it.each([
        ['foo text', 'string'],
        ['foo timestamp(6)', 'number'],
        ['foo numeric(4,2)', 'number'],
        ['foo jsonb', 'Record<string, unknown>'],
    ])('should not return the max length since %s is not the character type with length limit', function (value, type) {
        expect((0, utils_js_1.parseType)(value)).toMatchObject({
            name: 'foo',
            type: type,
            isArray: false,
            maxLength: undefined,
            hasDefaultValue: false,
            nullable: true,
            tsType: undefined,
            customType: undefined,
        });
    });
    it('should return isArray', function () {
        expect((0, utils_js_1.parseType)("foo varchar(".concat(length, ")[]"))).toMatchObject({
            name: 'foo',
            type: 'string',
            maxLength: length,
            isArray: true,
        });
        expect((0, utils_js_1.parseType)("foo varchar(".concat(length, ") array"))).toMatchObject({
            name: 'foo',
            type: 'string',
            maxLength: length,
            isArray: true,
        });
    });
    it('should return tsType', function () {
        expect((0, utils_js_1.parseType)("custom_client_metadata jsonb /* @use CustomClientMetadata */ not null default '{}'::jsonb,")).toMatchObject({
            name: 'custom_client_metadata',
            type: 'Record<string, unknown>',
            tsType: 'CustomClientMetadata',
            nullable: false,
            hasDefaultValue: true,
        });
    });
});
