import { mensagemAguardeCarregando, clicarLupaPesquisaCliente, numeroDescricaoCPFpesquisado, numeroDescricaoCNPJpesquisado,
         clicarCPFPesquisado, clicarCNPJPesquisado, inserirCPF, digitarNovamenteCPF, inserirCNPJ, digitarNovamenteCNPJ,
         inserirDescricaoCPF, digitarNovamenteDescricaoCPF, inserirDescricaoCNPJ, digitarNovamenteDescricaoCNPJ, cardClienteValidar} from '../../support/para_cadastro_cliente/para_pesquisa_cliente';

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
    
            inserirCPF()
            clicarLupaPesquisaCliente()
            cy.wait(1000)
            cardClienteValidar()
            digitarNovamenteCPF()
            clicarCPFPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)
            numeroDescricaoCPFpesquisado()
        }) 

        it('2-Pesquisa por número CNPJ', () => {
    
            inserirCNPJ()
            clicarLupaPesquisaCliente()
            cy.wait(1000)
            cardClienteValidar()
            digitarNovamenteCNPJ()
            clicarCNPJPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)
            numeroDescricaoCNPJpesquisado()
        }) 
    })

    context('Pesquisa cliente por descrição', () => {

        it('3-Pesquisa por descrição CPF', () => {
    
            inserirDescricaoCPF()
            clicarLupaPesquisaCliente()
            cy.wait(1000)
            cardClienteValidar()
            digitarNovamenteDescricaoCPF()
            clicarCPFPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)
            numeroDescricaoCPFpesquisado()
        }) 

        it('4-Pesquisa por descrição CNPJ', () => {
    
            inserirDescricaoCNPJ()
            clicarLupaPesquisaCliente()
            cy.wait(1000)
            cardClienteValidar()
            digitarNovamenteDescricaoCNPJ
            clicarCNPJPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)
            numeroDescricaoCNPJpesquisado()
        }) 
    })
})