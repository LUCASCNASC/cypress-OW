import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa } from '../../../../gerarDados';
import {
  gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada,
  gerarChavePixEmail, gerarChavePixCPF, gerarChavePixAleatoria
} from '../../../../gerarDadosPIX';

/**
 * Page Object para operações e validações relacionadas à aba Referência Bancária.
 * Todos os métodos são estáticos para facilitar o uso direto.
 */
export class GeneralRefBanking {
  /**
   * Valida e clica na aba Bancária em Referências.
   */
  static clickAbaRefBanking() {
    cy.get('#menu_items_sec > :nth-child(3)')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/refEtapaBancariaLista.html').as('api_ref_bancaria');
    cy.get('#menu_items_sec > :nth-child(3)').click();
    cy.wait('@api_ref_bancaria', { timeout: 40000 });
  }

  /**
   * Valida tela vazia antes de adicionar referência bancária.
   */
  static validateAbaRefBankingEmpty() {
    cy.get('h3').should('be.visible').and('have.text', 'Referências / Bancária');
    cy.get('.layout-align-end-end > .md-fab').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.text-align-center').should('be.visible').and('have.text', 'Não foi encontrado nenhum registro');
    cy.get('.btn').should('be.visible').and('not.have.attr', 'disabled');
  }

  /**
   * Clica no botão para adicionar nova referência bancária.
   */
  static clickAddNewRefBanking() {
    cy.intercept('GET', '/views/cliente/modalClienteRefBancaria.html').as('api_modal_referencia_bancaria');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_modal_referencia_bancaria', { timeout: 40000 });
  }

  /**
   * Valida campos do modal de referência bancária vazio.
   */
  static modalRefBankingEmpty() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Referência bancária');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#txtBancoRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtBancoRefBanc"]').should('have.text', 'Banco');
    cy.get('#txtAgenciaRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtAgenciaRefBanc"]').should('have.text', 'Agência');
    cy.get('#txtContaRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtContaRefBanc"]').should('have.text', 'Conta');
    cy.get('.md-datepicker-button').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('input.md-datepicker-input.md-input').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('#txtBoletoRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtBoletoRefBanc"]').should('have.text', 'Boleto');
    cy.get('#txtTelefoneRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtTelefoneRefBanc"]').should('have.text', 'Telefone');
    cy.get('#txtGerente').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtGerente"]').should('have.text', 'Gerente');
    cy.get('#txtEmailRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtEmailRefBanc"]').should('have.text', 'Email');
    cy.get('#txtCpfCnpjRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtCpfCnpjRefBanc"]').should('have.text', 'CPF/CNPJ correntista');
    cy.get('#txtNmCorrentRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtNmCorrentRefBanc"]').should('have.text', 'Nome do correntista');
    cy.get('#txtTpContaRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtTpContaRefBanc"]').should('have.text', 'Tipo de conta');
    cy.get('#txtOperacaoRefBanc').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtOperacaoRefBanc"]').should('have.text', 'Operação');
    cy.get('#txtFrmPag').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtFrmPag"]').should('have.text', 'Forma de pagamento');
    cy.get('#txtIdTipoChavePix').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtIdTipoChavePix"]').should('have.text', 'Tipo chave PIX');
    cy.get('#txtChavePix').should('be.visible').and('have.value', '').and('not.have.attr', 'disabled');
    cy.get('label[for="txtChavePix"]').should('have.text', 'Chave PIX');
    cy.get('#btnModalAddRefPessoal').should('have.attr', 'disabled');
  }

  /**
   * Clica para salvar Referência Bancária.
   */
  static clickSaveRefBanking() {
    cy.contains('button', 'Salvar').should('be.visible');
    cy.get('#btnModalAddRefPessoal').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('#btnModalAddRefPessoal').click();
  }

  /**
   * Valida mensagem de sucesso após adicionar Referência Bancária.
   */
  static messRefBankingAddedSucess() {
    cy.get('.toast-success').should('be.visible');
    cy.get('.toast-success > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Referência Bancária incluída com sucesso.');
  }

  /**
   * Valida informações adicionadas no cadastro de referência bancária.
   */
  static infoRefBankingAdded() {
    cy.get('.md-whiteframe-2dp').should('be.visible').and('contain', 'aaa').and('contain', 'Agencia:').and('contain', 'Conta:');
  }

  // PIX ERROR VALIDATIONS

  /**
   * Valida mensagem de chave pix telefone inválida.
   */
  static messRefBankingKeyPixPhoneInvalid() {
    cy.get('.toast-error > .toast-title').should('be.visible').and('have.text', 'Erro identificado');
    cy.get('.toast-error > .toast-message').should('be.visible').and('have.text', 'Chave Pix Telefone não informada ou inválida. Deve conter o DDD (2 dígitos) mais o número do celular (9 dígitos). Informar somente números');
  }

  /**
   * Valida mensagem de chave pix email inválida.
   */
  static messRefBankingKeyPixEmailInvalid() {
    cy.get('.toast-error > .toast-title').should('be.visible').and('have.text', 'Erro identificado');
    cy.get('.toast-error > .toast-message').should('be.visible').and('have.text', 'Chave Pix E-Mail não informada ou inválida.');
  }

  /**
   * Valida mensagem de chave pix CPF/CNPJ inválida.
   */
  static messRefBankingKeyPixCpfCnpjInvalid() {
    cy.get('.toast-error > .toast-title').should('be.visible').and('have.text', 'Erro identificado');
    cy.get('.toast-error > .toast-message').should('be.visible').and('have.text', 'Chave Pix CPF/CNPJ não informada ou inválida. Deve conter um CPF ou CNPJ válido. Informar somente números.');
  }

  /**
   * Valida mensagem de chave pix aleatória inválida.
   */
  static messRefBankingKeyPixRandomInvalid() {
    cy.get('.toast-error > .toast-title').should('be.visible').and('have.text', 'Erro identificado');
    cy.get('.toast-error > .toast-message').should('be.visible').and('have.text', 'Chave Pix Aleatória não informada ou inválida. A chave aleatória deve ser informada com os traços que separa cada conjunto da chave aleatória, ao todo são 4 traços.');
  }

  /**
   * Arrasta a referência bancária para edição.
   */
  static dragEditRefBanking() {
    cy.get('.md-whiteframe-2dp')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 100, clientY: 0 })
      .trigger('mouseup');
  }

  /**
   * Clica no lápis para editar referência bancária.
   */
  static clickEditRefBanking() {
    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised > .ng-binding').should('be.visible');
    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised').click({ force: true });
    cy.intercept('GET', '/services/v3/forma_pagamento').as('api_modal_referencia_bancaria');
    cy.wait('@api_modal_referencia_bancaria', { timeout: 40000 });
  }
}