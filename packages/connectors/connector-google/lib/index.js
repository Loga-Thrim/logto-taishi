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

const authorizationEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
const accessTokenEndpoint = 'https://oauth2.googleapis.com/token';
const userInfoEndpoint = 'https://openidconnect.googleapis.com/v1/userinfo';
const scope = 'openid profile email';
const defaultMetadata = {
    id: 'google-universal',
    target: 'google',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'Google',
        'zh-CN': 'Google',
        'tr-TR': 'Google',
        ko: 'Google',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Google is a principal search engine technology and email service provider.',
        'zh-CN': 'Google 是全球性的搜索引擎和邮件服务提供商。',
        'tr-TR': 'Google, en büyük arama motoru teknolojisi ve e-posta servis sağlayıcısıdır.',
        ko: 'Google은 가장 큰 검색 엔진 기술과 이메일 서비스 제공자입니다.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'clientId',
            type: ConnectorConfigFormItemType.Text,
            label: 'Client ID',
            required: true,
            placeholder: '<client-id>',
        },
        {
            key: 'clientSecret',
            type: ConnectorConfigFormItemType.Text,
            label: 'Client Secret',
            required: true,
            placeholder: '<client-secret>',
        },
        {
            key: 'scope',
            type: ConnectorConfigFormItemType.Text,
            label: 'Scope',
            required: false,
            placeholder: '<scope>',
            description: "The `scope` determines permissions granted by the user's authorization. If you are not sure what to enter, do not worry, just leave it blank.",
        },
    ],
};
const defaultTimeout = 5000;

const googleConfigGuard = z.object({
    clientId: z.string(),
    clientSecret: z.string(),
    scope: z.string().optional(),
});
const accessTokenResponseGuard = z.object({
    access_token: z.string(),
    scope: z.string(),
    token_type: z.string(),
});
const userInfoResponseGuard = z.object({
    sub: z.string(),
    name: z.string().optional(),
    given_name: z.string().optional(),
    family_name: z.string().optional(),
    picture: z.string().optional(),
    email: z.string().optional(),
    email_verified: z.boolean().optional(),
    locale: z.string().optional(),
});
const authResponseGuard = z.object({
    code: z.string(),
    redirectUri: z.string(),
});

/**
 * The Implementation of OpenID Connect of Google Identity Platform.
 * https://developers.google.com/identity/protocols/oauth2/openid-connect
 */
const getAuthorizationUri = (getConfig) => async ({ state, redirectUri }) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, googleConfigGuard);
    const queryParameters = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        state,
        scope: config.scope ?? scope,
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
    validateConfig(config, googleConfigGuard);
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
        const { sub: id, picture: avatar, email, email_verified, name } = result.data;
        return {
            id,
            avatar,
            email: conditional(email_verified && email),
            name,
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
const createGoogleConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: googleConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { createGoogleConnector as default, getAccessToken };
