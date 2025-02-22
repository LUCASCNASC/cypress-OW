export class Produto {

    constructor(page) {
        this.page = page
    }

    //Escolher primeiro produto normal - 1860 0 0 - com Intercept - processo venda 9860 (NFe)
    async primeiro (selector) {

        const primeiro_produto_normal = '1860'

        cy.intercept('GET', /\/consultaprodutos\/.*1860.*/).as('apiConsultaProdutos_primeiroNormal')

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

        cy.wait('@apiConsultaProdutos_primeiroNormal', { timeout: 40000 })
    }

    //Escolher segundo produto normal - 1870 0 0 - com Intercept - processo venda 9860 (NFe)
    async segundo (selector) {

        const segundo_produto_normal = '1870'

        cy.intercept('GET', /\/consultaprodutos\/.*1870.*/).as('apiConsultaProdutos_segundoNormal')

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

        cy.wait('@apiConsultaProdutos_segundoNormal', { timeout: 40000 })
    }

    //Escolher primeiro produto normal - 1862 0 0 - com Intercept - processo venda 9860 (NFe)
    async kitPrimeiro (selector) {

        const primeiro_kit_normal = '1862'

        cy.intercept('GET', /\/consultaprodutos\/.*1862.*/).as('apiConsultaProduto_primeiroKit')

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

        cy.wait('@apiConsultaProduto_primeiroKit', { timeout: 40000 })
    }

    //Escolher primeiro produto normal - 1869 0 0 - com Intercept - processo venda 9860 (NFe)
    async semSaldo (selector) {

        const produto_sem_saldo = '1869'

        cy.intercept('GET', /\/consultaprodutos\/.*1869.*/).as('apiConsultaProdutos_semSaldo')

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

        cy.wait('@apiConsultaProdutos_semSaldo', { timeout: 40000 })
    }

    //Escolher primeiro produto normal - 1880 0 0 - com Intercept - processo venda 9860 (NFe)
    async cdPrimeiro (selector) {

        const primeiro_produto_CD = '1880'

        cy.intercept('GET', /\/consultaprodutos\/.*1880.*/).as('apiConsultaProdutos_CDPrimeiro')

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

        cy.wait('@apiConsultaProdutos_CDPrimeiro', { timeout: 40000 })
    }

    //Escolher segundo produto normal - 1881 0 0
    async cdSegundo (selector) {

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

    //Escolher produto remoto com saldo em seu CD (filial 1) - 1883 0 0 - com Intercept - processo venda 9860 (NFe)
    async remotoComCD (selector) {

        const remoto_saldo_CD = '1883'

        cy.intercept('GET', /\/consultaprodutos\/.*1883.*/).as('apiConsultaProdutos_remotoComCD')

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

        cy.wait('@apiConsultaProdutos_remotoComCD', { timeout: 40000 })
    }

    //Escolher produto remoto com saldo em seu CD (filial 1) - com Intercept - processo venda 9860 (NFe)
    async remotoSemCD (selector) {

        const remoto__sem_saldo_CD = '1882'

        cy.intercept('GET', /\/consultaprodutos\/.*1882.*/).as('apiConsultaProdutos_remotoSemCD')

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

        cy.wait('@apiConsultaProdutos_remotoSemCD', { timeout: 40000 })
    }

    //Escolher produto arredondar primeiro - 1908 0 0 - com Intercept - processo venda 9860 (NFe)
    async arredondarCimaBaixo (selector) {

        const produto_arredondar = '1908'

        cy.intercept('GET', /\/consultaprodutos\/.*1908.*/).as('apiConsultaProdutos_arredondar')

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

        cy.wait('@apiConsultaProdutos_arredondar', { timeout: 40000 })
    }

    //Escolher produto com desconto R$ - 1912 0 0 - com Intercept - processo venda 9860 (NFe)
    async descontoCifrao (selector) {

        const produto_desconto_cifrao = '1912'

        cy.intercept('GET', /\/consultaprodutos\/.*1912.*/).as('apiConsultaProdutos_descontoCifrao')

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

        cy.wait('@apiConsultaProdutos_descontoCifrao', { timeout: 40000 })
    }

    //Escolher produto com desconto percentual - 1913 0 0 - com Intercept - processo venda 9860 (NFe)
    async descontoPercentual (selector) {

        const produto_desconto_percentual = '1913'

        cy.intercept('GET', /\/consultaprodutos\/.*1913.*/).as('apiConsultaProdutos_descontoPercentual')

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

        cy.wait('@apiConsultaProdutos_descontoPercentual', { timeout: 40000 })
    }

    //Escolher produto com desconto valor fixo - 1914 0 0  - com Intercept - processo venda 9860 (NFe)
    async descontoValorFixo (selector) {

        const produto_desconto_valorfixo = '1914'

        cy.intercept('GET', /\/consultaprodutos\/.*1914.*/).as('apiConsultaProdutos_descontoValorFixo')

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

        cy.wait('@apiConsultaProdutos_descontoValorFixo', { timeout: 40000 })
    }

    //Escolher Kit desconto - 1909 0 0 - com Intercept - processo venda 9860 (NFe)
    async kitDesconto (selector) {

        const primeiro_kit_desconto = '1909'

        cy.intercept('GET', /\/consultaprodutos\/.*1909.*/).as('apiConsultaProdutos_kitDesconto')

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

        cy.wait('@apiConsultaProdutos_kitDesconto', { timeout: 40000 })
    }

    //Escolher produto kit remoto - 1915 0 0 - com Intercept - processo venda 9860 (NFe)
    async kitRemoto (selector) {

        const primeiro_kit_remoto = '1915'

        cy.intercept('GET', /\/consultaprodutos\/.*1915.*/).as('apiConsultaProdutos_kitRemoto')

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

        cy.wait('@apiConsultaProdutos_kitRemoto', { timeout: 40000 })
    }

    //Escolher primeiro produto com promoção partida - 1868 0 0 - com Intercept - processo venda 9860 (NFe)
    async promoPartida (selector) {

        const produto_promocao_partida = '1868'

        cy.intercept('GET', /\/consultaprodutos\/.*1868.*/).as('apiConsultaProdutos_promoPartida')

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

        cy.wait('@apiConsultaProdutos_promoPartida', { timeout: 40000 })
    }

    //Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0 - com Intercept - processo venda 9860 (NFe)
    async promoPrazoEntrada (selector) {

        const produto_promocao_prazo_entrada = '1866'

        cy.intercept('GET', /\/consultaprodutos\/.*1866.*/).as('apiConsultaProdutos_PromoPrazoEntrada')

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

        cy.wait('@apiConsultaProdutos_PromoPrazoEntrada', { timeout: 40000 })
    }

    //Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0 - com Intercept - processo venda 9860 (NFe)
    async promoPrazoParcelado (selector) {

        const produto_promocao_prazo_parcelado = '1867'

        cy.intercept('GET', /\/consultaprodutos\/.*1867.*/).as('apiConsultaProdutos_PromoPrazoParcelado')

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

        cy.wait('@apiConsultaProdutos_PromoPrazoParcelado', { timeout: 40000 })
    }

    //Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)
    async primeiroPrazoParcela (selector) {

        const produto_codigo = '1891'

        cy.intercept('GET', /\/consultaprodutos\/.*1891.*/).as('apiConsultaProdutos_prd1PrazoParcela')

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

        cy.wait('@apiConsultaProdutos_prd1PrazoParcela', { timeout: 40000 })
    }

    //Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)
    async segundoPrazoParcela (selector) {

        const produto_codigo = '1895'

        cy.intercept('GET', /\/consultaprodutos\/.*1895.*/).as('apiConsultaProdutos_prd2PrazoParcela')

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

        cy.wait('@apiConsultaProdutos_prd2PrazoParcela', { timeout: 40000 })
    }

    //Pedido com promoção a prazo/parcelas (promoção 160): produto 1893 0 0 com prestamista (isento de juros)
    async terceiroPrazoParcela (selector) {

        const produto_codigo = '1893'

        cy.intercept('GET', /\/consultaprodutos\/.*1893.*/).as('apiConsultaProdutos_prd3PrazoParcela')

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

        cy.wait('@apiConsultaProdutos_prd3PrazoParcela', { timeout: 40000 })
    }

    //Pedido com promoção a prazo/parcelas (promoção 161): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)
    async quartoPrazoParcela (selector) {

        const produto_codigo = '1894'

        cy.intercept('GET', /\/consultaprodutos\/.*1894.*/).as('apiConsultaProdutos_prd4PrazoParcela')

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

        cy.wait('@apiConsultaProdutos_prd4PrazoParcela', { timeout: 40000 })
    }
}