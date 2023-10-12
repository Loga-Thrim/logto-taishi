import { type CommandModule } from 'yargs';
declare const syncKeys: CommandModule<{
    path?: string;
}, {
    path?: string;
    baseline: string;
    target: string;
    skipLint?: boolean;
    package: string;
}>;
export default syncKeys;
