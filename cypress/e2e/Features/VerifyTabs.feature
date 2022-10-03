Feature: Tabs on Homepage

  Background:
    Given I m launch web application

  Scenario: Open Company drop-down menu
    When I hover to Company tab
    Then I see open company drop-down menu

  Scenario: Open Pricing drop-down menu
    When I hover to Pricing tab
    Then I see open pricing drop-down menu

  Scenario: Open Products drop-down menu
    When I hover to Products tab
    Then I see open products drop-down menu

  Scenario: Open Solutions drop-down menu
    When I hover to Solutions tab
    Then I see open solutions drop-down menu

  Scenario: Open Resources drop-down menu
    When I hover to Resources tab
    Then I see open resources drop-down menu
    
