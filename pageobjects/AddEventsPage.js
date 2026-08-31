const {expect} = require('@playwright/test')

class AddEventsPage {

    constructor(page) {
        this.page = page
        this.newEventLabel = page.locator(".text-lg").filter({hasText: '+ New Event'})
        this.titleInput = page.getByLabel("Title")
        this.descriptionInput = page.getByPlaceholder("Describe the event…")
        this.categoryDropDown = page.getByLabel("Category")
        this.cityInput = page.getByLabel("City")
        this.venueInput = page.getByLabel("Venue")
        this.eventDateTimeInput = page.getByLabel("Event Date & Time")
        this.priceInput = page.getByLabel("Price ($)")
        this.totalSeatsInput = page.getByLabel("Total Seats")
        this.addEventButton = page.getByRole("button", {name: "+ Add Event"})
        this.eventModalTitle = page.locator("p.leading-snug")
        this.newEventRow = page.locator('tr[data-testid="event-table-row"]')
        this.editButton = this.newEventRow.getByRole("button", {name: "Edit"})
        this.deleteButton = this.newEventRow.getByRole("button", {name: "Delete"})

        this.modalTitle = page.locator("h2#modal-title")
        this.confirmDeleteButton = page.locator('button[data-testid="confirm-dialog-yes"]')



    }

    async fillEventDetails(title, description, category, city, venue, dateTime, price, seats, successMessage) {
        await this.newEventLabel.waitFor()
        await this.titleInput.fill(title)
        await this.descriptionInput.fill(description)
        await this.categoryDropDown.selectOption({label: category})
        await this.cityInput.fill(city)
        await this.venueInput.fill(venue)
        await this.eventDateTimeInput.fill(dateTime)
        await this.priceInput.fill(price)
        await this.totalSeatsInput.fill(seats)
        await this.addEventButton.click()
        await expect(this.eventModalTitle.nth(1)).toHaveText(successMessage)
    }

    async verifyNewEventCreated(title) {
        await this.newEventRow.filter({hasText: title})
        await expect(this.editButton).toBeVisible()
        await expect(this.deleteButton).toBeVisible()
    }

    async deleteNewEventCreated(deleteModalTitle, deleteMessage) {
        await this.deleteButton.click()
        await expect(this.modalTitle).toHaveText(deleteModalTitle)
        await this.confirmDeleteButton.click()
        await expect(this.eventModalTitle.nth(2)).toHaveText(deleteMessage)

    }
}

module.exports = {AddEventsPage}