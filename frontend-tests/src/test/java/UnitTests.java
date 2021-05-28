import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class UnitTests {

    public static WebDriver getDriver() {
        return driver;
    }

    public static WebDriverWait getWait() {
        return wait;
    }

    private static WebDriver driver;
    private static WebDriverWait wait;

    private static final String NAME_OF_TEST_FILE_TO_BE_DELETED = "automaticTestFileToBeDeleted";
    static final String NAME_OF_TEST_FILE_TO_BE_CREATED = "automaticTestFileToBeCreated";
    private static final String NAME_OF_TEST_FILE_DUPLICATE = "automaticTestFileDuplicate";

    @BeforeAll
    private static void init() {
        initWebDriver();
        findAccessibleProject();
        createNewFile(NAME_OF_TEST_FILE_TO_BE_DELETED);
        findAccessibleProject();
        createNewFile(NAME_OF_TEST_FILE_DUPLICATE);
    }

    @AfterAll
    private static void finish() throws InterruptedException {
        findAccessibleProject();
        deleteFile(NAME_OF_TEST_FILE_TO_BE_CREATED);
        findAccessibleProject();
        deleteFile(NAME_OF_TEST_FILE_DUPLICATE);
        Thread.sleep(5000);
        driver.quit();
    }

    static void initWebDriver() {
        String geckoDriverPath = UnitTests.class.getClassLoader().getResource("geckodriver").getPath();
        System.setProperty("webdriver.gecko.driver", geckoDriverPath);
        driver = driver = new FirefoxDriver();
        wait = new WebDriverWait(driver, 20);
    }

    static void waitForPageLoaded() {
        ExpectedCondition<Boolean> expectation = driver -> ((JavascriptExecutor) driver).executeScript("return document.readyState").toString().equals("complete");
        try {
            Thread.sleep(1000);
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(expectation);
        } catch (Throwable error) {
            Assertions.fail("Timeout waiting for Page Load Request to complete.");
        }
    }

    static void login(String user, String password) {
        driver.get(Config.BASE_URL);
        driver.findElement(By.id("username")).sendKeys(user);
        driver.findElement(By.id("password")).sendKeys(password + Keys.ENTER);
        waitForPageLoaded();
    }

    @Test
    public void loginWithWrongUserName() {
        login("wrongName", "password");
        assert (driver.getCurrentUrl().equals(Config.BASE_URL));
    }

    @Test
    public void loginWithWrongPassword() {
        login("user", "wrongPassword");
        assert (driver.getCurrentUrl().equals(Config.BASE_URL));
    }

    @Test
    public void loginSuccessfully() {
        login("user", "password");
        assert (driver.getCurrentUrl().equals(Config.BASE_URL + "home"));
    }

    @Test
    public void createNewFileSuccessfully() {
        findAccessibleProject();
        assert createNewFile(NAME_OF_TEST_FILE_TO_BE_CREATED);
    }

    @Test
    public void createNewFileUnsuccessfully() {
        findAccessibleProject();
        assert !createNewFile(NAME_OF_TEST_FILE_DUPLICATE);
    }

    static boolean createNewFile(String nameOfFile) {
        int initialNumberOfFiles = getAllRowsOfTheTable().size();
        WebElement createNewFileButton = driver.findElement(By.className("anticon-plus-circle"));
        createNewFileButton.click();
        WebElement popUp = driver.findElement(By.className("ant-popover-inner-content"));
        WebElement input = popUp.findElement(By.className("ant-input"));
        input.sendKeys(nameOfFile + Keys.ENTER);
        int newNumberOfFiles = getAllRowsOfTheTable().size();
        return ((initialNumberOfFiles + 1) == newNumberOfFiles); //the new number of files should now be increased by one if successful
    }

    @Test
    public void deleteFileSuccessfully() {
        assert deleteFile(NAME_OF_TEST_FILE_TO_BE_DELETED);
    }

    static boolean deleteFile(String nameOfFileToBeDeleted) {
        findAccessibleProject();
        List<WebElement> rows = getAllRowsOfTheTable();
        int initialNumberOfFiles = rows.size();
        for (WebElement row : rows) {
            String nameOfFile = row.findElement(By.tagName("a")).getText();
            if (nameOfFile.equals(nameOfFileToBeDeleted)) {
                row.findElement(By.className("ant-table-selection-column")).click();
            }
        }
        WebElement deleteButton = driver.findElement(By.className("anticon-delete"));
        deleteButton.click();
        driver.findElement(By.className("ant-btn-primary")).click();
        int newNumberOfFiles = getAllRowsOfTheTable().size();
        return newNumberOfFiles == initialNumberOfFiles - 1;
    }

    @Test
    public void validateFileSuccessfully() {
        findAccessibleProject();
        assert validateFile(0, true);
    }

    @Test
    public void validateFileUnsuccessfully() {
        findAccessibleProject();
        assert !validateFile(1, false);
    }

    @Test
    public void exportFileSuccessfully() {
        assert exportFile(0);
    }

    @Test
    public void exportFileUnsuccessfully() {
        assert !exportFile(1);
    }

    private boolean exportFile(int rowNumber) {
        findAccessibleProject();
        List<WebElement> rows = getAllRowsOfTheTable();
        rows.get(rowNumber).findElement(By.className("ant-checkbox-input")).click();
        driver.findElement(By.className("anticon-save")).click();
        while (true) {
            if (driver.getPageSource().contains("No exports were generated")) return false;
            if (driver.getPageSource().contains("Export successful")) return true;
        }
    }

    /*
    validates a file. returns true if validation was successful. returns false otherwise
     */
    public static boolean validateFile(int rowNumber, boolean expectValidationToBeSuccessful) {
        List<WebElement> rows = getAllRowsOfTheTable();
        try {
            WebElement button = findCorrectButton(rows.get(rowNumber), "anticon-file-done");
            button.click();
            waitForValidationToFinish(rows.get(rowNumber));
        } catch (NoSuchElementException e) {
            return false;
        }
        if (expectValidationToBeSuccessful) {
            rows.get(rowNumber).findElement(By.className("anticon-check"));
            return true;
        } else {
            rows.get(rowNumber).findElement(By.className("anticon-close"));
            return false;
        }
    }

    private static void waitForValidationToFinish(WebElement row) {
        while (true) {
            try {
                row.findElement(By.className("ant-btn-loading"));
            } catch (NoSuchElementException e) {
                return;
            }
        }
    }

    /*
    finds a button based on the class name in the associated the i-tag
     */
    static WebElement findCorrectButton(WebElement row, String className) {
        List<WebElement> buttons = row.findElements(By.className("ant-btn-icon-only"));
        for (WebElement button : buttons) {
            try {
                button.findElement(By.className(className));
                return button;
            } catch (NoSuchElementException ignored) {

            }
        }
        throw new AssertionError("button doesn't exist");
    }

    /*
    returns the row number of the project found
     */
    static Integer findAccessibleProject() {
        login("user", "password");
        List<WebElement> rows = getAllRowsOfTheTable();
        int rowCount = rows.size();
        for (int i = 0; i < rowCount; i++) {
            rows = getAllRowsOfTheTable();
            List<WebElement> columns = rows.get(i).findElements(By.tagName("td"));
            columns.get(1).click(); //clicks on the project name
            if (checkIfProjectIsAccessible()) return i;
            driver.navigate().back();
            waitForPageLoaded();
        }
        return null;
    }

    private static boolean checkIfProjectIsAccessible() {
        waitForPageLoaded();
        try {
            driver.findElement(By.className("ant-table-body"));
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    static List<WebElement> getAllRowsOfTheTable() {
        WebElement tableBody = driver.findElement(By.className("ant-table-tbody"));
        return tableBody.findElements(By.className("ant-table-row"));
    }

}
