//Escolher primeiro produto normal - 1860 0 0 - com Intercept - processo venda 9862 (NFe Entrega futura)
export function prdPrimeiroEntregaFut (selector) {

    const primeiro_produto_normal = '1860'

    cy.intercept('GET', /\/consultaprodutos\/.*1860.*/).as('apiConsultaProdutos_prdPrimeiroEntregaFutNFe')

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

    cy.wait('@apiConsultaProdutos_prdPrimeiroEntregaFutNFe', { timeout: 40000 })
}

//Escolher segundo produto normal - 1870 0 0 - com Intercept - processo venda 9862 (NFe Entrega futura)
export function prdSegundoEntregaFut (selector) {

    const segundo_produto_normal = '1870'

    cy.intercept('GET', /\/consultaprodutos\/.*1870.*/).as('apiConsultaProdutos_prdSegundoEntregaFutNFe')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(segundo_produto_normal)
        .wait(100)
        .should('have.value', segundo_produto_normal)

    cy.wait('@apiConsultaProdutos_prdSegundoEntregaFutNFe', { timeout: 40000 })
}