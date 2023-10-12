import type { CommandModule } from 'yargs';
export type InstallArgs = {
    path?: string;
    skipSeed: boolean;
    cloud: boolean;
    downloadUrl?: string;
};
declare const install: CommandModule<unknown, {
    p?: string;
    ss: boolean;
    cloud: boolean;
    du?: string;
}>;
export default install;
