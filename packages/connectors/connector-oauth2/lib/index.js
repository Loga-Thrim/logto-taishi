import { got, HTTPError } from 'got';
import { ConnectorPlatform, ConnectorConfigFormItemType, ConnectorError, ConnectorErrorCodes, parseJson, ConnectorType, validateConfig, parseJsonObject } from '@logto/connector-kit';
import { z } from 'zod';

// https://github.com/facebook/jest/issues/7547
const assert = (value, error) => {
    if (!value) {
        // https://github.com/typescript-eslint/typescript-eslint/issues/3814
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw error;
    }
};

const pick = (object, ...keys) => {
    // eslint-disable-next-line no-restricted-syntax
    return Object.fromEntries(keys.map((key) => [key, object[key]]));
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
				var args = [null];
				args.push.apply(args, arguments);
				var Ctor = Function.bind.apply(f, args);
				return new Ctor();
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var mapObj = {exports: {}};

const isObject = value => typeof value === 'object' && value !== null;
const mapObjectSkip = Symbol('skip');

// Customized for this use-case
const isObjectCustom = value =>
	isObject(value) &&
	!(value instanceof RegExp) &&
	!(value instanceof Error) &&
	!(value instanceof Date);

const mapObject = (object, mapper, options, isSeen = new WeakMap()) => {
	options = {
		deep: false,
		target: {},
		...options
	};

	if (isSeen.has(object)) {
		return isSeen.get(object);
	}

	isSeen.set(object, options.target);

	const {target} = options;
	delete options.target;

	const mapArray = array => array.map(element => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
	if (Array.isArray(object)) {
		return mapArray(object);
	}

	for (const [key, value] of Object.entries(object)) {
		const mapResult = mapper(key, value, object);

		if (mapResult === mapObjectSkip) {
			continue;
		}

		let [newKey, newValue, {shouldRecurse = true} = {}] = mapResult;

		// Drop `__proto__` keys.
		if (newKey === '__proto__') {
			continue;
		}

		if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
			newValue = Array.isArray(newValue) ?
				mapArray(newValue) :
				mapObject(newValue, mapper, options, isSeen);
		}

		target[newKey] = newValue;
	}

	return target;
};

mapObj.exports = (object, mapper, options) => {
	if (!isObject(object)) {
		throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
	}

	return mapObject(object, mapper, options);
};

mapObj.exports.mapObjectSkip = mapObjectSkip;

var mapObjExports = mapObj.exports;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}

function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "." }, options));
}

function snakeCase$1(input, options) {
    if (options === void 0) { options = {}; }
    return dotCase(input, __assign({ delimiter: "_" }, options));
}

var dist_es2015 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    snakeCase: snakeCase$1
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(dist_es2015);

const map = mapObjExports;
const { snakeCase } = require$$1;

var snakecaseKeys = function (obj, options) {
  options = Object.assign({ deep: true, exclude: [], parsingOptions: {} }, options);

  return map(obj, function (key, val) {
    return [
      matches(options.exclude, key) ? key : snakeCase(key, options.parsingOptions),
      val
    ]
  }, options)
};

function matches (patterns, value) {
  return patterns.some(function (pattern) {
    return typeof pattern === 'string'
      ? pattern === value
      : pattern.test(value)
  })
}

var snakecaseKeys$1 = /*@__PURE__*/getDefaultExportFromCjs(snakecaseKeys);

