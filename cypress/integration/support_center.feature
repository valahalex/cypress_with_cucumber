Feature: Suport center button

    Feature User go to suport center and try search and another button

    Scenario: Search in suport center
    Given A user open site page
    When A user clicks on green button
    And A user clicks on Suport center button
    And A user enter in search field "test" and tap enter 
    Then A user will receive a message - search result about "test"

    Scenario: Getting Started menu in suport center
    Given A user open site page
    When A user clicks on Suport center button
    And A user clicks on Getting Started section   
    Then A user will see a "Getting Started" label
    Then A title of current page is eq "Getting Started"