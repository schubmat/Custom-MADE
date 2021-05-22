import { Builder, WebDriver } from 'selenium-webdriver';

/**
 * A Wrapper that creates a new `WebDriver`, provides it to the given `body` function and eventually closes the driver finally.
 * - Example
 * > ```typescript
 * > await withNewDriver(async (driver) => {
 * >   await new SignInPage(driver)
 * >     .navigate()
 * >     .then((page) => page.login('user', 'password'))
 * >     .catch((error) => console.warn(error));
 * > });
 * ```
 * 
 * 
 * - **IMPORANT**: If you don't prevent to quit the driver, the body function has to have `await`, otherwise the driver will be closed immediatly:
 * > ```typescript
 * > await withNewDriver(async (driver) => { myAsyncTest(); }); // will not be awaited!
 * > await withNewDriver(async (driver) => await myAsyncTest() }); // fine!
 * > await withNewDriver(async (driver) => myAsyncTest()); // this works fine too, but only with direct lambda
 * >
 * > ```
 * 
 * 
 * - You can also run multiple tests in parallel if you don't `await` the `withNewDriver()` function:
 * > ```typescript
 * > withNewDriver(async (driver) => await firstTest());
 * > withNewDriver(async (driver) => await secondTest());
 * > ```
 *
 * @param body async body (callback) try-catched that receives the driver
 * @param preventDriverQuit prevents the call of `driver.quit()` finally
 */
export async function withNewDriver(
    body: (driver: WebDriver) => Promise<any>,
    preventDriverQuit?: boolean,
) {
    await new Builder()
        .forBrowser('firefox')
        .build()
        .then(async (driver) => {
            await body(driver);
            !preventDriverQuit && driver.quit();
        })
        .catch((error) => console.warn('Error on withNewDriver(): ' + error));
}
