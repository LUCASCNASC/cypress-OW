export class avancarAlterar {

    constructor(page) {
        this.page = page
    }

    //Botão para avançar para a tela de Gerar parcelas (ALTERAÇÃO DE PEDIDO) - com intercept
    async ParaParcelasAlt (selector) {

        cy.intercept('/services/v3/pedido_validar').as('api_ped_validar')

        cy.get('.flex-gt-sm-50 > .md-primary')
            .scrollIntoView()
            .wait(200)
            //.should('be.visible')
            .should('contain','Avançar')

        //Clicar para avançar para a tela de GERAR PARCELAS
        cy.get('.flex-gt-sm-50 > .md-primary')
            .click({force:true})

        //Validando carregamento do ícone de "Adicionando produtos/serviços..."
        cy.get('.conteudo > .layout-align-center-center > .md-accent')
            .should('be.visible')

        //Validando mensagem de carregamento -  "Adicionando produtos/serviços..."
        cy.get('h3')
            .should('be.visible')
            .and('have.text','Adicionando produtos/serviços...')

        cy.wait('@api_ped_validar', { timeout: 40000 })
    }

    //Botão AVANÇAR, da tela antes de finalizar o pedido (ALTERAÇÃO DE PEDIDO) - com intercept
    async FinalAlt (selector) {

        //cy.intercept('GET', '/views/carrinho/confirmacao.html').as('api_carinho_confirmacao_alterar')

        //Botão "AVANÇAR"
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .scrollIntoView()
            .wait(200)
            //.should('be.visible')
            //.and('not.be.disabled')
            .should('contain','Avançar')

        //Botão "AVANÇAR" - clicar
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .dblclick({force:true})

        //cy.wait('@api_carinho_confirmacao_alterar', { timeout: 40000 })
    }

    //Botão para avançar para a tela de escolher transportadora e rota (ALTERAÇÃO DE PEDIDO) - com intercept
    async ParaTransportadoraAlt (selector) {

        cy.intercept('/cliente/**').as('api_tela_transportadora_pedido_alterar')

        cy.get('.flex-gt-sm-50 > .md-primary')
            .scrollIntoView()
            .wait(200)
            //.should('be.visible')
            //.and('not.be.disabled')
            .should('contain','Avançar')

        //Clicar para avançar para a tela de GERAR PARCELAS
        cy.get('.flex-gt-sm-50 > .md-primary')
            .dblclick({force:true})

        cy.wait(2000)

        //Validando carregamento do ícone de "Adicionando produtos/serviços..."
        cy.get('.conteudo > .layout-align-center-center > .md-accent')
            .should('be.visible')

        //Validando mensagem de carregamento -  "Adicionando produtos/serviços..."
        cy.get('h3')
            .should('be.visible')
            .and('have.text','Adicionando produtos/serviços...')

        cy.wait('@api_tela_transportadora_pedido_alterar', { timeout: 50000 })
    }

    //Botão para avançar para a tela de Gerar parcelas (ALTERAÇÃO DE PEDIDO) - com intercept
    async ParcelasEntregaAlt (selector) {

        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .scrollIntoView()
            .wait(200)
            //.should('be.visible')
            //.and('not.be.disabled')
            .should('contain','Avançar')

        //Clicar para avançar para a tela de GERAR PARCELAS
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .click({force:true})
    }
}