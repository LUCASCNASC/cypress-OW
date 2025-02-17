export class PreencherEndereco {

    constructor(page) {
        this.page = page
    }

    //selecionar tipo de endereço
    async tipoEndereco (selector) {

        //Selecionar tipo de endereço
        cy.get('.md-text.ng-binding')
            .contains('Padrão')
            .click({force:true})
    }

    //preencher campo CEP no cadastro de endereço e pesquisar
    async cepEndereco (selector) {

        const CEPcadastro = "87065300"

        //Preenchendo campo CEP
        cy.get('#txtCepEndereco')
            .type(CEPcadastro, {force:true})

        //Lupa de pesquisa de CEP
        cy.get('.md-icon-float > .ng-binding')
            .should('be.visible')

        cy.intercept('GET', '/services/v3/cidade?uf=PR').as('api_cidade')
        //Clicar na lupa de pesquisa de CEP
        cy.get('.md-icon-float > .ng-binding')
            .click({force:true})
        cy.wait('@api_cidade', { timeout: 40000 })
    }

    //preencher campo Numero no cadastro de endereço
    async numeroEndereco (selector) {

        const numero_endereco = "66"

        //Preenchendo campo Número
        cy.get('#txtNumEndereco')
            .type(numero_endereco, {force:true})
    }
}