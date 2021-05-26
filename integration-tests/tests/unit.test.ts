import { ProjectsPage, SignInPage } from '../pages';
import { Builder, WebDriver } from 'selenium-webdriver';
import Path from 'path';

const VALID_USERNAME = 'user';
const VALID_PASSWORD = 'password';

const ACCESSABLE_PROJECT = 'Project B';
const LOCKED_PROJECT = 'Project A';

const CREATE_FILE = 'integrationtestCreated';
const DUPLICATE_FILE = 'integrationtestDuplicated';
const DELETE_FILE = 'integrationtestDeleted';

let driver: WebDriver;

// use a new driver for every test (independability)
beforeEach(async () => {
  driver = await new Builder().forBrowser('firefox').build();
});

// drivers have to be closed afterwards
afterEach(() => {
  driver.quit();
});

describe('Login [Unit-Test]', () => {
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

describe('Data-Management [Unit-Test]', () => {
  beforeEach(async () => {
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    await signIn.login(VALID_USERNAME, VALID_PASSWORD);
  });

  afterAll(async () => {
    // clean up the created files
    driver = await new Builder().forBrowser('firefox').build();
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    const projects = new ProjectsPage(driver);
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.deleteFile(CREATE_FILE, DUPLICATE_FILE);
    driver.quit();
  });

  test('successful creation of a file', async () => {
    const projects = new ProjectsPage(driver);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.isAccessable();
    await version.createFile(CREATE_FILE);
    expect(version).toBeDefined();
  });

  test('unsuccessful creation of a file (duplicate name)', async () => {
    try {
      const projects = new ProjectsPage(driver);
      await projects.validatePage();
      const version = await projects.openProject(ACCESSABLE_PROJECT);
      await version.isAccessable();
      await version.createFile(DUPLICATE_FILE);
      await version.createFile(DUPLICATE_FILE); // TODO this does not happen
    } catch (error) {
      expect(error).toMatch('Error'); // TODO fix after fix
    }
  });

  test('successful deletion of a file', async () => {
    const projects = new ProjectsPage(driver);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.isAccessable();
    await version.createFile(DELETE_FILE);
    await version.deleteFile(DELETE_FILE);
    expect(version).toBeDefined();
  });
});
