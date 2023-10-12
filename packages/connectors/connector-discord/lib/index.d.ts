/**
 * Discord OAuth2 Connector
 * https://discord.com/developers/docs/topics/oauth2
 */
import type { CreateConnector, SocialConnector } from '@logto/connector-kit';
import type { DiscordConfig } from './types.js';
export declare const getAccessToken: (config: DiscordConfig, codeObject: {
    code: string;
    redirectUri: string;
}) => Promise<{
    accessToken: string;
}>;
declare const createDiscordConnector: CreateConnector<SocialConnector>;
export default createDiscordConnector;
