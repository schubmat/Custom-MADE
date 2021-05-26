import { By, Key, until, WebDriver, WebElement } from 'selenium-webdriver';
import { Page } from './Page';

export class VersionPage extends Page {
  private PAGE = 'versions/';

  // file selection
  private tableBodyBy = By.className('ant-table-tbody');
  private tableRowsBy = By.className('ant-table-row');
  private rowColumnsBy = By.css('td');

  // file creation
  private addButtonBy = By.className('anticon anticon-plus-circle');
  private createPopoverBy = By.className('ant-popover ant-popover-placement-top');
  private createNameBy = By.id('name');
  private createButtonBy = By.className('ant-btn ant-btn-primary');

  // file deletion
  private deleteButtonBy = By.className('anticon anticon-delete');
  private deleteModalBy = By.className('ant-modal-content');
  private confirmDeleteButtonBy = By.className('ant-btn ant-btn-primary');

  // file upload
  private uploadSpanBy = By.className('ant-upload');
  private uploadInputBy = By.css('input');

  // file export
  private saveButtonBy = By.className('anticon anticon-save');

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
        await this.alerts('error')
          .then(() => reject(`Error on Version.createFile('${name}'): there should be no error`))
          .catch(() => {
            /* ignore as expected */
          });
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
  selectFile(name: string, justVerify: boolean = false): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const tableBody = await this.driver.findElement(this.tableBodyBy);
        const rows = await tableBody.findElements(this.tableRowsBy);
        for (const row of rows) {
          const cols = await row.findElements(this.rowColumnsBy);
          for (const col of cols) {
            try {
              const text = await col.getText();
              if (text === name) {
                !justVerify &&
                  (await cols[0]
                    .click()
                    .catch((error) => reject(`Error on Version.selectFile('${name}'): ${error}`)));
                resolve();
              }
            } catch (e) {
              /* ignore columns without text */
            }
          }
        }
        reject(`Error on Version.selectFile('${name}'): No File found with this name!`);
      } catch (error) {
        reject(`Error on Version.selectFile('${name}'): ${error}`);
      }
    });
  }

  /**
   * deletes the file with the given `name`
   * @param name of the file to delete
   * @param others a list of other files for deleting multiple files
   */
  deleteFile(name: string, ...others: string[]): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const files = [name, ...others];
        // select the file/s
        for (const file of files) {
          await this.selectFile(file).catch((error) =>
            reject(`Error on Version.deleteFile('${name}', '${others.join("', '")}'): ${error}`),
          );
        }

        // delete the file/s
        const deleteButton = await this.driver.findElement(this.deleteButtonBy);
        await deleteButton.click();
        const deleteModal = await this.driver.findElement(this.deleteModalBy);
        await this.sleep(300); // TODO wait for WHAT?
        const confirmButton = await deleteModal.findElement(this.confirmDeleteButtonBy);
        await confirmButton.click();

        // validate file/s is/are deleted

        for (const file of files) {
          await this.selectFile(file, true)
            .then(() =>
              reject(
                `Error on Version.deleteFile('${name}', '${others.join(
                  "', '",
                )}'): File was not deleted!`,
              ),
            )
            .catch(() => {
              /** expected behaviour */
            });
        }

        resolve();
      } catch (error) {
        reject(`Error on Version.deleteFile('${name}'): ${error}`);
      }
    });
  }

  uploadFile(absPath: string, fileName: string, ending: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const uploadSpan = await this.driver.findElement(this.uploadSpanBy);
        const uploadInput = await uploadSpan.findElement(this.uploadInputBy);
        await uploadInput.sendKeys(absPath + '/' + fileName + ending);
        await this.sleep(300); // wait for file to be rendered
        await this.alerts('no-error');
        await this.selectFile(fileName, true).catch(() =>
          reject(`Error on Version.uploadFile('${fileName}'): File was not uploaded!`),
        );

        resolve();
      } catch (error) {
        reject(`Error on Version.uploadFile('${absPath + '/' + fileName + ending}'): ${error}`);
      }
    });
  }
}