const defaultMetadata = {
    id: 'oauth2',
    target: 'oauth2',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'OAuth 2.0',
        'zh-CN': 'OAuth 2.0',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'The OAuth 2.0 authorization framework enables a third-party application to obtain limited access to an HTTP service.',
        'zh-CN': 'OAuth 2.0 授权框架是的第三方应用能够有权限访问 HTTP 服务。',
    },
    readme: './README.md',
    isStandard: true,
    formItems: [
        {
            key: 'authorizationEndpoint',
            label: 'Authorization Endpoint',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<authorization-endpoint>',
        },
        {
            key: 'tokenEndpoint',
            label: 'Token Endpoint',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<token-endpoint>',
        },
        {
            key: 'userInfoEndpoint',
            label: 'User Info Endpoint',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<user-info-endpoint>',
        },
        {
            key: 'clientId',
            label: 'Client ID',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<client-id>',
        },
        {
            key: 'clientSecret',
            label: 'Client Secret',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<client-secret>',
        },
        {
            key: 'tokenEndpointResponseType',
            label: 'Token Endpoint Response Type',
            type: ConnectorConfigFormItemType.Select,
            selectItems: [
                {
                    title: 'query-string',
                    value: 'query-string',
                },
                { title: 'json', value: 'json' },
            ],
            required: false,
            defaultValue: 'query-string',
        },
        {
            key: 'scope',
            label: 'Scope',
            type: ConnectorConfigFormItemType.Text,
            required: false,
            placeholder: '<space-delimited-scope>',
        },
        {
            key: 'profileMap',
            label: 'Profile Map',
            type: ConnectorConfigFormItemType.Json,
            required: false,
            defaultValue: {
                id: 'user_id',
                email: 'email_verified',
                phone: 'phone_verified',
                name: 'full_name',
                avatar: 'avatar_url',
            },
        },
        {
            key: 'customConfig',
            label: 'Custom Config',
            type: ConnectorConfigFormItemType.Json,
            required: false,
            defaultValue: {},
        },
    ],
};
const defaultTimeout = 5000;

const profileMapGuard = z
    .object({
    id: z.string().optional().default('id'),
    email: z.string().optional().default('email'),
    phone: z.string().optional().default('phone'),
    name: z.string().optional().default('name'),
    avatar: z.string().optional().default('avatar'),
})
    .optional()
    .default({
    id: 'id',
    email: 'email',
    phone: 'phone',
    name: 'name',
    avatar: 'avatar',
});
const userProfileGuard = z.object({
    id: z.string().or(z.number()).transform(String),
    email: z.string().optional(),
    phone: z.string().optional(),
    name: z.string().optional(),
    avatar: z.string().optional(),
});
const tokenEndpointResponseTypeGuard = z
    .enum(['query-string', 'json'])
    .optional()
    .default('query-string');
const oauthConfigGuard = z.object({
    responseType: z.literal('code').optional().default('code'),
    grantType: z.literal('authorization_code').optional().default('authorization_code'),
    tokenEndpointResponseType: tokenEndpointResponseTypeGuard,
    authorizationEndpoint: z.string(),
    tokenEndpoint: z.string(),
    userInfoEndpoint: z.string(),
    clientId: z.string(),
    clientSecret: z.string(),
    scope: z.string().optional(),
    profileMap: profileMapGuard,
    customConfig: z.record(z.string()).optional(),
});
const authResponseGuard = z.object({
    code: z.string(),
    state: z.string().optional(),
});
const accessTokenResponseGuard = z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number().optional(),
    refresh_token: z.string().optional(),
    scope: z.string().optional(),
});

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode$1(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode$1(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

var decodeUriComponent = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};

var decodeComponent = /*@__PURE__*/getDefaultExportFromCjs(decodeUriComponent);

var splitOnFirst = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};

