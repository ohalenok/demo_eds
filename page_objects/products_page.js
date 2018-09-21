let HeaderPage = require("./header_page.js")
let NewProductPage = require("./newProduct_page.js")
let DeleteProductPage = require("./deleteProduct_page.js")

let addProdLinkLocator = "a.section-body__actions"
let searchInputLocator =  "body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div.col-xs-12.section-body > search-field > div > input"
let foundProductLocator = ".section__left .preview-list__item"
let deleteIconLocator = "button.btn.gds-btn-icon.gds-delete-icon"
let deleteModalLocator = "div.col-md-12.section__right > project > confirmation-modal .modal-content"

class ProductsPage {
    constructor() {
        this.header = new HeaderPage()
                browser.waitForAngularEnabled(false)
    }

    getAddProduct() {
        return element(by.css(addProdLinkLocator))
    }
    
    getDeleteModal() {
        return element(by.css(deleteModalLocator))
    }

    getDeleteIcon() {
        return element(by.css(deleteIconLocator));
    }

    getProductSearch() {
        return element(by.css(searchInputLocator))
    }

    getFoundProduct() {
        return element(by.css(foundProductLocator))
    }

    async addProduct() {

        await allure.createStep("click Add Product", async() => {
            await this.getAddProduct().click()
        })(); 
        
        return new NewProductPage()
    }

    async waitForProductLinkAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getAddProduct()), 15000)
    }

    async searchForProduct(name) {

        await allure.createStep("search for product", async() => {
            await this.getProductSearch().sendKeys(name)
        })() 
    }

    async waitForDeleteModalAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getDeleteModal()), 15000)
    }

    async waitForFoundProductAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getFoundProduct()), 15000)
    }

    async waitForDeleteIconAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getDeleteIcon()), 15000)
    }

    async startDeletingProduct(name) {
        await allure.createStep("click delete product", async() => {
            await this.waitForProductLinkAvailable()
            await this.searchForProduct(name);
            await this.waitForFoundProductAvailable()
            await this.getFoundProduct().click()
            await this.waitForDeleteIconAvailable()
            await this.getDeleteIcon().click()
        })();
            return new DeleteProductPage
    }
}
module.exports = ProductsPage