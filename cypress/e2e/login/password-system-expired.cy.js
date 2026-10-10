import { LoginPage } from '../../pages/LoginPage.js';
import users from '../users.json';

describe('user with expired password system', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        LoginPage.logoEnterpriseLogin();
        LoginPage.iconComputerLogin();
        LoginPage.userTextIcon();
    })

    it('try to Login with user with password expired user', () => {
    
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
            .type(users.userSabium.password)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha');

        LoginPage.iconEyesPassword();
        LoginPage.buttonForgotPassword();
        LoginPage.buttonEnterEnabled();
        LoginPage.clickButtonEnter();
        LoginPage.messageOpeningSystem();

        cy.get('.md-dialog-content-body')
            .should('be.visible')
            .and('have.text','Seu acesso ao sistema expirou.');

        cy.get('md-dialog-actions > .md-primary')
            .should('be.visible')
            .and('have.text','Ok')
            .and('not.have.attr', 'disabled');

        cy.get('md-dialog-actions > .md-primary')
            .click();

        LoginPage.iconComputerLogin();
    })
})
