import { ProcessSale } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { Product } from '../../../../pages/produtos/prd_normal.js'
import { ValidateBalance } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Service, ValidateService } from '../../../../pages/para_pedidos/servicos/servicos.js'
import { AdvanceNormal } from '../../../../pages/para_pedidos/botoes/avancar_normal.js'
import { ThrowDelivery, ThrowAssembly } from '../../../../pages/para_pedidos/entrega/tirar_entrega_montagem.js'
import { GeneralPayment } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Receipt } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { OrderDiscount } from '../../../../pages/para_pedidos/para_pedido_desconto.js'
import { GeneralOrder } from '../../../../pages/para_pedidos/gerais_pedidos.js'

describe('Gerar pedido de venda Kit com desconto', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessSale.NFe() //processo normal
        cy.chooseClient()
    })
  
    context('Sem entrega/ processo 9862 - caminho feliz', () => {
        
        it('1.Pedido: kit 1862 0 0 com desconto Sub (-) / VALOR FIXO', () => {
    
            Product.kitDiscount() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            GeneralOrder.compositionKit()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            OrderDiscount.clickButtonDiscount() //DESCONTO
            OrderDiscount.validateModalSub()
            OrderDiscount.aplicarDescontoValorFixo()
            ThrowDelivery.freightFirst()
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