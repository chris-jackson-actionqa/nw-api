describe('Exercise: Locator Strategies', () => {
    beforeEach(async (browser, done) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategiesExercise')
        done()
    })

    afterEach(async (browser, done) => {
        await browser.end()
        done()
    })

    const locatorTests = [
        {
            name: 'Use tag name locator strategy for h2 tag',
            strategy: 'tag name',
            selector: 'h2',
        },
        {
            name: 'Use "css selector" locator strategy for the "example" class',
            strategy: 'css selector',
            selector: '.example',
        },
        {
            name: 'Use "link text" locator strategy',
            strategy: 'link text',
            selector: 'Match this text',
        },
        {
            name: 'Use "partial link" locator strategy',
            strategy: 'partial link text',
            selector: 'Match',
        },
    ]

    for (let testData of locatorTests) {
        it(testData.name, async (browser) => {
            const expectedText = await browser.getText(
                testData.strategy,
                testData.selector
            )

            console.log(expectedText)
        })
    }
})
