let LoginPage = require("../page_objects/login_page.js")

describe('login suite', function() {
  
    it('login with wrong password', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      await loginPage.login("olena.halenok@gmail.com", "1234")
                  
      expect(await loginPage.isErrorMessageVisible()).toEqual(true)
    })
  })