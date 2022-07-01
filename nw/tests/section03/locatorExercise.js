describe('Exercise: Locator Strategies', () => {
    it('Use tag name locator strategy for h2 tag', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategiesExercise')

        const h2Text = await browser.getText('tag name', 'h2')

        console.log(h2Text)
    })

    it('Use "css selector" locator strategy for the "example" class', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategiesExercise')

        const exampleClassText = await browser.getText('.example')

        console.log(exampleClassText)
    })

    it('Use "link text" locator strategy', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategiesExercise')

        const linkText = await browser.getText('link text', 'Match this text')

        console.log(linkText)
    })
})
