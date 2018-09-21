let EditProductPage = require("./editProduct_page.js")

let productNameInputLocator = "#product-name"
let productFamilyDropdownLocator = "button.dropdown-toggle.form-control.multiselect-dropdown span"
let saveBtnLocator = "#saveProductAdd"
let productFamilyLocator ="#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > ul > li:nth-child(3) > a > span"
//let productFamilyInputLocator = "form-control ng-pristine ng-valid ng-touched"
let productFamilyInputLocator = "ul .input-group .form-control"

let productIdLocator = '.section-title.display-mode .section-title__details-id'  
let errorMessageLocator = ".validation-message.validation-message__name"
let validationMessageLocator = "div.validation-message"
let successMessageLocator = "#toast-container > div > div:nth-child(2) > span"
let cancelBtnLocator = ".section-heading .section-title__details .btn.gds-btn.gds-btn-default" 
let noProductsLocator ='li.preview-list__header .col-md-12 p'
let searchInputLocator =  "body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div.col-xs-12.section-body > search-field > div > input" 
let foundProductLocator = "preview-list__item active selected"
let editIconLocator = "button.btn.gds-btn-icon.gds-edit-icon"

class NewProductPage {
    constructor() {
        browser.waitForAngularEnabled(false)
    }

    getProductNameInput() {
        return element(by.css(productNameInputLocator))
    }

    getProductFamilyDropdown() {
        return element(by.css(productFamilyDropdownLocator))
    }

    getProductFamilyLocator() {
        return element(by.css(productFamilyLocator))
    }
    getProductFamilyInput() {
        return element(by.css(productFamilyInputLocator))
    }

    getSuccessMessage() {
        return element(by.css(successMessageLocator))
    }

    getCancelBtn() {
        return element(by.css(cancelBtnLocator))
    }

    getSaveBtn() {
        return element(by.css(saveBtnLocator))
    }

    getProductId() {
        return element(by.css(productIdLocator))
    }

    getErrorMessage() {
        return element(by.css(errorMessageLocator))
    }

    getValidationMessage() {
        return element(by.css(validationMessageLocator))
    }
   
    getProductSearch() {
        return element(by.css(searchInputLocator))
    }

    getFoundProduct() {
        return element(by.css(foundProductLocator))
    }

    getNoProductsMessage() {
        return element(by.css(noProductsLocator))
    }

    getEditIcon() {
        return element(by.css(editIconLocator))
    }

    async createProduct(name,familyName) {

        await allure.createStep("create new product", async() => {
            await this.getProductNameInput().sendKeys(name)
            await this.getProductFamilyDropdown().click()
            await this.getProductFamilyInput().sendKeys(familyName)
            await this.getProductFamilyLocator().click()
            await this.getSaveBtn().click()
        })()
    }

    async createProductCancel(name) {

        await allure.createStep("cancel product creating", async() => {
            await this.waitForProductInputAvailable()
            await this.getProductNameInput().sendKeys(name)
            await this.getProductFamilyDropdown().click()
            await this.getProductFamilyLocator().click()
            await this.getCancelBtn().click()
        })(); 
    }

    async createProductNotComplete(name) {
        
        await allure.createStep("create product with not complete information", async() => {
            await this.getProductNameInput().sendKeys(name)
            await this.getSaveBtn().click()
        })() 
    }

    async waitForSuccessMessageAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getSuccessMessage()), 20000)
    }

    async isSuccessMessageVisible() {
        await this.waitForSuccessMessageAvailable()
        return await this.getSuccessMessage().isDisplayed()
    }

    async waitForIdAvailable() {
            await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getProductId()), 20000)
    }
    
    async isIdVisible() {
            await this.waitForIdAvailable();
            return await this.getProductId().isDisplayed()
    }

    async searchForProduct(name) {

        await allure.createStep("search for product", async() => {
            await this.getProductSearch().sendKeys(name);
        })(); 
    }   
       
    async waitForNoProductMessageAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getNoProductsMessage()), 20000);
    }

    async isNoProductMessageVisible() {
        await this.waitForNoProductMessageAvailable();
        return await this.getNoProductsMessage().isDisplayed();
    }
     
    async waitForErrorMessageAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getErrorMessage()), 20000);
    }

    async waitForProductInputAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getProductNameInput()), 20000);
    }

    async waitForEditIconAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getEditIcon()), 20000);
    }

    async startEditingProduct() {
        await allure.createStep("click edit product", async() => {
            await this.waitForEditIconAvailable()
            await this.getEditIcon().click()
        })();
            return new EditProductPage
    }   
}

module.exports = NewProductPage