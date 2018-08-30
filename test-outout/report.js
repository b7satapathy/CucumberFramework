$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/Biswajit/features/loginPageTest.feature");
formatter.feature({
  "line": 2,
  "name": "Login page functionality",
  "description": "\r\nDescription: It is to check the login functionality of the demo.wordpress WebApplication\r\n       with valid and invalid login credentials.\r\n       and to check the links and logo of the WebApplication is displyed.",
  "id": "login-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Login with valid credentilas",
  "description": "",
  "id": "login-page-functionality;login-with-valid-credentilas",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user enters valid \"\u003cuserid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "users clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should be logged in and redirected to the Homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-page-functionality;login-with-valid-credentilas;",
  "rows": [
    {
      "cells": [
        "userid",
        "password"
      ],
      "line": 17,
      "id": "login-page-functionality;login-with-valid-credentilas;;1"
    },
    {
      "cells": [
        "admin",
        "demo123"
      ],
      "line": 18,
      "id": "login-page-functionality;login-with-valid-credentilas;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Login with valid credentilas",
  "description": "",
  "id": "login-page-functionality;login-with-valid-credentilas;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enters valid \"admin\" and \"demo123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "users clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should be logged in and redirected to the Homepage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-page-functionality;login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "user enters invalid \"\u003cuserid\u003e\" and \"\u003cpassword\u003e\" combination",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "error message should come",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user must not be logged in to the application",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "login-page-functionality;login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "userid",
        "password"
      ],
      "line": 31,
      "id": "login-page-functionality;login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        ""
      ],
      "line": 32,
      "id": "login-page-functionality;login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "",
        "demo123"
      ],
      "line": 33,
      "id": "login-page-functionality;login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "demo123",
        "admin"
      ],
      "line": 34,
      "id": "login-page-functionality;login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-page-functionality;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters invalid \"admin\" and \"\" combination",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "error message should come",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user must not be logged in to the application",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-page-functionality;login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters invalid \"\" and \"demo123\" combination",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "error message should come",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user must not be logged in to the application",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 34,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-page-functionality;login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters invalid \"demo123\" and \"admin\" combination",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "error message should come",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user must not be logged in to the application",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 38,
  "name": "Wordpress Logo is displyed on the login page and Forgot password link is displayed",
  "description": "",
  "id": "login-page-functionality;wordpress-logo-is-displyed-on-the-login-page-and-forgot-password-link-is-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "logo is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "forgot password link is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on forgot password link",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "page should be redirected to reset login credentials",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});