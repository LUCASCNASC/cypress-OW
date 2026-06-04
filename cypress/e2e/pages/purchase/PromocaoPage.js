export class PromocaoPage {
  
  //Seleciona a primeira promoção do produto.
  static selectFirstPromoProduct() {
    cy.get('[ng-click="modalSaldo()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Promoções');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#dialogContent_137 > [style="padding: 0 5px"] > .md-primary').should('be.visible').and('not.be.disabled');
    cy.get('.md-3-line > div.md-button > .md-no-style').should('be.visible').and('not.be.disabled').click();
  }

  //Valida produtos com etiqueta "PROMOÇÃO" (ticket vermelho).
  static ticketPromocaoPage() {
    cy.get('.md-secondary-container > div > .ng-scope').should('be.visible').and('not.be.disabled');
    cy.get('span[ng-if="(gradeAtual.tempromocao)"]').should('have.text', 'PROMOÇÃO').and('be.visible');
    cy.get('span[ng-if="(gradeAtual.tempromocao)"]')
      .should('have.css', 'background-color', 'rgb(255, 0, 0)')
      .and('have.css', 'color', 'rgb(255, 255, 255)');
  }

  //Valida modal de carregamento "Adicionando produtos/serviços...".
  static messAddProductsServices() {
    cy.get('.conteudo > .layout-align-center-center > .md-accent').should('be.visible');
    cy.get('h3').should('be.visible').and('have.text', 'Adicionando produtos/serviços...');
  }

  //Valida e adiciona serviço prestamista.
  static addPrestamista() {
    cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised > .ng-scope').should('be.visible').and('not.be.disabled');
    cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised').should('be.visible').and('not.be.disabled').click({ force: true });
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex').should('be.visible').and('have.text', 'Seguro prestamista');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('.md-subheader-content').should('be.visible').and('contain.text', 'Seguro Prestamista');
    cy.get('.md-no-style > .md-list-item-text > :nth-child(1)').should('be.visible');
    cy.get('.md-list-item-text > :nth-child(2)').should('be.visible').and('contain', 'Quantidade');
    cy.get('.md-list-item-text > :nth-child(3)').should('be.visible').and('contain', 'Valor unitário');
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding > sup').should('be.visible').and('contain', 'R$');
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding').should('be.visible');
    cy.get('#checkbox-145-0 > .md-container').should('be.visible').and('not.be.disabled').click({ force: true });
    cy.get('md-dialog-actions.layout-row > .md-primary').should('be.visible').and('not.be.disabled').and('have.text', ' Ok ').click({ force: true });
  }

  //Valida "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções.
  static typeServiceFreeValidate() {
    cy.contains('Tipo(s) Serviço(s) Isento(s):').should('be.visible');
    cy.contains('Garantias').should('be.visible');
  }
}