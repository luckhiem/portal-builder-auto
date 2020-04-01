import { Application } from "spectron";

import { WidgetList } from "../po/WidgetList.po";
import { TabAdd } from "../po/TabAdd.po";

export interface Pages {
  WidgetList: WidgetList;
  TabAdd: TabAdd;
}

export class PageFactory implements Pages {
  public WidgetList: WidgetList;
  public TabAdd: TabAdd;

  public initPages(app: Application) {
    return {
      WidgetList: new WidgetList(app),
      TabAdd: new TabAdd(app),
    };
  }
}
