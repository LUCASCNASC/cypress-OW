//Função para validar título da página (criada por conta da variação entre Sabium Mobile e SBX Mobile)
export function titulopagina (selector, expectedText) {
    cy.title()
        .should('eq', 'Sabium Mobile') //Validando título da página
}

//função para validar url após logarmos no sistema 
export function urlAposLogin (selector, expectedUrl) {

    cy.url()
        .should('include', '/#!/principal/')
}