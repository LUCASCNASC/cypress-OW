import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
    gerarRelacionamento, gerarObservação }  from '../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../gerarDadosPIX'

//--------REFERENCIAS - REFERENCIA FINANCEIRA -------

//validar e clicar na aba Financeira, dentro de Referencias
export function clicarAbaRefFinanceira (selector) {

//validando botão Financeira
cy.get('#menu_items_sec > .on')
   .should('be.visible')
   .and('not.have.attr', 'disabled')
   //.and('have.text', 'Financeira')

cy.intercept('GET', '/views/cliente/refEtapaFinanceiraLista.html').as('api_ref_financeira')
//clicando botão Financeira
cy.get('#menu_items_sec > :nth-child(4)')
   .click()
cy.wait('@api_ref_financeira', { timeout: 40000 })
}

//validando informações da tela antes de adicionar qualquer coisa - aba referencia Financeira
export function validarAbaRefFinanceiraVazia (selector) {

//validando título quando entramos na aba Financeira
cy.get('h3')
   .should('be.visible')
   .and('have.text', 'Referências / Financeira')

//validando botão + 
cy.get('.layout-align-end-end > .md-fab')
   .should('be.visible')  
   .and('not.have.attr', 'disabled')

//mensagem quando não tem nada adicionado na aba Financeira
cy.get('.text-align-center')
   .should('be.visible')
   .and('have.text', 'Não foi encontrado nenhum registro')

cy.get('.btn')
   .should('be.visible')
   .and('not.have.attr', 'disabled')
   //.and('contain', 'SALVAR')
}

//clicar no botão + para adicionar uma nova referencia Financeira
export function clicarAddNovaRefFinanceira (selector) {

    cy.intercept('GET', '/views/cliente/modalClienteRefFinanc.html').as('api_modal_referencia_financeira')
    cy.get('.layout-align-end-end > .md-fab')
        .click()
    cy.wait('@api_modal_referencia_financeira', { timeout: 40000 })
}

//validar informações do modal Referencia Financeira antes de preencher as informações
export function modalRefFinanceiraVazio (selector) {

    //título modal 
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Referência financeira')

    //botão X
    cy.get('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //ícone calendário
    cy.get('.md-datepicker-button')
        .should('be.visible')
        .and('not.have.attr', 'disabled') 

    //campo Início exp. crédito
    cy.contains('Início exp. crédito')
        .should('be.visible')
    
    //informativo campo Início exp. crédito
    cy.get('label[for="txtIniExpCred"]')
        .should('have.text', 'Início exp. crédito')

    //campo Local Experiência
    cy.get('#txtLocExp')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informativo campo Local Experiência
    cy.get('label[for="txtLocExp"]')
        .should('have.text', 'Local Experiência')

    //campo Plano experiência
    cy.get('#txtPlExp')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informativo campo Plano experiência
    cy.get('label[for="txtPlExp"]')
        .should('have.text', 'Local Experiência')

    //informativo campo possui cartão
    cy.get('label[for="txtPossuiCartao"]')
        .should('have.text', 'Possui cartão')

    //campo Valor prestação
    cy.get('#txtVlrPrest')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informativo campo Valor prestação
    cy.get('label[for="txtVlrPrest"]')
        .should('have.text', 'Valor prestação')
    
    //validar botão SALVAR, desabilitado
    cy.get('#btnModalAddRefPessoal')
        .should('be.visible')
        .should('have.attr', 'disabled')
}