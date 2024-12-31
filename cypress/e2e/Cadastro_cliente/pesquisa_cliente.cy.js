import { mensagemAguardeCarregando, clicarLupaPesquisaCliente, botaoXCardCliente, tituloCardClientes, textoInformativoClienteBusca, 
         botaoCadastrarNovoCliente, botaoComandoVoz, campoDigitarCliente, numeroDescricaoCPFpesquisado, numeroDescricaoCNPJpesquisado,
         clicarCPFPesquisado, clicarCNPJPesquisado, inserirCPF, digitarNovamenteCPF, inserirCNPJ, digitarNovamenteCNPJ,
         inserirDescricaoCPF, digitarNovamenteDescricaoCPF, inserirDescricaoCNPJ, digitarNovamenteDescricaoCNPJ} from '../../support/para_cadastro_cliente/para_pesquisa_cliente';

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
            cy.wait(800)
            clicarLupaPesquisaCliente()
            cy.wait(2000)
            tituloCardClientes()
            botaoXCardCliente()
            textoInformativoClienteBusca()
            botaoCadastrarNovoCliente()
            botaoComandoVoz()
            campoDigitarCliente()
            digitarNovamenteCPF()
            clicarCPFPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)
            numeroDescricaoCPFpesquisado()
        }) 

        it('2-Pesquisa por número CNPJ', () => {
    
            inserirCNPJ()
            cy.wait(800)
            clicarLupaPesquisaCliente()
            cy.wait(2000)
            tituloCardClientes()
            botaoXCardCliente()
            textoInformativoClienteBusca()
            botaoCadastrarNovoCliente()
            botaoComandoVoz()
            campoDigitarCliente()
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
            cy.wait(800)
            clicarLupaPesquisaCliente()
            cy.wait(2000)
            tituloCardClientes()
            botaoXCardCliente()
            textoInformativoClienteBusca()
            botaoCadastrarNovoCliente()
            botaoComandoVoz()
            campoDigitarCliente()
            digitarNovamenteDescricaoCPF()
            clicarCPFPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)
            numeroDescricaoCPFpesquisado()
        }) 

        it('4-Pesquisa por descrição CNPJ', () => {
    
            inserirDescricaoCNPJ()
            cy.wait(800)
            clicarLupaPesquisaCliente()
            cy.wait(2000)
            tituloCardClientes()
            botaoXCardCliente()
            textoInformativoClienteBusca()
            botaoCadastrarNovoCliente()
            botaoComandoVoz()
            campoDigitarCliente()
            digitarNovamenteDescricaoCNPJ
            clicarCNPJPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)
            numeroDescricaoCNPJpesquisado()
        }) 
    })
})