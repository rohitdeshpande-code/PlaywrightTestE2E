
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
}

module.exports = {testData}