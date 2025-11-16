import { ProcessSale } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/ProdutoPage'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { GeneralDelivery } from '../../../pages/pedido/EntregaPage.js'
import { GeneralPayment } from '../../../../pages/pedido/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/pedido/pagamento/parcelas.js'
import { Receipt } from '../../../../pages/pedido/processos/processo_recebimento.js'

describe('Gerar pedidos com Garantia e com entrega', () => {

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

        it('1.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
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

        it('2.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
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
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('3.Pedido: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaNaoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
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

        it('4.Pedido: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaNaoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
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
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('5.Pedido: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaSepTituloProcDif() //Marcar Garantia separa titulo em um processo diferente
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeneralDelivery.escolherTranspochooseTransporterrtadora()
            AdvanceNormal.installmentDelivery() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('6.Pedido: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaSepTituloProcDif() //Marcar Garantia separa titulo em um processo diferente
            Service.clickOKServiceLinked() //SERVIÇOS
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
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
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})