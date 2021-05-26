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
const UPLOAD_FILE = 'uploadTestFile';

let driver: WebDriver;

// increase the test timeout
jest.setTimeout(60000);

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
    try {
      driver = await new Builder().forBrowser('firefox').build();
      const signIn = new SignInPage(driver);
      await signIn.navigate();
      await signIn.login(VALID_USERNAME, VALID_PASSWORD);
      const projects = new ProjectsPage(driver);
      const version = await projects.openProject(ACCESSABLE_PROJECT);
      await version.deleteFile(CREATE_FILE, DUPLICATE_FILE, UPLOAD_FILE);
      driver.quit();
    } catch (error) {
      console.log(error);
    }
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
    expect.assertions(1);
    try {
      const projects = new ProjectsPage(driver);
      await projects.validatePage();
      const version = await projects.openProject(ACCESSABLE_PROJECT);
      await version.isAccessable();
      await version.createFile(DUPLICATE_FILE);
      await version.createFile(DUPLICATE_FILE);
    } catch (error) {
      expect(error).toMatch('Error');
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

  test('successful upload of a file', async () => {
    const filePath = Path.resolve('./tests/');
    const projects = new ProjectsPage(driver);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.isAccessable();
    await version.uploadFile(filePath, UPLOAD_FILE, '.mydsl');
    expect(version).toBeDefined();
  });

  test('unsuccessful upload of a file (wrong ending)', async () => {
    expect.assertions(1);
    try {
      const filePath = Path.resolve('./tests/');
      const projects = new ProjectsPage(driver);
      await projects.validatePage();
      const version = await projects.openProject(ACCESSABLE_PROJECT);
      await version.isAccessable();
      await version.uploadFile(filePath, UPLOAD_FILE, '.wrong');
    } catch (error) {
      expect(error).toMatch('Error');
    }
  });
});
