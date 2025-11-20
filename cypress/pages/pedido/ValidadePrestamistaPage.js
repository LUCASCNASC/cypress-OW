export class ValidadePrestamistaPage {
  /**
   * Valida adição do serviço prestamista após clicar para adicionar.
   */
  static adicionado() {
    cy.get('[ng-repeat="itemAtual in item.servicos track by $index"] > ul')
      .scrollIntoView()
      .wait(200)
      .should('be.visible');
    cy.get('ul > :nth-child(1) > .ng-binding').should('be.visible');
    cy.get('ul > :nth-child(1) > sup').should('be.visible').and('have.text', 'R$');
    cy.get(':nth-child(2) > b').should('be.visible').and('have.text', 'Vendedor:');
    cy.get('[ng-repeat="itemAtual in item.servicos track by $index"] > ul > :nth-child(2)').should('be.visible');
    cy.get('ul > :nth-child(2) > .md-primary').should('be.visible').and('not.be.disabled');
  }

  /**
   * Valida adição do prestamista na página de finalizar o pedido.
   */
  static paginaFinal() {
    cy.get('.ng-scope > ul').scrollIntoView().wait(200).should('be.visible');
    cy.get('ul > :nth-child(1) > .ng-binding').should('be.visible');
    cy.get('ul > :nth-child(1) > sup').should('be.visible').and('have.text', 'R$');
    cy.get('ul > :nth-child(2) > b').should('be.visible').and('have.text', 'Vendedor:');
    cy.get('.ng-scope > ul > :nth-child(2)').should('be.visible');
  }

  /**
   * Valida adição do serviço prestamista após agrupamento de lançamentos.
   */
  static adicionadoRecebAgrupado() {
    cy.get('b.ng-binding')
      .contains('T.A. Prestamista Não separa Com juros - Futuro')
      .should('be.visible');
  }
}