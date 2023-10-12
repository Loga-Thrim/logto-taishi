import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { ConnectorPlatform, ConnectorType, ConnectorError, ConnectorErrorCodes } from '@logto/connector-kit';

const defaultMetadata = {
    id: 'mock-social-connector',
    target: 'mock-social',
    platform: ConnectorPlatform.Universal,
    name: {
        en: 'Mock Social',
        'zh-CN': 'Mock 社交登录',
        ko: 'Mock Social',
        'tr-TR': 'Mock Social',
    },
    logo: './logo.svg',
    logoDark: null,
    description: {
        en: 'Social mock connector description',
        'zh-CN': 'Mock 社交登录连接器的描述',
        ko: 'Social mock connector description',
        'tr-TR': 'Social mock connector description',
    },
    readme: './README.md',
    configTemplate: './docs/config-template.json',
};

const mockSocialConfigGuard = z.object({
    clientId: z.string(),
    clientSecret: z.string(),
});
z.object({
    access_token: z.string(),
    scope: z.string(),
    token_type: z.string(),
});
z.object({
    sub: z.string(),
    name: z.string().optional(),
    given_name: z.string().optional(),
    family_name: z.string().optional(),
    picture: z.string().optional(),
    email: z.string().optional(),
    email_verified: z.boolean().optional(),
    locale: z.string().optional(),
});

const getAuthorizationUri = async ({ state, redirectUri }) => {
    return `http://mock.social.com/?state=${state}&redirect_uri=${redirectUri}`;
};
const getUserInfo = async (data) => {
    const dataGuard = z.object({
        code: z.string(),
        userId: z.optional(z.string()),
        email: z.string().optional(),
        phone: z.string().optional(),
    });
    const result = dataGuard.safeParse(data);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, JSON.stringify(data));
    }
    const { code, userId, ...rest } = result.data;
    // For mock use only. Use to track the created user entity
    return {
        id: userId ?? `mock-social-sub-${randomUUID()}`,
        ...rest,
    };
};
const createMockSocialConnector = async ({ getConfig }) => {
    return {
        metadata: defaultMetadata,
        type: ConnectorType.Social,
        configGuard: mockSocialConfigGuard,
        getAuthorizationUri,
        getUserInfo,
    };
};

export { createMockSocialConnector as default };
