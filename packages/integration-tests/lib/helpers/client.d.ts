import type { LogtoConfig } from '@logto/node';
import MockClient from '#src/client/index.js';
export declare const initClient: (config?: Partial<LogtoConfig>, redirectUri?: string) => Promise<MockClient>;
export declare const processSession: (client: MockClient, redirectTo: string) => Promise<string>;
export declare const logoutClient: (client: MockClient) => Promise<void>;
