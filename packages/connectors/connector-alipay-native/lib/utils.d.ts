import type { AlipayNativeConfig } from './types.js';
export type SigningParameters = (parameters: AlipayNativeConfig & Record<string, string | undefined>) => Record<string, string>;
export declare const signingParameters: SigningParameters;
