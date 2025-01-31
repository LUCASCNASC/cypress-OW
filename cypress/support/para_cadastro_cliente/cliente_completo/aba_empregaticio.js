//Validar e clicar na aba Empregaticio
export function clicarAbaEmpregaticio (selector) {

    //Validando aba Empregaticio
    cy.get('#menu_items_pri > :nth-child(6)')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('have.text', 'Anexos')

    cy.intercept('GET', '/views/cliente/clienteEmpregaticioLista.html').as('api_aba_empregaticio')
    //Clicar na aba Empregaticio
    cy.get('#menu_items_pri > :nth-child(6)')
        .click()
    cy.wait('@api_aba_empregaticio', { timeout: 40000 })
}

//validando informações da tela antes de adicionar qualquer coisa
export function validarAbaEmpregaticioVazia (selector) {

    //validando título quando entramos na aba
    cy.get('h3')
        .should('be.visible')
        .and('have.text', 'Empregatício')

    //validando botão +
    cy.get('.layout-align-end-end > .md-fab')
        .should('be.visible')  
        .and('not.have.attr', 'disabled')

    //mensagem quando não tem nada adicionado na aba
    cy.get('.text-align-center')
        .should('be.visible')
        .and('have.text', 'Não foi encontrado nenhum registro')

    cy.get('.btn')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('contain', 'SALVAR')
}

//clicar no botão + para adicionar uma nova referencia bancária
export function clicarAddNovoEmpregaticio (selector) {

    cy.intercept('GET', '/services/v3/dados_tabela/tipocomprovanterenda').as('api_modal_empregaticio')
    cy.get('.layout-align-end-end > .md-fab')
        .click()
    cy.wait('@api_modal_empregaticio', { timeout: 40000 })
}

//validar informações do modal Empregaticio antes de preencher as informações
export function modalEmpregaticioVazio (selector) {

    //título modal 
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Empregatício')

    //botão X
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //campo CNPJ
    cy.get('#txtCnpjEmpr')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo CNPJ
    cy.get('label[for="txtCnpjEmpr"]')
        .should('have.text', 'CNPJ')

    //campo Telefone
    cy.get('#txtTelEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Telefone
    cy.get('label[for="txtTelEmp"]')
        .should('have.text', 'Telefone')

    //campo Empresa
    cy.get('#txtNomeEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Empresa
    cy.get('label[for="txtNomeEmp"]')
        .should('have.text', 'Empresa')

    //campo Ramo atividade
    cy.get('#txtRamoAtividade')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Ramo atividade
    cy.get('label[for="txtRamoAtividade"]')
        .should('have.text', 'Ramo atividade')

    //campo CEP
    cy.get('#txtCepEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo CEP
    cy.get('label[for="txtCepEmp"]')
        .should('have.text', 'CEP')

    //lupa do campo CEP
    cy.get(':nth-child(3) > .md-icon-float > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //campo Endereço
    cy.get('#txtEnderecoEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Endereço
    cy.get('label[for="txtEnderecoEmp"]')
        .should('have.text', 'Endereço')

    //campo Número
    cy.get('#txtNumEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Número
    cy.get('label[for="txtNumEmp"]')
        .should('have.text', 'Número')

    //campo Complemento
    cy.get('#txtComplEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Complemento
    cy.get('label[for="txtComplEmp"]')
        .should('have.text', 'Complemento')

    //campo Bairro
    cy.get('#txtBairroEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Bairro
    cy.get('label[for="txtBairroEmp"]')
        .should('have.text', 'Bairro')

    //campo Estado
    cy.get('#txtUfEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Estado
    cy.get('label[for="txtUfEmp"]')
        .should('have.text', 'Estado')

    //campo Cidade
    cy.get('#txtCidadeEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Cidade
    cy.get('label[for="txtCidadeEmp"]')
        .should('have.text', 'Cidade')

    //Ícone calendário Admissão
    cy.get('#txtAdmiEmp > .md-datepicker-button')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo data Admissão 
    cy.contains('Admissão').parent().find('input')
        .should('be.visible')

    //campo Salário
    cy.get('#txtSalarioEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Salário
    cy.get('label[for="txtSalarioEmp"]')
        .should('have.text', 'Salário')

    //Ícone calendário Data Comprovante
    cy.get('#txtDtComprEmp > .md-datepicker-button')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Data Comprovante 
    cy.contains('Data Comprovante').parent().find('input')
        .should('be.visible')

    //campo Tipo comprovante
    cy.get('#txtTipoComprEmp')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Tipo comprovante
    cy.get('label[for="txtTipoComprEmp"]')
        .should('have.text', 'Tipo comprovante')

    //campo Código
    cy.get('#idcbo')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Código
    cy.get('label[for="idcbo"]')
        .should('have.text', 'Código')

    // //campo Código 2
    // cy.get('#idcbo')
    //     .should('be.visible')
    //     .and('not.have.attr', 'disabled')

    // //informação campo Código 2
    // cy.get('label[for="idcbo"]')
    //     .should('have.text', 'Código')






    //campo Email
    cy.get('#txtEmailRefPes')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Email
    cy.get('label[for="txtEmailRefPes"]')
        .should('have.text', 'Email')

    //campo Telefone
    cy.get('#txtTelefoneRefPes')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Telefone
    cy.get('label[for="txtTelefoneRefPes"]')
        .should('have.text', 'Telefone')

    //campo Relacionamento
    cy.get('#txtRelacionamentoRefPes')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //informação campo Relacionamento
    cy.get('label[for="txtRelacionamentoRefPes"]')
        .should('have.text', 'Relacionamento')

    //campo Data inclusão
    cy.get('#txtDtInclusaoRefPes')
        .should('be.visible')
        .and('have.attr', 'disabled')

    //informação Data inclusão
    cy.get('label[for="txtDtInclusaoRefPes"]')
        .should('have.text', 'Data inclusão')
    
    //validar botão SALVAR, desabilitado
    cy.get('#btnModalAddRefPessoal')
        .should('be.visible')
        .should('have.attr', 'disabled')
}