describe('login', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/login');

      cy.get('[data-testId="cypress-btn-title"]').should('exist');
    })
  })
