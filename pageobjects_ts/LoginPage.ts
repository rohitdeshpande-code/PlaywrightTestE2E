
import {type Page, type Locator} from '@playwright/test'

export class LoginPage {

    page: Page
    username: Locator
    password: Locator
    signInButton: Locator

    constructor(page: any) {
        this.page = page
        this.username = page.locator('input#email')
        this.password = page.locator('input#password')
        this.signInButton = page.locator('button#login-btn')

    }

    async goTo() {
        await this.page.goto('https://eventhub.rahulshettyacademy.com/')
    }

    async loginToPage(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.signInButton.click()
    }

}

//module.exports = {LoginPage}