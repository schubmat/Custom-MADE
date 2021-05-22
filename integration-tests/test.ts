import { withNewDriver } from './util/Environment';
import { SignInPage } from './pages/SignIn';
import { Logger } from './util';

const VALID_USERNAME = 'user';
const VALID_PASSWORD = 'password';

async function test() {
    // test with correct creds
    Logger.startTest("Validate User Login")
    Logger.startSubTest('Test valid credentials');
    await withNewDriver(async (driver) =>
        new SignInPage(driver)
            .navigate()
            .then((page) => page.validatePage(false))
            // .then((page) => page.sleep(333))
            // .then((page) => page.login(VALID_USERNAME, VALID_PASSWORD, false, 333))
            .then((page) => page.login(VALID_USERNAME, VALID_PASSWORD, false))
            // .then((page) => page.sleep(1000))
            .then((page) => page.validatePage())
            .then(() => Logger.succ())
            .catch((error) => Logger.fail(error))
    );

    // test with wrong username
    Logger.startSubTest('Test invalid credentials(username)');
    await withNewDriver(async (driver) =>
        new SignInPage(driver)
            .navigate()
            .then((page) => page.login('th1s i5 d3finetly a wr0ng usern4me', VALID_PASSWORD))
            .then((page) => page.validatePage(false))
            // .then((page) => page.sleep(2000))
            .then(() => Logger.succ())
            .catch((error) => Logger.fail(error)),
    );

    // test with wrong password
    Logger.startSubTest('Test invalid credentials(password)');
    await withNewDriver(async (driver) =>
        new SignInPage(driver)
            .navigate()
            .then((page) => page.login(VALID_USERNAME, 'the best password that ever existed 1!'))
            .then((page) => page.validatePage(false))
            // .then((page) => page.sleep(2000))
            .then(() => Logger.succ())
            .catch((error) => Logger.fail(error)),
    );
    Logger.stopTest();
}

// actually run the test
test();
