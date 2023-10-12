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
    id: 'mock-email-service-alternative',
    target: 'mock-mail-alternative',
    platform: null,
    name: {
        en: 'Mock Mail Service',
        'zh-CN': 'Mock 邮件服务',
        'tr-TR': 'Mock Mail Servis',
        ko: 'Mock Mail Service',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'The description of Mock Mail Service.',
        'zh-CN': 'Mock 邮件服务的描述。',
        'tr-TR': 'Mock Mail Servis açıklaması.',
        ko: 'The description of Mock SMS Service.',
    },
    readme: './README.md',
    configTemplate: './docs/config-template.json',
};

var ContextType;
(function (ContextType) {
    ContextType["Text"] = "text/plain";
    ContextType["Html"] = "text/html";
})(ContextType || (ContextType = {}));
const templateGuard = z.object({
    usageType: z.string(),
    type: z.nativeEnum(ContextType),
    subject: z.string(),
    content: z.string(), // With variable {{code}}, support HTML
});
const mockMailConfigGuard = z
    .object({
    apiKey: z.string(),
    fromEmail: z.string(),
    fromName: z.string().optional(),
    templates: z.array(templateGuard),
})
    .partial();

const sendMessage = (getConfig) => async (data, inputConfig) => {
    const { to, type, payload } = data;
    const config = inputConfig ?? (await getConfig(defaultMetadata.id));
    validateConfig(config, mockMailConfigGuard);
    const { templates } = config;
    const template = templates?.find((template) => template.usageType === type);
    assert(template, new ConnectorError(ConnectorErrorCodes.TemplateNotFound, `Template not found for type: ${type}`));
    await fs.writeFile(path.join('/tmp', 'logto_mock_verification_code_record.txt'), JSON.stringify({ address: to, code: payload.code, type }) + '\n');
    return { address: to, data: payload };
};
const createAlternativeMockEmailConnector = async ({ getConfig, }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Email,
        configGuard: mockMailConfigGuard,
        sendMessage: sendMessage(getConfig),
    };
};

export { createAlternativeMockEmailConnector as default };
