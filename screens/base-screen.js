const { I, env } = inject()

module.exports = {
    locatorAccessibilityID: (buttonName) => `~${buttonName}`,
    waitForVisible(locator) {
        I.waitForVisible(locator, env.TIMEOUT)
    },
    waitForElement(locator) {
        I.waitForElement(locator, env.TIMEOUT)
    },
    waitForText(text) {
        I.waitForText(text, env.TIMEOUT)
    },
    tapOnButton(locator) {
        this.waitForElement(locator)
        I.tap(locator)
    },
    clearField(locator){
        this.waitForElement(locator)
        I.clearField(locator)
    },
    inputText(text, locator) {
        this.waitForElement(locator)
        I.fillField(locator, text)
    },
    getText(locator) {
        this.waitForElement(locator)
        return I.grabTextFrom(locator)
    },
    tapOnButtonByAccessibilityID(buttonName) {
        this.waitForClickable(this.locatorAccessibilityID(buttonName))
        I.tap(this.locatorAccessibilityID(buttonName))
    }
}