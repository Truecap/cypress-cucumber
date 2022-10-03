Feature: Clickability buttons

  Background:
    Given I m launch web application


  Scenario: Verify clickability buttons
    When I hover on solutions tab
    Then Solutons drop-down is open and I click contact center button
    Then I scroll to Phone Calls button and click
    And I see Sip-trunks page header
    Then I click back
    And I click Text Messages button
    Then I see Sms Api page header
    Then I click back again
    And I click Browser Based button
    Then I see webrtc page header
 