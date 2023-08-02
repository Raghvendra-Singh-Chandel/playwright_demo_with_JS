const {login} =  require("../pageMethods/loginPage")
const base = require("@playwright/test")

exports.test = base.test.extend({
    loginPage: async ({page}, use)=> {
        const loginPage = new login(page)
        await use(loginPage)

    }
})