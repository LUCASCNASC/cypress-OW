import { gerarCpf, gerarNomeAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarEmailAleatorio, gerarNomeEmpresa } from '../../gerarDados';

//Page Object para preenchimento de campos do cliente simples.
//Todos os métodos são estáticos para facilitar o uso direto.
export class FillClientSimple {
  //Valida e preenche o campo Data de Nascimento.
  static dateBirth() {
    cy.get(':nth-child(3) > .layout-xs-column > .md-block > .validaData > .md-datepicker-button')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('label[aria-hidden="false"]').should('have.text', 'Data de nascimento');
    cy.get('input[ng-focus="ctrl.setFocused(true)"]').should('be.visible').and('have.value', '').wait(200);
    cy.contains('Data de nascimento').parent().find('input').type("30/09/1998", { force: true });
  }

  //Preenche campo CPF.
  static cpfClient() {
    const cpf = gerarCpf();
    cy.get('label[for="txtCpf"]').should('have.text', 'CPF');
    cy.get('#txtCpf').should('be.visible').and('have.value', '').type(cpf, { force: true });
  }

  //Preenche campo CNPJ.
  static cnpjClient() {
    const cnpj = gerarCNPJ();
    cy.get('label[for="txtCNPJ"]').should('have.text', 'CNPJ');
    cy.get('#txtCNPJ').should('be.visible').and('have.value', '').type(cnpj, { force: true });
  }

  //Preenche campo Nome Completo para cliente CPF.
  static nameCompleteCPF() {
    const nomeCompleto = gerarNomeAleatorio();
    cy.get('label[for="txtNomeCompleto"]').should('have.text', 'Nome Completo');
    cy.get('#txtNomeCompleto').should('be.visible').and('have.value', '').type(nomeCompleto, { force: true });
  }

  //Preenche campo Nome Completo para cliente CNPJ.
  static nameCompleteCNPJ() {
    const nomeCompletoEmpresa = gerarNomeEmpresa();
    cy.get('label[for="txtNomeCompleto"]').should('have.text', 'Nome Completo');
    cy.get('#txtNomeCompleto').should('be.visible').and('have.value', '').wait(200).type(nomeCompletoEmpresa, { force: true });
  }

  //Seleciona sexo da pessoa física.
  static sexPersonPhysical() {
    cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
      .scrollIntoView()
      .should('be.visible')
      .and('have.value', '');
    cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]').click({ force: true });
    cy.get('.md-text.ng-binding').contains('Masculino').click({ force: true });
  }

  //Preenche e pesquisa campo CEP.
  static searchCEP() {
    const CEPcadastro = "87065300";
    cy.get('label[for="txtCep"]').should('have.text', 'CEP');
    cy.get('#txtCep').scrollIntoView().wait(200).should('be.visible').and('have.value', '').type(CEPcadastro, { force: true });
    cy.get('.md-icon-float > .ng-binding').should('be.visible').and('not.have.attr', 'disabled');
    cy.intercept('GET', '/services/v3/cidade?uf=PR').as('api_cidade_rota');
    cy.get('.md-icon-float > .ng-binding').click({ force: true });
    cy.wait('@api_cidade_rota', { timeout: 40000 });
  }

  //Preenche campo Número do endereço.
  static numberAdress() {
    const numero_rendereco = '66';
    cy.get('label[for="txtNumero"]').should('have.text', 'Número');
    cy.get('#txtNumero').should('be.visible').and('have.value', '').type(numero_rendereco, { force: true });
  }

  //Preenche o fluxo de rota no cadastro do cliente.
  static routeClient() {
    const rota = '560';
    cy.get('label[for="codigo_rota"]').should('have.text', 'Código da rota');
    cy.intercept('GET', '/views/carrinho/modalRotas.html').as('api_carrinho_modalRotas');
    cy.get('.rota-frete > .md-icon-right > .ng-binding').should('be.visible').and('have.value', '').type(rota, { force: true });
    cy.wait('@api_carrinho_modalRotas', { timeout: 40000 });
    cy.get('.rota-frete > .md-icon-right > .ng-binding').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="txtBuscaRotaModal"]').should('have.text', 'Rota');
    cy.get('#txtBuscaRotaModal').should('be.visible').and('have.value', '').type(rota, { force: true }, '{downarrow}');
    cy.get('md-icon[aria-label="Pesquisar"]').should('be.visible').and('not.have.attr', 'disabled');
    cy.intercept('GET', '/services/v3/rota?idrota=560').as('api_id_rota_560');
    cy.get('md-icon[ng-click="pesquisar()"]').click({ force: true });
    cy.wait('@api_id_rota_560', { timeout: 40000 });
    cy.contains('560 - T.A. ROTA AUTOMAÇÃO MARINGÁ').click();
    cy.intercept('GET', '/services/v3/local_entrega?rota=560').as('api_local_entrega_560');
    cy.contains('560 - T.A. CIDADE AUTOMAÇÃO').click();
    cy.wait('@api_local_entrega_560', { timeout: 40000 });
  }
}