import type { AllConnector, BaseConnector, ConnectorMetadata, GetConnectorConfig, GetCloudServiceClient } from '@logto/connector-kit';
import { ConnectorType } from '@logto/connector-kit';
import type { ConnectorFactory } from './types.js';
export declare function validateConnectorModule(connector: Partial<BaseConnector<ConnectorType>>): asserts connector is BaseConnector<ConnectorType>;
export declare const readUrl: (url: string, baseUrl: string, type: 'text' | 'image') => Promise<string>;
export declare const parseMetadata: (metadata: AllConnector['metadata'], packagePath: string) => Promise<AllConnector['metadata']>;
export declare const buildRawConnector: <T extends AllConnector = AllConnector>(connectorFactory: ConnectorFactory<T>, getConnectorConfig?: GetConnectorConfig, getCloudServiceClient?: GetCloudServiceClient) => Promise<{
    rawConnector: T;
    rawMetadata: ConnectorMetadata;
}>;
export declare const isKeyInObject: <Key extends string>(object: unknown, key: Key) => object is Record<string, unknown> & Record<Key, unknown>;
