import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, 
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, escolherEntradaFormaPagamento, clicarGerarPagamento,
         } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoGerarParcelas, escolherFormaPagaPropCredito, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import {  } from '../../../support/para_pedidos/para_ped_varios_recebimentos.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';

describe('Gerar pedido com mais de uma forma de pagamento', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.only('1-Venda: produto 1860 0 0 - duas formas de pagamento 3861 e 3860', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6000)
            // botaoGerarParcelas() //GERAR PARCELAS
            // carregandoFormaPagamento()
            // cy.wait(5000)
            // escolherFormaPagamentoPrincipal()
            // escolherDuasParcelaPagamento()
            // cy.wait(400)
            // avancarFinal()
        })
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     finalizandoPedido()
    //     cy.wait(8000)
    //     pedidoGerado()
    //   });
})