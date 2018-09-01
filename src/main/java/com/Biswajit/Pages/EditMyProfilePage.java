package com.Biswajit.Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.Biswajit.TestBase.TestBase;

public class EditMyProfilePage extends TestBase{
	
	@FindBy (xpath="//*[@id='wp-admin-bar-my-account']/a/span")
	WebElement mouseHoverToAdminTab; 
	
	@FindBy (xpath="//li[@id='wp-admin-bar-edit-profile']/a")
	WebElement clickOnEditMyProfile;
	
	@FindBy (xpath="//input[@id='admin_color_light']")
	WebElement lightTheme;
	
	@FindBy (xpath="(//input[contains(@type,'checkbox')])[4]")
	WebElement toolbarCheckBox;
	
	@FindBy (xpath="//select[@id='locale']")
	WebElement languageDropdown;
	
	@FindBy (xpath="//*[@id='first_name']")
	WebElement firstName;
	
	@FindBy (xpath="//*[@id='last_name']")
	WebElement lastName;
	
	@FindBy (xpath="//*[@id='url']")
	WebElement websiteName;
	
	@FindBy (xpath="//*[@id='description']")
	WebElement biography;
	
	@FindBy (xpath="//*[@id='password']/td/button")
	WebElement generatePasswordButton;
	
	@FindBy (xpath="//*[@id='submit']")
	WebElement updateProfileButton;
	
	
	public EditMyProfilePage() {
		PageFactory.initElements(driver, this);
	}
	
	public void validatePageURL() {
		
		Actions a = new Actions(driver);
		a.moveToElement(mouseHoverToAdminTab).build().perform();
		a.moveToElement(clickOnEditMyProfile).click().build().perform();
		
	}
	
	public void chooseColorTheme() {
		
		lightTheme.click();
	}
	
    public void checkToolbar() {
    	toolbarCheckBox.click();
		
	}
    
    public void selectLanguage() {
    	Select s=new Select(languageDropdown);
    	s.selectByIndex(1);
    
	}
	
    public void enterUserDetails(String name, String pwd, String web) {
    	
    	firstName.sendKeys(name);
    	lastName.sendKeys(pwd);
    	websiteName.sendKeys(web);
	}
	
    public void biographicalInfo(String info) {
    	biography.sendKeys(info);
    }
    
    public void clickOnGeneratePassword() {
    	generatePasswordButton.click();
    }
    
    public void clickOnUpdateProfileButton() {
    	updateProfileButton.click();
    }

}
