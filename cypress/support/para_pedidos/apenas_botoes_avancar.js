//Botão para avançar para a tela de Gerar parcelas - com intercept
export function avancarParaParcelas (selector) {

    cy.intercept('GET', '/views/list-action-buttons.html').as('api_tela_pagamento')

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

    cy.wait('@api_tela_pagamento', { timeout: 40000 })
}

//Botão para avançar para a tela de escolher transportadora e rota - com intercept
export function avancarParaTransportadora (selector) {

    cy.intercept('GET', '/views/carrinho/endereco.html').as('apiEndereco')
    cy.intercept('GET', '/services/v3/cidade?uf=PR').as('apiCidade')

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

    cy.wait('@apiEndereco', { timeout: 40000 })
    cy.wait('@apiCidade', { timeout: 40000 })
}

//Botão para avançar para a tela de Gerar parcelas - com intercept
export function avancarParcelasEntrega (selector) {

    cy.intercept('GET', '/views/list-action-buttons.html').as('api_tela_pagamento')

    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)
        //.should('be.visible')
        //.and('not.be.disabled')
        .should('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})

    cy.wait('@api_tela_pagamento', { timeout: 40000 })
}

//Botão AVANÇAR, da tela antes de finalizar o pedido - com intercept
export function avancarFinal (selector) {

    cy.wait(300)

    cy.intercept('GET', '/views/carrinho/confirmacao.html').as('api_carinho_confirmacao')

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

    cy.wait('@api_carinho_confirmacao', { timeout: 40000 })
}

//Botão para avançar para a tela de Gerar parcelas (ALTERAÇÃO DE PEDIDO) - com intercept
export function avancarParaParcelasAlterar (selector) {

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
export function avancarFinalAlterar (selector) {

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
export function avancarParaTransportadoraAlterar (selector) {

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
export function avancarParcelasEntregaAlterar (selector) {

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