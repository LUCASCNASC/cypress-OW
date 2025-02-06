//Validar e clicar na aba ROTA
export function clicarAbaRota (selector) {

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
export function clicarAdicionarNovaRota (selector) {

    //Botão +, para adicionar Rota
    cy.get('.layout-align-end-end > .md-fab')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Botão +, para adicionar Rota
    cy.get('.layout-align-end-end > .md-fab')
        .click()
}

//validar informações do modal rota enquanto ainda está vazio
export function modalRotaVazioValidar (selector) {

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

//selecionar tipo de endereço do modal de rota Padrão
export function escolherTipoEnderecoRota (selector) {

    //Clicar no campo tipo de endereço
    cy.get('#txtTpEnderecoRota')
        .click({force:true})

    //Clicar no tipo de endereço Padrão
    cy.get('.md-text.ng-binding')
        .contains('Padrão')
        .click({force:true})
}

// validando mensagem Rota Incluída com sucesso, após incluírmos a rota no cadastro
export function messRotaIncluidaSucesso (selector) {

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
export function infosRotaAdicionada (selector) {

    //Card de rota adicionad1
    cy.get('.md-whiteframe-2dp')
        .should('be.visible')
        .and('contain', 'Grupo: 5')
        .and('contain', 'Rota: 1')
        .and('contain', 'Cidade: 1')
        .and('contain', 'Tipo endereço: 1')
}

//------------------- PREENCHER CAMPO ------


//preencher Rota no cadastro de rota e escolher as opções certas
export function preencherRotaCompleta (selector) {

    const rota_cadastro = "1"

    //Campo Rota - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtRota"]')
        .should('have.text', 'Rota')

    //Inserindo Rota 
    cy.get('#txtRota')
        .type(rota_cadastro)

    cy.wait(200)

    //Clicando na lupa de rota
    cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
        .click({force:true})

    cy.wait(200)

    //Clicando na rota maringá - segunda rota
    cy.get('v-pane-header.ng-scope > div')
        .click({force:true})

    cy.wait(200)

    //Clicando rota centro - terceira rota
    cy.get(':nth-child(4) > .padding-10-0')
        .click({force:true})
}

