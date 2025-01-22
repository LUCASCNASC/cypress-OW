import { saldodisponivel, clienteComRota, trocarFilialFaturamento, semSaldodisponivel, composicaoDesteKit, saldoCDDisponivel } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, produtoRemotoComCD, produtoRemotoSemCD, produtoKitRemoto, escolherProdutoPesquisaNormalPrimeiro, 
         escolherVoltagemProdutoNormalPrimeiro, escolherProdutoPesquisaNormalSegundo, escolherVoltagemProdutoNormalSegundo, 
         escolherProdutoKitRemoto, escolherVoltagemProdutoKitRemoto, escolherProdutoRemotoComCD, escolherVoltagemProdutoRemotoComCD, 
         escolherProdutoRemotoSemCD, escolherVoltagemProdutoRemotoSemCD, clicarAddProdutoNormalPrimeiro, clicarAddProdutoNormalSegundo, 
         clicarAddProdutoKitRemoto, clicarAddProdutoRemotoComCD } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculadosRemotos } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado, } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';


//verificar todos
describe('Remoto/processo 9860 - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
    })
  
    context('Pedido de venda remoto normal', () => {

        it('1-Pedido de venda remota: produto 1860 0 0 - (Venda remota de produto com saldo na filial do faturamento )', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro()
            trocarFilialFaturamento()
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('2-Pedido de venda remota: produtos 1860 0 0 e 1870 0 0', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro()
            trocarFilialFaturamento()
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            trocarFilialFaturamento()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
        
        it('3-Pedido de venda remota: kit 1877 0 0', () => {

            produtoKitRemoto() //PRODUTO
            saldoCDDisponivel()
            escolherProdutoKitRemoto()
            escolherVoltagemProdutoKitRemoto()
            trocarFilialFaturamento()
            composicaoDesteKit()
            clicarAddProdutoKitRemoto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
    
    context('Pedido de venda remoto sem saldo remoto, pegar CD', () => {

        it('4-Pedido de venda remoto - com saldo no CD (filial 1) - deve permitir fazer o pedido - (Venda remota de produto sem saldo na filial do faturamento, mas com saldo no CD do faturamento - com entrega)', () => {

            produtoRemotoComCD() //PRODUTO
            semSaldodisponivel()
            escolherProdutoRemotoComCD()
            escolherVoltagemProdutoRemotoComCD()
            trocarFilialFaturamento()
            clicarAddProdutoRemotoComCD()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })    
        
        it('5-Pedido de venda remoto - SEM saldo no CD (filial 1) - NÃO deve permitir fazer o pedido - (Venda remota de produto sem saldo na filial do faturamento, sem saldo da CD do faturamento)', () => {

            produtoRemotoSemCD() //PRODUTO
            semSaldodisponivel()
            escolherProdutoRemotoSemCD()
            escolherVoltagemProdutoRemotoSemCD()
            trocarFilialFaturamento()

            //Validando mensagem "Este produto não possui saldo na filial selecionada."
            cy.get('[ng-if="semSaldoCD"][style=""] > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando mensagem "Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda."
            cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > .mensagem-erro-centralizada > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando botão Adicionar para Simulação
            cy.get('.md-primary.btn-rounded.md-raised.btn-block')
                .should('exist')
                .and('not.be.disabled')
                .and('contain',' Adicionar para Simulação')
        })    
    })
})