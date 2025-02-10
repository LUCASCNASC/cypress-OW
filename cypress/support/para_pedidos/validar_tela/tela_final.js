// ------------ VALIDAÇÕES FINAL DO PEDIDO -------------------

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

    //botão EDITAR
    cy.get('.padding-10 > :nth-child(1) > .cliente > .md-accent')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Editar')

    //Consumidor Final - botão
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-container')
        .should('be.visible')
        .and('not.be.disabled')

    //Consumidor Final
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-label')
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Consumidor Final')
}

//Função para validar as informações do cliente na última tela antes de finalizar o pedido
export function infoFinalClienteComEntrega (selector) {

    //título Cliente
    cy.get('.confirmacao > :nth-child(1) > .md-primary > .md-toolbar-tools > .flex')
        .scrollIntoView()
        .wait(200)

    //título Cliente
    cy.get('.confirmacao > :nth-child(1) > .md-primary > .md-toolbar-tools > .flex')
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

    //botão EDITAR
    cy.get('.padding-10 > :nth-child(1) > .cliente > .md-accent')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Editar')

    //Consumidor Final - botão
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-container')
        .should('be.visible')
        .and('not.be.disabled')

    //Consumidor Final
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-label')
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Consumidor Final')
}

//Função para validar as informações da entrega na última tela antes de finalizar o pedido
export function infoFinalEntrega (selector) {

    cy.get('h2[ng-show="carrinho.endereco.local == \'entrega\'"]')
        .scrollIntoView()
        .wait(200)

    //validando título "Endereço de entrega"
    cy.get('h2[ng-show="carrinho.endereco.local == \'entrega\'"]')
        .should('be.visible')
        .and('have.text', 'Endereço de entrega')

    //CEP:
    cy.get('.endereco > :nth-child(1) > b')
        .should('be.visible')
        .and('have.text', 'CEP:')

    //informação CEP:
    cy.get('.endereco > :nth-child(1)')
        .should('be.visible')
        .and('contain', '87.065-320')

    //Endereço:
    cy.get('.endereco > :nth-child(2) > b')
        .should('be.visible')
        .and('have.text', 'Endereço:')

    //informação Endereço:
    cy.get('.endereco > :nth-child(2)')
        .should('be.visible')
        .and('contain', 'RUA TULIPA, 232, PARQUE INDUSTRIAL, MARINGA/PR')

    //Telefone:
    cy.get('.endereco > :nth-child(3) > b')
        .should('be.visible')
        .and('have.text', 'Telefone:')

    //informação Telefone:
    cy.get('.endereco > :nth-child(3) > .ng-binding')
        .should('be.visible')
        .and('contain', '(44) 9865-5132')

    //Rota:
    cy.get('[ng-show="(carrinho.frete && carrinho.frete.rota && carrinho.endereco.local == \'entrega\')"] > b')
        .should('be.visible')
        .and('have.text', 'Rota:')

    //informação Rota:
    cy.get('[ng-show="(carrinho.frete && carrinho.frete.rota && carrinho.endereco.local == \'entrega\')"]')
        .should('be.visible')
        .and('contain', 'Rota Maringá, Centro')

    //botão EDITAR TELEFONE
    cy.get('.endereco > .md-accent')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Editar Telefone')
}

//Função para validar campo - OBSERVAÇÕES PARA A NOTA FISCAL
export function validarObsNotaFiscalVazio (selector) {

    //OBSERVAÇÕES PARA A NOTA FISCAL
    cy.get(':nth-child(1) > .header-interno > label')
        .should('be.visible')
        .and('have.text', 'OBSERVAÇÕES PARA A NOTA FISCAL')

    //campo vazio
    cy.get(':nth-child(1) > .col-md-12 > .form-group > .form-control')  
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')
        //.and('have.attr', 'maxlength', '300') //não tem limite de caracteres
}

//Função para validar campo - OBSERVAÇÕES PARA USO INTERNO
export function validarObsInternaVazio (selector) {

    //OBSERVAÇÕES PARA USO INTERNO
    cy.get(':nth-child(2) > .header-interno > label')
        .should('be.visible')
        .and('have.text', 'OBSERVAÇÕES PARA USO INTERNO')

    //campo vazio
    cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control')  
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')
        .and('have.attr', 'maxlength', '300') //não tem limite de caracteres

    //"Limite de 300 caracteres"
    cy.get('.form-group > span')
        .should('be.visible')
        .and('have.text', 'Limite de 300 caracteres')
}