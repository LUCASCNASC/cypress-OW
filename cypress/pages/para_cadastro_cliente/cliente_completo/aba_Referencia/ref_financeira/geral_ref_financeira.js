//------referencia financeira - funções de geração de dados

//Início exp. crédito
function gerarDataReferenciaFinanceira() {
  const dataInicio = new Date('2000-01-01');
  const dataAtual = new Date();
  const dataAleatoria = new Date(dataInicio.getTime() + Math.random() * (dataAtual.getTime() - dataInicio.getTime()));
  const dia = String(dataAleatoria.getDate()).padStart(2, '0');
  const mes = String(dataAleatoria.getMonth() + 1).padStart(2, '0');
  const ano = dataAleatoria.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

//Valor prestação
function gerarValorDuasCasasAposVirgula() {
  const valorInteiro = Math.floor(Math.random() * 900) + 100;
  const valorDecimal = (Math.random()).toFixed(2).substring(2);
  const valorFinal = `${valorInteiro}.${valorDecimal}`;
  return valorFinal;
}

//Page Object para operações e validações relacionadas à aba Referência Financeira.
//Todos os métodos são estáticos para facilitar o uso direto.
export class GeneralRefFinance {
  //Valida e clica na aba Financeira em Referências.
  static clickEmpty() {
    cy.get('#menu_items_sec > .on').should('be.visible').and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/refEtapaFinanceiraLista.html').as('api_ref_financeira');
    cy.get('#menu_items_sec > :nth-child(4)').click();
    cy.wait('@api_ref_financeira', { timeout: 40000 });
  }

  //Valida tela vazia antes de adicionar referência financeira.
  static validateAbaEmpty() {
    cy.get('h3').should('be.visible').and('have.text', 'Referências / Financeira');
    cy.get('.layout-align-end-end > .md-fab').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.text-align-center').should('be.visible').and('have.text', 'Não foi encontrado nenhum registro');
    cy.get('.btn').should('be.visible').and('not.have.attr', 'disabled');
  }

  //Clica no botão para adicionar nova referência Financeira.
  static clickAddNew() {
    cy.intercept('GET', '/views/cliente/modalClienteRefFinanc.html').as('api_modal_referencia_financeira');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_modal_referencia_financeira', { timeout: 40000 });
  }

  //Valida campos do modal de referência financeira vazio.
  static modalEmpty() {
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Referência financeira');
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.md-datepicker-button').should('be.visible').and('not.have.attr', 'disabled');
    cy.contains('Início exp. crédito').should('be.visible');
    cy.get('label[for="txtIniExpCred"]').should('have.text', 'Início exp. crédito');
    cy.get('#txtLocExp').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtLocExp"]').should('have.text', 'Local Experiência');
    cy.get('#txtPlExp').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtPlExp"]').should('have.text', 'Plano experiência');
    cy.get('label[for="txtPossuiCartao"]').should('have.text', 'Possui cartão');
    cy.get('#txtVlrPrest').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtVlrPrest"]').should('have.text', 'Valor prestação');
    cy.get('#btnModalAddRefPessoal').should('be.visible').and('have.attr', 'disabled');
  }

  //Clica para salvar Referência Financeira.
  static clickSave() {
    cy.contains('button', 'Salvar').should('be.visible');
    cy.get('#btnModalAddRefPessoal').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('#btnModalAddRefPessoal').click();
  }

  //Valida mensagem de sucesso após adicionar Referência Financeira.
  static messRefFinanceAddedSucess() {
    cy.get('.toast-success').should('be.visible');
    cy.get('.toast-success > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Referência Financeira incluída com sucesso.');
  }

  //Valida informações adicionadas no cadastro de referência financeira.
  static infoRefFinanceAdded() {
    cy.get('.flex-gt-sm-70 > :nth-child(1) > .ng-binding').should('be.visible');
    cy.get('[ng-show="(item.planoexperiencia)"]').should('be.visible');
    cy.get('[ng-show="(item.localexperiencia)"]').should('be.visible');
    cy.get('.layout-align-gt-sm-center-end > .list-title > b').should('be.visible');
    cy.get('.layout-align-gt-sm-center-end > .list-title').should('be.visible');
  }
}