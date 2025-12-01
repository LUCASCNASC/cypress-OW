import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { OrderDiscount } from '../../../pages/pedido/PedidoDecontoPage.js'

describe('Gerar pedido de venda com desconto', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFe() //processo normal
        cy.chooseCliente()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1.Pedido: produto 1912 0 0 com desconto Sub (-) / R$', () => {

            Product.discountNumber() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            OrderDiscount.clickButtonDiscount() //DESCONTO
            OrderDiscount.validateModalSub()
            OrderDiscount.applyDiscountR$()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.one()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto 1913 0 0 com desconto Sub (-) / % (Porcentagem)', () => {

            Product.discountPercentage() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            OrderDiscount.clickButtonDiscount() //DESCONTO
            OrderDiscount.validateModalSub()
            OrderDiscount.applyDiscountPencentage()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.one()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('3.Pedido: produto 1914 0 0 com desconto Sub (-) / VALOR FIXO', () => {

            Product.discountValueFixed() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            OrderDiscount.clickButtonDiscount() //DESCONTO
            OrderDiscount.validateModalSub()
            OrderDiscount.applyDiscountVF()
            TirarEntrega.freightFirst()() //ENTREGA
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.one()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})