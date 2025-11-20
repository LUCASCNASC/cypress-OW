import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { ThrowDelivery } from '../../../pages/pedido/EntregaPage.js'
import { GeneralPayment } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ChooseInstallmentReceipt } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'

describe('Gerar pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.deliveryFutureNFe() //processo entrega futura
        cy.chooseClient()
    })

    context('Sem entrega/ processo 9862 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0', () => {
                      
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA PRODUTO
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            ProcessoRecebPage.main() //PROCESSO INCLUSÃO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
        
        it('2.Pedido: produtos 1860 0 0 e 1870 0 0', () => {
              
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            clicarOKServVinServico.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA PRODUTO
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AdvanceNormal.clickGenerateInstallments()
            GeneralPayment.clicarGerarParcelas() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            ProcessoRecebPage.main() //PROCESSO INCLUSÃO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final() 
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
    
    context('Com entrega/ processo 9862 - caminho feliz', () => {

        it('3.Pedido: produto 1860 0 0', () => {
             
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            ProcessoRecebPage.main() //PROCESSO INCLUSÃO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })    
        
        it('4.Pedido: produtos 1860 0 0 e 1870 0 0', () => {
                   
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter() //TRANSPORTADORA
            AdvanceNormal.toInstallments() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main() //PROCESSO INCLUSÃO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final() 
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })  
    })
})