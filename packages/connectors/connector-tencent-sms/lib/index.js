import { got, HTTPError } from 'got';
import { ConnectorConfigFormItemType, ConnectorType, validateConfig, ConnectorError, ConnectorErrorCodes } from '@logto/connector-kit';
import crypto from 'node:crypto';
import { z } from 'zod';

// https://github.com/facebook/jest/issues/7547
const assert = (value, error) => {
    if (!value) {
        // https://github.com/typescript-eslint/typescript-eslint/issues/3814
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw error;
    }
};

const defaultMetadata = {
    id: 'tencent-short-message-service',
    target: 'tencent-sms',
    platform: null,
    name: {
        en: 'Tencent Short Message Service',
        'zh-CN': '腾讯云短信服务',
        'tr-TR': 'Tencent SMS Servisi',
        ko: 'Tencent Short 메세지 서비스',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Tencent provides cloud computing services to online businesses.',
        'zh-CN': '腾讯云是全球性的云服务提供商。',
        'tr-TR': 'Tencent, çevrimiçi işletmelere bulut bilişim hizmetleri sunmaktadır.',
        ko: 'Tencent 는 온라인 비지니스를 위해 클라우딩 컴퓨팅 서비스를 제공합니다.',
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
            label: 'Sign Name',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<sign-name>',
        },
        {
            key: 'sdkAppId',
            label: 'SDK App ID',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<sdk-app-id>',
        },
        {
            key: 'region',
            label: 'Region',
            type: ConnectorConfigFormItemType.Text,
            required: true,
            placeholder: '<region>',
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

/**
 * UsageType here is used to specify the use case of the template, can be either
 * 'Register', 'SignIn', 'ForgotPassword', 'Generic'.
 */
const requiredTemplateUsageTypes = ['Register', 'SignIn', 'ForgotPassword', 'Generic'];
const SingleSmsConfig = z.object({
    usageType: z.string(),
    templateCode: z.string(),
});
const SmsConfigGuard = z.object({
    accessKeyId: z.string(),
    accessKeySecret: z.string(),
    signName: z.string(),
    sdkAppId: z.string(),
    region: z.string(),
    templates: z.array(SingleSmsConfig).refine((templates) => requiredTemplateUsageTypes.every((requiredType) => templates.map((template) => template.usageType).includes(requiredType)), (templates) => ({
        message: `Template with UsageType (${requiredTemplateUsageTypes
            .filter((requiredType) => !templates.map((template) => template.usageType).includes(requiredType))
            .join(', ')}) should be provided!`,
    })),
});
const tencentErrorResponse = z.object({
    Response: z.object({
        Error: z.object({
            Code: z.string(),
            Message: z.string(),
        }),
    }),
});
const SendStatusSetItem = z.object({
    SerialNo: z.string(),
    PhoneNumber: z.string(),
    Fee: z.number(),
    SessionContext: z.string(),
    Code: z.string(),
    Message: z.string(),
    IsoCode: z.string(),
});
z.object({
    Response: z.object({
        SendStatusSet: z.array(SendStatusSetItem),
        RequestId: z.string(),
    }),
});

const endpoint = 'sms.tencentcloudapi.com';
function sha256Hmac(message, secret, encoding) {
    const hmac = crypto.createHmac('sha256', secret);
    return encoding ? hmac.update(message).digest(encoding) : hmac.update(message).digest();
}
function getHash(message, encoding = 'hex') {
    const hash = crypto.createHash('sha256');
    return hash.update(message).digest(encoding);
}
function getDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function isSmsErrorResponse(response) {
    const result = tencentErrorResponse.safeParse(response);
    return result.success;
}
async function sendSmsRequest(templateId, templateParameters, phoneNumber, config) {
    const { secretId, secretKey, region, sdkAppId, signName } = config;
    const timestamp = Math.floor(Date.now() / 1000);
    const date = getDate(timestamp);
    const service = 'sms';
    const firstPayload = {
        SmsSdkAppId: sdkAppId,
        SignName: signName,
        TemplateId: templateId,
        TemplateParamSet: templateParameters,
        PhoneNumberSet: [phoneNumber],
    };
    const payload = JSON.stringify(firstPayload);
    const hashedRequestPayload = getHash(payload);
    const signedHeaders = 'content-type;host';
    const httpRequestMethod = 'POST';
    const canonicalUri = '/';
    const canonicalQueryString = '';
    const canonicalHeaders = `content-type:application/json; charset=utf-8\nhost:${endpoint}\n`;
    const canonicalRequest = [
        httpRequestMethod,
        canonicalUri,
        canonicalQueryString,
        canonicalHeaders,
        signedHeaders,
        hashedRequestPayload,
    ].join('\n');
    const algorithm = 'TC3-HMAC-SHA256';
    const hashedCanonicalRequest = getHash(canonicalRequest);
    const credentialScope = `${date}/${service}/tc3_request`;
    const stringToSign = [algorithm, timestamp, credentialScope, hashedCanonicalRequest].join('\n');
    const secretDate = sha256Hmac(date, `TC3${secretKey}`);
    const secretService = sha256Hmac(service, secretDate);
    const secretSigning = sha256Hmac('tc3_request', secretService);
    const signature = sha256Hmac(stringToSign, secretSigning, 'hex').toString();
    const authorization = `${algorithm} Credential=${secretId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
    return got.post(`https://${endpoint}`, {
        headers: {
            Authorization: authorization,
            'Content-Type': 'application/json; charset=utf-8',
            Host: endpoint,
            'X-TC-Action': 'SendSms',
            'X-TC-Timestamp': String(timestamp),
            'X-TC-Version': '2021-01-11',
            'X-TC-Region': region,
        },
        body: payload,
        responseType: 'json',
    });
}

