import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
const home = new HomePage();
const login = new LoginPage();

Given("I m launch web application", () => {
  home.launchWebApp();
});

When("I click Log in button", () => {
  home.clickLogInButton();
});
Then("I enter Invalid email and my password", () => {
  login.enterInvalidEmail();
  login.enterPassword();
});
And("I click submit button", () => {
  login.clickSumbitButton();
});
And("I see error message", () => {
  login.validateLoginError();
});

Then("I enter my email and invalid password", () => {
  login.enterInvaliPassword();
  login.enterEmail();
});
And("I click submit button", () => {
  login.clickSumbitButton();
});
And("I see error message", () => {
  login.validateLoginError();
});
