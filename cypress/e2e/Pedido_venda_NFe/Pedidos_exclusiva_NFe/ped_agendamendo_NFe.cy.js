import { clienteComRota, saldodisponivel, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto, semSaldodisponivel,
         trocarFilialFaturamento } from '../../../support/para_pedidos/gerais_pedidos.js';
import { aumentarQuantVendaCinco, saldoRemotoAReceber, aumentarQuantVendaDez } from '../../../support/para_pedidos/para_pedidos_exclusiva.js';
import { primeiroPrdNormalExclusiva, kitSemSaldoAgendamento, kitVolumes, produtoSaldoReceber, prdSaldoReceberDuasLinhas } from '../../../support/para_pedidos_NFe/NFe_prd_exclusiva.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaExclusiva } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, modalInconsApenasTransp, escolherTransportadora } from '../../../support/para_pedidos/apenas_entrega.js';

//Para testarmos esses cenários, é necessário mudar para a versão da exclusiva e criar um agendamento na filial que está sendo usada
describe('Pedidos Exclusiva - Parâmetro de empresa 1019 marcado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaExclusiva()
        clienteComRota()
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it.skip('1. Vender um produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            kitSemSaldoAgendamento() //PRODUTO KIT
            semSaldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            trocarFilialFaturamento()
            addProduto()
            avancarParaTransportadora()
            modalInconsApenasTransp()
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

        it.skip('2. Vender um produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()      
            clicarVoltagemProduto() 
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            kitVolumes() //PRODUTO KIT
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            avancarParaTransportadora()
            modalInconsApenasTransp()
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

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it.skip('3. Vender um produto (sem saldo e com saldo a receber para 10 dias, e com entrega), e ter um agendamento para a data de previsão.', () => {

            produtoSaldoReceber() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp()
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

        //necessário esperar tarefa PVW-220
        it.skip('4. Vender um produto em duas linhas (um com 5 unidades a receber e 10 para solicitar compra), e ter um agendamento para a data de previsão para a receber.', () => {

            prdSaldoReceberDuasLinhas() //PRODUTO
            saldoRemotoAReceber()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            trocarFilialFaturamento()
            aumentarQuantVendaCinco()
            addProduto()
            prdSaldoReceberDuasLinhas() //SEGUNDO PRODUTO
            saldoRemotoAReceber()
            escolherProdutoPesquisa()  
            clicarVoltagemProduto() 
            trocarFilialFaturamento()
            aumentarQuantVendaDez()
        })

        it.skip('5. Pedido de venda normal: produto 1896 0 0 (sem entrega)', () => {
    
            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})