import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { OrderDiscount } from '../../../pages/pedido/PedidoDecontoPage.js'
import { GeralPedidosPage } from '../../../../pages/pedido/gerais_pedidos.js'

describe('Order for a discounted kit', () => {

    beforeEach(() => {
        cy.visit('/');;
        cy.clearAllSessionStorage();;
        cy.login();; 
        cy.urlAposLogin();
        cy.tituloPagina();
        ProcessoVendaPage.NFe() 
        cy.chooseCliente();
    })

    context('Without delivery/ process 9862 - happy path', () => {
        
        it('1.Order: kit 1862 0 0 with discount Sub (-) / FIXED PRICE', () => {
    
            Product.kitDiscount()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            GeralPedidosPage.compositionKit()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            OrderDiscount.clickButtonDiscount() 
            OrderDiscount.validateModalSub()
            OrderDiscount.aplicarDescontoValorFixo()
            TirarEntrega.freightFirst()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})