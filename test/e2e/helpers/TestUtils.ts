import { Application } from "spectron";
import * as path from 'path';

export class TestUtils {

  public appPath = path.join(__dirname, '..', '..', '..', '..', 'portal-builder-client/out/kintone-portal-builder-darwin-x64/kintone-portal-builder.app/Contents/MacOS/kintone-portal-builder')

  public app: Application = new Application({
    path: this.appPath,
    startTimeout: 50000,
    waitTimeout: 50000,
    webdriverOptions: {
      "deprecationWarnings": false
    }
  });

  public startApplication() {
    // start application
    return this.app.start();
  }

  public async setUp() {
    const appInit = await this.startApplication();
    await appInit.browserWindow.maximize();
    return appInit;
  }

  public async tearDown() {
    // stop application
    if (this.app && this.app.isRunning()) {
      return await this.app.stop()
    }
  }
}
