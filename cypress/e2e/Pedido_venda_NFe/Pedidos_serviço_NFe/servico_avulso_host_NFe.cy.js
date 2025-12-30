import { ProcessoVendaPage } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { ServicosAvulsosPage } from '../../../pages/pedido/ServicosAvulsosPage.js'

//Para este cenário, é necessário fazer update na coluna dataultimaatualizacao, da tabela glb.servicofaixavalorfixo
describe('Venda de serviço avulso Host - 104', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.saleServiceLoose()
        cy.chooseCliente()
    })

    context('Processo 9888 - caminho feliz', () => {

        it('1.Pedido de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            ServicosAvulsosPage.clickMenuOpcoes()
            ServicosAvulsosPage.clickServiceMenu()
            ServicosAvulsosPage.productServiceHost()
            ServicosAvulsosPage.chooseServiceSearch()
            ServicosAvulsosPage.chooseValueRecharge()
            ServicosAvulsosPage.clickCartShopping()
            ServicosAvulsosPage.buttonAdvanceOrder()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.one()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
})