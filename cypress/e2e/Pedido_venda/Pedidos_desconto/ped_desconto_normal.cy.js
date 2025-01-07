import { saldodisponivel, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido, clicarAdicionarProduto,
         tirarEntrega, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         escolherVoltagemProduto, avancarFinal } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoDescontoCifrao, produtoDescontoPercentual, produtoDescontoValorFixo } from '../../../support/para_pedidos/apenas_produtos_pedidos';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoR$, aplicarDescontoPorcentagem, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto';
import { escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';

describe('Gerar pedido de venda com desconto', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.skip('1-Pedido de venda: produto 1860 0 0 com desconto Sub (-) / R$', () => {

            produtoDescontoCifrao() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoR$()
            tirarEntrega() //ENTREGA
            cy.wait(2200)
            avancarParaParcelas()
            cy.wait(5000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(7000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it.skip('2-Pedido de venda: produto 1860 0 0 com desconto Sub (-) / % (Porcentagem)', () => {

            produtoDescontoPercentual() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoPorcentagem()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(8000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it.skip('3-Pedido de venda: produto 1860 0 0 com desconto Sub (-) / VALOR FIXO', () => {

            produtoDescontoValorFixo() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoValorFixo()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(8000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(7000)
        pedidoGerado()
      });
})