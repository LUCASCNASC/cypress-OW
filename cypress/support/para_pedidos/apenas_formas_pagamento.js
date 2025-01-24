//escolhendo forma de pagamento 3860 (3860 - T.A. A Receber Futuro) do pedido de venda
export function escolherFormaPagamentoPrincipal (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('exist')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3860
    cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3862 (3862 - T.A.A Receber CDCI) do pedido de venda
export function escolherSegundaFormaPagamento (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('exist')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3862
    cy.get(':nth-child(3) > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3861 (3861 - T.A. A Receber A Vista ) do pedido de venda
export function escolherRecebAVista (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('exist')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3861
    cy.contains('3861 - T.A. A Receber A Vista')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3865 (3865 - T.A. A Receber Futuro - Proposta) com proposta de crédito
export function escolherFormaPagaPropCredito (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3865
    cy.contains('3865 - T.A. A Receber Futuro - Proposta')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3866 (3866 - T.A. A Receber Prestamista) com proposta de crédito
export function escolherRecebComPrestamista (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3866
    cy.contains('3866 - T.A. A Receber Prestamista')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3867 (3867 - T.A. A Receber Contrato Financeira) com proposta de crédito
export function escolherRecebContratoFinanceira (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3867
    cy.contains('3867 - T.A. A Receber Contrato Financeira')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3868 (3868 - T.A. A Receber PIX TEF) com proposta de crédito
export function escolherRecebPixTEF (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3868
    cy.contains('3868 - T.A. A Receber PIX TEF')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3870 (3870 - T.A. A Receber Crédito TEF) com proposta de crédito
export function escolherRecebCreditoTEF (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3870
    cy.contains('3870 - T.A. A Receber Crédito TEF')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3871 (3871 - T.A. A Receber Débito POS) com proposta de crédito
export function escolherRecebDebitoPOS (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3871
    cy.contains('3871 - T.A. A Receber Débito POS')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3872 (3872 - T.A. A Receber Crédito POS) com proposta de crédito
export function escolherRecebCreditoPOS (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3872
    cy.contains('3872 - T.A. A Receber Crédito POS')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3873 (3873 - T.A. A Receber Cheque) com proposta de crédito
export function escolherRecebCheque (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3873
    cy.contains('3873 - T.A. A Receber Cheque')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3874 (3874 - T.A. A Receber Futuro - para Prestamista com juros) para aparecer seguro prestamista
export function escolherRecebFuturoPrestamistaComJuros (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    cy.contains('3874 - T.A. A Receber Futuro - para Prestamista com juros')
        .scrollIntoView()

    //escolhendo forma de pagamento - 3874
    cy.contains('3874 - T.A. A Receber Futuro - para Prestamista com juros')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo forma de pagamento 3875 (3875 - T.A.A Receber Presente CDCI - para Prestamista) para aparecer seguro prestamista
export function escolherRecebPresentePrestamista (selector) {

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
        .click({force:true})
}

//escolhendo forma de pagamento 3876 (3876 - T.A. A Receber Futuro - para Prestamista sem juros) para aparecer seguro prestamista
export function escolherRecebFuturoPrestamistaSemJuros (selector) {

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
        .click({force:true})
}

//-------------------

//escolhendo parcelas da forma de pagamento escolhida - 2X
export function escolherDuasParcelaPagamento (selector) {

    //selecionando parcelas - 2X
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(2) > div.ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo parcelas da forma de pagamento escolhida - 1X
export function escolherUmaParcelaPagamento (selector) {

    //selecionando parcelas - 1X
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo parcelas da forma de pagamento escolhida - 4X
export function escolherQuatroParcelaPagamento (selector) {

    cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding') 
        .scrollIntoView()
        .wait(200)

    //selecionando parcelas - 4X
    cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Carregamento de forma de pagamento, quando clicamos no botão Gerar parcelas
export function carregandoFormaPagamento (selector) {

    //Modal Forma de pagamento - título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Forma de pagamento')

    //botão x do modal Serviços Vinculados
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
}

//Botão "GERAR PARCELAS"
export function botaoGerarParcelas (selector) {

    cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
    cy.intercept('GET', '/views/carrinho/modalFormasPgto.html').as('api_modal_forma_pagamento')

    //Botão "GERAR PARCELAS" - validações
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('have.text', 'Gerar parcelas')

    //Botão "GERAR PARCELAS" - clicar
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .click({force:true})
        
    cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
    cy.wait('@api_modal_forma_pagamento', { timeout: 40000 })
}

//preencher pagamento entrada
export function escolherEntradaFormaPagamento (selector) {

    //texto "Valor máximo da entrada"
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
        .should('exist')
        .and('be.visible')

    //R$ do Valor máximo da entrada
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'R$')

    //Valor do Valor máximo da entrada
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding')
        .should('exist')
        .and('be.visible')

    //botão $
    cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X
    cy.get(':nth-child(3) > .md-fab')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Campo máximo da parcela
    cy.get('input.campoMoeda_totalEntrada')
        .should('exist')
        .and('be.visible')
        .type('30000')

    //clicando em "Formas de pagamento na Entrada" para abrir forma de pagamento de entrada
    cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
        .click({force:true})

    //clicando para abrir formas de pagamento disponíveis
    cy.get('div.md-text.ng-binding')
        .contains('3861 - T.A. A Receber A Vista')
        .click({force:true})
}

//validando e clicando no botão GERAR PAGAMENTO
export function clicarGerarPagamento (selector) {

    //botão
    cy.get('.white > .layout-align-center-center > .md-primary')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Gerar pagamento')
        .click({force:true})
}