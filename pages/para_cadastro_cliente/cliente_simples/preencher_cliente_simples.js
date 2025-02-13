import { gerarCpf, gerarNomeAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarEmailAleatorio, gerarNomeEmpresa }  from '../../gerarDados';

export class preencher {

    constructor(page) {
        this.page = page
    }

    //Campo Data Nascimento - validar e preencher
    async DataNascimento (selector) {

        //Ícone de data de nascimento
        cy.get(':nth-child(3) > .layout-xs-column > .md-block > .validaData > .md-datepicker-button')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Campo Data de nascimento - validando mensagem dentro do campo antes de preencher
        cy.get('label[aria-hidden="false"]')
            .should('have.text', 'Data de nascimento')     

        //Campo data de nascimento
        cy.get('input[ng-focus="ctrl.setFocused(true)"]')
            .should('be.visible')
            .and('have.value','')
            .wait(200)
            //.type("30/09/1998", {force:true})

        cy.contains('Data de nascimento').parent().find('input')
            .type("30/09/1998", {force:true})
    }

    //Preencher campo CPF com CPF
    async CPFcliente (selector) {

        const cpf = gerarCpf(); // Gera um CPF válido

        //Campo CPF - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtCpf"]')
            .should('have.text', 'CPF')

        //Campo CPF 
        cy.get('#txtCpf')
            .should('be.visible')
            .and('have.value','')
            .type(cpf, {force: true})
    }

    //Preencher campo CNPJ com CNPJ
    async CNPJcliente (selector) {

        const cnpj = gerarCNPJ(); // Gera um CNPJ válido

        //Campo CNPJ - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtCNPJ"]')
            .should('have.text', 'CNPJ')

        //Campo CNPJ
        cy.get('#txtCNPJ')
            .should('be.visible')
            .and('have.value','')
            .type(cnpj, { force: true })
    }

    //Campo Nome completo - cliente CPF
    async NomeCompletoCPF (selector) {

        const nomeCompleto = gerarNomeAleatorio();

        //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtNomeCompleto"]')
            .should('have.text', 'Nome Completo')     

        //Campo Nome Completo
        cy.get('#txtNomeCompleto')
            .should('be.visible')
            .and('have.value','')
            .type(nomeCompleto, {force: true})
    }

    //Campo Nome completo - cliente CNPJ
    async NomeCompletoCNPJ (selector) {

        const nomeCompletoEmpresa = gerarNomeEmpresa();

        //Campo CNPJ - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtNomeCompleto"]')
            .should('have.text', 'Nome Completo')

        //Campo CNPJ
        cy.get('#txtNomeCompleto')
            .should('be.visible')
            .and('have.value','')
            .wait(200)
            .type(nomeCompletoEmpresa, { force: true })
    }

    //Selecionar sexo da pessoa física
    async SexoPessoaFisica (selector) {

        //Campo Sexo
        cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
            .scrollIntoView()
            .should('be.visible')
            .and('have.value','')

        //Campo Sexo - clicar
        cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
            .click({force:true})

        //Selecionar masculino
        cy.get('.md-text.ng-binding')
            .contains('Masculino')
            .click({force:true})
    }

    //Campo CEP - inserir e pesquisar
    async PesquisarCEP (selector) {

        const CEPcadastro = "87065300"

        //Campo CEP - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtCep"]')
            .should('have.text', 'CEP')   

        //Campo CEP
        cy.get('#txtCep')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('have.value','')
            .type(CEPcadastro, {force:true})

        //Lupa de pesquisa do CEP
        cy.get('.md-icon-float > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.intercept('GET', '/services/v3/cidade?uf=PR').as('api_cidade_rota')
        //Clicar na lupa de pesquisa do CEP
        cy.get('.md-icon-float > .ng-binding')
            .click({force:true})
        cy.wait('@api_cidade_rota', { timeout: 40000 })
    }

    //Campo Número - validar e preencher
    async NumeroEndereco (selector) {

        const numero_rendereco = '66'

        //Campo Número - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtNumero"]')
            .should('have.text', 'Número') 

        //Campo Número, do endereço
        cy.get('#txtNumero')
            .should('be.visible')
            .and('have.value','')
            .type(numero_rendereco, {force:true})
    }

    //Preenchendo rota do cadastro de cliente
    async RotaCliente (selector) {

        const rota = '560';

        //Campo Código da rota - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="codigo_rota"]')
            .should('have.text', 'Código da rota') 

        cy.intercept('GET', '/views/carrinho/modalRotas.html').as('api_carrinho_modalRotas')
        //Preencher campo rota 1
        cy.get('.rota-frete > .md-icon-right > .ng-binding')
            .should('be.visible')
            .and('have.value','')
            .type( rota, {force:true})
        cy.wait('@api_carrinho_modalRotas', { timeout: 40000 })

        //Lupa do campo Rota 1
        cy.get('.rota-frete > .md-icon-right > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Campo rota 2 - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtBuscaRotaModal"]')
            .should('have.text', 'Rota') 

        //Preencher campo rota 2
        cy.get('#txtBuscaRotaModal')
            .should('be.visible')
            .and('have.value','')
            .type( rota, {force:true}, '{downarrow}')

        //Lupa do campo Rota 2
        cy.get('md-icon[aria-label="Pesquisar"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.intercept('GET', '/services/v3/rota?idrota=560').as('api_id_rota_560')
        //Clicar na lupa do campo Rota 2
        cy.get('md-icon[ng-click="pesquisar()"]')
            .click({force:true})
        cy.wait('@api_id_rota_560', { timeout: 40000 })
        
        //Escolher última informação da rota
        cy.contains('560 - T.A. ROTA AUTOMAÇÃO MARINGÁ')
            .click()

        cy.intercept('GET', '/services/v3/local_entrega?rota=560').as('api_local_entrega_560')
        cy.contains('560 - T.A. CIDADE AUTOMAÇÃO')
            .click()
        cy.wait('@api_local_entrega_560', { timeout: 40000 })
    }
}