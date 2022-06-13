describe('locator strategies: partial link text', () => {
    it('partial link text unique', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        const linkText = await browser.getText('partial link text', 'Widow')

        console.log({ linkText })
    })

    it('partial link text duplicate', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        const linkText = await browser.getText('partial link text', 'Black')

        console.log({ linkText })
    })
})
