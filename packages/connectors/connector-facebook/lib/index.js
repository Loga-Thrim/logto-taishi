import { got, HTTPError } from 'got';
import { ConnectorPlatform, ConnectorConfigFormItemType, validateConfig, parseJson, ConnectorError, ConnectorErrorCodes, ConnectorType } from '@logto/connector-kit';
import { z } from 'zod';

// https://github.com/facebook/jest/issues/7547
const assert = (value, error) => {
    if (!value) {
        // https://github.com/typescript-eslint/typescript-eslint/issues/3814
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw error;
    }
};

/**
 * Note: If you do not include a version number we will default to the oldest available version, so it's recommended to include the version number in your requests.
 * https://developers.facebook.com/docs/graph-api/overview#versions
 */
const authorizationEndpoint = 'https://www.facebook.com/v13.0/dialog/oauth';
const accessTokenEndpoint = 'https://graph.facebook.com/v13.0/oauth/access_token';
/**
 * Note: The /me node is a special endpoint that translates to the object ID of the person or Page whose access token is currently being used to make the API calls.
 * https://developers.facebook.com/docs/graph-api/overview#me
 * https://developers.facebook.com/docs/graph-api/reference/user#Reading
 */
const userInfoEndpoint = 'https://graph.facebook.com/v13.0/me';
const scope = 'email,public_profile';
const defaultMetadata = {
    id: 'facebook-universal',
    target: 'facebook',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'Facebook',
        'zh-CN': 'Facebook',
        'tr-TR': 'Facebook',
        ko: 'Facebook',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Facebook is a worldwide social media platform with billions of users.',
        'zh-CN': 'Facebook 是有数十亿用户的社交平台。',
        'tr-TR': 'Facebook, en aktif kullanıcılara sahip dünya çapında bir sosyal medya platformudur.',
        ko: '페이스북은 가장 활동적인 사용자를 가진 세계적인 소셜 미디어 플랫폼입니다.',
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
        {
            key: 'scope',
            type: ConnectorConfigFormItemType.Text,
            required: false,
            label: 'Scope',
            placeholder: '<scope>',
            description: "The `scope` determines permissions granted by the user's authorization. If you are not sure what to enter, do not worry, just leave it blank.",
        },
    ],
};
const defaultTimeout = 5000;

const facebookConfigGuard = z.object({
    clientId: z.string(),
    clientSecret: z.string(),
    scope: z.string().optional(),
});
const accessTokenResponseGuard = z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number(),
});
const userInfoResponseGuard = z.object({
    id: z.string(),
    email: z.string().optional(),
    name: z.string().optional(),
    picture: z
        .object({
        data: z.object({
            url: z.string(),
        }),
    })
        .optional(),
});
const authorizationCallbackErrorGuard = z.object({
    error: z.string(),
    error_code: z.number().optional(),
    error_description: z.string(),
    error_reason: z.string(),
});
const authResponseGuard = z.object({ code: z.string(), redirectUri: z.string() });

/**
 * Reference: Manually Build a Login Flow
 * https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow
 */
const getAuthorizationUri = (getConfig) => async ({ state, redirectUri }) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, facebookConfigGuard);
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
    validateConfig(config, facebookConfigGuard);
    const { clientId: client_id, clientSecret: client_secret } = config;
    const httpResponse = await got.get(accessTokenEndpoint, {
        searchParams: {
            code,
            client_id,
            client_secret,
            redirect_uri: redirectUri,
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
    validateConfig(config, facebookConfigGuard);
    const { accessToken } = await getAccessToken(config, { code, redirectUri });
    try {
        const httpResponse = await got.get(userInfoEndpoint, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
            searchParams: {
                fields: 'id,name,email,picture',
            },
            timeout: { request: defaultTimeout },
        });
        const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));
        if (!result.success) {
            throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
        }
        const { id, email, name, picture } = result.data;
        return {
            id,
            avatar: picture?.data.url,
            email,
            name,
        };
    }
    catch (error) {
        if (error instanceof HTTPError) {
            const { statusCode, body: rawBody } = error.response;
            if (statusCode === 400) {
                throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);
            }
            throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));
        }
        throw error;
    }
};
const authorizationCallbackHandler = async (parameterObject) => {
    const result = authResponseGuard.safeParse(parameterObject);
    if (result.success) {
        return result.data;
    }
    const parsedError = authorizationCallbackErrorGuard.safeParse(parameterObject);
    if (!parsedError.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, JSON.stringify(parameterObject));
    }
    const { error, error_code, error_description, error_reason } = parsedError.data;
    if (error === 'access_denied') {
        throw new ConnectorError(ConnectorErrorCodes.AuthorizationFailed, error_description);
    }
    throw new ConnectorError(ConnectorErrorCodes.General, {
        error,
        error_code,
        errorDescription: error_description,
        error_reason,
    });
};
const createFacebookConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: facebookConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { createFacebookConnector as default, getAccessToken };
