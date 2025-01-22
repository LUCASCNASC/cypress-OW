import { saldodisponivel, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiroNFCe, produtoNormalSegundoNFCe, escolherProdutoPesquisaNormalPrimeiroNFCe, escolherVoltagemProdutoNormalPrimeiroNFCe, 
         escolherProdutoPesquisaNormalSegundoNFCe, escolherVoltagemProdutoNormalSegundoNFCe, clicarAddProdutoNormalPrimeiroNFCe, 
         clicarAddProdutoNormalSegundoNFCe } from '../../../support/para_pedidos_NFCe/apenasNFCe_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento,
         escolherDuasParcelaPagamento, escolherEntradaFormaPagamento, clicarGerarPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFCe()
        clienteComRota()
        cy.wait(500)
        produtoNormalPrimeiroNFCe()
        saldodisponivel()
        escolherProdutoPesquisaNormalPrimeiroNFCe()
    })

    context('Com frete/ processo 9890 - caminho feliz', () => {

        it('4-Venda: produto 1860 0 0 - (Venda local de produto com saldo - com entrega)', () => {
                      
            escolherVoltagemProdutoNormalPrimeiroNFCe() //PRODUTO
            clicarAddProdutoNormalPrimeiroNFCe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
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

        it('5-Venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
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

        it('6-Venda: produto 1860 0 0 - (Pedido de venda com entrega. Com Entrada + parcelamento.)', () => {
                      
            escolherVoltagemProdutoNormalPrimeiroNFCe() //PRODUTO
            clicarAddProdutoNormalPrimeiroNFCe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            escolherEntradaFormaPagamento() //GERAR PARCELAS
            clicarGerarPagamento()
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(3000)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})