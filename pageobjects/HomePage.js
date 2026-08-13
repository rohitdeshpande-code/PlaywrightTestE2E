const {expect} = require('@playwright/test')

class HomePage {

    constructor(page) {
        this.page = page
        this.cardSections = page.locator('[data-testid="event-card"]')

    }

    async clickOnFeatureEvent(eventName) {
        await this.cardSections.first().waitFor()
        const count = await this.cardSections.count()
        for(let i =0; i<count;++i) {
            if(await this.cardSections.nth(i).locator('a[href*="events"] h3').textContent() === eventName) {
                await this.cardSections.nth(i).locator('text = Book Now').click()
                break
            }
        }
    }

    async getEventPageUrl(eventText) {
        return await expect(this.page).toHaveURL(new RegExp(eventText))
    }
}

module.exports = {HomePage}