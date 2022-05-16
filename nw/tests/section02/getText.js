describe('section 2', () => {
    it('callbacks', (browser) => {
        browser.url(browser.baseUrl + '/s02/gettext')

        browser.getText('[data-testid="example-text"]', (result) => {
            console.log(result.value)
        })
    })
})
