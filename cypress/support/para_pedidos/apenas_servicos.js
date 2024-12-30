//Marcar garantia "T.A. Garantia Separa Mesmo Processo"
export function garantiaSeparaMesmoProcesso (selector) {
    
    cy.get('#checkbox-139-0 > .md-container')
        .should('not.be.disabled')

    cy.get('#checkbox-139-0 > .md-container').click()
}

//Marcar garantia "T.A. Garantia Não Separa"
export function garantiaNaoSepara (selector) {

    cy.get('#checkbox-140-1 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-140-1 > .md-container').click()
}

//Marcar Garantia separa titulo em um processo deferente
export function garantiaSeparaTituloProcessoDiferente (selector) {

    cy.get('#checkbox-141-2 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-141-2 > .md-container').click()
}

//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
export function maoObraDestacaNãoSepara (selector) {

    cy.get('#checkbox-142-0 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-142-0 > .md-container').click()
}

//Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
export function maoObraNaoDestacaSeparaMesmoProcesso (selector) {

    cy.get('#checkbox-143-1 > .md-container')
        .should('exist')
        .and('not.be.disabled')

    cy.get('#checkbox-143-1 > .md-container').click()
}

//Marcar Mão de obra que não destaca e separa título em processo diferente
export function maoObraNaoDestacaSeparaProcessoDiferente (selector) {

    cy.get('#checkbox-144-2 > .md-container')
        .should('not.be.disabled')

    cy.get('#checkbox-144-2 > .md-container').click()
}