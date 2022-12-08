describe('Selector Object:', () => {
    it('selector and locate strategy', async () => {
        await browser.navigateTo('/s03/selectorObject')

        const buttonText = await browser.getText({
            selector: 'button',
            locateStrategy: 'css selector',
        })

        await browser.assert.strictEqual(buttonText, 'SHOW')
    })

    it('index', async () => {
        await browser.navigateTo('/s03/selectorObject')

        const buttonText = await browser.getText({
            selector: 'button',
            locateStrategy: 'css selector',
            index: 1,
        })

        await browser.assert.strictEqual(buttonText, 'HIDE')
    })

    it.skip('abortOnFailure', async () => {
        await browser.navigateTo('/s03/selectorObject')
        await browser.waitForElementVisible({
            selector: '#nope',
            abortOnFailure: false,
        })

        await browser.url('https://example.com')
        await browser.pause(3_000)
    })

    it('timeout', async () => {
        await browser.navigateTo('/s03/selectorObject')

        await browser.click({ selector: 'button', index: 2 })

        await browser.assert.visible({
            selector: '[data-testid="toggled-image"]',
            timeout: 8_000,
        })
    })

    it('retry interval', async () => {
        await browser.navigateTo('/s03/selectorObject')

        await browser.click({ selector: 'button', index: 2 })

        await browser.assert.visible({
            selector: '[data-testid="toggled-image"]',
            retryInterval: 8_000,
        })
    })

    it('suppressNotFound', async () => {
        await browser.navigateTo('/s03/selectorObject')

        await browser.click({ selector: '#nope', suppressNotFoundErrors: true })
    })
})
