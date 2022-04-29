describe('home', () => {
    it('go to home page', (browser) => {
        browser.url(browser.baseUrl)
        browser.pause(5_000)
    })
})
