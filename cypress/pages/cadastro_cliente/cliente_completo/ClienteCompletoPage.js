//Todos os métodos são estáticos para facilitar o uso direto.
export class ClienteCompletoPage {
  //Valida e clica no menu de opções.
  static clickMenuOpcoes() {
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('[aria-label="Menu de opções"] > .ng-binding').click({ force: true });
  }

  //Escolhe a opção "Cliente completo" no menu de opções.
  static clickOpcaoClienteCompleto() {
    cy.get('a[aria-label="Cliente completo"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('a[aria-label="Cliente completo"]').should('have.attr', 'aria-label', 'Cliente completo');
    cy.get('a[aria-label="Cliente completo"]').scrollIntoView().click({ force: true });
  }

  //Valida e clica no botão para salvar cadastro de cliente.
  static clickSalvarCliente() {
    cy.get('.btn')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.btn').click({ force: true });
  }

  //Dentro do cadastro de cliente completo, clica no menu interno para mostrar opções.
  static clickMenuCadastrarClienteCompleto() {
    cy.get('#menu_click_pri')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#menu_click_pri').click();
  }

  //Valida e clica na aba Referências.
  static ClickAbaReferencias() {
    cy.get('#menu_items_pri > :nth-child(5)')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/refEtapaPessoalLista.html').as('api_referencias');
    cy.get('#menu_items_pri > :nth-child(5)').click();
    cy.wait('@api_referencias', { timeout: 40000 });
  }

  //Valida botão salvar desabilitado antes de preencher campos obrigatórios.
  static validarBotaoSalvarDesabilitado() {
    cy.get('#btnModalAddEndereco')
      .should('be.visible')
      .and('not.have.attr', 'not.disabled');
  }

  //Valida mensagem de alerta para endereço obrigatório ao tentar salvar sem endereço.
  static validateMessageEnderecoObrigatorio() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title').should('be.visible').and('have.text', 'Alerta');
    cy.get('.toast-message').should('be.visible').and('have.text', 'Um endereço do tipo padrão é obrigatório.');
  }

  //Valida modal de "Aguarde carregando..." após clicar para salvar.
  static validateModalAguardeCarregando() {
    cy.get('.layout-align-center-center > h3')
      .should('be.visible')
      .and('have.text', 'Aguarde carregando...');
  }

  //Valida mensagem "Registro salvo com sucesso!" após salvar cadastro.
  static validateMessageSalvoSucesso() {
    cy.get('.toast-success').should('be.visible');
    cy.get(':nth-child(1) > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Registro salvo com sucesso!');
  }
}