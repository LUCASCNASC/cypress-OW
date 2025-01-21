import { clienteComRota, saldodisponivel, escolherProdutoPesquisa, escolherVoltagemProduto, clicarAdicionarProduto,
         semSaldodisponivel, trocarFilialFaturamento } from '../../../support/para_pedidos/gerais_pedidos.js';
import { aumentarQuantVendaCinco, saldoRemotoAReceber, aumentarQuantVendaDez } from '../../../support/para_pedidos/para_pedidos_exclusiva.js';
import { primeiroPrdNormalExclusiva, kitSemSaldoAgendamento, kitVolumes, produtoSaldoReceber, prdSaldoReceberDuasLinhas, 
         escolherPesquisaPrimeiroPrdNormalExclusiva, escolherVoltagemPrimeiroPrdNormalExclusiva, escolherPesquisakitSemSaldoAgendamento,
         escolherVoltagemkitSemSaldoAgendamento, escolherPesquisakitVolumes, escolherVoltagemkitVolumes, escolherPesquisaSaldoReceber, 
         escolherVoltagemSaldoReceber, escolherPesquisaSaldoReceberDuasLinhas, escolherVoltagemSaldoReceberDuasLinhas } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaExclusiva } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

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

        it('Vender um produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            saldodisponivel()
            escolherPesquisaPrimeiroPrdNormalExclusiva()
            cy.wait(200)
            escolherVoltagemPrimeiroPrdNormalExclusiva() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            kitSemSaldoAgendamento() //PRODUTO KIT
            semSaldodisponivel()
            cy.wait(800)
            escolherPesquisakitSemSaldoAgendamento()
            cy.wait(200)
            escolherVoltagemkitSemSaldoAgendamento()
            cy.wait(400)
            trocarFilialFaturamento()
            clicarAdicionarProduto()
            cy.wait(500)
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(10000)
        })

        it('Vender um produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO
            saldodisponivel()
            escolherPesquisaPrimeiroPrdNormalExclusiva()
            cy.wait(200)      
            escolherVoltagemPrimeiroPrdNormalExclusiva() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            kitVolumes() //PRODUTO KIT
            saldodisponivel()
            cy.wait(800)
            escolherPesquisakitVolumes()
            cy.wait(200)    
            escolherVoltagemkitVolumes()
            cy.wait(400)
            clicarAdicionarProduto()
            cy.wait(500)
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(10000)
        })
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it('Vender um produto (sem saldo e com saldo a receber para 10 dias, e com entrega), e ter um agendamento para a data de previsão.', () => {

            produtoSaldoReceber() //PRODUTO
            saldodisponivel()
            escolherPesquisaSaldoReceber()
            cy.wait(200)
            escolherVoltagemSaldoReceber() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(9000)
        })

        //necessário esperar tarefa PVW-220
        it('Vender um produto em duas linhas (um com 5 unidades a receber e 10 para solicitar compra), e ter um agendamento para a data de previsão para a receber.', () => {

            prdSaldoReceberDuasLinhas() //PRODUTO
            saldoRemotoAReceber()
            escolherPesquisaSaldoReceberDuasLinhas()
            cy.wait(200)
            escolherVoltagemSaldoReceberDuasLinhas() 
            trocarFilialFaturamento()
            aumentarQuantVendaCinco()
            clicarAdicionarProduto()
            cy.wait(800)
            prdSaldoReceberDuasLinhas() //SEGUNDO PRODUTO
            saldoRemotoAReceber()
            cy.wait(800)
            escolherProdutoPesquisa()  
            escolherVoltagemProduto() 
            trocarFilialFaturamento()
            aumentarQuantVendaDez()
        })

        it('Pedido de venda normal: produto 1896 0 0 (sem entrega)', () => {
    
            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            saldodisponivel()
            escolherPesquisaPrimeiroPrdNormalExclusiva()
            cy.wait(200)
            escolherVoltagemPrimeiroPrdNormalExclusiva()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})