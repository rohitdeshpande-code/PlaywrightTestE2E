
const {test} = require('@playwright/test')
const {POManager} = require('../../pageobjects/POManager')
const {testData} = require('../../utils/testData')
const data = JSON.parse(JSON.stringify(require('../../utils/eventBookingData.json')))

let poManager

test.beforeEach(async ({page}) => {
    poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
    await loginPage.goTo()
    await loginPage.loginToPage(data.username, data.password)
})

test('View Details And Cancel Page - should show booking details and allow cancellation', async () => {

    const fullname = testData.randomFullName()
    const email = testData.randomEmailAddress()
    const phone = testData.randomMobileNumber()

    const homePage = poManager.getHomePage()
    await homePage.clickOnFeatureEvent(data.eventName)
    await homePage.getEventPageUrl(testData.EVENT_URL_TEXT.EVENT_URL_LABEL)

    const eventBookingAndConfirmPage = poManager.getEventBookingAndConfirmPage()
    await eventBookingAndConfirmPage.getBookTicketPage(testData.BOOK_TICKETS_PAGE_TEXT.HEADER_LABEL)
    await eventBookingAndConfirmPage.setBookTicketPage(fullname, email, phone)
    await eventBookingAndConfirmPage.getConfirmBookingPage(testData.BOOK_TICKETS_PAGE_TEXT.BOOKING_CONFIRMED,
        testData.BOOK_TICKETS_PAGE_TEXT.TICKETS_RESERVED)
    await eventBookingAndConfirmPage.getConfirmBookingUrl(testData.BOOKING_URL_TEXT.BOOKING_URL_LABEL)

    const myBookingPage = poManager.getMyBookingPage()
    await myBookingPage.getMyBookingDetails(testData.MY_BOOKING_PAGE_TEXT.HEADER_TEXT, data.eventName)

    const viewDetailsAndCancelPage = poManager.getViewDetailsAndCancelPage()
    await viewDetailsAndCancelPage.verifyViewDetailsPage(data.eventName, fullname, email, phone)
    await viewDetailsAndCancelPage.verifyCancelBooking(testData.VIEW_DETAILS_PAGE_CANCEL_TEXT.HEADER_TEXT,
        testData.VIEW_DETAILS_PAGE_CANCEL_TEXT.CANCEL_CONFIRM_TEXT)

})
