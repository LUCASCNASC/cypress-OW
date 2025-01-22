import { saldodisponivel, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiroNFCe, produtoNormalSegundoNFCe, escolherProdutoPesquisaNormalPrimeiroNFCe, escolherVoltagemProdutoNormalPrimeiroNFCe, 
         escolherProdutoPesquisaNormalSegundoNFCe, escolherVoltagemProdutoNormalSegundoNFCe, clicarAddProdutoNormalPrimeiroNFCe,
         clicarAddProdutoNormalSegundoNFCe } from '../../../support/para_pedidos_NFCe/apenasNFCe_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoEntregaFuturaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoEntregaFuturaNFCe()
        clienteComRota()
        cy.wait(500)
        produtoNormalPrimeiroNFCe()
        saldodisponivel()
        escolherProdutoPesquisaNormalPrimeiroNFCe()
    })
    
    context('Com frete/ processo 9862 - caminho feliz', () => {

        it('3-Pedido de venda: produto 1860 0 0', () => {
                      
            escolherVoltagemProdutoNormalPrimeiroNFCe() //PRODUTO
            clicarAddProdutoNormalPrimeiroNFCe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
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
        
        it('4-Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProdutoNormalPrimeiroNFCe() //PRODUTO
            clicarAddProdutoNormalPrimeiroNFCe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            produtoNormalSegundoNFCe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundoNFCe()
            escolherVoltagemProdutoNormalSegundoNFCe()
            clicarAddProdutoNormalSegundoNFCe()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora() 
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
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

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})