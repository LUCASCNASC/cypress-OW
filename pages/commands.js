import '@testing-library/cypress/add-commands'
import 'cypress-file-upload';

// cypress/support/commands.js

//fazer login no pedido web, com o usuário 393
Cypress.Commands.add('login', (username, password) => {
  
  cy.visit('/');
  cy.get('#txtusername').type('sabium.automacao'); //login
  cy.get('#txtpassword').type('123.automacao'); //senha
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
});