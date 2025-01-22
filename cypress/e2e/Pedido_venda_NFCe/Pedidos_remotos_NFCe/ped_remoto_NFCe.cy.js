import { saldodisponivel, clienteComRota, trocarFilialFaturamento, semSaldodisponivel, composicaoDesteKit, saldoCDDisponivel } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiroNFCe, produtoNormalSegundoNFCe, produtoRemotoComCDNFCe, produtoRemotoSemCDNFCe, produtoKitRemotoNFCe, 
         escolherProdutoPesquisaNormalPrimeiroNFCe, escolherVoltagemProdutoNormalPrimeiroNFCe, escolherProdutoPesquisaNormalSegundoNFCe, 
         escolherVoltagemProdutoNormalSegundoNFCe, escolherProdutoKitRemotoNFCe, escolherVoltagemProdutoKitRemotoNFCe, 
         escolherProdutoRemotoComCDNFCe, escolherVoltagemProdutoRemotoComCDNFCe, escolherProdutoRemotoSemCDNFCe, 
         escolherVoltagemProdutoRemotoSemCDNFCe, clicarAddProdutoNormalPrimeiroNFCe, clicarAddProdutoNormalSegundoNFCe, 
         clicarAddProdutoKitRemotoNFCe, clicarAddProdutoRemotoComCDNFCe } from '../../../support/para_pedidos_NFCe/apenasNFCe_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculadosRemotos } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado, } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsApenasRota, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Remoto/processo 9890 - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

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
  
    context('Pedido de venda remoto normal', () => {

        it('1-Pedido de venda remota: produto 1860 0 0 - (Venda remota de produto com saldo na filial do faturamento )', () => {

            produtoNormalPrimeiroNFCe() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiroNFCe()
            escolherVoltagemProdutoNormalPrimeiroNFCe()
            trocarFilialFaturamento()
            clicarAddProdutoNormalPrimeiroNFCe()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            escolherTransportadora()
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

            produtoNormalPrimeiroNFCe() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiroNFCe()
            escolherVoltagemProdutoNormalPrimeiroNFCe()
            trocarFilialFaturamento()
            clicarAddProdutoNormalPrimeiroNFCe()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            produtoNormalSegundoNFCe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundoNFCe()
            escolherVoltagemProdutoNormalSegundoNFCe()
            trocarFilialFaturamento()
            clicarAddProdutoNormalSegundoNFCe()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            escolherTransportadora()
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

            produtoKitRemotoNFCe() //PRODUTO
            saldoCDDisponivel()
            escolherProdutoKitRemotoNFCe()
            escolherVoltagemProdutoKitRemotoNFCe()
            trocarFilialFaturamento()
            composicaoDesteKit()
            clicarAddProdutoKitRemotoNFCe()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            escolherTransportadora()
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

            produtoRemotoComCDNFCe() //PRODUTO
            semSaldodisponivel()
            escolherProdutoRemotoComCDNFCe()
            escolherVoltagemProdutoRemotoComCDNFCe()
            trocarFilialFaturamento()
            clicarAddProdutoRemotoComCDNFCe()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            escolherTransportadora()
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

            produtoRemotoSemCDNFCe() //PRODUTO
            semSaldodisponivel()
            escolherProdutoRemotoSemCDNFCe()
            escolherVoltagemProdutoRemotoSemCDNFCe()
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