import log from "../helpers/LoggerDecorator";
import { Helpers } from "../helpers/Helpers";
import { expect } from "chai";


export class WidgetAdd extends Helpers {

  // locators
  private WIDGET_IFRAME = ".ant-card-grid";
  private TAB_CONTENT = ".kuc-tabs-tab-contents > div";
  private IFRAME_URL_INPUT = ".ant-modal-content .ant-input";
  private MODEL_SAVE_BTN = ".ant-modal-content .ant-btn-primary";
  private TAB_SELECTED = ".kuc-tabs-container-selection";
  IFRAME_URL: string = "https://vnexpress.net"

  // methods
  @log
  private async dragAndDropIframeWidget() {
    await this.moveToObject(this.WIDGET_IFRAME);
    await this.buttonDown();
    await this.dragAndDrop(this.WIDGET_IFRAME, this.TAB_CONTENT);
    await this.buttonUp();
    return await this.app.client.pause(3000)
  }

  // methods
  @log
  private async refreshTabSelected() {
    const tabName = await this.getText(this.TAB_SELECTED);
    const tabLocator = `//li[text()="${tabName}"]`;
    await this.app.client.refresh()
    return await this.click(tabLocator)
  }

  // methods
  @log
  private async inputIframeURL() {
    return await this.setValue(this.IFRAME_URL_INPUT, this.IFRAME_URL)
  }

  // methods
  @log
  private async clickSaveBtn() {
    return await this.click(this.MODEL_SAVE_BTN)
  }

  // methods
  @log
  public async addIframeWidget() {
    await this.dragAndDropIframeWidget()
    await this.refreshTabSelected()
    await this.inputIframeURL()
    await this.clickSaveBtn()
  }
}

