import { noop } from '@silverhand/essentials';
import alteration from './alteration/index.js';
import config from './config.js';
import seed from './seed/index.js';
import system from './system.js';
const database = {
    command: ['database', 'db'],
    describe: 'Commands for Logto database',
    builder: (yargs) => yargs.command(config).command(seed).command(alteration).command(system).demandCommand(1),
    handler: noop,
};
export default database;
