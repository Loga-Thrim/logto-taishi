import { got, HTTPError } from 'got';
import { ConnectorConfigFormItemType, ConnectorType, validateConfig, ConnectorError, ConnectorErrorCodes, parseJson } from '@logto/connector-kit';
import { randomUUID, createHmac } from 'node:crypto';
import { z } from 'zod';

// https://github.com/facebook/jest/issues/7547
const assert = (value, error) => {
    if (!value) {
        // https://github.com/typescript-eslint/typescript-eslint/issues/3814
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw error;
    }
};

const endpoint = 'https://dm.aliyuncs.com/';
const staticConfigs = {
    Format: 'json',
    SignatureMethod: 'HMAC-SHA1',
    SignatureVersion: '1.0',
    Version: '2015-11-23',
};
const defaultMetadata = {
    id: 'aliyun-direct-mail',
    target: 'aliyun-dm',
    platform: null,
    name: {
        en: 'Aliyun Direct Mail',
        'zh-CN': '阿里云邮件推送',
        'tr-TR': 'Aliyun Direct Mail',
        ko: 'Aliyun 다이렉트 메일',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Aliyun provides cloud computing services to online businesses.',
        'zh-CN': '阿里云是全球性的云服务提供商。',
        'tr-TR': 'Aliyun, çevrimiçi işletmelere bulut bilişim hizmetleri sunmaktadır.',
        ko: 'Aliyun는 온라인 비지니스를 위해 클라우딩 컴퓨팅 서비스를 제공합니다.',
    },
    readme: './README.md',
    formItems: [
        {
            key: 'accessKeyId',
            label: 'Access Key ID',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<access-key-id>',
        },
        {
            key: 'accessKeySecret',
            label: 'Access Key Secret',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<access-key-secret>',
        },
        {
            key: 'accountName',
            label: 'Account Name',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<account-name>',
        },
        {
            key: 'fromAlias',
            label: 'From Alias',
            type: ConnectorConfigFormItemType.Text,
            required: false,
            placeholder: '<from-alias>',
        },
        {
            key: 'templates',
            label: 'Templates',
            type: ConnectorConfigFormItemType.Json,
            required: true,
            defaultValue: [
                {
                    usageType: 'SignIn',
                    subject: '<sign-in-template-subject>',
                    content: 'Your Logto sign-in verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'Register',
                    subject: '<register-template-subject>',
                    content: 'Your Logto sign-up verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'ForgotPassword',
                    subject: '<forgot-password-template-subject>',
                    content: 'Your Logto password change verification code is {{code}}. The code will remain active for 10 minutes.',
                },
                {
                    usageType: 'Generic',
                    subject: '<generic-template-subject>',
                    content: 'Your Logto verification code is {{code}}. The code will remain active for 10 minutes.',
                },
            ],
        },
    ],
};

// Aliyun has special escape rules.
// https://help.aliyun.com/document_detail/29442.html
const escaper = (string_) => encodeURIComponent(string_)
    .replaceAll('!', '%21')
    .replaceAll('"', '%22')
    .replaceAll("'", '%27')
    .replaceAll('(', '%28')
    .replaceAll(')', '%29')
    .replaceAll('*', '%2A')
    .replaceAll('+', '%2B');
// Format date string to 'YYYY-MM-DDThh:mm:ssZ' format.
const formatDateString = (date) => {
    const rawString = date.toISOString();
    return rawString.replace(/\.\d{3}Z$/, 'Z'); // Trim milliseconds.
};
const getSignature = (parameters, secret, method) => {
    const canonicalizedQuery = Object.entries(parameters)
        .map(([key, value]) => {
        return `${escaper(key)}=${escaper(value)}`;
    })
        .slice()
        .sort()
        .join('&');
    const stringToSign = `${method.toUpperCase()}&${escaper('/')}&${escaper(canonicalizedQuery)}`;
    return createHmac('sha1', `${secret}&`).update(stringToSign).digest('base64');
};
const request = async (url, parameters, accessKeySecret) => {
    const finalParameters = Object.entries({
        ...parameters,
        SignatureNonce: randomUUID(),
        Timestamp: formatDateString(new Date()),
    }).reduce((result, [key, value]) => (value === undefined ? result : { ...result, [key]: value }), {});
    const signature = getSignature(finalParameters, accessKeySecret, 'POST');
    return got.post({
        url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: { ...finalParameters, Signature: signature },
    });
};

