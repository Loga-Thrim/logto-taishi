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

const endpoint = 'https://api.sendgrid.com/v3/mail/send';
const defaultMetadata = {
    id: 'sendgrid-email-service',
    target: 'sendgrid-mail',
    platform: null,
    name: {
        en: 'SendGrid Email',
        'zh-CN': 'SendGrid 邮件',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'SendGrid is a communication platform for transactional and marketing email.',
        'zh-CN': 'SendGrid 是一个面向消费者的邮件通讯平台。',
        'tr-TR': 'SendGrid, operasyonel ve pazarlama e- postaları için bir iletişim platformudur.',
        ko: 'SendGrids는 마케팅 및 이메일을 전송할 수 있는 플랫폼 입니다.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'apiKey',
            label: 'API Key',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<your-sendgrid-api-key>',
        },
        {
            key: 'fromEmail',
            label: 'From Email',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: 'foo@example.com',
        },
        {
            key: 'fromName',
            label: 'From Name',
            type: ConnectorConfigFormItemType.Text,
            required: false,
            placeholder: 'Logto',
        },
        {
            key: 'templates',
            label: 'Templates',
            type: ConnectorConfigFormItemType.Json,
            required: true,
            defaultValue: [
                {
                    usageType: 'SignIn',
                    type: 'text/plain',
                    subject: 'Logto SignIn Template',
                    content: 'Your Logto sign-in verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'Register',
                    type: 'text/plain',
                    subject: 'Logto Register Template',
                    content: 'Your Logto sign-up verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'ForgotPassword',
                    type: 'text/plain',
                    subject: 'Logto ForgotPassword Template',
                    content: 'Your Logto password change verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'Generic',
                    type: 'text/plain',
                    subject: 'Logto Generic Template',
                    content: 'Your Logto verification code is {{code}}. The code will remain active for 10 minutes.',
                },
            ],
        },
    ],
};

/**
 * @doc https://docs.sendgrid.com/api-reference/mail-send/mail-send#body
 */
var ContextType;
(function (ContextType) {
    ContextType["Text"] = "text/plain";
    ContextType["Html"] = "text/html";
})(ContextType || (ContextType = {}));
/**
 * UsageType here is used to specify the use case of the template, can be either
 * 'Register', 'SignIn', 'ForgotPassword', 'Generic'.
 */
const requiredTemplateUsageTypes = ['Register', 'SignIn', 'ForgotPassword', 'Generic'];
const templateGuard = z.object({
    usageType: z.string(),
    type: z.nativeEnum(ContextType),
    subject: z.string(),
    content: z.string(), // With variable {{code}}, support HTML
});
const sendGridMailConfigGuard = z.object({
    apiKey: z.string(),
    fromEmail: z.string(),
    fromName: z.string().optional(),
    templates: z.array(templateGuard).refine((templates) => requiredTemplateUsageTypes.every((requiredType) => templates.map((template) => template.usageType).includes(requiredType)), (templates) => ({
        message: `Template with UsageType (${requiredTemplateUsageTypes
            .filter((requiredType) => !templates.map((template) => template.usageType).includes(requiredType))
            .join(', ')}) should be provided!`,
    })),
});
/**
 * @doc https://docs.sendgrid.com/api-reference/mail-send/mail-send#responses
 */
const helpObjectGuard = z.record(z.string(), z.unknown()); // Helper text or docs for troubleshooting
const errorObjectGuard = z.object({
    message: z.string(),
    field: z.string().nullable().optional(),
    help: helpObjectGuard.optional(),
});
z.object({
    errors: z.array(errorObjectGuard),
    id: z.string().optional(),
});

const sendMessage = (getConfig) => async (data, inputConfig) => {
    const { to, type, payload } = data;
    const config = inputConfig ?? (await getConfig(defaultMetadata.id));
    validateConfig(config, sendGridMailConfigGuard);
    const { apiKey, fromEmail, fromName, templates } = config;
    const template = templates.find((template) => template.usageType === type);
    assert(template, new ConnectorError(ConnectorErrorCodes.TemplateNotFound, `Template not found for type: ${type}`));
    const toEmailData = [{ email: to }];
    const fromEmailData = fromName
        ? { email: fromEmail, name: fromName }
        : { email: fromEmail };
    const personalizations = { to: toEmailData };
    const content = {
        type: template.type,
        value: typeof payload.code === 'string'
            ? template.content.replaceAll('{{code}}', payload.code)
            : template.content,
    };
    const { subject } = template;
    const parameters = {
        personalizations: [personalizations],
        from: fromEmailData,
        subject,
        content: [content],
    };
    try {
        return await got.post(endpoint, {
            headers: {
                Authorization: 'Bearer ' + apiKey,
                'Content-Type': 'application/json',
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
        throw new ConnectorError(ConnectorErrorCodes.General, error);
    }
};
const createSendGridMailConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Email,
        configGuard: sendGridMailConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createSendGridMailConnector as default };
