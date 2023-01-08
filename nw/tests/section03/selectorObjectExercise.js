describe('selector object exercise', () => {
    test('get planet name from 3rd row', async () => {
        await browser.navigateTo('/s03/selectorObjectExercise')
        const planet = await browser.getText({ selector: 'td', index: 7 })
        console.log(planet)
    })

    test('wait for text to say "on"', async () => {
        await browser.navigateTo('/s03/selectorObjectExercise')
        await browser.click('[data-testid="power-on"]')
        await browser.assert.textEquals(
            {
                selector: '[data-testid="its-alive"]',
                timeout: 8_000,
            },
            'On'
        )
    })
})
