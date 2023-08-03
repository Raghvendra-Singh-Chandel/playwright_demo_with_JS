const {test} = require("./Support/Fixture/pageObjectFixture");

test.describe("verify login page functionality",()=> {
    test.beforeEach(async({loginPage})=> {
        await loginPage.landingToLoginPage()
        await loginPage.loginWitValidCredential()
    })

    test("verify functionality of login with invalid credential", async({selectProduct, personDetails, paymentDetails})=> {
        await selectProduct.selectproductToBuy()
        await selectProduct.placeOrder()
        await personDetails.fillAlldetailsAndProcessedToPaymentPage()
        await paymentDetails.fillPaymentDetailsAndCompletePayment()
    })
})
