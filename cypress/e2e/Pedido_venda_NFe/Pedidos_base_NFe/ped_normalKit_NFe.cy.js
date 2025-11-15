import { ProcessSale } from '../../../../pages/pedido/processos/processo_venda.js'
import { Product } from '../../../pages/ProdutoPage'
import { ValidateBalance } from '../../../../pages/pedido/saldo/validar_saldo.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { ThrowDelivery } from '../../../pages/pedido/EntregaPage.js'
import { ChooseInstallmentReceipt } from '../../../../pages/pedido/pagamento/parcelas.js'
import { GeneralPayment } from '../../../../pages/pedido/pagamento/geral_pagamento.js'
import { Receipt } from '../../../../pages/pedido/processos/processo_recebimento.js'
import { GeneralOrder } from '../../../pages/pedido/GeraisPedidosPage.js'

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessSale.NFe() //processo normal
        cy.chooseClient()
    })
  
    context('Sem entrega/ processo 9860 - caminho feliz', () => {
        
        it('1.Pedido: kit 1862 0 0', () => {
                      
            Product.kitFirst()
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            GeneralOrder.compositionKit()
            cy.clickAddProduct()
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
    })
    
    context('Com entrega/processo 9860 - caminho feliz', () => {
        
        it('2.Pedido: kit 1862 0 0', () => {
              
            Product.kitFirst()
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            GeralPedido.compositionKit()
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