import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { GeneralDelivery } from '../../../pages/pedido/EntregaPage.js'
import { GeneralPayment } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ChooseInstallmentReceipt } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'

describe('Gerar pedido com financeiro na baixa com entrega', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.financePaymentNFCe() //processo financeiro na baixa
        cy.chooseClient()
    })
    
    context('Com entrega/ processo 9892 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0', () => {
                      
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsOnlyTransporter()
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

        it('2.Pedido: produtos 1860 0 0 e 1870 0 0', () => {
                
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            Product.second() //SEGUNDO PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            cy.selectProductSearch()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter() 
            GeneralDelivery.modalInconsOnlyTransporter()
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