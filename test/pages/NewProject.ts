import { By, Key, until, WebDriver } from 'selenium-webdriver';
import { Page } from './Page';

export class NewProjectPage extends Page {
    private callerIcon = By.className('anticon anticon-plus-circle');
    public READY_BY = this.callerIcon;
    private PAGE = 'project/new';
    private nameInputBy: By;
    private descInputFieldBy: By;
    private createButtonBy: By;

    /**
     * Constructs the page `"localhost:3000/home"` which corresponds to the page "Project Overview"
     * @param driver the current `WebDriver` from the `'selenium-webdriver'` package
     */
    constructor(driver: WebDriver) {
        super(driver);
        this.nameInputBy = By.id('name');
        this.descInputFieldBy = By.id('description');
        this.createButtonBy = By.className('ant-btn ant-btn-primary');
    }

    navigate(): Promise<void> {
        return super.navigate(this.PAGE);
    }

    validatePage(): Promise<void> {
        return super.validatePage(this.PAGE);
    }
}
