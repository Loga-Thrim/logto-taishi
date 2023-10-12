import type { ConnectorConfigFormItem, ConnectorMetadata } from '@logto/connector-kit';
export declare const formItems: ConnectorConfigFormItem[];
export declare const defaultMetadata: ConnectorMetadata;
export declare const defaultTimeout = 10000;
export declare const authnRequestBinding: readonly ["HTTP-Redirect"];
export declare const assertionBinding: readonly ["HTTP-POST"];
export declare const messageSigningOrders: readonly ["sign-then-encrypt", "encrypt-then-sign"];
