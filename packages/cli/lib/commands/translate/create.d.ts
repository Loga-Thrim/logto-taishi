import type { CommandModule } from 'yargs';
declare const create: CommandModule<{
    path?: string;
}, {
    path?: string;
    'language-tag': string;
}>;
export default create;
