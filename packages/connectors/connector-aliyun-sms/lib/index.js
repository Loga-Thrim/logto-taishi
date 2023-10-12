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

const endpoint = 'https://dysmsapi.aliyuncs.com/';
const staticConfigs = {
    Format: 'json',
    RegionId: 'cn-hangzhou',
    SignatureMethod: 'HMAC-SHA1',
    SignatureVersion: '1.0',
    Version: '2017-05-25',
};
/**
 * Details of SmsTemplateType can be found at:
 * https://next.api.aliyun.com/document/Dysmsapi/2017-05-25/QuerySmsTemplateList.
 *
 * In our use case, it is to send verification code SMS for passwordless sign-in/up as well as
 * reset password. The default value of type code is set to 2.
 */
var SmsTemplateType;
(function (SmsTemplateType) {
    SmsTemplateType[SmsTemplateType["Notification"] = 0] = "Notification";
    SmsTemplateType[SmsTemplateType["Promotion"] = 1] = "Promotion";
    SmsTemplateType[SmsTemplateType["VerificationCode"] = 2] = "VerificationCode";
    SmsTemplateType[SmsTemplateType["InternationalMessage"] = 6] = "InternationalMessage";
    SmsTemplateType[SmsTemplateType["PureNumber"] = 7] = "PureNumber";
})(SmsTemplateType || (SmsTemplateType = {}));
const defaultMetadata = {
    id: 'aliyun-short-message-service',
    target: 'aliyun-sms',
    platform: null,
    name: {
        en: 'Aliyun Short Message Service',
        'zh-CN': '阿里云短信服务',
        'tr-TR': 'Aliyun SMS Servisi',
        ko: 'Aliyun Short 메세지 서비스',
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
            key: 'signName',
            label: 'Signature Name',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<signature-name>',
        },
        {
            key: 'templates',
            label: 'Templates',
            type: ConnectorConfigFormItemType.Json,
            required: true,
            defaultValue: [
                {
                    usageType: 'SignIn',
                    templateCode: '<template-code>',
                },
                {
                    usageType: 'Register',
                    templateCode: '<template-code>',
                },
                {
                    usageType: 'ForgotPassword',
                    templateCode: '<template-code>',
                },
                {
                    usageType: 'Generic',
                    templateCode: '<template-code>',
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
 * @doc https://help.aliyun.com/document_detail/101414.html
 */
const sendSms = async (parameters, accessKeySecret) => {
    return request(endpoint, { Action: 'SendSms', ...staticConfigs, ...parameters }, accessKeySecret);
};

const sendSmsResponseGuard = z.object({
    BizId: z.string().optional(),
    Code: z.string(),
    Message: z.string(),
    RequestId: z.string(),
});
/**
 * UsageType here is used to specify the use case of the template, can be either
 * 'Register', 'SignIn', 'ForgotPassword', 'Generic'.
 *
 * Type here in the template is used to specify the purpose of sending the SMS,
 * can be either item in SmsTemplateType.
 * As the SMS is applied for sending verification code, the value should always be 2 in our case.
 */
const requiredTemplateUsageTypes = ['Register', 'SignIn', 'ForgotPassword', 'Generic'];
const templateGuard = z.object({
    type: z.nativeEnum(SmsTemplateType).default(2),
    usageType: z.string(),
    templateCode: z.string().or(z.object({ china: z.string(), overseas: z.string() })),
});
const aliyunSmsConfigGuard = z.object({
    accessKeyId: z.string(),
    accessKeySecret: z.string(),
    signName: z.string(),
    templates: z.array(templateGuard).refine((templates) => requiredTemplateUsageTypes.every((requiredType) => templates.map((template) => template.usageType).includes(requiredType)), (templates) => ({
        message: `UsageType (${requiredTemplateUsageTypes
            .filter((requiredType) => !templates.map((template) => template.usageType).includes(requiredType))
            .join(', ')}) should be provided in templates.`,
    })),
});

const isChinaNumber = (to) => /^(\+86|0086|86)?\d{11}$/.test(to);
const getTemplateCode = ({ templateCode }, to) => {
    if (typeof templateCode === 'string') {
        return templateCode;
    }
    return isChinaNumber(to) ? templateCode.china : templateCode.overseas;
};
const sendMessage = (getConfig) => async (data, inputConfig) => {
    const { to, type, payload } = data;
    const config = inputConfig ?? (await getConfig(defaultMetadata.id));
    validateConfig(config, aliyunSmsConfigGuard);
    const { accessKeyId, accessKeySecret, signName, templates } = config;
    const template = templates.find(({ usageType }) => usageType === type);
    assert(template, new ConnectorError(ConnectorErrorCodes.TemplateNotFound, `Cannot find template for type: ${type}`));
    try {
        const httpResponse = await sendSms({
            AccessKeyId: accessKeyId,
            PhoneNumbers: to,
            SignName: signName,
            TemplateCode: getTemplateCode(template, to),
            TemplateParam: JSON.stringify(payload),
        }, accessKeySecret);
        const { Code, Message, ...rest } = parseResponseString(httpResponse.body);
        assert(Code === 'OK', new ConnectorError(
        /**
         * See https://help.aliyun.com/document_detail/101347.html for more details.
         * Some errors (like rate limit) can be addressed by end users.
         */
        Code === 'isv.BUSINESS_LIMIT_CONTROL'
            ? ConnectorErrorCodes.RateLimitExceeded
            : ConnectorErrorCodes.General, {
            errorDescription: Message,
            Code,
            ...rest,
        }));
        return { Code, Message, ...rest };
    }
    catch (error) {
        if (error instanceof HTTPError) {
            const { response: { body: rawBody }, } = error;
            assert(typeof rawBody === 'string', new ConnectorError(ConnectorErrorCodes.InvalidResponse, `Invalid response raw body type: ${typeof rawBody}`));
            const { Message, ...rest } = parseResponseString(rawBody);
            throw new ConnectorError(ConnectorErrorCodes.General, {
                errorDescription: Message,
                ...rest,
            });
        }
        throw error;
    }
};
const parseResponseString = (response) => {
    const result = sendSmsResponseGuard.safeParse(parseJson(response));
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);
    }
    return result.data;
};
const createAliyunSmsConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Sms,
        configGuard: aliyunSmsConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createAliyunSmsConnector as default };
