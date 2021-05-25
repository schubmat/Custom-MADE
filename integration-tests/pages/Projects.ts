import { By, Key, until, WebDriver } from 'selenium-webdriver';
import { Page } from './Page';

export class ProjectsPage extends Page {
    private PAGE = 'home';

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
}
