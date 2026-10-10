import { PesquisaClientePage } from '../../pages/cadastro_cliente/PesquisaClientePage.js'

describe('register customer', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.validateTitlePage();
    })

    context('search customer by number', () => {

        it('search by CPF number', () => {
    
            PesquisaClientePage.fillCPF();
            PesquisaClientePage.clickGlassPesquisaClientePage();
            PesquisaClientePage.cardClientValidate();
            PesquisaClientePage.typeAgainCPF();
            PesquisaClientePage.clickCPFSearch();
            PesquisaClientePage.messWaitLoading();
            PesquisaClientePage.numberDescripCPFSearch();
        }) 

        it('search by CNPJ number', () => {

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

    context('search customer by description', () => {

        it('search by CPF description', () => {

            PesquisaClientePage.fillDescripCPF();
            PesquisaClientePage.clickGlassPesquisaClientePage();
            PesquisaClientePage.cardClientValidate();
            PesquisaClientePage.typeAgainCPF();
            PesquisaClientePage.clickCPFSearch();
            PesquisaClientePage.messWaitLoading();
            PesquisaClientePage.numberDescripCPFSearch();
        }) 

        it('search by CNPJ description', () => {

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
