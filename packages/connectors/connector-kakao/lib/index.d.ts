import type { CreateConnector, SocialConnector } from '@logto/connector-kit';
import type { KakaoConfig } from './types.js';
export declare const getAccessToken: (config: KakaoConfig, codeObject: {
    code: string;
    redirectUri: string;
}) => Promise<{
    accessToken: string;
}>;
declare const createKakaoConnector: CreateConnector<SocialConnector>;
export default createKakaoConnector;
