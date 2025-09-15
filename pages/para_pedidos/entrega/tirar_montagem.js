export class ThrowAssembly {
  /**
   * Arrasta botão de Montagem do primeiro produto.
   */
  static fisrt() {
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.text', ' Montagem ')
      .click({ force: true });
  }

  /**
   * Arrasta botão de Montagem do segundo produto.
   */
  static second() {
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
      .scrollIntoView()
      .wait(200)
      .should('exist')
      .and('not.be.disabled');
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
      .should('be.visible')
      .and('not.be.disabled');
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.text', ' Montagem ')
      .click({ force: true });
  }
}