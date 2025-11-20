//Page Object para operações e validações relacionadas à aba Referência Pessoal.
//Todos os métodos são estáticos para facilitar o uso direto.
export class RefPessoalPage {
  /**
   * Valida e clica na aba Pessoal em Referências.
   */
  static clickAbaRefGuys() {
    cy.get('#menu_items_sec > .on')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/refEtapaBancariaLista.html').as('api_ref_pessoal');
    cy.get('#menu_items_sec > :nth-child(3)').click();
    cy.wait('@api_ref_pessoal', { timeout: 40000 });
  }

  //Valida tela vazia antes de adicionar referência pessoal.
  static validateAbaEmpty() {
    cy.get('h3').should('be.visible').and('have.text', 'Referências / Pessoal');
    cy.get('.layout-align-end-end > .md-fab').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.text-align-center').should('be.visible').and('have.text', 'Não foi encontrado nenhum registro');
    cy.get('.btn').should('be.visible').and('not.have.attr', 'disabled');
  }

  //Clica no botão para adicionar nova referência pessoal.
  static clickAddNew() {
    cy.intercept('GET', '/views/cliente/modalClienteRefPessoal.html').as('api_modal_referencia_pessoal');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_modal_referencia_pessoal', { timeout: 40000 });
  }

  //Valida campos do modal de referência pessoal vazio.
  static modalEmpty() {
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Referência pessoal');
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#txtNomeRefPes').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtNomeRefPes"]').should('have.text', 'Nome');
    cy.get('#txtEmailRefPes').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtEmailRefPes"]').should('have.text', 'Email');
    cy.get('#txtTelefoneRefPes').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtTelefoneRefPes"]').should('have.text', 'Telefone');
    cy.get('#txtRelacionamentoRefPes').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtRelacionamentoRefPes"]').should('have.text', 'Relacionamento');
    cy.get('#txtDtInclusaoRefPes').should('be.visible').and('have.attr', 'disabled');
    cy.get('label[for="txtDtInclusaoRefPes"]').should('have.text', 'Data inclusão');
    cy.get('#btnModalAddRefPessoal').should('be.visible').should('have.attr', 'disabled');
  }

  //Clica para salvar Referência Pessoal.
  static clickSave() {
    cy.contains('button', 'Salvar').should('be.visible');
    cy.get('#btnModalAddRefPessoal').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('#btnModalAddRefPessoal').click();
  }

  //Valida mensagem de sucesso após adicionar Referência Pessoal.
  static messRefGuysAddedSucess() {
    cy.get('.toast-success').should('be.visible');
    cy.get('.toast-success > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Referência Pessoal incluída com sucesso.');
  }

  //Valida informações adicionadas no cadastro de referência pessoal.
  static infoAdded() {
    const hoje = new Date();
    const dataAtual = hoje.toLocaleDateString('pt-BR');
    cy.get('.flex-gt-sm-70 > :nth-child(1) > .ng-binding').should('be.visible');
    cy.get('.flex-gt-sm-70 > :nth-child(3)').should('be.visible');
    cy.get('[ng-show="(item.telefone)"]').should('be.visible');
    cy.get('[ng-show="(item.email)"]').should('be.visible');
    cy.get('.layout-align-gt-sm-center-end > .list-title > b').should('be.visible');
    cy.get('.layout-align-gt-sm-center-end > .list-title').should('be.visible').and('contain', dataAtual);
  }

  //Valida campos do modal de referência pessoal vazio (duplicado).
  static modalRefGuysEmpty() {
    // Esta função é idêntica a modalEmpty, mantida por compatibilidade.
    RefPessoalPage.modalEmpty();
  }

  //Preenche o campo Nome.
  static name() {
    const Nome = gerarNomeAleatorio();
    cy.get('#txtNomeRefPes').type(Nome);
  }

  //Preenche o campo Email.
  static email() {
    const email = gerarEmailAleatorio();
    cy.get('#txtEmailRefPes').type(email);
  }

  //Preenche o campo Telefone.
  static phone() {
    const numero_telefone = gerarTelefoneAleatorio();
    cy.get('#txtTelefoneRefPes').type(numero_telefone);
  }

  //Preenche o campo Relacionamento.
  static relationship() {
    const relacionamento = gerarRelacionamento();
    cy.get('#txtRelacionamentoRefPes').type(relacionamento);
  }
}
