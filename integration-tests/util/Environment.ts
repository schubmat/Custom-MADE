import { Builder, WebDriver } from 'selenium-webdriver';

/**
 * A Wrapper that creates a new `WebDriver`, provides it to the given `body` function and eventually closes the driver finally.
 * - Example
 * ```typescript
    await withNewDriver(async (driver) => {
        const signInPage = new SignInPage(driver);
        await signInPage.navigate();
        await signInPage.login('user', 'password');
    }, true);
 * ```
 * @param body async body (callback) try-catched that receives the driver
 * @param preventDriverQuit prevents the call of `driver.quit()` finally
 */
export async function withNewDriver(
    body: (driver: WebDriver) => Promise<void>,
    preventDriverQuit?: boolean,
) {
    const driver = await new Builder().forBrowser('firefox').build();
    try {
        await body(driver);
        !preventDriverQuit && driver.quit();
    } catch (error) {
        console.warn(error);
    }
}
