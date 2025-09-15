import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa } from '../../gerarDados';
import { gerarChavePixTelefone } from '../../gerarDadosPIX';

/**
 * Page Object para validações e ações do cadastro de cliente completo.
 * Todos os métodos são estáticos para facilitar o uso direto.
 */
export class GeneralClientComplete {
  /**
   * Valida botão salvar desabilitado antes de preencher campos obrigatórios.
   */
  static buttonSaveDisabled() {
    cy.get('#btnModalAddEndereco')
      .should('be.visible')
      .and('not.have.attr', 'not.disabled');
  }

  /**
   * Clica para salvar cadastro de cliente completo.
   */
  static clickSaveClientComplete() {
    cy.get('.btn > .ng-scope').click({ force: true });
  }

  /**
   * Valida mensagem de alerta para endereço obrigatório ao tentar salvar sem endereço.
   */
  static messAlertAdressMandatory() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title').should('be.visible').and('have.text', 'Alerta');
    cy.get('.toast-message').should('be.visible').and('have.text', 'Um endereço do tipo padrão é obrigatório.');
  }

  /**
   * Valida modal de "Aguarde carregando..." após clicar para salvar.
   */
  static modalWaitingLoading() {
    cy.get('.layout-align-center-center > h3')
      .should('be.visible')
      .and('have.text', 'Aguarde carregando...');
  }

  /**
   * Valida mensagem "Registro salvo com sucesso!" após salvar cadastro.
   */
  static messRegisterSaveSucess() {
    cy.get('.toast-success').should('be.visible');
    cy.get(':nth-child(1) > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Registro salvo com sucesso!');
  }
}