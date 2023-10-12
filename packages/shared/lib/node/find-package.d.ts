declare const findPackage: (cwd: string, allowSymlink?: boolean) => Promise<string | undefined>;
export default findPackage;
