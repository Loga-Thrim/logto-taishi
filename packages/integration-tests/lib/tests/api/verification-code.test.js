import { VerificationCodeType } from '@logto/connector-kit';
import { ConnectorType } from '@logto/schemas';
import { requestVerificationCode, verifyVerificationCode } from '#src/api/verification-code.js';
import { clearConnectorsByTypes, setEmailConnector, setSmsConnector, } from '#src/helpers/connector.js';
import { expectRejects, readVerificationCode, removeVerificationCode } from '#src/helpers/index.js';
import { enableAllVerificationCodeSignInMethods } from '#src/helpers/sign-in-experience.js';
describe('Generic verification code through management API', () => {
    const mockEmail = 'foo@bar.com';
    const mockPhone = '1234567890';
    beforeAll(async () => {
        await clearConnectorsByTypes([ConnectorType.Email, ConnectorType.Sms]);
        await setEmailConnector();
        await setSmsConnector();
        await enableAllVerificationCodeSignInMethods();
    });
    afterAll(async () => {
        await clearConnectorsByTypes([ConnectorType.Email, ConnectorType.Sms]);
    });
    afterEach(async () => {
        await removeVerificationCode();
    });
    it('should create an email verification code on server side', async () => {
        const payload = { email: mockEmail };
        const response = await requestVerificationCode(payload);
        expect(response.statusCode).toBe(204);
        const { code, type, address } = await readVerificationCode();
        expect(type).toBe(VerificationCodeType.Generic);
        expect(address).toBe(mockEmail);
        expect(code).not.toBeNull();
    });
    it('should create an SMS verification code on server side', async () => {
        const payload = { phone: mockPhone };
        const response = await requestVerificationCode(payload);
        expect(response.statusCode).toBe(204);
        const { code, type, phone } = await readVerificationCode();
        expect(type).toBe(VerificationCodeType.Generic);
        expect(phone).toBe(mockPhone);
        expect(code).not.toBeNull();
    });
    it('should fail to create a verification code on server side when the email and phone are not provided', async () => {
        await expectRejects(requestVerificationCode({ username: 'any_string' }), {
            code: 'guard.invalid_input',
            statusCode: 400,
        });
        await expect(readVerificationCode()).rejects.toThrow();
    });
    it('should fail to send a verification code on server side when no email connector has been set', async () => {
        const emailForTestSendCode = 'test_send@email.com';
        await clearConnectorsByTypes([ConnectorType.Email]);
        await expectRejects(requestVerificationCode({ email: emailForTestSendCode }), {
            code: 'connector.not_found',
            statusCode: 400,
        });
        await expect(verifyVerificationCode({ email: emailForTestSendCode, verificationCode: 'any_string' })).rejects.toMatchObject({
            response: {
                statusCode: 400,
                body: JSON.stringify({
                    message: 'Invalid verification code.',
                    code: 'verification_code.code_mismatch',
                }),
            },
        });
        // Restore the email connector
        await setEmailConnector();
    });
    it('should fail to send a verification code on server side when no SMS connector has not been set', async () => {
        const phoneForTestSendCode = '1233212321';
        await clearConnectorsByTypes([ConnectorType.Sms]);
        await expectRejects(requestVerificationCode({ phone: phoneForTestSendCode }), {
            code: 'connector.not_found',
            statusCode: 400,
        });
        await expect(verifyVerificationCode({ phone: phoneForTestSendCode, verificationCode: 'any_string' })).rejects.toMatchObject({
            response: {
                statusCode: 400,
                body: JSON.stringify({
                    message: 'Invalid verification code.',
                    code: 'verification_code.code_mismatch',
                }),
            },
        });
        // Restore the SMS connector
        await setSmsConnector();
    });
    it('should be able to verify the email verification code', async () => {
        await requestVerificationCode({ email: mockEmail });
        const { code } = await readVerificationCode();
        await expect(verifyVerificationCode({ email: mockEmail, verificationCode: code })).resolves.not.toThrow();
    });
    it('should be able to verify the sms verification code', async () => {
        await requestVerificationCode({ phone: mockPhone });
        const { code } = await readVerificationCode();
        await expect(verifyVerificationCode({ phone: mockPhone, verificationCode: code })).resolves.not.toThrow();
    });
    it('should throw when the code is not valid', async () => {
        await requestVerificationCode({ phone: mockPhone });
        await readVerificationCode();
        await expectRejects(verifyVerificationCode({ phone: mockPhone, verificationCode: '666' }), {
            code: 'verification_code.code_mismatch',
            statusCode: 400,
        });
    });
    it('should throw when the phone number is not matched', async () => {
        const phoneToVerify = '666';
        const phoneToGetCode = mockPhone;
        await requestVerificationCode({ phone: phoneToGetCode });
        const { code, phone } = await readVerificationCode();
        expect(phoneToGetCode).toEqual(phone);
        await expectRejects(verifyVerificationCode({ phone: phoneToVerify, verificationCode: code }), {
            code: 'verification_code.not_found',
            statusCode: 400,
        });
    });
    it('should throw when the email is not matched', async () => {
        const emailToVerify = 'verify_email@mail.com';
        const emailToGetCode = mockEmail;
        await requestVerificationCode({ email: emailToGetCode });
        const { code, address } = await readVerificationCode();
        expect(emailToGetCode).toEqual(address);
        await expectRejects(verifyVerificationCode({ email: emailToVerify, verificationCode: code }), {
            code: 'verification_code.not_found',
            statusCode: 400,
        });
    });
});
//# sourceMappingURL=verification-code.test.js.map