import type { DatabasePool } from 'slonik';
import type { CommandModule } from 'yargs';
export declare const seedByPool: (pool: DatabasePool, cloud?: boolean) => Promise<void>;
declare const seed: CommandModule<Record<string, unknown>, {
    swe?: boolean;
    cloud?: boolean;
}>;
export default seed;
