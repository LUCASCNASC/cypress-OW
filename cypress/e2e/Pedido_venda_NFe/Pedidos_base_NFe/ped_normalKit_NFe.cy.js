import { ProcessSale } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { Product } from '../../../../pages/produtos/produtos.js'
import { ValidateBalance } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Service, ValidateService } from '../../../pages/para_pedidos/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/para_pedidos/AvancarPage.js'
import { GeneralDelivery, ThrowDelivery, ThrowAssembly } from '../../../pages/para_pedidos/EntregaPage.js'
import { ChooseInstallmentReceipt } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { GeneralPayment } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { Receipt } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { GeneralOrder } from '../../../pages/para_pedidos/GeraisPedidosPage.js'

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