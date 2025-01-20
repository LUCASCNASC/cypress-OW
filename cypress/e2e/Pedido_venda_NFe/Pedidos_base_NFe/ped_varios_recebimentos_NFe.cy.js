import { saldodisponivel, clienteComRota, clicarAdicionarProduto, escolherProdutoPesquisa, escolherVoltagemProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento,
         escolherRecebDebitoPOS, escolherFormaPagamentoPrincipal, escolherEntradaFormaPagamento, clicarGerarPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { primeiroValorAParcelar, naoAgruparLancamentos, agruparLancamentos, selecionarLancAgrupar, clicarAgrupar } from '../../../support/para_pedidos/para_ped_varios_recebimentos.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';
import { pegarAPICidade, esperarAPICidade } from '../../../support/para_pedidos/apenas_APIs.js';

describe('Gerar pedido com mais de uma forma de pagamento', () => {

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
        escolherProdutoPesquisa()
        cy.wait(200)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.skip('1-Venda: produto 1860 0 0 - duas formas de pagamento 3871 e 3860', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6000)
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            botaoGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherRecebDebitoPOS()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(500)
            botaoGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it.skip('1-Venda: produto 1860 0 0 - com entrada (3861) e outra forma de pagamento (3860)', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6000)
            escolherEntradaFormaPagamento()
            clicarGerarPagamento()
            cy.wait(400)
            botaoGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it.skip('1-Venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6000)
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            botaoGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(500)
            botaoGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            naoAgruparLancamentos()
            cy.wait(400)
            avancarFinal()
        })

        it.skip('1-Venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para SIM agrupar', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6000)
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            botaoGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(500)
            botaoGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            agruparLancamentos()
            cy.wait(400)
            avancarFinal()
        })

        it.skip('1-Venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar, mas logo em seguida agrupar selecionando os dois.', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6000)
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            botaoGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(500)
            botaoGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            naoAgruparLancamentos()
            selecionarLancAgrupar()
            clicarAgrupar()
            cy.wait(400)
            avancarFinal()
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