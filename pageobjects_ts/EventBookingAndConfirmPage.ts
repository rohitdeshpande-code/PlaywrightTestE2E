//const {expect} = require('@playwright/test')

import {expect, type Page, type Locator} from '@playwright/test'

export class EventBookingAndConfirmPage {

    page: Page
    bookTicketLabel: Locator
    customername: Locator
    customeremail: Locator
    phone: Locator
    bookingConfirm: Locator
    bookingConfirmSubHeader: Locator
    confirmBooking: Locator
    viewMyBooking: Locator

    cancelHeader: Locator
    cancelButton: Locator
    cancelConfirmText: Locator
    cancelBooking: Locator

    constructor(page: any) {
        this.page = page
        this.bookTicketLabel = page.locator('.mb-4 h2')
        this.customername = page.locator('input#customerName')
        this.customeremail = page.locator('input#customer-email')
        this.phone = page.locator('input#phone')
        this.bookingConfirm = page.locator('.py-6 h3')
        this.bookingConfirmSubHeader = page.locator('.py-6 p')
        this.confirmBooking = page.getByRole("button", {name: "Confirm Booking"})
        this.viewMyBooking = page.getByRole("button", {name: "View My Bookings"})

        //
        this.cancelHeader = page.locator('h2#modal-title')
        this.cancelButton = page.locator('button[data-testid="confirm-dialog-yes"]')
        this.cancelConfirmText = page.locator('p.leading-snug')

        this.cancelBooking = page.getByRole("button", {name: "Cancel Booking"})
    }

    async getBookTicketPage(bookTicketText: any) {
        const bookingLabel = await this.bookTicketLabel.textContent()
        expect(bookingLabel?.includes(bookTicketText)).toBeTruthy()
    }

    async setBookTicketPage(fullname: string, email: string, phone: string) {
        await this.customername.fill(fullname)
        await this.customeremail.fill(email)
        await this.phone.fill(phone)
        await this.confirmBooking.click()
    }

    async getConfirmBookingPage(bookingConfirmText: string, subBookingConfirmText: string) {
        await expect(this.bookingConfirm).toContainText(bookingConfirmText)
        const bookConfirmSubHead = await this.bookingConfirmSubHeader.textContent()
        expect(bookConfirmSubHead?.includes(subBookingConfirmText)).toBeTruthy()
        await this.viewMyBooking.click()
        
    }

    async getConfirmBookingUrl(urlText: string) {
        return await expect(this.page).toHaveURL(new RegExp(urlText));
    }

    //
    async verifyCancelBooking(cancelModalText: string, cancelConfirmText: string) {
        await this.cancelBooking.click()
        await expect(this.cancelHeader).toHaveText(cancelModalText)
        await this.cancelButton.click()
        await expect(this.cancelConfirmText).toHaveText(cancelConfirmText)
    }
}

//module.exports = {EventBookingAndConfirmPage}