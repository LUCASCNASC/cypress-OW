// ------------ VALIDAÇÕES DO PEDIDO -------------------

//Função para validar as informações do cliente na última tela antes de finalizar o pedido
export function infoFinalClienteSemEntrega (selector) {

    //título Cliente
    cy.get('.flex-gt-xs-100 > .md-primary > .md-toolbar-tools > .flex')
        .scrollIntoView()
        .wait(200)

    //título Cliente
    cy.get('.flex-gt-xs-100 > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Cliente')

    //Nome:
    cy.get('.cliente > :nth-child(1) > b') 
        .should('be.visible')
        .and('have.text', 'Nome:')

    //informação Nome
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(1)')
        .should('be.visible')
        .and('contain', 'TA CPF AUTOMAÇÃO - COM ROTA')

    //CPF/CNPJ:
    cy.get('.cliente > :nth-child(2) > b')
        .should('be.visible')
        .and('have.text', 'CPF/CNPJ:')

    //informação CPF/CNPJ
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(2)')
        .should('be.visible')
        .and('contain', '489.762.490-89')

    //Tel. fixo:
    cy.get('.cliente > :nth-child(3) > b')
        .should('be.visible')
        .and('have.text', 'Tel. fixo:')

    //informação Tel. fixo
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(3)')
        .should('be.visible')
        .and('contain', '(44) 98656-5132')
    
    //Tel. celular:
    cy.get('.cliente > :nth-child(4) > b')
        .should('be.visible')
        .and('have.text', 'Tel. celular:')

    //informação Tel. celular
    cy.get('.cliente > :nth-child(4)')
        .should('be.visible')
        .and('contain', '(44) 98656-5132')

    //E-mail: 
    cy.get('.cliente > :nth-child(5) > b')   
        .should('be.visible')
        .and('have.text', 'E-mail:')

    //informação E-mail
    cy.get('.cliente > :nth-child(5)')
        .should('be.visible')
        .and('contain', 'ta_cpf_automação_com_rota@gmail.com')

    //E-mail NFe:    
    cy.get('.cliente > :nth-child(6) > b')
        .should('be.visible')
        .and('have.text', 'E-mail NF-e:')

    //informação E-mail NFe
    cy.get('.cliente > :nth-child(6)')
        .should('be.visible')
        .and('contain', 'ta_cpf_automação_com_rota@gmail.com')
}

