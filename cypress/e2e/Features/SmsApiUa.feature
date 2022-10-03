Feature: Sms Api

  Background:
    Given I m launch web application


  Scenario: Find price for sms api for Ukraine in usd
    When I hover on pricing tab
    Then Pricng drop-down is open and I click Sms Api button
    Then I choose Ulkraine from country drop-down menu
    And I see price in usd



  Scenario: Find price for sms api for Ukraine in euro
    When I hover on pricing tab
    Then Pricng drop-down is open and I click Sms Api button
    Then I choose Ulkraine from country drop-down menu
    And I choose euro from currency drop-down
    Then I see price in euro



