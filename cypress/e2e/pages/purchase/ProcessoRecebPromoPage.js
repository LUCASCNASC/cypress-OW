export class ProcessoRecebPromoPage {
  
  //Seleciona "3860 - T.A. A Receber Futuro" da promoção.
  static pagPrincipal() {
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Formas de pagamento');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('button[aria-label="3860 - T.A. A Receber Futuro   Futuro"]').click();
  }

  //Seleciona "3866 - T.A. A Receber Prestamista" da promoção.
  static receberPrest() {
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Formas de pagamento');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('button[aria-label="3866 - T.A. A Receber Prestamista   Futuro"]').click();
  }

  //3880 - Futuro c/ juros Prestamista Valor Fixo - PROMOÇÃO
  static termFutWithFeesPrestAbatVF() {
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Formas de pagamento');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('button[aria-label="3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo   Futuro"]').click();
  }

  //3874 - Futuro c/ juros Prestamista % - PROMOÇÃO
  static termFutWithFeesPrest() {
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Formas de pagamento');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('button[aria-label="3874 - T.A. A Receber Futuro - para Prestamista   Futuro"]').click();
  }

  //3876 - Futuro s/ juros Prestamista - PROMOÇÃO
  static termFutWithoutFeesPrest() {
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Formas de pagamento');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('button[aria-label="3876 - T.A. A Receber Futuro - para Prestamista sem juros   Futuro"]').click();
  }

  //3875 - Presente CDCI Prestamista - PROMOÇÃO
  static entryPresentPrest() {
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Formas de pagamento');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('button[aria-label="3875 - T.A.A Receber Presente CDCI - para Prestamista   Presente"]').click();
  }

  //3881 - Futuro c/ juros Prestamista Origem Produto - PROMOÇÃO
  static termFutWithFeesPrestAbatVFOS() {
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Formas de pagamento');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('button[aria-label="3881 - T.A. A Receb Fut com juros - Prest. Origem Produto   Futuro"]').click();
  }

  //3882 - Presente c/ juros Prestamista Origem Produto - PROMOÇÃO
  static termPresentWithFeesPrestAbatVFOS() {
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Formas de pagamento');
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('button[aria-label="3882 - T.A. A Receb Presen com juros - Prest. Origem Prd   Presente"]').click();
  }
}