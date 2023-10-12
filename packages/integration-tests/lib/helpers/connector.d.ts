import type { ConnectorType } from '@logto/schemas';
export declare const clearConnectorsByTypes: (types: ConnectorType[]) => Promise<void>;
export declare const clearConnectorById: (id: string) => Promise<unknown>;
export declare const setEmailConnector: () => Promise<import("@logto/schemas").Connector>;
export declare const setSmsConnector: () => Promise<import("@logto/schemas").Connector>;
export declare const setSocialConnector: () => Promise<import("@logto/schemas").Connector>;
