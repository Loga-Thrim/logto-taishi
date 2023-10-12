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

const authorizationEndpoint = 'https://kauth.kakao.com/oauth/authorize';
const accessTokenEndpoint = 'https://kauth.kakao.com/oauth/token';
const userInfoEndpoint = 'https://kapi.kakao.com/v2/user/me';
const defaultMetadata = {
    id: 'kakao-universal',
    target: 'kakao',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'Kakao',
        'zh-CN': 'Kakao',
        'tr-TR': 'Kakao',
        ko: '카카오',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Kakao is a famous social network service provider in South Korea',
        'zh-CN': 'Kakao 是韩国著名的社交网络服务提供商。',
        'tr-TR': 'Kakao is a famous social network service provider in South Korea',
        ko: '카카오는 한국에서 가장 유명한 SNS 서비스 제공자 입니다.',
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
            required: false,
            label: 'Client Secret',
            placeholder: '<client-secret>',
        },
    ],
};
const defaultTimeout = 5000;

const kakaoConfigGuard = z.object({
    clientId: z.string(),
    clientSecret: z.string().optional(),
});
const accessTokenResponseGuard = z.object({
    access_token: z.string(),
    scope: z.string().optional(),
    token_type: z.string(),
});
const userInfoResponseGuard = z.object({
    id: z.number(),
    kakao_account: z
        .object({
        is_email_valid: z.boolean().optional(),
        email: z.string().optional(),
        profile: z
            .object({
            nickname: z.string().optional(),
            profile_image_url: z.string().optional(),
            is_default_image: z.boolean().optional(),
        })
            .optional(),
    })
        .optional(),
});
const authResponseGuard = z.object({
    code: z.string(),
    redirectUri: z.string(),
});

/**
 * The Implementation of OpenID Connect of Kakao.
 * https://developers.kakao.com/docs/latest/en/kakaologin/rest-api
 */
const getAuthorizationUri = (getConfig) => async ({ state, redirectUri }) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, kakaoConfigGuard);
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
    validateConfig(config, kakaoConfigGuard);
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
        const { id, kakao_account } = result.data;
        const { is_email_valid, email, profile } = kakao_account ?? {
            is_email_valid: null,
            profile: null,
            email: null,
        };
        return {
            id: id.toString(),
            avatar: conditional(profile && !profile.is_default_image && profile.profile_image_url),
            email: conditional(is_email_valid && email),
            name: conditional(profile?.nickname),
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
const createKakaoConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: kakaoConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { createKakaoConnector as default, getAccessToken };
