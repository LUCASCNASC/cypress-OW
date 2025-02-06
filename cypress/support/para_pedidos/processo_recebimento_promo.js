//--------------- Promoções para arquivos apenas de promoção e promoção serviço -----------

//selecionando forma de pagamento "3860 - T.A. A Receber Futuro" da promoção
export function escolherRecebPromoPagPrincipal (selector) {

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
    cy.get('button[aria-label="3860 - T.A. A Receber Futuro   Futuro"]')
        .click()
}

//selecionando forma de pagamento "3866 - T.A. A Receber Prestamista" da promoção
export function escolherRecebReceberPrestamista (selector) {

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
    cy.get('button[aria-label="3866 - T.A. A Receber Prestamista   Futuro"]')
        .click()
}


//--------------- Promoções para arquivos apenas de promoção com prestamista-----------



//--------------- Abatimento Valor Fixo 55,90 - processo de inclusão PROMOÇÃO

//selecionando forma de pagamento "3880 - T.A. T.A. A Receb Fut com juros - Prest. Valor Fixo" da promoção
export function escolherRecebPromoPrazoFutComJurosPrestAbatVF (selector) {

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
    cy.get('button[aria-label="3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo   Futuro"]')
        .click()
}

//--------------- Abatimento % - processo de inclusão PROMOÇÃO

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

//selecionando forma de pagamento "3876 - T.A. A Receber Futuro - para Prestamista sem juros" da promoção
export function escolherRecebPromoPrazoFuturoSemJurosPrest (selector) {

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
    cy.get('button[aria-label="3876 - T.A. A Receber Futuro - para Prestamista sem juros   Futuro"]')
        .click()
}

//selecionando forma de pagamento "3875 - T.A.A Receber Presente CDCI - para Prestamista" da promoção
export function escolherRecebPromoPartidaPresentePrest (selector) {

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
    cy.get('button[aria-label="3875 - T.A.A Receber Presente CDCI - para Prestamista   Presente"]')
        .click()
}

//--------------- Abatimento Valor Fixo 99,30 - Origem Produto - processo de inclusão PROMOÇÃO

//selecionando forma de pagamento "3881 - T.A. A Receb Fut com juros - Prest. Origem Produto" da promoção
export function escolherRecebPromoPrazoFutComJurosPrestAbatVFOP (selector) {

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
    cy.get('button[aria-label="3881 - T.A. A Receb Fut com juros - Prest. Origem Produto   Futuro"]')
        .click()
}

//selecionando forma de pagamento "3882 - T.A. A Receb Presen com juros - Prest. Origem Prd" da promoção
export function escolherRecebPromoPartidaPresenComJurosPrestAbatVFOP (selector) {

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
    cy.get('button[aria-label="3882 - T.A. A Receb Presen com juros - Prest. Origem Prd   Presente"]')
        .click()
}