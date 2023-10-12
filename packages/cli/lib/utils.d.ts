import { ConsoleLog } from '@logto/shared';
import type { Optional } from '@silverhand/essentials';
import type { Options } from 'ora';
export declare const safeExecSync: (command: string) => string | undefined;
export declare const consoleLog: ConsoleLog;
export declare const getProxy: () => string | undefined;
export declare const downloadFile: (url: string, destination: string) => Promise<unknown>;
export declare const getPathInModule: (moduleName: string, relativePath?: string) => string;
export declare const oraPromise: <T>(promise: PromiseLike<T>, options?: Options, exitOnError?: boolean) => Promise<T>;
export declare const isTty: () => boolean;
export declare enum ConfigKey {
    DatabaseUrl = "DB_URL"
}
export declare const cliConfig: Map<ConfigKey, Optional<string>>;
export type GetCliConfigWithPrompt = {
    key: ConfigKey;
    readableKey: string;
    comments?: string;
    defaultValue?: string;
};
export declare const getCliConfigWithPrompt: ({ key, readableKey, comments, defaultValue, }: GetCliConfigWithPrompt) => Promise<Optional<string>>;
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @param array The source array to search in
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 */
export declare function findLastIndex<T>(array: readonly T[], predicate: (value: T, index: number, object: readonly T[]) => boolean): number;
export declare const inquireInstancePath: (initialPath?: string) => Promise<string>;
export type ConnectorPackage = {
    name: string;
    path: string;
};
export declare const getConnectorPackagesFromDirectory: (directory: string) => Promise<ConnectorPackage[]>;
export declare const lintLocaleFiles: (instancePath: string, packageName?: 'phrases' | 'phrases-experience') => Promise<void>;
