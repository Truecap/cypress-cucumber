import HomePage from "../Pages/HomePage";
const home = new HomePage();

class ContactCenterPage {
  get phoneCallsButton() {
    return cy.get('.epRMTm [href="/products/sip-trunks"]');
  }
  get phoneCallsHeader() {
    return cy.get("h1>span");
  }
  get textMessagesButton() {
    return cy.xpath('//*[text()= "Explore SMS API"]');
  }
  get textMessagesHeader() {
    return cy.get("h1>span");
  }
  get browserBasedCommsButton() {
    return cy.xpath('//*[text()= "Explore WebRTC"]');
  }
  get browserBasedCommsHeader() {
    return cy.get("h1>span");
  }

  clickPhoneCallsBtn() {
    home.homePageBtn.realHover({ position: "bottomLeft" });
    this.phoneCallsButton.scrollIntoView();
    this.phoneCallsButton.click();
  }
  validatePhoneCallsButton() {
    this.phoneCallsHeader
      .should("be.visible")
      .and("have.text", "SIP Trunking for instant, unlimited global scale.");

  }
  clickMessagesBtn() {
    this.textMessagesButton.click();
  }
  validateTextMessagesButton() {
    this.textMessagesHeader.should("be.visible").and("have.text", "SMS API");

  }
  clickBrowserBasedBtn() {
    this.browserBasedCommsButton.click();
  }
  validateBassedCommsButton() {
    this.browserBasedCommsHeader
      .should("be.visible")
      .and("have.text", "WebRTC for real-time, contextual communications");
  }
}
export default ContactCenterPage;
