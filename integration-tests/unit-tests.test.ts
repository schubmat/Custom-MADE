import { ProjectsPage, SignInPage } from './pages';
import { Builder, WebDriver } from 'selenium-webdriver';

const VALID_USERNAME = 'user';
const VALID_PASSWORD = 'password';

const ACCESSABLE_PROJECT = 'Project B';
const LOCKED_PROJECT = 'Project A';

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

// describe('Login [Unit-Test]', () => {
//   test('successful login', async () => {
//     const siPage = new SignInPage(driver);
//     await siPage.navigate();
//     await siPage.validatePage();
//     const pPage = await siPage.login(VALID_USERNAME, VALID_PASSWORD, false);
//     expect(pPage).toBeDefined();
//   });

//   test('unsuccessful login (username)', async () => {
//     expect.assertions(1);
//     try {
//       const siPage = new SignInPage(driver);
//       await siPage.navigate();
//       await siPage.login('wrong', VALID_PASSWORD);
//     } catch (error) {
//       expect(error).toMatch('Error');
//     }
//   });

//   test('unsuccessful login (password)', async () => {
//     expect.assertions(1);
//     try {
//       const siPage = new SignInPage(driver);
//       await siPage.navigate();
//       await siPage.login(VALID_USERNAME, 'wrong');
//     } catch (error) {
//       expect(error).toMatch('Error');
//     }
//   });
// });

describe('Data-Management [Unit-Test]', () => {
  beforeEach(async () => {
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    await signIn.login(VALID_USERNAME, VALID_PASSWORD);
  });
  test('successful creation of a file', async () => {
    const projects = new ProjectsPage(driver);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.isAccessable();
    await version.createFile('test');
    expect(version).toBeDefined();
  });
  test('unsuccessful creation of a file (duplicate name)', async () => {
    try {
    const projects = new ProjectsPage(driver);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.isAccessable();
    await version.createFile('test');
      
    } catch (error) {
      expect(error).toMatch("Error");      
    }
  });
});
