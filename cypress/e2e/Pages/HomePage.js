class HomePage {
  get emailInput() {
    return cy.get('form>div>div input[name="email"]');
  }
  get logInBtn() {
    return cy.get('[id="dialogAudio"] +a +a');
  }
  get companyTabBtn() {
    return cy.get('[class*="khahzD"]:nth-child(8)');
  }
  get cookieAcceptBtn() {
    return cy.get('[aria-label="close and deny"]~div>div>button');
  }
  get partnerBtnCompanyDrpDwn() {
    return cy.get('[href="/company/partnerships"]');
  }
  get homePageBtn() {
    return cy.get('[id*="Logo"]');
  }
  get pricingTabBtn() {
    return cy.get('[class*="khahzD"]:nth-child(10)');
  }
  get wirelessBtnPricingDrpDwn() {
    return cy.get('.khahzD [href="/pricing/iot-data-plans"]');
  }
  get productsTabBtn() {
    return cy.get('[class*="khahzD"]:first-child');
  }
  get storageBtnProductsDrpDwn() {
    return cy.get('.khahzD [href="/products/storage"]');
  }
  get solutionsTabBtn() {
    return cy.get('[class*="khahzD"]:nth-child(3)');
  }
  get contactCenterBtnSolutionsDrpDwn() {
    return cy.get('.khahzD [href="/use-cases/contact-center"]');
  }
  get eightElementsProductsDrpDwn() {
    return cy.get('header .mchNoDecorate[href*="/products/"]');
  }
  get footerAboutUsBtn() {
    return cy.get('.fwhIL [href="/company/about"]');
  }
  get homePagePctr() {
    return cy.get("main .iWyYNE");
  }
  get resourcesTabBtn() {
    return cy.get('[class*="khahzD"]:nth-child(6)');
  }
  get blogBtnResorcesDrpDwn() {
    return cy.get('header .mchNoDecorate[href="/resources"');
  }
  get savingCalculatorBtnResourcesDrpDwn() {
    return cy.get('[href="/twilio-pricing-calculator"]');
  }
  get expertBtn() {
    return cy.get('header ul>li [href="/contact-us"]');
  }
  get networkTab() {
    return cy.get('.gdETaM [href="/solutions/global-ip-network"]');
  }
  get headerNetworkLink() {
    return cy.get("h1 span");
  }
  get smsApiPricingDrpDwn() {
    return cy.get('header [href="/pricing/messaging"]');
  }
  get aboutUsHeader() {
    return cy.get('[class*="clUAcO"]');
  }

  launchWebApp() {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com/");
    cy.get("body").then((body) => {
      if (
        body.find('[aria-label="close and deny"]~div>div>button', {
          timeout: 30000,
        }).length > 0
      ) {
        cy.get('[aria-label="close and deny"]~div>div>button').click({
          timeout: 10000,
        });
      }
    });
  }

  clickHomePageBtn() {
    this.homePageBtn.click();
  }
  validateHomePageButton() {
    this.homePagePctr.should("be.visible");
  }
  clickLogInButton() {
    this.logInBtn.click();
  }
  clickNetworkTab() {
    this.networkTab.click();
  }
  validateOpenDrpDwnNetworkTab() {
    this.headerNetworkLink.should(
      "be.visible",
      "have.text",
      "The Global, Private Network Built for Real-Time Comms."
    );
  }
  openCompanyTab() {
    this.companyTabBtn.realHover({ position: "bottomLeft" });
  }
  validateOpenDrpDwnCompanyTab() {
    this.partnerBtnCompanyDrpDwn.should("be.visible");
    this.homePageBtn.realClick();
    this.homePagePctr.should("be.visible");
  }
  openPricingTab() {
    this.pricingTabBtn.realHover({ position: "bottomLeft" });
  }
  validateOpenDrpDwnPricingTab() {
    this.wirelessBtnPricingDrpDwn.should("be.visible");
    this.homePageBtn.realClick();
    this.homePagePctr.should("be.visible");
  }
  clickSmsApiButton() {
    this.smsApiPricingDrpDwn.click();
  }
  openProductsTab() {
    this.productsTabBtn.realHover({ position: "bottomLeft" });
  }
  validateOpenDrpDwnProductsTab() {
    this.storageBtnProductsDrpDwn.should("be.visible");
    this.homePageBtn.realClick();
    this.homePagePctr.should("be.visible");
  }
  openSolutionsTab() {
    this.solutionsTabBtn.realHover({ position: "bottomLeft" });
  }
  validateOpenDrpDwnSolutionsTab() {
    this.contactCenterBtnSolutionsDrpDwn.should("be.visible");
    this.homePageBtn.realClick();
    this.homePagePctr.should("be.visible");
  }
  clickContactCenterBtn() {
    this.contactCenterBtnSolutionsDrpDwn.click();
  }
  openResourcesTab() {
    this.resourcesTabBtn.realHover({ position: "bottomLeft" });
  }
  clickSavingCalculatorButton() {
    this.savingCalculatorBtnResourcesDrpDwn.click();
  }
  validateOpenDrpDwnRecourcesTab() {
    this.blogBtnResorcesDrpDwn.should("be.visible");
    this.homePageBtn.realClick();
    this.homePagePctr.should("be.visible");
  }
  clickBlogButton() {;
    this.blogBtnResorcesDrpDwn.click();
    cy.url().should("include", "/resources");
  }
  clickAboutUsButton() {
    this.footerAboutUsBtn.scrollIntoView();
    this.footerAboutUsBtn.click();
  }
  validateAboutUsPage() {
    this.aboutUsHeader.should("be.visible");
  }
}
export default HomePage;
