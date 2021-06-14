import { By, until, WebDriver, WebElement } from 'selenium-webdriver';

export abstract class Page {
  protected driver: WebDriver;
  public static BASE_URL: string = 'http://localhost:3000/';
  private alertBy = By.className('ant-message');
  private messagesBy = By.className('ant-message-notice');
  private messageErrorBy = By.className('ant-message-custom-content ant-message-error');
  private messageSuccessBy = By.className('ant-message-custom-content ant-message-success');

  private goBackBy = By.className('anticon anticon-arrow-left go-back-icon');
  public abstract READY_BY: By;

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
    return new Promise<void>(async (resolve, reject) => {
      await this.driver
        .get(Page.BASE_URL + page)
        .catch((error) => reject(this.appendError(`navigate(${Page.BASE_URL + page})`, '', error)));
      await this.waitForElement(this.READY_BY, 'navigate');
      resolve();
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
        .catch((error) => reject(this.appendError(`sleep(${ms})`, '', error)));
    });
  }

  /**
   * validates if the drivers current url corresponds the page's url
   * @param page to lookup: `'http://localhost:3000/<page>'`
   * @param hasSuffix indicates if there is a suffix like `'http://localhost:3000/<page>/<suffix>'`.
   * Actively checks if the `url.startsWith('http://localhost:3000/<page>')`.
   */
  protected validatePage(
    page: string,
    hasSuffix: boolean = false,
    skipWait: boolean = false,
  ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      !skipWait && (await this.waitForElement(this.READY_BY, 'validatePage'));
      await this.driver.getCurrentUrl().then((url) => {
        const matches = hasSuffix
          ? url.startsWith(Page.BASE_URL + page)
          : url === Page.BASE_URL + page;
        const be = hasSuffix ? 'include' : 'be';
        matches
          ? resolve()
          : reject(
              this.appendError(`Page was expected to ${be} ${Page.BASE_URL + page} but is ${url}`),
            );
      });
    });
  }

  /**
   * waits until the `WebElement` of the given `By` is located. Times out after 2s.
   * @param elementBy The `WebElement` to wait for
   * @returns the `WebElement` waited for
   */
  protected waitForElement(elementBy: By, caller: string) {
    return this.driver.wait(
      until.elementLocated(elementBy),
      2000,
      `${
        this.constructor.name
      }.${caller}.waitForElement(${elementBy.toString()})\n>>> Timed out after 2 seconds!`,
    );
  }

  /**
   * highlights the given `WebElement`s
   * @param elements to highlight
   */
  protected highlightElements(...elements: WebElement[]) {
    return this.driver.executeScript(
      "for (element of arguments) {element.setAttribute('style', 'background: yellow; border: 2px solid red;');}",
      ...elements,
    );
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
            this.appendError(
              `alerts(${type}, '${subtext}')`,
              'was expected to NOT alert, but did!',
            ),
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
                this.appendError(
                  `alerts(${type}, '${subtext}')`,
                  'was expected to alert and not error, but did!',
                ),
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
        reject(this.appendError(`alerts(${type}, '${subtext}')`, 'No matching alert found!'));
      } catch (noAlert) {
        // NO ALERT ----------------------------------------
        type === 'nothing'
          ? resolve()
          : reject(
              this.appendError(
                `alerts(${type}, '${subtext}')`,
                'was expected to alert, but did not!',
              ),
            );
      }
    });
  }

  goPageBack(readyBy: By): Promise<Page> {
    return new Promise<Page>(async (resolve, reject) => {
      try {
        await this.waitForElement(this.goBackBy, 'goPageBack');
        const backButton = await this.driver.findElement(this.goBackBy);
        await backButton.click();
        await this.waitForElement(readyBy, 'goPageBack');
        resolve(this);
      } catch (error) {
        reject(this.appendError('Error on Page.goPageBack()', '', error));
      }
    });
  }

  printElement(element: WebElement) {
    return new Promise<String>(async (resolve, reject) => {
      const tag = await element.getTagName();
      const className = await element.getAttribute('class');
      const text = await element.getText().catch(() => {
        return '';
      });
      let result = '<' + tag + ' className="' + className + '"> ' + text + '\n';
      resolve(result);
    });
  }

  private getChildrenString(element: WebElement, depth: number = 3, indent: string = '') {
    return new Promise<String>(async (resolve, reject) => {
      const children = await element.findElements(By.xpath('./child::*'));
      const elemString = await this.printElement(element);
      let result = indent + elemString + '\n';

      depth === 0 && resolve(result);

      for (const child of children) {
        result += await this.getChildrenString(child, depth - 1, indent + '| ');
      }
      resolve(result);
    });
  }

  logChildren(element: WebElement, depth: number = 3) {
    return new Promise<void>(async (resolve, reject) => {
      const log = await this.getChildrenString(element, 15);
      console.log('CHILDREN:\n', log);
      resolve();
    });
  }

  appendError(functionName: string, message: string = '', rest: string = '') {
    let result = `Error on ${this.constructor.name}.${functionName}`;
    if (message.length > 0) {
      result += '\n  >>> ' + message;
    }
    if (rest.length > 0) {
      result += '\n  ... ' + rest;
    }
    return result;
  }
}

export type AlertType = 'nothing' | 'some' | 'success' | 'error' | 'no-error';
// ant-message-custom-content ant-message-error
// ant-message-custom-content ant-message-success
