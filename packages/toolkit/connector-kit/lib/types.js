import { isLanguageTag } from '@logto/language-kit';
import { z } from 'zod';
// MARK: Foundation
export var ConnectorType;
(function (ConnectorType) {
    ConnectorType["Email"] = "Email";
    ConnectorType["Sms"] = "Sms";
    ConnectorType["Social"] = "Social";
})(ConnectorType || (ConnectorType = {}));
export var ConnectorPlatform;
(function (ConnectorPlatform) {
    ConnectorPlatform["Native"] = "Native";
    ConnectorPlatform["Universal"] = "Universal";
    ConnectorPlatform["Web"] = "Web";
})(ConnectorPlatform || (ConnectorPlatform = {}));
export const i18nPhrasesGuard = z
    .object({ en: z.string() })
    .and(z.record(z.string()))
    .refine((i18nObject) => {
    const keys = Object.keys(i18nObject);
    if (!keys.includes('en')) {
        return false;
    }
    for (const value of keys) {
        if (!isLanguageTag(value)) {
            return false;
        }
    }
    return true;
});
export var ConnectorErrorCodes;
(function (ConnectorErrorCodes) {
    ConnectorErrorCodes["General"] = "general";
    ConnectorErrorCodes["InvalidMetadata"] = "invalid_metadata";
    ConnectorErrorCodes["UnexpectedType"] = "unexpected_type";
    ConnectorErrorCodes["InvalidConfigGuard"] = "invalid_config_guard";
    ConnectorErrorCodes["InvalidRequestParameters"] = "invalid_request_parameters";
    ConnectorErrorCodes["InsufficientRequestParameters"] = "insufficient_request_parameters";
    ConnectorErrorCodes["InvalidConfig"] = "invalid_config";
    ConnectorErrorCodes["InvalidResponse"] = "invalid_response";
    /** The template is not found for the given type. */
    ConnectorErrorCodes["TemplateNotFound"] = "template_not_found";
    /** The template type is not supported by the connector. */
    ConnectorErrorCodes["TemplateNotSupported"] = "template_not_supported";
    ConnectorErrorCodes["RateLimitExceeded"] = "rate_limit_exceeded";
    ConnectorErrorCodes["NotImplemented"] = "not_implemented";
    ConnectorErrorCodes["SocialAuthCodeInvalid"] = "social_auth_code_invalid";
    ConnectorErrorCodes["SocialAccessTokenInvalid"] = "social_invalid_access_token";
    ConnectorErrorCodes["SocialIdTokenInvalid"] = "social_invalid_id_token";
    ConnectorErrorCodes["AuthorizationFailed"] = "authorization_failed";
})(ConnectorErrorCodes || (ConnectorErrorCodes = {}));
export class ConnectorError extends Error {
    constructor(code, data) {
        const message = `ConnectorError: ${data ? JSON.stringify(data) : code}`;
        super(message);
        this.code = code;
        this.data = typeof data === 'string' ? { message: data } : data;
    }
}
export var VerificationCodeType;
(function (VerificationCodeType) {
    VerificationCodeType["SignIn"] = "SignIn";
    VerificationCodeType["Register"] = "Register";
    VerificationCodeType["ForgotPassword"] = "ForgotPassword";
    /** @deprecated */
    VerificationCodeType["Continue"] = "Continue";
    VerificationCodeType["Generic"] = "Generic";
    /** @deprecated Use `Generic` type template for sending test sms/email use case */
    VerificationCodeType["Test"] = "Test";
})(VerificationCodeType || (VerificationCodeType = {}));
export const verificationCodeTypeGuard = z.nativeEnum(VerificationCodeType);
// Enum is string actually, keep this exported until GA for compatibility.
/** @deprecated Use `VerificationCodeType` instead. */
export var MessageType;
(function (MessageType) {
    MessageType["SignIn"] = "SignIn";
    MessageType["Register"] = "Register";
    MessageType["ForgotPassword"] = "ForgotPassword";
    MessageType["Continue"] = "Continue";
    MessageType["Test"] = "Test";
})(MessageType || (MessageType = {}));
/** @deprecated Use `verificationCodeTypeGuard` instead. */
export const messageTypesGuard = verificationCodeTypeGuard;
export var ConnectorConfigFormItemType;
(function (ConnectorConfigFormItemType) {
    ConnectorConfigFormItemType["Text"] = "Text";
    ConnectorConfigFormItemType["Number"] = "Number";
    ConnectorConfigFormItemType["MultilineText"] = "MultilineText";
    ConnectorConfigFormItemType["Switch"] = "Switch";
    ConnectorConfigFormItemType["Select"] = "Select";
    ConnectorConfigFormItemType["Json"] = "Json";
})(ConnectorConfigFormItemType || (ConnectorConfigFormItemType = {}));
const baseConfigFormItem = {
    key: z.string(),
    label: z.string(),
    placeholder: z.string().optional(),
    required: z.boolean().optional(),
    defaultValue: z.unknown().optional(),
    showConditions: z
        .array(z.object({ targetKey: z.string(), expectValue: z.unknown().optional() }))
        .optional(),
    description: z.string().optional(),
    tooltip: z.string().optional(),
    isConfidential: z.boolean().optional(), // For `Text` type only.
};
const connectorConfigFormItemGuard = z.discriminatedUnion('type', [
    z.object({
        type: z.literal(ConnectorConfigFormItemType.Select),
        selectItems: z.array(z.object({ value: z.string(), title: z.string() })),
        ...baseConfigFormItem,
    }),
    z.object({
        type: z.enum([
            ConnectorConfigFormItemType.Text,
            ConnectorConfigFormItemType.Number,
            ConnectorConfigFormItemType.MultilineText,
            ConnectorConfigFormItemType.Switch,
            ConnectorConfigFormItemType.Json,
        ]),
        ...baseConfigFormItem,
    }),
]);
export const connectorMetadataGuard = z
    .object({
    id: z.string(),
    target: z.string(),
    platform: z.nativeEnum(ConnectorPlatform).nullable(),
    name: i18nPhrasesGuard,
    logo: z.string(),
    logoDark: z.string().nullable(),
    description: i18nPhrasesGuard,
    isStandard: z.boolean().optional(),
    readme: z.string(),
    configTemplate: z.string().optional(),
    formItems: connectorConfigFormItemGuard.array().optional(),
})
    .catchall(z.unknown());
