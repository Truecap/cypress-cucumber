import { Then, When, And, Given} from "cypress-cucumber-preprocessor/steps";
import ContactCenterPage from "../Pages/ContactCenterPage";
import HomePage from "../Pages/HomePage";

const home = new HomePage();
const contactCenter = new ContactCenterPage();

Given("I m launch web application", () => {
  home.launchWebApp();
});
When("I hover on solutions tab", () => {
  home.openSolutionsTab();
});
Then("Solutons drop-down is open and I click contact center button", () => {
  home.clickContactCenterBtn();
});
Then("I scroll to Phone Calls button and click", () => {
  contactCenter.clickPhoneCallsBtn();
});
And("I see Sip-trunks page header", () => {
  contactCenter.validatePhoneCallsButton();
});
Then("I click back", () => {
  cy.go('back');
});
And("I click Text Messages button", () => {
  contactCenter.clickMessagesBtn();
});
Then("I see Sms Api page header", () => {
  contactCenter.validateTextMessagesButton();
});
Then("I click back again", () => {
  cy.go('back');
});
And("I click Browser Based button", () => {
  contactCenter.clickBrowserBasedBtn();
});
Then("I see webrtc page header", () => {
  contactCenter.validateBassedCommsButton();
});

