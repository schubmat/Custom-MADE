import { ProjectsPage, SignInPage } from '../pages';
import { Builder, WebDriver } from 'selenium-webdriver';
import { ACCESSABLE_PROJECT, VALID_PASSWORD, VALID_USERNAME } from './Config';

export const STRESS_File = 'StressTestFile';
const FILES_TO_CREATE = 2; // TODO 10
// increase the test timeout
jest.setTimeout(180000);

describe('Stress tests', () => {
  let window = { x: 0, y: 0, width: 920, height: 380 };
  beforeAll(async () => {
    // create files
    let driver = await new Builder().forBrowser('firefox').build();
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    const projects = new ProjectsPage(driver);
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    for (let i = 0; i < FILES_TO_CREATE; i++) {
      await version.createFile(STRESS_File + i);
    }
    // find window dimensions
    await driver.manage().window().maximize();
    window = await driver.manage().window().getRect();
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

  async function run(file: number, of: number) {
    const driver = await new Builder().forBrowser('firefox').build();
    await driver.manage().window().setRect(findWindow(file, of));
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    const projects = new ProjectsPage(driver);
    await projects.validateProject(ACCESSABLE_PROJECT);
    // await projects.sleep(3000);
    driver.quit();
    return Promise.resolve();
  }

  function findWindow(file: number, of: number) {
    const cols = Math.floor(Math.sqrt(of));
    const rows = Math.ceil(of / cols);
    const width = Math.max(920, window.width / cols);
    const height = Math.max(380, window.height / rows);
    const x = (file % cols) * width;
    const y = Math.floor(file / cols) * height;
    return { width, height, x, y };
  }

  test('test 1 sequentially', async () => {
    let runs = [];
    for (let i = 0; i < 1; i++) {
      runs.push(run(i, 1));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });

  test('test 5 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 5; i++) {
      runs.push(run(i, 5));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });

  test.skip('test 10 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 10; i++) {
      runs.push(run(i, 10));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });

  test.skip('test 20 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 20; i++) {
      runs.push(run(i, 20));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });

  test.skip('test 50 parallels', async () => {
    let runs = [];
    for (let i = 0; i < 50; i++) {
      runs.push(run(i, 50));
    }
    await Promise.all(runs);

    expect(true).toBeTruthy();
  });
});
