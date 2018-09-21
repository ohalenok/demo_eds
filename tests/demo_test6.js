let LoginPage = require("../page_objects/login_page.js")

describe('new product', function() {

  it('add product with empty Product Family field', async function() {
    let loginPage = new LoginPage()

    await loginPage.open()
   
    let productsPage = await loginPage.login("olena.halenok@gmail.com", ">#MKIg>2o")

    await productsPage.header.waitForHeaderAvailable()

    await productsPage.header.getAdministrationMenu().click()

    await productsPage.waitForProductLinkAvailable()

    let newProductPage = await productsPage.addProduct() 

    await newProductPage.waitForProductInputAvailable()

    await newProductPage.createProductNotComplete('Olena_Halenok Product 13')

    expect(await newProductPage.getValidationMessage().getText()).toEqual('Product Family is required.')
  })
})