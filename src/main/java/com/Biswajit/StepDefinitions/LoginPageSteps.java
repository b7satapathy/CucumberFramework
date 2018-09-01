package com.Biswajit.StepDefinitions;

import org.testng.annotations.Listeners;
import org.testng.asserts.SoftAssert;
import org.openqa.selenium.By;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import com.Biswajit.Pages.LoginPage;
import com.Biswajit.TestBase.TestBase;

@Listeners(com.Biswajit.utility.Screenshot.class)
public class LoginPageSteps extends TestBase {

	public LoginPageSteps() {
		super();
	}

	@Before
	public void setUp() {
		initializeBrowser();
	}
	
	LoginPage login;
	
	@Given("^user enters valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_valid_and(String userid, String password) throws Throwable {
		login=new LoginPage(); 
		login.enterUserIDandPassword(userid, password);
	}

	@When("^users clicks on login button$")
	public void users_clicks_on_login_button() throws Throwable {
		login=new LoginPage(); 
		login.clickOnloginButton();
	}

	@Then("^user should be logged in and redirected to the Homepage$")
	public void user_should_be_logged_in_and_redirected_to_the_Homepage() throws Throwable {
		SoftAssert a=new SoftAssert();

		String expectedTitle = "Dashboard ‹ Wordpress Demo Site at Demo.Center — WordPress";
		a.assertEquals(driver.getTitle(), expectedTitle);
		a.assertAll();
	}

	@Given("^user enters invalid \"([^\"]*)\" and \"([^\"]*)\" combination$")
	public void user_enters_invalid_and_combination(String userid, String password) throws Throwable {
		login=new LoginPage(); 
		login.enterUserIDandPassword(userid, password);
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		login=new LoginPage(); 
		login.clickOnloginButton();
	}

	@Then("^error message should come$")
	public void error_message_should_come() throws Throwable {
		System.out.println(driver.findElement(By.xpath("//div[@id='login_error']")));
	}

	@And("^user must not be logged in to the application$")
	public void user_must_not_be_logged_in_to_the_application() throws Throwable {
		SoftAssert a=new SoftAssert();
		a.assertEquals(driver.getTitle(), "Log In ‹ Wordpress Demo Site at Demo.Center — WordPress");
		a.assertAll();
	}

	@Given("^logo is displayed$")
	public void logo_is_displayed() throws Throwable {
		SoftAssert a=new SoftAssert();
		a.assertTrue(driver.findElement(By.xpath("//*[@id='login']/h1/a")).isDisplayed());
		a.assertAll();
	}

	@And("^forgot password link is displayed$")
	public void forgot_password_link_is_displayed() throws Throwable {
		SoftAssert a=new SoftAssert();
		a.assertTrue(driver.findElement(By.xpath("//*[@id='nav']/a")).isDisplayed());
		a.assertAll();
	}

	@When("^click on forgot password link$")
	public void click_on_forgot_password_link() throws Throwable {
		driver.findElement(By.xpath("//*[@id='nav']/a")).click();
	}

	@Then("^page should be redirected to reset login credentials$")
	public void page_should_be_redirected_to_reset_login_credentials() throws Throwable {
		SoftAssert a=new SoftAssert();
		a.assertEquals(driver.getTitle(), "Lost Password ‹ Wordpress Demo Site at Demo.Center — WordPress");
		a.assertAll();
	}

	@After
	public void closeBrowser() {
		tearDown();
	}

}

