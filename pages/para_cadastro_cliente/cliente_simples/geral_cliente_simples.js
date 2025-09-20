import { gerarCpf, gerarNomeAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarEmailAleatorio, gerarNomeEmpresa } from '../gerarDados';

//Page Object para operações de interação no cadastro de cliente simples.
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