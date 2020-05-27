const WAIT_TIME = 50000;
class ElementHandler {

  constructor(app) {
    this.app = app;
  }

  async click(element) {
    await this.waitForExist(element);
    await this.waitForPresence(element);
    await this.app.client.click(element);
  }

  async dragAndDrop(sourceElement, destinationElement) {
    await this.waitForExist(sourceElement);
    await this.waitForExist(destinationElement);
    await this.app.client.dragAndDrop(sourceElement, destinationElement)
  }

  async moveToObject(element) {
    await this.waitForExist(element);
    await this.app.client.moveToObject(element)
  }

  async buttonDown() {
    await this.app.client.buttonDown()
  }


  async buttonUp() {
    await this.app.client.buttonUp()
  }

  async setValue(element, text) {
    await this.waitForExist(element);
    await this.waitForPresence(element);
    await this.app.client.clearElement(element);
    await this.app.client.setValue(element, text);
  }

  async addValue(element, text) {
    await this.waitForExist(element);
    await this.waitForPresence(element);
    return await this.app.client.addValue(element, text);
  }

  async setValue(element, text) {
    await this.waitForExist(element);
    await this.waitForPresence(element);
    return await this.app.client.setValue(element, text);
  }

  async getText(element) {
    await this.waitForExist(element);
    return await this.app.client.getText(element);
  }

  async getValue(element) {
    await this.waitForExist(element);
    return await this.app.client.getValue(element);
  }

  async getAttribute(element, attrName) {
    await this.waitForExist(element);
    return await (this.app.client.getAttribute(element, attrName)).then(attr => {
      return attr;
    });
  }

  async waitForExist(element) {
    await this.app.client.waitForExist(element, WAIT_TIME);
  }

  async waitForNotExist(element) {
    await this.app.client.waitForExist(element, WAIT_TIME, true);
  }

  async waitForPresence(element) {
    await this.app.client.waitForVisible(element, 5 * 60 * 1000);
  }

  async waitForText(element) {
    await this.app.client.waitForText(element, WAIT_TIME);
  }

  async waitUntilTextExists(element, text) {
    await this.app.client.waitUntilTextExists(element, text, WAIT_TIME);
  }

  async waitForSelected(element) {
    await this.app.client.waitForSelected(element, WAIT_TIME);
  }

  async waitForVisible(element) {
    await this.app.client.waitForVisible(element, WAIT_TIME);
  }

  async isDisplayed(element) {
    return await this.app.client.isVisible(element);
  }

  async isElementPresent(element) {
    return await this.app.client.isExisting(element);
  }
}
module.exports = ElementHandler;