import fs from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { mockSmsVerificationCodeFileName } from '@logto/connector-kit';
import { RequestError } from 'got';
import { createUser } from '#src/api/index.js';
import { generateUsername } from '#src/utils.js';
const temporaryVerificationCodeFilePath = path.join('/tmp', mockSmsVerificationCodeFileName);
export const createUserByAdmin = async (username, password, primaryEmail, primaryPhone, name) => {
    return createUser({
        username: username ?? generateUsername(),
        password,
        name: name ?? username ?? 'John',
        primaryEmail,
        primaryPhone,
    });
};
export const readVerificationCode = async () => {
    const buffer = await fs.readFile(temporaryVerificationCodeFilePath);
    const content = buffer.toString();
    // For test use only
    // eslint-disable-next-line no-restricted-syntax
    return JSON.parse(content);
};
export const removeVerificationCode = async () => {
    try {
        await fs.unlink(temporaryVerificationCodeFilePath);
    }
    catch {
        // Do nothing
    }
};
export const expectRejects = async (promise, expected) => {
    try {
        await promise;
    }
    catch (error) {
        expectRequestError(error, expected);
        return;
    }
    fail();
};
export const expectRequestError = (error, expected) => {
    const { code, statusCode, messageIncludes } = expected;
    if (!(error instanceof RequestError)) {
        fail('Error should be an instance of RequestError');
    }
    // JSON.parse returns `any`. Directly use `as` since we've already know the response body structure.
    // eslint-disable-next-line no-restricted-syntax
    const body = JSON.parse(String(error.response?.body));
    expect(body.code).toEqual(code);
    expect(error.response?.statusCode).toEqual(statusCode);
    if (messageIncludes) {
        expect(body.message.includes(messageIncludes)).toBeTruthy();
    }
};
const defaultRequestListener = (request, response) => {
    // eslint-disable-next-line @silverhand/fp/no-mutation
    response.statusCode = 204;
    response.end();
};
export const createMockServer = (port, requestListener) => {
    const server = createServer(requestListener ?? defaultRequestListener);
    return {
        listen: async () => new Promise((resolve) => {
            server.listen(port, () => {
                resolve(true);
            });
        }),
        close: async () => new Promise((resolve) => {
            server.close(() => {
                resolve(true);
            });
        }),
    };
};
//# sourceMappingURL=index.js.map