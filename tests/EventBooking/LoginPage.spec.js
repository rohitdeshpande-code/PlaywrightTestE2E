
const {test, expect} = require('@playwright/test')
const {POManager} = require('../../pageobjects/POManager')
const data = JSON.parse(JSON.stringify(require('../../utils/eventBookingData.json')))

test('Login Page - should login successfully with valid credentials', async ({page}) => {

    const poManager = new POManager(page)

    const loginPage = poManager.getLoginPage()
    await loginPage.goTo()
    await loginPage.loginToPage(data.username, data.password)

    const homePage = poManager.getHomePage()
    await expect(homePage.cardSections.first()).toBeVisible()

})
