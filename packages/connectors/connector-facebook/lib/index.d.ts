/**
 * Reference: Manually Build a Login Flow
 * https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow
 */
import type { CreateConnector, SocialConnector } from '@logto/connector-kit';
import type { FacebookConfig } from './types.js';
export declare const getAccessToken: (config: FacebookConfig, codeObject: {
    code: string;
    redirectUri: string;
}) => Promise<{
    accessToken: string;
}>;
declare const createFacebookConnector: CreateConnector<SocialConnector>;
export default createFacebookConnector;
