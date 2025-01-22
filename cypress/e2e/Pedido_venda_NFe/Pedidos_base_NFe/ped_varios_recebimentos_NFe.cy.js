import { saldodisponivel, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, escolherProdutoPesquisaNormalPrimeiro, escolherVoltagemProdutoNormalPrimeiro, clicarAddProdutoNormalPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento,
         escolherRecebDebitoPOS, escolherFormaPagamentoPrincipal, escolherEntradaFormaPagamento, clicarGerarPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { primeiroValorAParcelar, naoAgruparLancamentos, agruparLancamentos, selecionarLancAgrupar, clicarAgrupar } from '../../../support/para_pedidos/para_ped_varios_recebimentos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

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
        escolherProdutoPesquisaNormalPrimeiro()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('Ped venda: produto 1860 0 0 - duas formas de pagamento 3871 e 3860', () => {

            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            botaoGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
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

        it('Ped venda: produto 1860 0 0 - com entrada (3861) e outra forma de pagamento (3860)', () => {

            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
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

        it('Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar', () => {

            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            botaoGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
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

        it('Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para SIM agrupar', () => {

            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            botaoGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
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

        it('Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar, mas logo em seguida agrupar selecionando os dois.', () => {

            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            botaoGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
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

    context('Com entrega/ processo 9860 - caminho feliz', () => {
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})