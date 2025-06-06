import type router from '@logto/cloud/routes';
import type { LanguageTag } from '@logto/language-kit';
import { isLanguageTag } from '@logto/language-kit';
import type Client from '@withtyped/client';
import type { ZodType } from 'zod';
import { z } from 'zod';

// MARK: Foundation
export enum ConnectorType {
  Email = 'Email',
  Sms = 'Sms',
  Social = 'Social',
}

export enum ConnectorPlatform {
  Native = 'Native',
  Universal = 'Universal',
  Web = 'Web',
}

export const i18nPhrasesGuard: ZodType<I18nPhrases> = z
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

type I18nPhrases = { en: string } & {
  [K in Exclude<LanguageTag, 'en'>]?: string;
};

export enum ConnectorErrorCodes {
  General = 'general',
  InvalidMetadata = 'invalid_metadata',
  UnexpectedType = 'unexpected_type',
  InvalidConfigGuard = 'invalid_config_guard',
  InvalidRequestParameters = 'invalid_request_parameters',
  InsufficientRequestParameters = 'insufficient_request_parameters',
  InvalidConfig = 'invalid_config',
  InvalidResponse = 'invalid_response',
  /** The template is not found for the given type. */
  TemplateNotFound = 'template_not_found',
  /** The template type is not supported by the connector. */
  TemplateNotSupported = 'template_not_supported',
  RateLimitExceeded = 'rate_limit_exceeded',
  NotImplemented = 'not_implemented',
  SocialAuthCodeInvalid = 'social_auth_code_invalid',
  SocialAccessTokenInvalid = 'social_invalid_access_token',
  SocialIdTokenInvalid = 'social_invalid_id_token',
  AuthorizationFailed = 'authorization_failed',
}

export class ConnectorError extends Error {
  public code: ConnectorErrorCodes;
  public data: unknown;

  constructor(code: ConnectorErrorCodes, data?: unknown) {
    const message = `ConnectorError: ${data ? JSON.stringify(data) : code}`;
    super(message);
    this.code = code;
    this.data = typeof data === 'string' ? { message: data } : data;
  }
}

export enum VerificationCodeType {
  SignIn = 'SignIn',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
  /** @deprecated */
  Continue = 'Continue',
  Generic = 'Generic',
  /** @deprecated Use `Generic` type template for sending test sms/email use case */
  Test = 'Test',
}

export const verificationCodeTypeGuard = z.nativeEnum(VerificationCodeType);

// Enum is string actually, keep this exported until GA for compatibility.
/** @deprecated Use `VerificationCodeType` instead. */
export enum MessageType {
  SignIn = 'SignIn',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
  Continue = 'Continue',
  Test = 'Test',
}

/** @deprecated Use `verificationCodeTypeGuard` instead. */
export const messageTypesGuard = verificationCodeTypeGuard;

export enum ConnectorConfigFormItemType {
  Text = 'Text',
  Number = 'Number',
  MultilineText = 'MultilineText',
  Switch = 'Switch',
  Select = 'Select',
  Json = 'Json',
}

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

export type ConnectorConfigFormItem = z.infer<typeof connectorConfigFormItemGuard>;

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

export type ConnectorMetadata = z.infer<typeof connectorMetadataGuard>;

export type ConfigurableConnectorMetadata = z.infer<typeof configurableConnectorMetadataGuard>;

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

// MARK: SMS + Email connector
export type SmsConnector = BaseConnector<ConnectorType.Sms> & {
  sendMessage: SendMessageFunction;
  getUsage?: GetUsageFunction;
};

export type EmailConnector = BaseConnector<ConnectorType.Email> & {
  sendMessage: SendMessageFunction;
  getUsage?: GetUsageFunction;
};

export const urlRegEx =
  /(https?:\/\/)?(?:www\.)?[\w#%+.:=@~-]{1,256}\.[\d()A-Za-z]{1,6}\b[\w#%&()+./:=?@~-]*/;

export const emailServiceBrandingGuard = z
  .object({
    senderName: z
      .string()
      .refine((address) => !urlRegEx.test(address), 'DO NOT include URL in the sender name!'),
    companyInformation: z
      .string()
      .refine(
        (address) => !urlRegEx.test(address),
        'DO NOT include URL in the company information!'
      ),
    appLogo: z.string().url(),
  })
  .partial();

export type EmailServiceBranding = z.infer<typeof emailServiceBrandingGuard>;

export type SendMessagePayload = {
  /**
   * The dynamic verification code to send.
   *
   * @example '123456'
   */
  code: string;
};

export const sendMessagePayloadGuard = z.object({
  code: z.string(),
}) satisfies z.ZodType<SendMessagePayload>;

export type SendMessageData = {
  to: string;
  type: VerificationCodeType;
  payload: SendMessagePayload;
};

export const sendMessageDataGuard = z.object({
  to: z.string(),
  type: verificationCodeTypeGuard,
  payload: sendMessagePayloadGuard,
}) satisfies z.ZodType<SendMessageData>;

export type SendMessageFunction = (data: SendMessageData, config?: unknown) => Promise<unknown>;

export type GetUsageFunction = (startFrom?: Date) => Promise<number>;

// MARK: Social connector
export type SocialConnector = BaseConnector<ConnectorType.Social> & {
  getAuthorizationUri: GetAuthorizationUri;
  getUserInfo: GetUserInfo;
  validateSamlAssertion?: ValidateSamlAssertion;
};

// This type definition is for SAML connector
export type ValidateSamlAssertion = (
  assertion: Record<string, unknown>,
  getSession: GetSession,
  setSession: SetSession
) => Promise<string>;

export type GetAuthorizationUri = (
  payload: {
    state: string;
    redirectUri: string;
    connectorId: string;
    connectorFactoryId: string;
    jti: string;
    headers: { userAgent?: string };
  },
  setSession: SetSession
) => Promise<string>;

export const socialUserInfoGuard = z.object({
  id: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  name: z.string().optional(),
  avatar: z.string().optional(),
});

export type SocialUserInfo = z.infer<typeof socialUserInfoGuard>;

export type GetUserInfo = (
  data: unknown,
  getSession: GetSession
) => Promise<SocialUserInfo & Record<string, string | boolean | number | undefined>>;

export enum DemoConnector {
  Sms = 'logto-sms',
  Social = 'logto-social-demo',
}

export const demoConnectorIds: readonly string[] = Object.freeze([
  DemoConnector.Sms,
  DemoConnector.Social,
]);

export enum ServiceConnector {
  Email = 'logto-email',
}

export const serviceConnectorIds: readonly string[] = Object.freeze([ServiceConnector.Email]);
