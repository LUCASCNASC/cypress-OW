import { saldodisponivel, clienteComRota, selecionarPromoProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, escolherProdutoPesquisaNormalPrimeiro, escolherVoltagemProdutoNormalPrimeiro, 
         escolherProdutoPesquisaNormalSegundo, escolherVoltagemProdutoNormalSegundo, clicarAddProdutoNormalPrimeiro,
         clicarAddProdutoNormalSegundo } from '../../../support/para_pedidos_NFe/NFe_prd_normal.js';
import  { prdPromoPrazoParcelaPrest, escolherPesquisaProdutoPromoPrazoParcelaPrest, escolherVoltagemProdutoPromoPrazoParcelaPrest, 
         clicarAddProdutoPromoPrazoParcelaPrest } from '../../../support/para_pedidos_NFe/NFe_prd_promo_prestamista.js';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente, modalServicosVinculados, okServicosVinculados, 
         okSeguroPrestamista } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento,
         escolherRecebFuturoPrestamistaComJuros, escolherQuatroParcelaPagamento, escolherRecebPresentePrestamista, 
         escolherRecebFuturoPrestamistaSemJuros } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com serviço Prestamista', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
    })   

    context('Sem entrga / Produtos sem promoção - Prestamista com abatimento %', () => {

        it.skip('1. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo()
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaComJuros()
            cy.wait(3000)
            escolherQuatroParcelaPagamento()
        })

        it.skip('2. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo()
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestamista()
            cy.wait(3000)
            escolherQuatroParcelaPagamento()
        })
    })

    context('Com  entrga / Produtos sem promoção - Prestamista com abatimento %', () => {

        it.skip('3. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaSemJuros()
            cy.wait(3000)
            escolherQuatroParcelaPagamento()
        })

        it.skip('4. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, processo de inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaComJuros()
            cy.wait(3000)
            escolherQuatroParcelaPagamento()
        })

        it.skip('5. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(3000)
            escolherRecebFuturoPrestamistaSemJuros()
            escolherQuatroParcelaPagamento()
        })

        it.skip('6. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente sem juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestamista()
            cy.wait(3000)
            escolherQuatroParcelaPagamento()
        })
    })

    context('Sem entrga / Produtos com promoção - Prestamista com abatimento %', () => {

        it.only('1. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            saldodisponivel()
            escolherPesquisaProdutoPromoPrazoParcelaPrest()
            escolherVoltagemProdutoPromoPrazoParcelaPrest() //PRODUTO
            selecionarPromoProduto()
            // clicarAddProdutoPromoPrazoParcelaPrest()
            // modalServicosVinculados()
            // okServicosVinculados() //SERVIÇOS
            // tirarEntrega()
            // produtoNormalSegundo() //SEGUNDO PRODUTO
            // saldodisponivel()
            // escolherProdutoPesquisaNormalSegundo()
            // escolherVoltagemProdutoNormalSegundo()
            // clicarAddProdutoNormalSegundo()
            // modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            // okServicosVinculados()
            // tirarEntregaSegundo()
            // avancarParaParcelas()
            // botaoGerarParcelas() //GERAR PARCELAS
            // carregandoFormaPagamento()
            // escolherRecebFuturoPrestamistaComJuros()
            // cy.wait(3000)
            // escolherQuatroParcelaPagamento()
        })
    })

    // afterEach(() => {
    //     okSeguroPrestamista()
    //     avancarFinal()
    //     botaoFinalizarPedido() //RESUMO
    //     pedidoGerado()
    //   });
})