import { Application } from "spectron";

import { WidgetList } from "../po/WidgetList.po";
import { TabAdd } from "../po/TabAdd.po";
import { WidgetAdd } from "../po/WidgetAdd.po";
import { TabIndex } from "../po/TabIndex.po";


export interface Pages {
  WidgetList: WidgetList;
  TabAdd: TabAdd;
  WidgetAdd: WidgetAdd
  TabIndex: TabIndex
}

export class PageFactory implements Pages {
  public WidgetList: WidgetList;
  public TabAdd: TabAdd;
  public WidgetAdd: WidgetAdd;
  public TabIndex: TabIndex;

  public initPages(app: Application) {
    return {
      WidgetList: new WidgetList(app),
      TabAdd: new TabAdd(app),
      WidgetAdd: new WidgetAdd(app),
      TabIndex: new TabIndex(app),
    };
  }
}
