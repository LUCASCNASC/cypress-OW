import { saldodisponivel, clicarAdicionarProduto, escolherProdutoPesquisa, escolherVoltagemProduto, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento,
         escolherDuasParcelaPagamento, escolherEntradaFormaPagamento, clicarGerarPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, modalInconsApenasTransp, tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFCe()
        // clienteComRota()
        // cy.wait(500)
        // produtoNormalPrimeiro()
        // saldodisponivel()
        // escolherProdutoPesquisa()
        // cy.wait(200)
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {

        it.only('4-Venda: produto 1860 0 0 - (Venda local de produto com saldo - com entrega)', () => {
                      
            // escolherVoltagemProduto() //PRODUTO
            // clicarAdicionarProduto()
            // cy.wait(500)
            // modalServicosVinculados() //SERVICOS
            // okServicosVinculados()
            // cy.wait(400)
            // avancarParaTransportadora()
            // cy.wait(6000)
            // modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            // escolherTransportadora()
            // avancarParcelasEntrega()
            // cy.wait(5000)
            // botaoGerarParcelas() //GERAR PARCELAS
            // cy.wait(5500)
            // escolherFormaPagamentoPrincipal()
            // cy.wait(4000)
            // escolherDuasParcelaPagamento()
            // cy.wait(400)
            // avancarFinal()
        })

        it('5-Venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(4000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(1000)
            avancarParaTransportadora()
            cy.wait(8000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(6000)
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('6-Venda: produto 1860 0 0 - (Pedido de venda com entrega. Com Entrada + parcelamento.)', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(7000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            cy.wait(6500)
            escolherEntradaFormaPagamento() //GERAR PARCELAS
            clicarGerarPagamento()
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5500)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     finalizandoPedido()
    //     cy.wait(8000)
    //     pedidoGerado()
    //   });
})