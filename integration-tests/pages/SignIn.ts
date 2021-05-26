import { By, Key, until, WebDriver } from 'selenium-webdriver';
import { Page } from './Page';
import { ProjectsPage } from './Projects';

export class SignInPage extends Page {
    private usernameBy: By;
    private passwordBy: By;
    private loginButtonBy: By;

    private PAGE = ''; // login page has noting on base url

    /**
     * Constructs the page `"localhost:3000"` which will be immedeatly forwarded to the SignIn page and provides function for thesting the login process
     * @param driver the current `WebDriver` from the `'selenium-webdriver'` package
     */
    constructor(driver: WebDriver) {
        super(driver);
        this.usernameBy = By.id('username');
        this.passwordBy = By.id('password');
        this.loginButtonBy = By.className('ant-btn login-form-button ant-btn-primary');
    }

    navigate(): Promise<void> {
        return super.navigate(this.PAGE);
    }

    validatePage(): Promise<void> {
        return super.validatePage(this.PAGE);
    }

    /**
     * Proceeds a login with the given `username` and `password`
     * @param username
     * @param password
     * @param withEnter should the login be submitted by pressing the `Key.ENTER`. Uses the page's login button otherwise
     * @returns the `ProjectsPage` after logging in
     */
    async login(
        username: string,
        password: string,
        withEnter: boolean = false,
    ): Promise<ProjectsPage> {
        return new Promise<ProjectsPage>(async (resolve, reject) => {
            try {
                // fill the credentials
                await this.driver.findElement(this.usernameBy).sendKeys(username);
                await this.driver.findElement(this.passwordBy).sendKeys(password);
                // submit
                withEnter
                    ? await this.driver.findElement(this.passwordBy).sendKeys(Key.ENTER)
                    : await this.driver.findElement(this.loginButtonBy).click();
                // wait for page to load
                await this.waitForElement(By.className('ant-input'));
                await this.alerts("nothing")
                // resolve next page
                const next = new ProjectsPage(this.driver);
                await next.validatePage();
                resolve(next);
            } catch (error) {
                reject('Error on SignInPage.login(): ' + error);
            }
        });
    }
}
