import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { EntregaPage } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'

describe('Gerar pedido normal com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFCe() 
        cy.chooseCliente()
    })

    context('Com entrega/ processo 9890 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0 - (Venda local de produto com saldo - com entrega)', () => {
                  
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() 
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
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
            Product.second() 
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() 
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('3.Pedido: produto 1860 0 0 - (Pedido de venda com entrega. Com Entrada + parcelamento.)', () => {
                  
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() 
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
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
})