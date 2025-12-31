import { umDiaAposHoje, trintaUmDiasAposHoje } from '../gerarDados'

export class GeralPagamentoPage {
  
  //Carregamento do modal Forma de pagamento.
  static loadingFormPayment() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Forma de pagamento');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.be.disabled');
  }

  //Clica no botão "PARCELAS".
  static clickGenerateInstallments() {
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista');
    cy.intercept('GET', '/views/carrinho/modalFormasPgto.html').as('api_modal_forma_pagamento');
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
      .scrollIntoView()
      .wait(200)
      .should('exist')
      .and('have.text', 'Parcelas');
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 });
    cy.wait('@api_modal_forma_pagamento', { timeout: 40000 });
  }

  //Clica no botão "PARCELAS" ao alterar a data de vencimento.
  static clickGenerateInstallAlterDue() {
    cy.wait(2000);
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary').click({ force: true });
  }

  //Preenche pagamento de entrada.
  static chooseEntryFormPayment() {
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
      .should('exist')
      .and('be.visible');
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'R$');
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding')
      .should('exist')
      .and('be.visible');
    cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab')
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled');
    cy.get(':nth-child(3) > .md-fab')
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled');
    cy.get('input.campoMoeda_totalEntrada')
      .should('exist')
      .and('be.visible')
      .type('30000');
    cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
      .click({ force: true });
    cy.get('div.md-text.ng-binding')
      .contains('3861 - T.A. A Receber A Vista')
      .click({ force: true });
  }

  //Clica no botão "PAGAMENTO".
  static clickGeneratePayment() {
    cy.get('.white > .layout-align-center-center > .md-primary')
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.text', 'Pagamento')
      .click({ force: true });
  }

  //No campo 1º vencimento, coloca o dia de amanhã.
  static insertDateTomorrow1Due() {
    const data_hoje = umDiaAposHoje();
    cy.get('.gerar-parcelas > .layout-wrap')
      .scrollIntoView()
      .wait(300);
    cy.contains('1º Vencimento').parent().find('input')
      .clear()
      .wait(200)
      .type(data_hoje);
  }

  //No campo 1º vencimento, coloca 31 dias após hoje.
  static insertDate31Days1Due() {
    const data_31_dias = trintaUmDiasAposHoje();
    cy.get('.gerar-parcelas > .layout-wrap')
      .scrollIntoView()
      .wait(300);
    cy.contains('1º Vencimento').parent().find('input')
      .clear()
      .wait(200)
      .type(data_31_dias);
  }
}