//Escolher primeiro produto normal - 1860 0 0
export function produtoNormalPrimeiro (selector) {

    const primeiro_produto_normal = '1860'

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
}

//Escolher segundo produto normal - 1870 0 0
export function produtoNormalSegundo (selector) {

    const segundo_produto_normal = '1870'

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
}

//Escolher primeiro produto normal - 1862 0 0
export function produtoKitPrimeiro (selector) {

    const primeiro_kit_normal = '1862'

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
}

//Escolher primeiro produto normal - 1869 0 0
export function produtoSemSaldo (selector) {

    const produto_sem_saldo = '1869'

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
}

//Escolher primeiro produto normal - 1880 0 0
export function produtoCDPrimeiro (selector) {

    const primeiro_produto_CD = '1880'

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
}

//Escolher segundo produto normal - 1881 0 0
export function produtoCDSegundo (selector) {

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

//Escolher produto remoto com saldo em seu CD (filial 1)
export function produtoRemotoComCD (selector) {

    const remoto_saldo_CD = '1883'

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
}

//Escolher produto remoto com saldo em seu CD (filial 1)
export function produtoRemotoSemCD (selector) {

    const remoto__sem_saldo_CD = '1882'

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
}

//Escolher produto arredondar primeiro - 1908 0 0
export function produtoArredondarCimaBaixo (selector) {

    const produto_arredondar = '1908'

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
}

//Escolher produto com desconto R$ - 1912 0 0
export function produtoDescontoCifrao (selector) {

    const produto_desconto_cifrao = '1912'

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
}

//Escolher produto com desconto percentual - 1913 0 0
export function produtoDescontoPercentual (selector) {

    const produto_desconto_percentual = '1913'

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
}

//Escolher produto com desconto valor fixo - 1914 0 0
export function produtoDescontoValorFixo (selector) {

    const produto_desconto_valorfixo = '1914'

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
}

//Escolher Kit desconto - 1909 0 0
export function produtoKitDesconto (selector) {

    const primeiro_kit_desconto = '1909'

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
}

//Escolher produto kit remoto
export function produtoKitRemoto (selector) {

    const primeiro_kit_remoto = '1915'

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
}