export class processoVenda{

    constructor(page) {
        this.page = page
    }

    //------------------- PROCESSOS NFe ------

    //Para escolher processo de venda 9860 NFe
    async NFe (selector) {

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .should('be.visible')
            .scrollTo('center')

        //selecionar processo de venda "9860"
        cy.get('.md-text.ng-binding')
            .contains('9860 - T.A. Pedido Negociável - NFe')
            .click({force:true})

        //fechar modal de processos
        cy.get('.md-select-backdrop')
            .wait(200)
            .dblclick()
            .wait(200) 
    }

    //Para escolher processo de venda 9869 para exclusiva NFe
    async Exclusiva (selector) {

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .should('be.visible')
            .scrollTo('center')

        //selecionar processo de venda "9869"
        cy.get('.md-text.ng-binding')
            .contains('9869 - T.A. Pedido Negociável Exclusiva')
            .click({force:true})

        //fechar modal de processos
        cy.get('.md-select-backdrop')
            .wait(200)
            .dblclick()
            .wait(200)
    }

    //Para escolher processo de venda entrega futura 9862 normal - NFe
    async EntregaFutNFe (selector) {

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .should('be.visible')
            .and('not.be.disabled')
            .click()
    
        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .should('be.visible')
            .scrollTo('center')
    
        //selecionar processo de venda "9862"
        cy.get('.md-text.ng-binding')
            .contains('9862 - T.A. Pedido Entrega Futura NFe')
            .click({force:true})
    
        //fechar modal de processos
        cy.get('.md-select-backdrop')
            .wait(200)
            .dblclick()
            .wait(200)
    }

    //Para escolher processo de venda financeiro baixa 9863 normal - NFe
    async FinanBaixaNFe (selector) {

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .should('be.visible')
            .scrollTo('center')

        //selecionar processo de venda "9863"
        cy.get('.md-text.ng-binding')
            .contains('9863 - T.A.Pedido Financeiro Baixa NFe')
            .click({force:true})

        //fechar modal de processos
        cy.get('.md-select-backdrop')
            .wait(200)
            .dblclick()
            .wait(200)
    }

    //Para escolher processo de venda 9888 - serviços avulsos - quando já temos uma nota de venda de produto e quando vamos vender igual produto - NFe
    async VendaServicoAvulso (selector) {

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .should('be.visible')
            .scrollTo('bottom')
            .wait(200)

        //escolher processo 9888
        cy.get('.md-text.ng-binding')
            .contains('9888 - T.A. Venda de serviço avulso')
            .click({force:true})

        //fechar modal de processos
        cy.get('.md-select-backdrop')
            .wait(200)
            .dblclick()
            .wait(200)
    }

    //------------------- PROCESSOS NFCe ------

    //Para escolher processo de venda 9860 NFCe
    async NFCe (selector) {

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .should('be.visible')
            .scrollTo('bottom')

        //selecionar processo de venda "9860"
        cy.get('.md-text.ng-binding')
            .contains('9890 - T.A. Pedido Negociável - NFCe')
            .click({force:true})

        //fechar modal de processos
        cy.get('.md-select-backdrop')
            .wait(200)
            .dblclick()
            .wait(200) 
    }

    //Para escolher processo de venda entrega futura 9891 normal - NFCe
    async EntregaFutNFCe (selector) {

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .should('be.visible')
            .scrollTo('bottom')
            .wait(200)

        //escolher processo 9891
        cy.get('.md-text.ng-binding')
            .contains('9891 - T.A. Pedido Entrega Futura NFCe')
            .click({force:true})

        //fechar modal de processos
        cy.get('.md-select-backdrop')
            .wait(200)
            .dblclick()
            .wait(200)
    }

    //Para escolher processo de venda financeiro baixa 9892 normal - NFCe
    async FinanBaixaNFCe (selector) {

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .should('be.visible')
            .scrollTo('bottom')
            .wait(200)

        //escolher processo 9892
        cy.get('.md-text.ng-binding')
            .contains('9892 - T.A.Pedido Financeiro Baixa NFCe')
            .click({force:true})

        //fechar modal de processos
        cy.get('.md-select-backdrop')
            .wait(200)
            .dblclick()
            .wait(200)
    }
}

