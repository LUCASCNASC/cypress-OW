import { saldodisponivel, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiroFinanBaixaNFe, prdSegundoFinanBaixaNFe, escolherPesqPrdPrimeiroFinanBaixaNFe, escolherPesqPrdSegundoFinanBaixaNFe,
         clicarVoltPrdPrimeiroFinanBaixaNFe, clicarVoltPrdSegundoFinanBaixaNFe, addPrdPrimeiroFinanBaixaNFe, addPrdSegundoFinanBaixaNFe } from '../../../support/para_pedidos_NFe/NFe_prd_financeiro_baixa.js'
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoFinanceiroBaixaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin()
        cy.tituloPagina()
        processoFinanceiroBaixaNFe()
        clienteComRota()
        cy.wait(500)
        prdPrimeiroFinanBaixaNFe()
        saldodisponivel()
        escolherPesqPrdPrimeiroFinanBaixaNFe()
    })
  
    context('Sem entrega/ processo 9863 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltPrdPrimeiroFinanBaixaNFe() //PRODUTO
            addPrdPrimeiroFinanBaixaNFe()
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
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltPrdPrimeiroFinanBaixaNFe() //PRODUTO
            addPrdPrimeiroFinanBaixaNFe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            prdSegundoFinanBaixaNFe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherPesqPrdSegundoFinanBaixaNFe()
            clicarVoltPrdSegundoFinanBaixaNFe()
            addPrdSegundoFinanBaixaNFe()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
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
    
    context('Com entrega/ processo 9863 - caminho feliz', () => {

        it('3. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltPrdPrimeiroFinanBaixaNFe() //PRODUTO
            addPrdPrimeiroFinanBaixaNFe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
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

        it('4. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltPrdPrimeiroFinanBaixaNFe() //PRODUTO
            addPrdPrimeiroFinanBaixaNFe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            prdSegundoFinanBaixaNFe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherPesqPrdSegundoFinanBaixaNFe()
            clicarVoltPrdSegundoFinanBaixaNFe()
            addPrdSegundoFinanBaixaNFe()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
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
})