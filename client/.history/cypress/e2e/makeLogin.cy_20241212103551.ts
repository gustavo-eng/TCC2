describe('login', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/login');

      cy.get('[data-testId="cypress-btn-title"]').should('exist');

      cy.get('input[placeholder="Digite seu email"]').should('exist');
      cy.get('input[placeholder="**********"]').should('exist');


      // Preencher os campos de email e senha
      cy.get('input[placeholder="Digite seu email"]').type('fprj@hotmail.com');
      cy.get('input[placeholder="**********"]').type('fprj10');

      // Submeter o formulário
      cy.get('button[type="submit"]').click();

      // Verificar se a navegação ocorre (ajuste a URL conforme necessário)
      cy.url().should('include', '/tabCompetition');

    })
  })
