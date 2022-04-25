describe('home', () => {
    it('go to home page', (browser) => {
        browser.url('http://localhost:3000')
        browser.pause(2_000)
    })
})
