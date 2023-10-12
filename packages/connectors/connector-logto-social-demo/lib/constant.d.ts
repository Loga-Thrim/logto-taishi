import type { ConnectorMetadata } from '@logto/connector-kit';
import { SocialProvider } from './types.js';
export declare const defaultMetadata: ConnectorMetadata;
export declare const getProviderConfigs: (provider: SocialProvider) => {
    endpoint: string;
    params: Record<string, string>;
};
