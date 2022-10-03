const email = "testsne13@gmail.com";
const password = "Test1234test!";
const invalidEmail = "someemail@gmail.com";
const invalidPassword = "12345";

class LoginPage {
  get emailInput() {
    return cy.get('form>div>div input[name="email"]');
  }
  get passwordInput() {
    return cy.get('form>div>div input[name="password"]');
  }
  get submitButton() {
    return cy.get('button[class*="LoginForm__LoginButton"]');
  }
  get errorMessage() {
    return cy.get('[class*="ilxvtf"]');
  }

  enterInvalidEmail() {
    this.emailInput.type(invalidEmail);
  }
  enterEmail() {
    this.emailInput.type(email);
  }
  enterPassword() {
    this.passwordInput.type(password);
  }
  enterInvaliPassword() {
    this.passwordInput.type(invalidPassword);
  }
  clickSumbitButton() {
    this.submitButton.click();
  } 
  validateLoginError() {
    this.errorMessage.should("be.visible");
  }
}
export default LoginPage;
