import { By, Key, WebDriver, WebElementPromise } from 'selenium-webdriver';

export class SignInPage {
    private driver: WebDriver;
    private usernameElement: WebElementPromise;
    private passwordElement: WebElementPromise;
    private loginButton: WebElementPromise;

    protected BASE_URL = 'http://localhost:3000/';
    private SUCCESS_URL = 'http://localhost:3000/home';

    /**
     * Constructs the page `"localhost:3000"` which will be immedeatly forwarded to the SignIn page and provides function for thesting the login process
     * @param driver the current `WebDriver` from the `'selenium-webdriver'` package
     */
    constructor(driver: WebDriver) {
        this.driver = driver;
        this.usernameElement = driver.findElement(By.id('username'));
        this.passwordElement = driver.findElement(By.id('password'));
        this.loginButton = driver.findElement(
            By.className('ant-btn login-form-button ant-btn-primary'),
        );
    }

    /**
     * navigates the `WebDriver` to `"localhost:3000"`
     */
    async navigate(): Promise<SignInPage> {
        return new Promise<SignInPage>((resolve, reject) => {
            this.driver
                .get(this.BASE_URL)
                .then(() => resolve(this))
                .catch((error) => reject('Error on SignInPage.navigate(): ' + error));
        });
    }

    /**
     * Proceeds a login with the given `username` and `password`
     * @param username
     * @param password
     * @param withEnter should the login be submitted by pressing the `Key.ENTER`. Uses the page's login button otherwise
     * @param showTime time (in ms) between the entering of the credentials.
     */
    async login(
        username: string,
        password: string,
        withEnter: boolean = false,
        showTime: number = 0,
    ): Promise<SignInPage> {
        return new Promise<SignInPage>((resolve, reject) =>
            this.usernameElement
                .sendKeys(username)
                .then(() => this.driver.sleep(showTime))
                .then(() => this.passwordElement.sendKeys(password))
                .then(() => this.driver.sleep(showTime))
                .then(() =>
                    withEnter ? this.passwordElement.sendKeys(Key.ENTER) : this.loginButton.click(),
                )
                .then(() => resolve(this))
                .catch((error) => reject('Error on SignInPage.login(): ' + error)),
        );
    }

    async sleep(ms: number): Promise<SignInPage> {
        return new Promise((resolve, reject) => {
            this.driver
                .sleep(ms)
                .then(() => resolve(this))
                .catch((error) => reject(`Error on SignInPage.sleep(${ms}): ` + error));
        });
    }

    async validatePage(success: boolean = true): Promise<SignInPage> {
        return new Promise((resolve, reject) => {
            this.driver.getCurrentUrl().then((url) => {
                if (success) {
                    url === this.SUCCESS_URL
                        ? resolve(this)
                        : reject(`SignInPage was not forwarded to ${this.SUCCESS_URL} but ${url}`);
                } else {
                    url === this.BASE_URL
                        ? resolve(this)
                        : reject(
                              `SignInPage was unexpectedly forwarded from ${this.BASE_URL} to ${url}`,
                          );
                }
            });
        });
    }
}

// idToken = await driver.executeScript("return localStorage.getItem('id_token')");
