//const {expect} = require('@playwright/test')

import {expect, type Page, type Locator} from '@playwright/test'

export class EventsPage {

    page: Page
    eventTab: Locator
    searchText: Locator
    clearFilterButton: Locator
    cardSections: Locator


    constructor(page: any) {
        this.page = page
        this.eventTab = page.locator("a#nav-events")
        this.searchText = page.getByPlaceholder('Search events, venues…')
        this.clearFilterButton = page.getByRole("button", {name: 'Clear filters'})
        this.cardSections = page.locator('[data-testid="event-card"]')
    }

    async clickEventNavTab() {
        await this.eventTab.click()
    }

    async searchEvent(eventname: string) {
        await this.searchText.fill(eventname)
        await expect(this.cardSections).toHaveCount(1)
        const searchedText = await this.searchText.inputValue()
        const eventText = await this.cardSections.locator('a[href*="events"] h3').textContent()
        expect(eventText).toContain(searchedText)
    }

    async clearSearchEvent() {
        await this.clearFilterButton.click()
        await expect(this.searchText).toHaveValue('')
    }


}

//module.exports = {EventsPage}