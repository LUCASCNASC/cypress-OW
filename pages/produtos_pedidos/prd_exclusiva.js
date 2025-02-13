export class produtoExclusiva {

    constructor(page) {
        this.page = page
    }

    //produto normal com saldo, para exclusiva - 1896 0 0 - com intercept
    async PrimeiroNormal (selector) {

        const produto_exclusiva = '1896'

        cy.intercept('GET', /\/consultaprodutos\/.*1896.*/).as('apiConsultaProdutos_primeiroPrdNormalExclusiva')

        //Validando campo Buscar produto
        cy.get('#searchText')
            .should('be.visible')
            .and('not.be.disabled')

        //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="searchText"]')
            .should('have.text', 'Buscar produtos')

        //Prenchendo campo Buscar produto
        cy.get('#searchText')
            .type(produto_exclusiva)
            .wait(100)
            .should('have.value', produto_exclusiva)

        cy.wait('@apiConsultaProdutos_primeiroPrdNormalExclusiva', { timeout: 40000 })
    }

    //produto kit normal sem saldo, para exclusiva e sem saldo a receber - 1900 0 0 - com intercept
    async kitSemSaldoAgendamento (selector) {

        const kit_semsaldo = '1900'

        cy.intercept('GET', /\/consultaprodutos\/.*1900.*/).as('apiConsultaProdutos_kitSemSaldoAgendamento')

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
            .type(kit_semsaldo)
            .wait(100)
            .should('have.value', kit_semsaldo)

        cy.wait('@apiConsultaProdutos_kitSemSaldoAgendamento', { timeout: 40000 })
    }

    //produto kit com 6 volumes e com saldo, para exclusiva e sem saldo a receber - 1903 0 0 - com intercept
    async kitVolumes (selector) {

        const kit_volumes = '1903'

        cy.intercept('GET', /\/consultaprodutos\/.*1903.*/).as('apiConsultaProdutos_kitVolumes')

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
            .type(kit_volumes)
            .wait(100)
            .should('have.value', kit_volumes)

        cy.wait('@apiConsultaProdutos_kitVolumes', { timeout: 40000 })
    }

    //produto normal com saldo a receber, para exclusiva - 1905 0 0 - com intercept
    async SaldoReceber (selector) {

        const produto_saldoreceber = '1905'

        cy.intercept('GET', /\/consultaprodutos\/.*1905.*/).as('apiConsultaProdutos_produtoSaldoReceber')

        //Validando campo Buscar produto
        cy.get('#searchText')
            .should('be.visible')
            .and('not.be.disabled')

        //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="searchText"]')
            .should('have.text', 'Buscar produtos')

        //Prenchendo campo Buscar produto
        cy.get('#searchText')
            .type(produto_saldoreceber)
            .wait(100)
            .should('have.value', produto_saldoreceber)

        cy.wait('@apiConsultaProdutos_produtoSaldoReceber', { timeout: 40000 })
    }

    //produto normal com saldo a receber e outra parte solicitar compra, para exclusiva
    async SaldoRecebDuasLinhas (selector) {

        const produto_saldoreceber_duaslinhas = '1906'

        cy.intercept('GET', /\/consultaprodutos\/.*1906.*/).as('apiConsultaProdutos_prdSaldoReceberDuasLinhas')

        //Validando campo Buscar produto
        cy.get('#searchText')
            .should('be.visible')
            .and('not.be.disabled')

        //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="searchText"]')
            .should('have.text', 'Buscar produtos')

        //Prenchendo campo Buscar produto
        cy.get('#searchText')
            .type(produto_saldoreceber_duaslinhas)
            .wait(100)
            .should('have.value', produto_saldoreceber_duaslinhas)

        cy.wait('@apiConsultaProdutos_prdSaldoReceberDuasLinhas', { timeout: 40000 })
    }
}