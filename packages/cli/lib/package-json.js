export const packageJson = {
    "name": "@logto/cli",
    "version": "1.10.0",
    "description": "Logto CLI.",
    "author": "Silverhand Inc. <contact@silverhand.io>",
    "homepage": "https://github.com/logto-io/logto#readme",
    "license": "MPL-2.0",
    "type": "module",
    "publishConfig": {
        "access": "public"
    },
    "main": "lib/index.js",
    "bin": {
        "logto": "bin/logto.js"
    },
    "files": [
        "bin",
        "lib"
    ],
    "repository": {
        "type": "git",
        "url": "git+https://github.com/logto-io/logto.git"
    },
    "scripts": {
        "precommit": "lint-staged",
        "prepare:package-json": "node -p \"'export const packageJson = ' + JSON.stringify(require('./package.json'), undefined, 2) + ';'\" > src/package-json.ts",
        "build": "rimraf lib && pnpm prepare:package-json && tsc -p tsconfig.build.json",
        "build:test": "rm -rf lib/ && pnpm prepare:package-json && tsc -p tsconfig.test.json --sourcemap",
        "dev": "tsc -p tsconfig.build.json --watch --preserveWatchOutput --incremental",
        "start": "node .",
        "start:dev": "pnpm build && node .",
        "lint": "eslint --ext .ts src",
        "lint:report": "pnpm lint --format json --output-file report.json",
        "test:only": "NODE_OPTIONS=--experimental-vm-modules jest",
        "test": "pnpm build:test && pnpm test:only",
        "test:ci": "pnpm test:only",
        "prepack": "pnpm build"
    },
    "engines": {
        "node": "^18.12.0"
    },
    "bugs": {
        "url": "https://github.com/logto-io/logto/issues"
    },
    "dependencies": {
        "@logto/connector-kit": "workspace:^1.1.1",
        "@logto/core-kit": "workspace:^2.2.0",
        "@logto/language-kit": "workspace:^1.0.0",
        "@logto/phrases": "workspace:^1.5.0",
        "@logto/phrases-experience": "workspace:^1.3.1",
        "@logto/schemas": "workspace:1.10.0",
        "@logto/shared": "workspace:^3.0.0",
        "@silverhand/essentials": "^2.8.4",
        "chalk": "^5.0.0",
        "decamelize": "^6.0.0",
        "dotenv": "^16.0.0",
        "got": "^13.0.0",
        "hpagent": "^1.2.0",
        "inquirer": "^9.0.0",
        "nanoid": "^4.0.0",
        "ora": "^6.1.2",
        "p-limit": "^4.0.0",
        "p-queue": "^7.3.4",
        "p-retry": "^6.0.0",
        "pg-protocol": "^1.6.0",
        "roarr": "^7.11.0",
        "semver": "^7.3.8",
        "slonik": "^30.0.0",
        "slonik-interceptor-preset": "^1.2.10",
        "slonik-sql-tag-raw": "^1.1.4",
        "tar": "^6.1.11",
        "typescript": "^5.0.0",
        "yargs": "^17.6.0",
        "zod": "^3.20.2"
    },
    "devDependencies": {
        "@silverhand/eslint-config": "4.0.1",
        "@silverhand/ts-config": "4.0.0",
        "@types/inquirer": "^9.0.0",
        "@types/jest": "^29.4.0",
        "@types/node": "^18.11.18",
        "@types/semver": "^7.3.12",
        "@types/sinon": "^10.0.13",
        "@types/tar": "^6.1.2",
        "@types/yargs": "^17.0.13",
        "eslint": "^8.44.0",
        "jest": "^29.5.0",
        "lint-staged": "^14.0.0",
        "prettier": "^3.0.0",
        "sinon": "^16.0.0"
    },
    "eslintConfig": {
        "extends": "@silverhand",
        "rules": {
            "no-console": "error"
        },
        "ignorePatterns": [
            "src/package-json.ts"
        ]
    },
    "prettier": "@silverhand/eslint-config/.prettierrc"
};
