let LoginPage = require("../page_objects/login_page.js")

describe('new product', function() {
    it('delete product', async function() {

      let loginPage = new LoginPage()

      await loginPage.open()     

      let productsPage = await loginPage.login("olena.halenok@gmail.com", ">#MKIg>2o")

      await productsPage.header.waitForHeaderAvailable()

      await productsPage.header.getAdministrationMenu().click()
            
      let deleteProductPage = await productsPage.startDeletingProduct("to_be_deleted")

      await productsPage.waitForDeleteModalAvailable()

      await deleteProductPage.deleteProduct()

     expect(await deleteProductPage.isDeleteSuccessMessageVisible()).toEqual(true)
    })
  })