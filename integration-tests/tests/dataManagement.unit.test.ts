import { VersionPage, ProjectsPage, SignInPage } from '../pages';
import { Builder, WebDriver } from 'selenium-webdriver';
import Path from 'path';
import {
  VALID_USERNAME,
  VALID_PASSWORD,
  ACCESSABLE_PROJECT,
  CORRECT_FILE_EXTENSION,
  WRONG_FILE_EXTENSION,
  RESSOURCES,
} from './Config';
export const CREATE_FILE = 'DMcreateTestFile';
export const DUPLICATE_FILE = 'DMduplicateTestFile';
export const DELETE_FILE = 'DMdeleteTestFile';
export const UPLOAD_FILE = 'DMuploadTestFile';
export const UPLOAD_FILE_2 = 'DMuploadTestFile2';

let driver: WebDriver;

// increase the test timeout
jest.setTimeout(10000);

describe('Data-Management [Unit-Test]', () => {
  beforeEach(async () => {
    // use a new driver for every test (independability)
    driver = await new Builder().forBrowser('firefox').build();
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    const projects = await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.isAccessable();
  });

  afterEach(() => {
    // drivers have to be closed afterwards
    driver.quit();
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

  // --------------------------------------------------------------------------

  test('successful creation of a file', async () => {
    const version = new VersionPage(driver);
    await version.createFile(CREATE_FILE);
    expect(version).toBeDefined();
  });

  test('unsuccessful creation of a file (duplicate name)', async () => {
    expect.assertions(1);
    try {
      const version = new VersionPage(driver);
      await version.createFile(DUPLICATE_FILE);
      await version.createFile(DUPLICATE_FILE);
    } catch (error) {
      expect(error).toMatch('Error');
    }
  });
  
  test('successful deletion of a file', async () => {
    const version = new VersionPage(driver);
    await version.createFile(DELETE_FILE);
    await version.deleteFile(DELETE_FILE);
    expect(version).toBeDefined();
  });

  test('successful upload of a file', async () => {
    const filePath = Path.resolve(RESSOURCES);
    const version = new VersionPage(driver);
    await version.uploadFile(filePath, UPLOAD_FILE, CORRECT_FILE_EXTENSION);
    expect(version).toBeDefined();
  });

  test('unsuccessful upload of a file (wrong ending)', async () => {
    expect.assertions(1);
    try {
      const filePath = Path.resolve(RESSOURCES);
      const version = new VersionPage(driver);
      await version.uploadFile(filePath, UPLOAD_FILE_2, WRONG_FILE_EXTENSION);
      await version.sleep(5000)
    } catch (error) {
      expect(error).toMatch('Error');
    }
  });
});
