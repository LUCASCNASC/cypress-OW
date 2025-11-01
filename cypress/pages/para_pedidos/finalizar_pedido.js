export class FinishOrder {
  /**
   * Valida modal de proposta de crédito gerada.
   */
  static validatePropCreditGenerated() {
    cy.get(':nth-child(5) > .md-transition-in > ._md > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('contain', 'Análise de crédito');
    cy.get(':nth-child(5) > .md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.contains('Deseja enviar a proposta #').should('be.visible');
    cy.contains(' para a análise de crédito?').should('be.visible');
    cy.get(':nth-child(5) > .md-transition-in > .layout-align-center-center.layout-row > .md-accent')
      .should('be.visible')
      .and('have.text', ' Não ')
      .and('not.have.attr', 'disabled');
    cy.get(':nth-child(5) > .md-transition-in > .layout-align-center-center.layout-row > .md-primary')
      .should('be.visible')
      .and('have.text', ' Sim ')
      .and('not.have.attr', 'disabled')
      .click({ force: true });
  }

  /**
   * Valida card de Pedido Concluído - alterado com sucesso.
   */
  static validateOrderChangedSucess() {
    cy.get('.md-toolbar-tools h2.flex').should('be.visible').and('contain', 'Pedido Concluído');
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.icon.success.animate').should('exist').find('.line.tip.animateSuccessTip').should('exist');
    cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
      .should('be.visible')
      .and('contain', 'Pedido gerado:');
    cy.get('[ng-show="editarPedido"]').should('be.visible').and('contain', 'Pedido alterado com sucesso');
    cy.get('#pedido-numero').should('be.visible');
    cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
      .should('be.visible')
      .and('contain', 'Imprimir')
      .and('not.have.attr', 'disabled');
    cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
      .should('be.visible')
      .and('contain', 'Ok')
      .and('not.have.attr', 'disabled');
  }

  /**
   * Botão para finalizar o pedido.
   */
  static clickFinishOrder() {
    cy.intercept('POST', '/services/v3/pedido_finalizar').as('api_pedido_finalizar');
    cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.be.disabled')
      .should('have.text', 'Finalizar pedido');
    cy.get('button[ng-click="confirmarPedido()"]').click({ force: true });
    cy.get('.md-toolbar-tools h2.flex').should('be.visible').and('contain', 'Pedido Concluído');
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.layout-column > .md-accent').should('be.visible');
    cy.get('.layout-column > h4').should('be.visible').and('have.text', 'Finalizando pedido...');
    cy.get('.layout-column > p > span')
      .should('be.visible')
      .and('have.text', 'ATENÇÃO:')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
    cy.get('.layout-column > p')
      .should('be.visible')
      .and('contain', 'Não atualize a página enquanto o pedido estiver sendo finalizado.')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
    cy.wait('@api_pedido_finalizar', { timeout: 40000 });
  }

  /**
   * Valida card de Pedido Concluído - gravado com sucesso.
   */
  static validateOrderGenerated() {
    cy.get('.md-toolbar-tools h2.flex').should('be.visible').and('contain', 'Pedido Concluído');
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.icon.success.animate').should('exist').find('.line.tip.animateSuccessTip').should('exist');
    cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
      .should('be.visible')
      .and('contain', 'Pedido gerado:');
    cy.get('[ng-show="!editarPedido"]').should('be.visible').and('contain', 'Pedido gravado com sucesso!');
    cy.get('#pedido-numero').should('be.visible');
    cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
      .should('be.visible')
      .and('contain', 'Imprimir')
      .and('not.have.attr', 'disabled');
    cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
      .should('be.visible')
      .and('contain', 'Ok')
      .and('not.have.attr', 'disabled');
  }
}