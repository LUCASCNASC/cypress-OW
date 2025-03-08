export class TicketPrestamista {

    constructor(page) {
        this.page = page
    }

    //validar adição do serviço prestamista, após clicarmos para adicionar
    async adicionado (selector) {

        cy.get('[ng-repeat="itemAtual in item.servicos track by $index"] > ul')
            .scrollIntoView()
            .wait(200)

        //ticket inteiro
        cy.get('[ng-repeat="itemAtual in item.servicos track by $index"] > ul')
            .should('be.visible')

        //nome do serviço prestamista
        cy.get('ul > :nth-child(1) > .ng-binding')
            .should('be.visible')

        //cifrão do valor do prestamista
        cy.get('ul > :nth-child(1) > sup')
            .should('be.visible')
            .and('have.text', 'R$')

        //"Vendedor"
        cy.get(':nth-child(2) > b') 
            .should('be.visible')
            .and('have.text', 'Vendedor:')

        //Nome do vendedor
        cy.get('[ng-repeat="itemAtual in item.servicos track by $index"] > ul > :nth-child(2)')
            .should('be.visible')

        //Ícone lápis - para edição do vendedor
        cy.get('ul > :nth-child(2) > .md-primary')
            .should('be.visible')
            .and('not.be.disabled')
    }

    //validar adição do prestamista na pagina de finalizar o pedido
    async paginaFinal (selector) {

        cy.get('.ng-scope > ul')
            .scrollIntoView()
            .wait(200)

        //ticket inteiro
        cy.get('.ng-scope > ul')
            .should('be.visible')

        //nome do serviço prestamista
        cy.get('ul > :nth-child(1) > .ng-binding')
            .should('be.visible')

        //cifrão do valor do prestamista
        cy.get('ul > :nth-child(1) > sup')
            .should('be.visible')
            .and('have.text', 'R$')

        //"Vendedor"
        cy.get('ul > :nth-child(2) > b') 
            .should('be.visible')
            .and('have.text', 'Vendedor:')

        //Nome do vendedor
        cy.get('.ng-scope > ul > :nth-child(2)')
            .should('be.visible')
    }

    //validar adição do serviço prestamista, após clicarmos para agrupar lançamentos
    async adicionadoRecebAgrupado (selector) {

        cy.get('b.ng-binding')
        .contains('T.A. Prestamista Não separa Com juros - Futuro')
        .should('be.visible')
    }
} 