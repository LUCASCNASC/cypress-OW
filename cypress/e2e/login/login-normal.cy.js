import { LoginPage } from '../../pages/LoginPage.js';
import users from '../users.json';

describe('login happy path - regular user with password enabled', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        LoginPage.logoEnterpriseLogin();
        LoginPage.iconComputerLogin();
        LoginPage.userTextIcon();
    })

    context('user context 1', () => {

        it('login - happy path', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type((users.userSabium.password))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');

            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterEnabled();
            LoginPage.clickButtonEnter();
            LoginPage.messageOpeningSystem();
            LoginPage.buttonInitService();
        })
    
        it('login - pass user strong (should display a message saying "User login or password is incorrect.")', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type('sabium.123')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type((users.userSabium.password))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterEnabled();
            LoginPage.clickButtonEnter();
            LoginPage.messLoginPasswordIncorrect();
            LoginPage.iconComputerLogin();
        })
    
        it('login - pass password strong (should display a message saying "User login or password is incorrect.")', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSabium.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type('123.teste')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterEnabled();
            LoginPage.clickButtonEnter();
            LoginPage.messLoginPasswordIncorrect()
            LoginPage.iconComputerLogin();
        })
    
        it('4lLogin - pass-only login (the ENTER button should be disabled)', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type('123.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterDisabled();
            LoginPage.clickButtonEnter();
            LoginPage.iconComputerLogin();
        })
    
        it('login - pass-only login (the ENTER button should be disabled)', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type('sabium.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterDisabled();
            LoginPage.clickButtonEnter();
            LoginPage.iconComputerLogin();
        })  
    
        it('login - without pass login and password (the ENTER button should be disabled)', () => {

            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterDisabled();
            LoginPage.clickButtonEnter();
            LoginPage.iconComputerLogin();
        })
    })

    context('user context 3', () => {

        it('login - happy path', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSBX.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSBX.password)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterEnabled();
            LoginPage.clickButtonEnter();
            LoginPage.messageOpeningSystem();
            LoginPage.buttonInitService();
        })
    
        it('login - pass user strong (should display a message saying "User login or password is incorrect.")', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type('sabium.123')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSBX.password)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterEnabled();
            LoginPage.clickButtonEnter();
            LoginPage.messLoginPasswordIncorrect();
            LoginPage.iconComputerLogin();
        })
    
        it('login - pass password strong (should display a message saying "User login or password is incorrect.")', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type(users.userSBX.login)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type('123.teste')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterEnabled();
            LoginPage.clickButtonEnter();
            LoginPage.messLoginPasswordIncorrect()
            LoginPage.iconComputerLogin();
        })
    
        it('login - pass-only login (the ENTER button should be disabled)', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();

            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .type('123.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterDisabled();
            LoginPage.clickButtonEnter();
            LoginPage.iconComputerLogin();
        })
    
        it('login - pass only password (the ENTER button should be disabled)', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .type('sabium.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterDisabled();
            LoginPage.clickButtonEnter();
            LoginPage.iconComputerLogin();
        })  
    
        it('login - with input login and password (the ENTER button should be disabled)', () => {
        
            cy.get('#txtusername')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu user');
    
            LoginPage.passwordTextIcon();
    
            cy.get('#txtpassword')
                .should('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha');
    
            LoginPage.iconEyesPassword();
            LoginPage.buttonForgotPassword();
            LoginPage.buttonEnterDisabled();
            LoginPage.clickButtonEnter();
            LoginPage.iconComputerLogin();
        })
    })
})