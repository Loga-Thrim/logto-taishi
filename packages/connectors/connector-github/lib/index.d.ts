import type { SocialConnector, CreateConnector } from '@logto/connector-kit';
import type { GithubConfig } from './types.js';
export declare const getAccessToken: (config: GithubConfig, codeObject: {
    code: string;
}) => Promise<{
    accessToken: string;
}>;
declare const createGithubConnector: CreateConnector<SocialConnector>;
export default createGithubConnector;
