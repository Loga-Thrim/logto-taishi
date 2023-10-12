import path from 'node:path';
import connectorKitMeta from '@logto/connector-kit/package.json' assert { type: 'json' };
import { satisfies } from 'semver';
import { consoleLog } from '../utils.js';
import { isKeyInObject } from './utils.js';
const connectorKit = '@logto/connector-kit';
const { version: currentVersion } = connectorKitMeta;
const checkConnectorKitVersion = (dependencies, ignoreVersionMismatch) => {
    if (isKeyInObject(dependencies, connectorKit)) {
        const value = dependencies[connectorKit];
        if (typeof value === 'string') {
            if (value.startsWith('workspace:') || satisfies(currentVersion, value)) {
                return;
            }
            const message = `Connector requires ${connectorKit} to be ${value}, but the version here is ${currentVersion}.`;
            if (ignoreVersionMismatch) {
                consoleLog.warn(`${message}\n\nThis is highly discouraged in production.`);
                return;
            }
            throw new Error(message);
        }
    }
    throw new Error(`Cannot find ${connectorKit} in connector's dependency`);
};
export const loadConnector = async (connectorPath, ignoreVersionMismatch) => {
    const { default: { dependencies },
    // eslint-disable-next-line no-restricted-syntax
     } = (await import(path.join(connectorPath, 'package.json'), {
        assert: { type: 'json' },
    }));
    checkConnectorKitVersion(dependencies, ignoreVersionMismatch);
    const loaded = await import(path.join(connectorPath, 'lib/index.js'));
    if (isKeyInObject(loaded, 'default')) {
        // CJS pattern
        if (isKeyInObject(loaded.default, 'default')) {
            if (typeof loaded.default.default === 'function') {
                consoleLog.warn(`Load connector ${connectorPath} in CJS mode`);
                // eslint-disable-next-line no-restricted-syntax
                return loaded.default.default;
            }
            // ESM pattern
        }
        else if (typeof loaded.default === 'function') {
            // eslint-disable-next-line no-restricted-syntax
            return loaded.default;
        }
    }
    throw new Error(`Cannot load connector from ${connectorPath}, the connector package may be broken.`);
};
