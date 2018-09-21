let LoginPage = require("../page_objects/login_page.js")

describe('login suite', function() {

    it('login with empty email field', async function() {
      
      let loginPage = new LoginPage()

      await loginPage.open()   

      await loginPage.login("", ">#MKIg>2o")
     
      expect(await loginPage.getValidationMessage().getText()).toEqual("Email is required")
    })
  })