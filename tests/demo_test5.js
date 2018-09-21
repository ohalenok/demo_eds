let LoginPage = require("../page_objects/login_page.js")

describe('new product', function() {

    it('add new product', async function() {

      let loginPage = new LoginPage();

      await loginPage.open();     

      let productsPage = await loginPage.login("olena.halenok@gmail.com", ">#MKIg>2o")

      await productsPage.header.waitForHeaderAvailable()

      await productsPage.header.getAdministrationMenu().click()

      await productsPage.waitForProductLinkAvailable()

      let newProductPage = await productsPage.addProduct()

      await newProductPage.waitForProductInputAvailable()

      await newProductPage.createProduct('Olena_Halenok Product' + Math.floor(Math.random() * 10) + 100, 'Olena_Halenok Product Family 1')

      expect(await newProductPage.isSuccessMessageVisible()).toEqual(true)

      //expect(await newProductPage.isIdVisible()).toEqual(true)
    })
  })