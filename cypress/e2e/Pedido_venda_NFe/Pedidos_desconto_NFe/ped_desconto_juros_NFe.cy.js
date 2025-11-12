import { ProcessSale } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { Product } from '../../../../pages/produtos/produtos.js'
import { ValidateBalance } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Service, ValidateService } from '../../../pages/para_pedidos/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/para_pedidos/AvancarPage.js'
import { GeneralDelivery, ThrowDelivery, ThrowAssembly } from '../../../pages/para_pedidos/EntregaPage.js'
import { GeneralPayment } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Receipt } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { OrderDiscount } from '../../../pages/para_pedidos/PedidoDecontoPage.js'

describe('Gerar pedido normal com desconto nos juros - parametros 243 e 244 definidos no processo de inclusão', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessSale.NFe() //processo normal
        cy.chooseClient()
    })

    context('Sem entrega/ processo 9860 - caminho feliz - processo de inclusão 3860', () => {

        it('1.Pedido: produto 1860 0 0 - arredondar para baixo', () => {

            Product.roundUpDown() //PRODUTO
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
            ChooseInstallmentReceipt.one()
            OrderDiscount.dragFormPayment() //DESCONTO
            OrderDiscount.clickChangeValue()
            OrderDiscount.modalChangeValue()
            OrderDiscount.changeValueToLow()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produtos 1860 0 0 - arredondar para cima', () => {

            Product.roundUpDown() //PRODUTO
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
            ChooseInstallmentReceipt.one()
            OrderDiscount.dragFormPayment() //DESCONTO
            OrderDiscount.clickChangeValue()
            OrderDiscount.modalChangeValue()
            OrderDiscount.changeValueToTop()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})