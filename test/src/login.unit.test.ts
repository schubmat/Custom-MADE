import { Builder, WebDriver } from 'selenium-webdriver';
import { SignInPage } from '../pages';
import { VALID_PASSWORD, VALID_USERNAME } from './Config';

let driver: WebDriver;

// increase the test timeout
jest.setTimeout(10000);

describe('Login [Unit-Test]', () => {
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

  // --------------------------------------------------------------------------
  
  test('successful login', async () => {
    const siPage = new SignInPage(driver);
    await siPage.navigate();
    await siPage.validatePage();
    const pPage = await siPage.login(VALID_USERNAME, VALID_PASSWORD, false);
    expect(pPage).toBeDefined();
  });

  test('unsuccessful login (username)', async () => {
    expect.assertions(1);
    try {
      const siPage = new SignInPage(driver);
      await siPage.navigate();
      await siPage.login('wrong', VALID_PASSWORD);
    } catch (error) {
      expect(error).toMatch('Error');
    }
  });

  test('unsuccessful login (password)', async () => {
    expect.assertions(1);
    try {
      const siPage = new SignInPage(driver);
      await siPage.navigate();
      await siPage.login(VALID_USERNAME, 'wrong');
    } catch (error) {
      expect(error).toMatch('Error');
    }
  });
});
