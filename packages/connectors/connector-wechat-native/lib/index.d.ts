/**
 * The Implementation of OpenID Connect of WeChat Web Open Platform.
 * https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
 */
import type { CreateConnector, SocialConnector } from '@logto/connector-kit';
import type { WechatNativeConfig } from './types.js';
export declare const getAccessToken: (code: string, config: WechatNativeConfig) => Promise<{
    accessToken: string;
    openid: string;
}>;
declare const createWechatNativeConnector: CreateConnector<SocialConnector>;
export default createWechatNativeConnector;
