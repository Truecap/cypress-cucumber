Feature: Search Input

  Background:
    Given I m launch web application


  Scenario: Verify search input
    When I hover to resource tab
    Then Resources drop-down is open and I click Blog button
    Then I type 'number pool' to the input field and click enter button
    And I see search results