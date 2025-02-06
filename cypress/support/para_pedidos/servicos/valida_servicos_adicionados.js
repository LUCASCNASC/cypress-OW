//------------------- VALIDA ADICIÇÃO DE SERVIÇOS PEDIDO COM UM PRODUTO ------

//SERVIÇOS VINCULADOS - título - pedido com um produto
export function validarServicosVinculados (selector) {

    //completo
    cy.get('.md-subheader-inner')
        .should('be.visible')

    //Serviços vinculados
    cy.get('.md-subheader-content')
        .should('be.visible')
        .and('have.text', 'Serviços vinculados')
}

//Marcar garantia "T.A. Garantia Separa Mesmo Processo" - 139
export function validaAddGarantSepMesmoProc (selector) {
    
    cy.get('#checkbox-139-0 > .md-container')
        .should('not.be.disabled')

    cy.get('#checkbox-139-0 > .md-container').click()
}

//Marcar garantia "T.A. Garantia Não Separa" - 140
export function validaAddGarantNaoSep (selector) {

    cy.get('#checkbox-140-1 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-140-1 > .md-container').click()
}

//Marcar Garantia separa titulo em um processo deferente - 141
export function validaAddGarantSepTituloProcDif (selector) {

    cy.get('#checkbox-141-2 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-141-2 > .md-container').click()
}

//Marcar Mão de Obra "T.A. MO Destaca e Não Separa" - 142
export function validaAddMODestacaNãoSepara (selector) {

    cy.get('#checkbox-142-0 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-142-0 > .md-container').click()
}

//Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo" - 143
export function validaAddMONaoDestacaSepMesmoProc (selector) {

    cy.get('#checkbox-143-1 > .md-container')
        .should('exist')
        .and('not.be.disabled')

    cy.get('#checkbox-143-1 > .md-container').click()
}

//Marcar Mão de obra que não destaca e separa título em processo diferente - 144
export function validaAddMONaoDestacaSepProcDif (selector) {

    cy.get('#checkbox-144-2 > .md-container')
        .should('not.be.disabled')

    cy.get('#checkbox-144-2 > .md-container').click()
}

