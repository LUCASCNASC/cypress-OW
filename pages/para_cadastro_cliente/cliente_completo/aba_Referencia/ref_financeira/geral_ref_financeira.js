import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
         gerarRelacionamento, gerarObservação }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'


//------referencia financeira - funções de geração de dados

//Início exp. crédito
function gerarDataReferenciaFinanceira() {
    // Data inicial: 01/01/2000
    const dataInicio = new Date('2000-01-01');
  
    // Data atual
    const dataAtual = new Date();
  
    // Gerar um valor aleatório entre as duas datas (em milissegundos)
    const dataAleatoria = new Date(dataInicio.getTime() + Math.random() * (dataAtual.getTime() - dataInicio.getTime()));
  
    // Extrair o dia, mês e ano
    const dia = String(dataAleatoria.getDate()).padStart(2, '0');
    const mes = String(dataAleatoria.getMonth() + 1).padStart(2, '0'); // Meses começam do zero
    const ano = dataAleatoria.getFullYear();
  
    // Retornar no formato dd/mm/aaaa
    return `${dia}/${mes}/${ano}`;
}

//Valor prestação
function gerarValorDuasCasasAposVirgula() {
    // Gerar um número aleatório entre 100 e 999 (3 dígitos)
    const valorInteiro = Math.floor(Math.random() * 900) + 100;

    // Gerar uma parte decimal aleatória com duas casas decimais
    const valorDecimal = (Math.random()).toFixed(2).substring(2); // Gera as duas casas decimais após a vírgula

    // Concatenar a parte inteira com a parte decimal
    const valorFinal = `${valorInteiro}.${valorDecimal}`;

    return valorFinal;
}

export class geralRefFinanceira {

    constructor(page) {
        this.page = page
    }

    //validar e clicar na aba Financeira, dentro de Referencias
    async clicarAba (selector) {

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
    async validarAbaVazia (selector) {

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
    async clicarAddNova (selector) {

        cy.intercept('GET', '/views/cliente/modalClienteRefFinanc.html').as('api_modal_referencia_financeira')
        cy.get('.layout-align-end-end > .md-fab')
            .click()
        cy.wait('@api_modal_referencia_financeira', { timeout: 40000 })
    }

    //validar informações do modal Referencia Financeira antes de preencher as informações
    async modalVazio (selector) {

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
            .should('have.text', 'Plano experiência')

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
            .and('have.attr', 'disabled')
    }

    //clicar para salvar Referencia Financeira
    async clicarSalvar (selector) {

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

    // validando mensagem Referencia Financeira incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Financeira
    async messRefFinanceiraIncluidaSucesso (selector) {

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
            .and('have.text', 'Referência Financeira incluída com sucesso.')
    }

    //validando informações que foram adicionadas no cadastro de referencia Financeira
    async infosRefFinanceiraAdicionada (selector) {

        //data
        cy.get('.flex-gt-sm-70 > :nth-child(1) > .ng-binding')
            .should('be.visible')
        
        //plano de experiencia
        cy.get('[ng-show="(item.planoexperiencia)"]')
            .should('be.visible')

        //local de experiencia
        cy.get('[ng-show="(item.localexperiencia)"]')
            .should('be.visible')

        //valor prestação
        cy.get('.layout-align-gt-sm-center-end > .list-title > b')
            .should('be.visible')

        //quantidade do valor prestação 
        cy.get('.layout-align-gt-sm-center-end > .list-title')
            .should('be.visible')
    }
}