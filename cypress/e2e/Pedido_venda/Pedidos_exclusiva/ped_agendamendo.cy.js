import { escolherClientePedido, saldodisponivel, escolherProdutoPesquisa, escolherVoltagemProduto, 
         clicarAdicionarProduto, modalServicosVinculados, okServicosVinculados, tirarEntrega, semSaldodisponivel, 
         avancarParaTransportadora, modalInconsRotaTransp, escolherTransportadora, escolherRota, avancarParcelasEntrega, botaoGerarParcelas, 
         carregandoFormaPagamento, avancarFinal, trocarFilialFaturamento, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, avancarParaParcelas, 
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { primeiroPrdNormalExclusiva, kitSemSaldoAgendamento, kitVolumes, produtoSaldoReceber, prdSaldoReceberDuasLinhas, aumentarQuantVendaCinco, 
         saldoRemotoAReceber, aumentarQuantVendaDez, processoVendaExclusiva } from '../../../support/para_pedidos/para_pedidos_exclusiva';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/apenas_formas_pagamento.js';

//Para testarmos esses cenários, é necessário mudar para a versão da exclusiva e criar um agendamento na filial que está sendo usada
describe('Pedidos Exclusiva - Parâmetro de empresa 1019 marcado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaExclusiva()
        escolherClientePedido()
        cy.wait(500)
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it('Vender um produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            kitSemSaldoAgendamento() //PRODUTO KIT
            semSaldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            cy.wait(400)
            trocarFilialFaturamento()
            clicarAdicionarProduto()
            cy.wait(500)
            avancarParaTransportadora()
            cy.wait(12000)
            modalInconsRotaTransp() //TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(7000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(7000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(10000)
        })

        it('Vender um produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)      
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            kitVolumes() //PRODUTO KIT
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(200)    
            escolherVoltagemProduto()
            cy.wait(400)
            clicarAdicionarProduto()
            cy.wait(500)
            avancarParaTransportadora()
            cy.wait(12000)
            modalInconsRotaTransp() //TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(7000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(7000)
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
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(12000)
            modalInconsRotaTransp() //TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(7000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(7000)
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
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
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
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(8000)
        pedidoGerado()
      });
})