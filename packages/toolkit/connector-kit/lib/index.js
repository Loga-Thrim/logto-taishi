import { ConnectorError, ConnectorErrorCodes } from './types.js';
export * from './types.js';
export function validateConfig(config, guard) {
    const result = guard.safeParse(config);
    if (!result.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidConfig, result.error);
    }
}
export const parseJson = (jsonString, errorCode = ConnectorErrorCodes.InvalidResponse, errorPayload) => {
    try {
        return JSON.parse(jsonString);
    }
    catch {
        throw new ConnectorError(errorCode, errorPayload ?? jsonString);
    }
};
export const parseJsonObject = (...args) => {
    const parsed = parseJson(...args);
    if (!(parsed !== null && typeof parsed === 'object')) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, parsed);
    }
    return parsed;
};
export const mockSmsVerificationCodeFileName = 'logto_mock_verification_code_record.txt';
