class BasePage {
  visit(path = '') {
    cy.visit(path);
  }

  getTitle() {
    return cy.title();
  }
}

module.exports = BasePage;
