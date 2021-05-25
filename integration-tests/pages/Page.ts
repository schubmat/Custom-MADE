import { By, Key, until, WebDriver } from 'selenium-webdriver';
import { ProjectsPage } from './Projects';

export class Page {
    protected driver: WebDriver;
    public static BASE_URL: string = 'http://localhost:3000/';

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
                .catch((error) =>
                    reject(`Error on Page.navigate(${Page.BASE_URL + page}): ${error}`),
                );
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
     */
    protected validatePage(page: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.driver.getCurrentUrl().then((url) => {
                url === Page.BASE_URL + page
                    ? resolve()
                    : reject(`Page was expected to be ${Page.BASE_URL + page} but is ${url}`);
            });
        });
    }
}
