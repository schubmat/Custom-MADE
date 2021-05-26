import { By, Condition, Key, until, WebDriver } from 'selenium-webdriver';
import { ProjectsPage } from './Projects';

export class Page {
  protected driver: WebDriver;
  public static BASE_URL: string = 'http://localhost:3000/';
  private alertBy = By.className('ant-message');
  private messageErrorBy = By.className('ant-message-custom-content ant-message-error');
  private messageSuccessBy = By.className('ant-message-custom-content ant-message-success');

  /**
   * @param driver the current `WebDriver` from the `'selenium-webdriver'` package
   */
  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  /**
   * navigates the `WebDriver` to the page's url
   */
  protected navigate(page: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.driver
        .get(Page.BASE_URL + page)
        .then(() => resolve())
        .catch((error) => reject(`Error on Page.navigate(${Page.BASE_URL + page}): ${error}`));
    });
  }
  /**
   * sets the driver to sleep for the given amount of `ms`.
   * @param ms to sleep until the next async task
   * @returns the chained Page as Promise
   */
  sleep(ms: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.driver
        .sleep(ms)
        .then(() => resolve())
        .catch((error) => reject(`Error on Page.sleep(${ms}): ` + error));
    });
  }

  /**
   * validates if the drivers current url corresponds the page's url
   * @param page to lookup: `'http://localhost:3000/<page>'`
   * @param hasSuffix indicates if there is a suffix like `'http://localhost:3000/<page>/<suffix>'`.
   * Actively checks if the `url.startsWith('http://localhost:3000/<page>')`.
   */
  protected validatePage(page: string, hasSuffix: boolean = false): Promise<void> {
    return new Promise((resolve, reject) => {
      this.driver.getCurrentUrl().then((url) => {
        const matches = hasSuffix
          ? url.startsWith(Page.BASE_URL + page)
          : url === Page.BASE_URL + page;
        const be = hasSuffix ? 'include' : 'be';
        matches
          ? resolve()
          : reject(`Page was expected to ${be} ${Page.BASE_URL + page} but is ${url}`);
      });
    });
  }

  /**
   * waits until the `WebElement` of the given `By` is located. Times out after 2s.
   * @param elementBy The `WebElement` to wait for
   * @returns the `WebElement` waited for
   */
  protected waitForElement(elementBy: By) {
    return this.driver.wait(until.elementLocated(elementBy), 2000, 'Timed out after 1 second!');
  }

  /**
   * checks if the current page shows an Alert of a given `type` containing a given `subText`.
   * @param type of the Alert (`'nothing' | 'error' | 'success'`)
   * @param subtext ***[TODO not implemented]*** that the Alert message must include
   */
  alerts(type: AlertType, subtext?: string): Promise<void> {
    return new Promise((resolve, reject) =>
      this.driver
        .findElement(this.alertBy)
        .then((alert /* Alert found */) =>
          alert
            .findElement(this.messageSuccessBy) /* success alert found */
            .then((succ) =>
              type === 'success'
                ? resolve() // TODO expected success
                : reject(
                    `Error on Page.alerts(${type}, '${subtext}'): was expected to be '${type}', but is 'success'!`,
                  ),
            )
            .catch(() =>
              alert
                .findElement(this.messageErrorBy) /* error alert found */
                .then((err) =>
                  type === 'error'
                    ? resolve() // TODO expected error
                    : reject(
                        `Error on Page.alerts(${type}, '${subtext}'): was expected to be '${type}', but is 'error'!`,
                      ),
                )
                .catch(() => /* unexpected alert found */
                  alert
                    .getText()
                    .then(async (text) =>
                      type === 'nothing'
                        ? reject(
                            `Error on Page.alerts(${type}, '${subtext}'): was expected to NOT alert, but alerts: '${text}'!`,
                          )
                        : reject(
                            `Error on Page.alerts(${type}, '${subtext}'): the Alert is neighter "error" nor "success": '${text}'!`,
                          ),
                    ),
                ),
            ),
        )
        .catch(() => {
          /* no Alert found */
          type === 'nothing'
            ? resolve() // expected non error
            : reject(
                `Error on Page.alerts(${type}, '${subtext}'): was expected to alert, but did not!`,
              );
        }),
    );
  }
}

export type AlertType = 'nothing' | 'success' | 'error';
// ant-message-custom-content ant-message-error
// ant-message-custom-content ant-message-success
