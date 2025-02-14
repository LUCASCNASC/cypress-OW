export class TirarMontagem {

    constructor(page) {
        this.page = page
    }

    //Arrastar botão de Montagem
    async primeiro (selector) {

        //Botão como um todo
        cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('not.be.disabled')

        //Botão Montagem parte direita
        cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
            .should('be.visible')
            .and('not.be.disabled')

        //Botão Montagem - texto Montagem
        cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', ' Montagem ')
            .click({force:true})
    }

    //Arrastar botão de Montagem do segundo produto
    async segundo (selector) {

        //Botão como um todo
        cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
            .scrollIntoView()
            .wait(200)
            .should('exist')
            .and('not.be.disabled')

        //Botão Montagem parte direita
        cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
            .should('be.visible')
            .and('not.be.disabled')

        //Botão Montagem - texto Montagem
        cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', ' Montagem ')
            .click({force:true})
    }
}