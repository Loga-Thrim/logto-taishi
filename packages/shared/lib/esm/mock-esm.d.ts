export type WithEsmMock = {
    /**
     * Mocks a module with the provided module factory when it is being imported.
     */
    unstable_mockModule<T = unknown>(moduleName: string, moduleFactory: () => T | Promise<T>, options?: {
        virtual?: boolean;
    }): unknown;
};
export type MockParameters<T> = Parameters<(moduleName: string, factory: () => T) => void>;
export declare const pickDefault: <T extends Record<"default", unknown>>(promise: Promise<T>) => Promise<T["default"]>;
export declare const createMockUtils: (jestInstance: WithEsmMock) => {
    mockEsm: <T>(moduleName: string, factory: () => T) => T;
    mockEsmDefault: <T_1>(moduleName: string, factory: () => T_1) => T_1;
    mockEsmWithActual: <T_2>(moduleName: string, factory: () => T_2) => Promise<T_2>;
};
