import { saldodisponivel, clienteComRota, clicarAdicionarProduto, escolherProdutoPesquisa, escolherVoltagemProduto }  from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, clicarEditarPedido, 
         removerFormaPagamento } from '../../../support/para_pedidos/para_alterar_pedido.js';
import { arrastarFormaPagamento } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento, carregandoFormaPagamento,
         escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado, pedidoAlteradoSucesso } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';
import { pegarAPICidade, esperarAPICidade } from '../../../support/para_pedidos/apenas_APIs.js';

describe('Gerar pedido normal, entrar alterando, modificar e salvar.', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFCe()
        clienteComRota()
        cy.wait(500)
    })

    context('Com frete/ processo 9890 - caminho feliz', () => {

        it.skip('Gerar pedido com frete, alterar forma de pagamento.', () => {
                      
            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(7000)
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido()
            finalizandoPedido()
            cy.wait(8000)
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            cy.wait(8000)
            avancarParaTransportadora()
            cy.wait(11000)
            avancarParcelasEntrega()
            arrastarFormaPagamento() //ARRASTAR PARA REMOVER FORMA DE PAGAMENTO ANTIGA
            removerFormaPagamento()
            cy.wait(10000)
            avancarParcelasEntrega()

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherSegundaFormaPagamento()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            cy.wait(8000)
            finalizandoPedido()
            pedidoAlteradoSucesso()
        })
    })
})