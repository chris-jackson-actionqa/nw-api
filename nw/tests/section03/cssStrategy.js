describe('locator strategies: css', () => {
    it('default css strategy', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        const buttonText = await browser.getText(
            '[data-testid="button-doctor-strange"]'
        )

        console.log({ buttonText })
    })

    it('use locator strategy for css', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        const buttonText = await browser.getText(
            'css selector',
            '#buttonDoctorStrange'
        )

        console.log({ buttonText })
    })

    it('useCss()', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        await browser.useCss()

        const buttonText = await browser.getText('#buttonDoctorStrange')

        console.log({ buttonText })
    })
})
