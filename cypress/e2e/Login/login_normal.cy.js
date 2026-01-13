import { LoginPage } from '../../pages/LoginPage.js';
import users from '../../e2e/users.json';

describe('Login happy path - regular user with password enabled', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.urlAposLogin()
        cy.tituloPagina()
        LoginPage.logoEnterpriseLogin()
        LoginPage.iconComputerLogin()
        LoginPage.userTextIcon()
    })

    context('User context 1', () => {

        it('1.Login - happy path', () => {

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
                .type((users.userSabium.password))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')

            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messageOpeningSystem()
            LoginPage.buttonInitService()
        })
    
        it('2.Login - pass user strong (should display a message saying "User login or password is incorrect.")', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type('sabium.123')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type((users.userSabium.password))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messLoginPasswordIncorrect() 
            LoginPage.iconComputerLogin()
        })
    
        it('3.Login - pass password strong (should display a message saying "User login or password is incorrect.")', () => {

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
                .type('123.teste')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messLoginPasswordIncorrect()
            LoginPage.iconComputerLogin()
        })
    
        it('4.Login - pass-only login (the ENTER button should be disabled)', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type('123.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterDisabled()
            LoginPage.clickButtonEnter()
            LoginPage.iconComputerLogin()
        })
    
        it('5.Login - pass-only login (the ENTER button should be disabled)', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type('sabium.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterDisabled()
            LoginPage.clickButtonEnter()
            LoginPage.iconComputerLogin()
        })  
    
        it('6.Login - without pass login and password (the ENTER button should be disabled)', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterDisabled()
            LoginPage.clickButtonEnter()
            LoginPage.iconComputerLogin()
        })
    })

    context('User context 3', () => {

        it('7.Login - happy path', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSBX.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSBX.password)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messageOpeningSystem()
            LoginPage.buttonInitService()
        })
    
        it('8.Login - pass user strong (should display a message saying "User login or password is incorrect.")', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type('sabium.123')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSBX.password)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messLoginPasswordIncorrect()
            LoginPage.iconComputerLogin()
        })
    
        it('9.Login - pass password strong (should display a message saying "User login or password is incorrect.")', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSBX.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type('123.teste')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterEnabled()
            LoginPage.clickButtonEnter()
            LoginPage.messLoginPasswordIncorrect()
            LoginPage.iconComputerLogin()
        })
    
        it('10.Login - pass-only login (the ENTER button should be disabled)', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type('123.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterDisabled()
            LoginPage.clickButtonEnter()
            LoginPage.iconComputerLogin()
        })
    
        it('11.Login - pass only password (the ENTER button should be disabled)', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type('sabium.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterDisabled()
            LoginPage.clickButtonEnter()
            LoginPage.iconComputerLogin()
        })  
    
        it('12.Login - with input login and password (the ENTER button should be disabled)', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user')
    
            LoginPage.passwordTextIcon()
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword()
            LoginPage.buttonForgotPassword()
            LoginPage.buttonEnterDisabled()
            LoginPage.clickButtonEnter()
            LoginPage.iconComputerLogin()
        })
    })
})