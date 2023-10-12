/**
 * The Implementation of OpenID Connect of Alipay Web Open Platform.
 * https://opendocs.alipay.com/open/218/105325
 * https://opendocs.alipay.com/open/218/105327
 *
 * https://opendocs.alipay.com/open/204/105295/
 * https://opendocs.alipay.com/open/204/105296/
 */
import type { CreateConnector, SocialConnector } from '@logto/connector-kit';
import type { AlipayNativeConfig } from './types.js';
export type { AlipayNativeConfig } from './types.js';
export declare const getAccessToken: (code: string, config: AlipayNativeConfig) => Promise<{
    accessToken: string;
}>;
declare const createAlipayNativeConnector: CreateConnector<SocialConnector>;
export default createAlipayNativeConnector;
