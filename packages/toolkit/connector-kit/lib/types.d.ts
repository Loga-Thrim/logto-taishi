import type router from '@logto/cloud/routes';
import type { LanguageTag } from '@logto/language-kit';
import type Client from '@withtyped/client';
import type { ZodType } from 'zod';
import { z } from 'zod';
export declare enum ConnectorType {
    Email = "Email",
    Sms = "Sms",
    Social = "Social"
}
export declare enum ConnectorPlatform {
    Native = "Native",
    Universal = "Universal",
    Web = "Web"
}
export declare const i18nPhrasesGuard: ZodType<I18nPhrases>;
type I18nPhrases = {
    en: string;
} & {
    [K in Exclude<LanguageTag, 'en'>]?: string;
};
export declare enum ConnectorErrorCodes {
    General = "general",
    InvalidMetadata = "invalid_metadata",
    UnexpectedType = "unexpected_type",
    InvalidConfigGuard = "invalid_config_guard",
    InvalidRequestParameters = "invalid_request_parameters",
    InsufficientRequestParameters = "insufficient_request_parameters",
    InvalidConfig = "invalid_config",
    InvalidResponse = "invalid_response",
    /** The template is not found for the given type. */
    TemplateNotFound = "template_not_found",
    /** The template type is not supported by the connector. */
    TemplateNotSupported = "template_not_supported",
    RateLimitExceeded = "rate_limit_exceeded",
    NotImplemented = "not_implemented",
    SocialAuthCodeInvalid = "social_auth_code_invalid",
    SocialAccessTokenInvalid = "social_invalid_access_token",
    SocialIdTokenInvalid = "social_invalid_id_token",
    AuthorizationFailed = "authorization_failed"
}
export declare class ConnectorError extends Error {
    code: ConnectorErrorCodes;
    data: unknown;
    constructor(code: ConnectorErrorCodes, data?: unknown);
}
export declare enum VerificationCodeType {
    SignIn = "SignIn",
    Register = "Register",
    ForgotPassword = "ForgotPassword",
    /** @deprecated */
    Continue = "Continue",
    Generic = "Generic",
    /** @deprecated Use `Generic` type template for sending test sms/email use case */
    Test = "Test"
}
export declare const verificationCodeTypeGuard: z.ZodNativeEnum<typeof VerificationCodeType>;
/** @deprecated Use `VerificationCodeType` instead. */
export declare enum MessageType {
    SignIn = "SignIn",
    Register = "Register",
    ForgotPassword = "ForgotPassword",
    Continue = "Continue",
    Test = "Test"
}
/** @deprecated Use `verificationCodeTypeGuard` instead. */
export declare const messageTypesGuard: z.ZodNativeEnum<typeof VerificationCodeType>;
export declare enum ConnectorConfigFormItemType {
    Text = "Text",
    Number = "Number",
    MultilineText = "MultilineText",
    Switch = "Switch",
    Select = "Select",
    Json = "Json"
}
declare const connectorConfigFormItemGuard: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    placeholder: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    defaultValue: z.ZodOptional<z.ZodUnknown>;
    showConditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        targetKey: z.ZodString;
        expectValue: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        expectValue?: unknown;
        targetKey: string;
    }, {
        expectValue?: unknown;
        targetKey: string;
    }>, "many">>;
    description: z.ZodOptional<z.ZodString>;
    tooltip: z.ZodOptional<z.ZodString>;
    isConfidential: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<ConnectorConfigFormItemType.Select>;
    selectItems: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        title: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        title: string;
    }, {
        value: string;
        title: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    placeholder?: string | undefined;
    required?: boolean | undefined;
    defaultValue?: unknown;
    showConditions?: {
        expectValue?: unknown;
        targetKey: string;
    }[] | undefined;
    description?: string | undefined;
    tooltip?: string | undefined;
    isConfidential?: boolean | undefined;
    type: ConnectorConfigFormItemType.Select;
    selectItems: {
        value: string;
        title: string;
    }[];
    key: string;
    label: string;
}, {
    placeholder?: string | undefined;
    required?: boolean | undefined;
    defaultValue?: unknown;
    showConditions?: {
        expectValue?: unknown;
        targetKey: string;
    }[] | undefined;
    description?: string | undefined;
    tooltip?: string | undefined;
    isConfidential?: boolean | undefined;
    type: ConnectorConfigFormItemType.Select;
    selectItems: {
        value: string;
        title: string;
    }[];
    key: string;
    label: string;
}>, z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    placeholder: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    defaultValue: z.ZodOptional<z.ZodUnknown>;
    showConditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        targetKey: z.ZodString;
        expectValue: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        expectValue?: unknown;
        targetKey: string;
    }, {
        expectValue?: unknown;
        targetKey: string;
    }>, "many">>;
    description: z.ZodOptional<z.ZodString>;
    tooltip: z.ZodOptional<z.ZodString>;
    isConfidential: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<[ConnectorConfigFormItemType.Text, ConnectorConfigFormItemType.Number, ConnectorConfigFormItemType.MultilineText, ConnectorConfigFormItemType.Switch, ConnectorConfigFormItemType.Json]>;
}, "strip", z.ZodTypeAny, {
    placeholder?: string | undefined;
    required?: boolean | undefined;
    defaultValue?: unknown;
    showConditions?: {
        expectValue?: unknown;
        targetKey: string;
    }[] | undefined;
    description?: string | undefined;
    tooltip?: string | undefined;
    isConfidential?: boolean | undefined;
    type: ConnectorConfigFormItemType.Text | ConnectorConfigFormItemType.Number | ConnectorConfigFormItemType.MultilineText | ConnectorConfigFormItemType.Switch | ConnectorConfigFormItemType.Json;
    key: string;
    label: string;
}, {
    placeholder?: string | undefined;
    required?: boolean | undefined;
    defaultValue?: unknown;
    showConditions?: {
        expectValue?: unknown;
        targetKey: string;
    }[] | undefined;
    description?: string | undefined;
    tooltip?: string | undefined;
    isConfidential?: boolean | undefined;
    type: ConnectorConfigFormItemType.Text | ConnectorConfigFormItemType.Number | ConnectorConfigFormItemType.MultilineText | ConnectorConfigFormItemType.Switch | ConnectorConfigFormItemType.Json;
    key: string;
    label: string;
}>]>;
export type ConnectorConfigFormItem = z.infer<typeof connectorConfigFormItemGuard>;
export declare const connectorMetadataGuard: z.ZodObject<{
    id: z.ZodString;
    target: z.ZodString;
    platform: z.ZodNullable<z.ZodNativeEnum<typeof ConnectorPlatform>>;
    name: ZodType<I18nPhrases, z.ZodTypeDef, I18nPhrases>;
    logo: z.ZodString;
    logoDark: z.ZodNullable<z.ZodString>;
    description: ZodType<I18nPhrases, z.ZodTypeDef, I18nPhrases>;
    isStandard: z.ZodOptional<z.ZodBoolean>;
    readme: z.ZodString;
    configTemplate: z.ZodOptional<z.ZodString>;
    formItems: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        placeholder: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        defaultValue: z.ZodOptional<z.ZodUnknown>;
        showConditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            targetKey: z.ZodString;
            expectValue: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            expectValue?: unknown;
            targetKey: string;
        }, {
            expectValue?: unknown;
            targetKey: string;
        }>, "many">>;
        description: z.ZodOptional<z.ZodString>;
        tooltip: z.ZodOptional<z.ZodString>;
        isConfidential: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<ConnectorConfigFormItemType.Select>;
        selectItems: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            title: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            title: string;
        }, {
            value: string;
            title: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        placeholder?: string | undefined;
        required?: boolean | undefined;
        defaultValue?: unknown;
        showConditions?: {
            expectValue?: unknown;
            targetKey: string;
        }[] | undefined;
        description?: string | undefined;
        tooltip?: string | undefined;
        isConfidential?: boolean | undefined;
        type: ConnectorConfigFormItemType.Select;
        selectItems: {
            value: string;
            title: string;
        }[];
        key: string;
        label: string;
    }, {
        placeholder?: string | undefined;
        required?: boolean | undefined;
        defaultValue?: unknown;
        showConditions?: {
            expectValue?: unknown;
            targetKey: string;
        }[] | undefined;
        description?: string | undefined;
        tooltip?: string | undefined;
        isConfidential?: boolean | undefined;
        type: ConnectorConfigFormItemType.Select;
        selectItems: {
            value: string;
            title: string;
        }[];
        key: string;
        label: string;
    }>, z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        placeholder: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        defaultValue: z.ZodOptional<z.ZodUnknown>;
        showConditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            targetKey: z.ZodString;
            expectValue: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            expectValue?: unknown;
            targetKey: string;
        }, {
            expectValue?: unknown;
            targetKey: string;
        }>, "many">>;
        description: z.ZodOptional<z.ZodString>;
        tooltip: z.ZodOptional<z.ZodString>;
        isConfidential: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodEnum<[ConnectorConfigFormItemType.Text, ConnectorConfigFormItemType.Number, ConnectorConfigFormItemType.MultilineText, ConnectorConfigFormItemType.Switch, ConnectorConfigFormItemType.Json]>;
    }, "strip", z.ZodTypeAny, {
        placeholder?: string | undefined;
        required?: boolean | undefined;
        defaultValue?: unknown;
        showConditions?: {
            expectValue?: unknown;
            targetKey: string;
        }[] | undefined;
        description?: string | undefined;
        tooltip?: string | undefined;
        isConfidential?: boolean | undefined;
        type: ConnectorConfigFormItemType.Text | ConnectorConfigFormItemType.Number | ConnectorConfigFormItemType.MultilineText | ConnectorConfigFormItemType.Switch | ConnectorConfigFormItemType.Json;
        key: string;
        label: string;
    }, {
        placeholder?: string | undefined;
        required?: boolean | undefined;
        defaultValue?: unknown;
        showConditions?: {
            expectValue?: unknown;
            targetKey: string;
        }[] | undefined;
        description?: string | undefined;
        tooltip?: string | undefined;
        isConfidential?: boolean | undefined;
        type: ConnectorConfigFormItemType.Text | ConnectorConfigFormItemType.Number | ConnectorConfigFormItemType.MultilineText | ConnectorConfigFormItemType.Switch | ConnectorConfigFormItemType.Json;
        key: string;
        label: string;
    }>]>, "many">>;
}, "strip", z.ZodUnknown, {
    [x: string]: unknown;
    isStandard?: boolean | undefined;
    configTemplate?: string | undefined;
    formItems?: ({
        placeholder?: string | undefined;
        required?: boolean | undefined;
        defaultValue?: unknown;
        showConditions?: {
            expectValue?: unknown;
            targetKey: string;
        }[] | undefined;
        description?: string | undefined;
        tooltip?: string | undefined;
        isConfidential?: boolean | undefined;
        type: ConnectorConfigFormItemType.Select;
        selectItems: {
            value: string;
            title: string;
        }[];
        key: string;
        label: string;
    } | {
        placeholder?: string | undefined;
        required?: boolean | undefined;
        defaultValue?: unknown;
        showConditions?: {
            expectValue?: unknown;
            targetKey: string;
        }[] | undefined;
        description?: string | undefined;
        tooltip?: string | undefined;
        isConfidential?: boolean | undefined;
        type: ConnectorConfigFormItemType.Text | ConnectorConfigFormItemType.Number | ConnectorConfigFormItemType.MultilineText | ConnectorConfigFormItemType.Switch | ConnectorConfigFormItemType.Json;
        key: string;
        label: string;
    })[] | undefined;
    description: I18nPhrases;
    id: string;
    target: string;
    platform: ConnectorPlatform | null;
    name: I18nPhrases;
    logo: string;
    logoDark: string | null;
    readme: string;
}, {
    [x: string]: unknown;
    isStandard?: boolean | undefined;
    configTemplate?: string | undefined;
    formItems?: ({
        placeholder?: string | undefined;
        required?: boolean | undefined;
        defaultValue?: unknown;
        showConditions?: {
            expectValue?: unknown;
            targetKey: string;
        }[] | undefined;
        description?: string | undefined;
        tooltip?: string | undefined;
        isConfidential?: boolean | undefined;
        type: ConnectorConfigFormItemType.Select;
        selectItems: {
            value: string;
            title: string;
        }[];
        key: string;
        label: string;
    } | {
        placeholder?: string | undefined;
        required?: boolean | undefined;
        defaultValue?: unknown;
        showConditions?: {
            expectValue?: unknown;
            targetKey: string;
        }[] | undefined;
        description?: string | undefined;
        tooltip?: string | undefined;
        isConfidential?: boolean | undefined;
        type: ConnectorConfigFormItemType.Text | ConnectorConfigFormItemType.Number | ConnectorConfigFormItemType.MultilineText | ConnectorConfigFormItemType.Switch | ConnectorConfigFormItemType.Json;
        key: string;
        label: string;
    })[] | undefined;
    description: I18nPhrases;
    id: string;
    target: string;
    platform: ConnectorPlatform | null;
    name: I18nPhrases;
    logo: string;
    logoDark: string | null;
    readme: string;
}>;
export declare const configurableConnectorMetadataGuard: z.ZodObject<{
    target: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<ZodType<I18nPhrases, z.ZodTypeDef, I18nPhrases>>;
    logo: z.ZodOptional<z.ZodString>;
    logoDark: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodUnknown, {
    [x: string]: unknown;
    target?: string | undefined;
    name?: I18nPhrases | undefined;
    logo?: string | undefined;
    logoDark?: string | null | undefined;
}, {
    [x: string]: unknown;
    target?: string | undefined;
    name?: I18nPhrases | undefined;
    logo?: string | undefined;
    logoDark?: string | null | undefined;
}>;
export type ConnectorMetadata = z.infer<typeof connectorMetadataGuard>;
export type ConfigurableConnectorMetadata = z.infer<typeof configurableConnectorMetadataGuard>;
export declare const connectorSessionGuard: z.ZodObject<{
    nonce: z.ZodOptional<z.ZodString>;
    redirectUri: z.ZodOptional<z.ZodString>;
    connectorId: z.ZodOptional<z.ZodString>;
    connectorFactoryId: z.ZodOptional<z.ZodString>;
    jti: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodUnknown, {
    [x: string]: unknown;
    nonce?: string | undefined;
    redirectUri?: string | undefined;
    connectorId?: string | undefined;
    connectorFactoryId?: string | undefined;
    jti?: string | undefined;
    state?: string | undefined;
}, {
    [x: string]: unknown;
    nonce?: string | undefined;
    redirectUri?: string | undefined;
    connectorId?: string | undefined;
    connectorFactoryId?: string | undefined;
    jti?: string | undefined;
    state?: string | undefined;
}>;
export type ConnectorSession = z.infer<typeof connectorSessionGuard>;
export type GetSession = () => Promise<ConnectorSession>;
export type SetSession = (storage: ConnectorSession) => Promise<void>;
export type BaseConnector<Type extends ConnectorType> = {
    type: Type;
    metadata: ConnectorMetadata;
    configGuard: ZodType;
};
export type CreateConnector<T extends AllConnector> = (options: {
    getConfig: GetConnectorConfig;
    getCloudServiceClient?: GetCloudServiceClient;
}) => Promise<T>;
export type GetConnectorConfig = (id: string) => Promise<unknown>;
export type GetCloudServiceClient = () => Promise<Client<typeof router>>;
export type AllConnector = SmsConnector | EmailConnector | SocialConnector;
export type SmsConnector = BaseConnector<ConnectorType.Sms> & {
    sendMessage: SendMessageFunction;
    getUsage?: GetUsageFunction;
};
export type EmailConnector = BaseConnector<ConnectorType.Email> & {
    sendMessage: SendMessageFunction;
    getUsage?: GetUsageFunction;
};
export declare const urlRegEx: RegExp;
export declare const emailServiceBrandingGuard: z.ZodObject<{
    senderName: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    companyInformation: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    appLogo: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    senderName?: string | undefined;
    companyInformation?: string | undefined;
    appLogo?: string | undefined;
}, {
    senderName?: string | undefined;
    companyInformation?: string | undefined;
    appLogo?: string | undefined;
}>;
export type EmailServiceBranding = z.infer<typeof emailServiceBrandingGuard>;
export type SendMessagePayload = {
    /**
     * The dynamic verification code to send.
     *
     * @example '123456'
     */
    code: string;
};
export declare const sendMessagePayloadGuard: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export type SendMessageData = {
    to: string;
    type: VerificationCodeType;
    payload: SendMessagePayload;
};
export declare const sendMessageDataGuard: z.ZodObject<{
    to: z.ZodString;
    type: z.ZodNativeEnum<typeof VerificationCodeType>;
    payload: z.ZodObject<{
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
    }, {
        code: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: VerificationCodeType;
    to: string;
    payload: {
        code: string;
    };
}, {
    type: VerificationCodeType;
    to: string;
    payload: {
        code: string;
    };
}>;
export type SendMessageFunction = (data: SendMessageData, config?: unknown) => Promise<unknown>;
export type GetUsageFunction = (startFrom?: Date) => Promise<number>;
export type SocialConnector = BaseConnector<ConnectorType.Social> & {
    getAuthorizationUri: GetAuthorizationUri;
    getUserInfo: GetUserInfo;
    validateSamlAssertion?: ValidateSamlAssertion;
};
export type ValidateSamlAssertion = (assertion: Record<string, unknown>, getSession: GetSession, setSession: SetSession) => Promise<string>;
export type GetAuthorizationUri = (payload: {
    state: string;
    redirectUri: string;
    connectorId: string;
    connectorFactoryId: string;
    jti: string;
    headers: {
        userAgent?: string;
    };
}, setSession: SetSession) => Promise<string>;
export declare const socialUserInfoGuard: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
    id: string;
}, {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
    id: string;
}>;
export type SocialUserInfo = z.infer<typeof socialUserInfoGuard>;
export type GetUserInfo = (data: unknown, getSession: GetSession) => Promise<SocialUserInfo & Record<string, string | boolean | number | undefined>>;
export declare enum DemoConnector {
    Sms = "logto-sms",
    Social = "logto-social-demo"
}
export declare const demoConnectorIds: readonly string[];
export declare enum ServiceConnector {
    Email = "logto-email"
}
export declare const serviceConnectorIds: readonly string[];
export {};
