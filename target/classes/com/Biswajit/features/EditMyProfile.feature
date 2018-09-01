@EditMyProfile
Feature: Edit My Profile Feature
		This is to check the feature of editing users profle
Scenario: User is able to edit his/her profile in wordpress demo web application
Given user is in edit my profile page
When user is able to choose colour scheme
And user is able to check and uncheck the toolbar option
And user is able to choose his preferred language
And user is able to enter his/her username, password and website name
|username|password|websitename   |
|user1   |pass1   |web1@mail.com |
|user2   |pass2   |web2@mail.com | 
And user is able to write his/her biographical information
|biography               |
|this is user1 biography |
|this is user2 biography |
And user is able to click on generate password
And user is able to click on update profile
Then user profile is updated