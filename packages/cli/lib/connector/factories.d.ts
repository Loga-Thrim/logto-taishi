import type { ConnectorFactory, ConnectorPackage } from './types.js';
export declare const loadConnectorFactories: (connectorPackages: ConnectorPackage[], ignoreVersionMismatch: boolean) => Promise<ConnectorFactory[]>;
