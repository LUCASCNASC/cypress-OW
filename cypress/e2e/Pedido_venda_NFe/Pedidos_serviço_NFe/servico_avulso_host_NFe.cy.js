import { ProcessoVendaPage } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { GeneralPayment } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ChooseInstallmentReceipt } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { OrderServiceLoose } from '../../../pages/pedido/ServicosAvulsosPage.js'

//Para este cenário, é necessário fazer update na coluna dataultimaatualizacao, da tabela glb.servicofaixavalorfixo
describe('Venda de serviço avulso Host - 104', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.saleServiceLoose() //processo serviço avulso
        cy.chooseClient()
    })

    context('Processo 9888 - caminho feliz', () => {

        it('1.Pedido de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            OrderServiceLoose.iconMenuOptions()
            OrderServiceLoose.clickServiceMenu()
            OrderServiceLoose.productServiceHost() //PRODUTO
            OrderServiceLoose.chooseServiceSearch()
            OrderServiceLoose.chooseValueRecharge()
            OrderServiceLoose.clickCartShopping() //CARRINHO COMPRAS
            OrderServiceLoose.buttonAdvanceOrder()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.one()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})