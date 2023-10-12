import { got, HTTPError } from 'got';
import { ConnectorPlatform, ConnectorConfigFormItemType, validateConfig, ConnectorError, ConnectorErrorCodes, ConnectorType } from '@logto/connector-kit';
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

const codeEndpoint = 'https://passport.feishu.cn/suite/passport/oauth/authorize';
const accessTokenEndpoint = 'https://passport.feishu.cn/suite/passport/oauth/token';
const userInfoEndpoint = 'https://passport.feishu.cn/suite/passport/oauth/userinfo';
const defaultMetadata = {
    id: 'feishu-web',
    target: 'feishu',
    platform: ConnectorPlatform.Web,
    name: {
        en: 'Feishu',
        'zh-CN': '飞书',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        'zh-CN': '飞书是一个由字节跳动开发的企业协作与管理平台',
        en: 'Feishu is an enterprise collaboration platform developed by ByteDance',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'appId',
            label: 'App ID',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<app-id>',
        },
        {
            key: 'appSecret',
            label: 'App Secret',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<app-secret>',
        },
    ],
};

const feishuConfigGuard = z.object({
    appId: z.string(),
    appSecret: z.string(),
});
const feishuAuthCodeGuard = z.object({
    code: z.string(),
    redirectUri: z.string(),
});
const feishuErrorResponse = z.object({
    error: z.string(),
    error_description: z.string().optional(),
});
const feishuAccessTokenResponse = z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number(),
    refresh_token: z.string().optional(),
    refresh_expires_in: z.number().optional(),
});
const feishuUserInfoResponse = z.object({
    sub: z.string(),
    name: z.string(),
    picture: z.string(),
    open_id: z.string(),
    union_id: z.string(),
    en_name: z.string(),
    tenant_key: z.string(),
    avatar_url: z.string(),
    avatar_thumb: z.string(),
    avatar_middle: z.string(),
    avatar_big: z.string(),
    email: z.string().nullish(),
    user_id: z.string().nullish(),
    employee_no: z.string().nullish(),
    mobile: z.string().nullish(),
});

function buildAuthorizationUri(clientId, redirectUri, state) {
    const queryParameters = new URLSearchParams({
        client_id: clientId,
        redirect_uri: encodeURI(redirectUri),
        response_type: 'code',
        state,
    });
    return `${codeEndpoint}?${queryParameters.toString()}`;
}
function getAuthorizationUri(getConfig) {
    return async function ({ state, redirectUri }) {
        const config = await getConfig(defaultMetadata.id);
        validateConfig(config, feishuConfigGuard);
        const { appId } = config;
        return buildAuthorizationUri(appId, redirectUri, state);
    };
}
async function authorizationCallbackHandler(data) {
    const result = feishuAuthCodeGuard.safeParse(data);
    assert(result.success, new ConnectorError(ConnectorErrorCodes.InvalidResponse, JSON.stringify(data)));
    return result.data;
}
async function getAccessToken(code, appId, appSecret, redirectUri) {
    try {
        const response = await got.post(accessTokenEndpoint, {
            headers: {
                contentType: 'application/www-form-urlencoded',
            },
            form: {
                grant_type: 'authorization_code',
                code,
                client_id: appId,
                client_secret: appSecret,
                redirect_uri: redirectUri,
            },
            responseType: 'json',
        });
        const result = feishuAccessTokenResponse.safeParse(response.body);
        assert(result.success, new ConnectorError(ConnectorErrorCodes.InvalidResponse, JSON.stringify(response.body)));
        if (result.data.access_token.length === 0) {
            throw new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid, 'access_token is empty');
        }
        return { accessToken: result.data.access_token };
    }
    catch (error) {
        if (error instanceof ConnectorError) {
            throw error;
        }
        if (error instanceof HTTPError) {
            const result = feishuErrorResponse.safeParse(error.response.body);
            assert(result.success, new ConnectorError(ConnectorErrorCodes.InvalidResponse, JSON.stringify(error.response.body)));
            throw new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid, result.data.error_description);
        }
        throw new ConnectorError(ConnectorErrorCodes.General, {
            errorDescription: 'Failed to get access token',
        });
    }
}
function getUserInfo(getConfig) {
    return async function (data) {
        const { code, redirectUri } = await authorizationCallbackHandler(data);
        const config = await getConfig(defaultMetadata.id);
        validateConfig(config, feishuConfigGuard);
        const { accessToken } = await getAccessToken(code, config.appId, config.appSecret, redirectUri);
        try {
            const response = await got.get(userInfoEndpoint, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                responseType: 'json',
            });
            const result = feishuUserInfoResponse.safeParse(response.body);
            assert(result.success, new ConnectorError(ConnectorErrorCodes.InvalidResponse, `invalid user response`));
            const { sub, user_id, name, email, avatar_url: avatar, mobile } = result.data;
            return {
                id: sub,
                name,
                avatar,
                email: conditional(email),
                userId: conditional(user_id),
                phone: conditional(mobile),
            };
        }
        catch (error) {
            if (error instanceof ConnectorError) {
                throw error;
            }
            if (error instanceof HTTPError) {
                const result = feishuErrorResponse.safeParse(error.response.body);
                assert(result.success, new ConnectorError(ConnectorErrorCodes.InvalidResponse, JSON.stringify(error.response.body)));
                throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid, result.data.error_description);
            }
            throw new ConnectorError(ConnectorErrorCodes.General, {
                errorDescription: 'Failed to get user info',
            });
        }
    };
}
const createFeishuConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        platform: ConnectorPlatform.Web,
        configGuard: feishuConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { authorizationCallbackHandler, buildAuthorizationUri, createFeishuConnector as default, getAccessToken, getAuthorizationUri, getUserInfo };
