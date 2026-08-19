
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

test('Event Booking And Confirm Page - should book a ticket and show booking confirmation', async () => {

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
    //
    await eventBookingAndConfirmPage.verifyCancelBooking(testData.VIEW_DETAILS_PAGE_CANCEL_TEXT.HEADER_TEXT,
        testData.VIEW_DETAILS_PAGE_CANCEL_TEXT.CANCEL_CONFIRM_TEXT)


})
