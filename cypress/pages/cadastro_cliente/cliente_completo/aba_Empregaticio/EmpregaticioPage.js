//Page Object para operações e validações relacionadas à aba Empregatício.
//Todos os métodos são estáticos para facilitar o uso direto sem instanciação.
export class EmpregaticioPage {
  //Valida e clica na aba Empregatício.
  static clickAbaEmpregaticio() {
    cy.get('#menu_items_pri > :nth-child(6)')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/clienteEmpregaticioLista.html').as('api_aba_empregaticio');
    cy.get('#menu_items_pri > :nth-child(6)').click();
    cy.wait('@api_aba_empregaticio', { timeout: 40000 });
  }

  //Valida os elementos da tela de Empregatício quando vazia (nenhum registro adicionado).
  static validateAbaEmpregaticioVazio() {
    cy.get('h3').should('be.visible').and('have.text', 'Empregatício');
    cy.get('.layout-align-end-end > .md-fab').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.text-align-center').should('be.visible').and('have.text', 'Não foi encontrado nenhum registro');
    cy.get('.btn').should('be.visible').and('not.have.attr', 'disabled');
  }

  //Clica no botão "+" para adicionar um novo vínculo empregatício.
  static clickAdicionarNovoEmpregaticio() {
    cy.intercept('GET', '/services/v3/dados_tabela/tipocomprovanterenda').as('api_modal_empregaticio');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_modal_empregaticio', { timeout: 40000 });
  }
}