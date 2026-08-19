
class testData {

    static randomFullName() {
        return 'User' + Math.random().toString(36).substring(2, 8)
    }

    static randomEmailAddress() {
        return `test${Date.now()}@example.com`
    }

    static randomMobileNumber() {
        return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    }

    static randomEventTitle() {
        return 'TEST-EVENT-' + Math.random().toString(36).substring(2, 7)
    }

    static tomorrowEventDateTime() {
        const date = new Date()
        date.setDate(date.getDate() + 1)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}T10:00`
    }

    static BOOK_TICKETS_PAGE_TEXT = {
        HEADER_LABEL: 'Book Tickets',
        BOOKING_CONFIRMED: 'Booking Confirmed!',
        TICKETS_RESERVED: 'Your tickets are reserved.',
    }

    static MY_BOOKING_PAGE_TEXT = {
        HEADER_TEXT: 'My Bookings'
    }

    static BOOKING_URL_TEXT = {
        BOOKING_URL_LABEL: 'bookings'
    }

    static EVENT_URL_TEXT = {
        EVENT_URL_LABEL: 'events'
    }

    static VIEW_DETAILS_PAGE_CANCEL_TEXT = {
        HEADER_TEXT: 'Cancel this booking?',
        CANCEL_CONFIRM_TEXT: 'Booking cancelled successfully'
    }

    static getNewEventCreatePage() {
        return {
            EVENT_TITLE: testData.randomEventTitle(),
            EVENT_DESCRIPTION: 'This is a test event for automation testing.',
            EVENT_CATEGORY: 'Sports',
            EVENT_CITY: 'Pune',
            EVENT_VENUE: 'Street Road, Pune-12',
            EVENT_DATE_TIME: testData.tomorrowEventDateTime(),
            EVENT_PRICE: '100',
            EVENT_SEATS: '10'

        }
    }

    static NEW_EVENT_PAGE_TEXT = {
        NEW_EVENT_SUCCESS: 'Event created!',
        NEW_EVENT_DELETE_TITLE: 'Delete this event?',
        NEW_EVENT_DELETE: 'Event deleted'
    }
}

module.exports = {testData}