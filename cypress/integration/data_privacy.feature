Feature: Data and privacy link

    Feature User go to ti explore product by cicking button

    Scenario: User click on data and privacy button them go sub page
    Given A user open site page
    When A user clicks on green button
    And A user clicks on data and privacy button and go to that page 
    Then A user will go to correct page with label links-jumps to product update, faq, comlianse and data transfere

    Scenario: User click on data and privacy button them go sub page then click on link learn more about Data Locality
    Given A user open site page
    When A user clicks on data and privacy button and go to that page 
    And A user clicks on link Learn more to see what about DL in Mission Control Portal
    Then A user will go to correct page with label "Data Locality Released to General Availability"