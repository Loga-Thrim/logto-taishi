export declare const packageJson: {
    name: string;
    version: string;
    description: string;
    author: string;
    homepage: string;
    license: string;
    type: string;
    publishConfig: {
        access: string;
    };
    main: string;
    bin: {
        logto: string;
    };
    files: string[];
    repository: {
        type: string;
        url: string;
    };
    scripts: {
        precommit: string;
        "prepare:package-json": string;
        build: string;
        "build:test": string;
        dev: string;
        start: string;
        "start:dev": string;
        lint: string;
        "lint:report": string;
        "test:only": string;
        test: string;
        "test:ci": string;
        prepack: string;
    };
    engines: {
        node: string;
    };
    bugs: {
        url: string;
    };
    dependencies: {
        "@logto/connector-kit": string;
        "@logto/core-kit": string;
        "@logto/language-kit": string;
        "@logto/phrases": string;
        "@logto/phrases-experience": string;
        "@logto/schemas": string;
        "@logto/shared": string;
        "@silverhand/essentials": string;
        chalk: string;
        decamelize: string;
        dotenv: string;
        got: string;
        hpagent: string;
        inquirer: string;
        nanoid: string;
        ora: string;
        "p-limit": string;
        "p-queue": string;
        "p-retry": string;
        "pg-protocol": string;
        roarr: string;
        semver: string;
        slonik: string;
        "slonik-interceptor-preset": string;
        "slonik-sql-tag-raw": string;
        tar: string;
        typescript: string;
        yargs: string;
        zod: string;
    };
    devDependencies: {
        "@silverhand/eslint-config": string;
        "@silverhand/ts-config": string;
        "@types/inquirer": string;
        "@types/jest": string;
        "@types/node": string;
        "@types/semver": string;
        "@types/sinon": string;
        "@types/tar": string;
        "@types/yargs": string;
        eslint: string;
        jest: string;
        "lint-staged": string;
        prettier: string;
        sinon: string;
    };
    eslintConfig: {
        extends: string;
        rules: {
            "no-console": string;
        };
        ignorePatterns: string[];
    };
    prettier: string;
};
