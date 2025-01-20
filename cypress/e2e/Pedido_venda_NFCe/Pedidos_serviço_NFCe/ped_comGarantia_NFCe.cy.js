import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, escolherVoltagemProduto, clicarAdicionarProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiroNCFe, produtoNormalSegundoNCFe } from '../../../support/para_pedidos_NFCe/apenasNFCe_produtos_pedidos.js';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';
import { pegarAPICidade, esperarAPICidade } from '../../../support/para_pedidos/apenas_APIs.js';

describe('Gerar pedidos com Garantia', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFCe()
        clienteComRota()
        cy.wait(500)
        produtoNormalPrimeiroNCFe()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
        escolherVoltagemProduto() //PRODUTO
        clicarAdicionarProduto()
        cy.wait(500)
        modalServicosVinculados()
    })   

    context('Com entrega/processo 9890 - caminho feliz', () => {

        it('7-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('8-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('9-Pedido de venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('10-Pedido de venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('11-Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('12-Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
        })
    })

    afterEach(() => {
        botaoGerarParcelas() //GERAR PARCELAS
        carregandoFormaPagamento()
        cy.wait(3000)
        escolherFormaPagamentoPrincipal()
        cy.wait(3000)
        escolherDuasParcelaPagamento()
        cy.wait(400)
        avancarFinal()
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido() 
        cy.wait(9000)
        pedidoGerado()
      });
})