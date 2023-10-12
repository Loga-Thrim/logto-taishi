import type { DatabasePool } from 'slonik';
import type { CommandModule } from 'yargs';
import type { AlterationFile } from './type.js';
export declare const getLatestAlterationTimestamp: () => Promise<number>;
export declare const getAvailableAlterations: (pool: DatabasePool, compareMode?: 'gt' | 'lte') => Promise<AlterationFile[]>;
declare const alteration: CommandModule<unknown, {
    action: string;
    target?: string;
}>;
export default alteration;
