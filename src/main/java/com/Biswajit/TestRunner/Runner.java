package com.Biswajit.TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;



	@CucumberOptions(
			features = "src\\main\\java\\com\\Biswajit\\features", 
			tags= {"~@loginpage"},
			glue={"src\\test\\java\\com\\Biswajit\\StepDefinitions"}, 
			format= {"pretty","html:test-outout"}, 
			monochrome = true,
			strict = true,
			dryRun = true			
			)


	public class Runner extends AbstractTestNGCucumberTests{


	}

