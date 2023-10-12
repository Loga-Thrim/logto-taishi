import type { CommandModule } from 'yargs';
declare const add: CommandModule<{
    path?: string;
}, {
    packages?: string[];
    path?: string;
    official: boolean;
    cloud: boolean;
}>;
export default add;
