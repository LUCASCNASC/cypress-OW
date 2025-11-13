import { ProcessSale } from '../../../../pages/pedido/processos/processo_venda.js'
import { Product } from '../../../../pages/produtos/produtos.js'
import { ValidateBalance } from '../../../../pages/pedido/saldo/validar_saldo.js'
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { GeneralDelivery, ThrowDelivery, ThrowAssembly } from '../../../pages/pedido/EntregaPage.js'
import { GeneralPayment } from '../../../../pages/pedido/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/pedido/pagamento/parcelas.js'
import { GeneralPayment } from '../../../../pages/pedido/pagamento/geral_pagamento.js'
import { Receipt } from '../../../../pages/pedido/processos/processo_recebimento.js'

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessSale.financePaymentNFe() //processo financeiro na baixa
        cy.chooseClient()
    })
  
    context('Sem entrega/ processo 9863 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0', () => {
                 
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            Receipt.main()
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
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AdvanceNormal.toInstallments() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
    
    context('Com entrega/ processo 9863 - caminho feliz', () => {

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
            Receipt.main()
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
            AdvanceNormal.toTransporter()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})