import { z } from 'zod';
export declare const npmPackResultGuard: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    version: z.ZodString;
    filename: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    version: string;
    filename: string;
}, {
    name: string;
    version: string;
    filename: string;
}>, "many">;
export declare const normalizePackageName: (name: string) => string;
export declare const getConnectorDirectory: (instancePath: string) => string;
export declare const isOfficialConnector: (packageName: string) => boolean;
export declare const getConnectorPackagesFrom: (instancePath?: string) => Promise<import("../../utils.js").ConnectorPackage[]>;
export declare const getLocalConnectorPackages: (instancePath: string) => Promise<(readonly [string, string])[]>;
export declare const addConnectorsToPath: (cwd: string, packageNames: string[]) => Promise<void>;
export declare const addConnectors: (instancePath: string, packageNames: string[]) => Promise<void>;
type PackageMeta = {
    name: string;
    scope: string;
    version: string;
};
export declare const fetchOfficialConnectorList: (includingCloudConnectors?: boolean) => Promise<PackageMeta[]>;
export declare const addOfficialConnectors: (instancePath: string, includingCloudConnectors?: boolean) => Promise<void>;
export {};
