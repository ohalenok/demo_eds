let LoginPage = require("../page_objects/login_page.js")

describe('new product', function() {

    it('cancel adding new product', async function() {
      
      let loginPage = new LoginPage()

      await loginPage.open()
     
      let productsPage = await loginPage.login("olena.halenok@gmail.com", ">#MKIg>2o")

      await productsPage.header.waitForHeaderAvailable()

      await productsPage.header.getAdministrationMenu().click()

      await productsPage.waitForProductLinkAvailable()

      let newProductPage = await productsPage.addProduct()

      await newProductPage.createProductCancel('default name')

      await newProductPage.searchForProduct('default name')

      expect(await newProductPage.isNoProductMessageVisible()).toEqual(true)
    })
  })