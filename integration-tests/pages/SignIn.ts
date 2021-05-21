import { By, Key, WebDriver, WebElementPromise } from 'selenium-webdriver';

export class SignInPage {
    private driver: WebDriver;
    private usernameElement: WebElementPromise;
    private passwordElement: WebElementPromise;
    private loginButton: WebElementPromise;

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
    async navigate() {
        await this.driver.get('localhost:3000');
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
    ) {
        await this.usernameElement.sendKeys(username);
        await this.driver.sleep(showTime);
        await this.passwordElement.sendKeys(password);
        await this.driver.sleep(showTime);
        if (withEnter) {
            await this.passwordElement.sendKeys(Key.ENTER);
        } else {
            await this.loginButton.click();
        }
    }
}

// idToken = await driver.executeScript("return localStorage.getItem('id_token')");
