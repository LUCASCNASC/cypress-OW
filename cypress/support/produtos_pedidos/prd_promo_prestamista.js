//Escolher produto prestamista abatimento % - 1918 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
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

//Escolher produto prestamista abatimento % - 1919 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
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

//Escolher prestamista abatimento % com promoção a prazo - 1920 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
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

//Escolher prestamista abatimento % normal - 1921 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
export function prdTerPromoPrazoParcelaPrest (selector) {

    const primeiro_produto_normal = '1921'

    cy.intercept('GET', /\/consultaprodutos\/.*1921.*/).as('apiConsultaProdutos_TerPromoPrazoParcelaPrest')

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

    cy.wait('@apiConsultaProdutos_TerPromoPrazoParcelaPrest', { timeout: 40000 })
}

//Escolher prestamista abatimento Valor Fixo - 1922 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento Valor Fixo
export function prdPromoPrazoPrestPrimAbatVF (selector) {

    const primeiro_produto_normal = '1922'

    cy.intercept('GET', /\/consultaprodutos\/.*1922.*/).as('apiConsultaProdutos_PromoPrazoPrestPrimeiroAbatVF')

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

    cy.wait('@apiConsultaProdutos_PromoPrazoPrestPrimeiroAbatVF', { timeout: 40000 })
}

//Escolher prestamista abatimento Valor Fixo - 1923 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento Valor Fixo
export function prdPromoPrazoPrestSegAbatVF (selector) {

    const primeiro_produto_normal = '1923'

    cy.intercept('GET', /\/consultaprodutos\/.*1923.*/).as('apiConsultaProdutos_PromoPrazoPrestSegAbatVF')

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

    cy.wait('@apiConsultaProdutos_PromoPrazoPrestSegAbatVF', { timeout: 40000 })
}

//Escolher prestamista abatimento Valor Fixo - 1924 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento Valor Fixo
export function prdPromoPrazoPrestTercAbatVF (selector) {

    const primeiro_produto_normal = '1924'

    cy.intercept('GET', /\/consultaprodutos\/.*1924.*/).as('apiConsultaProdutos_PromoPrazoPrestTercAbatVF')

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

    cy.wait('@apiConsultaProdutos_PromoPrazoPrestTercAbatVF', { timeout: 40000 })
}

//Escolher prestamista abatimento Valor Fixo - 1925 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento Valor Fixo - Origem produto
export function prdPromoPrazoPrestTercAbatVFOP (selector) {

    const primeiro_produto_normal = '1925'

    cy.intercept('GET', /\/consultaprodutos\/.*1925.*/).as('apiConsultaProdutos_PromoPrazoPrestTercAbatVFOP')

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

    cy.wait('@apiConsultaProdutos_PromoPrazoPrestTercAbatVFOP', { timeout: 40000 })
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