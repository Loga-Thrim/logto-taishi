import type { AllConnector, CreateConnector } from '@logto/connector-kit';
export declare const loadConnector: (connectorPath: string, ignoreVersionMismatch: boolean) => Promise<CreateConnector<AllConnector>>;
