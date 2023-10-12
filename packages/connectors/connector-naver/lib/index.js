import { got, HTTPError } from 'got';
import { ConnectorPlatform, ConnectorConfigFormItemType, parseJson, ConnectorError, ConnectorErrorCodes, ConnectorType, validateConfig } from '@logto/connector-kit';
import { z } from 'zod';

// https://github.com/facebook/jest/issues/7547
const assert = (value, error) => {
    if (!value) {
        // https://github.com/typescript-eslint/typescript-eslint/issues/3814
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw error;
    }
};

// eslint-disable-next-line id-length
// eslint-disable-next-line unicorn/prefer-native-coercion-functions
const notFalsy = (value) => Boolean(value);

/**
 * Conditional return the expression result when it's not {@link Falsy};
 * otherwise return `undefined`.
 *
 * @example
 * ```ts
 * conditional(1 && '2') // '2'
 * conditional(false && '1') // undefined
 * ```
 */
const conditional = (exp) => (notFalsy(exp) ? exp : undefined);

const authorizationEndpoint = 'https://nid.naver.com/oauth2.0/authorize';
const accessTokenEndpoint = 'https://nid.naver.com/oauth2.0/token';
const userInfoEndpoint = 'https://openapi.naver.com/v1/nid/me';
const defaultMetadata = {
    id: 'naver-universal',
    target: 'naver',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'Naver',
        'zh-CN': 'Naver',
        'tr-TR': 'Naver',
        ko: '네이버',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Naver is the most leading internet service provider in South Korea',
        'zh-CN': 'Naver is the most leading internet service provider in South Korea',
        'tr-TR': 'Naver is the most leading internet service provider in South Korea',
        ko: '네이버는 한국에서 가장 선도적인 인터넷 서비스 제공자 입니다.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'clientId',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            label: 'Client ID',
            placeholder: '<client-id>',
        },
        {
            key: 'clientSecret',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            label: 'Client Secret',
            placeholder: '<client-secret>',
        },
    ],
};
const defaultTimeout = 5000;

const naverConfigGuard = z.object({
    clientId: z.string(),
    clientSecret: z.string(),
});
const accessTokenResponseGuard = z.object({
    access_token: z.string(),
    scope: z.string().optional(),
    token_type: z.string(),
});
/**
 * More information about the response can be found here:
 * https://developers.naver.com/docs/login/profile/profile.md
 * https://developers.naver.com/docs/login/devguide/devguide.md
 */
const userInfoResponseGuard = z.object({
    resultcode: z.string(),
    message: z.string(),
    response: z.object({
        id: z.string(),
        email: z.string().optional(),
        nickname: z.string().optional(),
        profile_image: z.string().optional(),
    }),
});
const authResponseGuard = z.object({
    code: z.string(),
    redirectUri: z.string(),
});

/**
 * The Implementation of OAuth2 of Naver.
 * https://developers.naver.com/docs/login/api/api.md
 */
const getAuthorizationUri = (getConfig) => async ({ state, redirectUri }) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, naverConfigGuard);
    const queryParameters = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        state,
    });
    return `${authorizationEndpoint}?${queryParameters.toString()}`;
};
const getAccessToken = async (config, codeObject) => {
    const { code, redirectUri } = codeObject;
    const { clientId, clientSecret } = config;
    // Note：Need to decodeURIComponent on code
    // https://stackoverflow.com/questions/51058256/google-api-node-js-invalid-grant-malformed-auth-code
    const httpResponse = await got.post(accessTokenEndpoint, {
        form: {
            code: decodeURIComponent(code),
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code',
        },
        timeout: { request: defaultTimeout },
    });
    const result = accessTokenResponseGuard.safeParse(parseJson(httpResponse.body));
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
    }
    const { access_token: accessToken } = result.data;
    assert(accessToken, new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid));
    return { accessToken };
};
const getUserInfo = (getConfig) => async (data) => {
    const { code, redirectUri } = await authorizationCallbackHandler(data);
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, naverConfigGuard);
    const { accessToken } = await getAccessToken(config, { code, redirectUri });
    try {
        const httpResponse = await got.post(userInfoEndpoint, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
            timeout: { request: defaultTimeout },
        });
        const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));
        if (!result.success) {
            throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
        }
        const { response } = result.data;
        const { id, email, nickname, profile_image } = response;
        return {
            id,
            avatar: conditional(profile_image),
            email: conditional(email),
            name: conditional(nickname),
        };
    }
    catch (error) {
        return getUserInfoErrorHandler(error);
    }
};
const authorizationCallbackHandler = async (parameterObject) => {
    const result = authResponseGuard.safeParse(parameterObject);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(parameterObject));
    }
    return result.data;
};
const getUserInfoErrorHandler = (error) => {
    if (error instanceof HTTPError) {
        const { statusCode, body: rawBody } = error.response;
        if (statusCode === 401) {
            throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);
        }
        throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));
    }
    throw error;
};
const createNaverConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: naverConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { createNaverConnector as default, getAccessToken };
