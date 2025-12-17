export class ProcessoRecebPrestamistaPage {
  
  //3874 - Futuro Prestamista com juros (%)
  static futWithFeesAbatPercentage() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button').should('be.visible').and('not.be.disabled');
    cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').scrollIntoView().should('be.visible').and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaComJuros');
    cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaComJuros', { timeout: 40000 });
  }
  //3875 - Presente CDCI Prestamista (%)
  static presentAbatPercentage() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button').should('be.visible').and('not.be.disabled');
    cy.contains('3875 - T.A.A Receber Presente CDCI - para Prestamista').scrollIntoView().should('be.visible').and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebPresentePrestamista');
    cy.contains('3875 - T.A.A Receber Presente CDCI - para Prestamista').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebPresentePrestamista', { timeout: 40000 });
  }
  //3876 - Futuro Prestamista sem juros (%)
  static futWithoutFeesAbatPercentage() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button').should('be.visible').and('not.be.disabled');
    cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').scrollIntoView().should('be.visible').and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }
  //3880 - Futuro com juros Prestamista Valor Fixo
  static futWithFeesAbatVF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button').should('be.visible').and('not.be.disabled');
    cy.contains('3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo').scrollIntoView().should('be.visible').and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }
  //3878 - Presente CDCI Prestamista Valor Fixo
  static presentAbatVF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button').should('be.visible').and('not.be.disabled');
    cy.contains('3878 - T.A.A Receb Presente CDCI - Prest. Valor Fixo').scrollIntoView().should('be.visible').and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3878 - T.A.A Receb Presente CDCI - Prest. Valor Fixo').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }
  //3879 - Futuro sem juros Prestamista Valor Fixo
  static futWithoutFeesAbatVF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button').should('be.visible').and('not.be.disabled');
    cy.contains('3879 - T.A. A Receb Fut sem juros - Prest. Valor Fixo').scrollIntoView().should('be.visible').and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3879 - T.A. A Receb Fut sem juros - Prest. Valor Fixo').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }
  //3881 - Futuro com juros Prestamista Origem Serviço
  static futWithFeesAbatOS() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex').should('be.visible').and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button').should('be.visible').and('not.be.disabled');
    cy.contains('3881 - T.A. A Receb Fut com juros - Prest. Origem Produto').scrollIntoView().should('be.visible').and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3881 - T.A. A Receb Fut com juros - Prest. Origem Produto').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }
}