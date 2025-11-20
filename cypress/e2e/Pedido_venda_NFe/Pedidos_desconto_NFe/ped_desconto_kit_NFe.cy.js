import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { OrderDiscount } from '../../../pages/pedido/PedidoDecontoPage.js'
import { GeralPedidosPage } from '../../../../pages/pedido/gerais_pedidos.js'

describe('Gerar pedido de venda Kit com desconto', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFe() //processo normal
        cy.chooseClient()
    })
  
    context('Sem entrega/ processo 9862 - caminho feliz', () => {
        
        it('1.Pedido: kit 1862 0 0 com desconto Sub (-) / VALOR FIXO', () => {
    
            Product.kitDiscount() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            GeralPedidosPage.compositionKit()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            OrderDiscount.clickButtonDiscount() //DESCONTO
            OrderDiscount.validateModalSub()
            OrderDiscount.aplicarDescontoValorFixo()
            TirarEntrega.freightFirst()
            AvancarPage.toInstallments()
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