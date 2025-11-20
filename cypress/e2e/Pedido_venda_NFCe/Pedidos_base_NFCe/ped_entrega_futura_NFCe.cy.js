import { ProcessoVendaPage } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedidos/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { GeneralDelivery } from '../../../pages/pedido/EntregaPage.js'
import { GeneralPayment } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ChooseInstallmentReceipt } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { ReceiptPromotion } from '../../../pages/pedido/processos/ProcessoRecebPagePromoPage.js'

describe('Gerar pedido de entrega futura com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.deliveryFutureNFCe() //processo entrega futura
        cy.chooseClient()
    })
    
    context('Com entrega/ processo 9891 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0', () => {
                      
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA)
            GeneralDelivery.chooseTransporter()
            AdvanceNormal.installmentDelivery()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            ReceiptPromotion.pagPrincipal()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })    
        
        it('2.Pedido: produtos 1860 0 0 e 1870 0 0', () => {
              
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            Product.second() //PRODUTO //SEGUNDO PRODUTO
            ValidateBalance.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter() 
            GeneralDelivery.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeneralDelivery.chooseTransporter()
            AdvanceNormal.installmentDelivery() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final() 
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })  
    })
})