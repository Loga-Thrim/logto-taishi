import chalk from 'chalk';
class ConsoleLog {
    constructor() {
        this.plain = console.log;
        this.info = (...args) => {
            console.log(ConsoleLog.prefixes.info, ...args);
        };
        this.succeed = (...args) => {
            this.info(chalk.green('✔'), ...args);
        };
        this.warn = (...args) => {
            console.warn(ConsoleLog.prefixes.warn, ...args);
        };
        this.error = (...args) => {
            console.error(ConsoleLog.prefixes.error, ...args);
        };
        this.fatal = (...args) => {
            console.error(ConsoleLog.prefixes.fatal, ...args);
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(1);
        };
    }
    static { this.prefixes = Object.freeze({
        info: chalk.bold(chalk.blue('info')),
        warn: chalk.bold(chalk.yellow('warn')),
        error: chalk.bold(chalk.red('error')),
        fatal: chalk.bold(chalk.red('fatal')),
    }); }
}
export default ConsoleLog;
