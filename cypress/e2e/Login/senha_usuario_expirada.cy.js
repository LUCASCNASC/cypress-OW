import { LoginPage } from '../../pages/LoginPage.js';
import users from '../../e2e/users.json';

describe('User with expired password', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.urlAposLogin()
        cy.tituloPagina()
        LoginPage.logoEnterpriseLogin()
        LoginPage.iconComputerLogin()
        LoginPage.userTextIcon()
    })

    context('Attempting to log in when the password has already expired', () => {

        it('1.Try logging in with a user whose password has expired - click YES to update password - click Close password reset', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')

            LoginPage.passwordTextIcon()

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.password)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')

            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messPasswordUserExpired()

            cy.get('p')
                .contains('Altere Sua Senha Temporária')
                .should('be.visible')

            cy.get('.senha_nova > :nth-child(1)')
                .should('be.visible')
                .and('have.text','user')

            cy.get(':nth-child(2) > .ng-pristine')
                .should('be.visible')
                .and('have.value', users.userSabium.login)

            cy.get('.senha_nova > :nth-child(4)')
                .should('be.visible')
                .and('have.text','Senha Atual')

            cy.get(':nth-child(5) > .ng-pristine')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.password, {force:true})

            cy.get('md-icon[ng-click="showPasswordToggle()"]')
                .should('be.visible')

            cy.get('a[ng-click="gerarNovaSenha($event)"]')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

            cy.get('p')
                .contains('Regras para a Nova Senha')
                .should('be.visible')

            LoginPage.rulesNewPasswordBefore()

            cy.get('input[name="password_new"]')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabiumNovo.newPassword)

            cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
                .should('be.visible')

            LoginPage.rulesrulesNewPasswordAfter()

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

            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('be.visible')
                .and('not.have.attr', 'disabled')
        })

        it('2.Try logging in with a user whose password has expired - click DO NOT update password - click Close password reset', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')

            LoginPage.passwordTextIcon()

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.password)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')

            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.botaoEntrarHabbuttonEnterEnabledilitado()
            LoginPage.clickButtonEnter()
            LoginPage.messPasswordUserExpired()

            cy.get('p')
                .contains('Altere Sua Senha Temporária')
                .should('be.visible')

            cy.get('.senha_nova > :nth-child(1)')
                .should('be.visible')
                .and('have.text','user')

            cy.get(':nth-child(2) > .ng-pristine')
                .should('be.visible')
                .and('have.value', users.userSabium.login)

            cy.get('.senha_nova > :nth-child(4)')
                .should('be.visible')
                .and('have.text','Senha Atual')

            cy.get(':nth-child(5) > .ng-pristine')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.password, {force:true})

            cy.get('md-icon[ng-click="showPasswordToggle()"]')
                .should('be.visible')

            cy.get('a[ng-click="gerarNovaSenha($event)"]')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

            cy.get('p')
                .contains('Regras para a Nova Senha')
                .should('be.visible')

            LoginPage.rulesNewPasswordBefore()

            cy.get('input[name="password_new"]')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabiumNovo.newPassword)

            cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
                .should('be.visible')

            LoginPage.rulesrulesNewPasswordAfter()

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

            scrollTo()
                    
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

    context('Log in when the password has been changed and there is 1 day left before it expires, as defined in this users group', () => {

        it('3.Login - click on DO NOT update password', () => {
        
                cy.get('#txtusername')
                    .should('be.visible')
                    .and('have.value','')
                    .type(users.userSabium.login)
                    .invoke('attr', 'placeholder')
                    .should('equal', 'Informe seu user')
        
                LoginPage.passwordTextIcon()
        
                cy.get('#txtpassword')
                    .should('be.visible')
                    .and('have.value','')
                    .type(users.userSabiumNovo.newPassword)
                    .invoke('attr', 'placeholder')
                    .should('equal', 'Informe sua senha')
        
                LoginPage.iconEyesPassword()
                LoginPage.buttonForgotPassword()
                LoginPage.buttonEnterEnabled()
                LoginPage.clickButtonEnter()
                LoginPage.messageOpeningSystem()
                LoginPage.expiresAcessCardValidate()
        
                cy.get('.md-cancel-button')
                    .click()
        
                cy.get('.md-raised > .truncate')
                    .should('be.visible')
        })
        
        it('4.Login - click YES to update password - click Close password reset', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabiumNovo.newPassword)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messageOpeningSystem()
            LoginPage.expiresAcessCardValidate()
            LoginPage.clickSIMExpires()

            cy.get('p')
                .contains('Altere Sua Senha Temporária')
                .should('be.visible')
    
            cy.get('.senha_nova > :nth-child(1)')
                .should('be.visible')
                .and('have.text','user')
    
            cy.get(':nth-child(2) > .ng-pristine')
                .should('be.visible')
                .and('have.value', users.userSabium.login)
    
            cy.get('.senha_nova > :nth-child(4)')
                .should('be.visible')
                .and('have.text','Senha Atual')

            cy.get(':nth-child(5) > .ng-pristine')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabiumNovo.newPassword, {force:true})
    
            cy.get('md-icon[ng-click="showPasswordToggle()"]')
                .should('be.visible')
    
            cy.get('a[ng-click="gerarNovaSenha($event)"]')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

            cy.get('p')
                .contains('Regras para a Nova Senha')
                .should('be.visible')
    
            LoginPage.rulesNewPasswordBefore()

            cy.get('input[name="password_new"]')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.password)

            cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
                .should('be.visible')
    
            LoginPage.rulesrulesNewPasswordAfter()

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
                .type((users.userSabium.password))

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
    
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('be.visible')
                .and('not.have.attr', 'disabled')
        })
    
        it('5.Login - click YES to update password - click CONFIRM to reset password', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabiumNovo.newPassword)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messageOpeningSystem()
            LoginPage.expiresAcessCardValidate()
            LoginPage.clickSIMExpires()
    
            cy.get('p')
                .contains('Altere Sua Senha Temporária')
                .should('be.visible')
    
            cy.get('.senha_nova > :nth-child(1)')
                .should('be.visible')
                .and('have.text','user')
    
            cy.get(':nth-child(2) > .ng-pristine')
                .should('be.visible')
                .and('have.value', users.userSabium.login)
    
            cy.get('.senha_nova > :nth-child(4)')
                .should('be.visible')
                .and('have.text','Senha Atual')
    
            cy.get(':nth-child(5) > .ng-pristine')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabiumNovo.newPassword, {force:true})

            cy.get('md-icon[ng-click="showPasswordToggle()"]')
                .should('exist')

            cy.get('a[ng-click="gerarNovaSenha($event)"]')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

            cy.get('p')
                .contains('Regras para a Nova Senha')
                .should('be.visible')
    
            LoginPage.rulesNewPasswordBefore()

            cy.get('input[name="password_new"]')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.password)
    
            cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
                .should('be.visible')
    
            LoginPage.rulesrulesNewPasswordAfter()

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
                .type(users.userSabium.password)
    
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
})