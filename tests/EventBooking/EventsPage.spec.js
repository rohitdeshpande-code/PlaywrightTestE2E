
const {test} = require('@playwright/test')
const {POManager} = require('../../pageobjects/POManager')
const data = JSON.parse(JSON.stringify(require('../../utils/eventBookingData.json')))

let poManager

test.beforeEach(async ({page}) => {
    poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
    await loginPage.goTo()
    await loginPage.loginToPage(data.username, data.password)
})

test('Events Page - should search for an event and clear the filter', async () => {

    const eventsPage = poManager.getEventsPage()
    await eventsPage.clickEventNavTab()
    await eventsPage.searchEvent(data.eventName)
    await eventsPage.clearSearchEvent()

})
