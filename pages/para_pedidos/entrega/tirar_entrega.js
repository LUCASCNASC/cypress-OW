export class tirarEntrega {

    constructor(page) {
        this.page = page
    }

    //Arrastar botão de Retirada / Entrega
    async Primeiro (selector) {

        //Botão Retirada / Entrega parte esquerda
        cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-container')
            .scrollIntoView()
            .wait(500)
            .should('be.visible')
            .and('not.be.disabled')

        //Botão Retirada / Entrega parte direita
        cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-container > .md-thumb-container > .md-thumb')
            .should('be.visible')
            .and('not.be.disabled')

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', ' Retirada / Entrega ')
            .click({force:true})
    }

    //Arrastar botão de Retirada / Entrega do segundo produto
    async Segundo (selector) {

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
            .scrollIntoView()
            .wait(300)
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', ' Retirada / Entrega ')
            .click({force:true})
    }

    //Arrastar botão de Retirada / Entrega do terceiro produto
    async Terceiro (selector) {

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
            .scrollIntoView()
            .wait(300)
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', ' Retirada / Entrega ')
            .click({force:true})
    }
}