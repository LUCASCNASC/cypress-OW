import { LoginPage } from '../../pages/LoginPage.js';
import users from '../../e2e/users.json';

describe('User inative', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.validateTitlePage();
        LoginPage.logoEnterpriseLogin();
        LoginPage.iconComputerLogin();
        LoginPage.userTextIcon();
    })

    it('1.Attempting to log in with an inactive user', () => {
    
        cy.get('#txtusername')
            .should('be.visible')
            .and('have.value','')
            .type((users.userSabium.login))
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
        cy.get('.toast')
            .should('be.visible')
            .and('have.css', 'background-color', 'rgb(248, 148, 6)');

        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text','Atenção');

        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text','user não está ativo.');

        cy.get('.toast-close-button')
            .should('be.visible');

        LoginPage.iconComputerLogin();
    })
})