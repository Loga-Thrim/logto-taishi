import type { CommandModule } from 'yargs';
declare const link: CommandModule<{
    path?: string;
}, {
    path?: string;
    cloud: boolean;
    mock: boolean;
}>;
export default link;
