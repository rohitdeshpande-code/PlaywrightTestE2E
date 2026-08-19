
import {test, expect} from '@playwright/test'
import {POManager} from '../../pageobjects_ts/POManager'
const data = JSON.parse(JSON.stringify(require('../../utils/eventBookingData.json')))

test('Login Page - should login successfully with valid credentials', async ({page}) => {

    const poManager = new POManager(page)

    const loginPage = poManager.getLoginPage()
    await loginPage.goTo()
    await loginPage.loginToPage(data.username, data.password)

    const homePage = poManager.getHomePage()
    await expect(homePage.cardSections.first()).toBeVisible()

})
