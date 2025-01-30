//Escolher primeiro produto normal - 1860 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoNormalPrimeiroNFCe (selector) {

    const primeiro_produto_normal = '1860'

    cy.intercept('GET', /\/consultaprodutos\/.*1860.*/).as('apiConsultaProdutos_produtoNormalPrimeiroNFCe')

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

    cy.wait('@apiConsultaProdutos_produtoNormalPrimeiroNFCe', { timeout: 40000 })
}

//-----

//Escolher segundo produto normal - 1870 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoNormalSegundoNFCe (selector) {

    const segundo_produto_normal = '1870'

    cy.intercept('GET', /\/consultaprodutos\/.*1870.*/).as('apiConsultaProdutos_produtoNormalSegundoNFCe')

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

    cy.wait('@apiConsultaProdutos_produtoNormalSegundoNFCe', { timeout: 40000 })
}

//-----

//Escolher primeiro produto normal - 1862 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitPrimeiroNFCe (selector) {

    const primeiro_kit_normal = '1862'

    cy.intercept('GET', /\/consultaprodutos\/.*1862.*/).as('apiConsultaProdutos_produtoKitPrimeiroNFCe')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .clear()
        .should('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_kit_normal)
        .wait(100)
        .should('have.value', primeiro_kit_normal)

    cy.wait('@apiConsultaProdutos_produtoKitPrimeiroNFCe', { timeout: 40000 })
}

//-----

//Escolher primeiro produto normal - 1869 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoSemSaldoNFCe (selector) {

    const produto_sem_saldo = '1869'

    cy.intercept('GET', /\/consultaprodutos\/.*1869.*/).as('apiConsultaProdutos_produtoSemSaldoNFCe')

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
        .type(produto_sem_saldo)
        .wait(100)
        .should('have.value', produto_sem_saldo)

    cy.wait('@apiConsultaProdutos_produtoSemSaldoNFCe', { timeout: 40000 })
}

//-----

//Escolher primeiro produto normal - 1880 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoCDPrimeiroNFCe (selector) {

    const primeiro_produto_CD = '1880'

    cy.intercept('GET', /\/consultaprodutos\/.*1880.*/).as('apiConsultaProdutos_produtoCDPrimeiroNFCe')

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
        .type(primeiro_produto_CD)
        .wait(100)
        .should('have.value', primeiro_produto_CD)

    cy.wait('@apiConsultaProdutos_produtoCDPrimeiroNFCe', { timeout: 40000 })
}

//-----

//Escolher segundo produto normal - 1881 0 0
export function produtoCDSegundoNFCe (selector) {

    const segundo_produto_CD = '1881'

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
        .type(segundo_produto_CD)
        .wait(100)
        .should('have.value', segundo_produto_CD)
}

//----

//Escolher produto remoto com saldo em seu CD (filial 1) - 1883 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoRemotoComCDNFCe (selector) {

    const remoto_saldo_CD = '1883'

    cy.intercept('GET', /\/consultaprodutos\/.*1883.*/).as('apiConsultaProdutos_produtoRemotoComCDNFCe')

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
        .type(remoto_saldo_CD)
        .wait(100)
        .should('have.value', remoto_saldo_CD)

    cy.wait('@apiConsultaProdutos_produtoRemotoComCDNFCe', { timeout: 40000 })
}

//-----

//Escolher produto remoto com saldo em seu CD (filial 1) - com Intercept - processo venda 9860 (NFe)
export function produtoRemotoSemCDNFCe (selector) {

    const remoto__sem_saldo_CD = '1882'

    cy.intercept('GET', /\/consultaprodutos\/.*1882.*/).as('apiConsultaProdutos_produtoRemotoSemCDNFCe')

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
        .type(remoto__sem_saldo_CD)
        .wait(100)
        .should('have.value', remoto__sem_saldo_CD)

    cy.wait('@apiConsultaProdutos_produtoRemotoSemCDNFCe', { timeout: 40000 })
}

//-----

//Escolher produto arredondar primeiro - 1908 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoArredondarCimaBaixoNFCe (selector) {

    const produto_arredondar = '1908'

    cy.intercept('GET', /\/consultaprodutos\/.*1908.*/).as('apiConsultaProdutos_produtoArredondarCimaBaixoNFCe')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_arredondar)
        .wait(100)
        .should('have.value', produto_arredondar)

    cy.wait('@apiConsultaProdutos_produtoArredondarCimaBaixoNFCe', { timeout: 40000 })
}

//-----

//Escolher produto com desconto R$ - 1912 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoCifraoNFCe (selector) {

    const produto_desconto_cifrao = '1912'

    cy.intercept('GET', /\/consultaprodutos\/.*1912.*/).as('apiConsultaProdutos_produtoDescontoCifraoNFCe')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_desconto_cifrao)
        .wait(100)
        .should('have.value', produto_desconto_cifrao)

    cy.wait('@apiConsultaProdutos_produtoDescontoCifraoNFCe', { timeout: 40000 })
}

//-----

//Escolher produto com desconto percentual - 1913 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoPercentualNFCe (selector) {

    const produto_desconto_percentual = '1913'

    cy.intercept('GET', /\/consultaprodutos\/.*1913.*/).as('apiConsultaProdutos_produtoDescontoPercentualNFCe')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_desconto_percentual)
        .wait(100)
        .should('have.value', produto_desconto_percentual)

    cy.wait('@apiConsultaProdutos_produtoDescontoPercentualNFCe', { timeout: 40000 })
}

