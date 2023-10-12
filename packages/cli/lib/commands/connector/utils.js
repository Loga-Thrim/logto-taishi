import { exec } from 'node:child_process';
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { conditionalArray, conditionalString, trySafe } from '@silverhand/essentials';
import chalk from 'chalk';
import { got } from 'got';
import pLimit from 'p-limit';
import pRetry from 'p-retry';
import tar from 'tar';
import { z } from 'zod';
import { connectorDirectory, coreDirectory } from '../../constants.js';
import { consoleLog, getConnectorPackagesFromDirectory, inquireInstancePath, oraPromise, } from '../../utils.js';
const execPromise = promisify(exec);
export const npmPackResultGuard = z
    .object({
    name: z.string(),
    version: z.string(),
    filename: z.string(),
})
    .array();
const packagePrefix = 'connector-';
export const normalizePackageName = (name) => name
    .split('/')
    // Prepend prefix to the last fragment if needed
    .map((fragment, index, array) => index === array.length - 1 && !fragment.startsWith(packagePrefix) && !fragment.startsWith('@')
    ? packagePrefix + fragment
    : fragment)
    .join('/');
export const getConnectorDirectory = (instancePath) => path.join(instancePath, coreDirectory, connectorDirectory);
export const isOfficialConnector = (packageName) => packageName.startsWith('@logto/connector-');
export const getConnectorPackagesFrom = async (instancePath) => {
    const directory = getConnectorDirectory(await inquireInstancePath(instancePath));
    const packages = await trySafe(getConnectorPackagesFromDirectory(directory));
    if (!packages || packages.length === 0) {
        throw new Error('No connector found in ' + directory);
    }
    return packages;
};
export const getLocalConnectorPackages = async (instancePath) => {
    const directory = path.join(instancePath, 'packages', connectorDirectory);
    const files = await fs.readdir(directory, { withFileTypes: true });
    const packages = files.filter((entity) => entity.isDirectory() && entity.name.startsWith('connector-'));
    if (packages.length === 0) {
        throw new Error('No connector found in ' + directory);
    }
    return packages.map(({ name }) => [name, path.join(directory, name)]);
};
export const addConnectorsToPath = async (cwd, packageNames) => {
    if (!existsSync(cwd)) {
        await fs.mkdir(cwd, { recursive: true });
    }
    consoleLog.info('Fetch connector metadata');
    const limit = pLimit(10);
    const results = await Promise.all(packageNames
        .map((name) => normalizePackageName(name))
        .map(async (packageName) => {
        const run = async () => {
            const { stdout } = await execPromise(`npm pack ${packageName} --json`, { cwd });
            const result = npmPackResultGuard.parse(JSON.parse(stdout));
            if (!result[0]) {
                throw new Error(`Unable to execute ${chalk.green('npm pack')} on package ${chalk.green(packageName)}`);
            }
            const { filename, name, version } = result[0];
            const escapedFilename = filename.replaceAll('/', '-').replaceAll('@', '');
            const tarPath = path.join(cwd, escapedFilename);
            const packageDirectory = path.join(cwd, name.replaceAll('/', '-'));
            await fs.rm(packageDirectory, { force: true, recursive: true });
            await fs.mkdir(packageDirectory, { recursive: true });
            await tar.extract({ cwd: packageDirectory, file: tarPath, strip: 1 });
            await fs.unlink(tarPath);
            consoleLog.succeed(`Added ${chalk.green(name)} v${version}`);
        };
        return limit(async () => {
            try {
                await pRetry(run, { retries: 2 });
            }
            catch (error) {
                consoleLog.error(`[${packageName}]`, error);
                return packageName;
            }
        });
    }));
    const errorPackages = results.filter(Boolean);
    const errorCount = errorPackages.length;
    consoleLog.info(errorCount
        ? `Finished with ${errorCount} error${conditionalString(errorCount > 1 && 's')}.`
        : 'Finished');
    if (errorCount) {
        consoleLog.warn('Failed to add ' + errorPackages.map((name) => chalk.green(name)).join(', '));
    }
};
export const addConnectors = async (instancePath, packageNames) => {
    const cwd = getConnectorDirectory(instancePath);
    await addConnectorsToPath(cwd, packageNames);
};
const officialConnectorPrefix = '@logto/connector-';
export const fetchOfficialConnectorList = async (includingCloudConnectors = false) => {
    const fetchList = async (from = 0, size = 20) => {
        const parameters = new URLSearchParams({
            text: officialConnectorPrefix,
            from: String(from),
            size: String(size),
        });
        return got(`https://registry.npmjs.org/-/v1/search?${parameters.toString()}`).json();
    };
    const packages = [];
    // Disable lint rules for business need
    // eslint-disable-next-line @silverhand/fp/no-let, @silverhand/fp/no-mutation
    for (let page = 0;; ++page) {
        // eslint-disable-next-line no-await-in-loop
        const { objects } = await fetchList(page * 20, 20);
        const excludeList = ['mock', 'kit', ...conditionalArray(!includingCloudConnectors && 'logto')];
        // eslint-disable-next-line @silverhand/fp/no-mutating-methods
        packages.push(...objects
            .filter(({ package: { name, scope } }) => scope === 'logto' &&
            excludeList.every((excluded) => !name.slice(officialConnectorPrefix.length).startsWith(excluded)))
            .map(({ package: data }) => data));
        if (objects.length < 20) {
            break;
        }
    }
    return packages;
};
export const addOfficialConnectors = async (instancePath, includingCloudConnectors = false) => {
    const packages = await oraPromise(fetchOfficialConnectorList(includingCloudConnectors), {
        text: 'Fetch official connector list',
    });
    consoleLog.info(`Found ${packages.length} official connectors`);
    await addConnectors(instancePath, packages.map(({ name }) => name));
};
