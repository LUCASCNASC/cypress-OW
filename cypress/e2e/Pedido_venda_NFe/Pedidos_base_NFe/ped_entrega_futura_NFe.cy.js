import { ProcessSale } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { Product } from '../../../../pages/produtos/prd_normal.js'
import { ValidateBalance } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Service } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AdvanceNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { ThrowDelivery } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeneralPayment } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Receipt } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'

describe('Gerar pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessSale.deliveryFutureNFe() //processo entrega futura
        cy.chooseClient()
    })

    context('Sem entrega/ processo 9862 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA PRODUTO
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            Receipt.main() //PROCESSO INCLUSÃO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
        
        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
              
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            clicarOKServVinServico.clickOKServiceLinked()
            ThrowDelivery.freightFirst() //ENTREGA PRODUTO
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            ThrowDelivery.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AdvanceNormal.clickGenerateInstallments()
            GeneralPayment.clicarGerarParcelas() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            Receipt.main() //PROCESSO INCLUSÃO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final() 
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
    
    context('Com entrega/ processo 9862 - caminho feliz', () => {

        it('3. Ped venda: produto 1860 0 0', () => {
             
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
            Receipt.main() //PROCESSO INCLUSÃO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })    
        
        it('4. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                   
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
            AdvanceNormal.toTransporter() //TRANSPORTADORA
            AdvanceNormal.toInstallments() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            Receipt.main() //PROCESSO INCLUSÃO
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final() 
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })  
    })
})