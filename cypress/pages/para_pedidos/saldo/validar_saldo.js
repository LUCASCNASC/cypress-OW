export class ValidateBalance {
  /**
   * Valida produto com saldo disponível local.
   */
  static withBalance() {
    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.label')
      .should('be.visible')
      .and('have.text', 'Saldo disponivel')
      .invoke('css', 'background-color')
      .should('equal', 'rgb(92, 184, 92)');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');
    // cy.get('.expandeIcone').should('be.visible'); // Uncomment if needed
  }

  /**
   * Valida produto com saldo disponível no CD.
   */
  static withBalanceCD() {
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
    // cy.get('.expandeIcone').should('be.visible'); // Uncomment if needed
  }

  /**
   * Valida produto com saldo indisponível.
   */
  static withoutBalance() {
    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.label')
      .should('be.visible')
      .and('have.text', 'Saldo indisponivel')
      .invoke('css', 'background-color')
      .should('equal', 'rgb(217, 83, 79)');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');
    // cy.get('.expandeIcone').should('be.visible'); // Uncomment if needed
  }
}