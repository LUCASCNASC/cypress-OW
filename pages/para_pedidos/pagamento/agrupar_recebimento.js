export class GroupReceipt {
  //Clica para NÃO agrupar lançamentos com o mesmo processo de recebimento.
  static notGroupReleases() {
    cy.get('.md-title')
      .should('be.visible')
      .and('have.text', 'Identificamos que já existe um pagamento lançado com esta mesma forma escolhida');
    cy.get('.md-dialog-content-body > .ng-binding')
      .should('be.visible')
      .and('have.text', 'Deseja agrupar este pagamento em um único pagamento?');
    cy.get('.md-confirm-button')
      .should('be.visible')
      .and('have.text', 'Sim, desejo agrupar este pagamento')
      .and('not.be.disabled')
      .invoke('css', 'color')
      .should('equal', 'rgb(36, 13, 105)');
    cy.get('.md-cancel-button')
      .should('be.visible')
      .and('have.text', 'Não, desejo mantê-los individuais')
      .and('not.be.disabled')
      .invoke('css', 'color')
      .should('equal', 'rgb(36, 13, 105)');
    cy.get('.md-cancel-button').click();
  }

  //Clica para SIM agrupar lançamentos com o mesmo processo de recebimento.
  static groupReleases() {
    cy.get('.md-title')
      .should('be.visible')
      .and('have.text', 'Identificamos que já existe um pagamento lançado com esta mesma forma escolhida');
    cy.get('.md-dialog-content-body > .ng-binding')
      .should('be.visible')
      .and('have.text', 'Deseja agrupar este pagamento em um único pagamento?');
    cy.get('.md-confirm-button')
      .should('be.visible')
      .and('have.text', 'Sim, desejo agrupar este pagamento')
      .and('not.be.disabled');
    cy.get('.md-cancel-button')
      .should('be.visible')
      .and('have.text', 'Não, desejo mantê-los individuais')
      .and('not.be.disabled');
    cy.get('.md-confirm-button').click();
  }

  //Seleciona dois lançamentos com o mesmo processo de recebimento para clicar depois em AGRUPAR.
  static selectReleasesGroup() {
    // Primeiro lançamento
    cy.get('[ng-show="parcelamentoAutomaticoDisponivel"] > .md-subheader-inner > .md-subheader-content')
      .should('be.visible')
      .and('have.text', 'Lançamentos já realizados');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding > .ng-binding').should('be.visible');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding').should('be.visible');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding > b')
      .should('be.visible')
      .and('have.text', '1º Vencimento:');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding').should('be.visible');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding > b')
      .should('be.visible')
      .and('have.text', 'Valor sem juros:');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding').should('be.visible');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding > b')
      .should('be.visible')
      .and('have.text', 'Valor da Parcela:');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding').should('be.visible');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding > b')
      .should('be.visible')
      .and('have.text', 'Subtotal:');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding').should('be.visible');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > b')
      .should('be.visible')
      .and('have.text', 'Agrupar');
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > .md-auto-horizontal-margin > .md-container')
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    // Segundo lançamento
    cy.get('[ng-show="parcelamentoAutomaticoDisponivel"] > .md-subheader-inner > .md-subheader-content')
      .should('be.visible')
      .and('have.text', 'Lançamentos já realizados');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding > .ng-binding').should('be.visible');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding').should('be.visible');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding > b')
      .should('be.visible')
      .and('have.text', '1º Vencimento:');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding').should('be.visible');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding > b')
      .should('be.visible')
      .and('have.text', 'Valor sem juros:');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding').should('be.visible');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding > b')
      .should('be.visible')
      .and('have.text', 'Valor da Parcela:');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding').should('be.visible');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding > b')
      .should('be.visible')
      .and('have.text', 'Subtotal:');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding').should('be.visible');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > b')
      .should('be.visible')
      .and('have.text', 'Agrupar');
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > .md-auto-horizontal-margin > .md-container')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  //Clica no botão AGRUPAR.
  static clickGroup() {
    cy.get('.layout-align-center-end > .flex-gt-sm-50 > .md-primary')
      .should('be.visible')
      .and('have.text', 'Agrupar')
      .click();
  }

  //Coloca o valor da primeira forma de pagamento no campo valor a parcelar.
  static firstValueInstallment() {
    cy.contains('label', 'Valor a parcelar').should('be.visible');
    cy.get('.campoMoeda_valorAparcelar').clear().wait(200).type('40000');
  }
}