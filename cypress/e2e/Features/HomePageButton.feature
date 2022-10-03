Feature: Home page button

  Background:
    Given I m launch web application


  Scenario: Verify home page button
    When I scroll to About us button and click
    Then I see header About us Page
    And I click on Home page button
    Then I see picture on home page

