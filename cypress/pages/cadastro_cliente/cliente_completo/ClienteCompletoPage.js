//Page Object para operações de interação no cadastro de cliente completo.

//Todos os métodos são estáticos para facilitar o uso direto.
export class ClickClientComplete {
  //Valida e clica no menu de opções.
  static iconMenuOptions() {
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('[aria-label="Menu de opções"] > .ng-binding').click({ force: true });
  }

  //Escolhe a opção "Cliente completo" no menu de opções.
  static optionClientComplete() {
    cy.get('a[aria-label="Cliente completo"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('a[aria-label="Cliente completo"]').should('have.attr', 'aria-label', 'Cliente completo');
    cy.get('a[aria-label="Cliente completo"]').scrollIntoView().click({ force: true });
  }

  //Valida e clica no botão para salvar cadastro de cliente.
  static saveClient() {
    cy.get('.btn')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.btn').click({ force: true });
  }

  //Clica para salvar cadastro de cliente completo.
  static saveClientComplete() {
    cy.get('.btn > .ng-scope').click({ force: true });
  }

  //Dentro do cadastro de cliente completo, clica no menu interno para mostrar opções.
  static menuRegisterClientComplete() {
    cy.get('#menu_click_pri')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#menu_click_pri').click();
  }

  //Valida e clica na aba Referências.
  static abaReferences() {
    cy.get('#menu_items_pri > :nth-child(5)')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/refEtapaPessoalLista.html').as('api_referencias');
    cy.get('#menu_items_pri > :nth-child(5)').click();
    cy.wait('@api_referencias', { timeout: 40000 });
  }
}

//Todos os métodos são estáticos para facilitar o uso direto.
export class GeneralClientComplete {
  //Valida botão salvar desabilitado antes de preencher campos obrigatórios.
  static buttonSaveDisabled() {
    cy.get('#btnModalAddEndereco')
      .should('be.visible')
      .and('not.have.attr', 'not.disabled');
  }

  //Clica para salvar cadastro de cliente completo.
  static clickSaveClientComplete() {
    cy.get('.btn > .ng-scope').click({ force: true });
  }

  //Valida mensagem de alerta para endereço obrigatório ao tentar salvar sem endereço.
  static messAlertAdressMandatory() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title').should('be.visible').and('have.text', 'Alerta');
    cy.get('.toast-message').should('be.visible').and('have.text', 'Um endereço do tipo padrão é obrigatório.');
  }

  //Valida modal de "Aguarde carregando..." após clicar para salvar.
  static modalWaitingLoading() {
    cy.get('.layout-align-center-center > h3')
      .should('be.visible')
      .and('have.text', 'Aguarde carregando...');
  }

  //Valida mensagem "Registro salvo com sucesso!" após salvar cadastro.
  static messRegisterSaveSucess() {
    cy.get('.toast-success').should('be.visible');
    cy.get(':nth-child(1) > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Registro salvo com sucesso!');
  }
}