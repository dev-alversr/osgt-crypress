const BasePage = require('./BasePage');

class HomePage extends BasePage {
  open() {
    this.visit('/');
  }
}

module.exports = new HomePage();
