import { gerarCpf, gerarNomeAleatorio, gerarCNPJ, gerarNomeEmpresa } from '../../gerarDados';

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

//Todos os métodos são estáticos para facilitar o uso direto.
export class GeneralClientSimple {
  //Valida e clica no menu de opções.
  static iconMenuOptions() {
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('[aria-label="Menu de opções"] > .ng-binding').click({ force: true });
  }

  //Escolhe a opção "Cliente" no menu de opções.
  static optionClientSimple() {
    cy.get('a[aria-label="Cliente"]')
      .should('have.attr', 'aria-label', 'Cliente');
    cy.get('a[aria-label="Cliente"]').scrollIntoView().click({ force: true });
  }

  //Clica no botão SALVAR do cliente simples.
  static saveClientSimple() {
    cy.get('.layout-align-end-center > .md-raised')
      .scrollIntoView()
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('.layout-align-end-center > .md-raised').click({ force: true });
  }

  //Arrasta/clica para selecionar Pessoa Jurídica.
  static dragPersonLegal() {
    cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
      .should('be.visible')
      .and('contain', ' Pessoa Física/Pessoa Júridica ');
    cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label').click({ force: true });
  }

  //Valida mensagem de "Registro salvo com sucesso!".
  static messFirstRegistSaveSucess() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-message').should('be.visible').and('have.text', 'Registro salvo com sucesso!');
  }

  //Realiza login novamente no sistema.
  static loginAgain() {
    const usuario = 'sabium.automacao';
    const senha = '123.automacao';

    cy.get('#txtusername').type(usuario);
    cy.get('#txtpassword').type(senha);
    cy.intercept('GET', '/images/icons/discount.svg').as('api_entrar_sistema');
    cy.get('.test_btnSalvarCliente').click({ force: true });
    cy.wait('@api_entrar_sistema', { timeout: 40000 });
  }

  //Clica para sair do sistema.
  static clickOutSystem() {
    cy.get('.rodape > ._md-button-wrap > div.md-button > .md-no-style').click({ force: true });
  }

  //Valida e clica em SIM na mensagem "Deseja visualizar este cadastro?".
  static desireSeeRegister() {
    cy.get('.md-title')
      .should('be.visible')
      .and('contain', 'Este CPF / CNPJ já está cadastrado para')
      .and('contain', ', deseja visualizar este cadastro?');
    cy.get('.md-cancel-button').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.md-confirm-button').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('.md-confirm-button').click({ force: true });
  }

  //Autoriza o trial para alteração da data de nascimento.
  static authorizeTrialDateBirth() {
    const idSupervisorTrial = "393";
    const nomeSupervidorTrial = "T.A. USUÁRIO AUTOMAÇÃO";
    const senhaSupervisor = "123.automacao";

    cy.get('.md-toolbar-tools > .ng-binding')
      .should('be.visible')
      .and('have.text', 'Autorização do Supervisor');
    cy.get('thead > tr > :nth-child(1)').should('be.visible').and('have.text', 'Trial');
    cy.get('tbody > .ng-scope > :nth-child(1)').should('be.visible');
    cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Descrição');
    cy.get('tbody > .ng-scope > :nth-child(2)').should('be.visible');
    cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Status');
    cy.contains('td.ng-binding', 'Pendente')
      .should('be.visible')
      .and('have.text', 'Pendente')
      .and('have.css', 'background-color', 'rgb(234, 7, 7)');
    cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Permissão / Usuário');
    cy.get('tbody > .ng-scope > :nth-child(4)').should('be.visible').and('have.text', 'Sim');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('be.visible').and('have.text', 'Supervisor');
    cy.get('[ng-model="idUsuario"]').should('be.visible').and('have.value', idSupervisorTrial);
    cy.get('[ng-model="nomeUsuario"]').should('be.visible').and('have.value', nomeSupervidorTrial);
    cy.get('tbody > :nth-child(3) > :nth-child(1)').should('be.visible').and('have.text', 'Senha');
    cy.get(':nth-child(3) > [colspan="2"] > .ng-pristine')
      .should('be.visible')
      .and('have.value', '')
      .type(senhaSupervisor);
    cy.contains('button', 'Confirmar').click();
  }
}