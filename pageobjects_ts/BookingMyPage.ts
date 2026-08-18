//const {expect} = require('@playwright/test')

import {expect, type Page, type Locator} from '@playwright/test'

export class BookingMyPage {

    page: Page
    myBookingHeader: Locator
    bookingCardName: Locator
    viewDetails: Locator

    constructor(page: any) {
        this.page = page
        this.myBookingHeader = page.locator('.mb-8 h1')
        this.bookingCardName = page.getByTestId('booking-card')
        this.viewDetails = page.getByRole("button", {name: "View Details"})
    }

    async getMyBookingDetails(myBookingText: string, eventName: string) {
        await expect(this.myBookingHeader).toHaveText(myBookingText)
        await expect(this.bookingCardName.locator('.min-w-0 h3')).toHaveText(eventName)
        await this.viewDetails.first().click()
    }
}

//module.exports = {BookingMyPage}