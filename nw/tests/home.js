describe('home', () => {
    it('go to home page', async (browser) => {
        browser.url('http://localhost:3000')
        browser.pause(5_000)
    })
})
