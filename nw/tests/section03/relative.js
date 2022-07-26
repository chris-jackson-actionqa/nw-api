describe('relative locators', () => {
    beforeEach(async (browser, done) => {
        await browser.url(browser.baseUrl + '/s03/relativeLocators')
        done()
    })

    it('above', async (browser) => {
        const aboveButton = locateWith(By.css('button')).above(
            By.css('[data-testid="rick"]')
        )

        const aboveButtonText = await browser.getText(aboveButton)
        await browser.assert.strictEqual('VYVYAN', aboveButtonText)
    })

    it('below', async (browser) => {
        const belowButton = locateWith(By.css('button')).below(
            By.css('[data-testid="vyvyan"]')
        )

        const belowButtonText = await browser.getText(belowButton)
        await browser.assert.strictEqual('RICK', belowButtonText)
    })

    it('left of', async (browser) => {
        const leftOfButton = locateWith(By.css('button')).toLeftOf(
            By.css('[data-testid="mike"]')
        )

        const leftOfButtonText = await browser.getText(leftOfButton)
        await browser.assert.strictEqual('VYVYAN', leftOfButtonText)
    })

    it('left of again', async (browser) => {
        const leftOfButton = locateWith(By.css('button')).toLeftOf(
            By.css('[data-testid="neil"]')
        )

        const leftOfButtonText = await browser.getText(leftOfButton)
        await browser.assert.strictEqual('VYVYAN', leftOfButtonText)
    })

    it('right of', async (browser) => {
        const rightOfButton = locateWith(By.css('button')).toRightOf(
            By.css('[data-testid="vyvyan"]')
        )

        const rightOfButtonText = await browser.getText(rightOfButton)
        await browser.assert.strictEqual('NEIL', rightOfButtonText)
    })

    it('near', async (browser) => {
        const nearVyvyan = locateWith(By.css('button')).near(
            By.css('[data-testid="vyvyan"]')
        )

        const nearVyvyanText = await browser.getText(nearVyvyan)
        await browser.assert.strictEqual(nearVyvyanText, 'RICK')

        const nearNeil = locateWith(By.css('button')).near(
            By.css('[data-testid="neil"]')
        )
        const nearNeilText = await browser.getText(nearNeil)
        await browser.assert.strictEqual(nearNeilText, 'MIKE')
    })
})
