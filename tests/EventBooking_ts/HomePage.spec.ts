
import {test} from '@playwright/test'
import {POManager} from '../../pageobjects_ts/POManager'
import {testData} from '../../utils/testData'
const data = JSON.parse(JSON.stringify(require('../../utils/eventBookingData.json')))

let poManager: any

test.beforeEach(async ({page}) => {
    poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
    await loginPage.goTo()
    await loginPage.loginToPage(data.username, data.password)
})

test('Home Page - should navigate to the event page on clicking a featured event', async () => {

    const homePage = poManager.getHomePage()
    await homePage.clickOnFeatureEvent(data.eventName)
    await homePage.getEventPageUrl(testData.EVENT_URL_TEXT.EVENT_URL_LABEL)

})
