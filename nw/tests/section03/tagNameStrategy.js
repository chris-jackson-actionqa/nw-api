describe('locator strategies: tag name', () => {
    it('tag name', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        const buttonText = await browser.getText('tag name', 'button')
        console.log({ buttonText })

        const headerText = await browser.getText('tag name', 'h2')
        console.log({ headerText })
    })
})
