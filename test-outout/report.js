$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EditMyProfile.feature");
formatter.feature({
  "line": 2,
  "name": "Edit My Profile Feature",
  "description": "This is to check the feature of editing users profle",
  "id": "edit-my-profile-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EditMyProfile"
    }
  ]
});
formatter.before({
  "duration": 12626372708,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User is able to edit his/her profile in wordpress demo web application",
  "description": "",
  "id": "edit-my-profile-feature;user-is-able-to-edit-his/her-profile-in-wordpress-demo-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is in edit my profile page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is able to choose colour scheme",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is able to check and uncheck the toolbar option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is able to choose his preferred language",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is able to enter his/her username, password and website name",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "websitename"
      ],
      "line": 10
    },
    {
      "cells": [
        "user1",
        "pass1",
        "web1@mail.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "user2",
        "pass2",
        "web2@mail.com"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user is able to write his/her biographical information",
  "rows": [
    {
      "cells": [
        "biography"
      ],
      "line": 14
    },
    {
      "cells": [
        "this is user1 biography"
      ],
      "line": 15
    },
    {
      "cells": [
        "this is user2 biography"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user is able to click on generate password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user is able to click on update profile",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user profile is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "EditMyProfileSteps.user_is_in_edit_my_profile_page()"
});
formatter.result({
  "duration": 12197067349,
  "error_message": "java.lang.AssertionError: expected [http://demosite.center/wordpress/wp-admin/profile.php] but found [http://demosite.center/wordpress/wp-admin/about.php]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.Biswajit.StepDefinitions.EditMyProfileSteps.user_is_in_edit_my_profile_page(EditMyProfileSteps.java:34)\r\n\tat ✽.Given user is in edit my profile page(EditMyProfile.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditMyProfileSteps.user_is_able_to_choose_colour_scheme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditMyProfileSteps.user_is_able_to_check_and_uncheck_the_toolbar_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditMyProfileSteps.user_is_able_to_choose_his_preferred_language()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditMyProfileSteps.user_is_able_to_enter_his_her_username_password_and_website_name(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditMyProfileSteps.user_is_able_to_write_his_her_biographical_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditMyProfileSteps.user_is_able_to_click_on_generate_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditMyProfileSteps.user_is_able_to_click_on_update_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditMyProfileSteps.user_profile_is_updated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 854407212,
  "status": "passed"
});
});