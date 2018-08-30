package com.Biswajit.TestBase;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {
	
	public static WebDriver driver;
	public static Properties prop;
	public static FileInputStream fis;
	
	public TestBase() {
		
		try {
			prop=new Properties();
			fis=new FileInputStream("src\\main\\java\\com\\Biswajit\\config\\config.properties");
			prop.load(fis);
		} catch (FileNotFoundException e) {
			
			e.printStackTrace();
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	}
	
	public static void initializeBrowser()  {
		
		
		
		if(prop.getProperty("browser").equals("chrome")) {
		
		System.setProperty("webdriver.chrome.driver", "src\\main\\java\\com\\Biswajit\\drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		}
		
		else if(prop.getProperty("browser").equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", "src\\main\\java\\com\\Biswajit\\drivers\\geckodriver.exe");
			driver=new FirefoxDriver();
		}
		
		driver.manage().window().maximize();
		
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		
		driver.get(prop.getProperty("url"));
		
	}
	
	public void failedTest() {
		File sourceFile= ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(sourceFile, new File ("Screenshots\\failedtest.png"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void login() {
		
		driver.findElement(By.id("user_login")).sendKeys(prop.getProperty("username"));
		driver.findElement(By.id("user_pass")).sendKeys(prop.getProperty("password"));
		driver.findElement(By.id("wp-submit")).click();
	}
	
	public void tearDown() {
		driver.quit();
	}

}



