export class PedidoExclusivaPage {

  //Aumentar quantidade a ser vendida para 5 unidades.
  static increaseAmountSaleFive() {
    cy.get('[ng-click="delItem()"]').should('be.visible').and('not.be.disabled');
    cy.get('[ng-model="quantidadeShow"]').should('be.visible').and('be.disabled').and('have.value', '1');
    cy.get('[ng-click="addItem()"]').should('be.visible').and('not.be.disabled');
    for (let i = 0; i < 5; i++) {
      cy.get('[ng-click="addItem()"]').click();
    }
  }

  //Aumentar quantidade a ser vendida para 10 unidades.
  static increaseAmountSaleTen() {
    cy.get('[ng-click="delItem()"]').should('be.visible').and('not.be.disabled');
    cy.get('[ng-model="quantidadeShow"]').should('be.visible').and('be.disabled').and('have.value', '1');
    cy.get('[ng-click="addItem()"]').should('be.visible').and('not.be.disabled');
    for (let i = 0; i < 10; i++) {
      cy.get('[ng-click="addItem()"]').click();
    }
  }

  //Validando produto com saldo indisponível (remoto).
  static balanceRemoteReceive() {
    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.label')
      .should('be.visible')
      .and('have.text', 'Saldo disponivel')
      .invoke('css', 'background-color')
      .should('equal', 'rgb(240, 173, 78)');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');
    cy.get('.expandeIcone').should('be.visible');
  }
}