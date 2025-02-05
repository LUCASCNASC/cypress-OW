import { umDiaAposHoje, trintaUmDiasAposHoje } from '../gerarDados'

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

    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherFormaPagamentoPrincipal')
    //escolhendo forma de pagamento - 3860
    cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherFormaPagamentoPrincipal', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3862
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherSegundaFormaPagamento')
    cy.contains('3862 - T.A.A Receber CDCI')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherSegundaFormaPagamento', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3861
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebAVista')
    cy.contains('3861 - T.A. A Receber A Vista')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebAVista', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3865
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherFormaPagaPropCredito')
    cy.contains('3865 - T.A. A Receber Futuro - Proposta')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherFormaPagaPropCredito', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3866
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebComPrestamista')
    cy.contains('3866 - T.A. A Receber Prestamista')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebComPrestamista', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3867
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebContratoFinanceira')
    cy.contains('3867 - T.A. A Receber Contrato Financeira')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebContratoFinanceira', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3868
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebPixTEF')
    cy.contains('3868 - T.A. A Receber PIX TEF')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebPixTEF', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3870
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebCreditoTEF')
    cy.contains('3870 - T.A. A Receber Crédito TEF')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebCreditoTEF', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3871
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebDebitoPOS')
    cy.contains('3871 - T.A. A Receber Débito POS')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebDebitoPOS', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3872
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebCreditoPOS')
    cy.contains('3872 - T.A. A Receber Crédito POS')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebCreditoPOS', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3873
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebCheque')
    cy.contains('3873 - T.A. A Receber Cheque')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebCheque', { timeout: 40000 })
}


//---------- Prestamista Abatimento %

//escolhendo forma de pagamento 3874 (3874 - T.A. A Receber Futuro - para Prestamista) para aparecer seguro prestamista
export function escolherRecebFuturoPrestamistaComJuros (selector) {

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

    //escolhendo forma de pagamento - 3875
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebPresentePrestamista')
    cy.contains('3875 - T.A.A Receber Presente CDCI - para Prestamista')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebPresentePrestamista', { timeout: 40000 })
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

    //escolhendo forma de pagamento - 3876
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros')
    cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros')
        .click({force:true})
    cy.wait('@api_pedido_forma_pagamento_escolherRecebFuturoPrestamistaSemJuros', { timeout: 40000 })
}


//---------- Prestamista Abatimento Valor Fixo

