import { Then, When, And, Given} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../Pages/HomePage";

const home = new HomePage();

Given("I m launch web application", () => {
  home.launchWebApp();
});
When("I scroll to About us button and click", () => {
  home.clickAboutUsButton();
});
Then("I see header About us Page", () => {
  home.validateAboutUsPage();
});
And("I click on Home page button", () => {
  home.clickHomePageBtn();
});
Then("I see picture on home page", () => {
  home.validateHomePageButton();
});
