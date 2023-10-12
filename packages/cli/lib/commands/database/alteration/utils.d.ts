import type { AlterationFile } from './type.js';
export declare const getTimestampFromFilename: (filename: string) => number;
export declare const getAlterationDirectory: () => string;
export declare const getAlterationFiles: () => Promise<AlterationFile[]>;
export declare const chooseRevertAlterationsByTimestamp: (target: string) => Promise<AlterationFile[]>;
