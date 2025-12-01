import { ProcessoVendaPage } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { ServicosAvulsosPage } from '../../../pages/pedido/ServicosAvulsosPage.js'

describe('Venda de serviço avulso', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVendaPage.saleServiceLoose() //processo serviço avulso
        cy.chooseCliente()
    })

    context('Processo 9888 - caminho feliz', () => {

        it('1.Pedido de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            ServicosAvulsosPage.productServiceLoose() //PRODUTO
            ServicosAvulsosPage.chooseServiceSearch()
            ServicosAvulsosPage.messItemAddedSucess()
            ServicosAvulsosPage.clickCartShopping() //CARRINHO COMPRAS
            ServicosAvulsosPage.serviceAddedCart()
            ServicosAvulsosPage.buttonAdvanceOrder()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})