/**
 * @doc https://help.aliyun.com/document_detail/29444.html
 */
const singleSendMail = async (parameters, accessKeySecret) => {
    return request(endpoint, { Action: 'SingleSendMail', ...staticConfigs, ...parameters }, accessKeySecret);
};

const sendEmailResponseGuard = z.object({
    EnvId: z.string(),
    RequestId: z.string(),
});
/**
 * UsageType here is used to specify the use case of the template, can be either
 * 'Register', 'SignIn', 'ForgotPassword' or 'Generic'.
 */
const requiredTemplateUsageTypes = ['Register', 'SignIn', 'ForgotPassword', 'Generic'];
const templateGuard = z.object({
    usageType: z.string(),
    subject: z.string(),
    content: z.string(), // With variable {{code}}, support HTML
});
const aliyunDmConfigGuard = z.object({
    accessKeyId: z.string(),
    accessKeySecret: z.string(),
    accountName: z.string(),
    fromAlias: z.string().optional(),
    templates: z.array(templateGuard).refine((templates) => requiredTemplateUsageTypes.every((requiredType) => templates.map((template) => template.usageType).includes(requiredType)), (templates) => ({
        message: `Template with UsageType (${requiredTemplateUsageTypes
            .filter((requiredType) => !templates.map((template) => template.usageType).includes(requiredType))
            .join(', ')}) should be provided!`,
    })),
});
/**
 * @doc https://next.api.aliyun.com/troubleshoot
 */
const sendMailErrorResponseGuard = z.object({
    Code: z.string(),
    Message: z.string(),
    RequestId: z.string().optional(),
    HostId: z.string().optional(),
    Recommend: z.string().optional(),
});

const sendMessage = (getConfig) => async (data, inputConfig) => {
    const { to, type, payload } = data;
    const config = inputConfig ?? (await getConfig(defaultMetadata.id));
    validateConfig(config, aliyunDmConfigGuard);
    const { accessKeyId, accessKeySecret, accountName, fromAlias, templates } = config;
    const template = templates.find((template) => template.usageType === type);
    assert(template, new ConnectorError(ConnectorErrorCodes.TemplateNotFound, `Cannot find template for type: ${type}`));
    try {
        const httpResponse = await singleSendMail({
            AccessKeyId: accessKeyId,
            AccountName: accountName,
            ReplyToAddress: 'false',
            AddressType: '1',
            ToAddress: to,
            FromAlias: fromAlias,
            Subject: template.subject,
            HtmlBody: typeof payload.code === 'string'
                ? template.content.replaceAll('{{code}}', payload.code)
                : template.content,
        }, accessKeySecret);
        const result = sendEmailResponseGuard.safeParse(parseJson(httpResponse.body));
        if (!result.success) {
            throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
        }
        return result.data;
    }
    catch (error) {
        if (error instanceof HTTPError) {
            const { response: { body: rawBody }, } = error;
            assert(typeof rawBody === 'string', new ConnectorError(ConnectorErrorCodes.InvalidResponse, `Invalid response raw body type: ${typeof rawBody}`));
            errorHandler(rawBody);
        }
        throw error;
    }
};
const errorHandler = (errorResponseBody) => {
    const result = sendMailErrorResponseGuard.safeParse(parseJson(errorResponseBody));
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
    }
    const { Message: errorDescription, ...rest } = result.data;
    throw new ConnectorError(ConnectorErrorCodes.General, { errorDescription, ...rest });
};
const createAliyunDmConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Email,
        configGuard: aliyunDmConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createAliyunDmConnector as default };
