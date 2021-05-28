import { By, Key, until, WebDriver, WebElement } from 'selenium-webdriver';
import { NewProjectPage } from './NewProject';
import { Page } from './Page';
import { VersionPage } from './Version';

export class ProjectsPage extends Page {
  private PAGE = 'home';

  // table
  private tableBodyBy = By.className('ant-table-tbody');
  private tableRowsBy = By.className('ant-table-row');
  private rowColumnsBy = By.css('td');

  // project actions
  private validateButtonBy = By.className('anticon anticon-file-done');
  private exportButtonBy = By.className('anticon anticon-export');
  private settingsButtonBy = By.className('anticon anticon-setting');

  // modal (validation)
  private messageModalBy = By.className('ant-notification ant-notification-topRight');
  private messageDownloadLinkBy = By.css('a');

  // footer
  private footerBy = By.className('ant-layout-footer');
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

  private findActionButton(project: ProjectType, actionIconBy: By) {
    return new Promise<WebElement>(async (resolve, reject) => {
      try {
        const buttons = await project.actions.findElements(
          By.className('ant-btn ant-btn-icon-only'),
        );
        for (const button of buttons) {
          await button
            .findElement(actionIconBy)
            .then(() => resolve(button))
            .catch(() => {
              /* wrong button */
            });
        }
        reject(
          `Error on Projects.findProjectAction('${project.name}', '${actionIconBy}'): No matching Action found!`,
        );
      } catch (error) {
        reject(
          `Error on Projects.findProjectAction('${project.name}', '${actionIconBy}'): ${error}`,
        );
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
        // click validate button
        const project = await this.findProject(name);
        const validateButton = await this.findActionButton(project, this.validateButtonBy);
        await validateButton.click();

        // wait for validation
        let validated = false;
        while (!validated) {
          try {
            await project.actions.findElement(By.className('ant-btn-loading'));
          } catch (e) {
            // stopped loading
            validated = true;
          }
        }

        // confirm validation result
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
   * downloads the log from the appearing modal after a failed validation
   */
  downloadLog(): Promise<void> {
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
        // click export button
        const project = await this.findProject(name);
        const exportButton = await this.findActionButton(project, this.exportButtonBy);
        await exportButton.click();

        // click the checkboxes
        const popup = await this.driver.findElement(By.className('ant-popover-content'));
        const checkboxes = await popup.findElements(By.className('ant-checkbox'));
        downloadRaw && (await checkboxes[0].click());
        downloadExport && (await checkboxes[1].click());
        // click download
        const downloadButton = await popup.findElement(By.className('ant-btn full-line-field'));
        await downloadButton.click();

        resolve();
      } catch (error) {
        reject(`Error on Project.exportProject('${name}'): ${error}`);
      }
    });
  }

  /**
   * @param name of the project to settings
   * @param downloadRaw should the "raw" be downloaded? defaults to `true`
   * @param downloadExport should the "settings" be downloaded? defaults to `true`
   */
  openProjectSettings(name: string, tab: SettingsType = 'General') {
    return new Promise<WebElement>(async (resolve, reject) => {
      try {
        // click settings button
        const project = await this.findProject(name);
        const settingsButton = await this.findActionButton(project, this.settingsButtonBy);
        await settingsButton.click();

        // open corresponding tab
        const modal = await this.driver.findElement(By.className('ant-modal'));
        const tabList = await modal.findElement(
          By.className('ant-menu ant-menu-light ant-menu-root ant-menu-horizontal'),
        );
        const tabs = await tabList.findElements(By.className('ant-menu-item'));
        tab === 'Access rights' && (await tabs[1].click());

        resolve(modal);
      } catch (error) {
        reject(`Error on Project.openProjectSettings('${name}'): ${error}`);
      }
    });
  }

  addUserToProject(projectName: string, userName: string, userRole: UserRoleType) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        // open settings
        const body = await this.openProjectSettings(projectName, 'Access rights');
        const selections = await body.findElements(By.className('ant-select-selection__rendered'));
        await selections[0].click();

        // add the user



        resolve();
      } catch (error) {
        reject(`Error on Project.addUserToProject('${projectName}', '${userName}', '${userRole}'): ${error}`);
      }
    });
  }
}

type SettingsType = 'General' | 'Access rights';
type UserRoleType = 'Reporter' | 'Contributer' | 'Maintainer';
interface ProjectType {
  checkBox: WebElement;
  name: WebElement;
  description: WebElement;
  extension: WebElement;
  validityStatus: WebElement;
  actions: WebElement;
}
