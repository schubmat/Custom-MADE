import { By, Key, until, WebDriver, WebElement } from 'selenium-webdriver';
import { Page } from './Page';

export class VersionPage extends Page {
  private PAGE = 'versions/';

  private tableBodyBy = By.className('ant-table-tbody');
  private tableRowsBy = By.className('ant-table-row');

  private addButtonBy = By.className('anticon anticon-plus-circle');
  private saveButtonBy = By.className('anticon anticon-save');
  private deleteButtonBy = By.className('anticon anticon-delete');
  private uploadButtonBy = By.className('anticon anticon-upload');

  private createPopoverBy = By.className('ant-popover ant-popover-placement-top');
  private createNameBy = By.id('name');
  private createButtonBy = By.className('ant-btn ant-btn-primary');

  private messageBy = By.className('ant-message');

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

  isAccessable(): Promise<void> {
    return this.alerts('none', '');
  }

  createFile(name: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const btn = await this.driver.findElement(this.addButtonBy);
        await btn.click();
        await this.waitForElement(this.createPopoverBy);
        const popOver = await this.driver.findElement(this.createPopoverBy);
        await popOver.findElement(this.createNameBy).sendKeys(name);
        const createButton = await popOver.findElement(this.createButtonBy);
        await createButton.click();
        await this.alerts('success');
        resolve();
      } catch (error) {
        reject(`Error on Version.createFile('${name}'): ${error}`);
      }
    });
  }

  private async getFileList(): Promise<WebElement[]> {
    const tb = await this.driver.findElement(this.tableBodyBy);
    return await tb.findElements(this.tableRowsBy);
  }
}
