import BasePage from './BasePage';

class HomePage extends BasePage {
  visit(url) {
    cy.visit(url);
  }

  filterByColor() {
    cy.get('#colors__Black').click();
    cy.get('#filterBtn').click();
  }

  validateFiltering() {
    cy.get('#product_grid .grid_item').should('have.length', 2);
  }

  accessProductPage() {
    cy.get('#colors__Black').click();
    cy.get('#filterBtn').click();
    cy.get('#product_grid .grid_item img').first().click();
  }
}

export default HomePage;