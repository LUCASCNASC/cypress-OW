import { SearchClient } from '../../../pages/para_cadastro_cliente/para_pesquisa_cliente'

describe('Cadastrar cliente', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Pesquisa cliente por número', () => {

        it('1-Pesquisa por número CPF', () => {
    
            SearchClient.inserirCPF()
            SearchClient.clicarLupaPesquisaCliente()
            SearchClient.cardClienteValidar()
            SearchClient.digitarNovamenteCPF()
            SearchClient.clicarCPFPesquisado()
            SearchClient.mensagemAguardeCarregando()
            SearchClient.numeroDescricaoCPFpesquisado()
        }) 

        it('2-Pesquisa por número CNPJ', () => {

            SearchClient.inserirCNPJ()
            SearchClient.clicarLupaPesquisaCliente()
            SearchClient.cardClienteValidar()
            SearchClient.digitarNovamenteCNPJ()
            SearchClient.clicarLupaPesquisaCliente()
            SearchClient.clicarCNPJPesquisado()
            SearchClient.mensagemAguardeCarregando()
            SearchClient.numeroDescricaoCNPJpesquisado()
        }) 
    })

    context('Pesquisa cliente por descrição', () => {

        it('3-Pesquisa por descrição CPF', () => {

            SearchClient.inserirDescricaoCPF()
            SearchClient.clicarLupaPesquisaCliente()
            SearchClient.cardClienteValidar()
            SearchClient.digitarNovamenteCPF()
            SearchClient.clicarCPFPesquisado()
            SearchClient.mensagemAguardeCarregando()
            SearchClient.numeroDescricaoCPFpesquisado()
        }) 

        it('4-Pesquisa por descrição CNPJ', () => {

            SearchClient.inserirDescricaoCNPJ()
            SearchClient.clicarLupaPesquisaCliente()
            SearchClient.cardClienteValidar()
            SearchClient.digitarNovamenteCNPJ()
            SearchClient.clicarCNPJPesquisado()
            SearchClient.mensagemAguardeCarregando()
            SearchClient.numeroDescricaoCNPJpesquisado()
        }) 
    })
})