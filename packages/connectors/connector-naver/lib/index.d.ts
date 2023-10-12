import type { CreateConnector, SocialConnector } from '@logto/connector-kit';
import type { NaverConfig } from './types.js';
export declare const getAccessToken: (config: NaverConfig, codeObject: {
    code: string;
    redirectUri: string;
}) => Promise<{
    accessToken: string;
}>;
declare const createNaverConnector: CreateConnector<SocialConnector>;
export default createNaverConnector;
