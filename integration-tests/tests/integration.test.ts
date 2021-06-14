import { VersionPage, ProjectsPage, SignInPage } from '../pages';
import { Builder, By, WebDriver } from 'selenium-webdriver';
import Path from 'path';
import {
  VALID_USERNAME,
  VALID_ADMIN_USERNAME,
  VALID_PASSWORD,
  ACCESSABLE_PROJECT,
  CORRECT_FILE_EXTENSION,
  WRONG_FILE_EXTENSION,
  RESSOURCES,
  LOCKED_PROJECT,
  LOCKED_PROJECT_ADMIN,
} from './Config';

export const IT1_File = 'IT1File';
export const IT3_File = 'IT3File';
export const IT4_File = 'IT4File';

let driver: WebDriver;

// increase the test timeout
jest.setTimeout(60000);

describe('Integration tests', () => {
  beforeEach(async () => {
    // use a new driver for every test (independability)
    driver = await new Builder().forBrowser('firefox').build();
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
      await projects.removeUserFromProject(ACCESSABLE_PROJECT, 'admin');
      const version = await projects.openProject(ACCESSABLE_PROJECT);
      try {
        await version.deleteFile(IT1_File);
      } catch (e) {
        /* ignore */
      }
      try {
        await version.deleteFile(
          IT3_File + 'A',
          IT3_File + 'B',
          IT3_File + 'C',
          IT3_File + 'D',
          IT3_File + 'E',
        );
      } catch (e) {
        /* ignore */
      }
      try {
        await version.deleteFile(
          IT4_File + 'A',
          IT4_File + 'B',
          IT4_File + 'C',
          IT4_File + 'D',
          IT4_File + 'E',
        );
      } catch (e) {
        /* ignore */
      }
      driver.quit();
    } catch (error) {
      console.log(error);
    }
  });

  // --------------------------------------------------------------------------

  /**
   * - Dieser Integrations-Test sichert ab, dass ein Nutzer sich anmelden kann
   *   und ein Projekt, für das der Nutzer Rechte besitzt, öffnen kann.
   * - Sobald dieses geöffent ist, lädt der Nutzer für das Projekt erfolgreich
   *   eine neue Datei hoch.
   */
  test('IT-1', async () => {
    // login to accessable project
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    const projects = await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.validatePage();
    await version.isAccessable();

    // upload a new file
    const filePath = Path.resolve(RESSOURCES);
    await version.uploadFile(filePath, IT1_File, CORRECT_FILE_EXTENSION);
    expect(version).toBeDefined();
  });

  /**
   * - Dieser Integrations-Test sichert ab, dass ein Nutzer sich anmelden kann
   *   und ein Projekt, für das der Nutzer KEINE Rechte besitzt, nicht öffnen
   *   kann.
   * - Sobald ein entsprechender Versuch unternommen wird, muss eine  ent-
   *   sprechende Fehlermeldungaufgezeigt werden.
   */
  test('IT-2', async () => {
    // login to locked project
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    const projects = await signIn.login(VALID_ADMIN_USERNAME, VALID_PASSWORD);
    await projects.validatePage();
    const version = await projects.openProject(LOCKED_PROJECT_ADMIN);

    // ensure there is an alert with the  error
    await version.alerts(
      'error',
      'Version does not exist or user does not have permission to browse version',
    );
    expect(version).toBeDefined();
  });

  /**
   * - Dieser Integrations-Test sichert ab, dass ein Nutzer sich anmelden kann
   *   und ein Projekt, für das der Nutzer Rechte besitzt, öffnen kann.
   * - Im Anschluss müssen für das Projekt solange Dateien mit beliebigem Namen
   *   angelegt werden, bis fünf Dateien dem Projekt zugeordnet sind.
   * - Im Anschluss wird eine Ebene nach oben navigiert (auf Projektebene) und
   *   die Validierung angestoßen.
   * - Final ist das Log-File herunter zu laden, falls die Validierung
   *   fehlschlägt.
   * TODO:
   * - Sollte Letzteres eintreten,muss im Anschluss eine Zip-Datei auf dem
   *   Rechner vorhanden sein.
   */
  test('IT-3', async () => {
    // sign in and open accessable project
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    let projects = await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.validatePage();
    await version.isAccessable();

    // create 5 files
    await version.createFile(IT3_File + 'A');
    await version.createFile(IT3_File + 'B');
    await version.createFile(IT3_File + 'C');
    await version.createFile(IT3_File + 'D');
    await version.createFile(IT3_File + 'E');

    // navigate back + validate
    await version.goPageBack(projects.READY_BY);
    projects = new ProjectsPage(driver);
    const result = await projects.validateProject(ACCESSABLE_PROJECT);

    // download the log
    if (!result) {
      await projects.sleep(300);
      await projects.downloadLog();
      await projects.sleep(1500);
    }
    // TODO interact with download dialog
    expect(version).toBeDefined();
  });

  /**
   * - Dieser Integrations-Test sichert ab, dass ein Nutzer sich anmelden kann
   *   und ein Projekt, für das der Nutzer Rechte besitzt, öffnen kann.
   * - Im Anschluss müssen für das Projekt solange Dateien mit beliebigem Namen
   *   angelegt werden, bis fünf Dateien dem Projekt zugeordnet sind.
   * - Im Anschluss wird eine Ebene nach oben navigiert (auf Projektebene) und
   *   der Export inklusive der Roh-Dateien angestoßen.
   * TODO:
   * - Es müssen im Anschluss zwei Zip-Dateien auf dem Rechner vorhanden sein.
   */
  test('IT-4', async () => {
    // sign in and open accessable project
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    let projects = await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.validatePage();
    await version.isAccessable();

    // create 5 files
    await version.createFile(IT4_File + 'A');
    await version.createFile(IT4_File + 'B');
    await version.createFile(IT4_File + 'C');
    await version.createFile(IT4_File + 'D');
    await version.createFile(IT4_File + 'E');

    // navigate back + export
    await version.goPageBack(projects.READY_BY);
    projects = new ProjectsPage(driver);
    await projects.exportProject(ACCESSABLE_PROJECT);
    await projects.sleep(1500);

    // TODO interact with download dialog
    expect(version).toBeDefined();
  });

  /**
   * - Dieser Integrations-Test sichert ab, dass ein Nutzer sich anmelden kann
   *   und ein Projekt, für das der Nutzer Rechte besitzt, öffnen kann.
   * - Im Anschluss muss es möglich sein den Einstellungsdialog zu öffnen und
   *   dem Nutzer "admin" mit den Rechten "Contributor" zum Projekt hinzuzufügen.
   */
  test('IT-5', async () => {
    // sign in and open accessable project
    const signIn = new SignInPage(driver);
    await signIn.navigate();
    let projects = await signIn.login(VALID_USERNAME, VALID_PASSWORD);
    await projects.validatePage();
    const version = await projects.openProject(ACCESSABLE_PROJECT);
    await version.validatePage();
    await version.isAccessable();

    // go back to project
    await version.goPageBack(projects.READY_BY);
    projects = new ProjectsPage(driver);

    // open settings and add user
    await projects.sleep(300);
    await projects.addUserToProject(ACCESSABLE_PROJECT, 'admin', 'Contributor');

    await projects.findUserTableRow();
    expect(projects).toBeDefined();
  });
});
