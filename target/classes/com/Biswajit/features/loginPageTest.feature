@loginpage
Feature: Login page functionality 

	Description: It is to check the login functionality of the demo.wordpress WebApplication
         with valid and invalid login credentials.
         and to check the links and logo of the WebApplication is displyed.
          

	Scenario Outline: Login with valid credentilas 

	Given user enters valid "<userid>" and "<password>" 
	When users clicks on login button 
	Then user should be logged in and redirected to the Homepage 
	
	Examples: 
	
		|userid|password|
		|admin |demo123 |
		
		
	
	Scenario Outline: Login with invalid credentials 
	
		Given user enters invalid "<userid>" and "<password>" combination 
		When user clicks on login button 
		Then error message should come 
		And user must not be logged in to the application 
		
		Examples: 
		
			|     userid       |   password            |
			|      admin       |                       |
			|                  |   demo123             |			
			|     demo123      |    admin              |
			
			
		
	Scenario: Wordpress Logo is displyed on the login page and Forgot password link is displayed 
	
		Given logo is displayed 
		And forgot password link is displayed 
		When click on forgot password link 
		Then page should be redirected to reset login credentials