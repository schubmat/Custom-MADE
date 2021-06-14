import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { NewProjectPage } from './NewProject';
import { Page } from './Page';
import { VersionPage } from './Version';

export class ProjectsPage extends Page {
  private PAGE = 'home';

  // table
  private tableBodyBy = By.className('ant-table-tbody');
  public READY_BY = this.tableBodyBy;
  private tableRowsBy = By.className('ant-table-row');
  private rowColumnsBy = By.css('td');

  // project actions
  private validateButtonBy = By.className('anticon anticon-file-done');
  private exportButtonBy = By.className('anticon anticon-export');
  private settingsButtonBy = By.className('anticon anticon-setting');

  // modal (validation)
  private messageModalBy = By.className('ant-notification ant-notification-topRight');
  private messageDownloadLinkBy = By.css('a');

  // modal (validation)
  private modalUserRightsBy = By.className('ant-modal-body');
  private modalUserRightsByTable = By.className('ant-table-tbody');
  private userTableRowBy = By.className('ant-table-row ant-table-row-level-0');

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
    return new Promise<void>(async (resolve, reject) => {
      await super.navigate(this.PAGE);
      await this.waitForElement(By.className('ant-table-tbody'), 'navigate');
      resolve();
    });
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
        await(this.sleep(300))
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
        reject(this.appendError(`findProject('${name}')`, 'No Project found with this name!'));
      } catch (error) {
        reject(this.appendError(`findProject('${name}')`, '', error));
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
        await this.sleep(100);
        const project = await this.findProject(name);
        await project.name.click();
        const next = new VersionPage(this.driver);
        await next.validateJustPage();
        resolve(next);
      } catch (error) {
        reject(this.appendError(`openProject('${name}')`, '', error));
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
          this.appendError(
            `findProjectAction('${project.name}', '${actionIconBy}')`,
            'No matching Action found!',
          ),
        );
      } catch (error) {
        reject(
          this.appendError(`findProjectAction('${project.name}', '${actionIconBy}')`, '', error),
        );
      }
    });
  }

  findUserTableRow() {
    return new Promise<WebElement>(async (resolve, reject) => {
      try {
        const modalBody = await this.driver.findElement(this.modalUserRightsBy);
        await this.sleep(300);
        const tableRows = await modalBody.findElements(this.userTableRowBy);

        resolve(tableRows[1]);
      } catch (error) {
        reject(console.log(`findUserTableRow()`, error));
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
        await this.waitForElement(this.tableRowsBy, 'validateProject()')
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
                  this.appendError(`validateProject('${name}')`, `Probably not validated`, error),
                ),
              ),
          );
      } catch (error) {
        reject(this.appendError(`validateProject('${name}')}`, '', error));
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
        reject(this.appendError('downloadLog()', '', error));
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
        reject(this.appendError(`exportProject('${name}')`, '', error));
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
        const body = modal.findElement(By.className('ant-modal-body'));

        resolve(body);
      } catch (error) {
        reject(this.appendError(`openProjectSettings('${name}')`, '', error));
      }
    });
  }

  addUserToProject(projectName: string, userName: string, userRole: UserRoleType) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        // open settings
        const body = await this.openProjectSettings(projectName, 'Access rights');
        const selections = await body.findElements(By.className('ant-select-selection__rendered'));

        // add the user
        let userFound = false;
        await selections[0].click();
        await this.sleep(100);
        const userDropdown = await this.driver.findElement(
          By.className(
            'ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft',
          ),
        );
        const users = await userDropdown.findElements(By.css('li'));
        for (const user of users) {
          const text = await user.getText();
          if (userName === text) {
            await user.click();
            userFound = true;
          }
        }
        !userFound &&
          reject(
            this.appendError(
              `addUserToProject('${projectName}', '${userName}', '${userRole}')`,
              'User not found',
            ),
          );

        // add the role
        let roleFound = false;
        await selections[1].click();
        await this.sleep(100);
        const bothDropdowns = await this.driver.findElements(
          By.className(
            'ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft',
          ),
        );
        const roleDropdown = bothDropdowns[1];
        const roles = await roleDropdown.findElements(By.css('li'));
        for (const role of roles) {
          const text = await role.getText();
          if (userRole === text) {
            await role.click();
            roleFound = true;
          }
        }
        !roleFound &&
          reject(
            this.appendError(
              `addUserToProject('${projectName}', '${userName}', '${userRole}')`,
              'Role not found',
            ),
          );

        // click the add button
        const addButton = await body.findElement(By.className('ant-btn ant-btn-primary'));
        await addButton.click();
        // await this.alerts('success', userName + ' was added');
        resolve();
      } catch (error) {
        reject(
          this.appendError(
            `addUserToProject('${projectName}', '${userName}', '${userRole}')`,
            '',
            error,
          ),
        );
      }
    });
  }

  removeUserFromProject(projectName: string, userName: string) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        // open settings
        const body = await this.openProjectSettings(projectName, 'Access rights');

        // find user
        const list = await body.findElements(By.className('ant-table-row ant-table-row-level-0'));
        for (const userRow of list) {
          const cols = await userRow.findElements(By.css('td'));
          const name = await cols[0].getText();
          if (name === userName) {
            // remove user
            const delBtn = await cols[5].findElement(By.css('button'));
            await delBtn.click();
          }
        }
        // await this.alerts('success', 'Member was removed from version');
        const closeBtn = await this.driver.findElement(
          By.className('anticon anticon-close ant-modal-close-icon'),
        );
        await closeBtn.click();
        await this.sleep(300);
        resolve();
      } catch (error) {
        reject(
          this.appendError(`removeUserFromProject('${projectName}', '${userName}')`, '', error),
        );
      }
    });
  }
}

type SettingsType = 'General' | 'Access rights';
type UserRoleType = 'Reporter' | 'Contributor' | 'Maintainer';
interface ProjectType {
  checkBox: WebElement;
  name: WebElement;
  description: WebElement;
  extension: WebElement;
  validityStatus: WebElement;
  actions: WebElement;
}
