import type { CommandModule } from 'yargs';
declare const remove: CommandModule<{
    path?: string;
}, {
    path?: string;
    packages?: string[];
}>;
export default remove;
