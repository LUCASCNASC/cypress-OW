import { ProcessSale } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { AdvanceNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { GeneralPayment } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { ChooseInstallmentReceipt } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Receipt } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { OrderServiceLoose } from '../../../../pages/para_pedidos/para_servicos_avulsos.js'

//Para este cenário, é necessário fazer update na coluna dataultimaatualizacao, da tabela glb.servicofaixavalorfixo
describe('Venda de serviço avulso Host - 104', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessSale.saleServiceLoose()
        cy.chooseClient()
    })

    context('Processo 9888 - caminho feliz', () => {

        it('1. Venda de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            OrderServiceLoose.iconMenuOptions()
            OrderServiceLoose.clickServiceMenu()
            OrderServiceLoose.productServiceHost() //PRODUTO
            OrderServiceLoose.chooseServiceSearch()
            OrderServiceLoose.chooseValueRecharge()
            OrderServiceLoose.clickCartShopping() //CARRINHO COMPRAS
            OrderServiceLoose.buttonAdvanceOrder()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment()
            Receipt.main()
            ChooseInstallmentReceipt.one()
            AdvanceNormal.final()
            cy.clickFinishOrder() //RESUMO
            cy.validateOrderGenerated()
        })
    })
})