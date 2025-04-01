export class Login {

    constructor(page) {
        this.page = page
    }

    //Validando Logo da empresa
    async logoEnterpriseLogin (selector) {

        //Validar o logo da empresa
        cy.get('.logo')
            .should('be.visible')
    }

    //Validando Ícone do computador
    async iconComputerLogin (selector) {

        //Ícone do computador
        cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
    }

    //Validando texto usuário, acima do campo usuário e validando ícone do usuário
    async userTextIcon (selector) {

        //Validando Texto "Usuário" acima do campo informe sue usuário
        cy.get('label[for="txtusername"]')
            .should('be.visible')
            .and('have.text','Usuário')

        //Ícone do campo informe seu usuário
        cy.get(':nth-child(3) > .name')
            .should('be.visible')
    }

    //Validando texto Senha, acima do campo usuário e validando ícone da Senha
    async passwordTextIcon (selector) {
        
        //Validando Texto "Senha" acima do campo informe sua senha
        cy.get('label[for="txtpassword"]')
            .should('be.visible')
            .and('have.text','Senha')

        //Ícone de senha
        cy.get('.md-icon-right > .name')
            .should('be.visible')
    }

    //Ícone de visualizar senha
    async iconEyesPassword (selector) {

        //ícone de olho, para ver a senha
        cy.get('.md-icon-right > .md-primary')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
    }

    //Botão Esqueceu Senha
    async buttonForgotPassword (selector) {

        //Botão/mensagem "Esqueceu a senha?"
        cy.get('div[ng-click="modalSenhaNovaOpen()"]')
            .contains('Esqueceu a senha?')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
    }

    //Botão entrar habilitado
    async buttonEnterEnabled (selector) {

        //Botão ENTRAR
        cy.get('.test_btnSalvarCliente')
            .should('be.visible')
            .and('have.text','Entrar')
            .and('not.have.attr', 'disabled')
    }

    //Botão entrar desabilitado
    async buttonEnterDisabled (selector) {

        //Botão ENTRAR
        cy.get('.test_btnSalvarCliente')
            .should('be.visible')
            .and('have.text','Entrar')
            .and('not.have.attr', 'not.disabled')
    }

    //Clicar no botão entrar
    async clickButtonEnter (selector) {

        //Clicar no botão ENTRAR
        cy.get('.test_btnSalvarCliente')
            .click({force:true})
    }

    //Mensagem Entrando no sistema
    async messageOpeningSystem (selector) {

        //Mensagem "Entrando no sistema"
        cy.get('.ng-scope > .ng-binding')
            .should('be.visible')
            .and('have.text','Entrando no sistema')
    }

    //botao INICIAR ATENDIMENTO - validando que entrou no sistema
    async buttonInitService (selector) {

        //Validando botão INICIAR ATENDIMENTO, para ver se logou
        cy.get('.md-raised > .truncate')
            .should('be.visible')
    }

    //validando mensagem de Login ou senha estão incorretos
    async messLoginPasswordIncorrect (selector) {

        //Mensagem de senha errada
        cy.get('.toast')
            .should('be.visible')

        //Mensagem "Atenção"
        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text','Atenção')
            .and('not.have.attr', 'disabled')

        //Mensagem "Login ou Senha do usuário está incorreto."
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text','Login ou Senha do usuário está incorreto.')
            .and('not.have.attr', 'disabled') 

        //Botão X para fechar mensagem
        cy.get('.toast-close-button')
            .should('be.visible')
    }

    // Card de expira acesso - "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
    async expiresAcessCardValidate (selector) {

        //Card de expira acesso - Mensagem "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
        cy.get('.md-dialog-content-body > .ng-binding')
            .should('be.visible')
            .and('have.text','Falta(m) "1" dia(s) para sua Senha expirar.\r\nDeseja trocar sua Senha agora?')

        //Card de expira acesso - NÃO
        cy.get('.md-cancel-button')
            .should('be.visible')
            .and('have.text','NÃO')
            .and('not.have.attr', 'disabled')

        //Card de expira acesso - SIM
        cy.get('.md-confirm-button')
            .should('be.visible')
            .and('have.text','SIM')
            .and('not.have.attr', 'disabled')
    }

    //Card de expira acesso - clicar em SIM
    async clickSIMExpires (selector) {

        //Card de expira acesso - clicar em SIM
        cy.get('.md-confirm-button')
            .click()

        //Mensagem "Aguarde carregando...", após clicarmos em SIM
        cy.get('center')
            .should('be.visible')
            .and('have.text','Aguarde carregando...')
    }

    //Validar Regras para a Nova Senha (antes de preencher campo Nova Senha)
    async rulesNewPasswordBefore (selector) {

        //Validar a primeira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a segunda Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a terceira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a quarta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a quinta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a sexta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')
    }

    //Validar Regras para a Nova Senha (antes de preencher campo Nova Senha)
    async rulesrulesNewPasswordAfter (selector) {

        //Validar a primeira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a segunda Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a terceira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a quarta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a quinta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a sexta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')
    }

    //validar card "Sua Senha expirou" quando a senha do usuário está expirada
    async messPasswordUserExpired (selector) {

        //Mensagem "Seu acesso ao sistema expirou."
        cy.get('.md-dialog-content-body')
            .should('be.visible')
            .and('have.text','Sua Senha expirou...')

        //Botão OK da mensagem "Seu acesso ao sistema expirou."
        cy.get('md-dialog-actions > .md-primary')
            .should('be.visible')
            .and('have.text','Ok')
            .and('not.have.attr', 'disabled')

        //Clicar no botão OK da mensagem "Seu acesso ao sistema expirou."
        cy.get('md-dialog-actions > .md-primary')
            .click()
    }
}