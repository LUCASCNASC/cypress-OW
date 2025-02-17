export class ValidarSaldo {

    constructor(page) {
        this.page = page
    }

    //Validando produto com saldo disponível local
    async comSaldo (selector) {
        
        //Validando imagem
        cy.get('.resultado-imagem')
            .should('be.visible')

        //Validando "Saldo disponivel"
        cy.get('.label')
            .should('be.visible')
            .and('have.text','Saldo disponivel')
            .invoke('css', 'background-color') // Obtém a cor do elemento
            .should('equal', 'rgb(92, 184, 92)')

        //Validando nome do produto dentro card
        cy.get('.md-resultado-titulo')
            .should('be.visible')

        //Validado código do produto dentro do card
        cy.get('.badge-saldo.ng-binding')
            .should('be.visible')

        //Validando R$ dentro do card
        cy.get('sup')
            .should('be.visible')
            .and('have.text','R$')

        //Validando valor do produto dentro do card
        cy.get('.valor-busca')
            .should('be.visible')

        //Validando check box dentro do card
        // cy.get('.expandeIcone')
        //     .should('be.visible')
    }

    //Validando produto com saldo disponível no CD 
    async comSaldoCD (selector) {
        
        //Validando imagem
        cy.get('.resultado-imagem')
            .should('be.visible')

        //Validando "Saldo disponivel"
        cy.get('.label')
            .should('be.visible')
            .and('have.text','Saldo disponivel')
            .invoke('css', 'background-color') // Obtém a cor do elemento
            .should('equal', 'rgb(240, 173, 78)')

        //Validando nome do produto dentro card
        cy.get('.md-resultado-titulo')
            .should('be.visible')

        //Validado código do produto dentro do card
        cy.get('.badge-saldo.ng-binding')
            .should('be.visible')

        //Validando R$ dentro do card
        cy.get('sup')
            .should('be.visible')
            .and('have.text','R$')

        //Validando valor do produto dentro do card
        cy.get('.valor-busca')
            .should('be.visible')

        //Validando check box dentro do card
        // cy.get('.expandeIcone')
        //     .should('be.visible')
    }

    //Validando produto com saldo indisponível
    async semSaldo (selector) {
        
        //Validando imagem
        cy.get('.resultado-imagem')
            .should('be.visible')

        //Validando "Saldo indisponivel"
        cy.get('.label')
            .should('be.visible')
            .and('have.text','Saldo indisponivel')
            .invoke('css', 'background-color') // Obtém a cor do elemento
            .should('equal', 'rgb(217, 83, 79)')

        //Validando nome do produto dentro card
        cy.get('.md-resultado-titulo')
            .should('be.visible')

        //Validado código do produto dentro do card
        cy.get('.badge-saldo.ng-binding')
            .should('be.visible')

        //Validando R$ dentro do card
        cy.get('sup')
            .should('be.visible')
            .and('have.text','R$')

        //Validando valor do produto dentro do card
        cy.get('.valor-busca')
            .should('be.visible')

        //Validando check box dentro do card
        // cy.get('.expandeIcone')
        //     .should('be.visible')
    }
}