import { SignInPage } from './pages/SignIn';
import { withNewDriver } from './util/Environment';

const VALID_USERNAME = 'user';
const VALID_PASSWORD = 'password';

async function test() {
    // test with correct creds
    await withNewDriver(async (driver) =>
        new SignInPage(driver)
            .navigate()
            .then((page) => page.validatePage(false))
            .then((page) => page.sleep(333))
            .then((page) => page.login(VALID_USERNAME, VALID_PASSWORD, false, 333))
            .then((page) => page.sleep(1000))
            .then((page) => page.validatePage())
            .catch((error) => console.warn("Test valid credentials: " + error)),
    );

    // test with wrong username
    await withNewDriver(async (driver) =>
        new SignInPage(driver)
            .navigate()
            .then((page) => page.login('th1s i5 d3finetly a wr0ng usern4me', VALID_PASSWORD))
            .then((page) => page.validatePage(false))
            .then((page) => page.sleep(2000))
            .catch((error) => console.warn("Test invalid credentials(username): " + error)),
    );

    // test with wrong password
    await withNewDriver(async (driver) =>
        new SignInPage(driver)
            .navigate()
            .then((page) => page.login(VALID_USERNAME, 'the best password that ever existed 1!'))
            .then((page) => page.validatePage(false))
            .then((page) => page.sleep(2000))
            .catch((error) => console.warn("Test invalid credentials(password): " + error)),
    );
}

// actually run the test
test();
