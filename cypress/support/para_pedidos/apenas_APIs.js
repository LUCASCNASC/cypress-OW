//pegar ação da API - 'GET', '/services/v3/cidade?uf=PR'
export function pegarAPICidade (selector) {

    cy.intercept('GET', '/services/v3/cidade?uf=PR').as('apiRequest')
}

//esperar API - 'GET', '/services/v3/cidade?uf=PR' carregar para continuar a ação
export function esperarAPICidade (select) {

    cy.wait('@apiRequest', { timeout: 40000 })
}