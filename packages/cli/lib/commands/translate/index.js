import { noop } from '@silverhand/essentials';
import create from './create.js';
import listTags from './list-tags.js';
import syncKeys from './sync-keys/index.js';
import sync from './sync.js';
const translate = {
    command: ['translate', 't'],
    describe: 'Commands for Logto translation',
    builder: (yargs) => yargs
        .option('path', {
        alias: 'p',
        type: 'string',
        describe: 'The path to your Logto instance directory',
    })
        .command(create)
        .command(listTags)
        .command(sync)
        .command(syncKeys)
        .demandCommand(1),
    handler: noop,
};
export default translate;
