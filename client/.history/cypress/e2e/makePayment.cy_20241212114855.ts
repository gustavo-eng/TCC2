describe('login', () => {
    it('make payment', () => {

      cy.visit('http://localhost:5173/login');

      cy.get('[data-testId="cypress-btn-title"]').should('exist');

      cy.get('input[placeholder="Digite seu email"]').should('exist');
      cy.get('input[placeholder="**********"]').should('exist');


      // Preencher os campos de email e senha
      cy.get('input[placeholder="Digite seu email"]').type('gustavodias.2000@alunos.utfpr.edu.br');
      cy.get('input[placeholder="**********"]').type('gustavodias');

      // Submeter o formulário
      cy.get('button[type="submit"]').click();

      // Verificar se a navegação ocorre (ajuste a URL conforme necessário)
      cy.url().should('include', '/tabCompetition');
      cy.get('[data-testId="open-modal-competition"]').should('exist');
      cy.get('button[data-testId="open-modal-competition"]').click();
      cy.get('[data-testId="select-gender"]').select('Masculino');
      cy.get('[data-testId="select-gender"]').select('Feminino');
      cy.get('[data-testId="select-gender"]').select('Masculino');
      cy.get('[data-testId="select-category"]').select('Senior');
      //cy.get('[data-testId="select-category"]').select('junior');
      //cy.get('[data-testId="select-category"]').select('Junior');
      cy.get('[data-testId="select-category"]').select(100);
      //cy.get('[data-testId="select-category"]').select('100');


      //Setup file
      //C:\Users\diasg\Desktop\TCC2\Comprovante
      //cy.get('[data-cy="file-input2"]').attachFile('comprovantee.jpg');
      cy.fixture('comprovantee.jpg').then(fileContent => {
        cy.get('[data-cy="file-input2"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: 'comprovantee.jpg',
        mimeType: 'image/jpg'
        });
        });




    })
  })