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

export class ThrowAssembly {
  //Arrasta botão de Montagem do primeiro produto.
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

  //Arrasta botão de Montagem do segundo produto.
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