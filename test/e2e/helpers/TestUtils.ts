import { Application } from "spectron";
import * as path from 'path';

export class TestUtils {
  public app: Application;
  public windowsCount = 2;

  public windowByIndex() { return this.windowsCount - 1; }
  public baseDir = path.join(__dirname, '..', '..', '..', '..', 'portal-builder-client');
  public appPath = path.join(__dirname, '..', '..', '..', '..', 'portal-builder-client/out/kintone-portal-builder-darwin-x64/kintone-portal-builder.app/Contents/MacOS/kintone-portal-builder')


  public setUp() {
    // start application
    console.log(this.baseDir);
    this.app = new Application({
      path: this.appPath,
      startTimeout: 50000,
      waitTimeout: 50000,
    });
    return this.app.start();
  }

  public tearDown() {
    // close browser
    // const windows = this.app.client.windowHandles() as any;
    this.app.client.close();
    // if (this.app && this.app.isRunning()) {
    //   this.app.mainProcess.exit(0);
    // }
  }
}
