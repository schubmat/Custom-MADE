import { SignInPage } from './pages/SignIn';
import { Builder, WebDriver } from 'selenium-webdriver';

const VALID_USERNAME = 'user';
const VALID_PASSWORD = 'password';
let driver: WebDriver;

// use a new driver for every test (independability)
beforeEach(() => {
    async function setup() {
        driver = await new Builder().forBrowser('firefox').build();
    }
    return setup();
});

// drivers have to be closed afterwards
afterEach(() => {
    driver.quit();
});

describe('Login [Unit-Test]', () => {
    test('successful login', async () => {
        return new SignInPage(driver)
            .navigate()
            .then((page) => page.validatePage())
            .then((page) => page.login(VALID_USERNAME, VALID_PASSWORD, false))
            .then((page) => page.validatePage(false))
            .then((page) => page.isSuccessfullyLoggedIn())
            .then((result) => expect(result).toBe(true));
    });

    test('unsuccessful login (username)', () => {
        return new SignInPage(driver)
            .navigate()
            .then((page) => page.login('th1s i5 d3finetly a wr0ng usern4me', VALID_PASSWORD))
            .then((page) => page.validatePage())
            .then((page) => page.validatePage())
            .then((page) => page.isSuccessfullyLoggedIn())
            .then((result) => expect(result).toBe(false));
    });

    test('unsuccessful login (password)', () => {
        return new SignInPage(driver)
            .navigate()
            .then((page) => page.validatePage())
            .then((page) => page.login(VALID_USERNAME, 'wrong'))
            .then((page) => page.validatePage())
            .then((page) => page.isSuccessfullyLoggedIn())
            .then((result) => expect(result).toBe(false));
    });
});


describe('Data-Management [Unit-Test]', () => {
    test('successful creation of a file ', async () => {
        await new SignInPage(driver)
            .navigate()
            .then((page) => page.login(VALID_USERNAME, VALID_PASSWORD, false))

        // return new HomePage.navigate()....
    });
});