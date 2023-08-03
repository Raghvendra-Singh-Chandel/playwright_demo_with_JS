const {test} = require("./Support/Fixture/pageObjectFixture");

test.describe("createOrder end to end scenario",()=> {
    test.beforeEach(async({loginPage})=> {
        await loginPage.landingToLoginPage()
        await loginPage.loginWitValidCredential()
    })

    test("create order", async({selectProduct, personDetails, paymentDetails})=> {
        await selectProduct.selectproductToBuy()
        await selectProduct.placeOrder()
        await personDetails.fillAlldetailsAndProcessedToPaymentPage()
        await paymentDetails.fillPaymentDetailsAndCompletePayment()
    })
})
