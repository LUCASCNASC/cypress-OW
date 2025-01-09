import { saldodisponivel, escolherRota, escolherClientePedido, clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo,
         escolherProdutoPesquisa, escolherVoltagemProduto } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/apenas_produtos_pedidos';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoFinanceiroBaixa } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin()
        cy.tituloPagina()
        processoFinanceiroBaixa()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })
  
    context('Sem frete/ processo 9863 - caminho feliz', () => {

        it('1-Pedido de venda: produto 1860 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas() 
            cy.wait(5000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            cy.wait(5500)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('2-Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(800)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas()  
            cy.wait(5000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })
    
    context('Com frete/ processo 9863 - caminho feliz', () => {

        it.skip('3-Pedido de venda: produto 1860 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(6000)
            escolherRota() //ESCOLHER TRANSPORTADORA
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            cy.wait(7000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it.skip('4-Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora() 
            cy.wait(6000)
            escolherRota() //ESCOLHER TRANSPORTADORA
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})