import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'

describe('Pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.deliveryFutureNFe() 
        cy.chooseCliente()
    })

    context('Sem entrega/ processo 9862 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0', () => {
                      
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
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
            cy.clickVoltageProduct()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            clicarOKServVinServico.clickOKServiceLinked()
            TirarEntrega.freightFirst() 
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() 
            AvancarPage.clickGenerateInstallments()
            GeralPagamentoPage.clicarGerarParcelas() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main() 
            ParcelasPage.two()
            AvancarPage.final() 
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
    
    context('Com entrega/ processo 9862 - caminho feliz', () => {

        it('3.Pedido: produto 1860 0 0', () => {
             
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
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
        
        it('4.Pedido: produtos 1860 0 0 e 1870 0 0', () => {
                   
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
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
    })
})