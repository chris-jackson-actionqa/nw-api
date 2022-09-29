describe('relative locators', () => {
    before(async (browser, done) => {
        await browser.navigateTo('/s03/relativeLocatorsExercise')
        done()
    })

    test('last name use toRightOf', async () => {
        const firstNameSelector = '[data-testid="first-name-input"]'

        const lastNameElement = locateWith(By.css('input')).toRightOf(
            By.css(firstNameSelector)
        )
        const lastNameValue = await browser.getValue(lastNameElement)
        console.log(lastNameValue)
    })

    test('button text below the last name', async () => {
        const buttonBelowLastName = locateWith(By.css('button')).below(
            By.css('[data-testid="last-name-input"]')
        )
        const buttonText = await browser.getText(buttonBelowLastName)
        console.log(buttonText)
    })

    test('text of cancel button using near', async () => {
        const buttonNearFirstName = locateWith(By.css('button')).near(
            By.css('[data-testid="first-name-input"]')
        )
        const buttonText = await browser.getText(buttonNearFirstName)
        console.log(buttonText)
    })
})
