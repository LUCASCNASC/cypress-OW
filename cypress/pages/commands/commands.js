import '@testing-library/cypress/add-commands'
import 'cypress-file-upload';
import users from '../../e2e/users.json';

// cypress/support/commands.js

//fazer login no pedido web, com o usuário 393
Cypress.Commands.add('login', (username, password) => {
  
  cy.visit('/');
  cy.get('#txtusername').type(users.userSabium.login); //login
  cy.get('#txtpassword').type(users.userSabium.password); //senha
  cy.intercept('GET', '/images/icons/discount.svg').as('api_discount')
  cy.get('.test_btnSalvarCliente').click(); //botão entrar
  cy.get('.ng-scope > .ng-binding').should('contain','Entrando no sistema') //Validando mensagem "Entrando no sistema" 
  cy.wait('@api_discount', { timeout: 40000 })
  cy.get('.click-cliente > .informe-o-cliente > .cliente-header').should('contain','Cliente') //Validando se realmente fez o login
});

//validar url após logarmos no pedido web
Cypress.Commands.add('urlAposLogin', (username, password) => {
  
  cy.url()
    .should('include', '/')
});

//validar título da página após logarmos no pedido web - título da aba do navegador
Cypress.Commands.add('tituloPagina', (username, password) => {
  
  cy.title()
    .should('eq', 'Sabium Mobile') //Validando título da página
});import '@testing-library/cypress/add-commands';
import 'cypress-file-upload';

/**
 * Faz login no sistema Pedido Web.
 * Usuário e senha estão fixos (recomendado migrar para uso de variáveis de ambiente futuramente).
 * Valida se o login foi realizado com sucesso.
 */
Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('#txtusername').type('sabium.automacao'); // Login fixo
  cy.get('#txtpassword').type('123.automacao');    // Senha fixa
  cy.intercept('GET', '/images/icons/discount.svg').as('api_discount');
  cy.get('.test_btnSalvarCliente').click(); // Botão entrar
  cy.get('.ng-scope > .ng-binding').should('contain','Entrando no sistema'); // Valida mensagem
  cy.wait('@api_discount', { timeout: 40000 });
  cy.get('.click-cliente > .informe-o-cliente > .cliente-header').should('contain','Cliente'); // Valida login
});

/**
 * Valida URL após login no Pedido Web.
 * Certifica-se que a URL contém '/' após o login.
 */
Cypress.Commands.add('validateUrlAfterLogin', () => {
  cy.url().should('include', '/');
});

/**
 * Valida o título da página após login no Pedido Web.
 * Verifica se o título do navegador está correto.
 */
Cypress.Commands.add('validatePageTitle', () => {
  cy.title().should('eq', 'Sabium Mobile');
});