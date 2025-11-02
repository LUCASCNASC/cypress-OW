export class Login {
  //Valida o logo da empresa.
  static logoEnterpriseLogin() {
    cy.get('.logo').should('be.visible');
  }

  //Valida o ícone do computador.
  static iconComputerLogin() {
    cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
  }

  //Valida texto e ícone do usuário.
  static userTextIcon() {
    cy.get('label[for="txtusername"]')
      .should('be.visible')
      .and('have.text', 'Usuário');
    cy.get(':nth-child(3) > .name').should('be.visible');
  }

  //Valida texto e ícone da senha.
  static passwordTextIcon() {
    cy.get('label[for="txtpassword"]')
      .should('be.visible')
      .and('have.text', 'Senha');
    cy.get('.md-icon-right > .name').should('be.visible');
  }

  //Valida ícone de visualizar senha.
  static iconEyesPassword() {
    cy.get('.md-icon-right > .md-primary')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
  }

  //Valida botão "Esqueceu a senha?".
  static buttonForgotPassword() {
    cy.get('div[ng-click="modalSenhaNovaOpen()"]')
      .contains('Esqueceu a senha?')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
  }

  //Valida botão ENTRAR habilitado.
  static buttonEnterEnabled() {
    cy.get('.test_btnSalvarCliente')
      .should('be.visible')
      .and('have.text', 'Entrar')
      .and('not.have.attr', 'disabled');
  }

  //Valida botão ENTRAR desabilitado.
  static buttonEnterDisabled() {
    cy.get('.test_btnSalvarCliente')
      .should('be.visible')
      .and('have.text', 'Entrar')
      .and('not.have.attr', 'not.disabled');
  }

  //Clica no botão ENTRAR.
  static clickButtonEnter() {
    cy.get('.test_btnSalvarCliente').click({ force: true });
  }

  //Valida mensagem "Entrando no sistema".
  static messageOpeningSystem() {
    cy.get('.ng-scope > .ng-binding')
      .should('be.visible')
      .and('have.text', 'Entrando no sistema');
  }

  //Valida botão INICIAR ATENDIMENTO (logado).
  static buttonInitService() {
    cy.get('.md-raised > .truncate').should('be.visible');
  }

  //Valida mensagem de login ou senha incorretos.
  static messLoginPasswordIncorrect() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title')
      .should('be.visible')
      .and('have.text', 'Atenção')
      .and('not.have.attr', 'disabled');
    cy.get('.toast-message')
      .should('be.visible')
      .and('have.text', 'Login ou Senha do usuário está incorreto.')
      .and('not.have.attr', 'disabled');
    cy.get('.toast-close-button').should('be.visible');
  }

  //Valida card de expiração de acesso.
  static expiresAcessCardValidate() {
    cy.get('.md-dialog-content-body > .ng-binding')
      .should('be.visible')
      .and('have.text', 'Falta(m) "1" dia(s) para sua Senha expirar.\r\nDeseja trocar sua Senha agora?');
    cy.get('.md-cancel-button')
      .should('be.visible')
      .and('have.text', 'NÃO')
      .and('not.have.attr', 'disabled');
    cy.get('.md-confirm-button')
      .should('be.visible')
      .and('have.text', 'SIM')
      .and('not.have.attr', 'disabled');
  }

  //Clica em SIM no card de expiração de acesso.
  static clickSIMExpires() {
    cy.get('.md-confirm-button').click();
    cy.get('center')
      .should('be.visible')
      .and('have.text', 'Aguarde carregando...');
  }

  //Valida regras para nova senha (antes de preencher).
  static rulesNewPasswordBefore() {
    cy.contains('span', 'Ao menos 8 caracteres.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
    cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
    cy.contains('span', 'Ao menos 1 algarismo.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
    cy.contains('span', 'Ao menos 1 caractere especial.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
    cy.contains('span', 'A nova senha não pode ser a atual.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
    cy.contains('span', 'As novas senhas informadas são iguais.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
  }

  //Valida regras para nova senha (depois de preencher).
  static rulesrulesNewPasswordAfter() {
    cy.contains('span', 'Ao menos 8 caracteres.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(0, 100, 0)');
    cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(0, 100, 0)');
    cy.contains('span', 'Ao menos 1 algarismo.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(0, 100, 0)');
    cy.contains('span', 'Ao menos 1 caractere especial.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(0, 100, 0)');
    cy.contains('span', 'A nova senha não pode ser a atual.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(0, 100, 0)');
    cy.contains('span', 'As novas senhas informadas são iguais.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 0, 0)');
  }

  //Valida mensagem "Sua Senha expirou..." e clica em OK.
  static messPasswordUserExpired() {
    cy.get('.md-dialog-content-body')
      .should('be.visible')
      .and('have.text', 'Sua Senha expirou...');
    cy.get('md-dialog-actions > .md-primary')
      .should('be.visible')
      .and('have.text', 'Ok')
      .and('not.have.attr', 'disabled');
    cy.get('md-dialog-actions > .md-primary').click();
  }
}