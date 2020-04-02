import { Application } from "spectron";
import Config from './Config'

export class TestUtils {

  public app: Application = new Application({
    path: Config.appPath,
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
