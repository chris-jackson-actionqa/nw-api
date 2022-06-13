describe('location strategies: link text', () => {
    it('link text strategy', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        const linkText = await browser.getText('link text', 'Spider Man')

        console.log({ linkText })
    })
})
