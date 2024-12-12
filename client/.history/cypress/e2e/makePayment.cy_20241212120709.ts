describe("login", () => {
  it("make payment", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('[data-testId="cypress-btn-title"]').should("exist");

    cy.get('input[placeholder="Digite seu email"]').should("exist");
    cy.get('input[placeholder="**********"]').should("exist");

    // Preencher os campos de email e senha
    cy.get('input[placeholder="Digite seu email"]').type(
      "gustavodias.2000@alunos.utfpr.edu.br"
    );
    cy.get('input[placeholder="**********"]').type("gustavodias");

    // Submeter o formulário
    cy.get('button[type="submit"]').click();

    // Verificar se a navegação ocorre (ajuste a URL conforme necessário)
    cy.url().should("include", "/tabCompetition");
    cy.get('[data-testId="open-modal-competition"]').should("exist");
    cy.get('button[data-testId="open-modal-competition"]').click();
    cy.get('[data-testId="select-gender"]').select("Masculino");
    cy.get('[data-testId="select-gender"]').select("Feminino");
    cy.get('[data-testId="select-gender"]').select("Masculino");
    cy.get('[data-testId="select-category"]').select("Senior");
    cy.get('[data-cy="file-input2"]').attachFile("comprovantee.png");
    // Caso o botão de submit tenha um ícone de carregamento, podemos verificar se ele é exibido ao clicar:
    cy.get('button[data-cy="make-payment-submitt"]', { timeout: 3000 })
      .should("be.visible")
      .and("have.text", "Salvar"); // Verifica se o botão está visível e com o texto correto

    //cy.get('button[data-cy="make-payment-submitt"]', { timeout: 3000 }).click();
    cy.get('button[data-testId="make-payment"]', { timeout: 2000 }).click();
  });
});
