let deleteBtnLocator = "button.btn.gds-btn.gds-ml-1.gds-btn-danger"
let deleteSuccessMessageLocator = "#toast-container > div > div:nth-child(2)"


class DeleteProductPage {
    constructor() {
        browser.waitForAngularEnabled(false)
    }

    getDeleteBtn() {
        return element(by.css(deleteBtnLocator))
    }

    get() {
        return element(by.css())
    }

    getDeleteSuccessMessage() {
        return element(by.css(deleteSuccessMessageLocator))
    }
     
    async waitForDeleteSuccessMessageAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getDeleteSuccessMessage()), 20000)
    }

    async isDeleteSuccessMessageVisible() {
        await this.waitForDeleteSuccessMessageAvailable();
        return await this.getDeleteSuccessMessage().isDisplayed()
    }

    async waitForDeleteBtnClickable() {
        await browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.getDeleteBtn()), 20000)
    }

    async deleteProduct() {
        await allure.createStep("delete product", async() => {
            await this.waitForDeleteBtnClickable()
            await this.getDeleteBtn().click()
        })()
    }
}

module.exports = DeleteProductPage