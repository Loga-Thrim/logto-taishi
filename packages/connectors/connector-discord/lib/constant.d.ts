import type { ConnectorMetadata } from '@logto/connector-kit';
/**
 * Base authorization URL.
 * https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls
 */
export declare const authorizationEndpoint = "https://discord.com/oauth2/authorize";
/**
 * Discord exposes different versions of the API, You should specify which version to use by including it in your requests.
 * https://discord.com/developers/docs/reference#api-reference
 */
export declare const accessTokenEndpoint = "https://discord.com/api/v10/oauth2/token";
export declare const userInfoEndpoint = "https://discord.com/api/v10/users/@me";
/**
 * OAuth2 Scopes
 * https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
 */
export declare const scope = "identify email";
export declare const defaultMetadata: ConnectorMetadata;
export declare const defaultTimeout = 5000;
