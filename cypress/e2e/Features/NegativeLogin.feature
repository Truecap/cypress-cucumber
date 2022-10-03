Feature: Negative Log in

  Background:
    Given I m launch web application


  Scenario: Log In with invalid email
    When I click Log in button
    Then I enter Invalid email and my password
    And I click submit button
    And I see error message



  Scenario: Log In with invalid password
    When I click Log in button
    Then I enter my email and invalid password
    And I click submit button
    And I see error message



