export class ProdutoPromo {

    constructor(page) {
        this.page = page
    }

    //Escolher produto prestamista abatimento % - 1918 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
    async prazoParcelaPrest (selector) {

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
    async segPrazoParcelaPrest (selector) {

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
    async partPrest (selector) {

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
    async terPrazoParcelaPrest (selector) {

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
    async prazoPrestPrimAbatVF (selector) {

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
    async prazoPrestSegAbatVF (selector) {

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
    async prazoPrestTercAbatVF (selector) {

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
    async prazoPrestTercAbatVFOS (selector) {

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
}