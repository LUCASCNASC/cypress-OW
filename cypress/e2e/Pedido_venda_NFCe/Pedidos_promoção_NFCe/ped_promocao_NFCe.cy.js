import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { GeralEntrega } from '../../../../pages/para_pedidos/entrega/geral_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { RecebimentoPromo } from '../../../../pages/para_pedidos/processos/processo_recebimento_promo.js'
import { Promocao } from '../../../../pages/para_pedidos/promocao/promocao.js'

describe('Gerar pedidos com promoção com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFCe()
        EscolherCliente.withRoute()
    })

    context('Com entrega /com promoção/ processo 9890 - caminho feliz', () => {

        //verificar 
        it.skip('1. Ped venda com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            Produto.promoMatch() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch() ; Promocao.ticketPromotion() 
            cy.clickVoltageProduct()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.pagPrincipal()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click()
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click()

            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    
        //verificar 
        it.skip('2. Ped venda com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            Produto.promoDeadlineEntry() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch() ; Promocao.ticketPromotion() 
            cy.clickVoltageProduct()
            Promocao.selectFirstPromoProduct() //PROMOÇÃO
            RecebimentoPromo.pagPrincipal()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery()

            //"GERAR PAGAMENTO"
            cy.get('.layout-wrap > .md-primary').scrollTo('top').wait(200)
            cy.contains('.md-select-value', 'Forma de pagamento').click()
            // cy.get('.white > :nth-child(3)').click({force:true})
            // cy.contains('3861 - T.A. A Receber A Vista').click({force:true})

            // GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            // GeralPagamento.loadingFormPayment()
            // Recebimento.main()
            // EscolherParcelaReceb.two()
            // AvancarNormal.final()
            // FinalizarPed.clicarFinalizarPed() //RESUMO
            // FinalizarPed.validarPedGerado()
        })

        //verificar 
        it.skip('3. Ped venda com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            Produto.promoDeadlineInstallment() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch() ; Promocao.ticketPromotion()
            cy.clickVoltageProduct()
            Promocao.selectFirstPromoProduct() //PROMOÇÃO
            RecebimentoPromo.pagPrincipal()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })  
    })
})