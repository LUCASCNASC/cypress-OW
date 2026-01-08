import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { ServicosAvulsosPage } from '../../../pages/pedido/ServicosAvulsosPage.js'

describe('Venda de serviço avulso', () => {

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

            ServicosAvulsosPage.productServiceLoose()
            ServicosAvulsosPage.chooseServiceSearch()
            ServicosAvulsosPage.messItemAddedSucess()
            ServicosAvulsosPage.clickCartShopping() 
            ServicosAvulsosPage.serviceAddedCart()
            ServicosAvulsosPage.buttonAdvanceOrder()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
})