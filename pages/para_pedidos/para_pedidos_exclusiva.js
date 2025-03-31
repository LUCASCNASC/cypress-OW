export class OrderExclusiva {

    constructor(page) {
        this.page = page
    }

    //aumentar quantidade a ser vendida, 5 unidades
    async increaseAmountSaleFive (selector) {

        //botão para diminuir quantidade
        cy.get('[ng-click="delItem()"]')
            .should('be.visible')
            .and('not.be.disabled')

        //validar campo Quantidade
        cy.get('[ng-model="quantidadeShow"]')
            .should('be.visible')
            .and('be.disabled')
            .and('have.value', '1')

        //botão para aumentar quantidade
        cy.get('[ng-click="addItem()"]')
            .should('be.visible')
            .and('not.be.disabled')

        //botão para aumentar quantidade
        cy.get('[ng-click="addItem()"]')
            .click()
            .click()
            .click()
            .click()
            .click()
    }

    //aumentar quantidade a ser vendida, 10 unidades
    async increaseAmountSaleTen (selector) {

        //botão para diminuir quantidade
        cy.get('[ng-click="delItem()"]')
            .should('be.visible')
            .and('not.be.disabled')

        //validar campo Quantidade
        cy.get('[ng-model="quantidadeShow"]')
            .should('be.visible')
            .and('be.disabled')
            .and('have.value', '1')

        //botão para aumentar quantidade
        cy.get('[ng-click="addItem()"]')
            .should('be.visible')
            .and('not.be.disabled')

        //botão para aumentar quantidade
        cy.get('[ng-click="addItem()"]')
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
    }

    //Validando produto com saldo indisponível
    async balanceRemoteReceive (selector) {
        
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
        cy.get('.expandeIcone')
            .should('be.visible')
    }
}