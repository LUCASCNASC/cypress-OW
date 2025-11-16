import { ProcessSale } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/ProdutoPage'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { GeneralDelivery } from '../../../pages/pedido/EntregaPage.js'
import { GeneralPayment } from '../../../../pages/pedido/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/pedido/pagamento/parcelas.js'
import { Receipt } from '../../../../pages/pedido/processos/processo_recebimento.js'
import { GeneralOrder } from '../../../pages/pedido/GeraisPedidosPage.js'

describe('Gerar pedido normal com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessSale.NFCe() //processo normal
        cy.chooseClient()
    })
    
    context('Com entrega/processo 9890 - caminho feliz', () => {
        
        it('1.Pedido: kit 1862 0 0', () => {
                
            Product.kitFirst()
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            GeneralOrder.compositionKit()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsOnlyTransporter()
            GeneralDelivery.chooseTransporter()
            AdvanceNormal.installmentDelivery()
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