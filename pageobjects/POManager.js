
const {test, expect} = require('@playwright/test')
const {LoginPage} = require ('./LoginPage')
const {HomePage} = require('./HomePage')
const {EventBookingAndConfirmPage} = require('./EventBookingAndConfirmPage')
const {BookingMyPage} = require('./BookingMyPage')
const {ViewDetailsAndCancelPage} = require('./ViewDetailsAndCancelPage')
const {EventsPage} = require('./EventsPage')

class POManager {

    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.homePage = new HomePage(this.page)
        this.eventBookingAndConfirmPage = new EventBookingAndConfirmPage(this.page)
        this.bookingMyPage = new BookingMyPage(this.page)
        this.viewDetailsAndCancelPage = new ViewDetailsAndCancelPage(this.page)
        this.eventsPage = new EventsPage(this.page)
    }

    getLoginPage() {
        return this.loginPage
    }

    getHomePage() {
        return this.homePage
    }

    getEventBookingAndConfirmPage() {
        return this.eventBookingAndConfirmPage
    }

    getBookingMyPage() {
        return this.bookingMyPage
    }

    getViewDetailsAndCancelPage() {
        return this.viewDetailsAndCancelPage
    }

    getEventsPage() {
        return this.eventsPage
    }

}

module.exports = {POManager}