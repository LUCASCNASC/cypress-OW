export class ThrowDelivery {
  //Arrasta botão de Retirada / Entrega do primeiro produto.
  static freightFirst() {
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-container')
      .scrollIntoView()
      .wait(500)
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-container > .md-thumb-container > .md-thumb')
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.text', ' Retirada / Entrega ')
      .click({ force: true });
  }

  //Arrasta botão de Retirada / Entrega do segundo produto.
  static freightSecond() {
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
      .scrollIntoView()
      .wait(300)
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.text', ' Retirada / Entrega ')
      .click({ force: true });
  }

  //Arrasta botão de Retirada / Entrega do terceiro produto.
  static freightThird() {
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
      .scrollIntoView()
      .wait(300)
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.text', ' Retirada / Entrega ')
      .click({ force: true });
  }
}