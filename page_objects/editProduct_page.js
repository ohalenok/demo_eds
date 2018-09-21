let productNameInputLocator = "#product-name"
let successMessageLocator = "#toast-container > div > div:nth-child(2) > span"
let saveBtnLocator = "#saveProductEdit"
let statusDropdownLocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > div > div:nth-child(2) > div > div > div:nth-child(1) > dropdown-gds > ss-multiselect-dropdown > div > button > span"
let statusInactiveLocator = "bbody > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > div > div:nth-child(2) > div > div > div:nth-child(1) > dropdown-gds > ss-multiselect-dropdown > div > ul > li:nth-child(2) > a > span"

class EditProductPage {
    constructor() {
        browser.waitForAngularEnabled(false)
    }

    getStatusDropdown() {
        return element(by.css(statusDropdownLocator))
    }

    getStatusInactive() {
        return element(by.css(statusInactiveLocator))
    }

    getProductNameInput() {
        return element(by.css(productNameInputLocator))
    }
    
    getSaveBtn() {
        return element(by.css(saveBtnLocator))
    }

    getSuccessMessage() {
        return element(by.css(successMessageLocator))
    }
     
    async waitForSuccessMessageAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getSuccessMessage()), 15000)
    }

    async isSuccessMessageVisible() {
        await this.waitForSuccessMessageAvailable();
        return await this.getSuccessMessage().isDisplayed()
    }

    // async editProduct() {
    //     await allure.createStep("edit product", async() => {
    //         await this.getProductNameInput().sendKeys(' edited')
    //         await this.getSaveBtn().click();
    //     })();
    //}
}

module.exports = EditProductPage