//-----

//Escolher produto com desconto valor fixo - 1914 0 0  - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoValorFixoNFCe (selector) {

    const produto_desconto_valorfixo = '1914'

    cy.intercept('GET', /\/consultaprodutos\/.*1914.*/).as('apiConsultaProdutos_produtoDescontoValorFixoNFCe')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_desconto_valorfixo)
        .wait(100)
        .should('have.value', produto_desconto_valorfixo)

    cy.wait('@apiConsultaProdutos_produtoDescontoValorFixoNFCe', { timeout: 40000 })
}

//-----

//Escolher Kit desconto - 1909 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitDescontoNFCe (selector) {

    const primeiro_kit_desconto = '1909'

    cy.intercept('GET', /\/consultaprodutos\/.*1909.*/).as('apiConsultaProdutos_produtoKitDescontoNFCe')

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
        .type(primeiro_kit_desconto)
        .wait(100)
        .should('have.value', primeiro_kit_desconto)

    cy.wait('@apiConsultaProdutos_produtoKitDescontoNFCe', { timeout: 40000 })
}

//-----

//Escolher produto kit remoto - 1915 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitRemotoNFCe (selector) {

    const primeiro_kit_remoto = '1915'

    cy.intercept('GET', /\/consultaprodutos\/.*1915.*/).as('apiConsultaProdutos_produtoKitRemotoNFCe')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .and('be.visible')
        .should('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_kit_remoto)
        .wait(100)
        .should('have.value', primeiro_kit_remoto)

    cy.wait('@apiConsultaProdutos_produtoKitRemotoNFCe', { timeout: 40000 })
}

//-----

//Escolher primeiro produto com promoção partida - 1868 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPartidaNFCe (selector) {

    const produto_promocao_partida = '1868'

    cy.intercept('GET', /\/consultaprodutos\/.*1968.*/).as('apiConsultaProdutos_produtoPromoPartidaNFCe')

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
        .type(produto_promocao_partida)
        .wait(100)
        .should('have.value', produto_promocao_partida)

    cy.wait('@apiConsultaProdutos_produtoPromoPartidaNFCe', { timeout: 40000 })
}

//-----

//Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPrazoEntradaNFCe (selector) {

    const produto_promocao_prazo_entrada = '1866'

    cy.intercept('GET', /\/consultaprodutos\/.*1866.*/).as('apiConsultaProdutos_produtoPromoPrazoEntradaNFCe')

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
        .type(produto_promocao_prazo_entrada)
        .wait(100)
        .should('have.value', produto_promocao_prazo_entrada)

    cy.wait('@apiConsultaProdutos_produtoPromoPrazoEntradaNFCe', { timeout: 40000 })
}

//-----

//Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPrazoParceladoNFCe (selector) {

    const produto_promocao_prazo_parcelado = '1867'

    cy.intercept('GET', /\/consultaprodutos\/.*1867.*/).as('apiConsultaProdutos_produtoPromoPrazoParceladoNFCe')

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
        .type(produto_promocao_prazo_parcelado)
        .wait(100)
        .should('have.value', produto_promocao_prazo_parcelado)

    cy.wait('@apiConsultaProdutos_produtoPromoPrazoParceladoNFCe', { timeout: 40000 })
}

//-----

//Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)
export function prd1PrazoParcelaNFCe (selector) {

    const produto_codigo = '1891'

    cy.intercept('GET', /\/consultaprodutos\/.*1891.*/).as('apiConsultaProdutos_prd1PrazoParcelaNFCe')

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
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)

    cy.wait('@apiConsultaProdutos_prd1PrazoParcelaNFCe', { timeout: 40000 })
}

//-----


//Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)
export function prd2PrazoParcelaNFCe (selector) {

    const produto_codigo = '1895'

    cy.intercept('GET', /\/consultaprodutos\/.*1895.*/).as('apiConsultaProdutos_prd2PrazoParcelaNFCe')

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
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)

    cy.wait('@apiConsultaProdutos_prd2PrazoParcelaNFCe', { timeout: 40000 })
}

//-----


//Pedido com promoção a prazo/parcelas (promoção 160): produto 1893 0 0 com prestamista (isento de juros)
export function prd3PrazoParcelaNFCe (selector) {

    const produto_codigo = '1893'

    cy.intercept('GET', /\/consultaprodutos\/.*1893.*/).as('apiConsultaProdutos_prd3PrazoParcelaNFCe')

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
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)

    cy.wait('@apiConsultaProdutos_prd3PrazoParcelaNFCe', { timeout: 40000 })
}

//-----

//Pedido com promoção a prazo/parcelas (promoção 161): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)
export function prd4PrazoParcelaNFCe (selector) {

    const produto_codigo = '1894'

    cy.intercept('GET', /\/consultaprodutos\/.*1894.*/).as('apiConsultaProdutos_prd4PrazoParcelaNFCe')

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
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)

    cy.wait('@apiConsultaProdutos_prd4PrazoParcelaNFCe', { timeout: 40000 })
}

//-----