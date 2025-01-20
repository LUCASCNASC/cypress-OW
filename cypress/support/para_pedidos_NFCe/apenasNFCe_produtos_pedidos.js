//Escolher primeiro produto normal - 1860 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoNormalPrimeiroNCFe (selector) {

    const primeiro_produto_normal = '1860'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1860*%20codigo:1860%20OR%20nome:*1860*%20OR%20codigo:*1860*%20OR%20nomeecommerce:*1860*%20OR%20marca_descricao:*1860*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher segundo produto normal - 1870 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoNormalSegundoNCFe (selector) {

    const segundo_produto_normal = '1870'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1870*%20codigo:1870%20OR%20nome:*1870*%20OR%20codigo:*1870*%20OR%20nomeecommerce:*1870*%20OR%20marca_descricao:*1870*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher primeiro produto normal - 1862 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoKitPrimeiroNCFe (selector) {

    const primeiro_kit_normal = '1862'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1862*%20codigo:1862%20OR%20nome:*1862*%20OR%20codigo:*1862*%20OR%20nomeecommerce:*1862*%20OR%20marca_descricao:*1862*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher primeiro produto normal - 1869 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoSemSaldoNCFe (selector) {

    const produto_sem_saldo = '1869'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1869*%20codigo:1869%20OR%20nome:*1869*%20OR%20codigo:*1869*%20OR%20nomeecommerce:*1869*%20OR%20marca_descricao:*1869*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher primeiro produto normal - 1880 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoCDPrimeiroNCFe (selector) {

    const primeiro_produto_CD = '1880'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1880*%20codigo:1880%20OR%20nome:*1880*%20OR%20codigo:*1880*%20OR%20nomeecommerce:*1880*%20OR%20marca_descricao:*1880*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher segundo produto normal - 1881 0 0
export function produtoCDSegundoNCFe (selector) {

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

//Escolher produto remoto com saldo em seu CD (filial 1) - 1883 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoRemotoComCDNCFe (selector) {

    const remoto_saldo_CD = '1883'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1883*%20codigo:1883%20OR%20nome:*1883*%20OR%20codigo:*1883*%20OR%20nomeecommerce:*1883*%20OR%20marca_descricao:*1883*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher produto remoto com saldo em seu CD (filial 1) - com Intercept - processo venda 9860 (NCFe)
export function produtoRemotoSemCDNCFe (selector) {

    const remoto__sem_saldo_CD = '1882'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1882*%20codigo:1882%20OR%20nome:*1882*%20OR%20codigo:*1882*%20OR%20nomeecommerce:*1882*%20OR%20marca_descricao:*1882*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher produto arredondar primeiro - 1908 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoArredondarCimaBaixoNCFe (selector) {

    const produto_arredondar = '1908'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1908*%20codigo:1908%20OR%20nome:*1908*%20OR%20codigo:*1908*%20OR%20nomeecommerce:*1908*%20OR%20marca_descricao:*1908*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher produto com desconto R$ - 1912 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoDescontoCifraoNCFe (selector) {

    const produto_desconto_cifrao = '1912'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1912*%20codigo:1912%20OR%20nome:*1912*%20OR%20codigo:*1912*%20OR%20nomeecommerce:*1912*%20OR%20marca_descricao:*1912*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher produto com desconto percentual - 1913 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoDescontoPercentualNCFe (selector) {

    const produto_desconto_percentual = '1913'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1913*%20codigo:1913%20OR%20nome:*1913*%20OR%20codigo:*1913*%20OR%20nomeecommerce:*1913*%20OR%20marca_descricao:*1913*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher produto com desconto valor fixo - 1914 0 0  - com Intercept - processo venda 9860 (NCFe)
export function produtoDescontoValorFixoNCFe (selector) {

    const produto_desconto_valorfixo = '1914'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1914*%20codigo:1914%20OR%20nome:*1914*%20OR%20codigo:*1914*%20OR%20nomeecommerce:*1914*%20OR%20marca_descricao:*1914*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher Kit desconto - 1909 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoKitDescontoNCFe (selector) {

    const primeiro_kit_desconto = '1909'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1909*%20codigo:1909%20OR%20nome:*1909*%20OR%20codigo:*1909*%20OR%20nomeecommerce:*1909*%20OR%20marca_descricao:*1909*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher produto kit remoto - 1915 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoKitRemotoNCFe (selector) {

    const primeiro_kit_remoto = '1915'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1915*%20codigo:1915%20OR%20nome:*1915*%20OR%20codigo:*1915*%20OR%20nomeecommerce:*1915*%20OR%20marca_descricao:*1915*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher primeiro produto com promoção partida - 1868 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoPromoPartidaNCFe (selector) {

    const produto_promocao_partida = '1868'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1868*%20codigo:1868%20OR%20nome:*1868*%20OR%20codigo:*1868*%20OR%20nomeecommerce:*1868*%20OR%20marca_descricao:*1868*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoPromoPrazoEntradaNCFe (selector) {

    const produto_promocao_prazo_entrada = '1866'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1866*%20codigo:1866%20OR%20nome:*1866*%20OR%20codigo:*1866*%20OR%20nomeecommerce:*1866*%20OR%20marca_descricao:*1866*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0 - com Intercept - processo venda 9860 (NCFe)
export function produtoPromoPrazoParceladoNCFe (selector) {

    const produto_promocao_prazo_parcelado = '1867'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1867*%20codigo:1867%20OR%20nome:*1867*%20OR%20codigo:*1867*%20OR%20nomeecommerce:*1867*%20OR%20marca_descricao:*1867*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros) - com Intercept - processo venda 9860 (NCFe)
export function prd1PrazoParcelaNCFe (selector) {

    const produto_codigo = '1891'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1891*%20codigo:1891%20OR%20nome:*1891*%20OR%20codigo:*1891*%20OR%20nomeecommerce:*1891*%20OR%20marca_descricao:*1891*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros) - com Intercept - processo venda 9860 (NCFe)
export function prd2PrazoParcelaNCFe (selector) {

    const produto_codigo = '1895'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1895*%20codigo:1895%20OR%20nome:*1895*%20OR%20codigo:*1895*%20OR%20nomeecommerce:*1895*%20OR%20marca_descricao:*1895*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Pedido com promoção a prazo/parcelas (promoção 160): produto 1893 0 0 com prestamista (isento de juros) - com Intercept - processo venda 9860 (NCFe)
export function prd3PrazoParcelaNCFe (selector) {

    const produto_codigo = '1893'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1893*%20codigo:1893%20OR%20nome:*1893*%20OR%20codigo:*1893*%20OR%20nomeecommerce:*1893*%20OR%20marca_descricao:*1893*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Pedido com promoção a prazo/parcelas (promoção 161): produto 1893 0 0 com garantia (isenta de juros) e prestamista (com juros) - com Intercept - processo venda 9860 (NCFe)
export function prd4PrazoParcelaNCFe (selector) {

    const produto_codigo = '1894'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9890*))%20AND%20(codigo:*1894*%20codigo:1894%20OR%20nome:*1894*%20OR%20codigo:*1894*%20OR%20nomeecommerce:*1894*%20OR%20marca_descricao:*1894*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}