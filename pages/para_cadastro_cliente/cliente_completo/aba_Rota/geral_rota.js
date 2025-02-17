export class GeralRota {

    constructor(page) {
        this.page = page
    }

    //Validar e clicar na aba ROTA
    async clicarAbaRota (selector) {

        //Validando aba Rota
        cy.get('#menu_items_pri > :nth-child(3)')
            .should('be.visible')
            .and('have.text', 'Rotas')

        cy.intercept('GET', '/views/cliente/clienteRotasLista.html').as('api_cliente_completo_rota')
        //Clicar na aba Rota
        cy.get('#menu_items_pri > :nth-child(3)')
            .click()
        cy.wait('@api_cliente_completo_rota', { timeout: 40000 })
    }

    //botão + para adicionar um nova Rota
    async clicarAdicionarNovaRota (selector) {

        //Botão +, para adicionar Rota
        cy.get('.layout-align-end-end > .md-fab')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Botão +, para adicionar Rota
        cy.get('.layout-align-end-end > .md-fab')
            .click()
    }

    //validar informações do modal rota enquanto ainda está vazio
    async modalRotaVazioValidar (selector) {

        //Card Rotas - título Rotas
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Rotas')

        //Card Rotas - botão X
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Campo Tipo de endereço - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtTpEnderecoRota"]')
            .should('have.text', 'Tipo de endereço')

        //Card Rotas - Campo Tipo de endereço
        cy.get('#txtTpEnderecoRota')
            .should('be.visible')
            .and('have.value','')

        //Card Rotas - Campo Rota
        cy.get('#txtRota')
            .should('be.visible')
            .and('have.value','')

        //Card Rotas - Lupa de rota
        cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
            .should('be.visible')
    }

    // validando mensagem Rota Incluída com sucesso, após incluírmos a rota no cadastro
    async messRotaIncluidaSucesso (selector) {

        //Card Rota incluída com sucesso.
        cy.get('#toast-container > :nth-child(1)')
            .should('be.visible')

        //Card Rota incluída com sucesso. - Aviso
        cy.get(':nth-child(1) > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Card Rota incluída com sucesso. - Rota incluída com sucesso.
        cy.get(':nth-child(1) > .toast-message')
            .should('be.visible')
            .and('have.text', 'Rota incluída com sucesso.')
    }

    //validando informações que foram adicionadas no cadastro de rota
    async infosRotaAdicionada (selector) {

        //Card de rota adicionad1
        cy.get('.md-whiteframe-2dp')
            .should('be.visible')
            // .and('contain', 'Grupo: 5')
            // .and('contain', 'Rota: 1')
            // .and('contain', 'Cidade: 1')
            // .and('contain', 'Tipo endereço: 1')
    }
}