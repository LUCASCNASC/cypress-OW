//Para escolher processo de venda 9860 NFe
export function processoVendaNFe (selector) {

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
//Para escolher processo de venda 9860 NFCe
export function processoVendaNFCe (selector) {

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

//Para escolher processo de venda entrega futura 9862 normal - NFe
export function processoEntregaFuturaNFe (selector) {

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
export function processoFinanceiroBaixaNFe (selector) {

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

//Para escolher processo de venda 9869 para exclusiva
export function processoVendaExclusiva (selector) {

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

//Para escolher processo de venda 9888 - serviços avulsos - quando já temos uma nota de venda de produto e quando vamos vender igual produto
export function processoVendaServicoAvulso (selector) {

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

//Para escolher processo de venda entrega futura 9891 normal - NFCe
export function processoEntregaFuturaNFCe (selector) {

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
export function processoFinanceiroBaixaNFCe (selector) {

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