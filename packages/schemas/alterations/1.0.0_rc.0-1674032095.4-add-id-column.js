"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
Object.defineProperty(exports, "__esModule", { value: true });
var slonik_1 = require("slonik");
// https://github.com/viascom/nanoid-postgres/blob/main/nanoid.sql
// Removed `_-` from the default alphabet to match our JS ID generator.
var createNanoId = (0, slonik_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /*\n   * Copyright 2022 Viascom Ltd liab. Co\n   *\n   * Licensed to the Apache Software Foundation (ASF) under one\n   * or more contributor license agreements.  See the NOTICE file\n   * distributed with this work for additional information\n   * regarding copyright ownership.  The ASF licenses this file\n   * to you under the Apache License, Version 2.0 (the\n   * \"License\"); you may not use this file except in compliance\n   * with the License.  You may obtain a copy of the License at\n   *\n   *   http://www.apache.org/licenses/LICENSE-2.0\n   *\n   * Unless required by applicable law or agreed to in writing,\n   * software distributed under the License is distributed on an\n   * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n   * KIND, either express or implied.  See the License for the\n   * specific language governing permissions and limitations\n   * under the License.\n   */\n\n  CREATE EXTENSION IF NOT EXISTS pgcrypto;\n\n  CREATE OR REPLACE FUNCTION nanoid(size int DEFAULT 21, alphabet text DEFAULT '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')\n      RETURNS text\n      LANGUAGE plpgsql\n      volatile\n  AS\n  $$\n  DECLARE\n      idBuilder     text := '';\n      i             int  := 0;\n      bytes         bytea;\n      alphabetIndex int;\n      mask          int;\n      step          int;\n  BEGIN\n      mask := (2 << cast(floor(log(length(alphabet) - 1) / log(2)) as int)) - 1;\n      step := cast(ceil(1.6 * mask * size / length(alphabet)) AS int);\n\n      while true\n          loop\n              bytes := gen_random_bytes(size);\n              while i < size\n                  loop\n                      alphabetIndex := (get_byte(bytes, i) & mask) + 1;\n                      if alphabetIndex <= length(alphabet) then\n                          idBuilder := idBuilder || substr(alphabet, alphabetIndex, 1);\n                          if length(idBuilder) = size then\n                              return idBuilder;\n                          end if;\n                      end if;\n                      i = i + 1;\n                  end loop;\n\n              i := 0;\n          end loop;\n  END\n  $$;\n"], ["\n  /*\n   * Copyright 2022 Viascom Ltd liab. Co\n   *\n   * Licensed to the Apache Software Foundation (ASF) under one\n   * or more contributor license agreements.  See the NOTICE file\n   * distributed with this work for additional information\n   * regarding copyright ownership.  The ASF licenses this file\n   * to you under the Apache License, Version 2.0 (the\n   * \"License\"); you may not use this file except in compliance\n   * with the License.  You may obtain a copy of the License at\n   *\n   *   http://www.apache.org/licenses/LICENSE-2.0\n   *\n   * Unless required by applicable law or agreed to in writing,\n   * software distributed under the License is distributed on an\n   * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n   * KIND, either express or implied.  See the License for the\n   * specific language governing permissions and limitations\n   * under the License.\n   */\n\n  CREATE EXTENSION IF NOT EXISTS pgcrypto;\n\n  CREATE OR REPLACE FUNCTION nanoid(size int DEFAULT 21, alphabet text DEFAULT '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')\n      RETURNS text\n      LANGUAGE plpgsql\n      volatile\n  AS\n  $$\n  DECLARE\n      idBuilder     text := '';\n      i             int  := 0;\n      bytes         bytea;\n      alphabetIndex int;\n      mask          int;\n      step          int;\n  BEGIN\n      mask := (2 << cast(floor(log(length(alphabet) - 1) / log(2)) as int)) - 1;\n      step := cast(ceil(1.6 * mask * size / length(alphabet)) AS int);\n\n      while true\n          loop\n              bytes := gen_random_bytes(size);\n              while i < size\n                  loop\n                      alphabetIndex := (get_byte(bytes, i) & mask) + 1;\n                      if alphabetIndex <= length(alphabet) then\n                          idBuilder := idBuilder || substr(alphabet, alphabetIndex, 1);\n                          if length(idBuilder) = size then\n                              return idBuilder;\n                          end if;\n                      end if;\n                      i = i + 1;\n                  end loop;\n\n              i := 0;\n          end loop;\n  END\n  $$;\n"])));
var getId = function (value) { return slonik_1.sql.identifier([value]); };
var tablesWithId = [
    { table: 'applications_roles', primaryKeys: ['application_id', 'role_id'] },
    { table: 'custom_phrases', primaryKeys: ['language_tag'] },
    { table: 'roles_scopes', primaryKeys: ['role_id', 'scope_id'] },
    { table: 'users_roles', primaryKeys: ['user_id', 'role_id'] },
];
var alteration = {
    up: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query(createNanoId)];
                case 1:
                    _a.sent();
                    // Add id column to tables
                    return [4 /*yield*/, Promise.all(tablesWithId.map(function (_a) {
                            var table = _a.table, primaryKeys = _a.primaryKeys;
                            return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    return [2 /*return*/, pool.query((0, slonik_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          alter table ", "\n            add column id varchar(21) not null default nanoid(),\n            drop constraint ", ",\n            add primary key (id),\n            add constraint ", "\n              unique (", ");\n        "], ["\n          alter table ", "\n            add column id varchar(21) not null default nanoid(),\n            drop constraint ", ",\n            add primary key (id),\n            add constraint ", "\n              unique (", ");\n        "])), getId(table), getId(table + '_pkey'), getId(table + '__' + primaryKeys.join('_')), slonik_1.sql.join(primaryKeys.map(function (key) { return getId(key); }), (0, slonik_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject([", "], [", "]))))))];
                                });
                            });
                        }))];
                case 2:
                    // Add id column to tables
                    _a.sent();
                    // Nano IDs should be generated by JS to align with other tables, so we drop the default value here.
                    // Also usually backend server has a better specification. :-)
                    return [4 /*yield*/, Promise.all(tablesWithId.map(function (_a) {
                            var table = _a.table;
                            return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    return [2 /*return*/, pool.query((0, slonik_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          alter table ", " alter column id drop default;\n        "], ["\n          alter table ", " alter column id drop default;\n        "])), getId(table)))];
                                });
                            });
                        }))];
                case 3:
                    // Nano IDs should be generated by JS to align with other tables, so we drop the default value here.
                    // Also usually backend server has a better specification. :-)
                    _a.sent();
                    return [4 /*yield*/, pool.query((0, slonik_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["drop function nanoid;"], ["drop function nanoid;"]))))];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (pool) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Add id column to tables
                return [4 /*yield*/, Promise.all(tablesWithId.map(function (_a) {
                        var table = _a.table, primaryKeys = _a.primaryKeys;
                        return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                return [2 /*return*/, pool.query((0, slonik_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          alter table ", "\n            drop column id,\n            drop constraint ", ",\n            add primary key (", ");\n        "], ["\n          alter table ", "\n            drop column id,\n            drop constraint ", ",\n            add primary key (", ");\n        "])), getId(table), getId(table + '__' + primaryKeys.join('_')), slonik_1.sql.join(primaryKeys.map(function (key) { return getId(key); }), (0, slonik_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject([", "], [", "]))))))];
                            });
                        });
                    }))];
                case 1:
                    // Add id column to tables
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = alteration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
