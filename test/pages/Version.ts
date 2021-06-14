import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { EditorPage } from './Editor';
import { Page } from './Page';

export class VersionPage extends Page {
  private PAGE = 'versions/';

  // file selection
  private tableBodyBy = By.className('ant-table-tbody');
  READY_BY = this.tableBodyBy;
  private tableRowsBy = By.className('ant-table-row');
  private rowColumnsBy = By.css('td');
  private validateButtonBy = By.className('anticon anticon-file-done');
  private messageModalBy = By.className('ant-notification ant-notification-topRight');

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
  private exportButtonBy = By.className('anticon anticon-save');

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

  /**
   * adds a new File with the given `name`
   * @param name of the file to create
   */
  createFile(name: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const addButton = await this.driver.findElement(this.addButtonBy);
        await addButton.click();
        const popOver = await this.waitForElement(this.createPopoverBy, 'createFile');
        await popOver.findElement(this.createNameBy).sendKeys(name);
        const createButton = await popOver.findElement(this.createButtonBy);
        await createButton.click();
        await this.alerts('error')
          .then(() => reject(this.appendError(`createFile('${name}')`, 'there should be no error')))
          .catch(() => {
            /* ignore as expected */
          });
        // await addButton.click(); //to close the popover again
        resolve();
      } catch (error) {
        reject(this.appendError(`createFile('${name}')`, '', error));
      }
    });
  }

  /**
   * finds the file with the given `name` from the table of files and returns the corresponding column
   * @param name of the file to select
   * @returns the list of columns of the found file:
   * - [0] = CheckBox
   * - [1] = Name
   * - [2] = Date of Creation
   * - [3] = Edited By
   * - [4] = Last Edited
   * - [5] = "Actions"
   * - [6] = Validity Status
   */
  findFile(name: string): Promise<FileType> {
    return new Promise<FileType>(async (resolve, reject) => {
      try {
        const tableBody = await this.driver.findElement(this.tableBodyBy);
        const rows = await tableBody.findElements(this.tableRowsBy);
        for (const row of rows) {
          const cols = await row.findElements(this.rowColumnsBy);
          const text = await cols[1].getText();
          if (text === name) {
            resolve({
              checkBox: cols[0],
              name: cols[1],
              dateOfcreation: cols[2],
              editedBy: cols[3],
              lastEdited: cols[4],
              actions: cols[5],
              validityStatus: cols[6],
            });
          }
        }
        reject(this.appendError(`findFile('${name}')`, 'No File found with this name!'));
      } catch (error) {
        reject(this.appendError(`findFile('${name}')`, '', error));
      }
    });
  }

  openFile(name: string): Promise<EditorPage> {
    return new Promise<EditorPage>(async (resolve, reject) => {
      try {
        const file = await this.findFile(name);
        await file.name.click();
        const next = new EditorPage(this.driver);
        await next.validatePage();
        resolve(next);
      } catch (error) {
        reject(this.appendError(`openFile('${name}')`, `File can not be opened`, error));
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
        for (const fileName of files) {
          const file = await this.findFile(fileName);
          await file.checkBox.click();
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
          try {
            await this.findFile(file);
            reject(
              this.appendError(
                `deleteFile('${name}', '${others.join("', '")}')`,
                'File was not deleted!',
              ),
            );
          } catch (error) {
            /** expected behaviour */
          }
        }

        resolve();
      } catch (error) {
        reject(this.appendError(`deleteFile('${name}', '${others.join("', '")}')`, '', error));
      }
    });
  }

  uploadFile(absPath: string, file: string, fileExtension: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const uploadSpan = await this.driver.findElement(this.uploadSpanBy);
        const uploadInput = await uploadSpan.findElement(this.uploadInputBy);
        await uploadInput.sendKeys(absPath + '/' + file + fileExtension);
        await this.sleep(300); // wait for file to be rendered
        // await this.alerts('no-error');
        try {
          await this.findFile(file);
        } catch (error) {
          reject(
            this.appendError(
              `uploadFile('${absPath + '/' + file + fileExtension}')`,
              `File was not uploaded`,
              error,
            ),
          );
        }

        resolve();
      } catch (error) {
        reject(
          this.appendError(`uploadFile('${absPath + '/' + file + fileExtension}')`, '', error),
        );
      }
    });
  }

  /**
   * validates the file with the given `name`
   * @param name of the file to select
   */
  validateFile(name: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const file = await this.findFile(name);
        const buttons = await file.actions.findElements(By.className('ant-btn ant-btn-icon-only'));
        for (const button of buttons) {
          await button
            .findElement(this.validateButtonBy)
            .then(() => button.click())
            .catch(() => {
              /* wrong button */
            });
        }
        let validated = false;
        while (!validated) {
          try {
            await file.actions.findElement(By.className('ant-btn-loading'));
          } catch (e) {
            // stopped loading
            validated = true;
          }
        }
        file.validityStatus
          .findElement(By.className('anticon anticon-check'))
          .then(() => resolve(true)) // validation okay
          .catch(() =>
            file.validityStatus
              .findElement(By.className('anticon anticon-close'))
              .then(() => resolve(false)) // validation wrong
              .catch((error) =>
                reject(
                  this.appendError(`validateFile('${name}')`, `Probably not validated`, error),
                ),
              ),
          );
      } catch (error) {
        reject(this.appendError(`validateFile('${name}')`, '', error));
      }
    });
  }

  /**
   * exports the file with the given `name`
   * @param name of the file to export
   * @param others a list of other files for exporting multiple files
   */
  exportFile(name: string, ...others: string[]): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const files = [name, ...others];
        // select the file/s
        for (const fileName of files) {
          const file = await this.findFile(fileName);
          await file.checkBox.click();
        }

        // export the file/s
        const exportButton = await this.driver.findElement(this.exportButtonBy);
        await exportButton.click();
        await this.sleep(5000)
        // await this.alerts('success', 'Export successful.')

        resolve();
      } catch (error) {
        reject(this.appendError(`exportFile('${name}', '${others.join("', '")}')`, '', error));
      }
    });
  }
}

interface FileType {
  checkBox: WebElement;
  name: WebElement;
  dateOfcreation: WebElement;
  editedBy: WebElement;
  lastEdited: WebElement;
  actions: WebElement;
  validityStatus: WebElement;
}
