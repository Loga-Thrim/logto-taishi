import type { ZodType, ZodTypeDef } from 'zod';
import { ConnectorErrorCodes } from './types.js';
export * from './types.js';
export declare function validateConfig<Output, Input = Output>(config: unknown, guard: ZodType<Output, ZodTypeDef, Input>): asserts config is Output;
export declare const parseJson: (jsonString: string, errorCode?: ConnectorErrorCodes, errorPayload?: unknown) => unknown;
export declare const parseJsonObject: (jsonString: string, errorCode?: ConnectorErrorCodes | undefined, errorPayload?: unknown) => object;
export declare const mockSmsVerificationCodeFileName = "logto_mock_verification_code_record.txt";
