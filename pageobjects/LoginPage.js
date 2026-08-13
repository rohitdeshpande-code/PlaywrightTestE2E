
class LoginPage {

    constructor(page) {
        this.page = page
        this.username = page.locator('input#email')
        this.password = page.locator('input#password')
        this.signInButton = page.locator('button#login-btn')

    }

    async goTo() {
        await this.page.goto('https://eventhub.rahulshettyacademy.com/')
    }

    async loginToPage(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.signInButton.click()
    }

}

module.exports = {LoginPage}