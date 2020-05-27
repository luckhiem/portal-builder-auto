const TestUtils = require('../helpers/TestUltils.js');
const PageFactory = require('../po/PageFactory');

describe("Verify can adding tab normaly", () => {
  let app;
  let pages;

  before(async () => {
    app = await TestUtils.setUp();
    pages = PageFactory.initPage(app)
  });

  beforeEach(async () => {
    await pages.WidgetAdd.refreshTabSelected();
  });

  after(async () => {
    await TestUtils.tearDown();
  });

  it("Verify can adding tab normaly", async () => {
    await pages.TabAdd.addTab();
    await pages.WidgetAdd.addIframeWidget();
    return await app.client.pause(5000)
  });

  it("Verify can adding tab normaly", async () => {
    await pages.TabAdd.addTab();
    await pages.WidgetAdd.addIframeWidget();
    return await app.client.pause(5000)
  });

  it("Verify can adding tab normaly", async () => {
    await pages.TabAdd.addTab();
    await pages.WidgetAdd.addIframeWidget();
    return await app.client.pause(5000)
  });
});