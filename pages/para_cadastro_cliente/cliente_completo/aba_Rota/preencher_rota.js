/**
 * Page Object para preenchimento dos campos de Rota.
 * Todos os métodos são estáticos para facilitar o uso direto.
 */
export class FillRefRoute {
  /**
   * Preenche o fluxo completo de cadastro de rota e seleciona opções.
   */
  static routaComplete() {
    const rota_cadastro = "560";
    cy.get('label[for="txtRota"]').should('have.text', 'Rota');
    cy.get('#txtRota').type(rota_cadastro);
    cy.wait(200);

    cy.intercept('GET', '/services/v3/rota?idrota=560').as('api_rota_560');
    cy.get('.layout-gt-sm-column > .md-block > .ng-binding').click({ force: true });
    cy.wait('@api_rota_560', { timeout: 40000 });

    cy.get('v-pane-header.ng-scope > div').click({ force: true });
    cy.wait(200);

    cy.intercept('GET', '/services/v3/local_entrega?rota=560').as('api_local_entrega_560');
    cy.contains('560 - T.A. ROTA AUTOMAÇÃO MARINGÁ').click();
    cy.contains('560 - T.A. CIDADE AUTOMAÇÃO').click();
    cy.wait('@api_local_entrega_560', { timeout: 40000 });
  }

  /**
   * Seleciona o tipo de endereço "Padrão" no modal de rota.
   */
  static typeAdressRoute() {
    cy.get('#txtTpEnderecoRota').click({ force: true });
    cy.get('.md-text.ng-binding').contains('Padrão').click({ force: true });
  }
}