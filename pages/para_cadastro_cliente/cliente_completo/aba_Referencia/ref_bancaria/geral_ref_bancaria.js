import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada, 
         gerarChavePixEmail, gerarChavePixCPF, gerarChavePixAleatoria } from '../../../../gerarDadosPIX'

export class GeneralRefBanking {

    constructor(page) {
        this.page = page
    }
    //--------REFERENCIAS - REFERENCIA BANCÁRIA -------

    //validar e clicar na aba Bancária, dentro de Referencias
    async clicarAbaRefBancaria (selector) {

        //validando botão Bancária
        cy.get('#menu_items_sec > :nth-child(3)')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
            //.and('have.text', 'Bancária')

        cy.intercept('GET', '/views/cliente/refEtapaBancariaLista.html').as('api_ref_bancaria')
        //clicando botão Bancária
        cy.get('#menu_items_sec > :nth-child(3)')
            .click()
        cy.wait('@api_ref_bancaria', { timeout: 40000 })
    }

    //validando informações da tela antes de adicionar qualquer coisa
    async validarAbaRefBancariaVazia (selector) {

        //validando título quando entramos na aba
        cy.get('h3')
            .should('be.visible')
            .and('have.text', 'Referências / Bancária')

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
    async clicarAddNovaRefBancaria (selector) {

        cy.intercept('GET', '/views/cliente/modalClienteRefBancaria.html').as('api_modal_referencia_bancaria')
        cy.get('.layout-align-end-end > .md-fab')
            .click()
        cy.wait('@api_modal_referencia_bancaria', { timeout: 40000 })
    }

    //validar informações do modal Referencia Bancária antes de preencher as informações
    async modalRefBancariaVazio (selector) {

        //título modal 
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Referência bancária')

        //botão X
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //campo Banco
        cy.get('#txtBancoRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Banco
        cy.get('label[for="txtBancoRefBanc"]')
            .should('have.text', 'Banco')

        //campo Agencia
        cy.get('#txtAgenciaRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Agencia
        cy.get('label[for="txtAgenciaRefBanc"]')
            .should('have.text', 'Agência')

        //campo Conta
        cy.get('#txtContaRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Conta
        cy.get('label[for="txtContaRefBanc"]')
            .should('have.text', 'Conta')

        //ícone calendário
        cy.get('.md-datepicker-button')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //campo Data Abertura
        cy.get('input.md-datepicker-input.md-input')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação Data Abertura
        // cy.get('div[class="md-datepicker-input-container"]')
        //     .should('have.text', 'Data Abertura')

        //campo Boleto
        cy.get('#txtBoletoRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')
            
        //informação campo Boleto
        cy.get('label[for="txtBoletoRefBanc"]')
            .should('have.text', 'Boleto')

        //campo Telefone
        cy.get('#txtTelefoneRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Telefone
        cy.get('label[for="txtTelefoneRefBanc"]')
            .should('have.text', 'Telefone')

        //campo Gerente
        cy.get('#txtGerente')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Gerente
        cy.get('label[for="txtGerente"]')
            .should('have.text', 'Gerente')

        //campo Email
        cy.get('#txtEmailRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Gerente
        cy.get('label[for="txtEmailRefBanc"]')
            .should('have.text', 'Email')

        //campo CPF/CNPJ correntista
        cy.get('#txtCpfCnpjRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo CPF/CNPJ correntista
        cy.get('label[for="txtCpfCnpjRefBanc"]')
            .should('have.text', 'CPF/CNPJ correntista')

        //campo Nome do correntista
        cy.get('#txtNmCorrentRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação do campo Nome do correntista
        cy.get('label[for="txtNmCorrentRefBanc"]')
            .should('have.text', 'Nome do correntista')

        //campo Tipo de conta
        cy.get('#txtTpContaRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Tipo de conta
        cy.get('label[for="txtTpContaRefBanc"]')
            .should('have.text', 'Tipo de conta')

        //campo Operação
        cy.get('#txtOperacaoRefBanc')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //nformação Operação
        cy.get('label[for="txtOperacaoRefBanc"]')
            .should('have.text', 'Operação')

        //campo Forma de pagamento
        cy.get('#txtFrmPag')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação Forma de pagamento
        cy.get('label[for="txtFrmPag"]')
            .should('have.text', 'Forma de pagamento')

        //campo Tipo chave PIX
        cy.get('#txtIdTipoChavePix')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Tipo chave PIX
        cy.get('label[for="txtIdTipoChavePix"]')
            .should('have.text', 'Tipo chave PIX')

        //campo Chave PIX
        cy.get('#txtChavePix')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Chave PIX
        cy.get('label[for="txtChavePix"]')
            .should('have.text', 'Chave PIX')

        //validar botão SALVAR, desabilitado
        cy.get('#btnModalAddRefPessoal')
            //.should('be.visible')
            .should('have.attr', 'disabled')
    }

    //clicar para salvar Referencia Bancaria
    async clicarSalvarRefBancaria (selector) {

        cy.contains('button', 'Salvar')
            .should('be.visible')

        //validando botão salvar habilitado
        cy.get('#btnModalAddRefPessoal')
            .should('be.visible')
            .and('not.have.attr', 'disabled') 

        //clicar no botão SALVAR
        cy.get('#btnModalAddRefPessoal')   
            .click()
    }

    // validando mensagem Referencia Bancária incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Bancária
    async messRefBancariaIncluidaSucesso (selector) {

        //Card Endereço incluído com sucesso.
        cy.get('.toast-success')
            .should('be.visible')

        //Card Endereço incluído com sucesso. - Aviso
        cy.get('.toast-success > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
        cy.get('.toast-success > .toast-message')
            .should('be.visible')
            .and('have.text', 'Referência Bancária incluída com sucesso.')
    }

    //validando informações que foram adicionadas no cadastro de referencia bancária
    async infosRefBancariaAdicionada (selector) {

        //Card de endereço adicionado
        cy.get('.md-whiteframe-2dp')
            .should('be.visible')
            .and('contain', 'aaa')
            .and('contain', 'Agencia:')
            .and('contain', 'Conta:')
    }


    //------------ PIX ERRADO tipo TELEFONE - 

    // validando mensagem de chave pix telefone inválida, após tentarmos inserir uma chave pix telefone fora do padrão
    async messRefBancariaChavePixTelefoneInvalida (selector) {

        //Card Erro identificado
        cy.get('.toast-error > .toast-title')
            .should('be.visible')

        //Card Endereço Erro identificado - Aviso
        cy.get('.toast-error > .toast-title')
            .should('be.visible')
            .and('have.text', 'Erro identificado')

        //Card Erro identificado -  mensagem
        cy.get('.toast-error > .toast-message')
            .should('be.visible')
            .and('have.text', 'Chave Pix Telefone não informada ou inválida. Deve conter o DDD (2 digitos) mais o número do celular (9 dígitos). Informar somente números')
    }


    //------------ PIX ERRADO tipo EMAIL

    // validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix email fora do padrão
    async messRefBancariaChavePixEmailInvalida (selector) {

        //Card Erro identificado
        cy.get('.toast-error > .toast-title')
            .should('be.visible')

        //Card Endereço Erro identificado - Aviso
        cy.get('.toast-error > .toast-title')
            .should('be.visible')
            .and('have.text', 'Erro identificado')

        //Card Erro identificado -  mensagem
        cy.get('.toast-error > .toast-message')
            .should('be.visible')
            .and('have.text', 'Chave Pix E-Mail não informada ou inválida.')
    }

    //------------ PIX ERRADO tipo CPF CNPJ

    // validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix CPF CNPJ fora do padrão
    async messRefBancariaChavePixCpfCnpjInvalida (selector) {

        //Card Erro identificado
        cy.get('.toast-error > .toast-title')
            .should('be.visible')

        //Card Endereço Erro identificado - Aviso
        cy.get('.toast-error > .toast-title')
            .should('be.visible')
            .and('have.text', 'Erro identificado')

        //Card Erro identificado -  mensagem
        cy.get('.toast-error > .toast-message')
            .should('be.visible')
            .and('have.text', 'Chave Pix CPF/CNPJ não informada ou inválida. Deve conter um CPF ou CNPJ válido. Informar somente números.')
    }


    //------------ PIX ERRADO tipo Aletória

    // validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix Aletória fora do padrão
    async messRefBancariaChavePixAletoriaInvalida (selector) {

        //Card Erro identificado
        cy.get('.toast-error > .toast-title')
            .should('be.visible')

        //Card Endereço Erro identificado - Aviso
        cy.get('.toast-error > .toast-title')
            .should('be.visible')
            .and('have.text', 'Erro identificado')

        //Card Erro identificado -  mensagem
        cy.get('.toast-error > .toast-message')
            .should('be.visible')
            .and('have.text', 'Chave Pix Aleatória não informada ou inválida. A chave aleatória deve ser informada com os traços que separa cada conjunto da chave aleatória, ao todo são 4 traços.')
    }


    //---------------------

    //arrastar referencia bancaria para fazer a edição
    async arrastarEditarRefBancaria (selector) {
        
        cy.get('.md-whiteframe-2dp')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 100, clientY: 0 }) // Ajuste clientX para a posição desejada
            .trigger('mouseup')
    }

    //clicar no lápis para editar referencia bancária
    async clicarEditarRefBancaria (selector) {

        //ícone lápis
        cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised > .ng-binding')
            .should('be.visible')

        //botão inteiro
        cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised')
            .click({force:true})

        cy.intercept('GET', '/services/v3/forma_pagamento').as('api_modal_referencia_bancaria')
        cy.wait('@api_modal_referencia_bancaria', { timeout: 40000 })
    }
}