export const configurableConnectorMetadataGuard = connectorMetadataGuard
    .pick({
    target: true,
    name: true,
    logo: true,
    logoDark: true,
})
    .partial();
export const connectorSessionGuard = z
    .object({
    nonce: z.string(),
    redirectUri: z.string(),
    connectorId: z.string(),
    connectorFactoryId: z.string(),
    jti: z.string(),
    state: z.string(),
})
    .partial()
    /**
     * Accept arbitrary unspecified keys so developers who can not publish @logto/connector-kit can more flexibly utilize connector session.
     */
    .catchall(z.unknown());
export const urlRegEx = /(https?:\/\/)?(?:www\.)?[\w#%+.:=@~-]{1,256}\.[\d()A-Za-z]{1,6}\b[\w#%&()+./:=?@~-]*/;
export const emailServiceBrandingGuard = z
    .object({
    senderName: z
        .string()
        .refine((address) => !urlRegEx.test(address), 'DO NOT include URL in the sender name!'),
    companyInformation: z
        .string()
        .refine((address) => !urlRegEx.test(address), 'DO NOT include URL in the company information!'),
    appLogo: z.string().url(),
})
    .partial();
export const sendMessagePayloadGuard = z.object({
    code: z.string(),
});
export const sendMessageDataGuard = z.object({
    to: z.string(),
    type: verificationCodeTypeGuard,
    payload: sendMessagePayloadGuard,
});
export const socialUserInfoGuard = z.object({
    id: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    name: z.string().optional(),
    avatar: z.string().optional(),
});
export var DemoConnector;
(function (DemoConnector) {
    DemoConnector["Sms"] = "logto-sms";
    DemoConnector["Social"] = "logto-social-demo";
})(DemoConnector || (DemoConnector = {}));
export const demoConnectorIds = Object.freeze([
    DemoConnector.Sms,
    DemoConnector.Social,
]);
export var ServiceConnector;
(function (ServiceConnector) {
    ServiceConnector["Email"] = "logto-email";
})(ServiceConnector || (ServiceConnector = {}));
export const serviceConnectorIds = Object.freeze([ServiceConnector.Email]);
