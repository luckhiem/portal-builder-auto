import log from "../helpers/LoggerDecorator";
import * as fs from 'fs';
import { Helpers } from "../helpers/Helpers";
import { expect } from "chai";
import Config from '../helpers/Config';


export class WidgetAdd extends Helpers {

  // locators
  private WIDGET_IFRAME = "//*[text()='Iframe']";
  private WIDGET_HTML = "//*[text()='HTML']";
  private TAB_CONTENT = ".kuc-tabs-tab-contents > div";
  private MODAL_INPUT = ".ant-modal-content .ant-input";
  private MODAL_SAVE_BTN = ".ant-modal-content .ant-btn-primary";
  private TAB_SELECTED = ".kuc-tabs-container-selection";
  IFRAME_URL: string = "https://vnexpress.net";

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
  private async dragAndDropIframeWidget() {
    await this.moveToObject(this.WIDGET_IFRAME);
    await this.buttonDown();
    await this.dragAndDrop(this.WIDGET_IFRAME, this.TAB_CONTENT);
    await this.buttonUp();
    return await this.app.client.pause(3000)
  }

  // methods
  @log
  private async dragAndDropHTMLWidget() {
    await this.moveToObject(this.WIDGET_HTML);
    await this.buttonDown();
    await this.dragAndDrop(this.WIDGET_HTML, this.TAB_CONTENT);
    await this.buttonUp();
    return await this.app.client.pause(3000)
  }

  // methods
  @log
  private async inputHTML() {
    let data = await fs.readFileSync(Config.HTMLFilePath, 'utf8');
    return await this.addValue(this.MODAL_INPUT, data.toString())
  }

  // methods
  @log
  private async inputIframeURL() {
    return await this.addValue(this.MODAL_INPUT, this.IFRAME_URL)
  }

  // methods
  @log
  private async clickSaveBtn() {
    return await this.click(this.MODAL_SAVE_BTN)
  }

  // methods
  @log
  public async addIframeWidget() {
    await this.dragAndDropIframeWidget()
    await this.refreshTabSelected()
    await this.inputIframeURL()
    await this.clickSaveBtn()
  }

  // methods
  @log
  public async addHTMLWidget() {
    await this.dragAndDropHTMLWidget()
    await this.refreshTabSelected()
    await this.inputHTML()
    await this.clickSaveBtn()
  }
}

