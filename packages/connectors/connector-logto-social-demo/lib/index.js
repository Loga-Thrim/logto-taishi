import { ConnectorPlatform, ConnectorConfigFormItemType, ConnectorType, validateConfig } from '@logto/connector-kit';
import { z } from 'zod';

var SocialProvider;
(function (SocialProvider) {
    SocialProvider["Google"] = "google";
    SocialProvider["GitHub"] = "github";
    SocialProvider["Discord"] = "discord";
})(SocialProvider || (SocialProvider = {}));
const socialDemoConfigGuard = z.object({
    provider: z.nativeEnum(SocialProvider),
    clientId: z.string(),
    redirectUri: z.string(),
});

const defaultMetadata = {
    id: 'logto-social-demo',
    target: 'logto-social-demo',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'Logto Social Demo',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'The demo for social sign in',
    },
    readme: './README.md',
    isStandard: true,
    formItems: [
        {
            key: 'provider',
            label: 'Provider',
            type: ConnectorConfigFormItemType.Select,
            selectItems: [
                {
                    title: 'Google',
                    value: SocialProvider.Google,
                },
                {
                    title: 'GitHub',
                    value: SocialProvider.GitHub,
                },
                {
                    title: 'Discord',
                    value: SocialProvider.Discord,
                },
            ],
            required: true,
        },
        {
            key: 'clientId',
            label: 'Client ID',
            type: ConnectorConfigFormItemType.Text,
            required: true,
        },
        {
            key: 'redirectUri',
            label: 'Redirect URI',
            type: ConnectorConfigFormItemType.Text,
            required: true,
        },
    ],
};
const getProviderConfigs = (provider) => {
    if (provider === SocialProvider.GitHub) {
        return {
            params: {
                scope: 'read:user',
            },
            endpoint: 'https://github.com/login/oauth/authorize',
        };
    }
    if (provider === SocialProvider.Google) {
        return {
            params: {
                scope: 'openid profile email',
                response_type: 'code',
            },
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        };
    }
    return {
        params: {
            scope: 'identify email',
            response_type: 'code',
        },
        endpoint: 'https://discord.com/oauth2/authorize',
    };
};

const getAuthorizationUri = (getConfig) => async ({ state }) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, socialDemoConfigGuard);
    const { provider, clientId, redirectUri } = config;
    const { params, endpoint } = getProviderConfigs(provider);
    const queryParameters = new URLSearchParams({
        ...params,
        client_id: clientId,
        redirect_uri: redirectUri,
        state,
    });
    return `${endpoint}?${queryParameters.toString()}`;
};
const createSocialDemoConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: socialDemoConfigGuard,
        getAuthorizationUri: getAuthorizationUri(getConfig),
        getUserInfo: async () => {
            throw new Error('Not implemented');
        },
    };
};

export { createSocialDemoConnector as default };
