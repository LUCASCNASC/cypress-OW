import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiroEntregaFutNFe, prdSegundoEntregaFutNFe } from '../../../support/para_pedidos_NFe/NFe_prd_entrega_futura.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoEntregaFuturaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoEntregaFuturaNFe()
        clienteComRota()
        prdPrimeiroEntregaFutNFe() //PESQUISA PRODUTO
        saldodisponivel()
        escolherProdutoPesquisa() //ESCOLHER PRODUTO
    })

    context('Sem entrega/ processo 9862 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //FINAL PEDIDO
            pedidoGerado()
        })
        
        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA PRODUTO
            prdSegundoEntregaFutNFe() //PESQUISA PRODUTO - SEGUNDO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO - SEGUNDO
            clicarVoltagemProduto() //VOLTAGEM - SEGUNDO
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS  - SEGUNDO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal() 
            botaoFinalizarPedido() //FINAL PEDIDO
            pedidoGerado()
        })
    })
    
    context('Com entrega/ processo 9862 - caminho feliz', () => {

        it('3. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //FINAL PEDIDO
            pedidoGerado()
        })    
        
        it('4. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            prdSegundoEntregaFutNFe() //PESQUISA PRODUTO - SEGUNDO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO - SEGUNDO
            clicarVoltagemProduto() //VOLTAGEM - SEGUNDO
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS - SEGUNDO
            okServicosVinculados()
            avancarParaTransportadora() //TRANSPORTADORA
            avancarParcelasEntrega() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal() 
            botaoFinalizarPedido() //FINAL PEDIDO
            pedidoGerado()
        })  
    })
})