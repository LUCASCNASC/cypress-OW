import { PesquisaClientePage } from '../../pages/cadastro_cliente/PesquisaClientePage.js'

describe('Register customer', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.validateTitlePage();
    })

    context('Search customer by number', () => {

        it('1.Search by CPF number', () => {
    
            PesquisaClientePage.fillCPF();
            PesquisaClientePage.clickGlassPesquisaClientePage();
            PesquisaClientePage.cardClientValidate();
            PesquisaClientePage.typeAgainCPF();
            PesquisaClientePage.clickCPFSearch();
            PesquisaClientePage.messWaitLoading();
            PesquisaClientePage.numberDescripCPFSearch();
        }) 

        it('2.Search by CNPJ number', () => {

            PesquisaClientePage.fillCNPJ();
            PesquisaClientePage.clickGlassPesquisaClientePage();
            PesquisaClientePage.cardClientValidate();
            PesquisaClientePage.typeAgainCNPJ();
            PesquisaClientePage.clickGlassPesquisaClientePage();
            PesquisaClientePage.clickCNPJSearch();
            PesquisaClientePage.messWaitLoading();
            PesquisaClientePage.numberDescripCNPJSearch();
        }) 
    })

    context('Search customer by description', () => {

        it('3.Search by CPF description', () => {

            PesquisaClientePage.fillDescripCPF();
            PesquisaClientePage.clickGlassPesquisaClientePage();
            PesquisaClientePage.cardClientValidate();
            PesquisaClientePage.typeAgainCPF();
            PesquisaClientePage.clickCPFSearch();
            PesquisaClientePage.messWaitLoading();
            PesquisaClientePage.numberDescripCPFSearch();
        }) 

        it('4.Search by CNPJ description', () => {

            PesquisaClientePage.typeAgainDescriptCNPJ();
            PesquisaClientePage.clickGlassPesquisaClientePage();
            PesquisaClientePage.cardClientValidate();
            PesquisaClientePage.typeAgainCNPJ();
            PesquisaClientePage.clickCNPJSearch();
            PesquisaClientePage.messWaitLoading();
            PesquisaClientePage.numberDescripCNPJSearch();
        }) 
    })
})