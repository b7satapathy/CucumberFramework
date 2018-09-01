package com.Biswajit.StepDefinitions;

import java.util.List;
import java.util.Map;

import org.testng.Assert;

import com.Biswajit.Pages.EditMyProfilePage;
import com.Biswajit.TestBase.TestBase;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EditMyProfileSteps extends TestBase{
	
	public EditMyProfileSteps() {
		super();
	}

	
	
	EditMyProfilePage editProfile;
	
	@Given("^user is in edit my profile page$")
	public void user_is_in_edit_my_profile_page() throws Throwable {
		initializeBrowser();
		login();
		editProfile=new EditMyProfilePage();
		editProfile.validatePageURL();
		String CurrentUrl=driver.getCurrentUrl();
	    String ExpectedUrl="http://demosite.center/wordpress/wp-admin/profile.php";
	    Assert.assertEquals(CurrentUrl, ExpectedUrl);
	}

	@When("^user is able to choose colour scheme$")
	public void user_is_able_to_choose_colour_scheme() throws Throwable {
		editProfile=new EditMyProfilePage();
		editProfile.chooseColorTheme();
	}

	@When("^user is able to check and uncheck the toolbar option$")
	public void user_is_able_to_check_and_uncheck_the_toolbar_option() throws Throwable {
		editProfile=new EditMyProfilePage();
		editProfile.checkToolbar();
	   
	}

	@When("^user is able to choose his preferred language$")
	public void user_is_able_to_choose_his_preferred_language() throws Throwable {
		editProfile=new EditMyProfilePage();
		editProfile.selectLanguage();
	}

	@When("^user is able to enter his/her username, password and website name$")
	public void user_is_able_to_enter_his_her_username_password_and_website_name(DataTable dt1) throws Throwable {
		
		List<Map<String, String>> list = dt1.asMaps(String.class, String.class);
		for(int i=0; i<list.size(); i++) {
			editProfile=new EditMyProfilePage();
			
			editProfile.enterUserDetails( list.get(i).get("username"), list.get(i).get("password"), list.get(i).get("websitename") );
			
		}
	}

	@When("^user is able to write his/her biographical information$")
	public void user_is_able_to_write_his_her_biographical_information(DataTable dt2) throws Throwable {
		List<Map<String, String>> list = dt2.asMaps(String.class, String.class);
		for(int i=0; i<list.size(); i++) {
			editProfile=new EditMyProfilePage();
			
			editProfile.biographicalInfo(list.get(i).get("biography"));
			
		}
	   
	}

	@When("^user is able to click on generate password$")
	public void user_is_able_to_click_on_generate_password() throws Throwable {
		editProfile=new EditMyProfilePage();
		editProfile.clickOnGeneratePassword();
	}

	@When("^user is able to click on update profile$")
	public void user_is_able_to_click_on_update_profile() throws Throwable {
		editProfile=new EditMyProfilePage();
		editProfile.clickOnUpdateProfileButton();
	}

	@Then("^user profile is updated$")
	public void user_profile_is_updated() throws Throwable {
		editProfile=new EditMyProfilePage();
		System.out.println("profile updated");
	}
	
	


}
