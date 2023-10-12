import crypto from 'node:crypto';
import path from 'node:path';
import { assert } from '@silverhand/essentials';
export const generateName = () => crypto.randomUUID();
export const generateUserId = () => crypto.randomUUID();
export const generateUsername = () => `usr_${crypto.randomUUID().replaceAll('-', '_')}`;
export const generatePassword = () => `pwd_${crypto.randomUUID()}`;
export const generateResourceName = () => `res_${crypto.randomUUID()}`;
export const generateResourceIndicator = () => `https://${crypto.randomUUID()}.logto.io`;
export const generateEmail = () => `${crypto.randomUUID().toLowerCase()}@logto.io`;
export const generateScopeName = () => `sc:${crypto.randomUUID()}`;
export const generateRoleName = () => `role_${crypto.randomUUID()}`;
export const generateDomain = () => `${crypto.randomUUID().toLowerCase().slice(0, 5)}.example.com`;
export const generatePhone = (isE164) => {
    const plus = isE164 ? '+' : '';
    const countryAndAreaCode = '1310'; // California, US
    const validCentralOfficeCodes = [
        '205',
        '208',
        '215',
        '216',
        '220',
        '228',
        '229',
        '230',
        '231',
        '232',
    ];
    const centralOfficeCode = validCentralOfficeCodes[Math.floor(Math.random() * validCentralOfficeCodes.length)] ?? '205';
    const phoneNumber = Math.floor(Math.random() * 10_000)
        .toString()
        .padStart(4, '0');
    return plus + countryAndAreaCode + centralOfficeCode + phoneNumber;
};
export const formatPhoneNumberToInternational = (phoneNumber) => phoneNumber.slice(0, 2) +
    ' ' +
    phoneNumber.slice(2, 5) +
    ' ' +
    phoneNumber.slice(5, 8) +
    ' ' +
    phoneNumber.slice(8);
export const waitFor = async (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});
export const getAccessTokenPayload = (accessToken) => {
    const payloadPart = accessToken.split('.')[1];
    assert(typeof payloadPart === 'string', new Error('Invalid access token'));
    const payload = Buffer.from(payloadPart, 'base64').toString();
    // eslint-disable-next-line no-restricted-syntax
    return JSON.parse(payload);
};
export const appendPathname = (pathname, baseUrl) => new URL(path.join(baseUrl.pathname, pathname), baseUrl);
/**
 * Run an action and simultaneously wait for navigation to complete. This is
 * useful for actions that trigger navigation, such as clicking a link or
 * submitting a form.
 */
export const expectNavigation = async (action, page = global.page) => {
    const [result] = await Promise.all([
        action,
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    return result;
};
/**
 * Build the string for a CSS selector that matches a class name.
 *
 * Since we use CSS modules, the class names are prefixed with a hash followed by a `_`.
 * For example, the class name `foo` will be transformed to `abc123_foo`. This function
 * returns a selector that matches any class name that contains `_foo`.
 *
 * It is accurate enough for our tests, as long as our class names are camelCased.
 */
export const cls = (className) => `[class*=_${className}]`;
/**
 * Build the string for a CSS selector that matches a class name for a `<div>` element.
 * This is a shorthand for `div${cls(className)}`.
 *
 * @example
 * ```ts
 * dcls('foo') // => 'div[class*=_foo]'
 * ```
 *
 * @see {@link cls}
 */
export const dcls = (className) => `div${cls(className)}`;
//# sourceMappingURL=utils.js.map