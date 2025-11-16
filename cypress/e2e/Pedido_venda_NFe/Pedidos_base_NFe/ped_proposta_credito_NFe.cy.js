import { ProcessSale } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/ProdutoPage'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { FinishOrder } from '../../../../pages/pedido/finalizar_pedido.js'
import { ThrowDelivery } from '../../../pages/pedido/EntregaPage.js'
import { GeneralPayment } from '../../../../pages/pedido/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/pedido/pagamento/parcelas.js'
import { Receipt } from '../../../../pages/pedido/processos/processo_recebimento.js'

describe('Gerar pedido com proposta de crédito', () => {

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

        it('1.Pedido: produto 1860 0 0 - (Pedido de venda sem entrega, com proposta de crédito.)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            Receipt.proposalCredit()
            ChooseInstallmentReceipt.one()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            FinishOrder.validatePropCreditGenerated()
            cy.validateOrderGenerated()
        })
    })
})