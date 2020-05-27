const Application = require('spectron').Application
const Config = require('./Config.js');

class TestUtils {
    app = new Application({
        path: Config.appPath,
        startTimeout: 50000,
        waitTimeout: 50000,
        chromeDriverLogPath: "./log.txt",
        webdriverLogPath: './webdriverlogs',
        webdriverOptions: {
            "deprecationWarnings": false
        }
    });

    async setUp() {
        const appInit = await this.app.start();
        await appInit.browserWindow.maximize();
        return appInit;
    }

    async tearDown() {
        if (this.app && this.app.isRunning()) {
            return await this.app.stop()
        }
    }
}

module.exports = new TestUtils();