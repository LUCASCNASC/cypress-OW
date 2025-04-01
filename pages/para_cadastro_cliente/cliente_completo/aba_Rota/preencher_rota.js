export class FillRefRoute {

    constructor(page) {
        this.page = page
    }

    //preencher Rota no cadastro de rota e escolher as opções certas
    async rotaCompleta (selector) {

        const rota_cadastro = "560"

        //Campo Rota - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtRota"]')
            .should('have.text', 'Rota')

        //Inserindo Rota 
        cy.get('#txtRota')
            .type(rota_cadastro)

        cy.wait(200)

        cy.intercept('GET', '/services/v3/rota?idrota=560').as('api_rota_560')
        //Clicando na lupa de rota
        cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
            .click({force:true})
        cy.wait('@api_rota_560', { timeout: 40000 })

        //Clicando na rota maringá - segunda rota
        cy.get('v-pane-header.ng-scope > div')
            .click({force:true})

        cy.wait(200)

        cy.intercept('GET', '/services/v3/local_entrega?rota=560').as('api_local_entrega_560')
        //Clicando rota centro - terceira rota
        cy.contains('560 - T.A. ROTA AUTOMAÇÃO MARINGÁ')
            .click()

        cy.contains('560 - T.A. CIDADE AUTOMAÇÃO')
            .click()
        cy.wait('@api_local_entrega_560', { timeout: 40000 })
    }

    //selecionar tipo de endereço do modal de rota Padrão
    async tipoEnderecoRota (selector) {

        //Clicar no campo tipo de endereço
        cy.get('#txtTpEnderecoRota')
            .click({force:true})

        //Clicar no tipo de endereço Padrão
        cy.get('.md-text.ng-binding')
            .contains('Padrão')
            .click({force:true})
    }
}