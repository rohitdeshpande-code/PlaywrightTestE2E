const {expect} = require('@playwright/test')

class ViewDetailsAndCancelPage {

    constructor(page) {
        this.page = page
        this.eventNameHeader = page.locator('.mb-8 h1')
        this.name = page.locator('.space-y-3 div.justify-between', {hasText: "Name"})
        this.email = page.locator('.space-y-3 div.justify-between', {hasText: "Email"})
        this.phone = page.locator('.space-y-3 div.justify-between', {hasText: "Phone"})

        this.cancelHeader = page.locator('h2#modal-title')
        this.cancelButton = page.locator('button[data-testid="confirm-dialog-yes"]')
        this.cancelConfirmText = page.locator('p.leading-snug')

        this.cancelBooking = page.getByRole("button", {name: "Cancel Booking"})
    }

    async verifyViewDetailsPage(eventname, fullname, email, phone) {
        await expect(this.eventNameHeader).toHaveText(eventname)
        await expect(this.name).toContainText(fullname)
        await expect(this.email).toContainText(email)
        await expect(this.phone).toContainText(phone)
        
    }

    async verifyCancelBooking(cancelModalText, cancelConfirmText) {
        await this.cancelBooking.click()
        await expect(this.cancelHeader).toHaveText(cancelModalText)
        await this.cancelButton.click()
        await expect(this.cancelConfirmText).toHaveText(cancelConfirmText)
    }

}

module.exports = {ViewDetailsAndCancelPage}
