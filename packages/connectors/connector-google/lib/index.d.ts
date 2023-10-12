import type { CreateConnector, SocialConnector } from '@logto/connector-kit';
import type { GoogleConfig } from './types.js';
export declare const getAccessToken: (config: GoogleConfig, codeObject: {
    code: string;
    redirectUri: string;
}) => Promise<{
    accessToken: string;
}>;
declare const createGoogleConnector: CreateConnector<SocialConnector>;
export default createGoogleConnector;
