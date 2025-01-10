import { saldodisponivel, escolherClientePedido, clicarAdicionarProduto, escolherProdutoPesquisa, escolherVoltagemProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento,
         escolherRecebDebitoPOS, escolherFormaPagamentoPrincipal, escolherEntradaFormaPagamento, clicarGerarPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { primeiroValorAParcelar, naoAgruparLancamentos, agruparLancamentos, selecionarLancAgrupar, clicarAgrupar } from '../../../support/para_pedidos/para_ped_varios_recebimentos.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaPrincipal } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

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

    context('Com frete/ processo 9860 - caminho feliz', () => {
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     finalizandoPedido()
    //     cy.wait(8000)
    //     pedidoGerado()
    //   });
})