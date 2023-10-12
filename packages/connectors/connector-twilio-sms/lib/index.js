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

const endpoint = 'https://api.twilio.com/2010-04-01/Accounts/{{accountSID}}/Messages.json';
const defaultMetadata = {
    id: 'twilio-short-message-service',
    target: 'twilio-sms',
    platform: null,
    name: {
        en: 'Twilio SMS Service',
        'zh-CN': 'Twilio 短信服务',
        'tr-TR': 'Twilio SMS Servisi',
        ko: 'Twilio SMS 서비스',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Twilio provides programmable communication tools for phone calls and messages.',
        'zh-CN': 'Twilio 是一个提供面向消费者的可编程通讯服务的平台。',
        'tr-TR': 'Twilio, telefon görüşmeleri ve mesajlar için programlanabilir iletişim araçları sağlar.',
        ko: 'Twilio는 전화 및 SMS을 할 수 있도록 개발자 도구를 제공합니다.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'accountSID',
            label: 'Account SID',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<account-sid>',
        },
        {
            key: 'authToken',
            label: 'Auth Token',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<auth-token>',
        },
        {
            key: 'fromMessagingServiceSID',
            label: 'From Messaging Service SID',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<from-messaging-service-sid>',
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
 * 'Register', 'SignIn', 'ForgotPassword', 'Generic'.
 */
const requiredTemplateUsageTypes = ['Register', 'SignIn', 'ForgotPassword', 'Generic'];
const templateGuard = z.object({
    usageType: z.string(),
    content: z.string(),
});
const twilioSmsConfigGuard = z.object({
    accountSID: z.string(),
    authToken: z.string(),
    fromMessagingServiceSID: z.string(),
    templates: z.array(templateGuard).refine((templates) => requiredTemplateUsageTypes.every((requiredType) => templates.map((template) => template.usageType).includes(requiredType)), (templates) => ({
        message: `Template with UsageType (${requiredTemplateUsageTypes
            .filter((requiredType) => !templates.map((template) => template.usageType).includes(requiredType))
            .join(', ')}) should be provided!`,
    })),
});
// See https://www.twilio.com/docs/usage/twilios-response
z.object({
    status: z.number(),
    message: z.string(),
    code: z.number().optional(),
    more_info: z.string().optional(),
});

const sendMessage = (getConfig) => async (data, inputConfig) => {
    const { to, type, payload } = data;
    const config = inputConfig ?? (await getConfig(defaultMetadata.id));
    validateConfig(config, twilioSmsConfigGuard);
    const { accountSID, authToken, fromMessagingServiceSID, templates } = config;
    const template = templates.find((template) => template.usageType === type);
    assert(template, new ConnectorError(ConnectorErrorCodes.TemplateNotFound, `Cannot find template for type: ${type}`));
    const parameters = {
        To: to,
        MessagingServiceSid: fromMessagingServiceSID,
        Body: typeof payload.code === 'string'
            ? template.content.replaceAll('{{code}}', payload.code)
            : template.content,
    };
    try {
        return await got.post(endpoint.replaceAll('{{accountSID}}', accountSID), {
            headers: {
                Authorization: 'Basic ' + Buffer.from([accountSID, authToken].join(':')).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(parameters).toString(),
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
const createTwilioSmsConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Sms,
        configGuard: twilioSmsConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createTwilioSmsConnector as default };
