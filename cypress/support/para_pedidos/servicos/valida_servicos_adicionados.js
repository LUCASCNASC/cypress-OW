//------------------- VALIDA ADICIÇÃO DE SERVIÇOS PEDIDO COM UM PRODUTO ------

//SERVIÇOS VINCULADOS - título - pedido com um produto
export function validarServicosVinculados (selector) {

    //completo
    cy.get('.md-subheader-inner')
        .scrollIntoView()
        .wait(200)

    //completo
    cy.get('.md-subheader-inner')
        .should('be.visible')

    //Serviços vinculados
    cy.get('.md-subheader-content')
        .should('be.visible')
        .and('have.text', 'Serviços vinculados')
}

//Marcar garantia "139 - T.A. Garantia Separa Mesmo Processo"
export function validaAddGarantSepMesmoProc (selector) {

    cy.contains('139 - T.A. Garantia Separa Mesmo Processo')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
}

//Marcar garantia "140 - T.A. Garantia Não Separa"
export function validaAddGarantNaoSep (selector) {

    cy.contains('140 - T.A. Garantia Não Separa')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
}

//Marcar Garantia "141 - T.A. Garantia Separa Processo Diferente"
export function validaAddGarantSepTituloProcDif (selector) {

    cy.contains('141 - T.A. Garantia Separa Processo Diferente')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
}

//Marcar Mão de Obra "T.A. MO Destaca e Não Separa" - 142
export function validaAddMODestacaNãoSepara (selector) {

    cy.contains('142 - T.A. MO Destaca e Não Separa')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
}

//Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo" - 143
export function validaAddMONaoDestacaSepMesmoProc (selector) {

    cy.contains('143 - T.A. MO Não Destaca e Separa Mesmo Processo')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
}

//Marcar Mão de obra '144 - T.A. MO Não Destaca e Separa Processo Diferente'
export function validaAddMONaoDestacaSepProcDif (selector) {

    cy.contains('144 - T.A. MO Não Destaca e Separa Processo Diferente')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
}

