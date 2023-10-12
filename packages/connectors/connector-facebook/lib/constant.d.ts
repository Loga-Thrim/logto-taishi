import type { ConnectorMetadata } from '@logto/connector-kit';
/**
 * Note: If you do not include a version number we will default to the oldest available version, so it's recommended to include the version number in your requests.
 * https://developers.facebook.com/docs/graph-api/overview#versions
 */
export declare const authorizationEndpoint = "https://www.facebook.com/v13.0/dialog/oauth";
export declare const accessTokenEndpoint = "https://graph.facebook.com/v13.0/oauth/access_token";
/**
 * Note: The /me node is a special endpoint that translates to the object ID of the person or Page whose access token is currently being used to make the API calls.
 * https://developers.facebook.com/docs/graph-api/overview#me
 * https://developers.facebook.com/docs/graph-api/reference/user#Reading
 */
export declare const userInfoEndpoint = "https://graph.facebook.com/v13.0/me";
export declare const scope = "email,public_profile";
export declare const defaultMetadata: ConnectorMetadata;
export declare const defaultTimeout = 5000;
