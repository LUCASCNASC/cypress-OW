export class Receipt {
  //Escolhe forma de pagamento 3860 (A Receber Futuro) do pedido de venda.
  static main() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('exist')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherFormaPagamentoPrincipal');
    cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherFormaPagamentoPrincipal', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3862 (A Receber CDCI).
  static secondForm() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('exist')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.get(':nth-child(3) > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-binding')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherSegundaFormaPagamento');
    cy.contains('3862 - T.A.A Receber CDCI').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherSegundaFormaPagamento', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3861 (A Receber À Vista).
  static cash() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('exist')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3861 - T.A. A Receber A Vista')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebAVista');
    cy.contains('3861 - T.A. A Receber A Vista').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebAVista', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3865 (A Receber Futuro - Proposta).
  static proposalCredit() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3865 - T.A. A Receber Futuro - Proposta')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherFormaPagaPropCredito');
    cy.contains('3865 - T.A. A Receber Futuro - Proposta').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherFormaPagaPropCredito', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3866 (A Receber Prestamista).
  static withMoneylender() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3866 - T.A. A Receber Prestamista')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebComPrestamista');
    cy.contains('3866 - T.A. A Receber Prestamista').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebComPrestamista', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3867 (A Receber Contrato Financeira).
  static contractFinance() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3867 - T.A. A Receber Contrato Financeira')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebContratoFinanceira');
    cy.contains('3867 - T.A. A Receber Contrato Financeira').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebContratoFinanceira', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3868 (PIX TEF).
  static pixTEF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3868 - T.A. A Receber PIX TEF')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebPixTEF');
    cy.contains('3868 - T.A. A Receber PIX TEF').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebPixTEF', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3870 (Crédito TEF).
  static creditTEF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3870 - T.A. A Receber Crédito TEF')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebCreditoTEF');
    cy.contains('3870 - T.A. A Receber Crédito TEF').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebCreditoTEF', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3871 (Débito POS).
  static debitTEF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3871 - T.A. A Receber Débito POS')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebDebitoPOS');
    cy.contains('3871 - T.A. A Receber Débito POS').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebDebitoPOS', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3872 (Crédito POS).
  static creditPOS() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3872 - T.A. A Receber Crédito POS')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebCreditoPOS');
    cy.contains('3872 - T.A. A Receber Crédito POS').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebCreditoPOS', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3873 (Cheque).
  static check() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3873 - T.A. A Receber Cheque')
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebCheque');
    cy.contains('3873 - T.A. A Receber Cheque').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebCheque', { timeout: 40000 });
  }

  // Prestamista Abatimento %

  //Escolhe forma de pagamento 3874 (Futuro Prestamista com juros).
  static futMoneyWithFees() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3874 - T.A. A Receber Futuro - para Prestamista')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaComJuros');
    cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaComJuros', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3875 (Presente CDCI Prestamista).
  static presentMoney() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3875 - T.A.A Receber Presente CDCI - para Prestamista')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebPresentePrestamista');
    cy.contains('3875 - T.A.A Receber Presente CDCI - para Prestamista').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebPresentePrestamista', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3876 (Futuro Prestamista sem juros).
  static futMoneyWithoutFees() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }

  // Prestamista Valor Fixo

  //Escolhe forma de pagamento 3880 (Futuro com juros - Prestamista Valor Fixo).
  static futWithFeesMoneyRebVF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3878 (Presente CDCI - Prestamista Valor Fixo).
  static presentMoneyRebVF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3878 - T.A.A Receb Presente CDCI - Prest. Valor Fixo')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3878 - T.A.A Receb Presente CDCI - Prest. Valor Fixo').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }

  //Escolhe forma de pagamento 3879 (Futuro sem juros - Prestamista Valor Fixo).
  static futWithoutRebVF() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3879 - T.A. A Receb Fut sem juros - Prest. Valor Fixo')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3879 - T.A. A Receb Fut sem juros - Prest. Valor Fixo').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }

  // Prestamista Valor Fixo - Origem Produto

  //Escolhe forma de pagamento 3881 (Futuro com juros - Prestamista Origem Produto).
  static futWithoutFeesRebOriginPrd() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('3881 - T.A. A Receb Fut com juros - Prest. Origem Produto')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros');
    cy.contains('3881 - T.A. A Receb Fut com juros - Prest. Origem Produto').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 });
  }
}