import { By, Condition, Key, until, WebDriver } from 'selenium-webdriver';
import { ProjectsPage } from './Projects';

export class Page {
  protected driver: WebDriver;
  public static BASE_URL: string = 'http://localhost:3000/';
  private alertBy = By.className('ant-message');
  private messagesBy = By.className('ant-message-notice');
  private messageErrorBy = By.className('ant-message-custom-content ant-message-error');
  private messageSuccessBy = By.className('ant-message-custom-content ant-message-success');

  private goBackBy = By.className('anticon anticon-arrow-left go-back-icon');

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
   * @param type of the Alert (`'nothing' | 'some' | 'success' | 'error' | 'some-success'`)
   * @param subtext that the Alert message must include
   */
  alerts(type: AlertType, subtext?: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        // lookup alert messages
        const alert = await this.driver.findElement(this.alertBy);
        const messages = await alert.findElements(this.messagesBy);

        // some message with some text
        type === 'some' && subtext === undefined && resolve();

        // nothing
        type === 'nothing' &&
          reject(
            `Error on Page.alerts(${type}, '${subtext}'): was expected to NOT alert, but did!`,
          );

        // save these for the no-error with subtext check
        const texts: string[] = [];

        // iterate messages
        for (const message of messages) {
          // check ERROR ------------------------------------------------------
          try {
            const errMess = await message.findElement(this.messageErrorBy);

            // no-error
            type === 'no-error' &&
              reject(
                `Error on Page.alerts(${type}, '${subtext}'): was expected to alert and not error, but did!`,
              );

            // some error
            type === 'error' && subtext === undefined && resolve();

            // correct error text
            const errText = await errMess.getText();
            type === 'error' && subtext !== undefined && errText.includes(subtext) && resolve();
          } catch (noErrorMessage) {
            /* catched later */
          }

          // check SUCCESS ----------------------------------------------------
          try {
            const succMess = await message.findElement(this.messageSuccessBy);

            // some success
            type === 'success' && subtext === undefined && resolve();

            // correct success text
            const succText = await succMess.getText();
            type === 'success' && subtext !== undefined && succText.includes(subtext) && resolve();
            texts.push(succText);
          } catch (noSuccessMessage) {
            /* catched later */
          }

          // check SOME -------------------------------------------------------
          try {
            // correct message text
            const someText = await message.getText();
            type === 'some' && subtext !== undefined && someText.includes(subtext) && resolve();
            texts.push(someText);
          } catch (noSuccessMessage) {
            /* catched later */
          }
        }

        // some no-error
        type === 'no-error' && subtext === undefined && resolve();

        // correct no-error text
        for (const text of texts) {
          type === 'no-error' && subtext !== undefined && text.includes(subtext) && resolve();
        }

        // no match found
        reject(`Error on Page.alerts(${type}, '${subtext}'): No matching alert found!`);
      } catch (noAlert) {
        // NO ALERT ----------------------------------------
        type === 'nothing'
          ? resolve()
          : reject(
              `Error on Page.alerts(${type}, '${subtext}'): was expected to alert, but did not!`,
            );
      }
    });
  }

  goPageBack(): Promise<Page> {
    return new Promise<Page>(async (resolve, reject) => {
      try {
        // fill the credentials
        const backButton = await this.driver.findElement(this.goBackBy);
        await backButton.click();
        resolve(this)
      } catch (error) {
        reject('Error on SignInPage.login(): ' + error);
      }
    });
  }
}

export type AlertType = 'nothing' | 'some' | 'success' | 'error' | 'no-error';
// ant-message-custom-content ant-message-error
// ant-message-custom-content ant-message-success
