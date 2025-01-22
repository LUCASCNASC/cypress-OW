import { clienteComRota, saldodisponivel, escolherProdutoPesquisa, escolherVoltagemProduto, clicarAdicionarProduto,
         semSaldodisponivel, trocarFilialFaturamento } from '../../../support/para_pedidos/gerais_pedidos.js';
import { aumentarQuantVendaCinco, saldoRemotoAReceber, aumentarQuantVendaDez } from '../../../support/para_pedidos/para_pedidos_exclusiva.js';
import { primeiroPrdNormalExclusiva, kitSemSaldoAgendamento, kitVolumes, produtoSaldoReceber, prdSaldoReceberDuasLinhas, 
         escolherPesquisaPrimeiroPrdNormalExclusiva, escolherVoltagemPrimeiroPrdNormalExclusiva, escolherPesquisakitSemSaldoAgendamento,
         escolherVoltagemkitSemSaldoAgendamento, escolherPesquisakitVolumes, escolherVoltagemkitVolumes, escolherPesquisaSaldoReceber, 
         escolherVoltagemSaldoReceber, escolherPesquisaSaldoReceberDuasLinhas, escolherVoltagemSaldoReceberDuasLinhas, 
         clicarAddProdutoPrimeiroPrdNormalExclusiva, clicarAddProdutoSaldoReceber } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
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
        cy.wait(500)
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it('1. Vender um produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            saldodisponivel()
            escolherPesquisaPrimeiroPrdNormalExclusiva()
            escolherVoltagemPrimeiroPrdNormalExclusiva() 
            clicarAddProdutoPrimeiroPrdNormalExclusiva()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            kitSemSaldoAgendamento() //PRODUTO KIT
            semSaldodisponivel()
            escolherPesquisakitSemSaldoAgendamento()
            escolherVoltagemkitSemSaldoAgendamento()
            trocarFilialFaturamento()
            clicarAdicionarProduto()
            avancarParaTransportadora()
            modalInconsApenasTransp()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            avancarFinal()
        })

        it('2. Vender um produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO
            saldodisponivel()
            escolherPesquisaPrimeiroPrdNormalExclusiva()      
            escolherVoltagemPrimeiroPrdNormalExclusiva() 
            clicarAddProdutoPrimeiroPrdNormalExclusiva()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            kitVolumes() //PRODUTO KIT
            saldodisponivel()
            escolherPesquisakitVolumes()
            escolherVoltagemkitVolumes()
            clicarAdicionarProduto()
            avancarParaTransportadora()
            modalInconsApenasTransp()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it('3. Vender um produto (sem saldo e com saldo a receber para 10 dias, e com entrega), e ter um agendamento para a data de previsão.', () => {

            produtoSaldoReceber() //PRODUTO
            saldodisponivel()
            escolherPesquisaSaldoReceber()
            escolherVoltagemSaldoReceber() 
            clicarAddProdutoSaldoReceber()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        //necessário esperar tarefa PVW-220
        it('4. Vender um produto em duas linhas (um com 5 unidades a receber e 10 para solicitar compra), e ter um agendamento para a data de previsão para a receber.', () => {

            prdSaldoReceberDuasLinhas() //PRODUTO
            saldoRemotoAReceber()
            escolherPesquisaSaldoReceberDuasLinhas()
            escolherVoltagemSaldoReceberDuasLinhas() 
            trocarFilialFaturamento()
            aumentarQuantVendaCinco()
            clicarAdicionarProduto()
            prdSaldoReceberDuasLinhas() //SEGUNDO PRODUTO
            saldoRemotoAReceber()
            escolherProdutoPesquisa()  
            escolherVoltagemProduto() 
            trocarFilialFaturamento()
            aumentarQuantVendaDez()
        })

        it('5. Pedido de venda normal: produto 1896 0 0 (sem entrega)', () => {
    
            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            saldodisponivel()
            escolherPesquisaPrimeiroPrdNormalExclusiva()
            escolherVoltagemPrimeiroPrdNormalExclusiva()
            clicarAddProdutoPrimeiroPrdNormalExclusiva()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
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
        pedidoGerado()
      });
})