import { gerarEmailAleatorio, gerarTelefoneAleatorio, gerarNomeEmpresa, gerarObservação } from '../../../../gerarDados';
export class RefFinanceiraPage {
  //Valida e clica na aba Comercial em Referências.
  static clickAbaRefCommercial() {
    cy.get('#menu_items_sec > .on')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/refEtapaComercialLista.html').as('api_ref_comercial');
    cy.get('#menu_items_sec > :nth-child(2)').click();
    cy.wait('@api_ref_comercial', { timeout: 40000 });
  }

  //Valida tela vazia antes de adicionar referência comercial.
  static validadeRefCommercialEmpty() {
    cy.get('h3').should('be.visible').and('have.text', 'Referências / Comercial');
    cy.get('.layout-align-end-end > .md-fab').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.text-align-center').should('be.visible').and('have.text', 'Não foi encontrado nenhum registro');
    cy.get('.btn').should('be.visible').and('not.have.attr', 'disabled');
  }

  //Clica no botão para adicionar nova referência comercial.
  static clickAddNewRefCommercial() {
    cy.intercept('GET', '/views/cliente/modalClienteRefComercial.html').as('api_modal_referencia_comercial');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_modal_referencia_comercial', { timeout: 40000 });
  }

  //Valida campos do modal de referência comercial vazio.
  static modalRefCommercialEmpty() {
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Referência comercial');
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#txtEmpresaRefCom').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtEmpresaRefCom"]').should('have.text', 'Empresa');
    cy.get('#txtContatoRefCom').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtContatoRefCom"]').should('have.text', 'Contato');
    cy.get('#txtTelefoneRefCom').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtTelefoneRefCom"]').should('have.text', 'Telefone');
    cy.get('#txtEmailRefCom').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtEmailRefCom"]').should('have.text', 'Email');
    cy.get('#txtObsRefCom').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtObsRefCom"]').should('have.text', 'Observação');
    cy.get('#btnModalAddRefPessoal').should('be.visible').should('have.attr', 'disabled');
  }

  //Clica para salvar Referência Comercial.
  static clickSaveRefCommercial() {
    cy.contains('button', 'Salvar').should('be.visible');
    cy.get('#btnModalAddRefPessoal').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('#btnModalAddRefPessoal').click();
  }

  //Valida mensagem de sucesso após adicionar Referência Comercial.
  static messRefCommercialAddedSucess() {
    cy.get('.toast-success').should('be.visible');
    cy.get('.toast-success > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Referência Comercial incluída com sucesso.');
  }

  //Valida informações adicionadas no cadastro de referência comercial.
  static infoRefCommercialAdded() {
    cy.get('.md-whiteframe-2dp > .ng-scope > :nth-child(1) > .ng-binding').should('be.visible');
    cy.get('[ng-show="(item.contato)"]').should('be.visible');
    cy.get('[ng-show="(item.telefone)"]').should('be.visible');
    cy.get('[ng-show="(item.email)"]').should('be.visible');
  }

  //Preenche o campo Empresa.
  static enterprise() {
    const empresa = gerarNomeEmpresa();
    cy.get('#txtEmpresaRefCom').type(empresa);
  }

  //Preenche o campo Contato.
  static contact() {
    const contato = gerarTelefoneAleatorio();
    cy.get('#txtContatoRefCom').type(contato);
  }

  //Preenche o campo Telefone.
  static phone() {
    const telefone = gerarTelefoneAleatorio();
    cy.get('#txtTelefoneRefCom').type(telefone);
  }

  //Preenche o campo Email.
  static email() {
    const email = gerarEmailAleatorio();
    cy.get('#txtEmailRefCom').type(email);
  }

  //Preenche o campo Observação.
  static observation() {
    const observacao = gerarObservação();
    cy.get('#txtObsRefCom').type(observacao);
  }
}