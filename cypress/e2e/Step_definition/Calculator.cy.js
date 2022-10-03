import { Then, When, And, Given} from "cypress-cucumber-preprocessor/steps";
import CalculatorPage from "../Pages/CalculatorPage";
import HomePage from "../Pages/HomePage";

const home = new HomePage();
const calculator = new CalculatorPage();

Given("I m launch web application", () => {
  home.launchWebApp();
});
When("I hover on resource tab", () => {
  home.openResourcesTab();
});
Then("Resources drop-down is open and I click Saving Calculator button", () => {
  home.clickSavingCalculatorButton();
});
Then("I click Messaging Api button", () => {
  calculator.clickMessagingApiBtn();
});
And("I click continue button", () => {
  calculator.clickContinueButton();
});
And("I type '1' to the Local Numbers input", () => {
  calculator.enterLocalNumbersInput();
});
And("I type '1' to the Toll-free Numbers", () => {
  calculator.enterTollFreeNumbersInput();
});
Then("I click continue button again", () => {
  calculator.clickContinueButton();
});
And("I see posible savings", () => {
  calculator.validateSavingCalculator();
});
