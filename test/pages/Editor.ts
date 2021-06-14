import { By, WebDriver } from 'selenium-webdriver';
import { Page } from './Page';

export class EditorPage extends Page {
  private PAGE = 'editor/';

  // editor
  private editorBy = By.id('editor-iframe');
  READY_BY = this.editorBy;
  private viewLinesBy = By.className('view-lines');
  private viewOverlaysBy = By.className('view-overlays');
  private messageModalBy = By.className('ant-notification ant-notification-topRight');

  /**
   * Constructs the page `"localhost:3000/home"` which corresponds to the page "Project Overview"
   * @param driver the current `WebDriver` from the `'selenium-webdriver'` package
   */
  constructor(driver: WebDriver) {
    super(driver);
  }

  navigate(): Promise<void> {
    return super.navigate(this.PAGE);
  }

  validatePage(): Promise<void> {
    return super.validatePage(this.PAGE, true);
  }

  validateJustPage(): Promise<void> {
    return super.validatePage(this.PAGE, true, true);
  }

  /**
   * @throws an error if the opened project (`VersionPage`) shows any alert
   */
  isAccessable(): Promise<void> {
    return this.alerts('nothing', '');
  }
}
