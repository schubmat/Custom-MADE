import { By, Key, until, WebDriver, WebElement } from 'selenium-webdriver';
import { NewProjectPage } from './NewProject';
import { Page } from './Page';
import { VersionPage } from './Version';

export class ProjectsPage extends Page {
  private PAGE = 'home';

  private footerBy = By.className('ant-layout-footer');
  private tableBodyBy = By.className('ant-table-tbody');
  private tableRowsBy = By.className('ant-table-row');
  private rowColumnsBy = By.css('td');
  private validateButtonBy = By.className('anticon anticon-file-done');
  private exportButtonBy = By.className('anticon anticon-export');

  private messageModalBy = By.className('ant-notification ant-notification-topRight');
  private messageDownloadLinkBy = By.css('a');

  private addButtonBy = By.className('anticon anticon-plus-circle');
  private saveButtonBy = By.className('anticon anticon-save');
  private deleteButtonBy = By.className('anticon anticon-delete');

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
    return super.validatePage(this.PAGE);
  }

  /**
   * ***TODO NOT WORKING***
   * @deprecated
   */
  async createProject(): Promise<NewProjectPage> {
    return new Promise<NewProjectPage>(async (resolve, reject) => {
      try {
        const footer = await this.driver.findElement(this.footerBy);
        const addButton = await footer.findElement(this.addButtonBy);
        await addButton.click();

        // resolve next page
        const next = new NewProjectPage(this.driver);
        await next.validatePage();
        resolve(next);
      } catch (error) {
        reject('Error on Projects.createFile(): ' + error);
      }
    });
  }

  /**
   * finds the file with the given `name` from the table of files and returns the corresponding column
   * @param name of the file to select
   * @returns the list of columns of the found file:
   * - [0] = CheckBox
   * - [1] = Name
   * - [2] = Description
   * - [3] = Extension
   * - [4] = Validity Status
   * - [5] = "Actions"
   */
  findProject(name: string): Promise<ProjectType> {
    return new Promise<ProjectType>(async (resolve, reject) => {
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
              description: cols[2],
              extension: cols[3],
              validityStatus: cols[4],
              actions: cols[5],
            });
          }
        }
        reject(`Error on Projects.findProject('${name}'): No Project found with this name!`);
      } catch (error) {
        reject(`Error on Projects.findProject('${name}'): ${error}`);
      }
    });
  }

  /**
   * @param name of the project to open
   * @returns the `VersionPage` of the corresponding project
   */
  openProject(name: string) {
    return new Promise<VersionPage>(async (resolve, reject) => {
      try {
        const project = await this.findProject(name);
        await project.name.click();
        const next = new VersionPage(this.driver);
        await next.validatePage();
        resolve(next);
      } catch (error) {
        reject(`Error on Projects.openProject('${name}'): ${error}`);
      }
    });
  }

  /**
   * validates the project with the given `name`
   * @param name of the project to select
   */
  validateProject(name: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const project = await this.findProject(name);
        const buttons = await project.actions.findElements(
          By.className('ant-btn ant-btn-icon-only'),
        );
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
            await project.actions.findElement(By.className('ant-btn-loading'));
          } catch (e) {
            // stopped loading
            validated = true;
          }
        }
        project.validityStatus
          .findElement(By.className('anticon anticon-check'))
          .then(() => resolve(true)) // validation okay
          .catch(() =>
            project.validityStatus
              .findElement(By.className('anticon anticon-close'))
              .then(() => resolve(false)) // validation wrong
              .catch((error) =>
                reject(
                  `Error on Project.validateProject('${name}'): Probably not validated: ${error}`,
                ),
              ),
          );
      } catch (error) {
        reject(`Error on Project.validateProject('${name}'): ${error}`);
      }
    });
  }

  /**
   * downloads the log from the upcoming modal after a failed validation
   */
  async downloadLog(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const modal = await this.driver.findElement(this.messageModalBy);
        const downloadLink = await modal.findElement(this.messageDownloadLinkBy);
        await downloadLink.click();
        resolve();
      } catch (error) {
        reject('Error on Projects.downloadLog(): ' + error);
      }
    });
  }

  /**
   * @param name of the project to export
   * @param downloadRaw should the "raw" be downloaded? defaults to `true`
   * @param downloadExport should the "export" be downloaded? defaults to `true`
   */
  exportProject(name: string, downloadRaw: boolean = true, downloadExport: boolean = true) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const project = await this.findProject(name);
        const buttons = await project.actions.findElements(
          By.className('ant-btn ant-btn-icon-only'),
        );
        for (const button of buttons) {
          await button
            .findElement(this.exportButtonBy)
            .then(() => button.click())
            .catch(() => {
              /* wrong button */
            });
        }

        const popup = await this.driver.findElement(By.className('ant-popover-content'));
        const checkboxes = await popup.findElements(By.className('ant-checkbox'));
        downloadRaw && (await checkboxes[0].click());
        downloadExport && (await checkboxes[1].click());
        const downloadButton = await popup.findElement(By.className('ant-btn full-line-field'));
        await downloadButton.click();
        resolve();
      } catch (error) {
        reject(`Error on Project.exportProject('${name}'): ${error}`);
      }
    });
  }
}

interface ProjectType {
  checkBox: WebElement;
  name: WebElement;
  description: WebElement;
  extension: WebElement;
  validityStatus: WebElement;
  actions: WebElement;
}
