import '@testing-library/cypress/add-commands'
import 'cypress-file-upload';
import users from '../../e2e/users.json';
import '@testing-library/cypress/add-commands';
import 'cypress-file-upload';

//fazer login no pedido web, com o user 393
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('#txtusername').type(users.userSabium.login);
  cy.get('#txtpassword').type(users.userSabium.password);
  cy.intercept('GET', '/images/icons/discount.svg').as('api_discount');
  cy.get('.test_btnSalvarCliente').click(); //botão entrar
  cy.get('.ng-scope > .ng-binding').should('contain','Entrando no sistema');
  cy.wait('@api_discount', { timeout: 40000 });
  cy.get('.click-cliente > .informe-o-cliente > .cliente-header').should('contain','Cliente');

  //validate url after login
  cy.url().should('include', '/');
});

//validar título da página após logarmos no pedido web - título da aba do navegador
Cypress.Commands.add('validateTitlePage', (username, password) => {
  
  cy.title().should('eq', 'Sabium Mobile');
});