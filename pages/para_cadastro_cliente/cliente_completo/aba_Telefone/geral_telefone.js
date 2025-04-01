import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX'

export class GeneralRefPhone {

    constructor(page) {
        this.page = page
    }

    //Validar e clicar na aba Telefone
    async clicarAbaTelefone (selector) {

        //Validando aba Telefones
        cy.get('#menu_items_pri > :nth-child(4)')
            .should('be.visible')
            .and('have.text', 'Telefones')

        cy.intercept('GET', '/services/v3/dados_tabela/tipotelefone').as('api_cliente_completo_telefones')
        //Clicar na aba Telefones
        cy.get('#menu_items_pri > :nth-child(4)')
            .click()
        cy.wait('@api_cliente_completo_telefones', { timeout: 40000 })
    }

    //botão + para adicionar um novo Telefone
    async clicarAdicionarNovoTelefone (selector) {

        //Botão +, para adicionar Rota
        cy.get('.layout-align-end-end > .md-fab')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.intercept('GET', '/views/cliente/ModalClienteTelefone.html').as('api_ModalClienteTelefone')
        //Botão +, para adicionar Rota
        cy.get('.layout-align-end-end > .md-fab')
            .click()
        cy.wait('@api_ModalClienteTelefone', { timeout: 40000 })
    }

    //validar informações do modal Telefone enquanto ainda está vazio
    async modalTelefoneVazioValidar (selector) {

        //Card Telefone
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Telefone')

        //Card Telefone - botão X
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Campo Tipo de telefone - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtTpTel"]')
            .should('have.text', 'Tipo de telefone')

        //Card Telefone - campo tipo de telefone
        cy.get('#txtTpTel')
            .should('be.visible')
            .and('have.value', '')

        //Campo Número - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtNumTel"]')
            .should('have.text', 'Número')

        //Card Telefone - campo número
        cy.get('#txtNumTel')
            .should('be.visible')
            .and('have.value', '')

        //Campo Ramal - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtRamalTel"]')
            .should('have.text', 'Ramal')

        //Card Telefone - campo ramal
        cy.get('#txtRamalTel')
            .should('be.visible')
            .and('have.value', '')

        //Card Telefone - botão SALVAR
        cy.get('#btnModalAddTel')
            .should('be.visible')
            .and('not.have.attr', 'not.disabled')
    }

    //clicar no botão salvar telefone
    async clicarSalvarTelefone (selector) {

        //Card Telefone - botão SALVAR - depois de preencher os campo obrigatório
        cy.get('#btnModalAddTel')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Card Telefone - clicar botão SALVAR - depois de preencher os campo obrigatório
        cy.get('#btnModalAddTel')
            .click({force:true})
    }

    //validando informações que foram adicionadas no cadastro de telefone
    async infosTelefoneAdicionado (selector) {

        //Card de endereço adicionado
        cy.get('.md-whiteframe-2dp')
            .should('be.visible')
            .and('contain', 'Padrão')
            .and('contain', '(44)')
            .and('contain', '435')
    }

    //Validar mensagem de endereço incluído com sucesso
    async messTelefoneIncluidoSucesso (selector) {

        //Card Endereço incluído com sucesso.
        cy.get('.toast-success')
            .should('be.visible')

        //Card Endereço incluído com sucesso. - Aviso
        cy.get(':nth-child(1) > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
        cy.get('.toast-success > .toast-message')
            .should('be.visible')
            .and('have.text', 'Telefone incluído com sucesso.')
    }
}