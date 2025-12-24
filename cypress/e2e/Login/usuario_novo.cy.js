import { LoginPage } from '../../pages/LoginPage.js';
import users from '../../e2e/users.json';

describe('Logar com novo usuário', () => {

    beforeEach(() => {

        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.urlAposLogin()
        cy.tituloPagina()
        LoginPage.logoEnterpriseLogin()
        LoginPage.iconComputerLogin()
        LoginPage.userTextIcon()
    })

    it('1.Novo usuário - clicar em Fechar, não alterando a senha', () => {
    
        cy.get('#txtusername')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.login)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe seu usuário')

        LoginPage.passwordTextIcon()

        cy.get('#txtpassword')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.password)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha')

        LoginPage.iconEyesPassword()
        LoginPage.buttonForgotPassword()
        LoginPage.buttonEnterEnabled()
        LoginPage.clickButtonEnter()

        cy.get('.md-dialog-content-body')
            .should('be.visible')
            .and('have.text','Sua Senha expirou...')

        cy.get('md-dialog-actions > .md-primary')
            .should('be.visible')
            .and('have.text','Ok')
            .and('not.have.attr', 'disabled')

        cy.get('md-dialog-actions > .md-primary')
            .click()

        cy.get('p')
            .contains('Altere Sua Senha Temporária')
            .should('be.visible')

        cy.get('.senha_nova > :nth-child(1)')
            .should('be.visible')
            .and('have.text','Usuário')

        cy.get(':nth-child(2) > .ng-pristine')
            .should('be.visible')
            .and('have.value',users.userSabiumNovo.login)

        cy.get('.senha_nova > :nth-child(4)')
            .should('be.visible')
            .and('have.text','Senha Atual')

        cy.get(':nth-child(5) > .ng-pristine')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.password)

        cy.get('md-icon[ng-click="showPasswordToggle()"]')
            .should('be.visible')

        cy.get('a[ng-click="gerarNovaSenha($event)"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.get('p')
            .contains('Regras para a Nova Senha')
            .should('be.visible')

        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.get('input[name="password_new"]')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.newPassword)

        cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
            .should('be.visible')

        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.get(':nth-child(5) > .md-raised')
            .should('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'not.disabled')

        cy.get('.senha_nova > :nth-child(10)')
            .should('be.visible')
            .and('have.text','Repetir Nova Senha')

        cy.get(':nth-child(11) > .ng-pristine')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.newPassword)

        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.get(':nth-child(5) > .md-raised')
            .should('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'disabled')

        cy.get('[ng-show="!loading"] > a')
            .should('be.visible')
            .and('have.text','Fechar')
            .and('not.have.attr', 'disabled')

        cy.get('[ng-show="!loading"] > a')
            .click()

        LoginPage.iconComputerLogin() 
    })

    it('2.Novo usuário - clicar em CONFIRMAR, alterando a senha', () => {
    
        cy.get('#txtusername')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.login)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe seu usuário')

        LoginPage.passwordTextIcon()

        cy.get('#txtpassword')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.password)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha')

        LoginPage.iconEyesPassword()
        LoginPage.buttonForgotPassword()
        LoginPage.buttonEnterEnabled()
        LoginPage.clickButtonEnter()

        cy.get('.md-dialog-content-body')
            .should('be.visible')
            .and('have.text','Sua Senha expirou...')

        cy.get('md-dialog-actions > .md-primary')
            .should('be.visible')
            .and('have.text','Ok')
            .and('not.have.attr', 'disabled')

        cy.get('md-dialog-actions > .md-primary')
            .click()

        cy.get('p')
            .contains('Altere Sua Senha Temporária')
            .should('be.visible')

        cy.get('.senha_nova > :nth-child(1)')
            .should('be.visible')
            .and('have.text','Usuário')

        cy.get(':nth-child(2) > .ng-pristine')
            .should('be.visible')
            .and('have.value',users.userSabiumNovo.login)

        cy.get('.senha_nova > :nth-child(4)')
            .should('be.visible')
            .and('have.text','Senha Atual')

        cy.get(':nth-child(5) > .ng-pristine')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.password)

        cy.get('md-icon[ng-click="showPasswordToggle()"]')
            .should('be.visible')

        cy.get('a[ng-click="gerarNovaSenha($event)"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.get('p')
            .contains('Regras para a Nova Senha')
            .should('be.visible')

        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.get('input[name="password_new"]')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.newPassword)

        cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
            .should('be.visible')

        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        cy.get(':nth-child(5) > .md-raised')
            .should('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'not.disabled')

        cy.get('.senha_nova > :nth-child(10)')
            .should('be.visible')
            .and('have.text','Repetir Nova Senha')

        cy.get(':nth-child(11) > .ng-pristine')
            .should('be.visible')
            .and('have.value','')
            .type(users.userSabiumNovo.newPassword)

        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        cy.get(':nth-child(5) > .md-raised')
            .should('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'disabled')
             
        cy.get('[ng-show="!loading"] > a')
            .should('be.visible')
            .and('have.text','Fechar')
            .and('not.have.attr', 'disabled')
            
        cy.get(':nth-child(5) > .md-raised')
            .click()

        cy.get('.toast')
            .should('be.visible')

        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text','Aviso')

        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text','Senha alterada com sucesso')
    })
})