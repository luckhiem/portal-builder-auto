import { expect } from "chai";
import { Application } from "spectron";
import 'mocha';
import { PageFactory, Pages } from "../helpers/PageFactory";
import { TestUtils } from "../helpers/TestUtils";

describe("Initial test suite", () => {

  let pages: Pages;
  let utils;
  let app: Application;

  before(async () => {
    // set app instance
    utils = new TestUtils();
    app = await utils.setUp();
    pages = new PageFactory().initPages(app);
  });

  after(() => {
    // close browser
    utils.tearDown();
  });

  it("Verify widget list title", async () => {
    const result = await pages.initialPage.getWidgetListTitle();
    expect(result).to.equals("Default Widget");
  });
});
