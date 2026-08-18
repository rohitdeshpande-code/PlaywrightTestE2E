
const {test, expect} = require('@playwright/test')

test('My First Line Test case for EventHub booking application', async ({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    const username = "rdtest01@gmail.com"
    const password = "Test@1234"
    const cardSections = page.locator('[data-testid="event-card"]')

    const fullname = 'User' + Math.random().toString(36).substring(2, 8);
    const email = `test${Date.now()}@example.com`;
    const phone = Math.floor(1000000000 + Math.random() * 9000000000).toString();

    //Login page 
    await page.goto('https://eventhub.rahulshettyacademy.com/')

    //await page.getByPlaceholder("you@email.com").fill(username)
    await page.locator('input#email').fill(username)
    //await page.getByPlaceholder("••••••").fill(password)
    await page.locator('input#password').fill(password)
    //await page.getByRole("button", {name: "Sign In"}).click()
    await page.locator('button#login-btn').click()


    //await page.locator('.p-4').filter({hasText: 'Dilli Diwali Mela'}).getByRole("link", {name: "Book Now"}).click()

    
    //Home page 
    await cardSections.first().waitFor()
    const count = await cardSections.count()
    for(let i =0; i<count;++i) {
        if(await cardSections.nth(i).locator('a[href*="events"] h3').textContent() === 'World Tech Summit') {
            await cardSections.nth(i).locator('text = Book Now').click()
            break
        }
    }

    //Event Booking Page (Booking Confirmed)
    const bookingLabel = await page.locator('.mb-4 h2').textContent()
    bookingLabel.includes('Book Tickets')

    //await page.getByPlaceholder('Your full name').fill(fullname)
    await page.locator('input#customerName').fill(fullname)
    await page.locator('input#customer-email').fill(email)
    //await page.getByPlaceholder('+91 98765 43210').fill(phone)
    await page.locator('input#phone').fill(phone)
    await page.getByRole("button", {name: "Confirm Booking"}).click()

    //Booking Confirmed Sub Modal
    await expect(await page.locator('.py-6 h3')).toContainText('Booking Confirmed!')
    const bookConfirmSubHead = await page.locator('.py-6 p').textContent()
    bookConfirmSubHead.includes('Your tickets are reserved.')

    await page.getByRole("button", {name: "View My Bookings"}).click()
    await expect(page).toHaveURL(/\/bookings/);

    //My Booking page
    await expect(page.locator('.mb-8 h1')).toHaveText('My Bookings')
    await expect(page.getByTestId('booking-card').locator('.min-w-0 h3')).toHaveText('World Tech Summit')
    await page.getByRole("button", {name: "View Details"}).first().click()

    //View Details page 
    await expect(page.locator('.mb-8 h1')).toHaveText('World Tech Summit')
    await expect(page.locator('.space-y-3 div.justify-between', {hasText : "Name"})).toContainText(fullname)
    await expect(page.locator('.space-y-3 div.justify-between', {hasText : "Email"})).toContainText(email)
    await expect(page.locator('.space-y-3 div.justify-between', {hasText : "Phone"})).toContainText(phone)

    await page.getByRole("button", {name: "Cancel Booking"}).click()

    //Cancel Modal 
    await expect(page.locator('h2#modal-title')).toHaveText('Cancel this booking?')
    await page.locator('button[data-testid="confirm-dialog-yes"]').click()
    await expect(page.locator('p.leading-snug')).toHaveText('Booking cancelled successfully')

    //Events page 
    await page.locator("a#nav-events").click()
    
    await page.getByPlaceholder('Search events, venues…').fill('World Tech Summit')
    await expect(cardSections).toHaveCount(1)
    const searchedText = await page.getByPlaceholder('Search events, venues…').inputValue()
    const eventText = await cardSections.locator('a[href*="events"] h3').textContent()
    expect(eventText).toContain(searchedText)
    await page.getByRole("button", {name: 'Clear filters'}).click()
    await expect(page.getByPlaceholder('Search events, venues…')).toHaveValue('')


    /*
        New Code
    */
    //Home page
    await page.locator("[data-testid='nav-home']").click()
    await page.getByRole("button", {name: "Explore All Events"}).click()

    //Event Page
    await expect(page).toHaveURL(/\/events/);
    await page.locator("text='Add New Event'").click()
    await page.locator(".text-lg").filter({hasText: '+ New Event'})

    await page.getByLabel("Title").fill("Test Event")
    await page.getByPlaceholder("Describe the event…").fill("This is a test event for automation testing.")
    const dropDown = page.getByLabel("Category")
    dropDown.selectOption({label: "Sports"})
    await page.getByLabel("City").fill("Pune")
    await page.getByLabel("Venue").fill("Street Road, Pune-12")
    await page.getByLabel("Event Date & Time").fill("2026-08-20T10:00")
    await page.getByLabel("Price ($)").fill("100")
    await page.getByLabel("Total Seats").fill("10")
    await page.getByRole("button", {name: "+ Add Event"}).click()
    await expect(page.locator("p.leading-snug")).toHaveText("Event created!")

    await page.pause()

})