import { expect } from "chai";
import { Application } from "spectron";
import { PageFactory, Pages } from "../helpers/PageFactory";
import { TestUtils } from "../helpers/TestUtils";

describe("Initial test suite", () => {

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

  it("Verify widget list title", async () => {
    const result = await pages.WidgetList.getWidgetListTitle();
    expect(result).to.equals("Default Widget");
  });
});
