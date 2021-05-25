import { By, Key, until, WebDriver } from 'selenium-webdriver';
import { NewProjectPage } from './NewProject';
import { Page } from './Page';
import { VersionPage } from './Version';

export class ProjectsPage extends Page {
  private PAGE = 'home';

  private footerBy = By.className('ant-layout-footer');
  private tableBodyBy = By.className('ant-table-tbody');
  private tableRowsBy = By.className('ant-table-row');
  private rowColumnsBy = By.css('td');

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
   *
   * @returns TODO NOT WORKING
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

  async openProject(name: string) {
    return new Promise<VersionPage>(async (resolve, reject) => {
      try {
        await this.driver
          .findElement(this.tableBodyBy)
          .then((tableBody) => tableBody.findElements(this.tableRowsBy))
          .then((rows) =>
            rows.forEach(async (row) => {
              row.findElements(this.rowColumnsBy).then(async (cols) => {
                for (const col of cols) {
                  await col
                    .getText()
                    .then(async (text) => {
                      if (text === name) {
                        await col.click();
                        const next = new VersionPage(this.driver);
                        await next
                          .validatePage()
                          .then(() => resolve(next))
                          .catch((e) => reject(`Error on Projects.openProject('${name}'): ${e}`));
                      }
                    })
                    .catch(() => {});
                }
                reject(`Error on Projects.openProject('${name}'): No Project found with this name`);
              });
            }),
          );
      } catch (error) {
        reject('Error on ProjectsPage.test(): ' + error);
      }
    });
  }
}
