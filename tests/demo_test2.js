let LoginPage = require("../page_objects/login_page.js")

describe('login suite', function() {
  
    it('login as scorer', async function() {
      let loginPage = new LoginPage()

      await loginPage.open()    

      let productsPage = await loginPage.login("olena.halenok+scorer@gmail.com", "q79iFw(Ew")

      await productsPage.header.waitForHeaderAvailable()
      
      expect(await productsPage.header.isHeaderVisible()).toEqual(true)

      expect(await productsPage.header.getUserStatus().getText()).toEqual("Scorer")
    })
  })