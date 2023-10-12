import { generateKeyPair } from 'node:crypto';
import { promisify } from 'node:util';
import { generateStandardSecret } from '@logto/shared';
export var PrivateKeyType;
(function (PrivateKeyType) {
    PrivateKeyType["RSA"] = "rsa";
    PrivateKeyType["EC"] = "ec";
})(PrivateKeyType || (PrivateKeyType = {}));
export const generateOidcPrivateKey = async (type = PrivateKeyType.EC) => {
    if (type === PrivateKeyType.RSA) {
        const { privateKey } = await promisify(generateKeyPair)('rsa', {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        });
        return privateKey;
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (type === PrivateKeyType.EC) {
        const { privateKey } = await promisify(generateKeyPair)('ec', {
            // https://security.stackexchange.com/questions/78621/which-elliptic-curve-should-i-use
            namedCurve: 'secp384r1',
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        });
        return privateKey;
    }
    throw new Error(`Unsupported private key ${String(type)}`);
};
export const generateOidcCookieKey = () => generateStandardSecret();
