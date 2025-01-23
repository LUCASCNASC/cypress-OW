import { saldodisponivel, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, escolherProdutoPesquisaNormalPrimeiro, escolherVoltagemProdutoNormalPrimeiro, clicarAddProdutoNormalPrimeiro } from '../../../support/para_pedidos_NFe/NFe_prd_normal.js';
import { botaoGerarParcelas, escolherFormaPagaPropCredito, carregandoFormaPagamento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado, propostaCreditoGerada } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido com proposta de crédito', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisaNormalPrimeiro()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 - (Pedido de venda sem entrega, com proposta de crédito.)', () => {

            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagaPropCredito()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        propostaCreditoGerada()
        pedidoGerado()
      });
})