import { got, HTTPError } from 'got';
import { ConnectorPlatform, ConnectorConfigFormItemType, parseJson, ConnectorError, ConnectorErrorCodes, ConnectorType, validateConfig, socialUserInfoGuard } from '@logto/connector-kit';
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

/**
 * Base authorization URL.
 * https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls
 */
const authorizationEndpoint = 'https://discord.com/oauth2/authorize';
/**
 * Discord exposes different versions of the API, You should specify which version to use by including it in your requests.
 * https://discord.com/developers/docs/reference#api-reference
 */
const accessTokenEndpoint = 'https://discord.com/api/v10/oauth2/token';
const userInfoEndpoint = 'https://discord.com/api/v10/users/@me';
/**
 * OAuth2 Scopes
 * https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
 */
const scope = 'identify email';
const defaultMetadata = {
    id: 'discord-universal',
    target: 'discord',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'Discord',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Discord is the easiest way to talk over voice, video, and text.',
        'pt-PT': 'Discord é a forma mais fácil de comunicar por voz, vídeo e texto.',
        'zh-CN': 'Discord 是一款专为社群设计的免费网络实时通话软件与数字发行平台。',
        'tr-TR': 'Discord, sesli, görüntülü ve metin üzerinden konuşmanın en kolay yoludur.',
        ko: 'Discord는 음성, 비디오 및 텍스트로 대화하는 가장 쉬운 방법입니다.',
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

const nullishToUndefined = (input) => {
    if (!input) {
        return;
    }
    return input;
};
const discordConfigGuard = z.object({
    clientId: z.string(),
    clientSecret: z.string(),
    scope: z.string().optional(),
});
const accessTokenResponseGuard = z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number(),
    scope: z.string(),
});
const userInfoResponseGuard = z.object({
    id: z.string(),
    username: z.string().nullish().transform(nullishToUndefined),
    avatar: z.string().nullish().transform(nullishToUndefined),
    email: z.string().nullish().transform(nullishToUndefined),
    verified: z.boolean().nullish().transform(nullishToUndefined),
});
z.object({
    error: z.string(),
    error_description: z.string(),
});
const authResponseGuard = z.object({ code: z.string(), redirectUri: z.string() });

/**
 * Discord OAuth2 Connector
 * https://discord.com/developers/docs/topics/oauth2
 */
const getAuthorizationUri = (getConfig) => async ({ state, redirectUri }) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, discordConfigGuard);
    const queryParameters = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: config.scope ?? scope,
        state,
    });
    return `${authorizationEndpoint}?${queryParameters.toString()}`;
};
const getAccessToken = async (config, codeObject) => {
    const { code, redirectUri } = codeObject;
    const { clientId: client_id, clientSecret: client_secret } = config;
    const httpResponse = await got.post(accessTokenEndpoint, {
        form: {
            client_id,
            client_secret,
            grant_type: 'authorization_code',
            code,
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
    validateConfig(config, discordConfigGuard);
    const { accessToken } = await getAccessToken(config, { code, redirectUri });
    try {
        const httpResponse = await got.get(userInfoEndpoint, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
            timeout: { request: defaultTimeout },
        });
        const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));
        if (!result.success) {
            throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
        }
        const { id, username: name, avatar, email, verified } = result.data;
        const rawUserInfo = {
            id,
            name,
            avatar: conditional(avatar && `https://cdn.discordapp.com/avatars/${id}/${avatar}`),
            email: conditional(verified && email),
        };
        const userInfoResult = socialUserInfoGuard.safeParse(rawUserInfo);
        if (!userInfoResult.success) {
            throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, userInfoResult.error);
        }
        return userInfoResult.data;
    }
    catch (error) {
        if (error instanceof HTTPError) {
            const { statusCode, body: rawBody } = error.response;
            if (statusCode === 401) {
                throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);
            }
            throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));
        }
        throw error;
    }
};
const authorizationCallbackHandler = async (parameterObject) => {
    const result = authResponseGuard.safeParse(parameterObject);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(parameterObject));
    }
    return result.data;
};
const createDiscordConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: discordConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: getUserInfo(getConfig),
    };
};

export { createDiscordConnector as default, getAccessToken };
