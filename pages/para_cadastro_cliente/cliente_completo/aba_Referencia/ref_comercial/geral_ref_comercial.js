import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
         gerarRelacionamento, gerarObservação }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'

export class GeneralRefCommercial {

    constructor(page) {
        this.page = page
    }

    //validar e clicar na aba Comercial, dentro de Referencias
    async clicarAbaRefComercial (selector) {

        //validando botão Comercial
        cy.get('#menu_items_sec > .on')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
            //.and('have.text', 'Comercial')

        cy.intercept('GET', '/views/cliente/refEtapaComercialLista.html').as('api_ref_comercial')
        //clicando botão Comercial
        cy.get('#menu_items_sec > :nth-child(2)')
            .click()
        cy.wait('@api_ref_comercial', { timeout: 40000 })
    }

    //validando informações da tela antes de adicionar qualquer coisa - aba referencia Comercial
    async validarAbaRefComercialVazia (selector) {

        //validando título quando entramos na aba Comercial
        cy.get('h3')
            .should('be.visible')
            .and('have.text', 'Referências / Comercial')

        //validando botão + 
        cy.get('.layout-align-end-end > .md-fab')
            .should('be.visible')  
            .and('not.have.attr', 'disabled')

        //mensagem quando não tem nada adicionado na aba Comercial
        cy.get('.text-align-center')
            .should('be.visible')
            .and('have.text', 'Não foi encontrado nenhum registro')

        cy.get('.btn')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
            //.and('contain', 'SALVAR')
    }

    //clicar no botão + para adicionar uma nova referencia Comercial
    async clicarAddNovaRefComercial (selector) {

        cy.intercept('GET', '/views/cliente/modalClienteRefComercial.html').as('api_modal_referencia_comercial')
        cy.get('.layout-align-end-end > .md-fab')
            .click()
        cy.wait('@api_modal_referencia_comercial', { timeout: 40000 })
    }

    //validar informações do modal Referencia Comercial antes de preencher as informações
    async modalRefComercialVazio (selector) {

        //título modal 
        cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Referência comercial')

        //botão X
        cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //campo Empresa
        cy.get('#txtEmpresaRefCom')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Empresa
        cy.get('label[for="txtEmpresaRefCom"]')
            .should('have.text', 'Empresa')

        //campo Contato
        cy.get('#txtContatoRefCom')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Contato
        cy.get('label[for="txtContatoRefCom"]')
            .should('have.text', 'Contato')

        //campo Telefone
        cy.get('#txtTelefoneRefCom')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Telefone
        cy.get('label[for="txtTelefoneRefCom"]')
            .should('have.text', 'Telefone')

        //campo Email
        cy.get('#txtEmailRefCom')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Email
        cy.get('label[for="txtEmailRefCom"]')
            .should('have.text', 'Email')

        //campo Observação
        cy.get('#txtObsRefCom')
            .should('be.visible')
            .and('have.value', '')
            .and('not.have.attr', 'disabled')

        //informação campo Observação
        cy.get('label[for="txtObsRefCom"]')
            .should('have.text', 'Observação')
        
        //validar botão SALVAR, desabilitado
        cy.get('#btnModalAddRefPessoal')
            .should('be.visible')
            .should('have.attr', 'disabled')
    }

    //clicar para salvar Referencia Comercial
    async clicarSalvarRefComercial (selector) {

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

    // validando mensagem Referencia Comercial incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Comercial
    async messRefComercialIncluidaSucesso (selector) {

        //Card Endereço incluído com sucesso.
        cy.get('.toast-success')
            .should('be.visible')

        //Card Endereço incluído com sucesso. - Aviso
        cy.get('.toast-success > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Card Endereço incluído com sucesso. - Referencia Comercial incluído com sucesso.
        cy.get('.toast-success > .toast-message')
            .should('be.visible')
            .and('have.text', 'Referência Comercial incluída com sucesso.')
    }

    //validando informações que foram adicionadas no cadastro de referencia Comercial
    async infosRefComercialAdicionada (selector) {

        //nome da pessoa
        cy.get('.md-whiteframe-2dp > .ng-scope > :nth-child(1) > .ng-binding')
            .should('be.visible')
        
        //contato
        cy.get('[ng-show="(item.contato)"]')
            .should('be.visible')

        //telefone
        cy.get('[ng-show="(item.telefone)"]')
            .should('be.visible')

        //email
        cy.get('[ng-show="(item.email)"]')
            .should('be.visible')
    }
}
