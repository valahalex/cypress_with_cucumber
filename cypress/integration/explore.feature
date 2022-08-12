Feature: Explore product button

    Feature User go to to explore product by cicking button

    Scenario: Click on explore product button
    Given A user open site page
    When A user clicks on green button
    And A user clicks on explore product button
    Then A user will go to explore product page with label "Products"

    Scenario: Go to see a price of some product
    Given A user open site page
    When A user clicks on explore product button
    And A user clicks on sms button
    And A user clicks on See sms pricing button
    Then A user will go to page with pricing and it will have the label "Messaging pricing"