//escolhendo forma de pagamento 3880 (3880 - T.A. A Receb Fut com juros - Prest. Valor Fixo) para aparecer seguro prestamista
export function escolherRecebFutComJurosPrestAbatValFixo (selector) {

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
export function escolherRecebPresentePrestAbatValFixo (selector) {

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
export function escolherRecebFutSemJurosPrestAbatValFixo (selector) {

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

//escolhendo forma de pagamento 3881 (3881 - T.A. A Receb Fut com juros - Prest. Origem Produto) para aparecer seguro prestamista
export function escolherRecebFutComJurosPrestAbatOrigemPrd (selector) {

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



//------------------- QUATIDADE DE PARCELAS ------

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

    //selecionando parcelas - 1X
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
    //     .should('be.visible')
    //     .and('not.be.disabled')
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

    cy.intercept('GET', '/views/carrinho/modalSeguroPrestamista.html').as('api_modal_seguro_prestamista')
    //selecionando parcelas - 4X
    cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding')
        .click({force:true})
    cy.wait('@api_modal_seguro_prestamista', { timeout: 40000 })
}


//------------------- OUTROS ------

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

//------------------- BOTÕES GERAR PARCELAS ------

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

//Botão "GERAR PARCELAS" quando alteramos a data de vencimento da 1
export function botaoGerarParcelasAlterVencimento (selector) {

    //.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_formas_pagamento')
    //cy.wait('@api_formas_pagamento', { timeout: 40000 })

    cy.wait(2000)

    //Botão "GERAR PARCELAS" - clicar
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .click({force:true})
}


//------------------- GERAR ENTRADA NO PAGAMENTO ------


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


//------------------- MODIFICAR PRIMEIRO DIA DE VENCIMENTO ------

//no campo 1 vencimento, colocar o dia de amanha para mudar as formas de pagamento
export function inserirDataAmanha1Vencimento (selector) {

    const data_hoje = umDiaAposHoje();

    //cy.contains('1º Vencimento').parent().find('input')
    cy.get('.gerar-parcelas > .layout-wrap')
        .scrollIntoView()
        .wait(300)

    //Clicar na data que desejo
    cy.contains('1º Vencimento').parent().find('input')
        .clear()
        .wait(200)
        .type(data_hoje)
}

//no campo 1 vencimento, colocar 31 dias após a data de hoje
export function inserirData31Dias1Vencimento (selector) {

    const data_31_dias = trintaUmDiasAposHoje();

    //cy.contains('1º Vencimento').parent().find('input')
    cy.get('.gerar-parcelas > .layout-wrap')
        .scrollIntoView()
        .wait(300)

    //Clicar na data que desejo
    cy.contains('1º Vencimento').parent().find('input')
        .clear()
        .wait(200)
        .type(data_31_dias)
}


//------------------- AGRUPAR LANÇAMENTOS ------


//colocar o valor da primeira forma de pagamento no campo valor a parcelar
export function primeiroValorAParcelar (selector) {

    //informativo "Valor a parcelar"
    cy.contains('label', 'Valor a parcelar')
        .should('be.visible')

    cy.get('.campoMoeda_valorAparcelar')
        .clear()
        .wait(200)
        .type('40000')
}

//clicar para NÃO agrupar lançamentos com o mesmo processo de recebimento
export function naoAgruparLancamentos (selector) {

    //validar mensagem do modal de aviso
    cy.get('.md-title')
        .should('be.visible')
        .and('have.text', 'Identificamos que já existe um pagamento lançado com esta mesma forma escolhida')

    //validar pergunta dentro do modal de aviso
    cy.get('.md-dialog-content-body > .ng-binding')
        .should('be.visible')
        .and('have.text', 'Deseja agrupar este pagamento em um único pagamento?')

    //validando opção "Sim, desejo agrupar este pagamento"
    cy.get('.md-confirm-button')
        .should('be.visible')
        .and('have.text', 'Sim, desejo agrupar este pagamento')
        .and('not.be.disabled')
        .invoke('css', 'color') // Obtém a cor do elemento
        .should('equal', 'rgb(36, 13, 105)')

    //validando opção "Não, desejo mantê-los individuais"
    cy.get('.md-cancel-button')
        .should('be.visible')
        .and('have.text', 'Não, desejo mantê-los individuais')
        .and('not.be.disabled')
        .invoke('css', 'color') // Obtém a cor do elemento
        .should('equal', 'rgb(36, 13, 105)')

    //clicar em NÃO
    cy.get('.md-cancel-button')
        .click()
}

//clicar para SIM agrupar lançamentos com o mesmo processo de recebimento
export function agruparLancamentos (selector) {

    //validar mensagem do modal de aviso
    cy.get('.md-title')
        .should('be.visible')
        .and('have.text', 'Identificamos que já existe um pagamento lançado com esta mesma forma escolhida')

    //validar pergunta dentro do modal de aviso
    cy.get('.md-dialog-content-body > .ng-binding')
        .should('be.visible')
        .and('have.text', 'Deseja agrupar este pagamento em um único pagamento?')

    //validando opção "Sim, desejo agrupar este pagamento"
    cy.get('.md-confirm-button')
        .should('be.visible')
        .and('have.text', 'Sim, desejo agrupar este pagamento')
        .and('not.be.disabled')
        // .invoke('css', 'color') // Obtém a cor do elemento
        // .should('equal', 'rgb(36, 13, 105)')

    //validando opção "Não, desejo mantê-los individuais"
    cy.get('.md-cancel-button')
        .should('be.visible')
        .and('have.text', 'Não, desejo mantê-los individuais')
        .and('not.be.disabled')
        // .invoke('css', 'color') // Obtém a cor do elemento
        // .should('equal', 'rgb(36, 13, 105)')

    //clicar em SIM
    cy.get('.md-confirm-button')
        .click()
}

//selecionar dois lançamentos com o mesmo processo de recebimento para posteriormente clicar no botão AGRUPAR
export function selecionarLancAgrupar (selector) {

    //texto "Lançamentos já realizados"
    cy.get('[ng-show="parcelamentoAutomaticoDisponivel"] > .md-subheader-inner > .md-subheader-content')
        .should('be.visible')
        .and('have.text', 'Lançamentos já realizados')

    //Processo - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding > .ng-binding')
        .should('be.visible')

    //Informação Processo - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding')
        .should('be.visible')

    //"1º Vencimento:" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding > b')
        .should('be.visible')
        .and('have.text', '1º Vencimento:')

    //Informação "1º Vencimento:" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding')
        .should('be.visible')

    //"Valor sem juros:" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding > b')
        .should('be.visible')
        .and('have.text', 'Valor sem juros:')

    //Informação "Valor sem juros:" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding')
        .should('be.visible')

    //"Valor da Parcela:" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding > b')
        .should('be.visible')
        .and('have.text', 'Valor da Parcela:')

    //Informação "Valor da Parcela:" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding')
        .should('be.visible')

    //"Subtotal:" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding > b')
        .should('be.visible')
        .and('have.text', 'Subtotal:')

    //Informação "Subtotal:" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding')
        .should('be.visible')

    //"Agrupar" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > b')
        .should('be.visible')
        .and('have.text', 'Agrupar')

    //checkbox "Agrupar" - primeiro lançamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > .md-auto-horizontal-margin > .md-container')
        .should('be.visible')
        .and('not.be.disabled')
        .click()

    //SEGUNDO LANÇAMENTO

    //texto "Lançamentos já realizados"
    cy.get('[ng-show="parcelamentoAutomaticoDisponivel"] > .md-subheader-inner > .md-subheader-content')
        .should('be.visible')
        .and('have.text', 'Lançamentos já realizados')

    //Processo - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding > .ng-binding')
        .should('be.visible')

    //Informação Processo - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding')
        .should('be.visible')

    //"1º Vencimento:" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding > b')
        .should('be.visible')
        .and('have.text', '1º Vencimento:')

    //Informação "1º Vencimento:" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding')
        .should('be.visible')

    //"Valor sem juros:" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding > b')
        .should('be.visible')
        .and('have.text', 'Valor sem juros:')

    //Informação "Valor sem juros:" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding')
        .should('be.visible')

    //"Valor da Parcela:" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding > b')
        .should('be.visible')
        .and('have.text', 'Valor da Parcela:')

    //Informação "Valor da Parcela:" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding')
        .should('be.visible')

    //"Subtotal:" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding > b')
        .should('be.visible')
        .and('have.text', 'Subtotal:')

    //Informação "Subtotal:" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding')
        .should('be.visible')

    //"Agrupar" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > b')
        .should('be.visible')
        .and('have.text', 'Agrupar')

    //checkbox "Agrupar" - segundo lançamento
    cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > .md-auto-horizontal-margin > .md-container')
        .should('be.visible')
        .and('not.be.disabled')
        .click()
}

//clicar no botão AGRUPAR
export function clicarAgrupar (selector) {

    //botão AGRUPAR
    cy.get('.layout-align-center-end > .flex-gt-sm-50 > .md-primary')
        .should('be.visible')
        .and('have.text', 'Agrupar')
        .click()

    //botão AGRUPAR
}

