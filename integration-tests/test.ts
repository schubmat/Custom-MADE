import { SignInPage } from './pages/SignIn';
import { withNewDriver } from './util/Environment';

const VALID_USERNAME = "user";
const VALID_PASSWORD = "password";

async function test() {
    // test with correct creds
    await withNewDriver(async (driver) => {
        const signInPage = new SignInPage(driver);
        await signInPage.navigate();
        await driver.sleep(333);
        await signInPage.login(VALID_USERNAME, VALID_PASSWORD,false,333);
        await driver.sleep(1000);
    });

    // test with wrong username
    await withNewDriver(async (driver) => {
        const signInPage = new SignInPage(driver);
        await signInPage.navigate();
        await signInPage.login('th1s i5 d3finetly a wr0ng usern4me', VALID_PASSWORD);
        await driver.sleep(2000);
    });

    // test with wrong password
    await withNewDriver(async (driver) => {
        const signInPage = new SignInPage(driver);
        await signInPage.navigate();
        await signInPage.login(VALID_USERNAME, 'the best password that ever existed 1!');
        await driver.sleep(2000);
    });
};

// actually run the test
test();