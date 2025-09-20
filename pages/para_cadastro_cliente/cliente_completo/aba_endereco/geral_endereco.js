//Page Object para operações e validações relacionadas à aba de Endereço.
//Todos os métodos são estáticos para facilitar o uso sem instanciação.
export class GeneralAdress {
  //Valida e clica na aba Endereço.
  static clickAbaAdress() {
    cy.get('#menu_items_pri > :nth-child(2)')
      .should('be.visible')
      .and('have.text', 'Endereço');
    cy.intercept('GET', '/services/v3/dados_tabela/tipoendereco').as('api_cliente_completo_endereco');
    cy.get('#menu_items_pri > :nth-child(2)').scrollIntoView().click({ force: true });
    cy.wait('@api_cliente_completo_endereco', { timeout: 40000 });
  }

  //Valida mensagem de sucesso após incluir endereço.
  static messAdressAddedSucess() {
    cy.get('.toast-success').should('be.visible');
    cy.get('.toast-success > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Endereço incluído com sucesso.');
  }

  //Clica no botão "+" para adicionar novo endereço.
  static clickAddNewAdress() {
    cy.get('.layout-align-end-end > .md-fab')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/ModalClienteEndereco.html').as('api_ModalClienteEndereco');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_ModalClienteEndereco', { timeout: 40000 });
  }

  //Valida os campos do modal de endereço quando está vazio.
  static modalAdressEmptyValidade() {
    cy.get('label[for="txtCepEndereco"]').should('have.text', 'CEP');
    cy.get('#txtCepEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtRuaEndereco"]').should('have.text', 'Endereço');
    cy.get('#txtRuaEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtNumEndereco"]').should('have.text', 'Número');
    cy.get('#txtNumEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtComplEndereco"]').should('have.text', 'Complemento');
    cy.get('#txtComplEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtBairroEndereco"]').should('have.text', 'Bairro');
    cy.get('#txtBairroEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtCxPostEndereco"]').should('have.text', 'Caixa Postal');
    cy.get('#txtCxPostEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtUfEndereco"]').should('have.text', 'Estado');
    cy.get('#txtUfEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtCidEndereco"]').should('have.text', 'Cidade');
    cy.get('#txtCidEndereco').should('be.visible').and('have.value', '');
  }

  //Clica para abrir as opções de tipo de endereço.
  static clickOpenTypeAdress() {
    cy.get('#txtTpEndereco').click({ force: true });
  }

  //Valida informações que foram adicionadas no endereço.
  static infoAdressAdded() {
    cy.get('.md-whiteframe-2dp')
      .should('be.visible')
      .and('contain', 'Padrão')
      .and('contain', 'RUA PETÚNIA - 66 - PARQUE INDUSTRIAL')
      .and('contain', '87065-300');
  }

  //Clica no botão salvar endereço.
  static clickSaveAdress() {
    cy.get('#btnModalAddEndereco').click();
  }

  //Valida card do modal endereço vazio antes de preencher os campos.
  static cardAdressEmptyValidate() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Endereço');

    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');

    cy.get('#btnModalAddEndereco').should('be.visible').should('not.have.attr', 'not.disabled');

    cy.get('label[for="txtTpEndereco"]').should('have.text', 'Tipo de Endereço');
    cy.get('#txtTpEndereco').should('be.visible').and('have.value', '');
  }
}