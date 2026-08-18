
import {LoginPage} from './LoginPage'
import {HomePage} from './HomePage'
import {EventBookingAndConfirmPage} from './EventBookingAndConfirmPage'
import {BookingMyPage} from './BookingMyPage'
import {ViewDetailsAndCancelPage} from './ViewDetailsAndCancelPage'
import {EventsPage} from './EventsPage'
import {type Page} from '@playwright/test'

export class POManager {

    page: Page
    loginPage: LoginPage
    homePage: HomePage
    eventBookingAndConfirmPage: EventBookingAndConfirmPage
    bookingMyPage: BookingMyPage
    viewDetailsAndCancelPage: ViewDetailsAndCancelPage
    eventsPage: EventsPage

    constructor(page: any) {
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

//module.exports = {POManager}