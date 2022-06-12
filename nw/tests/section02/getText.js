describe('section 2', () => {
    it('callbacks', async (browser) => {
        const myText = await browser
            .url(browser.baseUrl + '/s02/gettext')
            .getText('[data-testid="example-text"]')

        console.log({ myText })
    })
})
