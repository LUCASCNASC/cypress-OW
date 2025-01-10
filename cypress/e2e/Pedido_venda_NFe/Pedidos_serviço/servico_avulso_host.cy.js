import { clienteComRota, clicarServicosMenu, clicarCarrinhoCompras, botaoAvancarPedido, produtoServicoHost, saldoDisponivelServico,
         escolherServicoPesquisa, escolherValorRecarga } from '../../../support/para_pedidos/para_servicos_avulsos';
import { iconeMenuOpcoes } from '../../../support/para_menus/para_menu_opcoes';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaServicoAvulso } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';

//Para este cenário, é necessário fazer update na coluna dataultimaatualizacao, da tabela glb.servicofaixavalorfixo
describe('Venda de serviço avulso Host - 104', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaServicoAvulso()
        clienteComRota()
        cy.wait(500)
    })

    context('Processo 9888 - caminho feliz', () => {

        it.skip('Venda de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            iconeMenuOpcoes()
            clicarServicosMenu()
            cy.wait(400)
            produtoServicoHost() //PRODUTO
            saldoDisponivelServico()
            escolherServicoPesquisa()
            cy.wait(200)
            escolherValorRecarga()
            cy.wait(200)
            clicarCarrinhoCompras() //CARRINHO COMPRAS
            botaoAvancarPedido()
            cy.wait(3000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(2000)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(4000)
        pedidoGerado()
      });
})