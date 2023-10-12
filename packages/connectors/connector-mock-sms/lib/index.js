import fs from 'node:fs/promises';
import path from 'node:path';
import { ConnectorType, validateConfig, ConnectorError, ConnectorErrorCodes } from '@logto/connector-kit';
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
    id: 'mock-short-message-service',
    target: 'mock-sms',
    platform: null,
    name: {
        en: 'Mock SMS Service',
        'zh-CN': 'Mock 短信服务',
        'tr-TR': 'Mock SMS Servis',
        ko: 'Mock SMS Service',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'The description of Mock SMS Service.',
        'zh-CN': 'Mock 短信服务的描述。',
        'tr-TR': 'Mock SMS Servis açıklaması.',
        ko: 'The description of Mock SMS Service.',
    },
    readme: './README.md',
    configTemplate: './docs/config-template.json',
};

const templateGuard = z.object({
    usageType: z.string(),
    content: z.string(),
});
const mockSmsConfigGuard = z.object({
    accountSID: z.string(),
    authToken: z.string(),
    fromMessagingServiceSID: z.string(),
    templates: z.array(templateGuard),
});

const sendMessage = (getConfig) => async (data, inputConfig) => {
    const { to, type, payload } = data;
    const config = inputConfig ?? (await getConfig(defaultMetadata.id));
    validateConfig(config, mockSmsConfigGuard);
    const { templates } = config;
    const template = templates.find((template) => template.usageType === type);
    assert(template, new ConnectorError(ConnectorErrorCodes.TemplateNotFound, `Template not found for type: ${type}`));
    await fs.writeFile(path.join('/tmp', 'logto_mock_verification_code_record.txt'), JSON.stringify({ phone: to, code: payload.code, type }) + '\n');
    return { phone: to, data: payload };
};
const createMockSmsConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Sms,
        configGuard: mockSmsConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createMockSmsConnector as default };
