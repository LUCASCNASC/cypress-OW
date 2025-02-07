import { saldodisponivel, clienteComRota, trocarFilialFaturamento, semSaldodisponivel, composicaoDesteKit, saldoCDDisponivel,
         escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, produtoRemotoComCD, produtoRemotoSemCD, produtoKitRemoto } from '../../../support/produtos_pedidos/prd_normal.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { modalServicosVinculados, okServicosVinculadosRemotos } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado, } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Remoto/processo 9890 - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFCe()
        clienteComRota()
    })
  
    context('Pedido de venda remoto normal', () => {

        //verificar
        it.skip('1. Ped venda remota: produto 1860 0 0 - (Venda remota de produto com saldo na filial do faturamento )', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            trocarFilialFaturamento()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        //verificar
        it.skip('2. Ped venda remota: produtos 1860 0 0 e 1870 0 0', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            trocarFilialFaturamento()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            trocarFilialFaturamento()
            addProduto()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
        
        //verificar
        it.skip('3. Ped venda remota: kit 1877 0 0', () => {

            produtoKitRemoto() //PRODUTO
            saldoCDDisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            trocarFilialFaturamento()
            composicaoDesteKit()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
    
    context('Pedido de venda remoto sem saldo remoto, pegar CD', () => {

        //verificar
        it.skip('4. Ped venda remoto - com saldo no CD (filial 1) - deve permitir fazer o pedido - (Venda remota de produto (1883 0 0) sem saldo na filial do faturamento, mas com saldo no CD do faturamento - com entrega)', () => {

            produtoRemotoComCD() //PRODUTO
            semSaldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            trocarFilialFaturamento()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculadosRemotos()
            avancarParaTransportadora()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })    
        
        //verificar
        it.skip('5. Ped venda remoto - SEM saldo no CD (filial 1) - NÃO deve permitir fazer o pedido - (Venda remota de produto (1882 0 0) sem saldo na filial do faturamento, sem saldo da CD do faturamento)', () => {

            produtoRemotoSemCD() //PRODUTO
            semSaldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
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