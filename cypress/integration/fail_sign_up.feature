Feature: Sign up Feature

    Feature This Feature is require for a user to try Sign up with bad credantials.

    Scenario: Fail to create with bad email
    Given A user open site page
    When A user clicks on green button
    And A user clicks on Sing up button
    And A user enter the email "bademail@gmail"
    And A user enter the Full name "John Doe"
    And A user enter the password "qweQWE123!@#"
    And A user clicks on Create account button
    Then A user will receive a blocked message the field Email is required

    Scenario: Fail to create with bad full name
    Given A user open site page
    When A user clicks on Sing up button
    And A user enter the email "good@gmail.com"
    And A user enter the Full name " "
    And A user enter the password "qweQWE123!@#"
    And A user clicks on Create account button
    Then A user will receive a blocked message the field Full name is required

    Scenario: Fail to create with bad password
    Given A user open site page
    When A user clicks on Sing up button
    And A user enter the email "good@gmail.com"
    And A user enter the Full name "John Doe"
    And A user enter the password "password"
    And A user clicks on Create account button
    Then A user will receive a blocked message about range, number, symbol and upper-case letter

    Scenario: Fail to create with passed checkbox
    Given A user open site page
    When A user clicks on Sing up button
    And A user enter the email "good@gmail.com"
    And A user enter the Full name "John Doe"
    And A user enter the password "qweQWE123!@#"
    And A user clicks on Create account button
    Then A user will receive a blocked message to tap checkbox is required
