/**
 * The Implementation of OpenID Connect of Alipay Web Open Platform.
 * https://opendocs.alipay.com/support/01rg6h
 * https://opendocs.alipay.com/open/263/105808
 * https://opendocs.alipay.com/open/01emu5
 */
import type { CreateConnector, SocialConnector } from '@logto/connector-kit';
import type { AlipayConfig } from './types.js';
export type { AlipayConfig } from './types.js';
export declare const getAccessToken: (code: string, config: AlipayConfig) => Promise<{
    accessToken: string;
}>;
declare const createAlipayConnector: CreateConnector<SocialConnector>;
export default createAlipayConnector;
