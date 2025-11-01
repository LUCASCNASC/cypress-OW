/**
 * Page Object para interações gerais com produtos no fluxo de pedidos.
 * Todos os métodos são estáticos para facilitar o uso sem instanciação.
 */
export class GeneralProduct {
  /**
   * Seleciona um produto na busca e adiciona ao pedido.
   */
  static chooseProductSearch() {
    cy.intercept('GET', '/services/v3/produto_tambem_compraram**').as('api_produto_tambem_compraram');

    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.md-list-item-text > .ng-scope').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');

    cy.get('.md-list-item-text').should('be.visible').click({ force: true });

    cy.wait('@api_produto_tambem_compraram', { timeout: 40000 });
  }

  /**
   * Seleciona a voltagem do produto para adicionar ao pedido.
   */
  static clickVoltageProduct() {
    cy.intercept('GET', '/services/v3/produto_relacionado**').as('api_produto_relacionado_lista');

    cy.get('md-list.md-default-theme > .btn-rounded > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Selecione a cor, a voltagem e o local de saldo');

    cy.get('.layout-align-end-center > .md-fab').should('be.visible').and('not.be.disabled');
    cy.get('.md-secondary-container > div > .ng-binding > sup').should('be.visible').and('have.text', 'R$');
    cy.get('.md-list-item-inner')
      .should('be.visible')
      .and('contain', 'Cód. Fabricante:')
      .and('contain', 'Filial:')
      .and('contain', 'Saldo Local:')
      .and('contain', 'Saldo Depósito:');

    cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style').click({ force: true });

    cy.wait('@api_produto_relacionado_lista', { timeout: 40000 });
  }

  /**
   * Clica no botão "Adicionar" para incluir o produto selecionado.
   */
  static clickAddProduct() {
    cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados');

    cy.get('[style="padding: 0px 5px;"] > .md-accent')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.be.disabled')
      .and('contain', 'Adicionar')
      .click({ force: true });

    cy.wait('@api_servicos_vinculados', { timeout: 40000 });
  }
}