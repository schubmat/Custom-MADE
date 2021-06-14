import { VersionPage, ProjectsPage, SignInPage } from '../pages';
import { Builder, WebDriver } from 'selenium-webdriver';
import Path from 'path';
import {
  VALID_USERNAME,
  VALID_PASSWORD,
  ACCESSABLE_PROJECT,
  CORRECT_FILE_EXTENSION,
  RESSOURCES,
} from './Config';
export const CREATE_FILE = 'VcreateTestFile';
export const UPLOAD_FILE = 'VuploadTestFile';

let driver: WebDriver;

// increase the test timeout
jest.setTimeout(60000);

beforeAll(async () => {
  // create the 2 files to validate
  try {
    driver = await new Builder().forBrowser('firefox').build();
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    const projects = new ProjectsPage(driver);
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.createFile(CREATE_FILE);
    const filePath = Path.resolve(RESSOURCES);
    await version.uploadFile(filePath, UPLOAD_FILE, CORRECT_FILE_EXTENSION);
    driver.quit();
  } catch (error) {
    console.log(error);
  }
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
    await version.deleteFile(CREATE_FILE, UPLOAD_FILE);
    driver.quit();
  } catch (error) {
    console.log(error);
  }
});

describe('Validation [Unit-Test]', () => {
  // use a new driver for every test (independability)
  beforeEach(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    const projects = await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.isAccessable();
  });

  // drivers have to be closed afterwards
  afterEach(() => {
    driver.quit();
  });

  // --------------------------------------------------------------------------

  test('successful validation of a file', async () => {
    const version = new VersionPage(driver);
    const result = await version.validateFile(UPLOAD_FILE);
    expect(result).toBe(true);
  });

  test('unsuccessful validation of a file (syntax)', async () => {
    const version = new VersionPage(driver);
    const result = await version.validateFile(CREATE_FILE);
    expect(result).toBe(false);
  });
});
