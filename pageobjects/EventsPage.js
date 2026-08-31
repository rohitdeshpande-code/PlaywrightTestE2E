const {expect} = require('@playwright/test')

class EventsPage {

    constructor(page) {
        this.page = page
        this.eventTab = page.locator("a#nav-events")
        this.searchText = page.getByPlaceholder('Search events, venues…')
        this.clearFilterButton = page.getByRole("button", {name: 'Clear filters'})
        this.cardSections = page.locator('[data-testid="event-card"]')
        this.addNewEvent = page.locator("text='Add New Event'")
    }

    async clickEventNavTab() {
        await this.eventTab.click()
    }

    
    async searchAndClearEvent(eventname) {
        await this.searchText.fill(eventname)
        await expect(this.cardSections).toHaveCount(1)
        const searchedText = await this.searchText.inputValue()
        const eventText = await this.cardSections.locator('a[href*="events"] h3').textContent()
        expect(eventText).toContain(searchedText)
        await this.clearFilterButton.click()
        await expect(this.searchText).toHaveValue('')
    }


    async verifyEventsPageUrl() {
        await expect(this.page).toHaveURL(/\/events/)
    }

    async clickAddNewEvent() {
        await this.addNewEvent.click()
    }

}

module.exports = {EventsPage}