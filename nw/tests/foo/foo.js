describe('foo', () => {
    before(async (browser, done) => {
        await browser.url(browser.baseUrl + '/s03/relativeLocators')
        done()
    })

    it('below', async (browser) => {
        const shouldBeRick = locateWith(By.css('button')).below(
            By.css('[data-testid="vyvyan"]')
        )

        const buttonText = await browser.getText(shouldBeRick)

        console.log(buttonText)

        await browser.assert.strictEqual(buttonText, 'RICK')
    })

    it('above', async (browser) => {
        const someElement = locateWith(By.css('button')).above(
            By.css('[data-testid="rick"]')
        )

        const buttonText = await browser.getText(someElement)

        console.log(buttonText)

        await browser.assert.strictEqual(buttonText, 'VYVYAN')
    })

    it('toLeftOf', async (browser) => {
        const someElement = locateWith(By.css('button')).toLeftOf(
            By.css('[data-testid="mike"]')
        )

        const buttonText = await browser.getText(someElement)

        console.log(buttonText)

        // await browser.assert.strictEqual(buttonText, 'VYVYAN')
    })

    it('toRightOf', async (browser) => {
        const someElement = locateWith(By.css('button')).toRightOf(
            By.css('[data-testid="rick"]')
        )

        const buttonText = await browser.getText(someElement)

        console.log(buttonText)

        // await browser.assert.strictEqual(buttonText, 'VYVYAN')
    })

    it.only('near', async (browser) => {
        const someElement = locateWith(By.css('button')).near(
            By.css('[data-testid="neil"]')
        )

        const buttonText = await browser.getText(someElement)

        console.log(buttonText)

        // await browser.assert.strictEqual(buttonText, 'VYVYAN')
    })
})