var splitOnFirst$1 = /*@__PURE__*/getDefaultExportFromCjs(splitOnFirst);

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index': {
			return (key, value, accumulator) => {
				result = /\[(\d*)]$/.exec(key);

				key = key.replace(/\[\d*]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};
		}

		case 'bracket': {
			return (key, value, accumulator) => {
				result = /(\[])$/.exec(key);
				key = key.replace(/\[]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [...accumulator[key], value];
			};
		}

		case 'colon-list-separator': {
			return (key, value, accumulator) => {
				result = /(:list)$/.exec(key);
				key = key.replace(/:list$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [...accumulator[key], value];
			};
		}

		case 'comma':
		case 'separator': {
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : (value === null ? value : decode(value, options));
				accumulator[key] = newValue;
			};
		}

		case 'bracket-separator': {
			return (key, value, accumulator) => {
				const isArray = /(\[])$/.test(key);
				key = key.replace(/\[]$/, '');

				if (!isArray) {
					accumulator[key] = value ? decode(value, options) : value;
					return;
				}

				const arrayValue = value === null
					? []
					: value.split(options.arrayFormatSeparator).map(item => decode(item, options));

				if (accumulator[key] === undefined) {
					accumulator[key] = arrayValue;
					return;
				}

				accumulator[key] = [...accumulator[key], ...arrayValue];
			};
		}

		default: {
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [...[accumulator[key]].flat(), value];
			};
		}
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = {
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false,
		...options,
	};

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const returnValue = Object.create(null);

	if (typeof query !== 'string') {
		return returnValue;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return returnValue;
	}

	for (const parameter of query.split('&')) {
		if (parameter === '') {
			continue;
		}

		let [key, value] = splitOnFirst$1(options.decode ? parameter.replace(/\+/g, ' ') : parameter, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : (['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options));
		formatter(decode(key, options), value, returnValue);
	}

	for (const [key, value] of Object.entries(returnValue)) {
		if (typeof value === 'object' && value !== null) {
			for (const [key2, value2] of Object.entries(value)) {
				value[key2] = parseValue(value2, options);
			}
		} else {
			returnValue[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return returnValue;
	}

	// TODO: Remove the use of `reduce`.
	// eslint-disable-next-line unicorn/no-array-reduce
	return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce((result, key) => {
		const value = returnValue[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

const accessTokenRequester = async (tokenEndpoint, queryParameters, tokenEndpointResponseType, timeout = defaultTimeout) => {
    try {
        const httpResponse = await got.post({
            url: tokenEndpoint,
            form: queryParameters,
            timeout: { request: timeout },
        });
        return await accessTokenResponseHandler(httpResponse, tokenEndpointResponseType);
    }
    catch (error) {
        if (error instanceof HTTPError) {
            throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(error.response.body));
        }
        throw error;
    }
};
const accessTokenResponseHandler = async (response, tokenEndpointResponseType) => {
    const result = accessTokenResponseGuard.safeParse(tokenEndpointResponseType === 'json' ? parseJson(response.body) : parse(response.body)); // Why it works with qs.parse()
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
    }
    assert(result.data.access_token, new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid, {
        message: 'Can not find `access_token` in token response!',
    }));
    return result.data;
};
const userProfileMapping = (
// eslint-disable-next-line @typescript-eslint/ban-types
originUserProfile, keyMapping) => {
    const keyMap = new Map(Object.entries(keyMapping).map(([destination, source]) => [source, destination]));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const mappedUserProfile = Object.fromEntries(Object.entries(originUserProfile)
        .filter(([key, value]) => keyMap.get(key) && value)
        .map(([key, value]) => [keyMap.get(key), value]));
    const result = userProfileGuard.safeParse(mappedUserProfile);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
    }
    return result.data;
};
const getAccessToken = async (config, data, redirectUri) => {
    const result = authResponseGuard.safeParse(data);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.General, data);
    }
    const { code } = result.data;
    const { customConfig, ...rest } = config;
    const parameterObject = snakecaseKeys$1({
        ...pick(rest, 'grantType', 'clientId', 'clientSecret'),
        ...customConfig,
        code,
        redirectUri,
    });
    return accessTokenRequester(config.tokenEndpoint, parameterObject, config.tokenEndpointResponseType);
};

const removeUndefinedKeys = (object) => Object.fromEntries(Object.entries(object).filter(([, value]) => value !== undefined));
const getAuthorizationUri = (getConfig) => async ({ state, redirectUri }, setSession) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, oauthConfigGuard);
    const parsedConfig = oauthConfigGuard.parse(config);
    const { customConfig, ...rest } = parsedConfig;
    const parameterObject = snakecaseKeys$1({
        ...pick(rest, 'responseType', 'clientId', 'scope'),
        ...customConfig,
    });
    await setSession({ redirectUri });
    const queryParameters = new URLSearchParams({
        ...removeUndefinedKeys(parameterObject),
        state,
        redirect_uri: redirectUri,
    });
    return `${parsedConfig.authorizationEndpoint}?${queryParameters.toString()}`;
};
const getUserInfo = (getConfig) => async (data, getSession) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, oauthConfigGuard);
    const parsedConfig = oauthConfigGuard.parse(config);
    const { redirectUri } = await getSession();
    assert(redirectUri, new ConnectorError(ConnectorErrorCodes.General, {
        message: 'Cannot find `redirectUri` from connector session.',
    }));
    const { access_token, token_type } = await getAccessToken(parsedConfig, data, redirectUri);
    try {
        const httpResponse = await got.get(parsedConfig.userInfoEndpoint, {
            headers: {
                authorization: `${token_type} ${access_token}`,
            },
            timeout: { request: defaultTimeout },
        });
        return userProfileMapping(parseJsonObject(httpResponse.body), parsedConfig.profileMap);
    }
    catch (error) {
        if (error instanceof HTTPError) {
            throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(error.response.body));
        }
        throw error;
    }
};
const createOauthConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: oauthConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { createOauthConnector as default };
