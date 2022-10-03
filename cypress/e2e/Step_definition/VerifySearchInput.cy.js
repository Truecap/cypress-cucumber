import { Then, When, And, Given} from "cypress-cucumber-preprocessor/steps";
import BlogPage from "../Pages/BlogPage";
import HomePage from "../Pages/HomePage";
const home = new HomePage();
const blog = new BlogPage();

Given("I m launch web application", () => {
  home.launchWebApp();
});
When("I hover to resource tab", () => {
  home.openResourcesTab();
});
Then("Resources drop-down is open and I click Blog button", () => {
  home.clickBlogButton();
});
Then("I type 'number pool' to the input field and click enter button", () => {
  blog.typeToSearch();
});
And("I see search results", () => {
  blog.validateForSearch();
});

