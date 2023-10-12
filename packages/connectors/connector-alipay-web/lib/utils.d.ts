import type { AlipayConfig } from './types.js';
export type SigningParameters = (parameters: AlipayConfig & Record<string, string | undefined>) => Record<string, string>;
export declare const signingParameters: SigningParameters;
