import {
    highlightColor,
    successBackgroundColor,
    successColor,
    warnBackgroundColor,
    warnColor,
} from './LogFormatter';

class LoggerClass {
    private highlighted: boolean = false;
    private test: string | undefined;
    private subTest: string | undefined;
    private currentTestId: number = 0;
    private currentSubTestId: number = 0;
    private failedTests: number = 0;

    startTest(test: string) {
        this.evalTest();
        this.currentTestId++;
        this.currentSubTestId = 0;
        this.failedTests = 0;
        this.test = test;
        this.logTest(test);
    }
    startSubTest(subTest: string) {
        this.currentSubTestId++;
        this.subTest = subTest;
    }

    stopTest() {
        this.evalTest();
        delete this.test;
        delete this.subTest;
    }

    evalTest() {
        if (this.currentSubTestId > 0) {
            if (this.failedTests === 0) {
                console.log(successColor('\n=> All test successful!'));
            } else {
                console.log(
                    warnColor(
                        '\n=> ' +
                            this.failedTests +
                            ' of ' +
                            this.currentSubTestId +
                            ' Tests failed',
                    ),
                );
            }
        }
    }

    logTest(test: string) {
        console.log(
            '################################################################################\n' +
                '[' +
                this.currentTestId +
                '] ' +
                test +
                '\n################################################################################\n',
        );
    }

    /** ## Simple Log
     * similar to `console.log()`, but:
     * - it is disabled when the logger is not initialized
     * - the message can be highlighted. (`Logger.highlight().log(message)`)
     *
     * ---
     * @param message to log
     * @param item to add with `JSON.stringify(item, null, " ");`
     */
    log(message: string = '', item?: object) {
        message += item ? JSON.stringify(item, null, ' ') : '';
        const highlightedMessage = this.highlighted ? highlightColor(message) : message;
        console.log(highlightedMessage);
        this.dehighlight();
    }

    /** ## Error Log
     * logs an `Error`
     * - in development mode the error will be logged to the `console` (or optional `Logger.callbacks.devOut()`) but styled.
     * - in production mode the error will be forwarded to the Loggers given `Logger.callbacks.prodError()`.
     *
     * ---
     * @param title title of the error message
     * @param message a separate message to log
     * @param error the occuring Error
     */
    fail(message?: string) {
        console.log(
            warnBackgroundColor(this.preMessage() + ' failed') +
                (message !== undefined ? warnColor(':  ' + message) : ''),
        );
        this.failedTests++;

        this.dehighlight();
    }

    /** ## Error Log
     * logs an `Error`
     * - in development mode the error will be logged to the `console` (or optional `Logger.callbacks.devOut()`) but styled.
     * - in production mode the error will be forwarded to the Loggers given `Logger.callbacks.prodError()`.
     *
     * ---
     * @param title title of the error message
     * @param message a separate message to log
     * @param error the occuring Error
     */
    succ(message?: string) {
        console.log(
            successBackgroundColor(this.preMessage() + ' successful') +
                (message !== undefined ? successColor(':  ' + message) : ''),
        );
        this.dehighlight();
    }

    /** ## Highlight messages
     * to highlight any message just insert this function like that:
     * `Logger.highlight().log()`
     * - this also works for `Logger.highlight().sLog()`, `Logger.highlight().bLog()` and `Logger.highlight().eLog()`
     * - by default the foregroundColor and backgroudColor of the log will be inverted.
     * - a different highlight color can be set at `config.highlightColor` in the `Logger.init()`
     */
    highlight() {
        this.highlighted = true;

        return this;
    }

    private dehighlight() {
        this.highlighted = false;
    }

    private preMessage() {
        const id =
            this.test !== undefined
                ? '[' +
                  (this.subTest !== undefined
                      ? this.currentTestId + '.' + this.currentSubTestId
                      : this.currentTestId) +
                  '] '
                : '';
        const title =
            this.test !== undefined
                ? this.subTest !== undefined
                    ? this.subTest
                    : this.test
                : 'Test';
        return id + title;
    }
}

export const Logger = new LoggerClass();
