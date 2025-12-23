import { gerarTelefoneAleatorio } from '../../../gerarDados';
export class TelefonePage {
  
  //Valida e clica na aba Telefone.
  static clickAbaTelefone() {
    cy.get('#menu_items_pri > :nth-child(4)')
      .should('be.visible')
      .and('have.text', 'Telefones');
    cy.intercept('GET', '/services/v3/dados_tabela/tipotelefone').as('api_cliente_completo_telefones');
    cy.get('#menu_items_pri > :nth-child(4)').click();
    cy.wait('@api_cliente_completo_telefones', { timeout: 40000 });
  }

  //Clica no botão "+" para adicionar novo telefone.
  static clickAdicionarNovoTelefone() {
    cy.get('.layout-align-end-end > .md-fab')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/ModalClienteTelefone.html').as('api_ModalClienteTelefone');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_ModalClienteTelefone', { timeout: 40000 });
  }

 //Valida campos do modal Telefone enquanto está vazio.
  static validateTelefoneVazio() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Telefone');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('label[for="txtTpTel"]').should('have.text', 'Tipo de telefone');
    cy.get('#txtTpTel').should('be.visible').and('have.value', '');
    cy.get('label[for="txtNumTel"]').should('have.text', 'Número');
    cy.get('#txtNumTel').should('be.visible').and('have.value', '');
    cy.get('label[for="txtRamalTel"]').should('have.text', 'Ramal');
    cy.get('#txtRamalTel').should('be.visible').and('have.value', '');
    cy.get('#btnModalAddTel').should('be.visible').and('not.have.attr', 'not.disabled');
  }

  //Clica no botão salvar telefone.
  static clickSalvarTelefone() {
    cy.get('#btnModalAddTel')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#btnModalAddTel').click({ force: true });
  }

  //Valida informações adicionadas no cadastro de telefone.
  static validateTelefoneAdicionado() {
    cy.get('.md-whiteframe-2dp')
      .should('be.visible')
      .and('contain', 'Padrão')
      .and('contain', '(44)')
      .and('contain', '435');
  }

  //Valida mensagem de telefone incluído com sucesso.
  static validateMessageTelefoneAdicionado() {
    cy.get('.toast-success').should('be.visible');
    cy.get(':nth-child(1) > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Telefone incluído com sucesso.');
  }

   //Seleciona o tipo de telefone "Padrão".
  static chooseTipoTelefone() {
    cy.get('#txtTpTel').click({ force: true });
    cy.get('.md-text.ng-binding').contains('Padrão').click({ force: true });
  }

  //Preenche o campo Número no cadastro de telefone.
  static fillNumeroTelefone() {
    const numero_telefone = gerarTelefoneAleatorio();
    cy.get('#txtNumTel').type(numero_telefone);
  }

  //Preenche o campo Ramal no cadastro de telefone.
  static fillRamalTelefone() {
    const ramal_telefone = "435";
    cy.get('#txtRamalTel').type(ramal_telefone);
  }
}