function safeGetArray(value, index) {
    const item = value[index];
    assert(item, new ConnectorError(ConnectorErrorCodes.General, `Cannot find item at index ${index}`));
    return item;
}
function sendMessage(getConfig) {
    return async (data, inputConfig) => {
        const { to, type, payload } = data;
        const config = inputConfig ?? (await getConfig(defaultMetadata.id));
        validateConfig(config, SmsConfigGuard);
        const { accessKeyId, accessKeySecret, signName, templates, sdkAppId, region } = config;
        const template = templates.find(({ usageType }) => usageType === type);
        assert(template, new ConnectorError(ConnectorErrorCodes.TemplateNotFound, `Cannot find template for type: ${type}`));
        try {
            const httpResponse = await sendSmsRequest(template.templateCode, [payload.code], to, {
                secretId: accessKeyId,
                secretKey: accessKeySecret,
                sdkAppId,
                region,
                signName,
            });
            const { body: responseData } = httpResponse;
            const isError = isSmsErrorResponse(responseData);
            if (isError) {
                const { Response } = responseData;
                const { Error } = Response;
                throw new ConnectorError(ConnectorErrorCodes.General, `${Error.Code}: ${Error.Message}`);
            }
            const { Response: { SendStatusSet, RequestId }, } = responseData;
            const { Code, Message } = safeGetArray(SendStatusSet, 0);
            assert(Code.toLowerCase() === 'ok', new ConnectorError(ConnectorErrorCodes.General, `${Code}: ${Message}, RequestId: ${RequestId}`));
            return httpResponse;
        }
        catch (error) {
            if (!(error instanceof HTTPError)) {
                throw error;
            }
            const { response: { body: rawBody }, message, } = error;
            const result = tencentErrorResponse.safeParse(rawBody);
            if (result.success) {
                const { Error } = result.data.Response;
                const { Message, Code } = Error;
                throw new ConnectorError(ConnectorErrorCodes.General, {
                    errorDescription: Message,
                    Code,
                    ...result,
                });
            }
            throw new ConnectorError(ConnectorErrorCodes.General, `Request error: ${message}`);
        }
    };
}
const createTencentSmsConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Sms,
        configGuard: SmsConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createTencentSmsConnector as default };
