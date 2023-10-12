import { JsonObject, ConfigurableConnectorMetadata, GeneratedSchema } from './../foundations/index.js';
export type CreateConnector = {
    tenantId?: string;
    id: string;
    syncProfile?: boolean;
    connectorId: string;
    config?: JsonObject;
    metadata?: ConfigurableConnectorMetadata;
    createdAt?: number;
};
export type Connector = {
    tenantId: string;
    id: string;
    syncProfile: boolean;
    connectorId: string;
    config: JsonObject;
    metadata: ConfigurableConnectorMetadata;
    createdAt: number;
};
export declare const Connectors: GeneratedSchema<CreateConnector, Connector>;
