export class ProcessoRecebPrest {

    constructor(page) {
        this.page = page
    }

    //---------- Prestamista Abatimento %

    //escolhendo forma de pagamento 3874 (3874 - T.A. A Receber Futuro - para Prestamista) para aparecer seguro prestamista
    async futuroComJurosAbatPercentual (selector) {

        //validando título Forma de pagamento
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text','Forma de pagamento')

        //validando botão X
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
            .should('be.visible')
            .and('not.be.disabled')

        cy.contains('3874 - T.A. A Receber Futuro - para Prestamista')
            .scrollIntoView()

        //escolhendo forma de pagamento - 3874
        cy.contains('3874 - T.A. A Receber Futuro - para Prestamista')
            .should('be.visible')
            .and('not.be.disabled')

        //escolhendo forma de pagamento - 3874
        cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaComJuros')
        cy.contains('3874 - T.A. A Receber Futuro - para Prestamista')
            .click({force:true})
        cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaComJuros', { timeout: 40000 })
    }

    //escolhendo forma de pagamento 3875 (3875 - T.A.A Receber Presente CDCI - para Prestamista) para aparecer seguro prestamista
    async presenteAbatPercentual (selector) {

        //validando título Forma de pagamento
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text','Forma de pagamento')

        //validando botão X
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
            .should('be.visible')
            .and('not.be.disabled')

        cy.contains('3875 - T.A.A Receber Presente CDCI - para Prestamista')
            .scrollIntoView()

        //escolhendo forma de pagamento - 3875
        cy.contains('3875 - T.A.A Receber Presente CDCI - para Prestamista')
            .should('be.visible')
            .and('not.be.disabled')

        //escolhendo forma de pagamento - 3875
        cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebPresentePrestamista')
        cy.contains('3875 - T.A.A Receber Presente CDCI - para Prestamista')
            .click({force:true})
        cy.wait('@api_pedido_forma_pagamento_escolherRecebPresentePrestamista', { timeout: 40000 })
    }

    //escolhendo forma de pagamento 3876 (3876 - T.A. A Receber Futuro - para Prestamista sem juros) para aparecer seguro prestamista
    async futuroSemJurosAbatPercentual (selector) {

        //validando título Forma de pagamento
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text','Forma de pagamento')

        //validando botão X
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
            .should('be.visible')
            .and('not.be.disabled')

        cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros')
            .scrollIntoView()

        //escolhendo forma de pagamento - 3876
        cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros')
            .should('be.visible')
            .and('not.be.disabled')

        //escolhendo forma de pagamento - 3876
        cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros')
        cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros')
            .click({force:true})
        cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 })
    }


    //---------- Prestamista Abatimento Valor Fixo

    //escolhendo forma de pagamento 3880 (3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo) para aparecer seguro prestamista
    async futuroComJurosAbatValorFixo (selector) {

        //validando título Forma de pagamento
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text','Forma de pagamento')

        //validando botão X
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
            .should('be.visible')
            .and('not.be.disabled')

        cy.contains('3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo')
            .scrollIntoView()

        //escolhendo forma de pagamento - 3880
        cy.contains('3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo')
            .should('be.visible')
            .and('not.be.disabled')

        //escolhendo forma de pagamento - 3880
        cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros')
        cy.contains('3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo')
            .click({force:true})
        cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 })
    }

    //escolhendo forma de pagamento 3878 (3878 - T.A.A Receb Presente CDCI - Prest. Valor Fixo) para aparecer seguro prestamista
    async presenteAbatValorFixo (selector) {

        //validando título Forma de pagamento
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text','Forma de pagamento')

        //validando botão X
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
            .should('be.visible')
            .and('not.be.disabled')

        cy.contains('3878 - T.A.A Receb Presente CDCI - Prest. Valor Fixo')
            .scrollIntoView()

        //escolhendo forma de pagamento - 3878
        cy.contains('3878 - T.A.A Receb Presente CDCI - Prest. Valor Fixo')
            .should('be.visible')
            .and('not.be.disabled')

        //escolhendo forma de pagamento - 3878
        cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros')
        cy.contains('3878 - T.A.A Receb Presente CDCI - Prest. Valor Fixo')
            .click({force:true})
        cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 })
    }

    //escolhendo forma de pagamento 3879 (3879 - T.A. A Receb Fut sem juros - Prest. Valor Fixo) para aparecer seguro prestamista
    async futuroSemJurosAbatValorFixo (selector) {

        //validando título Forma de pagamento
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text','Forma de pagamento')

        //validando botão X
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
            .should('be.visible')
            .and('not.be.disabled')

        cy.contains('3879 - T.A. A Receb Fut sem juros - Prest. Valor Fixo')
            .scrollIntoView()

        //escolhendo forma de pagamento - 3879
        cy.contains('3879 - T.A. A Receb Fut sem juros - Prest. Valor Fixo')
            .should('be.visible')
            .and('not.be.disabled')

        //escolhendo forma de pagamento - 3879
        cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros')
        cy.contains('3879 - T.A. A Receb Fut sem juros - Prest. Valor Fixo')
            .click({force:true})
        cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 })
    }


    //---------- Prestamista Abatimento Valor Fixo

    //escolhendo forma de pagamento 3881 (3881 - T.A. A Receb Fut com juros - Prest. Origem Serviço) para aparecer seguro prestamista
    async futuroComJurosAbatOrigemServico (selector) {

        //validando título Forma de pagamento
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text','Forma de pagamento')

        //validando botão X
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
            .should('be.visible')
            .and('not.be.disabled')

        cy.contains('3881 - T.A. A Receb Fut com juros - Prest. Origem Produto')
            .scrollIntoView()

        //escolhendo forma de pagamento - 3881
        cy.contains('3881 - T.A. A Receb Fut com juros - Prest. Origem Produto')
            .should('be.visible')
            .and('not.be.disabled')

        //escolhendo forma de pagamento - 3881
        cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros')
        cy.contains('3881 - T.A. A Receb Fut com juros - Prest. Origem Produto')
            .click({force:true})
        cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 })
    }
}