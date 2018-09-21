let LoginPage = require("../page_objects/login_page.js")

describe('new product', function() {

    it('add product with existing name', async function() {

      let loginPage = new LoginPage()

      await loginPage.open()
     
      let productsPage = await loginPage.login("olena.halenok@gmail.com", ">#MKIg>2o")

      await productsPage.header.waitForHeaderAvailable()

      await productsPage.header.getAdministrationMenu().click()

      await productsPage.waitForProductLinkAvailable()

      let newProductPage = await productsPage.addProduct()

      await newProductPage.waitForProductInputAvailable()

      await newProductPage.createProduct('Olena_Halenok Product 1')

      expect(await productsPage.header.isHeaderVisible()).toEqual(true)
      
      expect(await newProductPage.getErrorMessage().getText()).toEqual('Name must be unique')
    })
  })