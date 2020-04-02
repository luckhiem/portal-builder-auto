import { Application } from "spectron";
import { PageFactory, Pages } from "../helpers/PageFactory";
import { TestUtils } from "../helpers/TestUtils";

describe("Verify can adding tab normaly", () => {

  let pages: Pages;
  let utils;
  let app: Application;

  before(async () => {
    utils = new TestUtils();
    app = await utils.setUp();
    pages = new PageFactory().initPages(app);
  });

  after(async () => {
    await utils.tearDown();
  });

  it("Verify can adding tab normaly", async () => {
    await pages.TabAdd.addTab();
    return await app.client.pause(10000)
  });
});
