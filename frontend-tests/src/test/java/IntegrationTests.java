import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class IntegrationTests {

    private static WebDriver driver;
    private static WebDriverWait wait;
    private static final String FILE_BASE_NAME_TEST03 = "testFileIntegrationTest03-";
    private static final String NAME_OF_FILE_TEST_01 = "testFileIntegrationTest01";


    @BeforeAll
    private static void init() {
        UnitTests.initWebDriver();
        driver = UnitTests.getDriver();
        wait = UnitTests.getWait();
    }


    @AfterAll
    private static void finish() throws InterruptedException {
        UnitTests.findAccessibleProject();
        List<WebElement> rows = UnitTests.getAllRowsOfTheTable();
        for (WebElement row : rows) {
            String nameOfFile = row.findElement(By.tagName("a")).getText();
            if (nameOfFile.startsWith(FILE_BASE_NAME_TEST03) || nameOfFile.equals(NAME_OF_FILE_TEST_01)) {
                UnitTests.deleteFile(nameOfFile);
            }
        }
        Thread.sleep(5000);
        driver.quit();
    }

    @Test
    public void IT01() {
        UnitTests.findAccessibleProject();
        assert UnitTests.createNewFile(NAME_OF_FILE_TEST_01);
    }

    @Test
    public void IT02() {
        assert findInaccessibleProject();
    }

    @Test
    public void IT03() {
        int rowOfAccessedProject = findAccessibleProjectAndCreateFiles();
        boolean isProjectValid = UnitTests.validateFile(rowOfAccessedProject, false);
        throw new AssertionError("test is not fully implemented yet");
        //TODO if !isProjectValid -> download log file and verify its downloaded afterwards
    }

    @Test
    public void IT04() {
        int rowOfAccessedProject = findAccessibleProjectAndCreateFiles();
        throw new AssertionError("test is not fully implemented yet");
        //TODO export and download project
    }

    @Test
    public void IT05() {
        UnitTests.findAccessibleProject();
        throw new AssertionError("test is not fully implemented yet");
        //TODO add new user
    }

    /*
    returns the row of the accessed project
     */
    private static int findAccessibleProjectAndCreateFiles() {
        UnitTests.login(Config.USERNAME, Config.PASSWORD);
        int rowOfAccessedProject = UnitTests.findAccessibleProject();
        List<WebElement> rows = UnitTests.getAllRowsOfTheTable();
        for (int i = rows.size(); i < 5; i++) {
            UnitTests.createNewFile(FILE_BASE_NAME_TEST03 + i);
            UnitTests.findAccessibleProject();
        }
        driver.navigate().back();
        return rowOfAccessedProject;
    }

    /*
    returns true if an inaccessibleProject has been found
     */
    private static boolean findInaccessibleProject() {
        UnitTests.login(Config.USERNAME, Config.PASSWORD);
        List<WebElement> rows = UnitTests.getAllRowsOfTheTable();
        int rowCount = rows.size();
        for (int i = 0; i < rowCount; i++) {
            rows = UnitTests.getAllRowsOfTheTable();
            List<WebElement> columns = rows.get(i).findElements(By.tagName("td"));
            columns.get(1).click(); //clicks on the project name
            if (checkIfProjectIsInaccessible()) return true;
            driver.navigate().back();
            UnitTests.waitForPageLoaded();
        }
        return false;
    }

    private static boolean checkIfProjectIsInaccessible() {
        UnitTests.waitForPageLoaded();
        try {
            driver.findElement(By.className("ant-message-notice"));
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }
}
//Version does not exist or user does not have permission to browse version