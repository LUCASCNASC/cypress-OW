import { ProcessSale } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { Product } from '../../../../pages/produtos/produtos.js'
import { ValidateBalance } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Service, ValidateService } from '../../../pages/para_pedidos/ServicosPage.js'
import { AdvanceNormal } from '../../../../pages/para_pedidos/avancar_normal.js'
import { GeneralDelivery, ThrowDelivery, ThrowAssembly } from '../../../pages/para_pedidos/EntregaPage.js'
import { GeneralPayment } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { GroupReceipt } from '../../../../pages/para_pedidos/pagamento/agrupar_recebimento.js'
import { Receipt } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'

describe('Gerar pedido com mais de uma forma de pagamento', () => {

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

        it('1.Pedido: produto 1860 0 0 - duas formas de pagamento 3871 e 3860', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments()
            GroupReceipt.firstValueInstallment() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.debitTEF()
            ChooseInstallmentReceipt.one()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main() //SEGUNDA FORMA DE PAGAMENTO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto 1860 0 0 - com entrada (3861) e outra forma de pagamento (3860)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments()
            GeneralPayment.chooseEntryFormPayment()
            GeneralPayment.clicarGerarPagamento()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main() //SEGUNDA FORMA DE PAGAMENTO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('3.Pedido: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments()
            GroupReceipt.firstValueInstallment() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main()
            ChooseInstallmentReceipt.one()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main() //SEGUNDA FORMA DE PAGAMENTO
            ChooseInstallmentReceipt.one()
            GroupReceipt.notGroupReleases()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('4.Pedido: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para SIM agrupar', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments()
            GroupReceipt.firstValueInstallment() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main()
            ChooseInstallmentReceipt.one()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main() //SEGUNDA FORMA DE PAGAMENTO
            ChooseInstallmentReceipt.one()
            GroupReceipt.groupReleases()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('5.Pedido: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar, mas logo em seguida agrupar selecionando os dois.', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments()
            GroupReceipt.firstValueInstallment() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main()
            ChooseInstallmentReceipt.one()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main() //SEGUNDA FORMA DE PAGAMENTO
            ChooseInstallmentReceipt.one()
            GroupReceipt.notGroupReleases()
            GroupReceipt.selectReleasesGroup()
            GroupReceipt.clickGroup()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})