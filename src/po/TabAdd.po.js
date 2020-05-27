const ElementHandler = require('../helpers/ElementHandler.js');
const expect = require("chai").expect;


class TabAdd extends ElementHandler {
    
    // locators
    ADD_TAB_BTN = ".portal-tabs-btn-add";
    TAB_NAME_INPUT = "//input[@placeholder='Input Tab Name']";
    TAB_SELECTED = ".kuc-tabs-container-selection";
    SAVE_BTN = "//div[text()='Tab setting']//ancestor::div[@class='ant-modal-content']//button[@class='ant-btn ant-btn-primary']";
    TAB_NAME = "Tab " + Math.floor(Math.random() * 1000) + 1;

    // methods
    async clickAddTabBtn() {
        return await this.click(this.ADD_TAB_BTN);
    }

    // methods
    async inputTabName() {
        return await this.addValue(this.TAB_NAME_INPUT, this.TAB_NAME);
    }

    // methods
    async clickSaveBtn() {
        try {
            return await this.click(this.SAVE_BTN);
        } catch (e) {
            console.log(JSON.stringify(e))
        }
    }

    // methods
    async verifyTabNameSelected(tabName) {
        const result = await this.getText(this.TAB_SELECTED);
        expect(result).to.equal(tabName)
    }

    // methods
    async addTab() {
        await this.clickAddTabBtn();
        await this.inputTabName();
        await this.clickSaveBtn();
        return await this.verifyTabNameSelected(this.TAB_NAME)
    }
}

module.exports = TabAdd;

