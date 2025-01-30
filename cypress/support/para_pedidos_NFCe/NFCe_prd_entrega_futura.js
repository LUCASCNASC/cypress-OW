//Escolher primeiro produto normal - 1860 0 0 - com Intercept - processo venda 9891 (NFCe Entrega futura)
export function prdPrimeiroEntregaFutNFCe (selector) {

    const primeiro_produto_normal = '1860'

    cy.intercept('GET', /\/consultaprodutos\/.*1860.*/).as('apiConsultaProdutos_prdPrimeiroEntregaFutNFCe')

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

    cy.wait('@apiConsultaProdutos_prdPrimeiroEntregaFutNFCe', { timeout: 40000 })
}

//-----

//Escolher segundo produto normal - 1870 0 0 - com Intercept - processo venda 9891 (NFCe Entrega futura)
export function prdSegundoEntregaFutNFCe (selector) {

    const segundo_produto_normal = '1870'

    cy.intercept('GET', /\/consultaprodutos\/.*1870.*/).as('apiConsultaProdutos_prdSegundoEntregaFutNFCe')

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

    cy.wait('@apiConsultaProdutos_prdSegundoEntregaFutNFCe', { timeout: 40000 })
}