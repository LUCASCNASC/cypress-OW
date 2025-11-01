/**
 * Comandos customizados para validação de URLs de menus específicos.
 * Boas práticas:
 * - Removidos parâmetros desnecessários.
 * - Padronização dos nomes dos comandos para inglês.
 * - Comentários explicativos.
 * - Sugestão: caso queira um comando único, consulte ao final do arquivo.
 */

// Valida URL do menu Departamentos
Cypress.Commands.add('validateUrlDepartments', () => {
  cy.url().should('include', '/#!/departamentos//');
});

// Valida URL do menu Serviços
Cypress.Commands.add('validateUrlServices', () => {
  cy.url().should('include', '/#!/servicos');
});

// Valida URL do menu Pedidos Pendentes
Cypress.Commands.add('validateUrlPendingOrders', () => {
  cy.url().should('include', '/#!/vendedor/pedidos');
});

// Valida URL do menu Cliente
Cypress.Commands.add('validateUrlClient', () => {
  cy.url().should('include', '/#!/cliente/cliente-cadastro');
});

// Valida URL do menu Cliente Completo
Cypress.Commands.add('validateUrlFullClient', () => {
  cy.url().should('include', '/#!/clienteCompleto');
});

// Valida URL do menu Pós Venda
Cypress.Commands.add('validateUrlAfterSales', () => {
  cy.url().should('include', '/#!/posvenda');
});

// Valida URL do menu Intenção de Compra
Cypress.Commands.add('validateUrlPurchaseIntent', () => {
  cy.url().should('include', '/#!/intencoescompra');
});

// Valida URL do menu Configurações
Cypress.Commands.add('validateUrlSettings', () => {
  cy.url().should('include', '/#!/customizacao');
});

// Valida URL do menu Minha Performance
Cypress.Commands.add('validateUrlMyPerformance', () => {
  cy.url().should('include', '/#!/vendedor');
});

/**
 * Sugestão alternativa: comando único e flexível para validação de URL de menu.
 * 
 * Exemplo de uso:
 * cy.validateMenuUrl('/#!/servicos');
 */
// Cypress.Commands.add('validateMenuUrl', (expectedPath) => {
//   cy.url().should('include', expectedPath);
// });