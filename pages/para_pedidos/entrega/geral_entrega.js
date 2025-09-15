export class GeneralDelivery {
  /**
   * Clica no campo transportadora e escolhe a transportadora.
   */
  static chooseTransporter() {
    cy.get('.progressbar').scrollIntoView().wait(200);
    cy.get('[name="transportadora"]').click({ force: true }).wait(300);
    cy.get('span[md-highlight-text="transpAutoCompleteSearchText"]').contains('1').click();
  }

  /**
   * Escolhe rota completa, rota maringá.
   */
  static chooseRoute() {
    cy.get('.rota-frete > .md-icon-right > .ng-binding').scrollIntoView().click({ force: true });
    cy.wait(400);
    cy.get('#txtBuscaRotaModal').type('1');
    cy.get('md-icon[ng-click="pesquisar()"]').click();
    cy.wait(400);
    cy.get('v-pane-header.ng-scope > div').click();
    cy.get(':nth-child(4) > .padding-10-0').click();
    cy.wait(200);
  }

  /**
   * Valida modal de inconsistências - rota e transportadora.
   */
  static modalInconsRouteTransporter() {
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Inconsistências');
    cy.get(':nth-child(1) > h3')
      .should('be.visible')
      .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:');
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
      .should('be.visible')
      .and('have.text', 'Processo de venda');
    cy.get(':nth-child(1) > .md-avatar-icon').should('be.visible');
    cy.get(':nth-child(1) > .md-list-item-text > .no-truncate')
      .should('be.visible')
      .and('have.text', 'A Rota é obrigatória.');
    cy.get(':nth-child(1) > .md-avatar-icon').should('be.visible');
    cy.get(':nth-child(2) > .md-list-item-text > .no-truncate')
      .should('be.visible')
      .and(
        'have.text',
        'Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar.'
      );
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }

  /**
   * Valida modal de inconsistências - apenas transportadora.
   */
  static modalInconsOnlyTransporter() {
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Inconsistências');
    cy.get(':nth-child(1) > h3')
      .should('be.visible')
      .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:');
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
      .should('be.visible')
      .and('have.text', 'Processo de venda');
    cy.get('.md-avatar-icon').should('be.visible');
    cy.get('.no-truncate')
      .should('be.visible')
      .and(
        'have.text',
        'Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar.'
      );
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }

  /**
   * Valida modal de inconsistências - apenas rota.
   */
  static modalInconsOnlyRoute() {
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Inconsistências');
    cy.get(':nth-child(1) > h3')
      .should('be.visible')
      .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:');
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
      .should('be.visible')
      .and('have.text', 'Processo de venda');
    cy.get('.md-avatar-icon').should('be.visible');
    cy.get('.no-truncate')
      .should('be.visible')
      .and('have.text', 'A Rota é obrigatória.');
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }
}