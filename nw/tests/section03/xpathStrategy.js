describe('locator strategies: xpath', () => {
    it('xpath', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        const buttonText = await browser.getText(
            'xpath',
            '//*[@id="buttonDoctorStrange"]'
        )

        console.log({ buttonText })
    })

    it('xpath with useXpath()', async (browser) => {
        await browser.url(browser.baseUrl + '/s03/locatorStrategies')

        await browser.useXpath()

        const buttonText = await browser.getText(
            '//*[@id="buttonDoctorStrange"]'
        )

        console.log({ buttonText })
    })
})
