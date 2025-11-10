export class AdvanceNormal {
   //Botão para avançar para a tela de Gerar parcelas - com intercept
  static toInstallments() {
    cy.intercept('GET', '/views/list-action-buttons.html').as('api_tela_pagamento');
    cy.get('.flex-gt-sm-50 > .md-primary')
      .scrollIntoView()
      .wait(200)
      .should('contain', 'Avançar');
    cy.get('.flex-gt-sm-50 > .md-primary').click({ force: true });
    cy.get('.conteudo > .layout-align-center-center > .md-accent').should('be.visible');
    cy.get('h3').should('be.visible').and('have.text', 'Adicionando produtos/serviços...');
    cy.wait('@api_tela_pagamento', { timeout: 40000 });
  }

  //Botão para avançar para a tela de escolher transportadora e rota - com intercept
  static toTransporter() {
    cy.intercept('GET', '/views/carrinho/endereco.html').as('apiEndereco');
    cy.intercept('GET', '/services/v3/cidade?uf=PR').as('apiCidade');
    cy.get('.flex-gt-sm-50 > .md-primary')
      .scrollIntoView()
      .wait(200)
      .should('contain', 'Avançar');
    cy.get('.flex-gt-sm-50 > .md-primary').dblclick({ force: true });
    cy.wait(2000);
    cy.get('.conteudo > .layout-align-center-center > .md-accent').should('be.visible');
    cy.get('h3').should('be.visible').and('have.text', 'Adicionando produtos/serviços...');
    cy.wait('@apiEndereco', { timeout: 40000 });
    cy.wait('@apiCidade', { timeout: 40000 });
  }

  //Botão para avançar para a tela de Gerar parcelas (entrega) - com intercept
  static installmentDelivery() {
    cy.intercept('GET', '/views/list-action-buttons.html').as('api_tela_pagamento');
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
      .scrollIntoView()
      .wait(200)
      .should('contain', 'Avançar');
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary').click({ force: true });
    cy.wait('@api_tela_pagamento', { timeout: 40000 });
  }

  //Botão AVANÇAR, da tela antes de finalizar o pedido - com intercept
  static final() {
    cy.wait(300);
    cy.intercept('GET', '/views/carrinho/confirmacao.html').as('api_carinho_confirmacao');
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
      .scrollIntoView()
      .wait(200)
      .should('contain', 'Avançar');
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary').dblclick({ force: true });
    cy.wait('@api_carinho_confirmacao', { timeout: 40000 });
  }
}