import HomePage from "./HomePage";
const home = new HomePage();

class MessagingPage {
  get countryDrpDwn() {
    return cy.get(".hIHHxS>div:nth-of-type(1)", { timeout: 10000 });
  }
  get currencyDrpDwn() {
    return cy.get(".hIHHxS>div:nth-of-type(2)");
  }
  get ukraineFromDrpDwn() {
    return cy.get('[href="/pricing/messaging/ua"]');
  }
  get priceSmsUaUsd() {
    return cy.xpath("//*[text() = '$0.104']");
  }
  get priceSmsUaEur() {
    return cy.xpath("//*[text() = '€0.103']");
  }
  get euroFromDrpDwnCurrency() {
    return cy.xpath('//div[text() ="EUR"]');
  }

  chooseEuro() {
    home.homePageBtn.realHover({ position: "bottomLeft" });
    this.currencyDrpDwn.click();
    this.euroFromDrpDwnCurrency.click();
    this.currencyDrpDwn.should("contain.text", "EUR");
  }
  validatePriceForUsd() {
    this.priceSmsUaUsd.should("contain.text", "$0.104");
  }

  chooseUkraine() {
    home.homePageBtn.realHover({ position: "bottomLeft" });
    this.countryDrpDwn.click();
    this.ukraineFromDrpDwn.scrollIntoView();
    this.ukraineFromDrpDwn.click();
    this.countryDrpDwn.should("contain.text", "Ukraine");
  }
  validatePriceForEuro() {
    this.priceSmsUaEur.should("contain.text", "€0.103");
  }
}
export default MessagingPage;
