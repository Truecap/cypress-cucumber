Feature:Calculator

  Background:
    Given I m launch web application


  Scenario: Verify saving calculator
    When I hover on resource tab
    Then Resources drop-down is open and I click Saving Calculator button
    Then I click Messaging Api button
    And I click continue button
    And I type '1' to the Local Numbers input
    And I type '1' to the Toll-free Numbers
    Then I click continue button again
    And I see posible savings
   