import { mobileUriSchemeProtocolRegEx, webRedirectUriProtocolRegEx } from '../regex.js';
export const validateRedirectUrl = (url, type) => {
    try {
        const { protocol } = new URL(url);
        const protocolRegEx = type === 'mobile' ? mobileUriSchemeProtocolRegEx : webRedirectUriProtocolRegEx;
        return protocolRegEx.test(protocol);
    }
    catch {
        return false;
    }
};
export const validateUriOrigin = (url) => {
    try {
        return new URL(url).origin === url;
    }
    catch {
        return false;
    }
};
