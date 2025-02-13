import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../gerarDados';
import { gerarChavePixTelefone } from '../../gerarDadosPIX'


export class geralClienteSimples {

    constructor(page) {
        this.page = page
    }

    //Validar e clicar no menu de opções
    async iconeMenuOpcoes (selector) {

        //Ícone do menu de opções
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
                
        //Clicar ni ícone do menu de opções
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .click({force:true})
    }

    //Escolher opção cliente no menu de opções
    async opcaoClienteCompleto (selector) {

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .should('have.attr', 'aria-label', 'Cliente completo')

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .scrollIntoView()
            .click({force:true})
    }

    //Validar e clicar no botão para salvar cadastro de cliente
    async clicarSalvarCliente (selector) {

        //Botão SALVAR
        cy.get('.btn')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('not.have.attr', 'disabled')
        
        //Clicar no botão SALVAR
        cy.get('.btn')
            .click({force:true})
    }

    //validar botão salvar sem ter os campos obrigatórios, ou seja, tem que estar desabilitado
    async botaoSalvarDesabilitado (selector) {

        //Validando botão SALVAR, antes de preencher os campos obrigatórios
        cy.get('#btnModalAddEndereco')
            .should('be.visible')
            .and('not.have.attr', 'not.disabled')
    }

    //clicar para salvar cadastro de cliente completo
    async clicarSalvarClienteCompleto (selector) {

        cy.get('.btn > .ng-scope')
            .click({force:true})
    }

    //validar menssagem Um endereço do tipo padrão é obrigatório, quanto tento salvar cadastro sem informar endereço
    async messAlertaEnderecoObrigatorio (selector) {

        //Card Um endereço do tipo padrão é obrigatório
        cy.get('.toast')
            .should('be.visible')

        //Card Um endereço do tipo padrão é obrigatório - Alerta
        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text', 'Alerta')

        //Card Um endereço do tipo padrão é obrigatório - Um endereço do tipo padrão é obrigatório.
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text', 'Um endereço do tipo padrão é obrigatório.')
    }

    //validando modal de Aguarde carregando.. - após clicar para salvar o cadastro 
    async modalAguardeCarregando (selector) {

        //Modal Aguarde carregando...
        cy.get('.layout-align-center-center > h3')
            .should('be.visible')
            .and('have.text', 'Aguarde carregando...')
    }

    //validando mensagem Registro salvo com sucesso! - após clicar para salvar o cadastro 
    async messRegistroSalvoSucesso (selector) {

        //Mensagem Registro salvo com sucesso!
        cy.get('.toast-success')
            .should('be.visible')

        //Mensagem Registro salvo com sucesso! - Aviso
        cy.get(':nth-child(1) > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Mensagem Registro salvo com sucesso! - Registro salvo com sucesso!
        cy.get('.toast-success > .toast-message')
            .should('be.visible')
            .and('have.text', 'Registro salvo com sucesso!')
    }

    //dentro do cadastro de cliente completo, clicar no menu para aparecer as opções dentro do cadastro
    async clicarMenuCadastroClienteCompleto (selector) {

        cy.get('#menu_click_pri')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.get('#menu_click_pri')
            .click()
    }

    //validar e clicar na aba Referencias - mais de um arquivo usa essa função, então precisamos deixar aqui
    async clicarAbaReferencias (selector) {

        //validando nome da aba
        cy.get('#menu_items_pri > :nth-child(5)')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
            //.and('have.text', 'Referências')

        cy.intercept('GET', '/views/cliente/refEtapaPessoalLista.html').as('api_referencias')
        //clicar para entrar na aba referencias
        cy.get('#menu_items_pri > :nth-child(5)')
            .click()
        cy.wait('@api_referencias', { timeout: 40000 })
    }
}