import { Then, When, And, Given} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../Pages/HomePage";
const home = new HomePage();

Given("I m launch web application", () => {
  home.launchWebApp();
});
When("I hover to Company tab", () => {
  home.openCompanyTab();
});
Then("I see open company drop-down menu", () => {
  home.validateOpenDrpDwnCompanyTab();
})

When("I hover to Pricing tab", () => {
  home.openPricingTab();
});
Then("I see open pricing drop-down menu", () => {
  home.validateOpenDrpDwnPricingTab();
});

When("I hover to Products tab", () => {
  home.openProductsTab();
});
Then("I see open products drop-down menu", () => {
  home.validateOpenDrpDwnProductsTab();
});

When("I hover to Solutions tab", () => {
  home.openSolutionsTab();
});
Then("I see open solutions drop-down menu", () => {
  home.validateOpenDrpDwnSolutionsTab();
});

When("I hover to Resources tab", () => {
  home.openResourcesTab();
});
Then("I see open resources drop-down menu", () => {
  home.validateOpenDrpDwnRecourcesTab();
});
