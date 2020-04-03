import log from "../helpers/LoggerDecorator";
import { Helpers } from "../helpers/Helpers";
import { expect } from "chai";


export class TabAdd extends Helpers {

  // locators
  private ADD_TAB_BTN = ".portal-tabs-btn-add";
  private TAB_NAME_INPUT = ".ant-input";
  private TAB_SELECTED = ".kuc-tabs-container-selection";
  private SAVE_BTN = "//span[(text()='Save')]/parent::button";
  private TAB_NAME = "Tab " + Math.floor(Math.random() * 1000) + 1;

  // methods
  @log
  private async clickAddTabBtn() {
    return await this.click(this.ADD_TAB_BTN);
  }

  // methods
  @log
  private async inputTabName() {
    return await this.addValue(this.TAB_NAME_INPUT, this.TAB_NAME);
  }

  // methods
  @log
  private async clickSaveBtn() {
    return await this.click(this.SAVE_BTN);
  }

  // methods
  @log
  private async verifyTabNameSelected(tabName: string) {
    const result = await this.getText(this.TAB_SELECTED);
    expect(result).to.equal(tabName)
  }

  // methods
  @log
  public async addTab() {
    await this.clickAddTabBtn();
    await this.inputTabName();
    await this.clickSaveBtn();
    await this.verifyTabNameSelected(this.TAB_NAME)
  }
}

