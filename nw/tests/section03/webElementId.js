describe('web element id', () => {
    test('show text using web element id', async () => {
        await browser.navigateTo('/s03/webElementIdAndElement')
        const myWebElementId = await browser.findElement(
            '[data-testid="some-element"]'
        )

        console.dir(myWebElementId)
        console.log(myWebElementId.getId())

        const doomText = await browser.elementIdText(myWebElementId.getId())
        console.log(doomText)

        await browser.assert.strictEqual(doomText, 'Doom Patrol')
    })
})
