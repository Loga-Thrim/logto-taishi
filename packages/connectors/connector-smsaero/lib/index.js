import { got, HTTPError } from 'got';
import { ConnectorConfigFormItemType, ConnectorType, validateConfig, ConnectorError, ConnectorErrorCodes } from '@logto/connector-kit';
import { z } from 'zod';

// https://github.com/facebook/jest/issues/7547
const assert = (value, error) => {
    if (!value) {
        // https://github.com/typescript-eslint/typescript-eslint/issues/3814
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw error;
    }
};

const endpoint = `https://gate.smsaero.ru/v2/sms/send`;
const defaultMetadata = {
    id: 'smsaero-short-message-service',
    target: 'smsaero-sms',
    platform: null,
    name: {
        en: 'SMS Aero service',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'SMS Aero offers users to use SMS-mailing in 5 minutes without viewing the contract. Developers are offered a convenient API with accessible classes and 24x7 chat support.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'email',
            label: 'Email',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<account-email>',
        },
        {
            key: 'apiKey',
            label: 'API Key',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<api-key>',
        },
        {
            key: 'senderName',
            label: 'Sender Name',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: 'SMSAero',
        },
        {
            key: 'templates',
            label: 'Templates',
            type: ConnectorConfigFormItemType.Json,
            required: true,
            defaultValue: [
                {
                    usageType: 'SignIn',
                    content: 'Your Logto sign-in verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'Register',
                    content: 'Your Logto sign-up verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'ForgotPassword',
                    content: 'Your Logto password change verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'Generic',
                    content: 'Your Logto verification code is {{code}}. The code will remain active for 10 minutes.',
                },
            ],
        },
    ],
};

/**
 * UsageType here is used to specify the use case of the template, can be either
 * 'Register', 'SignIn', 'ForgotPassword', 'Generic' or 'Test'.
 */
const requiredTemplateUsageTypes = ['Register', 'SignIn', 'ForgotPassword', 'Generic'];
const templateGuard = z.object({
    usageType: z.string(),
    content: z.string(),
});
const smsAeroConfigGuard = z.object({
    email: z.string().email(),
    apiKey: z.string(),
    senderName: z.string(),
    templates: z.array(templateGuard).refine((templates) => requiredTemplateUsageTypes.every((requiredType) => templates.map((template) => template.usageType).includes(requiredType)), (templates) => ({
        message: `Template with UsageType (${requiredTemplateUsageTypes
            .filter((requiredType) => !templates.map((template) => template.usageType).includes(requiredType))
            .join(', ')}) should be provided!`,
    })),
});

function sendMessage(getConfig) {
    return async (data, inputConfig) => {
        const { to, type, payload } = data;
        const config = inputConfig ?? (await getConfig(defaultMetadata.id));
        validateConfig(config, smsAeroConfigGuard);
        const { email, apiKey, senderName, templates } = config;
        const template = templates.find((template) => template.usageType === type);
        assert(template, new ConnectorError(ConnectorErrorCodes.TemplateNotFound, `Cannot find template for type: ${type}`));
        const parameters = {
            number: to,
            sign: senderName,
            text: template.content.replaceAll('{{code}}', payload.code),
        };
        const auth = Buffer.from(`${email}:${apiKey}`).toString('base64');
        try {
            return await got.post(endpoint, {
                headers: {
                    Authorization: `Basic ${auth}`,
                },
                json: parameters,
            });
        }
        catch (error) {
            if (error instanceof HTTPError) {
                const { response: { body: rawBody }, } = error;
                assert(typeof rawBody === 'string', new ConnectorError(ConnectorErrorCodes.InvalidResponse, `Invalid response raw body type: ${typeof rawBody}`));
                throw new ConnectorError(ConnectorErrorCodes.General, rawBody);
            }
            throw error;
        }
    };
}
const createSmsAeroConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Sms,
        configGuard: smsAeroConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createSmsAeroConnector as default };
