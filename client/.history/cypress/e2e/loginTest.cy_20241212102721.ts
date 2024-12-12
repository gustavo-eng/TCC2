/*
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/create-account')
    })
  })
*/

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login"); // Ajuste a URL conforme o seu ambiente de teste
  });

  it("should render the login form with title, inputs, and buttons", () => {
    cy.get("h1").contains("Bem vindo").should("exist");

    // Verificar se os campos de email e senha estão presentes
    cy.get('input[placeholder="Digite seu email"]').should("exist");
    cy.get('input[placeholder="**********"]').should("exist");

    // Verificar se o botão de login está presente
    cy.get('button[type="submit"]').contains("Entrar").should("exist");

    // Verificar links de navegação
    cy.get("button").contains("Esqueceu a senha?").should("exist");
    cy.get("button").contains("Criar conta agora").should("exist");
  });

  it("should submit the form with valid data", () => {
    // Preencher os campos de email e senha
    cy.get('input[placeholder="Digite seu email"]').type("test@example.com");
    cy.get('input[placeholder="**********"]').type("password123");

    // Submeter o formulário
    cy.get('button[type="submit"]').click();

    // Verificar se a navegação ocorre (ajuste a URL conforme necessário)
    cy.url().should("include", "/dashboard"); // Substitua por onde o login deve redirecionar
  });

  it("should show validation error for empty fields", () => {
    // Submeter o formulário sem preencher nada
    cy.get('button[type="submit"]').click();

    // Verificar se as mensagens de erro são exibidas
    cy.get('input[placeholder="Digite seu email"]')
      .parent()
      .should("have.class", "input-error");
    cy.get('input[placeholder="**********"]')
      .parent()
      .should("have.class", "input-error");
  });

  it("should show loading state when submitting", () => {
    // Preencher os campos de email e senha
    cy.get('input[placeholder="Digite seu email"]').type("fprj@hotmail.com");
    cy.get('input[placeholder="**********"]').type("fprj10");

    // Interceptar o envio para simular um atraso
    cy.intercept("POST", "/login", {
      statusCode: 200,
      delay: 1000, // Atraso de 1 segundo para simular o carregamento
    }).as("loginRequest");

    // Submeter o formulário
    cy.get('button[type="submit"]').click();

    // Verificar se o botão exibe o estado de carregamento
    cy.get('button[type="submit"]').should("be.disabled"); // Botão desabilitado durante o loading

    // Esperar pela requisição de login
    cy.wait("@loginRequest");

    // Verificar se a navegação ou qualquer outro comportamento pós-submissão acontece
    cy.url().should("include", "/dashboard"); // Ajuste conforme o fluxo do login
  });

  it("should navigate to forgot password page when clicked", () => {
    // Clicar no link "Esqueceu a senha?"
    cy.get("button").contains("Esqueceu a senha?").click();

    // Verificar se a navegação foi para a página de recuperação de senha
    cy.url().should("include", "/forgot-password");
  });

  it("should navigate to create account page when clicked", () => {
    // Clicar no link "Criar conta agora"
    cy.get("button").contains("Criar conta agora").click();

    // Verificar se a navegação foi para a página de criação de conta
    cy.url().should("include", "/create-account");
  });
});
