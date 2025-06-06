import { SignInIdentifier, demoAppApplicationId } from '@logto/schemas';
import { appendPath, getEnv } from '@silverhand/essentials';
export const logtoUrl = getEnv('INTEGRATION_TESTS_LOGTO_URL', 'http://localhost:3001');
export const logtoConsoleUrl = getEnv('INTEGRATION_TESTS_LOGTO_CONSOLE_URL', 'http://localhost:3002');
export const logtoCloudUrl = getEnv('INTEGRATION_TESTS_LOGTO_CLOUD_URL', 'http://localhost:3003');
export const demoAppUrl = appendPath(new URL(logtoUrl), 'demo-app');
export const discoveryUrl = `${logtoUrl}/oidc/.well-known/openid-configuration`;
export const demoAppRedirectUri = `${logtoUrl}/${demoAppApplicationId}`;
export const adminConsoleRedirectUri = `${logtoConsoleUrl}/console/callback`;
export const signUpIdentifiers = {
    username: [SignInIdentifier.Username],
    email: [SignInIdentifier.Email],
    sms: [SignInIdentifier.Phone],
    emailOrSms: [SignInIdentifier.Email, SignInIdentifier.Phone],
    none: [],
};
export const consoleUsername = 'admin';
export const consolePassword = 'some_random_password_123';
//# sourceMappingURL=constants.js.map