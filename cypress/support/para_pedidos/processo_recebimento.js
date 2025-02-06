import { umDiaAposHoje, trintaUmDiasAposHoje } from '../../support/gerarDados'

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


//---------- Prestamista Abatimento Valor Fixo - 55,90

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


//---------- Prestamista Abatimento Valor Fixo - Origem Produto 99,30

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

