import './commands';
require('cypress-plugin-tab');

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para impedir que o Cypress falhe no teste com essa exceção
    return false;
  });