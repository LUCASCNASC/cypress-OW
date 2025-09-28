import { ProcessSale } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { AdvanceNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { ThrowDelivery } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeneralDelivery } from '../../../../pages/para_pedidos/entrega/geral_entrega.js'
import { GeneralPayment } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Receipt } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { PedExclusiva } from '../../../../pages/para_pedidos/para_pedidos_exclusiva.js'
import { ProductExclusiva } from '../../../../pages/produtos/prd_exclusiva.js'
import { GeneralOrder } from '../../../../pages/para_pedidos/gerais_pedidos.js'
import { ValidateBalance } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Service } from '../../../../pages/para_pedidos/servicos/apenas_servicos.js'

//Para testarmos esses cenários, é necessário mudar para a versão da exclusiva e criar um agendamento na filial que está sendo usada
describe('Pedidos Exclusiva - Parâmetro de empresa 1019 marcado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessSale.NFe() //processo normal
        cy.chooseClient()
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it('1.Pedido: produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {

            ProductExclusiva.firstNormal() //PRODUTO EXCLUSIVA
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ProductExclusiva.kitWithoutBalanceScheduling() //PRODUTO KIT
            ValidateBalance.withoutBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeneralOrder.trocarFilialFaturamento()
            cy.clickAddProduct()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsApenasTransp()
            GeneralDelivery.escolherTransportadora()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {

            ProductExclusiva.firstNormal() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ProductExclusiva.kitVolumes() //PRODUTO KIT
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsApenasTransp()
            GeneralDelivery.escolherTransportadora()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it('3.Pedido: produto (sem saldo e com saldo a receber para 10 dias, e com entrega), e ter um agendamento para a data de previsão.', () => {

            ProductExclusiva.balanceReceive() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AdvanceNormal.toTransporter()
            GeneralDelivery.modalInconsApenasTransp()
            GeneralDelivery.escolherTransportadora()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.carregandoFormaPagamento()
            Receipt.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('4.Pedido: produto em duas linhas (um com 5 unidades a receber e 10 para solicitar compra), e ter um agendamento para a data de previsão para a receber.', () => {

            ProductExclusiva.balanceReceiveTwoLines() //PRODUTO
            PedExclusiva.balanceRemoteReceive()
            cy.clickVoltageProduct()
            cy.clickAddProduc() 
            GeneralOrder.trocarFilialFaturamento()
            PedExclusiva.increaseAmountSaleFive()
            cy.selectProductSearch()
            ProductExclusiva.balanceReceiveTwoLines() //SEGUNDO PRODUTO
            PedExclusiva.balanceRemoteReceive()
            cy.clickVoltageProduct() 
            cy.clickAddProduct()
            GeneralOrder.trocarFilialFaturamento()
            PedExclusiva.increaseAmountSaleTen()
        })

        it('5.Pedido: venda normal: produto 1896 0 0 (sem entrega)', () => {
    
            ProductExclusiva.firstNormal() //PRODUTO EXCLUSIVA
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
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
})