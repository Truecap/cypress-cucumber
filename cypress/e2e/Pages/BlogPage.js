import HomePage from "../Pages/HomePage";
const home = new HomePage();

class BlogPage {
  get searchInput() {
    return cy.get('[type="search"]');
  }
  get searchingResults() {
    return cy.get('[id="articles"]');
  }

  typeToSearch() {
    home.homePageBtn.realHover({ position: "bottomLeft" });
    this.searchInput.clear().type("number pool").type("{enter}");
  }
  validateForSearch() {
    this.searchingResults.should("be.visible");
  }
}
export default BlogPage;
