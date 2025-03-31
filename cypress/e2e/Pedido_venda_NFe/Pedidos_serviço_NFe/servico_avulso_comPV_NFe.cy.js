import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinishOrder } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { OrderServiceLoose } from '../../../../pages/para_pedidos/para_servicos_avulsos.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/apenas_servicos.js'


describe('Venda de serviço avulso, com pedido do produto já baixado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVenda.saleServiceLoose()
        EscolherCliente.withRoute()
    })

    context('Processo 9888 - caminho feliz', () => {

        it.skip('1. Venda de garantia - 139 (T.A. Garantia Separa Mesmo Processo)', () => {

            const numero_pedido = '8605'
            
            OrderServiceLoose.iconMenuOptions()
            OrderServiceLoose.clientCompleteOptionMenu()
            OrderServiceLoose.clickMenuClientComplete()
            OrderServiceLoose.clicarOpcaoSeclickOptionServicesrvicos()
            OrderServiceLoose.waitLoadingService()

            //Validando campo
            cy.get('form.ng-pristine > .ng-pristine')
                .should('exist')
                .and('be.visible')
                .and('have.text', '')

            //Inserindo número do pedido no campo 
            cy.get('form.ng-pristine > .ng-pristine')
                .type(numero_pedido, {force:true})

            //Validando número do pedido
            cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > h3 > .ng-binding')
                .should('have.text', numero_pedido)

                OrderServiceLoose.buttonAddMaoObra()
            OrderServiceLoose.buttonAddGarantias()
            OrderServiceLoose.clickAddGarantias()
            OrderServiceLoose.modalGarantiasServicesLinked()
            Servico.garantiaSepMesmoProc() //clicar na primeira garantia - Garantia Separa Mesmo Processo
            Servico.clickOKServiceLinked()()
            OrderServiceLoose.messLinkedAddedSucess()
            OrderServiceLoose.buttonSaveService()
            OrderServiceLoose.messWaitLoading()
            OrderServiceLoose.messResgistrationSaveSucess()
            OrderServiceLoose.clickAddGarantias() //Clicando novamente para validar que não deixa adicionar mais garantias
            OrderServiceLoose.messGarantiaAdded() //Mensagem de "O Serviço Garantias já foi adicionado à esse produto.", quando tentamos adicionar novamente
            OrderServiceLoose.clickCartShopping()
            OrderServiceLoose.buttonAdvanceOrder()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })
    })
})