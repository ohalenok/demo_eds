let ProductsPage = require("./products_page.js")

let loginBtnLocator = ".login-panel .login-button"
let emailInputLocator = "#email"
let passwordInputLocator = "#userPassword"
let signInBtnLocator = ".iframe-wrap .login-button"
let errorMessageLocator = "#toast-container > div > div.toast-title"
let ValidationMessageLocator = "div.overlay > div > div > div:nth-child(1) span"

class LoginPage {
  constructor() {}

  getLoginBtn() {
    return element(by.css(loginBtnLocator))
  }

  getEmailInput() {
    return element(by.css(emailInputLocator))
  }

  getPasswordInput() {
    return element(by.css(passwordInputLocator))
  }

  getSignInBtn() {
    return element(by.css(signInBtnLocator))
  }

  getErrorMessage() {
    return element(by.css(errorMessageLocator))
  }

  getValidationMessage() {
    return element(by.css(ValidationMessageLocator))
  }

  async login(email, pass) {

    await allure.createStep("Click login button", async () => await this.getLoginBtn().click())()

    await allure.createStep('Enter email "${email}" and password "$(pass)"', async () => {
      await this.getEmailInput().sendKeys(email)
      await this.getPasswordInput().sendKeys(pass)
      await allure.createStep('Click sign in button', async () => await this.getSignInBtn().click())()
    })();

    return new ProductsPage()
  }

  async open() {
    await browser.get('http://eds_university.eleks.com/login')
    return this
  }

  async waitForErrorMessageAvailable() {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getErrorMessage()), 15000)
  }

  async isErrorMessageVisible() {
    await this.waitForErrorMessageAvailable()
    return await this.getErrorMessage().isDisplayed()
  }

  async waitForValidationMessageAvailable() {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getValidationMessage()), 15000)
  }

  async isValidationMessageVisible() {
    await this.waitForValidationMessageAvailable();
    return await this.getValidationMessage().isDisplayed()
  }
}

module.exports = LoginPage