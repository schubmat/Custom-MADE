import { ProjectsPage, SignInPage } from '../pages';
import { Builder, WebDriver } from 'selenium-webdriver';
import { ACCESSABLE_PROJECT, VALID_PASSWORD, VALID_USERNAME } from './Config';

export const STRESS_File = 'StressTestFile';
const FILES_TO_CREATE = 3;
const PARALLEL_USERS = 10;
// increase the test timeout
jest.setTimeout(60000);

describe('Stress tests', () => {
  beforeAll(async () => {
    let driver = await new Builder().forBrowser('firefox').build();
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    const projects = new ProjectsPage(driver);
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    for (let i = 0; i < FILES_TO_CREATE; i++) {
      await version.createFile(STRESS_File + i);
    }
    driver.quit();
  });

  afterAll(async () => {
    const driver = await new Builder().forBrowser('firefox').build();
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    const projects = new ProjectsPage(driver);
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    const files: string[] = [];
    for (let i = 1; i < FILES_TO_CREATE; i++) {
      files.push(STRESS_File + i);
    }
    await version.deleteFile(STRESS_File + '0', ...files);
    driver.quit();
  });

    async function run(file: number = 0) {
      const driver = await new Builder().forBrowser('firefox').build();
      const signIn = new SignInPage(driver);
      await signIn.navigate();
      await signIn.login(VALID_USERNAME, VALID_PASSWORD);
      const projects = new ProjectsPage(driver);
      const version = await projects.openProject(ACCESSABLE_PROJECT);
      await version.openFile(STRESS_File + file);
      await version.sleep(3000);
      driver.quit();
      return Promise.resolve();
    }

  test('test 10 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 10; i++) {
      runs.push(run(i % FILES_TO_CREATE));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });

  test('test 30 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 30; i++) {
      runs.push(run(i % FILES_TO_CREATE));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });

  test('test 50 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 50; i++) {
      runs.push(run(i % FILES_TO_CREATE));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });

  test('test 100 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 100; i++) {
      runs.push(run(i % FILES_TO_CREATE));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });

  test('test 250 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 250; i++) {
      runs.push(run(i % FILES_TO_CREATE));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });
});
