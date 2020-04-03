import { Application } from "spectron";
import { PageFactory, Pages } from "../helpers/PageFactory";
import { TestUtils } from "../helpers/TestUtils";

describe("Verify can adding widget normaly", async () => {

  let pages: Pages;
  let utils = new TestUtils();
  let app: Application;

  before(async () => {
    app = await utils.setUp();
    pages = new PageFactory().initPages(app);
  });

  after(async () => {
    await utils.tearDown();
  });

  it("Verify can adding HTML widget normaly", async () => {
    await pages.TabAdd.addTab();
    await pages.WidgetAdd.addHTMLWidget();
    return await app.client.pause(5000);
  });
});
