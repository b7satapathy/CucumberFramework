package com.Biswajit.Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Biswajit.TestBase.TestBase;

public class LoginPage extends TestBase {
	
	
	@FindBy(id="user_login")
	WebElement useridBox;
	
	@FindBy(id="user_pass")
	WebElement passwordBox;
	
	@FindBy(id="wp-submit")
	WebElement submitButton;
	
	public LoginPage() {
		
		PageFactory.initElements(driver, this);
	}
	
	public void enterUserIDandPassword(String username, String Password) {
		useridBox.sendKeys(username);
		passwordBox.sendKeys(Password);
		
	}
	
	public void clickOnloginButton() {
		submitButton.click();
	}

}

