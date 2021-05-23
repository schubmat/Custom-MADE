import { By, Key, until, WebDriver } from 'selenium-webdriver';

export class SignInPage {
    private driver: WebDriver;
    private usernameBy: By;
    private passwordBy: By;
    private loginButtonBy: By;

    protected BASE_URL = 'http://localhost:3000/';
    private SUCCESS_URL = 'http://localhost:3000/home';

    /**
     * Constructs the page `"localhost:3000"` which will be immedeatly forwarded to the SignIn page and provides function for thesting the login process
     * @param driver the current `WebDriver` from the `'selenium-webdriver'` package
     */
    constructor(driver: WebDriver) {
        this.driver = driver;
        this.usernameBy = By.id('username');
        this.passwordBy = By.id('password');
        this.loginButtonBy = By.className('ant-btn login-form-button ant-btn-primary');
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
     * - TODO: this function should retrun a new HomePage
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
        return new Promise<SignInPage>(
            async (resolve, reject) => {
                try {
                    await this.driver.findElement(this.usernameBy).sendKeys(username);
                    await this.driver.sleep(showTime);
                    await this.driver.findElement(this.passwordBy).sendKeys(password);
                    await this.driver.sleep(showTime);
                    withEnter
                        ? await this.driver.findElement(this.passwordBy).sendKeys(Key.ENTER)
                        : await this.driver.findElement(this.loginButtonBy).click();
                    await this.driver.wait(
                        until.elementLocated(By.className('ant-input')),
                        1000,
                        'Timed out after 1 second1',
                    );
                    resolve(this);
                } catch (error) {
                    reject('Error on SignInPage.login(): ' + error);
                }
            },
        );
    }

    /**
     * sets the driver to sleep for the given amount of `ms`.
     * @param ms to sleep until the next async task
     * @returns the chained Page as Promise
     */
    async sleep(ms: number): Promise<SignInPage> {
        return new Promise((resolve, reject) => {
            this.driver
                .sleep(ms)
                .then(() => resolve(this))
                .catch((error) => reject(`Error on SignInPage.sleep(${ms}): ` + error));
        });
    }

    /**
     * @returns a boolean Promise if the Login attempt was successful
     */
    async isSuccessfullyLoggedIn(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.driver
                .getCurrentUrl()
                .then((url) => (url === this.SUCCESS_URL ? resolve(true) : resolve(false)))
                .catch((error) => reject(`Error on SignInPage.isSuccessfullyLoggedIn(): ` + error));
        });
    }

    /**
     * 
     * @param asExpected indicates if the current page should be the sign in page. (*defaults to `true`*)
     * @returns the chained Page as Promise if valid. Rejects an Error otherwise 
     */
    async validatePage(asExpected: boolean = true): Promise<SignInPage> {
        return new Promise((resolve, reject) => {
            this.driver.getCurrentUrl().then((url) => {
                if (asExpected) {
                    url === this.BASE_URL
                        ? resolve(this)
                        : reject(
                              `SignInPage was unexpectedly forwarded from ${this.BASE_URL} to ${url}`,
                          );
                } else {
                    url !== this.BASE_URL
                        ? resolve(this)
                        : reject(
                              `SignInPage was not forwarded from ${this.BASE_URL} to another page`,
                          );
                }
            });
        });
    }
}

// idToken = await driver.executeScript("return localStorage.getItem('id_token')");
