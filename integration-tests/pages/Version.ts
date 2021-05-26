import { By, Key, until, WebDriver, WebElement } from 'selenium-webdriver';
import { Page } from './Page';

export class VersionPage extends Page {
  private PAGE = 'versions/';

  private tableBodyBy = By.className('ant-table-tbody');
  private tableRowsBy = By.className('ant-table-row');
  private rowColumnsBy = By.css('td');

  private saveButtonBy = By.className('anticon anticon-save');
  private uploadButtonBy = By.className('anticon anticon-upload');

  private addButtonBy = By.className('anticon anticon-plus-circle');
  private createPopoverBy = By.className('ant-popover ant-popover-placement-top');
  private createNameBy = By.id('name');
  private createButtonBy = By.className('ant-btn ant-btn-primary');

  private deleteButtonBy = By.className('anticon anticon-delete');
  private deleteModalBy = By.className('ant-modal-content');
  private confirmDeleteButtonBy = By.className('ant-btn ant-btn-primary');

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

  /**
   * @throws an error if the opened project (`VersionPage`) shows any alert
   */
  isAccessable(): Promise<void> {
    return this.alerts('nothing', '');
  }

  /**
   * adds a new File with the given `name`
   * @param name of the file to create
   */
  createFile(name: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const addButton = await this.driver.findElement(this.addButtonBy);
        await addButton.click();
        const popOver = await this.waitForElement(this.createPopoverBy);
        await popOver.findElement(this.createNameBy).sendKeys(name);
        const createButton = await popOver.findElement(this.createButtonBy);
        await createButton.click();
        await this.alerts('success');
        await addButton.click(); //to close the popover again
        resolve();
      } catch (error) {
        reject(`Error on Version.createFile('${name}'): ${error}`);
      }
    });
  }

  /**
   * selects the file with the given `name`
   * @param name of the file to select
   */
  selectFile(name: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      const tableBody = await this.driver.findElement(this.tableBodyBy);
      const rows = await tableBody.findElements(this.tableRowsBy);
      for (const row of rows) {
        const cols = await row.findElements(this.rowColumnsBy);
        for (const col of cols) {
          try {
            const text = await col.getText();
            if (text === name) {
              await cols[0]
                .click()
                .catch((error) => reject(`Error on Version.deleteFile('${name}'): ${error}`));
              resolve();
            }
          } catch (e) {
            /* ignore columns without text */
          }
        }
      }
      reject(`Error on Version.selectFile('${name}'): No File found with this name!`);
    });
  }

  /**
   * deletes the file with the given `name`
   * @param name of the file to delete
   * @param others a list of other files for deleting multiple files
   */
  deleteFile(name: string, ...others: string[]): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      // select the file/s
      await this.selectFile(name).catch((error) =>
        reject(`Error on Version.deleteFile('${name}', '${others.join('\', \'')}'): ${error}`),
      );
      for (const other of others) {
        await this.selectFile(other).catch((error) =>
          reject(`Error on Version.deleteFile('${name}', '${others.join('\', \'')}'): ${error}`),
        );
      }

      // delete the file/s
      const deleteButton = await this.driver.findElement(this.deleteButtonBy);
      await deleteButton.click();
      const deleteModal = await this.driver.findElement(this.deleteModalBy);
      const confirmButton = await deleteModal.findElement(this.confirmDeleteButtonBy);
      await confirmButton.click();

      // validate file is deleted
      await this.selectFile(name)
        .then(() => reject(`Error on Version.deleteFile('${name}', '${others.join('\', \'')}'): File was not deleted!`))
        .catch(() => resolve());

      resolve();
    });
  }

  
}
