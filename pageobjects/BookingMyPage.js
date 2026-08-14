const {expect} = require('@playwright/test')

class BookingMyPage {

    constructor(page) {
        this.page = page
        this.myBookingHeader = page.locator('.mb-8 h1')
        this.bookingCardName = page.getByTestId('booking-card')
        this.viewDetails = page.getByRole("button", {name: "View Details"})
    }

    async getMyBookingDetails(myBookingText, eventName) {
        await expect(this.myBookingHeader).toHaveText(myBookingText)
        await expect(this.bookingCardName.locator('.min-w-0 h3')).toHaveText(eventName)
        await this.viewDetails.first().click()
    }
}

module.exports = {BookingMyPage}