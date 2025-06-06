import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ConnectorError, ConnectorErrorCodes, ConnectorType } from '@logto/connector-kit';
import { consoleLog } from '../utils.js';
import { notImplemented } from './consts.js';
export function validateConnectorModule(connector) {
    if (!connector.metadata) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidMetadata);
    }
    if (!connector.configGuard) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidConfigGuard);
    }
    if (!connector.type || !Object.values(ConnectorType).includes(connector.type)) {
        throw new ConnectorError(ConnectorErrorCodes.UnexpectedType);
    }
}
const supportedImageTypes = Object.freeze({
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
});
const isSupportedImageType = (extension) => Object.keys(supportedImageTypes).includes(extension);
export const readUrl = async (url, baseUrl, type) => {
    if (!url) {
        return url;
    }
    if (type !== 'text' && url.startsWith('http')) {
        return url;
    }
    if (!existsSync(path.join(baseUrl, url))) {
        return url;
    }
    if (type === 'image') {
        const filePath = path.join(baseUrl, url);
        const extension = path.extname(filePath);
        if (!isSupportedImageType(extension)) {
            consoleLog.warn(`[readUrl] unexpected image type: ${filePath}, only support ".svg" and ".png". Falling back to empty string.`);
            return '';
        }
        const data = await readFile(filePath);
        return `data:${supportedImageTypes[extension]};base64,${data.toString('base64')}`;
    }
    return readFile(path.join(baseUrl, url), 'utf8');
};
export const parseMetadata = async (metadata, packagePath) => {
    return {
        ...metadata,
        logo: await readUrl(metadata.logo, packagePath, 'image'),
        logoDark: metadata.logoDark && (await readUrl(metadata.logoDark, packagePath, 'image')),
        readme: await readUrl(metadata.readme, packagePath, 'text'),
        configTemplate: metadata.configTemplate && (await readUrl(metadata.configTemplate, packagePath, 'text')),
    };
};
export const buildRawConnector = async (connectorFactory, getConnectorConfig, getCloudServiceClient) => {
    const { createConnector, path: packagePath } = connectorFactory;
    const rawConnector = await createConnector({
        getConfig: getConnectorConfig ?? notImplemented,
        getCloudServiceClient,
    });
    validateConnectorModule(rawConnector);
    const rawMetadata = await parseMetadata(rawConnector.metadata, packagePath);
    return { rawConnector, rawMetadata };
};
export const isKeyInObject = (object, key) => object !== null && typeof object === 'object' && key in object;
