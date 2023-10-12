import { got, HTTPError } from 'got';
import { ConnectorConfigFormItemType, VerificationCodeType, ConnectorType, validateConfig, ConnectorError, ConnectorErrorCodes } from '@logto/connector-kit';
import { z } from 'zod';

const defaultMetadata = {
    id: 'mailgun-email',
    target: 'mailgun-email',
    platform: null,
    name: {
        en: 'Mailgun',
    },
    logo: './logo.png',
    logoDark: null,
    description: {
        en: 'Mailgun is an email delivery service for sending, receiving, and tracking emails.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'endpoint',
            label: 'Mailgun endpoint',
            type: ConnectorConfigFormItemType.Text,
            required: false,
            placeholder: 'https://api.mailgun.net',
        },
        {
            key: 'domain',
            label: 'Domain',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: 'your-mailgun-domain.com',
        },
        {
            key: 'apiKey',
            label: 'API Key',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<your-mailgun-api-key>',
        },
        {
            key: 'from',
            label: 'Email address to send from',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: 'Sender Name <foo@example.com>',
        },
        {
            key: 'deliveries',
            label: 'Deliveries',
            type: ConnectorConfigFormItemType.Json,
            required: true,
            defaultValue: {
                SignIn: {
                    subject: 'Logto sign-in template {{code}}',
                    html: 'Your Logto sign-in verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                Register: {
                    subject: 'Logto sign-up template {{code}}',
                    html: 'Your Logto sign-up verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                ForgotPassword: {
                    subject: 'Logto reset password template {{code}}',
                    html: 'Your Logto reset password verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                Generic: {
                    subject: 'Logto generic template {{code}}',
                    html: 'Your Logto generic verification code is {{code}}. The code will remain active for 10 minutes.',
                },
            },
        },
    ],
};

const supportTemplateGuard = z.enum([
    VerificationCodeType.SignIn,
    VerificationCodeType.Register,
    VerificationCodeType.ForgotPassword,
    VerificationCodeType.Generic,
]);
const templateConfigGuard = z.union([
    z.object({
        html: z.string(),
        text: z.string().optional(),
        subject: z.string().optional(),
        replyTo: z.string().optional(),
    }),
    z.object({
        template: z.string(),
        variables: z.record(z.unknown()).optional(),
        subject: z.string().optional(),
        replyTo: z.string().optional(),
    }),
]);
const mailgunConfigGuard = z.object({
    endpoint: z.string().url().endsWith('.mailgun.net').optional(),
    domain: z.string(),
    apiKey: z.string(),
    from: z.string(),
    // Although the type it's expected, this guard should infer required keys. Looks like a mis-implemented in zod.
    // See https://github.com/colinhacks/zod/issues/2623
    deliveries: z.record(supportTemplateGuard, templateConfigGuard),
});

const removeUndefinedKeys = (object) => Object.fromEntries(Object.entries(object).filter(([, value]) => value !== undefined));
const getDataFromDeliveryConfig = ({ subject, replyTo, ...rest }, code) => {
    const commonData = {
        subject: subject?.replaceAll('{{code}}', code),
        'h:Reply-To': replyTo,
    };
    if ('template' in rest) {
        return {
            ...commonData,
            template: rest.template,
            'h:X-Mailgun-Variables': JSON.stringify({ ...rest.variables, code }),
        };
    }
    return {
        ...commonData,
        html: rest.html.replaceAll('{{code}}', code),
        text: rest.text?.replaceAll('{{code}}', code),
    };
};
const sendMessage = (getConfig) => {
    return async ({ to, type: typeInput, payload: { code } }, inputConfig) => {
        const config = inputConfig ?? (await getConfig(defaultMetadata.id));
        validateConfig(config, mailgunConfigGuard);
        const { endpoint, domain, apiKey, from, deliveries } = config;
        const type = supportTemplateGuard.safeParse(typeInput);
        if (!type.success) {
            throw new ConnectorError(ConnectorErrorCodes.TemplateNotSupported);
        }
        const template = deliveries[type.data] ?? deliveries[VerificationCodeType.Generic];
        if (!template) {
            throw new ConnectorError(ConnectorErrorCodes.TemplateNotFound);
        }
        try {
            return await got.post(new URL(`/v3/${domain}/messages`, endpoint ?? 'https://api.mailgun.net').toString(), {
                username: 'api',
                password: apiKey,
                form: {
                    from,
                    to,
                    ...removeUndefinedKeys(getDataFromDeliveryConfig(template, code)),
                },
            });
        }
        catch (error) {
            if (error instanceof HTTPError) {
                const { response: { body, statusCode }, } = error;
                throw new ConnectorError(ConnectorErrorCodes.General, { statusCode, body });
            }
            throw new ConnectorError(ConnectorErrorCodes.General, error);
        }
    };
};
const createSendGridMailConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Email,
        configGuard: mailgunConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createSendGridMailConnector as default };
