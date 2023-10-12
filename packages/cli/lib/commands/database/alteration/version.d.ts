import type { AlterationFile } from './type.js';
export declare const chooseAlterationsByVersion: (alterations: readonly AlterationFile[], initialVersion?: string) => Promise<AlterationFile[]>;
export declare const chooseRevertAlterationsByVersion: (alterations: readonly AlterationFile[], version: string) => Promise<AlterationFile[]>;
