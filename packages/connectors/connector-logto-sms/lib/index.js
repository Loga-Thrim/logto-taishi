import { got, HTTPError } from 'got';
import { ConnectorConfigFormItemType, ConnectorError, ConnectorErrorCodes, ConnectorType, validateConfig } from '@logto/connector-kit';
import { z } from 'zod';

const defaultMetadata = {
    id: 'logto-sms',
    target: 'logto-sms',
    platform: null,
    name: {
        en: 'Logto SMS',
    },
    logo: './logo.svg',
    logoDark: './logo-dark.svg',
    description: {
        en: 'Logto SMS service (demonstration).',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'tokenEndpoint',
            label: 'Endpoint',
            type: ConnectorConfigFormItemType.Text,
            required: true,
        },
        {
            key: 'endpoint',
            label: 'Endpoint',
            type: ConnectorConfigFormItemType.Text,
            required: true,
        },
        {
            key: 'resource',
            label: 'Resource',
            type: ConnectorConfigFormItemType.Text,
            required: true,
        },
        {
            key: 'appId',
            label: 'App ID',
            type: ConnectorConfigFormItemType.Text,
            required: true,
        },
        {
            key: 'appSecret',
            label: 'App Secret',
            type: ConnectorConfigFormItemType.Text,
            required: true,
        },
    ],
};
const scope = ['send:sms'];
const defaultTimeout = 5000;
const smsEndpoint = '/services/send-sms';

const logtoSmsConfigGuard = z.object({
    endpoint: z.string(),
    tokenEndpoint: z.string(),
    resource: z.string(),
    appId: z.string(),
    appSecret: z.string(),
});
const accessTokenResponseGuard = z.object({
    access_token: z.string(),
    expires_in: z.number(),
    token_type: z.string(),
    scope: z.string(),
});

// TODO (LOG-5741) refactor to use @logto/connector-kit
const grantAccessToken = async ({ tokenEndpoint, resource, appId, appSecret, }) => {
    const httpResponse = await got.post({
        url: tokenEndpoint,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(`${appId}:${appSecret}`).toString('base64')}`,
        },
        timeout: { request: defaultTimeout },
        form: {
            grant_type: 'client_credentials',
            resource,
            scope,
        },
    });
    const result = accessTokenResponseGuard.safeParse(JSON.parse(httpResponse.body));
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
    }
    return result.data;
};

const sendMessage = (getConfig) => async (data, inputConfig) => {
    const config = inputConfig ?? (await getConfig(defaultMetadata.id));
    validateConfig(config, logtoSmsConfigGuard);
    const { endpoint, tokenEndpoint, appId, appSecret, resource } = config;
    const accessTokenResponse = await grantAccessToken({
        tokenEndpoint,
        resource,
        appId,
        appSecret,
    });
    try {
        await got.post({
            url: `${endpoint}${smsEndpoint}`,
            headers: {
                Authorization: `${accessTokenResponse.token_type} ${accessTokenResponse.access_token}`,
            },
            json: { data },
            timeout: { request: defaultTimeout },
        });
    }
    catch (error) {
        if (error instanceof HTTPError) {
            console.log('error');
        }
        throw error;
    }
};
const createLogtoSmsConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Sms,
        configGuard: logtoSmsConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createLogtoSmsConnector as default };
