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

const authorizationEndpoint = 'https://open.weixin.qq.com/connect/qrconnect';
const accessTokenEndpoint = 'https://api.weixin.qq.com/sns/oauth2/access_token';
const userInfoEndpoint = 'https://api.weixin.qq.com/sns/userinfo';
const scope = 'snsapi_login';
// See https://developers.weixin.qq.com/doc/oplatform/Return_codes/Return_code_descriptions_new.html to know more about WeChat response error code
const invalidAuthCodeErrcode = [40_029, 40_163, 42_003];
const invalidAccessTokenErrcode = [40_001, 40_014];
const defaultMetadata = {
    id: 'wechat-web',
    target: 'wechat',
    platform: ConnectorPlatform.Web,
    name: {
        en: 'WeChat',
        'zh-CN': '微信',
        'tr-TR': 'WeChat',
        ko: 'WeChat',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'WeChat is a cross-platform instant messaging app.',
        'zh-CN': '微信是一款跨平台的即时通讯软件。',
        'tr-TR': 'WeChat, çoklu platformda kullanılabilen bir anlık mesajlaşma uygulamasıdır.',
        ko: 'WeChat은 크로스 플랫폼 메시징 앱입니다.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'appId',
            label: 'App ID',
            required: true,
            type: ConnectorConfigFormItemType.Text,
            placeholder: '<app-id>',
        },
        {
            key: 'appSecret',
            label: 'App Secret',
            required: true,
            type: ConnectorConfigFormItemType.Text,
            placeholder: '<app-secret>',
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

const wechatConfigGuard = z.object({
    appId: z.string(),
    appSecret: z.string(),
    scope: z.string().optional(),
});
const accessTokenResponseGuard = z.object({
    access_token: z.string().optional(),
    openid: z.string().optional(),
    expires_in: z.number().optional(),
    refresh_token: z.string().optional(),
    scope: z.string().optional(),
    errcode: z.number().optional(),
    errmsg: z.string().optional(),
});
const userInfoResponseGuard = z.object({
    unionid: z.string().optional(),
    headimgurl: z.string().optional(),
    nickname: z.string().optional(),
    errcode: z.number().optional(),
    errmsg: z.string().optional(),
});
const authResponseGuard = z.object({ code: z.string() });

/**
 * The Implementation of OpenID Connect of WeChat Web Open Platform.
 * https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
 */
const getAuthorizationUri = (getConfig) => async ({ state, redirectUri }) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, wechatConfigGuard);
    const { appId, scope: scope$1 } = config;
    const queryParameters = new URLSearchParams({
        appid: appId,
        redirect_uri: encodeURI(redirectUri),
        response_type: 'code',
        scope: scope$1 ?? scope,
        state,
    });
    return `${authorizationEndpoint}?${queryParameters.toString()}`;
};
const getAccessToken = async (code, config) => {
    const { appId: appid, appSecret: secret } = config;
    const httpResponse = await got.get(accessTokenEndpoint, {
        searchParams: { appid, secret, code, grant_type: 'authorization_code' },
        timeout: { request: defaultTimeout },
    });
    const result = accessTokenResponseGuard.safeParse(parseJson(httpResponse.body));
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
    }
    const { access_token: accessToken, openid } = result.data;
    getAccessTokenErrorHandler(result.data);
    assert(accessToken && openid, new ConnectorError(ConnectorErrorCodes.InvalidResponse));
    return { accessToken, openid };
};
const getUserInfo = (getConfig) => async (data) => {
    const { code } = await authorizationCallbackHandler(data);
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, wechatConfigGuard);
    const { accessToken, openid } = await getAccessToken(code, config);
    try {
        const httpResponse = await got.get(userInfoEndpoint, {
            searchParams: { access_token: accessToken, openid },
            timeout: { request: defaultTimeout },
        });
        const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));
        if (!result.success) {
            throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
        }
        const { unionid, headimgurl, nickname } = result.data;
        // Response properties of user info can be separated into two groups: (1) {unionid, headimgurl, nickname}, (2) {errcode, errmsg}.
        // These two groups are mutually exclusive: if group (1) is not empty, group (2) should be empty and vice versa.
        // 'errmsg' and 'errcode' turn to non-empty values or empty values at the same time. Hence, if 'errmsg' is non-empty then 'errcode' should be non-empty.
        userInfoResponseMessageParser(result.data);
        return { id: unionid ?? openid, avatar: headimgurl, name: nickname };
    }
    catch (error) {
        return getUserInfoErrorHandler(error);
    }
};
// See https://developers.weixin.qq.com/doc/oplatform/Return_codes/Return_code_descriptions_new.html
const getAccessTokenErrorHandler = (accessToken) => {
    const { errcode, errmsg } = accessToken;
    if (errcode) {
        assert(!invalidAuthCodeErrcode.includes(errcode), new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid, errmsg));
        throw new ConnectorError(ConnectorErrorCodes.General, { errorDescription: errmsg, errcode });
    }
};
const userInfoResponseMessageParser = (userInfo) => {
    const { errcode, errmsg } = userInfo;
    if (errcode) {
        assert(!invalidAccessTokenErrcode.includes(errcode), new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid, errmsg));
        throw new ConnectorError(ConnectorErrorCodes.General, { errorDescription: errmsg, errcode });
    }
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
const authorizationCallbackHandler = async (parameterObject) => {
    const result = authResponseGuard.safeParse(parameterObject);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(parameterObject));
    }
    return result.data;
};
const createWechatConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: wechatConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { createWechatConnector as default, getAccessToken };
