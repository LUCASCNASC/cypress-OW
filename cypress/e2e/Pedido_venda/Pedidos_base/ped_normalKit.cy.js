import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, clicarAdicionarProduto, modalInconsRotaTransp,
         tirarEntrega, composicaoDesteKit } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoKitPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaPrincipal } from '../../../support/para_pedidos/apenas_processos_venda.js';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoKitPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })
  
    context('Sem frete/ processo 9860 - caminho feliz', () => {
        
        it.skip('1-Pedido de venda: kit 1862 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            composicaoDesteKit()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6500)
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
    
    context('Com frete/processo 9860 - caminho feliz', () => {
        
        it.skip('2-Pedido de venda: kit 1862 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            composicaoDesteKit()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora() //ENTREGA
            cy.wait(8000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
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
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})