import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa } from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX';

//Page Object para operações e validações relacionadas à aba Telefone.
//Todos os métodos são estáticos para facilitar o uso direto.
export class GeneralRefPhone {
  //Valida e clica na aba Telefone.
  static clickAbaPhone() {
    cy.get('#menu_items_pri > :nth-child(4)')
      .should('be.visible')
      .and('have.text', 'Telefones');
    cy.intercept('GET', '/services/v3/dados_tabela/tipotelefone').as('api_cliente_completo_telefones');
    cy.get('#menu_items_pri > :nth-child(4)').click();
    cy.wait('@api_cliente_completo_telefones', { timeout: 40000 });
  }

  //Clica no botão "+" para adicionar novo telefone.
  static clickAddedNewPhone() {
    cy.get('.layout-align-end-end > .md-fab')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/ModalClienteTelefone.html').as('api_ModalClienteTelefone');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_ModalClienteTelefone', { timeout: 40000 });
  }

 //Valida campos do modal Telefone enquanto está vazio.
  static modalPhoneEmptyValidade() {
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
  static clickSavePhone() {
    cy.get('#btnModalAddTel')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#btnModalAddTel').click({ force: true });
  }

  //Valida informações adicionadas no cadastro de telefone.
  static infoPhoneAdded() {
    cy.get('.md-whiteframe-2dp')
      .should('be.visible')
      .and('contain', 'Padrão')
      .and('contain', '(44)')
      .and('contain', '435');
  }

  //Valida mensagem de telefone incluído com sucesso.
  static messPhoneAddedSucess() {
    cy.get('.toast-success').should('be.visible');
    cy.get(':nth-child(1) > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Telefone incluído com sucesso.');
  }
}