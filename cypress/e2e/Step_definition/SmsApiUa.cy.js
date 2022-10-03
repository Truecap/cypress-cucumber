import { Then, When, And, Given} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../Pages/HomePage";
import MessagingPage from "../Pages/MessagingPage";

const home = new HomePage();
const messaging = new MessagingPage();

Given("I m launch web application", () => {
  home.launchWebApp();
});
When("I hover on pricing tab", () => {
  home.openPricingTab();
});
Then("Pricng drop-down is open and I click Sms Api button", () => {
  home.clickSmsApiButton();
});
Then("I choose Ulkraine from country drop-down menu", () => {
  messaging.chooseUkraine();
});
And("I see price in usd", () => {
  messaging.validatePriceForUsd();
});

And("I choose euro from currency drop-down", () => {
  messaging.chooseEuro();
});
Then("I see price in euro", () => {
  messaging.validatePriceForEuro();
});
