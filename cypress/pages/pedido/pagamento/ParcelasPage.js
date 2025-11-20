export class ParcelasPage {
  //Seleciona 1 parcela (1X) da forma de pagamento escolhida.
  static one() {
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }

  //Seleciona 2 parcelas (2X) da forma de pagamento escolhida.
  static two() {
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(2) > div.ng-binding')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }

  //Seleciona 4 parcelas (4X) da forma de pagamento escolhida.
  static for() {
    cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.be.disabled');
    cy.intercept('GET', '/views/carrinho/modalSeguroPrestamista.html').as('api_modal_seguro_prestamista');
    cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding')
      .click({ force: true });
    cy.wait('@api_modal_seguro_prestamista', { timeout: 40000 });
  }
}