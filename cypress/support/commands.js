// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
  
  // Visite a página de login
  cy.visit('http://10.7.0.42:2701/');

  // Preencha o campo de nome de usuário
  cy.get('#txtusername').type('sabium.automacao');

  // Preencha o campo de senha
  cy.get('#txtpassword').type('123.automacao');

  // Submeta o formulário de login
  cy.get('.test_btnSalvarCliente').click();

  cy.get('.ng-scope > .ng-binding')
    .should('contain','Entrando no sistema') //Validando mensagem "Entrando no sistema" logo após clicarmos no botão Entrar
  
  cy.wait(6500)

  cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
    .should('contain','Cliente') //Validando se realmente fez o login

});




