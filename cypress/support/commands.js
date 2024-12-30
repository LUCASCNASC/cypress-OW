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

import '@testing-library/cypress/add-commands'

// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
  
  cy.visit('/');

  cy.get('#txtusername').type('sabium.automacao'); //login

  cy.get('#txtpassword').type('123.automacao'); //senha

  cy.get('.test_btnSalvarCliente').click(); //botão entrar

  cy.get('.ng-scope > .ng-binding')
    .should('contain','Entrando no sistema') //Validando mensagem "Entrando no sistema" logo após clicarmos no botão Entrar
  
  cy.wait(6500)

  cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
    .should('contain','Cliente') //Validando se realmente fez o login

});

Cypress.Commands.add('urlAposLogin', (username, password) => {
  
  cy.url()
    .should('include', '/#!/principal/')

});