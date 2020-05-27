const TabAdd = require('./TabAdd.po');
const WidgetAdd = require('./WidgetAdd.po');

class PageFactory {
    initPage(app) {
        return {
            TabAdd: new TabAdd(app),
            WidgetAdd: new WidgetAdd(app),
        }
    }
}

module.exports = new PageFactory();