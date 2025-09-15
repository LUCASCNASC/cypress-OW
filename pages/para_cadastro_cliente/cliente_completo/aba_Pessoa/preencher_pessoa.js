import {
  gerarCpf,
  gerarNomeAleatorio,
  gerarEmailAleatorio,
  gerarCNPJ,
  gerarTelefoneAleatorio,
  gerarNomeEmpresa,
} from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX';

/**
 * Page Object para preenchimento do cadastro de pessoa.
 * Todos os métodos são estáticos para facilitar o uso direto sem instanciação.
 */
export class FillPerson {
  /**
   * Valida e preenche o campo Data Nascimento.
   */
  static dateBirth() {
    cy.get('#txtDataNasc > .md-datepicker-button')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('label[for="txtDataNasc"]').should('have.text', 'Data Nascimento');
    cy.wait(200);
    cy.contains('Data Nascimento').parent().find('input').type('30/09/1998');
  }

  /**
   * Valida e preenche o campo Nome Completo (CPF).
   */
  static nameComplete() {
    const NomeCompleto = gerarNomeAleatorio();
    cy.get('label[for="txtRazaoSocial"]').should('have.text', 'Nome Completo');
    cy.get('#txtRazaoSocial').should('be.visible').and('have.value', '').type(NomeCompleto);
  }

  /**
   * Valida e preenche o campo Razão Social (CNPJ).
   */
  static nameCNPJ() {
    const razaoSocial = gerarNomeEmpresa();
    cy.get('#txtRazaoSocial').click();
    cy.get('label[for="txtRazaoSocial"]').should('have.text', 'Razão Social');
    cy.get('#txtRazaoSocial').should('be.visible').and('have.value', '').type(razaoSocial, { force: true });
  }

  /**
   * Valida e preenche o campo CPF.
   */
  static cpfClient() {
    const cpf = gerarCpf();
    cy.get('label[for="txtCpfCnpj"]').should('have.text', 'CPF');
    cy.get('#txtCpfCnpj').should('be.visible').and('have.value', '').type(cpf, { force: true });
  }

  /**
   * Valida e preenche o campo CNPJ.
   */
  static cnpjClient() {
    const cnpj = gerarCNPJ();
    cy.get('label[for="txtCpfCnpj"]').should('have.text', 'CPF');
    cy.get('#txtCpfCnpj').should('be.visible').and('have.value', '').type(cnpj, { force: true });
  }

  /**
   * Valida e preenche o campo Nome Fantasia (CNPJ).
   */
  static nameFantasyCNPJ() {
    const nomeClienteCNPJ = "Novo cadastro cliente CNPJ";
    cy.get('label[for="txtNomeFantasia"]').should('have.text', 'Nome Social');
    cy.get('#txtNomeFantasia').should('be.visible').and('have.value', '').type(nomeClienteCNPJ, { force: true });
  }

  /**
   * Valida e preenche o campo Nome Social (CPF).
   */
  static nameSocial() {
    const NomeSocial = gerarNomeAleatorio();
    cy.get('label[for="txtNomeFantasia"]').should('have.text', 'Nome Social');
    cy.get('#txtNomeFantasia').should('be.visible').and('have.value', '').type(NomeSocial);
  }

  /**
   * Valida e seleciona o sexo da pessoa como Masculino.
   */
  static sexClient() {
    cy.get('label[for="txtSexo"]').should('have.text', 'Sexo');
    cy.get('#txtSexo').should('be.visible');
    cy.get('#txtSexo').click({ force: true });
    cy.get('.md-text.ng-binding').contains('Masculino').click({ force: true });
  }
}