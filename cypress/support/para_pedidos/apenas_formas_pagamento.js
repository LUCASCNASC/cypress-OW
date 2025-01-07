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