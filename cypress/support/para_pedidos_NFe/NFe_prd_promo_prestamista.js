//Escolher primeiro produto normal - 1918 0 0 - com Intercept - processo venda 9860 (NFe)
export function prdPromoPrazoParcelaPrest (selector) {

    const primeiro_produto_normal = '1918'

    cy.intercept('GET', /\/consultaprodutos\/.*1918.*/).as('apiConsultaProdutos_PromoPrazoParcelaPrest')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_produto_normal)
        .wait(100)
        .should('have.value', primeiro_produto_normal)

    cy.wait('@apiConsultaProdutos_PromoPrazoParcelaPrest', { timeout: 40000 })
}

//-----

//Escolher primeiro produto normal - 1919 0 0 - com Intercept - processo venda 9860 (NFe)
export function prdSegPromoPrazoParcelaPrest (selector) {

    const primeiro_produto_normal = '1919'

    cy.intercept('GET', /\/consultaprodutos\/.*1919.*/).as('apiConsultaProdutos_SegPromoPrazoParcelaPrest')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_produto_normal)
        .wait(100)
        .should('have.value', primeiro_produto_normal)

    cy.wait('@apiConsultaProdutos_SegPromoPrazoParcelaPrest', { timeout: 40000 })
}

//---------------

//Escolher produto com promoção a prazo - 1920 0 0 - com Intercept - processo venda 9860 (NFe)
export function prdPromoPartidaPrest (selector) {

    const primeiro_produto_normal = '1920'

    cy.intercept('GET', /\/consultaprodutos\/.*1920.*/).as('apiConsultaProdutos_PromoPartidaPrest')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_produto_normal)
        .wait(100)
        .should('have.value', primeiro_produto_normal)

    cy.wait('@apiConsultaProdutos_PromoPartidaPrest', { timeout: 40000 })
}

//---------------

//selecionando forma de pagamento "3874 - T.A. A Receber Futuro - para Prestamista com juros" da promoção
export function escolherRecebPromoPrazoFuturoComJurosPrest (selector) {

    //botão voltar
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //título modal formas de pagamento
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('contain', 'Formas de pagamento')

    //botão X
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //forma de pagamento da promoção
    cy.get('button[aria-label="3874 - T.A. A Receber Futuro - para Prestamista   Futuro"]')
        .click()
}