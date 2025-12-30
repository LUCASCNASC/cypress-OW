import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'


describe('Pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFe() 
        cy.chooseCliente()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0 - (Venda local de produto com saldo - sem entrega)', () => {

            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produtos 1860 0 0 e 1870 0 0', () => {
               
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() 
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() 
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('3.Pedido: produto 1860 0 0 - (Pedido de venda sem entrega. Com Entrada + parcelamento.)', () => {

            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            GeralPagamentoPage.chooseEntryFormPayment() 
            GeralPagamentoPage.clickGeneratePayment()
            GeralPagamentoPage.clickGenerateInstallments()
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.one()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })

    context('Com entrega/ processo 9860 - caminho feliz', () => {

        it('4.Pedido: produto 1860 0 0 - (Venda local de produto com saldo - com entrega)', () => {
                      
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main() 
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('5.Pedido: produtos 1860 0 0 e 1870 0 0', () => {
                  
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main() 
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('6.Pedido: produto 1860 0 0 - (Pedido de venda com entrega. Com Entrada + parcelamento.)', () => {
               
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.chooseEntryFormPayment() 
            GeralPagamentoPage.clickGeneratePayment()
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