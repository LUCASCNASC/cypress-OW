/**
 * Page Object para operações e validações relacionadas à aba Empregatício.
 * Todos os métodos são estáticos para facilitar o uso direto sem instanciação.
 */
export class GeneralEmployment {
  /**
   * Valida e clica na aba Empregatício.
   */
  static clickAbaEmployment() {
    cy.get('#menu_items_pri > :nth-child(6)')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/clienteEmpregaticioLista.html').as('api_aba_empregaticio');
    cy.get('#menu_items_pri > :nth-child(6)').click();
    cy.wait('@api_aba_empregaticio', { timeout: 40000 });
  }

  /**
   * Valida os elementos da tela de Empregatício quando vazia (nenhum registro adicionado).
   */
  static validateAbaEmploymentEmpty() {
    cy.get('h3').should('be.visible').and('have.text', 'Empregatício');
    cy.get('.layout-align-end-end > .md-fab').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.text-align-center').should('be.visible').and('have.text', 'Não foi encontrado nenhum registro');
    cy.get('.btn').should('be.visible').and('not.have.attr', 'disabled');
  }

  /**
   * Clica no botão "+" para adicionar um novo vínculo empregatício.
   */
  static clickAddNewEmployment() {
    cy.intercept('GET', '/services/v3/dados_tabela/tipocomprovanterenda').as('api_modal_empregaticio');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_modal_empregaticio', { timeout: 40000 });
  }

  /**
   * Valida todos os campos e elementos do modal Empregatício antes de preencher.
   */
  static modalEmploymentEmpty() {
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Empregatício');
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');

    cy.get('#txtCnpjEmpr').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtCnpjEmpr"]').should('have.text', 'CNPJ');

    cy.get('#txtTelEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtTelEmp"]').should('have.text', 'Telefone');

    cy.get('#txtNomeEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtNomeEmp"]').should('have.text', 'Empresa');

    cy.get('#txtRamoAtividade').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtRamoAtividade"]').should('have.text', 'Ramo atividade');

    cy.get('#txtCepEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtCepEmp"]').should('have.text', 'CEP');
    cy.get(':nth-child(3) > .md-icon-float > .ng-binding').should('be.visible').and('not.have.attr', 'disabled');

    cy.get('#txtEnderecoEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtEnderecoEmp"]').should('have.text', 'Endereço');

    cy.get('#txtNumEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtNumEmp"]').should('have.text', 'Número');

    cy.get('#txtComplEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtComplEmp"]').should('have.text', 'Complemento');

    cy.get('#txtBairroEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtBairroEmp"]').should('have.text', 'Bairro');

    cy.get('#txtUfEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtUfEmp"]').should('have.text', 'Estado');

    cy.get('#txtCidadeEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtCidadeEmp"]').should('have.text', 'Cidade');

    cy.get('#txtAdmiEmp > .md-datepicker-button').should('be.visible').and('not.have.attr', 'disabled');
    cy.contains('Admissão').parent().find('input').should('be.visible');

    cy.get('#txtSalarioEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtSalarioEmp"]').should('have.text', 'Salário');

    cy.get('#txtDtComprEmp > .md-datepicker-button').should('be.visible').and('not.have.attr', 'disabled');
    cy.contains('Data Comprovante').parent().find('input').should('be.visible');

    cy.get('#txtTipoComprEmp').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtTipoComprEmp"]').should('have.text', 'Tipo comprovante');

    cy.get('#idcbo').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="idcbo"]').should('have.text', 'Código');

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
}