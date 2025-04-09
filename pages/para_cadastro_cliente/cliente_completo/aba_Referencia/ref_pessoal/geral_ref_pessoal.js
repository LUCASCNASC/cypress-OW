import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa, gerarRelacionamento }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'

export class GeneralRefGuys {

    constructor(page) {
        this.page = page
    }

    //validar e clicar na aba Bancária, dentro de Referencias
    async clickAbaRefGuys (selector) {

        //validando botão Pessoal
        cy.get('#menu_items_sec > .on')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
            //.and('have.text', 'Bancária')

        cy.intercept('GET', '/views/cliente/refEtapaBancariaLista.html').as('api_ref_pessoal')
        //clicando botão Pessoal
        cy.get('#menu_items_sec > :nth-child(3)')
            .click()
        cy.wait('@api_ref_pessoal', { timeout: 40000 })
    }

    //validando informações da tela antes de adicionar qualquer coisa - aba referencia Pessoal
    async validateAbaEmpty (selector) {

        //validando título quando entramos na aba Pessoal
        cy.get('h3')
            .should('be.visible')
            .and('have.text', 'Referências / Pessoal')

        //validando botão + 
        cy.get('.layout-align-end-end > .md-fab')
            .should('be.visible')  
            .and('not.have.attr', 'disabled')

        //mensagem quando não tem nada adicionado na aba Pessoal
        cy.get('.text-align-center')
            .should('be.visible')
            .and('have.text', 'Não foi encontrado nenhum registro')

        cy.get('.btn')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
            //.and('contain', 'SALVAR')
    }

    //clicar no botão + para adicionar uma nova referencia pessoal
    async clickAddNew (selector) {

        cy.intercept('GET', '/views/cliente/modalClienteRefPessoal.html').as('api_modal_referencia_pessoal')
        cy.get('.layout-align-end-end > .md-fab')
            .click()
        cy.wait('@api_modal_referencia_pessoal', { timeout: 40000 })
    }

    //validar informações do modal Referencia Pessoal antes de preencher as informações
    async modalEmpty (selector) {

        //título modal 
        cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Referência pessoal')

        //botão X
        cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //campo Nome
        cy.get('#txtNomeRefPes')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //informação campo Nome
        cy.get('label[for="txtNomeRefPes"]')
            .should('have.text', 'Nome')

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

    //clicar para salvar Referencia Pessoal
    async clickSave (selector) {

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

    // validando mensagem Referencia Pessoal incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Pessoal
    async messRefGuysAddedSucess (selector) {

        //Card Endereço incluído com sucesso.
        cy.get('.toast-success')
            .should('be.visible')

        //Card Endereço incluído com sucesso. - Aviso
        cy.get('.toast-success > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Card Endereço incluído com sucesso. - Referencia Pessoal incluído com sucesso.
        cy.get('.toast-success > .toast-message')
            .should('be.visible')
            .and('have.text', 'Referência Pessoal incluída com sucesso.')
    }

    //validando informações que foram adicionadas no cadastro de referencia Pessoal
    async infoAdded (selector) {

        const hoje = new Date();
        const dataAtual = hoje.toLocaleDateString('pt-BR')

        //nome da pessoa
        cy.get('.flex-gt-sm-70 > :nth-child(1) > .ng-binding')
            .should('be.visible')

        //relacionamento
        cy.get('.flex-gt-sm-70 > :nth-child(3)')
            .should('be.visible')

        //telefone
        cy.get('[ng-show="(item.telefone)"]')
            .should('be.visible')

        //email
        cy.get('[ng-show="(item.email)"]')
            .should('be.visible')

        //data inclusão
        cy.get('.layout-align-gt-sm-center-end > .list-title > b')
            .should('be.visible')
            //.and('contain', 'Data Inclusão:')

        //valor da data de inclusão
        cy.get('.layout-align-gt-sm-center-end > .list-title')
            .should('be.visible')
            .and('contain', dataAtual)
    }

    async modalRefGuysEmpty (selector) {

        //título modal 
        cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Referência pessoal')
    
        //botão X
        cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
    
        //campo Nome
        cy.get('#txtNomeRefPes')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
    
        //informação campo Nome
        cy.get('label[for="txtNomeRefPes"]')
            .should('have.text', 'Nome')
    
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
}