import '@testing-library/cypress/add-commands';
import 'cypress-file-upload';

/**
 * Seleciona um produto na busca e adiciona ao pedido.
 * Garante que todos os elementos relevantes do produto estejam visíveis antes do clique.
 */
Cypress.Commands.add('selectProductSearch', () => {
  cy.intercept('GET', '/services/v3/produto_tambem_compraram**').as('api_produto_tambem_compraram');

  cy.get('.resultado-imagem').should('be.visible');
  cy.get('.md-resultado-titulo').should('be.visible');
  cy.get('.md-list-item-text > .ng-scope').should('be.visible');
  cy.get('.badge-saldo.ng-binding').should('be.visible');
  cy.get('sup').should('be.visible').and('have.text', 'R$');
  cy.get('.valor-busca').should('be.visible');

  // Adiciona o produto ao carrinho
  cy.get('.md-list-item-text').should('be.visible').click({ force: true });

  cy.wait('@api_produto_tambem_compraram', { timeout: 40000 });
});

/**
 * Seleciona a voltagem do produto para adicionar ao pedido.
 * Garante visibilidade e habilitação dos elementos antes da ação.
 */
Cypress.Commands.add('clickVoltageProduct', () => {
  cy.intercept('GET', '/services/v3/produto_relacionado**').as('api_produto_relacionado_lista');

  cy.get('md-list.md-default-theme > .btn-rounded > .md-toolbar-tools > .flex')
    .should('be.visible')
    .and('have.text', 'Selecione a cor, a voltagem e o local de saldo');

  cy.get('.layout-align-end-center > .md-fab')
    .should('be.visible')
    .and('not.be.disabled');

  cy.get('.md-secondary-container > div > .ng-binding > sup')
    .should('be.visible')
    .and('have.text', 'R$');

  cy.get('.md-list-item-inner')
    .should('be.visible')
    .and('contain', 'Cód. Fabricante:')
    .and('contain', 'Filial:')
    .and('contain', 'Saldo Local:')
    .and('contain', 'Saldo Depósito:');

  cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
    .click({ force: true });

  cy.wait('@api_produto_relacionado_lista', { timeout: 40000 });
});

/**
 * Clica no botão de adicionar produto após seleção de voltagem.
 * Garante visibilidade e habilitação antes do clique.
 */
Cypress.Commands.add('clickAddProduct', () => {
  cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados');

  cy.get('[style="padding: 0px 5px;"] > .md-accent')
    .scrollIntoView()
    .wait(200)
    .should('be.visible')
    .and('not.be.disabled')
    .and('contain', 'Adicionar')
    .click({ force: true });

  cy.wait('@api_servicos_vinculados', { timeout: 40000 });
});

/**
 * Finaliza o pedido, verifica todos os elementos do card de finalização.
 */
Cypress.Commands.add('clickFinishOrder', () => {
  cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados');
  cy.intercept('POST', '/services/v3/pedido_finalizar').as('api_pedido_finalizar');

  cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
    .scrollIntoView()
    .wait(200)
    .should('be.visible')
    .and('not.be.disabled')
    .should('have.text', 'Finalizar pedido');

  cy.get('button[ng-click="confirmarPedido()"]').click({ force: true });

  cy.get('.md-toolbar-tools h2.flex')
    .should('be.visible')
    .and('contain', 'Pedido Concluído');

  cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
    .should('be.visible')
    .and('not.have.attr', 'disabled');

  cy.get('.layout-column > .md-accent').should('be.visible');

  cy.get('.layout-column > h4')
    .should('be.visible')
    .and('have.text', 'Finalizando pedido...');

  cy.get('.layout-column > p > span')
    .should('be.visible')
    .and('have.text', 'ATENÇÃO:')
    .and('have.css', 'color', 'rgb(204, 0, 0)');

  cy.get('.layout-column > p')
    .should('be.visible')
    .and('contain', 'Não atualize a página enquanto o pedido estiver sendo finalizado.')
    .and('have.css', 'color', 'rgb(204, 0, 0)');

  cy.wait('@api_pedido_finalizar', { timeout: 40000 });
});

/**
 * Valida o card de pedido concluído após finalizar o pedido.
 * Repete o fluxo de finalização e checa todos os elementos.
 */
Cypress.Commands.add('validateOrderGenerated', () => {
  cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados');
  cy.intercept('POST', '/services/v3/pedido_finalizar').as('api_pedido_finalizar');

  cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
    .scrollIntoView()
    .wait(200)
    .should('be.visible')
    .and('not.be.disabled')
    .should('have.text', 'Finalizar pedido');

  cy.get('button[ng-click="confirmarPedido()"]').click({ force: true });

  cy.get('.md-toolbar-tools h2.flex')
    .should('be.visible')
    .and('contain', 'Pedido Concluído');

  cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
    .should('be.visible')
    .and('not.have.attr', 'disabled');

  cy.get('.layout-column > .md-accent').should('be.visible');

  cy.get('.layout-column > h4')
    .should('be.visible')
    .and('have.text', 'Finalizando pedido...');

  cy.get('.layout-column > p > span')
    .should('be.visible')
    .and('have.text', 'ATENÇÃO:')
    .and('have.css', 'color', 'rgb(204, 0, 0)');

  cy.get('.layout-column > p')
    .should('be.visible')
    .and('contain', 'Não atualize a página enquanto o pedido estiver sendo finalizado.')
    .and('have.css', 'color', 'rgb(204, 0, 0)');

  cy.wait('@api_pedido_finalizar', { timeout: 40000 });
});

/**
 * Escolhe um cliente com rota, preenchendo o CPF/CNPJ,
 * pesquisando e selecionando o cliente na lista.
 */
Cypress.Commands.add('chooseClient', () => {
  cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
    .wait(500)
    .type('48976249089 {downArrow}');

  cy.intercept('/views/cliente/modalClientes.html').as('api_modalclientes');
  cy.get('.md-block > .ng-binding').should('be.visible').click();
  cy.wait('@api_modalclientes', { timeout: 40000 });

  cy.intercept('/consultaclientes/*').as('api_consultaclientes');
  cy.wait('@api_consultaclientes', { timeout: 40000 });

  cy.intercept('/services/v3/pedido_validar_cliente').as('api_pedido_validar_cliente');
  cy.get('.md-3-line > div.md-button > .md-no-style').should('be.visible').click();
  cy.wait('@api_pedido_validar_cliente', { timeout: 40000 });
});