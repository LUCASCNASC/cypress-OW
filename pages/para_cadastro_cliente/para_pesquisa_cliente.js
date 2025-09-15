export class SearchClient {
  /**
   * Valida mensagem "Aguarde carregando...".
   */
  static messWaitLoading() {
    cy.get('.md-dialog-fullscreen > .carregando')
      .should('be.visible')
      .and('have.text', ' Aguarde carregando...');
  }

  /**
   * Clica na lupa de pesquisa de cliente.
   */
  static clickGlassSearchClient() {
    cy.intercept('GET', '/views/cliente/modalClientes.html').as('api_cliente_modalClientes');
    cy.get('.md-block > .ng-binding').should('be.visible').click({ force: true });
    cy.wait('@api_cliente_modalClientes', { timeout: 40000 });
  }

  /**
   * Valida botão X do card cliente e campos do modal de busca.
   */
  static cardClientValidate() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.md-dialog-fullscreen').should('be.visible');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Clientes');
    cy.get('label[for="txtBuscaClienteModal"]')
      .should('have.text', 'Digite o nome ou o CPF do cliente para busca')
      .and('be.visible');
    cy.get('[ng-click="novoCliente()"] > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('[ng-click="capturarVozCliente()"] > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#txtBuscaClienteModal').should('be.visible').invoke('val').should('not.be.empty');
  }

  /**
   * Valida número e descrição do cliente CPF selecionado.
   */
  static numberDescripCPFSearch() {
    cy.get('#lblCpfClienteSelecionado').should('be.visible');
    cy.get('#lblNomeClienteSelecionado').should('be.visible');
  }

  /**
   * Valida número e descrição do cliente CNPJ selecionado.
   */
  static numberDescripCNPJSearch() {
    cy.get('#lblCpfClienteSelecionado').should('be.visible');
    cy.get('#lblNomeClienteSelecionado').should('be.visible');
  }

  /**
   * Clica no cliente CPF pesquisado.
   */
  static clickCPFSearch() {
    cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
      .click();
  }

  /**
   * Clica no cliente CNPJ pesquisado.
   */
  static clickCNPJSearch() {
    cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
      .click();
  }

  /**
   * Pesquisa cliente por número de CPF.
   */
  static fillCPF() {
    const numeroCPF = "117.415.410-18";
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
      .wait(500)
      .type(numeroCPF, '{downArrow}');
  }

  /**
   * Digita novamente o número de CPF no campo de busca do modal.
   */
  static typeAgainCPF() {
    const numeroCPF = "117.415.410-18";
    cy.get('#txtBuscaClienteModal')
      .clear()
      .wait(100)
      .should('have.value', '')
      .wait(100)
      .type(numeroCPF);
  }

  /**
   * Pesquisa cliente por número de CNPJ.
   */
  static fillCNPJ() {
    const numeroCNPJ = "24468163000161";
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
      .wait(500)
      .type(numeroCNPJ, '{downArrow}');
  }

  /**
   * Digita novamente o número de CNPJ no campo de busca do modal.
   */
  static typeAgainCNPJ() {
    const numeroCNPJ = "24468163000161";
    cy.get('#txtBuscaClienteModal')
      .clear()
      .wait(100)
      .should('have.value', '')
      .wait(100)
      .type(numeroCNPJ);
  }

  /**
   * Pesquisa cliente por descrição de CPF.
   */
  static fillDescripCPF() {
    const descricaoCPF = "CPF AUTOMAÇÃO SABIUM - LUCAS CAMARGO";
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header').click();
    cy.get('#txtBuscaCliente').wait(500).type(descricaoCPF, '{downArrow}');
  }

  /**
   * Digita novamente a descrição do CPF no campo de busca do modal.
   */
  static typeAgainDescriptCPF() {
    const descricaoCPF = "CPF AUTOMAÇÃO SABIUM - LUCAS CAMARGO";
    cy.get('#txtBuscaClienteModal')
      .clear()
      .wait(100)
      .should('have.value', '')
      .wait(100)
      .type(descricaoCPF);
  }

  /**
   * Pesquisa cliente por descrição de CNPJ.
   */
  static fillDescripCNPJ() {
    const descricaoCNPJ = "CNPJ AUTOMAÇÃO SABIUM - LUCAS CAMARGO";
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header').click();
    cy.get('#txtBuscaCliente').wait(500).type(descricaoCNPJ, '{downArrow}');
  }

  /**
   * Digita novamente a descrição do CNPJ no campo de busca do modal.
   */
  static typeAgainDescriptCNPJ() {
    const descricaoCNPJ = "CNPJ AUTOMAÇÃO SABIUM - LUCAS CAMARGO";
    cy.get('#txtBuscaClienteModal')
      .clear()
      .wait(100)
      .should('have.value', '')
      .wait(100)
      .type(descricaoCNPJ);
  }
}