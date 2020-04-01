import log from "../helpers/LoggerDecorator";
import { Helpers } from "../helpers/Helpers";

export class WidgetList extends Helpers {

  // locators
  private headerTextLocator = ".ant-card-head-title";

  // methods
  @log
  public async getWidgetListTitle() {
    return await this.getText(this.headerTextLocator);
  }
}

