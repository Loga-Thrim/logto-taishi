import type { PublicParameters } from './types.js';
export declare const getSignature: (parameters: Record<string, string>, secret: string, method: string) => string;
export declare const request: (url: string, parameters: PublicParameters & Record<string, string>, accessKeySecret: string) => Promise<any>;
