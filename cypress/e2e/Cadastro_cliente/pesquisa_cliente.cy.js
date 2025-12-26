import { PesquisaClientePage } from '../../pages/cadastro_cliente/PesquisaClientePage.js'

describe('Cadastrar cliente', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Pesquisa cliente por número', () => {

        it('1.Pesquisa por número CPF', () => {
    
            PesquisaClientePage.fillCPF()
            PesquisaClientePage.clickGlassPesquisaClientePage()
            PesquisaClientePage.cardClientValidate()
            PesquisaClientePage.typeAgainCPF()
            PesquisaClientePage.clickCPFSearch()
            PesquisaClientePage.messWaitLoading()
            PesquisaClientePage.numberDescripCPFSearch()
        }) 

        it('2.Pesquisa por número CNPJ', () => {

            PesquisaClientePage.fillCNPJ()
            PesquisaClientePage.clickGlassPesquisaClientePage()
            PesquisaClientePage.cardClientValidate()
            PesquisaClientePage.typeAgainCNPJ()
            PesquisaClientePage.clickGlassPesquisaClientePage()
            PesquisaClientePage.clickCNPJSearch()
            PesquisaClientePage.messWaitLoading()
            PesquisaClientePage.numberDescripCNPJSearch()
        }) 
    })

    context('Pesquisa cliente por descrição', () => {

        it('3.Pesquisa por descrição CPF', () => {

            PesquisaClientePage.fillDescripCPF()
            PesquisaClientePage.clickGlassPesquisaClientePage()
            PesquisaClientePage.cardClientValidate()
            PesquisaClientePage.typeAgainCPF()
            PesquisaClientePage.clickCPFSearch()
            PesquisaClientePage.messWaitLoading()
            PesquisaClientePage.numberDescripCPFSearch()
        }) 

        it('4.Pesquisa por descrição CNPJ', () => {

            PesquisaClientePage.typeAgainDescriptCNPJ()
            PesquisaClientePage.clickGlassPesquisaClientePage()
            PesquisaClientePage.cardClientValidate()
            PesquisaClientePage.typeAgainCNPJ()
            PesquisaClientePage.clickCNPJSearch()
            PesquisaClientePage.messWaitLoading()
            PesquisaClientePage.numberDescripCNPJSearch()
        }) 
    })
})