///Page Object para operações e validações relacionadas à aba Rota.
//Todos os métodos são estáticos para facilitar o uso direto.
export class GeneralRefRoute {
  //Valida e clica na aba Rota.
  static clickAbaRoute() {
    cy.get('#menu_items_pri > :nth-child(3)')
      .should('be.visible')
      .and('have.text', 'Rotas');
    cy.intercept('GET', '/views/cliente/clienteRotasLista.html').as('api_cliente_completo_rota');
    cy.get('#menu_items_pri > :nth-child(3)').click();
    cy.wait('@api_cliente_completo_rota', { timeout: 40000 });
  }

  //Clica no botão "+" para adicionar uma nova Rota.
  static clickAddedNewRoute() {
    cy.get('.layout-align-end-end > .md-fab')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.layout-align-end-end > .md-fab').click();
  }

  //Valida campos do modal de rota enquanto está vazio.
  static modalRouteEmptyValidade() {
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Rotas');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('label[for="txtTpEnderecoRota"]').should('have.text', 'Tipo de endereço');
    cy.get('#txtTpEnderecoRota').should('be.visible').and('have.value', '');
    cy.get('#txtRota').should('be.visible').and('have.value', '');
    cy.get('.layout-gt-sm-column > .md-block > .ng-binding').should('be.visible');
  }

  //Valida mensagem de sucesso de rota incluída.
  static messRouteAddedSucess() {
    cy.get('#toast-container > :nth-child(1)').should('be.visible');
    cy.get(':nth-child(1) > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get(':nth-child(1) > .toast-message').should('be.visible').and('have.text', 'Rota incluída com sucesso.');
  }

  //Valida informações da rota adicionada.
  static infoRouteAdded() {
    cy.get('.md-whiteframe-2dp').should('be.visible');
    // Adicione validações específicas aqui se necessário
  }
}