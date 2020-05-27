const ElementHandler = require('../helpers/ElementHandler.js');
const fs = require("fs");
const Config = require('../helpers/Config');


class WidgetAdd extends ElementHandler {

    // locators
    WIDGET_IFRAME = "//*[text()='Iframe']";
    WIDGET_HTML = "//*[text()='HTML']";
    TAB_CONTENT = ".kuc-tabs-tab-contents > div";
    MODAL_INPUT = "//input[@placeholder='Input URL']";
    MODAL_INPUT_HTML = "//textarea[@placeholder='Input HTML']";
    MODAL_SAVE_BTN = "//div[@class='ant-modal-mask']//parent::div//button[@class='ant-btn ant-btn-primary']";
    TAB_SELECTED = ".kuc-tabs-container-selection";
    IFRAME_URL = "https://vnexpress.net";

    // methods
    async refreshTabSelected() {
        const tabName = await this.getText(this.TAB_SELECTED);
        const tabLocator = `//li[text()="${tabName}"]`;
        await this.app.client.refresh()
        return await this.click(tabLocator)
    }

    // methods
    async dragAndDropIframeWidget() {
        await this.app.client.pause(3000);
        await this.moveToObject(this.WIDGET_IFRAME);
        await this.buttonDown();
        await this.dragAndDrop(this.WIDGET_IFRAME, this.TAB_CONTENT);
        await this.buttonUp();
        return await this.app.client.pause(3000);
    }

    // methods
    async dragAndDropHTMLWidget() {
        await this.app.client.pause(3000)
        await this.moveToObject(this.WIDGET_HTML);
        await this.buttonDown();
        await this.dragAndDrop(this.WIDGET_HTML, this.TAB_CONTENT);
        await this.buttonUp();
        return await this.app.client.pause(3000)
    }

    // methods
    async inputHTML() {
        let data = await fs.readFileSync(Config.HTMLFilePath, 'utf8');
        return await this.addValue(this.MODAL_INPUT_HTML, data.toString())
    }

    // methods
    async inputIframeURL() {
        return await this.setValue(this.MODAL_INPUT, this.IFRAME_URL);
    }

    // methods
    async clickSaveBtn() {
        return await this.click(this.MODAL_SAVE_BTN)
    }

    // methods
    async clickSaveBtn() {
        return await this.click(this.MODAL_SAVE_BTN)
    }

    // methods
    async addIframeWidget() {
        await this.dragAndDropIframeWidget()
        await this.inputIframeURL()
        return await this.clickSaveBtn()
    }

    // methods
    async addHTMLWidget() {
        await this.dragAndDropHTMLWidget()
        await this.inputHTML()
        return await this.clickSaveBtn()
    }
}

module.exports = WidgetAdd;

